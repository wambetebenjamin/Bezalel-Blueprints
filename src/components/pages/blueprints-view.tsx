"use client";

import { BlueprintLibrary } from "@/components/blueprint-library";
import { PageBanner } from "@/components/page-banner";
import { useLocale } from "@/components/locale-provider";

export function BlueprintsView({ initialCategory }: { initialCategory: string }) {
  const { t } = useLocale();

  return (
    <>
      <PageBanner
        image="/images/build-hero.jpg"
        eyebrow={t.blueprints.eyebrow}
        title={t.blueprints.title}
        lead={t.blueprints.lead}
      />
      <BlueprintLibrary initialCategory={initialCategory} />
    </>
  );
}
