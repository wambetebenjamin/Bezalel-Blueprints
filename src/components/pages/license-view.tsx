"use client";

import Link from "next/link";
import { ArrowIcon, CheckIcon, WarningIcon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";

export function LicenseView() {
  const { t } = useLocale();

  const hardware = [
    { title: t.license.hardwareTitle, text: t.license.hardwareText },
    { title: t.license.contentTitle, text: t.license.contentText },
    { title: t.license.thirdPartyTitle, text: t.license.thirdPartyText },
    { title: t.license.attributionTitle, text: t.license.attributionText },
  ];

  return (
    <>
      <PageBanner
        image="/images/license-hero.jpg"
        eyebrow={t.license.eyebrow}
        title={t.license.title}
        lead={t.license.lead}
      />

      <section className="bg-white py-70" aria-labelledby="licences-title">
        <div className="shell grid gap-6 lg:grid-cols-2">
          {hardware.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="h-full rounded-[20px] border border-mist p-6">
                <div className="flex items-start gap-3">
                  <span className="icon-badge shrink-0">
                    <CheckIcon width={24} height={24} />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-bold text-ink">{item.title}</h2>
                    <p className="mt-2 text-[15px] leading-[1.9] text-body">{item.text}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-grediunt py-70" aria-labelledby="patent-title">
        <div className="shell">
          <h2 id="patent-title" className="section-title">
            {t.license.patentTitle}
          </h2>
          <p className="section-lead mt-4">{t.license.patentText}</p>

          <div className="mt-8 rounded-[20px] border border-mist bg-wash p-6">
            <div className="flex items-start gap-3">
              <span className="icon-badge shrink-0">
                <WarningIcon width={24} height={24} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {t.license.noWarrantyTitle}
                </h3>
                <p className="mt-1 text-[15px] leading-[1.9] text-body">
                  {t.license.noWarrantyText}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contribute" className="btn btn-default">
              <span className="btn-text inline-flex items-center gap-2">
                {t.home.ctaPrimary}
                <ArrowIcon width={18} height={18} />
              </span>
            </Link>
            <Link href="/safety" className="btn btn-ghost">
              <span className="btn-text">{t.nav.safety}</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell">
          <p className="mx-auto max-w-3xl text-center text-[15px] leading-[1.9] text-body">
            {t.common.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
