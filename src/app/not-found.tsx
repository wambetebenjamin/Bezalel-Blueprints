"use client";

import Link from "next/link";
import { useLocale } from "@/components/locale-provider";

export default function NotFound() {
  const { t } = useLocale();

  return (
    <div className="bg-grediunt py-24">
      <div className="shell max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="section-title mt-3">{t.common.pageNotFound}</h1>
        <p className="section-lead mt-4">{t.common.pageNotFoundText}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/blueprints" className="btn btn-default">
            <span className="btn-text">{t.common.browseLibrary}</span>
          </Link>
          <Link href="/" className="btn btn-ghost">
            <span className="btn-text">{t.common.backHome}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
