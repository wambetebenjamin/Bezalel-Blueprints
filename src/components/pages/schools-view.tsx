"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, CheckIcon, WarningIcon } from "@/components/icons";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/components/locale-provider";
import type { Locale } from "@/lib/i18n";

type Kit = {
  slug?: string;
  title: Record<Locale, string>;
  subject: Record<Locale, string>;
  level: Record<Locale, string>;
  time: string;
  cost: Record<Locale, string>;
  outcomes: Record<Locale, string[]>;
};

const kits: Kit[] = [
  {
    slug: "school-science-kit-local-materials",
    title: {
      en: "Science kit from local materials",
      sw: "Kifaa cha sayansi kutoka vifaa vya karibu",
      fr: "Kit scientifique en matériaux locaux",
    },
    subject: {
      en: "Physics, chemistry, biology. Measurement, circuits, levers, filtration",
      sw: "Fizikia, kemia, baiolojia. Vipimo, saketi, leveri, uchujaji",
      fr: "Physique, chimie, biologie. Mesure, circuits, leviers, filtration",
    },
    level: { en: "Lower secondary", sw: "Sekondari ya chini", fr: "Premier cycle secondaire" },
    time: "40 min",
    cost: {
      en: "Very low per group of three",
      sw: "Ndogo sana kwa kikundi cha watatu",
      fr: "Très faible par groupe de trois",
    },
    outcomes: {
      en: [
        "Taking and recording repeatable measurements",
        "Predicting an outcome before testing it",
        "Writing up a failure honestly",
      ],
      sw: [
        "Kuchukua na kurekodi vipimo vinavyorudiwa",
        "Kutabiri matokeo kabla ya kujaribu",
        "Kuandika kushindwa kwa ukweli",
      ],
      fr: [
        "Prendre et consigner des mesures reproductibles",
        "Prédire un résultat avant de le tester",
        "Rendre compte d'un échec honnêtement",
      ],
    },
  },
  {
    slug: "bucket-drip-irrigation-kit",
    title: {
      en: "Bucket drip irrigation kit",
      sw: "Kifaa cha umwagiliaji wa matone",
      fr: "Kit d'irrigation goutte à goutte",
    },
    subject: {
      en: "Agriculture, geography, mathematics. Flow rate, area and water budgeting",
      sw: "Kilimo, jiografia, hisabati. Kiwango cha mtiririko, eneo na bajeti ya maji",
      fr: "Agriculture, géographie, mathématiques. Débit, surface et budget d'eau",
    },
    level: { en: "Upper primary and up", sw: "Msingi wa juu na zaidi", fr: "Fin de primaire et plus" },
    time: "2 x 40 min",
    cost: {
      en: "Low, parts from a hardware shop",
      sw: "Ndogo, vipande kutoka duka la vifaa",
      fr: "Faible, pièces de quincaillerie",
    },
    outcomes: {
      en: [
        "Measuring flow and calculating how much a plant receives",
        "Reading a simple drawing and following a sequence",
        "Planning a watering schedule from data",
      ],
      sw: [
        "Kupima mtiririko na kukadiria kiasi anachopata mmea",
        "Kusoma mchoro rahisi na kufuata mpangilio",
        "Kupanga ratiba ya kumwagilia kutoka kwenye data",
      ],
      fr: [
        "Mesurer un débit et calculer ce que reçoit un plant",
        "Lire un dessin simple et suivre une séquence",
        "Planifier un calendrier d'arrosage à partir des données",
      ],
    },
  },
  {
    slug: "ceramic-pot-water-filter",
    title: {
      en: "Ceramic pot water filter",
      sw: "Kichujio cha maji cha udongo",
      fr: "Filtre à eau en poterie",
    },
    subject: {
      en: "Chemistry, biology, health. Porosity, filtration and microbes",
      sw: "Kemia, baiolojia, afya. Uwingi wa matundu, uchujaji na vijidudu",
      fr: "Chimie, biologie, santé. Porosité, filtration et microbes",
    },
    level: { en: "Lower secondary", sw: "Sekondari ya chini", fr: "Premier cycle secondaire" },
    time: "2 x 40 min",
    cost: {
      en: "Low, sand and a fired pot",
      sw: "Ndogo, mchanga na chungu lililochomwa",
      fr: "Faible, sable et pot cuit",
    },
    outcomes: {
      en: [
        "Observing turbidity before and after filtration",
        "Understanding why filtration is not sterilisation",
        "Keeping a maintenance log",
      ],
      sw: [
        "Kuangalia utelezi kabla na baada ya kuchuja",
        "Kuelewa kwa nini uchujaji si kuua vijidudu",
        "Kuweka rekodi ya matengenezo",
      ],
      fr: [
        "Observer la turbidité avant et après filtration",
        "Comprendre pourquoi filtrer n'est pas stériliser",
        "Tenir un carnet d'entretien",
      ],
    },
  },
];

