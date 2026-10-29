import type { Metadata } from "next";
import { LegalView } from "@/components/pages/legal-view";

export const metadata: Metadata = {
  title: "Terms of use",
  description:
    "Terms for reading, building from and contributing to Bezalel Blueprints, including licensing and the limits of our liability.",
};

export default function TermsPage() {
  return <LegalView kind="terms" />;
}
