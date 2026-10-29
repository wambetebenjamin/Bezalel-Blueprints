import type { Metadata } from "next";
import { ContributeView } from "@/components/pages/contribute-view";

export const metadata: Metadata = {
  title: "Contribute a design",
  description:
    "Send a build that works, or an improvement to one already published. You keep authorship and everyone gets a permanent, royalty free right to build it.",
};

export default function ContributePage() {
  return <ContributeView />;
}
