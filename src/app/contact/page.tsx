import type { Metadata } from "next";
import { ContactView } from "@/components/pages/contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Bezalel Blueprints on WhatsApp or by email for questions, corrections, school programmes and design submissions.",
};

export default function ContactViewPage() {
  return <ContactView />;
}
