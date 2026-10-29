import type { Locale } from "@/lib/i18n";

export type MaterialId =
  | "metal"
  | "timber"
  | "plastic"
  | "sand"
  | "bicycle"
  | "electronics"
  | "ceramic"
  | "textile";

export const materialIds: MaterialId[] = [
  "metal",
  "timber",
  "plastic",
  "sand",
  "bicycle",
  "electronics",
  "ceramic",
  "textile",
];

export const materialLabels: Record<MaterialId, Record<Locale, string>> = {
  metal: { en: "Scrap metal", sw: "Chuma chakavu", fr: "Ferraille" },
  timber: { en: "Timber and offcuts", sw: "Mbao na vipande", fr: "Bois et chutes" },
  plastic: { en: "Reclaimed plastic", sw: "Plastiki iliyookotwa", fr: "Plastique récupéré" },
  sand: { en: "Sand and gravel", sw: "Mchanga na kokoto", fr: "Sable et graviers" },
  bicycle: { en: "Bicycle parts", sw: "Vipande vya baiskeli", fr: "Pièces de vélo" },
  electronics: { en: "Electronics", sw: "Vifaa vya umeme", fr: "Électronique" },
  ceramic: { en: "Fired clay", sw: "Udongo uliochomwa", fr: "Argile cuite" },
  textile: { en: "Rope and cloth", sw: "Kamba na kitambaa", fr: "Corde et tissu" },
};

export const blueprintMaterials: Record<string, MaterialId[]> = {
  "ceramic-pot-water-filter": ["ceramic", "sand", "plastic"],
  "rainwater-gutter-and-first-flush": ["metal", "plastic"],
  "ten-watt-solar-phone-charger": ["electronics", "metal", "plastic"],
  "solar-cabinet-dryer": ["timber", "metal", "plastic"],
  "bucket-drip-irrigation-kit": ["plastic", "sand"],
  "seed-dibber-and-marking-rope": ["timber", "textile"],
  "school-science-kit-local-materials": ["plastic", "sand", "electronics", "textile"],
  "adjustable-walking-frame-prototype": ["metal", "plastic"],
  "bicycle-cargo-trailer": ["metal", "bicycle", "timber"],
};
