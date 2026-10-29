import type { Metadata } from "next";
import { SavedView } from "@/components/pages/saved-view";

export const metadata: Metadata = {
  title: "Saved blueprints",
  description:
    "Your saved blueprints and the status of designs you have submitted, kept on this device or with your account.",
};

export default function SavedViewPage() {
  return <SavedView />;
}
