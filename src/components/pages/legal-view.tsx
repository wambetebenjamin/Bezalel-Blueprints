"use client";

import { ArrowIcon, WarningIcon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";

export function LegalView({ kind }: { kind: "privacy" | "terms" }) {
  const { t } = useLocale();
  const content = t[kind];

  return (
    <>
      <PageBanner
        image={kind === "privacy" ? "/images/rural-village.jpg" : "/images/urban-street.jpg"}
        eyebrow={t.footer.legal}
        title={content.title}
        lead={content.lead}
      />

      <section className="bg-white py-70">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-start">
          <Reveal>
            <nav aria-label={content.title} className="lg:sticky lg:top-24">
              <p className="field-label">{content.lastUpdated}</p>
              <ul className="mt-3 space-y-1">
                {content.sections.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${slugify(section.heading)}`}
                      className="inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-body transition-colors hover:text-blue"
                    >
                      <ArrowIcon width={14} height={14} />
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <div className="min-w-0">
            {content.sections.map((section, index) => (
              <Reveal key={section.heading} delay={Math.min(index, 4) * 60}>
                <article id={slugify(section.heading)} className="scroll-mt-28 pb-8">
                  <h2 className="font-display text-2xl font-bold text-ink">
                    {section.heading}
                  </h2>
                  <p className="mt-3 text-[16px] leading-[1.9] text-body">{section.text}</p>
                </article>
              </Reveal>
            ))}

            <Reveal>
              <div className="rounded-[20px] border border-mist bg-wash p-6">
                <div className="flex items-start gap-3">
                  <span className="icon-badge shrink-0">
                    <WarningIcon width={24} height={24} />
                  </span>
                  <p className="text-[14px] leading-[1.85] text-body">{t.common.disclaimer}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}
