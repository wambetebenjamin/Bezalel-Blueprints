"use client";

import { useLocale } from "@/components/locale-provider";
import type { ReactNode } from "react";

export function PageBanner({
  image,
  eyebrow,
  title,
  lead,
  children,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  const { t } = useLocale();

  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${image})` }}
      aria-label={title}
    >
      <div className="shell py-16 md:py-24">
        <p className="eyebrow text-white/70">{eyebrow ?? t.common.independent}</p>
        <h1 className="h-page mt-3 max-w-3xl">{title}</h1>
        {lead ? (
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-white/85">{lead}</p>
        ) : null}
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}
