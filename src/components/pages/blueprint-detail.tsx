"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BlueprintCard } from "@/components/blueprint-card";
import {
  ArrowIcon,
  BookmarkIcon,
  CheckIcon,
  WarningIcon,
  WhatsappIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import { useSavedList } from "@/components/saved-list-provider";
import type { Blueprint } from "@/lib/blueprints";
import { categories } from "@/lib/site";
import { whatsappLink } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

export function BlueprintDetail({
  blueprint,
  related,
}: {
  blueprint: Blueprint;
  related: Blueprint[];
}) {
  const { t, locale } = useLocale();
  const { isSaved, toggle, ready } = useSavedList();
  const [copied, setCopied] = useState(false);
  const saved = ready && isSaved(blueprint.slug);
  const category = categories.find((c) => c.id === blueprint.category);
  const L = (value: { en: string; sw: string; fr: string }) => value[locale as Locale];

  const copyMaterials = async () => {
    const text = [
      `${blueprint.title[locale as Locale]} (${t.common.billOfMaterials})`,
      ...blueprint.materials.map((m) => `- ${L(m)}`),
      `${t.blueprints.detail.tools}: ${blueprint.tools.map((x) => L(x)).join(", ")}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <section className="bg-wash-2 pb-10 pt-8">
        <div className="shell">
          <Link
            href="/blueprints"
            className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-blue"
          >
            <ArrowIcon width={18} height={18} className="rotate-180" />
            {t.blueprints.detail.back}
          </Link>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-mist px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-blue">
              {category?.name[locale as Locale]}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-[12px] font-bold text-slate-2 ring-1 ring-mist">
              {t.common[blueprint.skill]}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-[12px] font-bold text-slate-2 ring-1 ring-mist">
              {t.common.contributed}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            {blueprint.title[locale as Locale]}
          </h1>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-body">
            {blueprint.summary[locale as Locale]}
          </p>

          <dl className="mt-6 grid gap-4 border-t border-mist pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-[12px] font-bold uppercase tracking-wide text-slate">
                {t.common.contributor}
              </dt>
              <dd className="text-[15px] font-semibold text-ink">
                {blueprint.contributor}, {blueprint.location}
              </dd>
            </div>
            <div>
              <dt className="text-[12px] font-bold uppercase tracking-wide text-slate">
                {t.common.estimate}
              </dt>
              <dd className="text-[15px] font-semibold text-ink">{L(blueprint.buildTime)}</dd>
            </div>
            <div>
              <dt className="text-[12px] font-bold uppercase tracking-wide text-slate">
                {t.common.cost}
              </dt>
              <dd className="text-[15px] font-semibold text-ink">{L(blueprint.cost)}</dd>
            </div>
          </dl>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => toggle(blueprint.slug)}
              aria-pressed={saved}
              className={`inline-flex min-h-11 items-center gap-2 rounded-[10px] px-5 text-sm font-bold transition-colors ${
                saved ? "bg-blue text-white" : "bg-white text-ink ring-1 ring-mist hover:bg-mist"
              }`}
            >
              <BookmarkIcon filled={saved} width={18} height={18} />
              {saved ? t.common.saved : t.common.save}
            </button>
            <a
              href={whatsappLink(`${t.whatsapp.blueprint} ${blueprint.title[locale as Locale]}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-[#25d366] px-5 text-sm font-bold text-white"
            >
              <WhatsappIcon width={18} height={18} />
              {t.blueprints.detail.askBuilder}
            </a>
          </div>
        </div>
      </section>

      <section className="shell py-10">
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-[20px]">
          <Image
            src={blueprint.image}
            alt={blueprint.imageAlt[locale as Locale]}
            fill
            sizes="(max-width: 1023px) 100vw, 1100px"
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="shell pb-12">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="min-w-0">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-ink">
                {t.blueprints.detail.overview}
              </h2>
              <p className="mt-3 text-[16px] leading-[1.9] text-body">
                {L(blueprint.overview)}
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-10">
              <div className="rounded-[20px] border border-mist bg-wash p-6">
                <div className="flex items-start gap-3">
                  <span className="icon-badge shrink-0">
                    <WarningIcon width={24} height={24} />
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-bold text-ink">
                      {t.common.safetyNotes}
                    </h2>
                    <p className="mt-1 text-[14px] text-slate-2">
                      {t.blueprints.detail.safetyIntro}
                    </p>
                  </div>
                </div>
                <ul className="list-check mt-4">
                  {blueprint.safety.map((note) => (
                    <li key={L(note).slice(0, 60)}>{L(note)}</li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] font-semibold text-ink">
                  {t.blueprints.detail.verificationNote}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="mt-10">
              <h2 className="font-display text-2xl font-bold text-ink">
                {t.common.buildSteps}
              </h2>
              <p className="mt-2 text-[15px] text-slate-2">
                {t.blueprints.detail.stepsIntro}
              </p>
              <ol className="mt-5 space-y-4">
                {blueprint.steps.map((step, index) => (
                  <li
                    key={L(step).slice(0, 60)}
                    className="flex gap-4 rounded-[10px] bg-white p-4 ring-1 ring-mist"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] bg-mist font-display font-bold text-blue">
                      {index + 1}
                    </span>
                    <p className="text-[15px] leading-[1.85] text-body">{L(step)}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={160} className="mt-10">
              <h2 className="font-display text-2xl font-bold text-ink">
                {t.common.localNotes}
              </h2>
              <ul className="list-plain mt-4">
                {blueprint.notes.map((note) => (
                  <li key={L(note).slice(0, 60)}>{L(note)}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="min-w-0">
            <Reveal animation="fadeInRight">
              <div className="rounded-[20px] border border-mist bg-white p-6 lg:sticky lg:top-24">
                <h2 className="font-display text-lg font-bold text-ink">
                  {t.common.billOfMaterials}
                </h2>
                <p className="mt-1 text-[13px] text-slate-2">
                  {t.blueprints.detail.bomIntro}
                </p>
                <ul className="list-check mt-4">
                  {blueprint.materials.map((material) => (
                    <li key={L(material).slice(0, 60)}>{L(material)}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={copyMaterials}
                  className="btn btn-ghost btn-small mt-5 w-full"
                >
                  <span className="btn-text">
                    {copied ? t.blueprints.detail.copied : t.blueprints.detail.downloadChecklist}
                  </span>
                </button>

                <hr className="divider-soft my-6" />

                <h3 className="font-display text-base font-bold text-ink">
                  {t.blueprints.detail.tools}
                </h3>
                <ul className="list-plain mt-3">
                  {blueprint.tools.map((tool) => (
                    <li key={L(tool).slice(0, 60)}>{L(tool)}</li>
                  ))}
                </ul>

                <hr className="divider-soft my-6" />

                <h3 className="font-display text-base font-bold text-ink">
                  {t.common.licenseLabel}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-[14px] text-body">
                  <CheckIcon width={18} height={18} className="text-blue" />
                  {t.blueprints.detail.licenceNote}
                </p>
                <Link
                  href="/license"
                  className="mt-2 inline-flex min-h-11 items-center text-sm font-bold text-blue underline"
                >
                  {t.nav.license}
                </Link>

                <hr className="divider-soft my-6" />

                <p className="text-[12px] uppercase tracking-wide text-slate">
                  {t.blueprints.detail.versions} {blueprint.version} · {t.common.updated}{" "}
                  {blueprint.updated}
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="bg-grediunt py-70" aria-labelledby="related-title">
          <div className="shell">
            <h2 id="related-title" className="section-title">
              {t.blueprints.detail.related}
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 80}>
                  <BlueprintCard blueprint={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
