"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronIcon, LanguageIcon } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";
import { localeNames, locales, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ onDark = false }: { onDark?: boolean }) {
  const { locale, setLocale, t } = useLocale();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t.nav.languageLabel}
        className={`inline-flex min-h-11 items-center gap-2 rounded-[10px] px-3 py-2 text-sm font-semibold transition-colors ${
          onDark
            ? "text-white/85 hover:bg-white/10 hover:text-white"
            : "text-ink hover:bg-mist"
        }`}
      >
        <LanguageIcon width={18} height={18} />
        <span className="uppercase">{locale}</span>
        <ChevronIcon
          width={16}
          height={16}
          className={`transition-transform ${open ? "rotate-90" : ""}`}
        />
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={t.nav.languageLabel}
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-[10px] border border-mist bg-white py-1 shadow-card"
        >
          {locales.map((code: Locale) => (
            <li key={code} role="option" aria-selected={code === locale}>
              <button
                type="button"
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                }}
                className={`flex min-h-11 w-full items-center justify-between px-4 text-left text-sm font-semibold transition-colors hover:bg-mist ${
                  code === locale ? "text-blue" : "text-ink"
                }`}
              >
                {localeNames[code]}
                {code === locale ? <span aria-hidden="true">•</span> : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
