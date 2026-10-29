"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useLocale } from "@/components/locale-provider";
import { CONSENT_COOKIE } from "@/lib/i18n";

export function CookieConsent() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = Cookies.get(CONSENT_COOKIE);
    if (!existing) setVisible(true);
  }, []);

  const decide = (value: "accepted" | "declined") => {
    Cookies.set(CONSENT_COOKIE, value, { expires: 180, sameSite: "Lax", path: "/" });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={t.cookie.title}
      className="fixed inset-x-0 bottom-0 z-[9980] border-t border-mist bg-white px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4 shadow-[0_-10px_30px_rgba(11,13,37,0.14)]"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="md:pr-6">
          <h2 className="text-base font-bold text-ink">{t.cookie.title}</h2>
          <p className="mt-1 text-sm leading-relaxed text-body">{t.cookie.text}</p>
          <p className="mt-1 text-[13px] text-slate-2">
            <Link href="/privacy" className="underline hover:text-blue">
              {t.cookie.policy}
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="btn btn-ghost btn-small"
          >
            <span className="btn-text">{t.cookie.decline}</span>
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="btn btn-default btn-small"
          >
            <span className="btn-text">{t.cookie.accept}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
