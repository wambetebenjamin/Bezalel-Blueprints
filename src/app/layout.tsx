import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import type { ReactNode } from "react";
import "./globals.css";
import { CookieConsent } from "@/components/cookie-consent";
import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VoiceTour } from "@/components/voice-tour";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { LOCALE_COOKIE, messages, resolveLocale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bezalel Blueprints: open frugal invention blueprints",
    template: "%s | Bezalel Blueprints",
  },
  description: messages.en.meta.description,
  applicationName: "Bezalel Blueprints",
  keywords: [
    "open hardware",
    "frugal innovation",
    "blueprints",
    "local materials",
    "Africa",
    "solar",
    "water",
    "agriculture",
    "school kits",
    "mobility aids",
  ],
  openGraph: {
    type: "website",
    siteName: "Bezalel Blueprints",
    title: "Bezalel Blueprints: open frugal invention blueprints",
    description: messages.en.meta.description,
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: "#265db9",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const locale = resolveLocale(cookieStore.get(LOCALE_COOKIE)?.value);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap"
        />
        <noscript>
          {/* Without JavaScript the reveal animations would hide content. */}
          <style>{`[data-reveal="pending"]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <Providers initialLocale={locale}>
          <a href="#main" className="skip-link">
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <WhatsAppFab />
          <VoiceTour />
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
