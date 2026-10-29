"use client";

import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";
import { LocaleProvider } from "@/components/locale-provider";
import { SavedListProvider } from "@/components/saved-list-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import type { Locale } from "@/lib/i18n";

export function Providers({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: ReactNode;
}) {
  return (
    <SessionProvider>
      <LocaleProvider initialLocale={initialLocale}>
        <SavedListProvider>
          <SmoothScroll />
          {children}
        </SavedListProvider>
      </LocaleProvider>
    </SessionProvider>
  );
}
