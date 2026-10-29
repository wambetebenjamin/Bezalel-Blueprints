import type { Metadata } from "next";
import { CategoriesView } from "@/components/pages/categories-view";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Six invention areas with field notes from African workshops, farms, clinics and classrooms: water, solar, agriculture, education, health assist and mobility.",
};

export default function CategoriesPage() {
  return <CategoriesView />;
}
