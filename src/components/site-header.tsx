"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLocale } from "@/components/locale-provider";
import { Wordmark } from "@/components/wordmark";
import { primaryNav, utilityNav } from "@/lib/site";

export function SiteHeader() {
  const { t } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-[9000] border-b border-mist/70 bg-white/95 backdrop-blur">
      <div className="shell flex min-h-[72px] items-center justify-between gap-4 py-2">
        <Link
          href="/"
          className="flex min-h-11 items-center py-1"
          aria-label={`${t.meta.siteName}, ${t.meta.tagline}`}
        >
          <Wordmark />
        </Link>

        <nav aria-label={t.nav.primary} className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`inline-flex min-h-11 items-center rounded-[10px] px-3 text-[15px] font-semibold transition-colors ${
                isActive(item.href)
                  ? "bg-mist text-blue"
                  : "text-ink hover:bg-mist hover:text-blue"
              }`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
          <Link
            href="/saved"
            aria-current={isActive("/saved") ? "page" : undefined}
            className={`inline-flex min-h-11 items-center rounded-[10px] px-3 text-[15px] font-semibold transition-colors ${
              isActive("/saved")
                ? "bg-mist text-blue"
                : "text-ink hover:bg-mist hover:text-blue"
            }`}
          >
            {t.nav.saved}
          </Link>
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            {status === "authenticated" ? (
              <>
                <span className="max-w-[140px] truncate text-xs font-semibold text-slate-2">
                  {session.user?.email ?? t.nav.account}
                </span>
                <button
                  type="button"
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="inline-flex min-h-11 items-center rounded-[10px] px-3 text-[15px] font-semibold text-ink transition-colors hover:bg-mist hover:text-blue"
                >
                  {t.nav.signOut}
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={() => signIn(undefined, { callbackUrl: "/saved" })}
                className="inline-flex min-h-11 items-center rounded-[10px] px-3 text-[15px] font-semibold text-ink transition-colors hover:bg-mist hover:text-blue"
              >
                {t.nav.signIn}
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[10px] text-ink transition-colors hover:bg-mist lg:hidden"
          >
            <MenuIcon width={26} height={26} />
            <span className="sr-only">{t.nav.openMenu}</span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[9500] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-night/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal={open}
          aria-label={t.nav.primary}
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-[320px] flex-col gap-1 overflow-y-auto panel-gradient p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between pb-4">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">
              {t.nav.primary}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[6px] bg-white/15 text-white"
            >
              <CloseIcon width={22} height={22} />
              <span className="sr-only">{t.nav.closeMenu}</span>
            </button>
          </div>

          <Link
            href="/"
            className="flex min-h-12 items-center border-t border-white/15 text-lg font-semibold text-white"
          >
            {t.nav.home}
          </Link>
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-12 items-center border-t border-white/15 text-lg font-semibold text-white"
            >
              {t.nav[item.key]}
            </Link>
          ))}
          {utilityNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-12 items-center border-t border-white/15 text-lg font-semibold text-white"
            >
              {t.nav[item.key]}
            </Link>
          ))}

          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/15 pt-5">
            <LanguageSwitcher onDark />
            {status === "authenticated" ? (
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="inline-flex min-h-11 items-center rounded-[10px] bg-white/15 px-4 text-sm font-semibold text-white"
              >
                {t.nav.signOut}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => signIn(undefined, { callbackUrl: "/saved" })}
                className="inline-flex min-h-11 items-center rounded-[10px] bg-white/15 px-4 text-sm font-semibold text-white"
              >
                {t.nav.signIn}
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
