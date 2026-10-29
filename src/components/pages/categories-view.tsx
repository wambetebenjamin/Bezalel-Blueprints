"use client";

import Image from "next/image";
import Link from "next/link";
import { categoryIcons, ArrowIcon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/components/locale-provider";
import { blueprints } from "@/lib/blueprints";
import { categories } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

export function CategoriesView() {
  const { t, locale } = useLocale();

  return (
    <>
      <PageBanner
        image="/images/rural-village.jpg"
        eyebrow={t.categories.eyebrow}
        title={t.categories.title}
        lead={t.categories.lead}
      />

      <section className="bg-white py-70">
        <div className="shell space-y-12">
          {categories.map((category, index) => {
            const Icon = categoryIcons[category.icon];
            const count = blueprints.filter((b) => b.category === category.id).length;
            const flipped = index % 2 === 1;

            return (
              <Reveal key={category.id} delay={Math.min(index, 4) * 60}>
                <article
                  className={`grid gap-8 rounded-[20px] border border-mist p-6 md:items-center md:gap-10 md:p-8 lg:grid-cols-2 ${
                    flipped ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden rounded-[10px]">
                    <Image
                      src={category.image}
                      alt={category.summary[locale as Locale]}
                      fill
                      sizes="(max-width: 1023px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="icon-badge">
                        <Icon width={26} height={26} />
                      </span>
                      <h2 className="font-display text-2xl font-bold text-ink">
                        {category.name[locale as Locale]}
                      </h2>
                    </div>

                    <p className="mt-4 text-[16px] leading-[1.9] text-body">
                      {category.summary[locale as Locale]}
                    </p>

                    <h3 className="mt-6 font-display text-base font-bold text-ink">
                      {t.categories.useNotes}
                    </h3>
                    <ul className="list-check mt-3">
                      {category.useNotes[locale as Locale].map((note) => (
                        <li key={note.slice(0, 50)}>{note}</li>
                      ))}
                    </ul>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/blueprints?category=${category.id}`}
                        className="btn btn-default btn-small"
                      >
                        <span className="btn-text inline-flex items-center gap-2">
                          {t.categories.startHere}
                          <ArrowIcon width={16} height={16} />
                        </span>
                      </Link>
                      <span className="text-[13px] font-bold uppercase tracking-wide text-slate">
                        {count} {t.categories.countLabel}
                      </span>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-grediunt py-70">
        <div className="shell grid gap-6 lg:grid-cols-2">
          {[
            {
              image: "/images/rural-village.jpg",
              title: t.categories.ruralTitle,
              text: t.categories.ruralText,
            },
            {
              image: "/images/urban-street.jpg",
              title: t.categories.urbanTitle,
              text: t.categories.urbanText,
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="h-full overflow-hidden rounded-[20px] bg-white">
                <div className="relative aspect-16/9 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.9] text-body">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="shell">
          <SectionHeading
            eyebrow={t.home.ctaTitle}
            title={t.meta.tagline}
            lead={t.home.ctaText}
          >
            <Link href="/contribute" className="btn btn-default">
              <span className="btn-text">{t.home.ctaPrimary}</span>
            </Link>
          </SectionHeading>
        </div>
      </section>
    </>
  );
}
