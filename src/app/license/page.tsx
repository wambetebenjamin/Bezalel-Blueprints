import type { Metadata } from "next";
import { LicenseView } from "@/components/pages/license-view";

export const metadata: Metadata = {
  title: "Licences",
  description:
    "Hardware designs under CERN OHL 2 Permissive, written guides under CC BY 4.0, and photographs under the Pexels License.",
};

export default function LicenseViewPage() {
  return <LicenseView />;
}
