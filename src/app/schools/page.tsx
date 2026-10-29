import type { Metadata } from "next";
import { SchoolsView } from "@/components/pages/schools-view";

export const metadata: Metadata = {
  title: "For schools",
  description:
    "Curriculum linked build kits with teacher notes, assessment ideas, supervision rules and a realistic per group materials budget.",
};

export default function SchoolsPage() {
  return <SchoolsView />;
}
