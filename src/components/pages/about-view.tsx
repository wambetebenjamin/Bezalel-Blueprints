"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, WarningIcon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/components/locale-provider";

export function AboutView() {
  const { t } = useLocale();

  return (
    <>
      <PageBanner
        image="/images/about-hero.jpg"
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        lead={t.about.lead}
      />

      <section className="bg-white py-70" aria-labelledby="story-title">
        <div className="shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal animation="fadeInLeft">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/about-community.jpg"
                alt={t.about.storyTitle}
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal animation="fadeInRight" delay={100}>
            <h2 id="story-title" className="section-title">
              {t.about.storyTitle}
            </h2>
            <p className="section-lead mt-4">{t.about.storyText}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-grediunt py-70" aria-labelledby="principles-title">
        <div className="shell">
          <h2 id="principles-title" className="section-title">
            {t.about.principlesTitle}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 70}>
                <div className="service-card h-full">
                  <span className="icon-badge">
                    <ArrowIcon width={24} height={24} />
                  </span>
                  <h3 className="unify mt-4">{principle.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.85] text-body">{principle.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-70" aria-labelledby="independent-title">
        <div className="shell">
          <Reveal>
            <div className="rounded-[20px] border border-mist bg-wash p-6 md:p-8">
              <div className="flex items-start gap-3">
                <span className="icon-badge shrink-0">
                  <WarningIcon width={24} height={24} />
                </span>
                <div>
                  <h2 id="independent-title" className="font-display text-2xl font-bold text-ink">
                    {t.about.independentTitle}
                  </h2>
                  <p className="mt-2 text-[16px] leading-[1.9] text-body">
                    {t.about.independentText}
                  </p>
                  <Link
                    href="/license"
                    className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-blue underline"
                  >
                    <ArrowIcon width={18} height={18} />
                    {t.nav.license}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-grediunts py-70" aria-labelledby="community-title">
        <div className="shell grid items-center gap-10 lg:grid-cols-2">
          <Reveal animation="fadeInLeft">
            <h2 id="community-title" className="section-title">
              {t.about.communityTitle}
            </h2>
            <p className="section-lead mt-4">{t.about.communityText}</p>
            <Link href="/contribute" className="btn btn-default mt-6">
              <span className="btn-text inline-flex items-center gap-2">
                {t.home.ctaPrimary}
                <ArrowIcon width={18} height={18} />
              </span>
            </Link>
          </Reveal>
          <Reveal animation="fadeInRight" delay={100}>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/bp-solar-tech.jpg"
                alt={t.about.communityTitle}
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell">
          <SectionHeading
            eyebrow={t.home.ctaTitle}
            title={t.home.ctaText}
            lead={t.common.disclaimer}
          >
            <Link href="/contact" className="btn btn-default">
              <span className="btn-text inline-flex items-center gap-2">
                {t.nav.contact}
                <ArrowIcon width={18} height={18} />
              </span>
            </Link>
          </SectionHeading>
        </div>
      </section>
    </>
  );
}
