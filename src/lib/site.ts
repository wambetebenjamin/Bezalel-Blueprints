import type { Locale } from "@/lib/i18n";

export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "254112272061";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://bezalel-blueprints.vercel.app";

export const CONTACT_EMAIL_GENERAL = "hello@bezalel-blueprints.org";
export const CONTACT_EMAIL_CONTRIBUTE = "contribute@bezalel-blueprints.org";

export function whatsappLink(message?: string) {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${WHATSAPP_NUMBER}${text}`;
}

export type NavKey =
  | "home"
  | "blueprints"
  | "categories"
  | "build"
  | "schools"
  | "contribute"
  | "about"
  | "safety"
  | "license"
  | "contact"
  | "saved";

export type NavLink = {
  href: string;
  key: NavKey;
};

export const primaryNav: NavLink[] = [
  { href: "/blueprints", key: "blueprints" },
  { href: "/categories", key: "categories" },
  { href: "/build", key: "build" },
  { href: "/schools", key: "schools" },
  { href: "/contribute", key: "contribute" },
  { href: "/about", key: "about" },
];

export const utilityNav: NavLink[] = [
  { href: "/saved", key: "saved" },
  { href: "/safety", key: "safety" },
  { href: "/license", key: "license" },
  { href: "/contact", key: "contact" },
];

export type FooterColumnKey = "explore" | "library" | "legal";

export type FooterLink = {
  href: string;
  label: Record<Locale, string>;
};

export const footerLinks: Record<FooterColumnKey, FooterLink[]> = {
  explore: [
    { href: "/", label: { en: "Home", sw: "Mwanzo", fr: "Accueil" } },
    { href: "/categories", label: { en: "Categories", sw: "Aina", fr: "Catégories" } },
    { href: "/build", label: { en: "Build guides", sw: "Miongozo ya kujenga", fr: "Guides de fabrication" } },
    { href: "/schools", label: { en: "For schools", sw: "Kwa shule", fr: "Pour les écoles" } },
    { href: "/contribute", label: { en: "Contribute", sw: "Toa mchoro", fr: "Contribuer" } },
  ],
  library: [
    { href: "/blueprints", label: { en: "All blueprints", sw: "Michoro yote", fr: "Tous les plans" } },
    { href: "/blueprints?category=water", label: { en: "Water", sw: "Maji", fr: "Eau" } },
    { href: "/blueprints?category=solar", label: { en: "Solar", sw: "Jua", fr: "Solaire" } },
    { href: "/blueprints?category=agri", label: { en: "Agriculture", sw: "Kilimo", fr: "Agriculture" } },
    { href: "/saved", label: { en: "My list", sw: "Orodha yangu", fr: "Ma liste" } },
  ],
  legal: [
    { href: "/safety", label: { en: "Safety", sw: "Usalama", fr: "Sécurité" } },
    { href: "/license", label: { en: "Licences", sw: "Leseni", fr: "Licences" } },
    { href: "/privacy", label: { en: "Privacy", sw: "Faragha", fr: "Confidentialité" } },
    { href: "/terms", label: { en: "Terms", sw: "Masharti", fr: "Conditions" } },
    { href: "/contact", label: { en: "Contact", sw: "Wasiliana", fr: "Contact" } },
  ],
};

export type CategoryId = "water" | "solar" | "agri" | "education" | "health-assist" | "mobility";

export type SkillId = "beginner" | "intermediate" | "advanced";

export type Category = {
  id: CategoryId;
  slug: CategoryId;
  image: string;
  icon: "water" | "solar" | "agri" | "education" | "health" | "mobility";
  name: Record<Locale, string>;
  summary: Record<Locale, string>;
  useNotes: Record<Locale, string[]>;
};

export const categories: Category[] = [
  {
    id: "water",
    slug: "water",
    image: "/images/cat-water.jpg",
    icon: "water",
    name: { en: "Water", sw: "Maji", fr: "Eau" },
    summary: {
      en: "Hand pumps, filters, storage and rainwater capture built from pipe, sand, ceramic and salvaged tank.",
      sw: "Pampu za mkono, vichujio, hifadhi na uvunaji wa maji ya mvua kutoka bomba, mchanga, udongo na tanki lililookotwa.",
      fr: "Pompes à main, filtres, stockage et récupération d'eau de pluie à base de tuyaux, sable, céramique et cuves récupérées.",
    },
    useNotes: {
      en: [
        "Rainwater capture works best where the roof is clean metal and the rainy season is short and heavy.",
        "Slow sand and ceramic filters need time. They do not make dirty water perfect, they make it safer before boiling.",
        "Maintenance beats technology. A pump with a named caretaker outlives a better pump with none.",
      ],
      sw: [
        "Uvunaji wa maji ya mvua hufanya kazi vizuri ambapo paa ni bati safi na msimu wa mvua ni mfupi na mzito.",
        "Vichujio vya mchanga na udongo huhitaji muda. Havifanyi maji machafu kuwa safi kabisa, vinayafanya salama kabla ya kuchemsha.",
        "Matengenezo hushinda teknolojia. Pampu yenye mtunzaji aliyepewa jina hudumu kuliko pampu bora isiyo na mtunzaji.",
      ],
      fr: [
        "La récupération d'eau de pluie fonctionne mieux avec une toiture en tôle propre et une saison des pluies courte et intense.",
        "Les filtres à sable lent et en céramique demandent du temps. Ils ne rendent pas une eau sale parfaite, ils la rendent plus sûre avant ébullition.",
        "L'entretien vaut mieux que la technologie. Une pompe avec un responsable nommé dure plus longtemps qu'une meilleure pompe sans responsable.",
      ],
    },
  },
  {
    id: "solar",
    slug: "solar",
    image: "/images/cat-solar.jpg",
    icon: "solar",
    name: { en: "Solar", sw: "Nishati ya jua", fr: "Solaire" },
    summary: {
      en: "Small off grid power, charging, drying and pumping using panels, scrap frame and safe battery practice.",
      sw: "Umeme mdogo nje ya gridi, kuchaji, kukausha na kusukuma maji kwa kutumia paneli, fremu chakavu na matumizi salama ya betri.",
      fr: "Petite alimentation hors réseau, charge, séchage et pompage à partir de panneaux, cadres de récupération et bonnes pratiques de batterie.",
    },
    useNotes: {
      en: [
        "Panels are often cheaper used. Test open circuit voltage in full sun before you buy.",
        "Fuse every circuit at the battery. Most solar fires start at an unprotected joint.",
        "Build the frame first. A well aimed panel in a bad frame fails in the first storm.",
      ],
      sw: [
        "Paneli mara nyingi ni nafuu zikiwa zimetumika. Pima volteji ya wazi kwenye jua kamili kabla ya kununua.",
        "Weka fyuzi kila mzunguko kwenye betri. Moto mwingi wa jua huanza kwenye unganisho lisilolindwa.",
        "Jenga fremu kwanza. Paneli iliyoelekezwa vizuri kwenye fremu mbaya hushindwa katika dhoruba ya kwanza.",
      ],
      fr: [
        "Les panneaux sont souvent moins chers d'occasion. Mesurez la tension en circuit ouvert en plein soleil avant d'acheter.",
        "Protégez chaque circuit par un fusible au niveau de la batterie. La plupart des incendies solaires partent d'un raccord non protégé.",
        "Construisez d'abord le cadre. Un panneau bien orienté sur un mauvais cadre cède dès la première tempête.",
      ],
    },
  },
  {
    id: "agri",
    slug: "agri",
    image: "/images/cat-agri.jpg",
    icon: "agri",
    name: { en: "Agriculture", sw: "Kilimo", fr: "Agriculture" },
    summary: {
      en: "Irrigation, planting tools, seed care, drying and storage that fit a small plot and a small budget.",
      sw: "Umwagiliaji, vifaa vya kupanda, utunzaji wa mbegu, ukaushaji na hifadhi vinavyoendana na shamba dogo na bajeti ndogo.",
      fr: "Irrigation, outils de plantation, soin des semences, séchage et stockage adaptés à une petite parcelle et un petit budget.",
    },
    useNotes: {
      en: [
        "Water at the root, in the evening, and less often. Deep watering grows deeper roots.",
        "Bore holes and emitters clog. Filter the water first, and make the filter easy to open.",
        "Dry before you store. Most post harvest loss happens in the first week.",
      ],
      sw: [
        "Mwagilia kwenye mzizi, jioni, na mara chache zaidi. Kumwagilia kwa kina hukuza mizizi mirefu.",
        "Mashimo na vitoa maji huziba. Chuja maji kwanza, na fanya kichujio kiwe rahisi kufungua.",
        "Kausha kabla ya kuhifadhi. Hasara nyingi baada ya mavuno hutokea katika wiki ya kwanza.",
      ],
      fr: [
        "Arrosez au pied, le soir, et moins souvent. Un arrosage profond donne des racines plus profondes.",
        "Les trous et les goutteurs se bouchent. Filtrez d'abord l'eau et rendez le filtre facile à ouvrir.",
        "Séchez avant de stocker. L'essentiel des pertes après récolte survient la première semaine.",
      ],
    },
  },
  {
    id: "education",
    slug: "education",
    image: "/images/cat-education.jpg",
    icon: "education",
    name: { en: "Education", sw: "Elimu", fr: "Éducation" },
    summary: {
      en: "Classroom kits and demonstration models that turn the syllabus into something a learner can hold.",
      sw: "Vifaa vya darasani na mifano ya maonyesho inayogeuka mtaala kuwa kitu anachoweza kushika mwanafunzi.",
      fr: "Kits de classe et maquettes de démonstration qui transforment le programme en objets que l'élève peut tenir.",
    },
    useNotes: {
      en: [
        "Build one working model before the lesson, so you know where learners will get stuck.",
        "Cost per group matters more than elegance. Card, wire and bottle kits teach the same physics.",
        "Keep a spare kit. Something always breaks the night before.",
      ],
      sw: [
        "Jenga mfano mmoja unaofanya kazi kabla ya somo, ujue wanafunzi watakwama wapi.",
        "Gharama kwa kila kikundi ni muhimu kuliko urembo. Vifaa vya kadibodi, waya na chupa hufundisha fizikia ile ile.",
        "Weka kifaa cha akiba. Kitu huvunjika usiku kabla ya somo.",
      ],
      fr: [
        "Construisez un modèle qui fonctionne avant le cours, pour savoir où les élèves bloqueront.",
        "Le coût par groupe compte plus que l'élégance. Carton, fil et bouteilles enseignent la même physique.",
        "Gardez un kit de rechange. Quelque chose casse toujours la veille.",
      ],
    },
  },
  {
    id: "health-assist",
    slug: "health-assist",
    image: "/images/cat-health.jpg",
    icon: "health",
    name: { en: "Health assist", sw: "Msaada wa afya", fr: "Aide à la santé" },
    summary: {
      en: "Prototyping references for assistive and clinic support builds, published so technicians can learn and adapt.",
      sw: "Marejeo ya kuiga kwa vifaa vya msaada na vya kliniki, yaliyochapishwa ili mafundi wajifunze na kurekebisha.",
      fr: "Références de prototypage pour les aides techniques et le soutien clinique, publiées pour que les techniciens apprennent et adaptent.",
    },
    useNotes: {
      en: [
        "These are teaching and prototyping references, not medical devices.",
        "Fitting must be done by a qualified clinician or orthopaedic technician.",
        "Use skin safe materials and round every edge. A prototype still touches a person.",
      ],
      sw: [
        "Hizi ni marejeo ya kufundishia na kuiga, si vifaa vya tiba.",
        "Uwekaji lazima ufanywe na daktari au fundi wa viungo aliyehitimu.",
        "Tumia vifaa visivyoathiri ngozi na virallishe kila kona. Hata kielelezo hukigusa mtu.",
      ],
      fr: [
        "Ce sont des références pédagogiques et de prototypage, pas des dispositifs médicaux.",
        "L'adaptation doit être faite par un clinicien ou un technicien orthopédiste qualifié.",
        "Utilisez des matériaux sans danger pour la peau et arrondissez chaque bord. Une maquette touche quand même une personne.",
      ],
    },
  },
  {
    id: "mobility",
    slug: "mobility",
    image: "/images/cat-mobility.jpg",
    icon: "mobility",
    name: { en: "Mobility", sw: "Uhamaji", fr: "Mobilité" },
    summary: {
      en: "Bicycle trailers, cargo frames, hand carts and repair jigs built from bicycle parts and scrap steel.",
      sw: "Trela za baiskeli, fremu za mizigo, mikokoteni na vifaa vya kukarabati kutoka vipande vya baiskeli na chuma chakavu.",
      fr: "Remorques de vélo, cadres porte charge, charrettes à main et gabarits de réparation à base de pièces de vélo et d'acier de récupération.",
    },
    useNotes: {
      en: [
        "Salvaged bicycle wheels are the cheapest strong wheel you will find. Check spokes and rim cracks first.",
        "Load low and close to the axle. High loads tip on the second corner, not the first.",
        "Brake before you carry. A trailer doubles the distance you need to stop.",
      ],
      sw: [
        "Magurudumu ya baiskeli yaliyookotwa ni gurudumu imara la bei nafuu utakalopata. Kagua spi na nyufa za rimu kwanza.",
        "Pakia chini na karibu na ekseli. Mizigo ya juu huanguka kwenye kona ya pili, si ya kwanza.",
        "Kagua breki kabla ya kubeba. Trela huongeza mara mbili umbali unaohitaji kusimama.",
      ],
      fr: [
        "Les roues de vélo récupérées sont les roues solides les moins chères que vous trouverez. Vérifiez d'abord les rayons et les fissures de jante.",
        "Chargez bas et près de l'axe. Les charges hautes se renversent au deuxième virage, pas au premier.",
        "Vérifiez les freins avant de charger. Une remorque double la distance de freinage.",
      ],
    },
  },
];

export const categoryIds: CategoryId[] = categories.map((c) => c.id);

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
