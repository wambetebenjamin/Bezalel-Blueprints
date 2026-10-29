import type { Metadata } from "next";
import { AboutView } from "@/components/pages/about-view";

export const metadata: Metadata = {
  title: "About",
  description:
    "Bezalel Blueprints is an independent open knowledge platform publishing frugal invention blueprints built from local material.",
};

export default function AboutViewPage() {
  return <AboutView />;
}
