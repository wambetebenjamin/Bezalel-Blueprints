import type { Metadata } from "next";
import { BlueprintsView } from "@/components/pages/blueprints-view";

export const metadata: Metadata = {
  title: "Blueprint library",
  description:
    "Filter open blueprints by water, solar, agriculture, education, health assist or mobility, by skill level and by the materials you already have.",
};

export default async function BlueprintsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  return <BlueprintsView initialCategory={params.category ?? "all"} />;
}
