"use client";

import { useEffect, useMemo, useState } from "react";
import { BlueprintCard } from "@/components/blueprint-card";
import { CheckIcon, CloseIcon, FilterIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { useLocale } from "@/components/locale-provider";
import { blueprints } from "@/lib/blueprints";
import { categories, type SkillId } from "@/lib/site";
import { materialIds, materialLabels, blueprintMaterials } from "@/lib/materials";
import type { Locale } from "@/lib/i18n";

const skillOrder: Record<SkillId, number> = {
  beginner: 0,
  intermediate: 1,
  advanced: 2,
};

export function BlueprintLibrary({
  initialCategory,
}: {
  initialCategory?: string;
}) {
  const { t, locale } = useLocale();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [skill, setSkill] = useState<string>("all");
  const [materials, setMaterials] = useState<string[]>([]);
  const [sort, setSort] = useState<"newest" | "skill" | "name">("newest");
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    if (initialCategory && initialCategory !== "all") setCategory(initialCategory);
  }, [initialCategory]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = blueprints.filter((b) => {
      if (category !== "all" && b.category !== category) return false;
      if (skill !== "all" && b.skill !== skill) return false;
      if (materials.length > 0) {
        const tags = blueprintMaterials[b.slug] ?? [];
        if (!materials.every((m) => tags.includes(m as never))) return false;
      }
      if (!q) return true;
      const haystack = [
        b.title.en,
        b.title.sw,
        b.title.fr,
        b.summary.en,
        b.summary.sw,
        b.summary.fr,
        b.location,
        b.contributor,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });

    return [...filtered].sort((a, b) => {
      if (sort === "skill") return skillOrder[a.skill] - skillOrder[b.skill];
      if (sort === "name") return a.title[locale as Locale].localeCompare(b.title[locale as Locale]);
      return b.updated.localeCompare(a.updated);
    });
  }, [query, category, skill, materials, sort, locale]);

  const activeCount =
    (category !== "all" ? 1 : 0) + (skill !== "all" ? 1 : 0) + materials.length;

  const clearAll = () => {
    setCategory("all");
    setSkill("all");
    setMaterials([]);
    setQuery("");
  };

  const toggleMaterial = (id: string) => {
    setMaterials((current) =>
      current.includes(id) ? current.filter((m) => m !== id) : [...current, id],
    );
  };

  const filterPanel = (
    <div className="space-y-6">
      <div>
        <p className="field-label">{t.common.category}</p>
        <div className="flex flex-wrap gap-2">
          {["all", ...categories.map((c) => c.id)].map((id) => {
            const label =
              id === "all"
                ? t.common.browseLibrary
                : categories.find((c) => c.id === id)?.name[locale as Locale] ?? id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setCategory(id)}
                aria-pressed={category === id}
                className={`inline-flex min-h-11 items-center rounded-[10px] px-4 text-sm font-bold transition-colors ${
                  category === id
                    ? "bg-night text-white"
                    : "bg-white text-ink ring-1 ring-mist hover:bg-mist"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="field-label">{t.common.skill}</p>
        <div className="flex flex-wrap gap-2">
          {["all", "beginner", "intermediate", "advanced"].map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setSkill(id)}
              aria-pressed={skill === id}
              className={`inline-flex min-h-11 items-center rounded-[10px] px-4 text-sm font-bold transition-colors ${
                skill === id
                  ? "bg-night text-white"
                  : "bg-white text-ink ring-1 ring-mist hover:bg-mist"
              }`}
            >
              {id === "all" ? t.common.browseLibrary : t.common[id as SkillId]}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="field-label">{t.common.materials}</p>
        <div className="flex flex-wrap gap-2">
          {materialIds.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => toggleMaterial(id)}
              aria-pressed={materials.includes(id)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-[10px] px-4 text-sm font-bold transition-colors ${
                materials.includes(id)
                  ? "bg-blue text-white"
                  : "bg-white text-ink ring-1 ring-mist hover:bg-mist"
              }`}
            >
              {materials.includes(id) ? <CheckIcon width={16} height={16} /> : null}
              {materialLabels[id][locale as Locale]}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="shell py-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
        <aside className="hidden w-72 shrink-0 lg:block" aria-label={t.common.filters}>
          <div className="sticky top-24 rounded-[20px] border border-mist bg-white p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-ink">{t.common.filters}</h2>
              {activeCount > 0 ? (
                <button
                  type="button"
                  onClick={clearAll}
                  className="inline-flex min-h-11 items-center text-sm font-bold text-blue underline"
                >
                  {t.common.clearFilters}
                </button>
              ) : null}
            </div>
            <hr className="divider-soft my-5" />
            {filterPanel}
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative flex-1">
              <span className="sr-only">{t.common.search}</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t.common.searchPlaceholder}
                className="input-base"
              />
            </label>

            <label className="sm:w-48">
              <span className="sr-only">{t.blueprints.sortLabel}</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as typeof sort)}
                className="input-base"
              >
                <option value="newest">{t.blueprints.sortNewest}</option>
                <option value="skill">{t.blueprints.sortSkill}</option>
                <option value="name">{t.blueprints.sortName}</option>
              </select>
            </label>

            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              className="btn btn-default btn-small lg:hidden"
            >
              <span className="btn-text inline-flex items-center gap-2">
                <FilterIcon width={18} height={18} />
                {t.blueprints.filterMobile}
                {activeCount > 0 ? ` (${activeCount})` : ""}
              </span>
            </button>
          </div>

          <p className="mt-4 text-sm text-slate-2" role="status" aria-live="polite">
            {results.length} {results.length === 1 ? t.common.resultCount : t.common.resultsCount}
          </p>

          {results.length === 0 ? (
            <div className="mt-8 rounded-[20px] border border-mist bg-wash p-8 text-center">
              <h2 className="font-display text-xl font-bold text-ink">
                {t.blueprints.emptyTitle}
              </h2>
              <p className="mt-2 text-body">{t.blueprints.emptyText}</p>
              <button type="button" onClick={clearAll} className="btn btn-default mt-6">
                <span className="btn-text">{t.common.clearFilters}</span>
              </button>
            </div>
          ) : (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {results.map((blueprint, index) => (
                <Reveal key={blueprint.slug} delay={Math.min(index, 5) * 60}>
                  <BlueprintCard blueprint={blueprint} priority={index < 3} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>

      {sheetOpen ? (
        <>
          <div className="sheet-backdrop" onClick={() => setSheetOpen(false)} />
          <div
            className="sheet lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label={t.common.filters}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-ink">
                {t.common.filters}
              </h2>
              <button
                type="button"
                onClick={() => setSheetOpen(false)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[10px] bg-mist text-ink"
              >
                <CloseIcon width={20} height={20} />
                <span className="sr-only">{t.common.close}</span>
              </button>
            </div>
            <hr className="divider-soft my-5" />
            {filterPanel}
            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  clearAll();
                }}
                className="btn btn-ghost btn-small flex-1"
              >
                <span className="btn-text">{t.common.clearFilters}</span>
              </button>
              <button
                type="button"
                onClick={() => setSheetOpen(false)}
                className="btn btn-default btn-small flex-1"
              >
                <span className="btn-text">{t.common.applyFilters}</span>
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
