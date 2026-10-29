"use client";

import { useCallback, useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      ready?: (cb: () => void) => void;
      execute?: (siteKey: string, options: { action: string }) => Promise<string>;
      render?: (container: HTMLElement, options: Record<string, unknown>) => number;
      reset?: (id?: number) => void;
    };
    bbRecaptchaV2Ready?: boolean;
  }
}

const V3_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
const V2_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY ??
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
  "";

export const captchaEnabled = Boolean(V3_SITE_KEY);

function loadScript(src: string, id: string) {
  return new Promise<void>((resolve, reject) => {
    if (document.getElementById(id)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("recaptcha_script_failed"));
    document.head.appendChild(script);
  });
}

function loadV3() {
  if (!V3_SITE_KEY) return Promise.reject(new Error("no_v3_key"));
  return loadScript(
    `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(V3_SITE_KEY)}`,
    "bb-recaptcha-v3",
  );
}

function loadV2() {
  if (!V2_SITE_KEY) return Promise.reject(new Error("no_v2_key"));
  return loadScript(
    "https://www.google.com/recaptcha/api.js?onload=bbRecaptchaV2&render=explicit",
    "bb-recaptcha-v2",
  );
}

export function useRecaptcha(action: string) {
  const [challenge, setChallenge] = useState(false);
  const [v2Token, setV2Token] = useState<string | null>(null);
  const [scriptError, setScriptError] = useState(false);
  const widgetId = useRef<number | null>(null);

  const executeV3 = useCallback(async () => {
    try {
      await loadV3();
      const grecaptcha = window.grecaptcha;
      if (!grecaptcha?.execute) throw new Error("recaptcha_unavailable");
      await new Promise<void>((resolve) => {
        if (grecaptcha.ready) grecaptcha.ready(() => resolve());
        else resolve();
      });
      return await grecaptcha.execute(V3_SITE_KEY, { action });
    } catch {
      setScriptError(true);
      return null;
    }
  }, [action]);

  /** Returns null when no token could be produced and a challenge is required. */
  const getToken = useCallback(async (): Promise<{
    token: string;
    version: "v2" | "v3";
  } | null> => {
    if (!captchaEnabled) return null;

    if (challenge) {
      if (!v2Token) {
        setChallenge(true);
        return null;
      }
      return { token: v2Token, version: "v2" };
    }

    const token = await executeV3();
    if (!token) {
      setChallenge(true);
      return null;
    }
    return { token, version: "v3" };
  }, [challenge, executeV3, v2Token]);

  const requestChallenge = useCallback(() => {
    setV2Token(null);
    setChallenge(true);
  }, []);

  const reset = useCallback(() => {
    setV2Token(null);
    if (widgetId.current !== null && window.grecaptcha?.reset) {
      window.grecaptcha.reset(widgetId.current);
    }
  }, []);

  // Render the v2 checkbox once the challenge is requested.
  useEffect(() => {
    if (!challenge || !V2_SITE_KEY || scriptError) return;
    let cancelled = false;

    loadV2()
      .then(() => {
        if (cancelled) return;
        const grecaptcha = window.grecaptcha;
        const container = document.getElementById("bb-recaptcha-v2-slot");
        if (!grecaptcha?.render || !container) {
          setScriptError(true);
          return;
        }
        container.innerHTML = "";
        widgetId.current = grecaptcha.render(container, {
          sitekey: V2_SITE_KEY,
          theme: "light",
          callback: (token: string) => setV2Token(token),
          "expired-callback": () => setV2Token(null),
          "error-callback": () => setScriptError(true),
        });
      })
      .catch(() => setScriptError(true));

    return () => {
      cancelled = true;
    };
  }, [challenge, scriptError]);

  return {
    captchaEnabled,
    challenge,
    v2Token,
    scriptError,
    getToken,
    requestChallenge,
    reset,
  };
}

export function RecaptchaSlot({
  challenge,
  scriptError,
  message,
}: {
  challenge: boolean;
  scriptError: boolean;
  message: string;
}) {
  if (!captchaEnabled) return null;
  return (
    <div className={challenge ? "block" : "hidden"}>
      <div id="bb-recaptcha-v2-slot" className="my-3" />
      {scriptError ? <p className="form-note">{message}</p> : null}
    </div>
  );
}
