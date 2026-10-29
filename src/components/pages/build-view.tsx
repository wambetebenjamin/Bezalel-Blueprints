"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowIcon, CheckIcon, WarningIcon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/components/locale-provider";
import { featuredBlueprints } from "@/lib/blueprints";
import type { Locale } from "@/lib/i18n";

const audiences = ["schools", "makerspaces", "soleInventors"] as const;
type Audience = (typeof audiences)[number];

export function BuildView() {
  const { t, locale } = useLocale();
  const [audience, setAudience] = useState<Audience>("schools");
  const starters = featuredBlueprints(3);

  const intro: Record<Audience, string> = {
    schools: t.build.schoolsIntro,
    makerspaces: t.build.makerspacesIntro,
    soleInventors: t.build.soleInventorsIntro,
  };

  const blueprintLinks: Record<Audience, { href: string; label: string }[]> = {
    schools: [
      { href: "/blueprints/school-science-kit-local-materials", label: "School science kit" },
      { href: "/blueprints/bucket-drip-irrigation-kit", label: "Bucket drip kit" },
      { href: "/blueprints/seed-dibber-and-marking-rope", label: "Seed dibber" },
    ],
    makerspaces: [
      { href: "/blueprints/ten-watt-solar-phone-charger", label: "Solar phone charger" },
      { href: "/blueprints/bicycle-cargo-trailer", label: "Bicycle cargo trailer" },
      { href: "/blueprints/solar-cabinet-dryer", label: "Solar cabinet dryer" },
    ],
    soleInventors: [
      { href: "/blueprints/ceramic-pot-water-filter", label: "Ceramic pot filter" },
      { href: "/blueprints/rainwater-gutter-and-first-flush", label: "Roof gutter" },
      { href: "/blueprints/adjustable-walking-frame-prototype", label: "Walking frame" },
    ],
  };

  return (
    <>
      <PageBanner
        image="/images/build-hero.jpg"
        eyebrow={t.build.eyebrow}
        title={t.build.title}
        lead={t.build.lead}
      />

      <section className="bg-white py-70" aria-labelledby="audience-title">
        <div className="shell">
          <p id="audience-title" className="field-label">
            {t.build.audienceLabel}
          </p>
          <div className="tab-menu mt-3" role="tablist" aria-label={t.build.audienceLabel}>
            {audiences.map((key) => (
              <button
                key={key}
                role="tab"
                type="button"
                aria-selected={audience === key}
                onClick={() => setAudience(key)}
                className="tab-menu-item"
              >
                {t.build[key]}
              </button>
            ))}
          </div>

          <Reveal className="mt-8">
            <div className="rounded-[20px] bg-mist p-6 md:p-8">
              <p className="max-w-3xl text-[17px] leading-[1.9] text-ink">{intro[audience]}</p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {blueprintLinks[audience].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-white px-4 text-sm font-bold text-ink transition-colors hover:text-blue"
                    >
                      <ArrowIcon width={16} height={16} />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-grediunt py-70" aria-labelledby="checklist-title">
        <div className="shell grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 id="checklist-title" className="section-title">
              {t.build.checklistTitle}
            </h2>
            <ul className="list-check mt-6">
              {t.build.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="section-title">{t.build.toolsTitle}</h2>
            <ul className="list-check mt-6">
              {t.build.tools.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-70" aria-labelledby="materials-title">
        <div className="shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal animation="fadeInLeft">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/materials-recycled.jpg"
                alt={t.build.materialsTitle}
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal animation="fadeInRight" delay={100}>
            <h2 id="materials-title" className="section-title">
              {t.build.materialsTitle}
            </h2>
            <p className="section-lead mt-4">{t.build.materialsText}</p>
            <div className="mt-6 flex items-start gap-3 rounded-[20px] bg-wash p-5">
              <span className="icon-badge shrink-0">
                <WarningIcon width={24} height={24} />
              </span>
              <p className="text-[14px] leading-[1.85] text-body">{t.common.disclaimer}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-grediunts py-70" aria-labelledby="women-title">
        <div className="shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal animation="fadeInLeft">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/women-mechanics.jpg"
                alt={t.build.womenTitle}
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal animation="fadeInRight" delay={100}>
            <h2 id="women-title" className="section-title">
              {t.build.womenTitle}
            </h2>
            <p className="section-lead mt-4">{t.build.womenText}</p>
            <Link href="/contribute" className="btn btn-default mt-6">
              <span className="btn-text inline-flex items-center gap-2">
                {t.home.ctaPrimary}
                <ArrowIcon width={18} height={18} />
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-70" aria-labelledby="starters-title">
        <div className="shell">
          <SectionHeading
            eyebrow={t.home.featuredEyebrow}
            title={t.home.featuredTitle}
            lead={t.home.featuredLead}
          />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-4">
            {starters.map((blueprint) => (
              <li key={blueprint.slug}>
                <Link
                  href={`/blueprints/${blueprint.slug}`}
                  className="flex min-h-16 items-center justify-between gap-4 rounded-[10px] border border-mist bg-white px-5 py-4 transition-shadow hover:shadow-card"
                >
                  <span className="flex items-start gap-3">
                    <CheckIcon width={20} height={20} className="mt-1 shrink-0 text-blue" />
                    <span>
                      <span className="block font-display font-bold text-ink">
                        {blueprint.title[locale as Locale]}
                      </span>
                      <span className="block text-[14px] text-body">
                        {blueprint.summary[locale as Locale]}
                      </span>
                    </span>
                  </span>
                  <ArrowIcon width={20} height={20} className="shrink-0 text-blue" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="shell">
          <Reveal>
            <div className="rounded-[20px] border border-mist bg-wash p-6">
              <p className="font-display text-base font-bold text-ink">
                {t.common.beforeYouStart}
              </p>
              <p className="mt-1 text-[15px] leading-relaxed text-body">
                {t.common.disclaimer}
              </p>
              <Link
                href="/safety"
                className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-blue underline"
              >
                <CheckIcon width={18} height={18} />
                {t.nav.safety}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
