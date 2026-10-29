import type { Metadata } from "next";
import { LegalView } from "@/components/pages/legal-view";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "What Bezalel Blueprints stores when you visit, when you save a blueprint and when you send us a design.",
};

export default function PrivacyPage() {
  return <LegalView kind="privacy" />;
}
