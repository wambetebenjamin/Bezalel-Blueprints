"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, BookmarkIcon } from "@/components/icons";
import { useLocale } from "@/components/locale-provider";
import { useSavedList } from "@/components/saved-list-provider";
import type { Blueprint } from "@/lib/blueprints";
import { categories } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

const skillStyles: Record<string, string> = {
  beginner: "bg-mist text-blue",
  intermediate: "bg-wash text-blue-dark",
  advanced: "bg-mist text-night",
};

export function BlueprintCard({
  blueprint,
  priority = false,
}: {
  blueprint: Blueprint;
  priority?: boolean;
}) {
  const { t, locale } = useLocale();
  const { isSaved, toggle, ready } = useSavedList();
  const category = categories.find((c) => c.id === blueprint.category);
  const saved = ready && isSaved(blueprint.slug);

  return (
    <article className="service-card card-shadow flex h-full flex-col bg-white">
      <div className="relative h-44 w-full overflow-hidden rounded-[10px]">
        <Image
          src={blueprint.image}
          alt={blueprint.imageAlt[locale as Locale]}
          fill
          sizes="(max-width: 767px) 82vw, (max-width: 1023px) 45vw, 30vw"
          className="object-cover"
          priority={priority}
        />
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-3">
        <span className="rounded-full bg-mist px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-blue">
          {category?.name[locale as Locale] ?? blueprint.category}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-[12px] font-bold ${
            skillStyles[blueprint.skill] ?? "bg-mist text-blue"
          }`}
        >
          {t.common[blueprint.skill]}
        </span>
      </div>

      <h3 className="mt-2 text-xl font-bold leading-snug text-ink">
        <Link href={`/blueprints/${blueprint.slug}`} className="hover:text-blue">
          {blueprint.title[locale as Locale]}
        </Link>
      </h3>

      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-body">
        {blueprint.summary[locale as Locale]}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Link
          href={`/blueprints/${blueprint.slug}`}
          className="btn btn-default btn-small"
          aria-label={`${t.common.viewBlueprint}: ${blueprint.title[locale as Locale]}`}
        >
          <span className="btn-text inline-flex items-center gap-2">
            {t.common.readMore}
            <ArrowIcon width={16} height={16} />
          </span>
        </Link>
        <button
          type="button"
          onClick={() => toggle(blueprint.slug)}
          aria-pressed={saved}
          className={`inline-flex min-h-11 items-center gap-2 rounded-[10px] border px-4 text-sm font-bold transition-colors ${
            saved
              ? "border-blue bg-blue text-white"
              : "border-mist bg-white text-ink hover:bg-mist"
          }`}
        >
          <BookmarkIcon filled={saved} width={18} height={18} />
          {saved ? t.common.saved : t.common.save}
        </button>
      </div>
    </article>
  );
}