export function SchoolsView() {
  const { t, locale } = useLocale();

  return (
    <>
      <PageBanner
        image="/images/schools-hero.jpg"
        eyebrow={t.schools.eyebrow}
        title={t.schools.title}
        lead={t.schools.lead}
      />

      <section className="bg-white py-70" aria-labelledby="kits-title">
        <div className="shell">
          <h2 id="kits-title" className="section-title">
            {t.schools.kitListTitle}
          </h2>

          <div className="mt-10 space-y-6">
            {kits.map((kit, index) => (
              <Reveal key={kit.title.en} delay={index * 80}>
                <article className="rounded-[20px] border border-mist p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="font-display text-xl font-bold text-ink">
                      {kit.title[locale as Locale]}
                    </h3>
                    <span className="rounded-full bg-mist px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-blue">
                      {kit.time}
                    </span>
                  </div>

                  <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <dt className="text-[12px] font-bold uppercase tracking-wide text-slate">
                        {t.schools.subjectLabel}
                      </dt>
                      <dd className="text-[15px] text-body">{kit.subject[locale as Locale]}</dd>
                    </div>
                    <div>
                      <dt className="text-[12px] font-bold uppercase tracking-wide text-slate">
                        {t.schools.levelLabel}
                      </dt>
                      <dd className="text-[15px] text-body">{kit.level[locale as Locale]}</dd>
                    </div>
                    <div>
                      <dt className="text-[12px] font-bold uppercase tracking-wide text-slate">
                        {t.common.cost}
                      </dt>
                      <dd className="text-[15px] text-body">{kit.cost[locale as Locale]}</dd>
                    </div>
                    <div>
                      <dt className="text-[12px] font-bold uppercase tracking-wide text-slate">
                        {t.schools.timeLabel}
                      </dt>
                      <dd className="text-[15px] text-body">{kit.time}</dd>
                    </div>
                  </dl>

                  <h4 className="mt-6 font-display text-base font-bold text-ink">
                    {t.schools.outcomesLabel}
                  </h4>
                  <ul className="list-check mt-2">
                    {kit.outcomes[locale as Locale].map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>

                  {kit.slug ? (
                    <Link
                      href={`/blueprints/${kit.slug}`}
                      className="btn btn-default btn-small mt-6"
                    >
                      <span className="btn-text inline-flex items-center gap-2">
                        {t.common.viewBlueprint}
                        <ArrowIcon width={16} height={16} />
                      </span>
                    </Link>
                  ) : null}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-grediunt py-70" aria-labelledby="teacher-title">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-[20px]">
              <Image
                src="/images/schools-classroom.jpg"
                alt={t.schools.teacherTitle}
                fill
                sizes="(max-width: 1023px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 id="teacher-title" className="section-title">
              {t.schools.teacherTitle}
            </h2>
            <ul className="list-check mt-6">
              {t.schools.teacherPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-70">
        <div className="shell grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[20px] border border-mist bg-wash p-6">
              <div className="flex items-start gap-3">
                <span className="icon-badge shrink-0">
                  <WarningIcon width={24} height={24} />
                </span>
                <div>
                  <h2 className="font-display text-lg font-bold text-ink">
                    {t.schools.safetyTitle}
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.9] text-body">
                    {t.schools.safetyText}
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
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-[20px] border border-mist bg-white p-6">
              <h2 className="font-display text-lg font-bold text-ink">
                {t.schools.budgetTitle}
              </h2>
              <p className="mt-2 text-[15px] leading-[1.9] text-body">
                {t.schools.budgetText}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-grediunts py-16">
        <div className="shell">
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.whatsappText}
            lead={t.contact.hoursText}
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
