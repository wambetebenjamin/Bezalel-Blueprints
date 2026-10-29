"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, WarningIcon, WhatsappIcon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import { whatsappLink } from "@/lib/site";

export function SafetyView() {
  const { t } = useLocale();

  const cards = [
    { title: t.safety.medicalTitle, text: t.safety.medicalText },
    { title: t.safety.electricalTitle, text: t.safety.electricalText },
    { title: t.safety.waterTitle, text: t.safety.waterText },
  ];

  return (
    <>
      <PageBanner
        image="/images/safety-hero.jpg"
        eyebrow={t.safety.eyebrow}
        title={t.safety.title}
        lead={t.safety.lead}
      />

      <section className="bg-white py-70" aria-labelledby="rules-title">
        <div className="shell grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <Reveal>
            <h2 id="rules-title" className="section-title">
              {t.safety.rulesTitle}
            </h2>
            <ul className="list-check mt-6">
              {t.safety.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal animation="fadeInRight" delay={100}>
            <div className="rounded-[20px] border border-mist bg-wash p-6 lg:sticky lg:top-24">
              <div className="flex items-start gap-3">
                <span className="icon-badge shrink-0">
                  <WarningIcon width={24} height={24} />
                </span>
                <p className="text-[14px] leading-[1.85] text-body">{t.common.disclaimer}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-grediunt py-70" aria-labelledby="hazards-title">
        <div className="shell">
          <h2 id="hazards-title" className="section-title">
            {t.safety.rulesTitle}
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 80}>
                <article className="h-full rounded-[20px] bg-white p-6">
                  <h3 className="font-display text-xl font-bold text-ink">{card.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.9] text-body">{card.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-70" aria-labelledby="report-title">
        <div className="shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal animation="fadeInLeft">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/build-workshop.jpg"
                alt={t.safety.reportTitle}
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal animation="fadeInRight" delay={100}>
            <h2 id="report-title" className="section-title">
              {t.safety.reportTitle}
            </h2>
            <p className="section-lead mt-4">{t.safety.reportText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink(t.safety.reportTitle)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-[#25d366] px-5 text-sm font-bold text-white"
              >
                <WhatsappIcon width={18} height={18} />
                {t.common.whatsapp}
              </a>
              <Link href="/contact" className="btn btn-default">
                <span className="btn-text inline-flex items-center gap-2">
                  {t.nav.contact}
                  <ArrowIcon width={18} height={18} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
