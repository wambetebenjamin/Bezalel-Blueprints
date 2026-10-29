"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";
import { Wordmark } from "@/components/wordmark";
import { WhatsappIcon } from "@/components/icons";
import { footerLinks, whatsappLink, type FooterColumnKey } from "@/lib/site";

export function SiteFooter() {
  const { t, locale } = useLocale();
  const columns: FooterColumnKey[] = ["library", "explore", "legal"];

  return (
    <footer className="footer-shell">
      <div className="shell py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex rounded-[10px] bg-white/95 px-3 py-2">
              <Wordmark compact />
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/80">
              {t.meta.tagline}
            </p>
            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-white/60">
              {t.footer.independent}
            </p>
            <a
              href={whatsappLink(t.whatsapp.hello)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-white/15 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/25"
            >
              <WhatsappIcon width={18} height={18} />
              {t.common.whatsapp}
            </a>
          </div>

          {columns.map((key) => (
            <nav key={key} aria-label={t.footer[key]}>
              <h2 className="text-lg font-bold text-white">{t.footer[key]}</h2>
              <ul className="mt-2">
                {footerLinks[key].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <hr className="my-8 border-white/20" />

        <div className="flex flex-col gap-3 text-[13px] text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {t.meta.siteName}. {t.footer.rights}
          </p>
          <p>{t.footer.credits}</p>
        </div>
        <p className="mt-2 text-[13px] text-white/60">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
