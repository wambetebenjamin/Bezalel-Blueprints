import { NextResponse } from "next/server";
import {
  recaptchaConfigured,
  verifyRecaptchaV2,
  verifyRecaptchaV3,
} from "@/lib/recaptcha";

type Payload = {
  name?: unknown;
  email?: unknown;
  whatsapp?: unknown;
  title?: unknown;
  category?: unknown;
  skill?: unknown;
  summary?: unknown;
  materials?: unknown;
  steps?: unknown;
  safety?: unknown;
  location?: unknown;
  photos?: unknown;
  licence?: unknown;
  confirm?: unknown;
  token?: unknown;
  version?: unknown;
};

function asString(value: unknown, max = 4000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Payload | null;

  if (!body) {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  const name = asString(body.name, 120);
  const email = asString(body.email, 160);
  const designTitle = asString(body.title, 160);
  const summary = asString(body.summary, 600);
  const steps = asString(body.steps, 6000);
  const confirm = body.confirm === true;

  if (!name || !designTitle || !summary || !steps || !confirm) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "bad_email" }, { status: 400 });
  }

  const token = asString(body.token, 2000);
  const version = body.version === "v2" ? "v2" : "v3";

  if (recaptchaConfigured()) {
    const result =
      version === "v2"
        ? await verifyRecaptchaV2(token)
        : await verifyRecaptchaV3(token, "contribute");

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.reason, fallback: result.fallback },
        { status: 200 },
      );
    }
  }

  // No mail transport is configured for this release, so submissions are logged
  // for the review queue and acknowledged to the sender.
  console.info("[contribute]", {
    name,
    email,
    designTitle,
    category: asString(body.category, 40),
    skill: asString(body.skill, 40),
    location: asString(body.location, 120),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
