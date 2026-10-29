type VerifyResponse = {
  success: boolean;
  score?: number;
  action?: string;
  "error-codes"?: string[];
};

const ENDPOINT = "https://www.google.com/recaptcha/api/siteverify";

export type RecaptchaOutcome =
  | { ok: true; score: number }
  | { ok: false; reason: string; fallback: boolean };

export function recaptchaConfigured() {
  return Boolean(process.env.RECAPTCHA_SECRET_KEY);
}

function minScore() {
  const raw = process.env.RECAPTCHA_MIN_SCORE;
  const parsed = raw ? Number.parseFloat(raw) : 0.5;
  return Number.isFinite(parsed) ? parsed : 0.5;
}

async function postToGoogle(body: URLSearchParams) {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });
  if (!response.ok) throw new Error("recaptcha_unreachable");
  return (await response.json()) as VerifyResponse;
}

/**
 * reCAPTCHA v3. Returns fallback true when the score is below the threshold, so
 * the client can show the v2 checkbox instead of blocking the person outright.
 */
export async function verifyRecaptchaV3(
  token: string,
  expectedAction: string,
): Promise<RecaptchaOutcome> {
  if (!recaptchaConfigured()) return { ok: true, score: 1 };
  if (!token) return { ok: false, reason: "missing_token", fallback: true };

  try {
    const body = new URLSearchParams();
    body.set("secret", process.env.RECAPTCHA_SECRET_KEY ?? "");
    body.set("response", token);
    const data = await postToGoogle(body);

    if (!data.success) {
      return { ok: false, reason: data["error-codes"]?.join(",") ?? "failed", fallback: true };
    }
    if (data.action && expectedAction && data.action !== expectedAction) {
      return { ok: false, reason: "action_mismatch", fallback: true };
    }
    const score = typeof data.score === "number" ? data.score : 0;
    if (score < minScore()) {
      return { ok: false, reason: "low_score", fallback: true };
    }
    return { ok: true, score };
  } catch {
    return { ok: false, reason: "unreachable", fallback: true };
  }
}

/** reCAPTCHA v2 checkbox, used as the fallback challenge. */
export async function verifyRecaptchaV2(token: string): Promise<RecaptchaOutcome> {
  const secret = process.env.RECAPTCHA_V2_SECRET_KEY ?? process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { ok: true, score: 1 };
  if (!token) return { ok: false, reason: "missing_token", fallback: true };

  try {
    const body = new URLSearchParams();
    body.set("secret", secret);
    body.set("response", token);
    const data = await postToGoogle(body);
    if (!data.success) {
      return { ok: false, reason: data["error-codes"]?.join(",") ?? "failed", fallback: true };
    }
    return { ok: true, score: 1 };
  } catch {
    return { ok: false, reason: "unreachable", fallback: true };
  }
}
