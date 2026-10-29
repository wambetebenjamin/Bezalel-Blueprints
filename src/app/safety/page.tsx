import type { Metadata } from "next";
import { SafetyView } from "@/components/pages/safety-view";

export const metadata: Metadata = {
  title: "Safety",
  description:
    "Read this before you build. Community designs are starting points, not certifications. Test locally and follow your regulations.",
};

export default function SafetyViewPage() {
  return <SafetyView />;
}
