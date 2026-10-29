import { NextResponse } from "next/server";
import {
  recaptchaConfigured,
  verifyRecaptchaV2,
  verifyRecaptchaV3,
} from "@/lib/recaptcha";

type Payload = {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
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
  const message = asString(body.message, 4000);

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "bad_email" }, { status: 400 });
  }

  const token = asString(body.token, 2000);
  const version = body.version === "v2" ? "v2" : "v3";

  if (recaptchaConfigured()) {
    const result =
      version === "v2"
        ? await verifyRecaptchaV2(token)
        : await verifyRecaptchaV3(token, "contact");

    if (!result.ok) {
      return NextResponse.json(
        { ok: false, error: result.reason, fallback: result.fallback },
        { status: 200 },
      );
    }
  }

  console.info("[contact]", {
    name,
    email,
    topic: asString(body.topic, 60),
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
