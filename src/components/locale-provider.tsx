"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import Cookies from "js-cookie";
import {
  CONSENT_COOKIE,
  LOCALE_COOKIE,
  localeHtmlLang,
  messages,
  type Locale,
  type Messages,
} from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  t: Messages;
  setLocale: (next: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = localeHtmlLang[locale];
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    const consent = Cookies.get(CONSENT_COOKIE);
    Cookies.set(LOCALE_COOKIE, next, {
      expires: 365,
      sameSite: "Lax",
      ...(consent === "accepted" ? {} : {}),
    });
    document.documentElement.lang = localeHtmlLang[next];
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, t: messages[locale], setLocale }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return ctx;
}

export function useT() {
  return useLocale().t;
}
