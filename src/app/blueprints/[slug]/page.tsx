import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlueprintDetail } from "@/components/pages/blueprint-detail";
import { blueprints, getBlueprint, relatedBlueprints } from "@/lib/blueprints";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blueprints.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const blueprint = getBlueprint(slug);
  if (!blueprint) return { title: "Blueprint not found" };

  return {
    title: blueprint.title.en,
    description: blueprint.summary.en,
    openGraph: {
      title: blueprint.title.en,
      description: blueprint.summary.en,
      type: "article",
      images: [{ url: blueprint.image }],
    },
    alternates: { canonical: `/blueprints/${blueprint.slug}` },
  };
}

export default async function BlueprintPage({ params }: Params) {
  const { slug } = await params;
  const blueprint = getBlueprint(slug);
  if (!blueprint) notFound();

  return <BlueprintDetail blueprint={blueprint} related={relatedBlueprints(slug, 3)} />;
}
