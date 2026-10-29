"use client";

import Image from "next/image";
import Link from "next/link";
import { BlueprintCard } from "@/components/blueprint-card";
import { categoryIcons, ArrowIcon, CheckIcon, WarningIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/components/locale-provider";
import { featuredBlueprints } from "@/lib/blueprints";
import { categories } from "@/lib/site";
import { whatsappLink } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

export default function HomePage() {
  const { t, locale } = useLocale();
  const featured = featuredBlueprints(3);
  const stats = [
    { value: "9", label: t.homeStats.blueprints },
    { value: "6", label: t.homeStats.areas },
    { value: "3", label: t.homeStats.languages },
    { value: "5", label: t.homeStats.countries },
  ];

  return (
    <>
      <section
        className="hero-banner"
        style={{ backgroundImage: "url(/images/home-hero.jpg)" }}
        aria-label={t.home.heroTitle}
      >
        <div className="shell pb-20 pt-16 md:pb-28 md:pt-24">
          <Reveal animation="fadeInUp">
            <p className="eyebrow text-white/75">{t.home.heroEyebrow}</p>
            <h1 className="h-display mt-4 max-w-3xl">{t.home.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-white/85 md:text-[20px] md:leading-[1.9]">
              {t.home.heroText}
            </p>
          </Reveal>

          <Reveal animation="fadeInUp" delay={120} className="mt-8 flex flex-wrap gap-3">
            <Link href="/blueprints" className="btn btn-default">
              <span className="btn-text inline-flex items-center gap-2">
                {t.home.heroPrimary}
                <ArrowIcon width={18} height={18} />
              </span>
            </Link>
            <a
              href={whatsappLink(t.whatsapp.hello)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              <span className="btn-text">{t.home.heroSecondary}</span>
            </a>
          </Reveal>

          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/20 pt-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-display text-3xl font-extrabold text-white">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[13px] uppercase tracking-wide text-white/70">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-grediunt py-70" aria-labelledby="why-title">
        <div className="shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal animation="fadeInLeft">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/home-make.jpg"
                alt={t.home.whyImageAlt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal animation="fadeInRight" delay={100}>
            <p className="eyebrow">{t.home.whyEyebrow}</p>
            <h2 id="why-title" className="section-title mt-3">
              {t.home.whyTitle}
            </h2>
            <p className="section-lead mt-4">{t.home.whyLead}</p>

            <h3 className="mt-8 font-display text-lg font-bold text-ink">
              {t.home.whyPointsTitle}
            </h3>
            <ul className="list-check mt-3">
              {t.home.whyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-70" aria-labelledby="featured-title">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.featuredEyebrow}
              title={t.home.featuredTitle}
              lead={t.home.featuredLead}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((blueprint, index) => (
              <Reveal key={blueprint.slug} delay={index * 90}>
                <BlueprintCard blueprint={blueprint} priority={index === 0} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/blueprints" className="btn btn-default btn-wide">
              <span className="btn-text inline-flex items-center gap-2">
                {t.common.browseLibrary}
                <ArrowIcon width={18} height={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-grediunts py-70" aria-labelledby="how-title">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={t.home.howEyebrow}
              title={t.home.howTitle}
              lead={t.home.howLead}
            />
          </Reveal>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.howSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 80} as="li">
                <div className="service-card h-full bg-white">
                  <span className="icon-badge font-display text-lg font-extrabold">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-70" aria-labelledby="areas-title">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow={t.categories.eyebrow}
              title={t.categories.title}
              lead={t.categories.lead}
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = categoryIcons[category.icon];
              return (
                <Reveal key={category.id} delay={index * 60}>
                  <Link
                    href={`/blueprints?category=${category.id}`}
                    className="service-card card-shadow flex h-full items-start gap-4 bg-white"
                  >
                    <span className="icon-badge shrink-0">
                      <Icon width={26} height={26} />
                    </span>
                    <span>
                      <span className="block font-display text-lg font-bold text-ink">
                        {category.name[locale as Locale]}
                      </span>
                      <span className="mt-1 block text-[14px] leading-relaxed text-body">
                        {category.summary[locale as Locale]}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-grediunt py-70" aria-labelledby="cta-title">
        <div className="shell">
          <Reveal>
            <div className="bg-new px-6 py-10 md:px-12 md:py-14">
              <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
                <div>
                  <h2 id="cta-title" className="section-title">
                    {t.home.ctaTitle}
                  </h2>
                  <p className="section-lead mt-3">{t.home.ctaText}</p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link href="/contribute" className="btn btn-default">
                    <span className="btn-text">{t.home.ctaPrimary}</span>
                  </Link>
                  <a
                    href={whatsappLink(t.whatsapp.hello)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    <span className="btn-text">{t.home.ctaSecondary}</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-12" aria-label={t.common.beforeYouStart}>
        <div className="shell">
          <Reveal>
            <div className="flex flex-col gap-4 rounded-[20px] border border-mist bg-wash p-6 md:flex-row md:items-start md:gap-6">
              <span className="icon-badge shrink-0">
                <WarningIcon width={26} height={26} />
              </span>
              <div>
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
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
