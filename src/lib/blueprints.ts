import type { CategoryId, SkillId } from "@/lib/site";

export type Localized = { en: string; sw: string; fr: string };

function L(en: string, sw: string, fr: string): Localized {
  return { en, sw, fr };
}

export type Blueprint = {
  slug: string;
  category: CategoryId;
  skill: SkillId;
  image: string;
  imageAlt: Localized;
  featured: boolean;
  version: string;
  updated: string;
  contributor: string;
  location: string;
  title: Localized;
  summary: Localized;
  overview: Localized;
  buildTime: Localized;
  cost: Localized;
  materials: Localized[];
  tools: Localized[];
  steps: Localized[];
  safety: Localized[];
  notes: Localized[];
};

export const blueprints: Blueprint[] = [
  {
    slug: "ceramic-pot-water-filter",
    category: "water",
    skill: "beginner",
    image: "/images/cat-water.jpg",
    imageAlt: L(
      "A man operates a hand pump in a rural setting, wearing traditional attire",
      "Mwanamume anatumia pampu ya mkono kijijini, akiwa na mavazi ya asili",
      "Un homme actionne une pompe à main en zone rurale, en tenue traditionnelle",
    ),
    featured: true,
    version: "1.3",
    updated: "2025-11-18",
    contributor: "Amina W.",
    location: "Kisumu, Kenya",
    title: L(
      "Ceramic pot water filter",
      "Kichujio cha maji cha udongo",
      "Filtre à eau en poterie",
    ),
    summary: L(
      "A gravity filter made from a locally fired clay pot, coarse sand and fine sand, held in a plastic or metal bucket.",
      "Kichujio cha mvuto kilichotengenezwa kwa chungu cha udongo cha karibu, mchanga mkali na mchanga laini, kilichowekwa ndani ya ndoo ya plastiki au chuma.",
      "Un filtre à gravité fait d'un pot d'argile cuit localement, de sable grossier et de sable fin, placé dans un seau en plastique ou en métal.",
    ),
    overview: L(
      "Water poured into the clay pot passes through the ceramic wall and through two sand layers, then drips into a clean container below. It is slow, cheap and repairable. Treat the output as safer, not as guaranteed drinking water, and boil or chlorinate where you can.",
      "Maji yanayomwagwa kwenye chungu hupita kwenye ukuta wa udongo na kwenye tabaka mbili za mchanga, kisha hudondoka kwenye chombo safi chini. Ni polepole, ni nafuu na inatengenezeka. Chukua maji yanayotoka kama salama zaidi, si kama maji ya kunywa yaliyothibitishwa, na chemsha au weka klorini inapowezekana.",
      "L'eau versée dans le pot d'argile traverse la paroi céramique puis deux couches de sable, et goutte dans un récipient propre en dessous. C'est lent, bon marché et réparable. Considérez l'eau obtenue comme plus sûre, pas comme une eau potable garantie, et faites bouillir ou chlorez si vous le pouvez.",
    ),
    buildTime: L("Half a day, plus firing time", "Nusu siku, pamoja na muda wa kuchoma", "Une demi-journée, plus le temps de cuisson"),
    cost: L("Low, mostly sand and labour", "Ndogo, hasa mchanga na kazi", "Faible, surtout sable et main d'œuvre"),
    materials: [
      L("One fired clay pot with an unglazed wall, about 10 litres", "Chungu kimoja cha udongo kilichochomwa, takriban lita 10", "Un pot d'argile cuit à paroi non émaillée, environ 10 litres"),
      L("Clean coarse sand, 5 litres, washed", "Mchanga mkali safi, lita 5, uliosafishwa", "Sable grossier propre, 5 litres, lavé"),
      L("Clean fine sand, 5 litres, washed", "Mchanga laini safi, lita 5, uliosafishwa", "Sable fin propre, 5 litres, lavé"),
      L("Small washed gravel, 2 litres", "Kokoto ndogo zilizosafishwa, lita 2", "Petits graviers lavés, 2 litres"),
      L("A food grade bucket with a lid", "Ndoo ya kiwango cha chakula yenye mfuniko", "Un seau alimentaire avec couvercle"),
      L("A tap or spigot and a rubber grommet", "Bomba dogo na pete ya mpira", "Un robinet et un joint en caoutchouc"),
    ],
    tools: [
      L("Bucket and clean water for washing sand", "Ndoo na maji safi ya kuoshea mchanga", "Seau et eau propre pour laver le sable"),
      L("Drill or heated metal rod for the tap hole", "Kizibo au fimbo ya chuma iliyopashwa kwa tundu la bomba", "Perceuse ou tige métallique chauffée pour le trou du robinet"),
      L("Cloth for filtering wash water", "Kitambaa cha kuchujia maji ya kuoshea", "Tissu pour filtrer l'eau de lavage"),
    ],
    steps: [
      L("Wash the sand and gravel until the rinse water runs clear, then let them dry in the sun.", "Osha mchanga na kokoto hadi maji ya suuza yawe safi, kisha vikaushe juani.", "Lavez le sable et les graviers jusqu'à ce que l'eau de rinçage soit claire, puis faites les sécher au soleil."),
      L("Drill a hole near the bottom of the bucket and fit the tap with a grommet so it does not leak.", "Toa tundu karibu na chini ya ndoo na funga bomba na pete ya mpira ili lisivuje.", "Percez un trou près du fond du seau et posez le robinet avec un joint pour qu'il ne fuie pas."),
      L("Seat the clay pot in the neck of the bucket so it hangs without touching the bottom, and seal the gap with clean cloth or food safe sealant.", "Kalisha chungu kwenye mdomo wa ndoo ili kining'inie bila kugusa chini, na funga pengo kwa kitambaa safi au gundi salama kwa chakula.", "Posez le pot d'argile sur le col du seau pour qu'il pende sans toucher le fond, et fermez l'écart avec un tissu propre ou un joint alimentaire."),
      L("Layer the materials inside the pot: gravel at the bottom, then coarse sand, then fine sand, each about a hand width deep.", "Panga vifaa ndani ya chungu: kokoto chini, kisha mchanga mkali, kisha mchanga laini, kila kimoja kina upana wa mkono.", "Disposez les matériaux dans le pot : graviers au fond, puis sable grossier, puis sable fin, chacun sur une largeur de main."),
      L("Pour the first two batches of filtered water away to flush fines, then run the filter and keep the clean container covered.", "Mimina maji ya kwanza ya vikundi viwili ili kutoa vumbi, kisha endesha kichujio na funika chombo safi.", "Jetez les deux premiers lots d'eau filtrée pour rincer les fines, puis faites fonctionner le filtre et gardez le récipient propre couvert."),
    ],
    safety: [
      L("Ceramic and sand reduce cloudiness and microbes. They do not remove every pathogen. Boil or chlorinate where you can.", "Udongo na mchanga hupunguza utelezi na vijidudu. Haviondoi kila kijidudu. Chemsha au weka klorini inapowezekana.", "La céramique et le sable réduisent la turbidité et les microbes. Ils n'éliminent pas tous les agents pathogènes. Faites bouillir ou chlorez si vous le pouvez."),
      L("Never use a bucket that held paint, fuel, oil or chemicals, whatever you do to it.", "Usitumie kamwe ndoo iliyoweka rangi, mafuta, oil au kemikali, chochote utakachofanya.", "N'utilisez jamais un seau ayant contenu peinture, carburant, huile ou produits chimiques, quoi que vous lui fassiez."),
      L("A cracked ceramic wall filters nothing. Check for cracks before every use and retire a cracked pot.", "Ukuta wa udongo uliopasuka haujachuji chochote. Kagua nyufa kabla ya kila matumizi na ondoa chungu kilichopasuka.", "Une paroi céramique fissurée ne filtre rien. Vérifiez les fissures avant chaque usage et mettez au rebut un pot fissuré."),
      L("Clean the sand every few weeks. A filter that is never cleaned becomes a place where bacteria grow.", "Safisha mchanga kila baada ya wiki chache. Kichujio kisichosafishwa kinakuwa mahali pa kukua kwa bakteria.", "Nettoyez le sable toutes les quelques semaines. Un filtre jamais nettoyé devient un lieu de prolifération bactérienne."),
    ],
    notes: [
      L("Builders in Kisumu report that a pot fired too hot filters almost nothing, so ask the potter for a low firing.", "Wajenzi wa Kisumu wanaripoti kuwa chungu kilichochomwa sana hakijachuji karibu chochote, kwa hiyo mwombe mfinyanzi achome kwa joto la chini.", "Les fabricants de Kisumu signalent qu'un pot cuit trop fort ne filtre presque rien : demandez au potier une cuisson douce."),
      L("Flow drops sharply in the second month. Washing the top sand layer usually restores most of it.", "Mtiririko hushuka sana mwezi wa pili. Kuosha tabaka la juu la mchanga kwa kawaida hurejesha sehemu kubwa yake.", "Le débit chute nettement le deuxième mois. Laver la couche de sable supérieure en restaure généralement l'essentiel."),
    ],
  },
  {
    slug: "rainwater-gutter-and-first-flush",
    category: "water",
    skill: "intermediate",
    image: "/images/rural-village.jpg",
    imageAlt: L(
      "A rural scene with a traditional straw hut and a villager standing outside",
      "Mandhari ya kijijini yenye kibanda cha nyasi na mwanakijiji amesimama nje",
      "Scène rurale avec une hutte de paille traditionnelle et un villageois debout dehors",
    ),
    featured: true,
    version: "1.1",
    updated: "2025-09-02",
    contributor: "Joseph M.",
    location: "Mbeya, Tanzania",
    title: L(
      "Roof gutter with first flush diverter",
      "Mfereji wa paa wenye kikengeushi cha maji ya kwanza",
      "Gouttière de toit avec séparateur de première eau",
    ),
    summary: L(
      "Half round gutter from folded sheet or split pipe, feeding a settling tank through a first flush pipe that throws away the dirtiest first litres.",
      "Mfereji wa nusu duara kutoka bati lililokunjwa au bomba lililopasuliwa, unaolisha tanki la kutulia kupitia bomba linalotupa lita za kwanza chafu zaidi.",
      "Gouttière demi ronde en tôle pliée ou tuyau fendu, alimentant une cuve de décantation par un tuyau qui évacue les premiers litres les plus sales.",
    ),
    overview: L(
      "The first rain of a storm washes dust, bird droppings and leaves off the roof. A first flush pipe catches those litres in a closed standpipe and lets the cleaner water behind it pass into storage. The design here uses a salvaged 100 litre drum, a folded gutter and a downpipe, and it can be built with hand tools in a weekend.",
      "Mvua ya kwanza ya dhoruba huosha vumbi, kinyesi cha ndege na majani kutoka paani. Bomba la kwanza la kutupa hukamata lita hizo kwenye bomba lililofungwa na kuacha maji safi yaliyo nyuma yapite kwenye hifadhi. Muundo huu unatumia dramu iliyookotwa ya lita 100, mfereji uliokunjwa na bomba la kushuka, na unaweza kujengwa kwa vifaa vya mkono kwa wikendi.",
      "La première pluie d'un orage lave la poussière, les fientes et les feuilles du toit. Le tuyau de première eau capture ces litres dans une colonne fermée et laisse l'eau plus propre passer vers le stockage. Ce modèle utilise un fût de 100 litres récupéré, une gouttière pliée et une descente, et se construit avec des outils à main en un week-end.",
    ),
    buildTime: L("One weekend", "Wikendi moja", "Un week-end"),
    cost: L("Medium, mostly sheet metal and fittings", "Kati, hasa bati na viungio", "Moyen, surtout tôle et raccords"),
    materials: [
      L("Galvanised sheet or a split PVC pipe for the gutter", "Bati la mabati au bomba la PVC lililopasuliwa kwa mfereji", "Tôle galvanisée ou tuyau PVC fendu pour la gouttière"),
      L("Gutter brackets made from flat bar or hoop iron", "Vishikizo vya mfereji kutoka bapa la chuma au chuma cha mzingo", "Supports de gouttière en fer plat ou feuillard"),
      L("Downpipe and two elbows", "Bomba la kushuka na viwiko viwili", "Descente et deux coudes"),
      L("A 100 litre or larger food grade drum for storage", "Dramu ya kiwango cha chakula ya lita 100 au zaidi kwa hifadhi", "Un fût alimentaire de 100 litres ou plus pour le stockage"),
      L("A short standpipe for the first flush chamber", "Bomba fupi la kusimama kwa chumba cha maji ya kwanza", "Une courte colonne pour la chambre de première eau"),
      L("Mosquito proof mesh for every opening", "Wavu wa kuzuia mbu kwa kila mwanya", "Grillage anti moustiques pour chaque ouverture"),
      L("A tap and silicone or food safe sealant", "Bomba na silikoni au gundi salama kwa chakula", "Un robinet et du silicone ou un joint alimentaire"),
    ],
    tools: [
      L("Tin snips or hacksaw", "Mkasi wa bati au msumeno wa chuma", "Cisaille à tôle ou scie à métaux"),
      L("Hand drill with hole saw", "Kizibo cha mkono chenye kikata mduara", "Perceuse à main avec scie cloche"),
      L("Rivet gun or small bolts", "Bunduki la riveti au bolti ndogo", "Riveteuse ou petits boulons"),
      L("Spirit level and string line", "Mizani ya maji na kamba ya mstari", "Niveau à bulle et cordeau"),
      L("File and gloves for cut edges", "Tupa na glavu kwa kingo za mkato", "Lime et gants pour les bords coupés"),
    ],
    steps: [
      L("Mark the fall on the fascia. Aim for about 5 mm of drop per metre of gutter, and check it with a string line.", "Weka alama ya mteremko kwenye ubao wa paa. Lenga takriban milimita 5 za kushuka kwa kila mita ya mfereji, na kague kwa kamba ya mstari.", "Tracez la pente sur la bande de rive. Visez environ 5 mm de chute par mètre de gouttière et vérifiez au cordeau."),
      L("Fit the brackets first, then seat the folded sheet or split pipe on them and fix it so it cannot lift in wind.", "Funga vishikizo kwanza, kisha kalisha bati lililokunjwa au bomba lililopasuliwa juu yake na lifunge lisinyanyuliwe na upepo.", "Posez d'abord les supports, puis placez la tôle pliée ou le tuyau fendu dessus et fixez le pour qu'il ne se soulève pas au vent."),
      L("Cut the outlet at the low end and fit the downpipe, keeping it clear of doors and paths.", "Kata mwanya wa kutokea kwenye upande wa chini na funga bomba la kushuka, ukiliacha mbali na milango na njia.", "Découpez la sortie au point bas et posez la descente, en la tenant éloignée des portes et passages."),
      L("Build the first flush chamber from a closed standpipe at the bottom of the downpipe, sized at about 1 litre for every 10 square metres of roof.", "Jenga chumba cha maji ya kwanza kutoka bomba lililofungwa chini ya bomba la kushuka, likiwa na ukubwa wa takriban lita 1 kwa kila mita za mraba 10 za paa.", "Construisez la chambre de première eau avec une colonne fermée au bas de la descente, dimensionnée à environ 1 litre pour 10 mètres carrés de toit."),
      L("Connect the clean overflow from the chamber to the storage drum, fit a tap near the bottom and a screened overflow near the top.", "Unganisha maji safi yanayofurika kutoka chumbani kwenye dramu la hifadhi, funga bomba karibu na chini na mwanya wenye wavu karibu na juu.", "Raccordez le trop plein propre de la chambre au fût de stockage, posez un robinet près du fond et un trop plein grillagé près du haut."),
      L("Screen every opening with mosquito mesh, then run a test with a bucket of water before the first storm.", "Funika kila mwanya kwa wavu wa mbu, kisha fanya jaribio kwa ndoo ya maji kabla ya dhoruba ya kwanza.", "Grillagez chaque ouverture avec une moustiquaire, puis faites un essai avec un seau d'eau avant le premier orage."),
    ],
    safety: [
      L("Working at height is the main danger here. Use a stable ladder, a second person, and never work on a wet roof.", "Kufanya kazi juu ndio hatari kuu hapa. Tumia ngazi imara, mtu wa pili, na usifanye kazi kwenye paa lenye unyevu.", "Le travail en hauteur est le principal danger. Utilisez une échelle stable, une deuxième personne, et ne travaillez jamais sur un toit mouillé."),
      L("Cut metal and PVC edges are sharp. File them and wear gloves until the job is finished.", "King'o za chuma na PVC ni kali. Zisage na vaa glavu hadi kazi iishe.", "Les bords de tôle et de PVC sont coupants. Limez les et portez des gants jusqu'à la fin."),
      L("Stored water can breed mosquitoes and bacteria. Screen every opening, keep the tank closed, and clean it twice a year.", "Maji yaliyohifadhiwa yanaweza kuzaa mbu na bakteria. Funika kila mwanya, funga tanki, na lisafishe mara mbili kwa mwaka.", "L'eau stockée peut abriter moustiques et bactéries. Grillagez chaque ouverture, gardez la cuve fermée et nettoyez la deux fois par an."),
      L("A full 100 litre drum weighs about 100 kg. Stand it on a level, compacted base that will not wash out.", "Dramu la lita 100 lililojaa lina uzito wa takriban kilo 100. Lisimamishe kwenye msingi uliosawazishwa na kubanwa usiooshwa na maji.", "Un fût plein de 100 litres pèse environ 100 kg. Posez le sur une base nivelée et compactée qui ne se délavera pas."),
    ],
    notes: [
      L("Builders in Mbeya size the first flush pipe for the dry season, not the wet one, so it fills properly after a long dry spell.", "Wajenzi wa Mbeya hukadiria bomba la maji ya kwanza kwa msimu wa kiangazi, si wa mvua, ili lijae vizuri baada ya kiangazi kirefu.", "Les fabricants de Mbeya dimensionnent la première eau pour la saison sèche, pas la saison des pluies, afin qu'elle se remplisse après une longue sécheresse."),
      L("A leaf screen at the gutter mouth saves more maintenance than any other single change.", "Kichujio cha majani kwenye mdomo wa mfereji hupunguza matengenezo zaidi ya badiliko lingine lolote.", "Un pare feuilles à l'entrée de la gouttière épargne plus d'entretien que toute autre modification."),
    ],
  },
  {
    slug: "ten-watt-solar-phone-charger",
    category: "solar",
    skill: "beginner",
    image: "/images/bp-solar-tech.jpg",
    imageAlt: L(
      "Two technicians assembling solar panel equipment in sunny conditions",
      "Mafundi wawili wakikusanya vifaa vya paneli ya jua kwenye jua",
      "Deux techniciens assemblant du matériel solaire en plein soleil",
    ),
    featured: true,
    version: "2.0",
    updated: "2026-01-22",
    contributor: "Brian O.",
    location: "Nairobi, Kenya",
    title: L(
      "10 watt solar phone charger",
      "Chaja ya simu ya jua ya wati 10",
      "Chargeur solaire de téléphone 10 watts",
    ),
    summary: L(
      "A small panel, a charge controller and a sealed battery in a ventilated box, giving two or three phone charges a day off grid.",
      "Paneli ndogo, kidhibiti chaji na betri iliyofungwa kwenye sanduku lenye hewa, inayotoa chaji mbili au tatu za simu kwa siku nje ya gridi.",
      "Un petit panneau, un régulateur de charge et une batterie scellée dans un caisson ventilé, pour deux ou trois charges de téléphone par jour hors réseau.",
    ),
    overview: L(
      "This is the smallest useful solar build. A 10 watt panel feeds a charge controller, which charges a small sealed lead acid or lithium cell, which charges phones through a standard USB outlet. Everything lives in a box that can be locked, ventilated and carried. Keep every joint insulated and fuse the battery lead.",
      "Huhu ndio muundo mdogo zaidi wa jua unaofaa. Paneli ya wati 10 hulisha kidhibiti chaji, kinachochaji betri ndogo iliyofungwa ya asidi au lithiamu, inayochaji simu kupitia mwanya wa USB wa kawaida. Kila kitu kinaishi kwenye sanduku linaloweza kufungwa, kupitisha hewa na kubebeka. Weka kila unganisho limefunikwa na weka fyuzi kwenye waya wa betri.",
      "C'est la plus petite construction solaire utile. Un panneau de 10 watts alimente un régulateur de charge, qui charge une petite batterie plomb étanche ou lithium, qui charge les téléphones via une sortie USB standard. Tout tient dans un caisson verrouillable, ventilé et transportable. Isolez chaque raccord et mettez un fusible sur le fil de batterie.",
    ),
    buildTime: L("One day", "Siku moja", "Une journée"),
    cost: L("Medium, panel costs the most", "Kati, paneli ndio ghali zaidi", "Moyen, le panneau coûte le plus"),
    materials: [
      L("10 watt or larger solar panel with a cable", "Paneli ya jua ya wati 10 au zaidi yenye kebo", "Panneau solaire de 10 watts ou plus avec câble"),
      L("A small charge controller rated above panel current", "Kidhibiti chaji kidogo chenye kiwango cha juu ya mkondo wa paneli", "Un petit régulateur de charge dimensionné au dessus du courant du panneau"),
      L("A sealed 7 Ah battery, or a protected lithium pack", "Betri iliyofungwa ya 7 Ah, au pakiti ya lithiamu iliyolindwa", "Une batterie étanche de 7 Ah, ou un pack lithium protégé"),
      L("A fused battery lead and an inline fuse holder", "Waya wa betri wenye fyuzi na kishikilia fyuzi cha ndani", "Un fil de batterie avec fusible et porte fusible en ligne"),
      L("A USB outlet rated for the current you need", "Mwanya wa USB wenye kiwango cha mkondo unaohitaji", "Une sortie USB adaptée au courant nécessaire"),
      L("A lockable ventilated box", "Sanduku linalofungwa na kupitisha hewa", "Un caisson ventilé et verrouillable"),
      L("Cable glands and heat shrink", "Viungio vya kebo na kifuniko cha joto", "Presse étoupes et gaine thermorétractable"),
    ],
    tools: [
      L("Soldering iron with a stand and solder", "Pasi la kulehemia lenye stendi na bati la kulehemia", "Fer à souder avec support et étain"),
      L("Wire strippers and crimping pliers", "Kikata waya na koleo la kubana", "Pince à dénuder et pince à sertir"),
      L("Multimeter", "Kipima umeme cha aina nyingi", "Multimètre"),
      L("Drill and hole saw for glands", "Kizibo na kikata mduara kwa viungio vya kebo", "Perceuse et scie cloche pour les presse étoupes"),
      L("Heat gun or lighter for shrink tube", "Bomba la joto au kiberiti kwa kifuniko cha joto", "Pistolet à air chaud ou briquet pour la gaine"),
    ],
    steps: [
      L("Test the panel before you build. In full sun a 12 volt panel should read above 17 volts open circuit on a multimeter.", "Jaribu paneli kabla ya kujenga. Kwenye jua kamili paneli ya volti 12 inapaswa kusoma zaidi ya volti 17 bila mzigo kwenye kipima umeme.", "Testez le panneau avant de construire. En plein soleil, un panneau 12 volts doit afficher plus de 17 volts en circuit ouvert au multimètre."),
      L("Mount the controller and the USB outlet inside the box, leaving space for the battery and for air to move.", "Funga kidhibiti na mwanya wa USB ndani ya sanduku, ukiacha nafasi ya betri na ya hewa kupita.", "Fixez le régulateur et la sortie USB dans le caisson, en laissant la place pour la batterie et la circulation d'air."),
      L("Wire the battery first, through the inline fuse, then the panel, then the load, following the controller order in its own manual.", "Unganisha betri kwanza, kupitia fyuzi ya ndani, kisha paneli, kisha mzigo, ukifuata mpangilio wa kidhibiti kwenye mwongozo wake.", "Branchez d'abord la batterie via le fusible en ligne, puis le panneau, puis la charge, en suivant l'ordre du manuel du régulateur."),
      L("Fit cable glands at every hole so wires cannot chafe, and leave a drip loop on the panel cable outside the box.", "Funga viungio vya kebo kwenye kila tundu ili waya zisichubuke, na acha mzunguko wa kudondosha maji kwenye kebo ya paneli nje ya sanduku.", "Posez des presse étoupes à chaque trou pour éviter l'abrasion, et laissez une boucle d'égouttage sur le câble du panneau à l'extérieur."),
      L("Label the terminals, close the box, then charge a phone and log the time it takes before you trust the build.", "Andika majina kwenye vituo, funga sanduku, kisha chaji simu na rekodi muda inaochukua kabla ya kuamini muundo.", "Étiquetez les bornes, fermez le caisson, puis chargez un téléphone et notez le temps écoulé avant de faire confiance à la construction."),
    ],
    safety: [
      L("Fuse the battery lead as close to the battery terminal as you can. Unfused battery leads are how small solar builds catch fire.", "Weka fyuzi kwenye waya wa betri karibu na kituo cha betri iwezekanavyo. Waya za betri zisizo na fyuzi ndizo chanzo cha moto wa miundo midogo ya jua.", "Placez le fusible sur le fil de batterie au plus près de la borne. Les fils de batterie sans fusible sont l'origine des incendies des petites installations solaires."),
      L("Never short a battery terminal with a tool or a ring. Tape the terminals when the box is open.", "Usifunge kamwe kituo cha betri kwa chombo au pete. Funika vituo kwa tepu wakati sanduku liko wazi.", "Ne court circuitez jamais une borne de batterie avec un outil ou une bague. Couvrez les bornes quand le caisson est ouvert."),
      L("Sealed batteries still vent gas when overcharged. Ventilate the box and keep sparks away from it.", "Betri zilizofungwa bado hutoa gesi zinapochajiwa kupita kiasi. Pitisha hewa kwenye sanduku na weka cheche mbali nalo.", "Les batteries étanches dégagent encore du gaz en surcharge. Ventilez le caisson et tenez les étincelles à l'écart."),
      L("This build is low voltage and off grid. Anything touching mains wiring or building circuits needs a licensed electrician.", "Muundo huu ni wa volti ndogo na nje ya gridi. Chochote kinachogusa nyaya za umeme wa jengo kinahitaji fundi umeme mwenye leseni.", "Cette installation est basse tension et hors réseau. Tout ce qui touche au réseau ou aux circuits du bâtiment exige un électricien agréé."),
    ],
    notes: [
      L("A panel tilted to face the equator and cleaned weekly out performs a larger panel left flat and dusty.", "Paneli iliyoinamishwa kuelekea ikweta na kusafishwa kila wiki hufanya kazi kuliko paneli kubwa iliyoachwa tambarare na yenye vumbi.", "Un panneau incliné vers l'équateur et nettoyé chaque semaine surpasse un panneau plus grand laissé à plat et poussiéreux."),
      L("Shops in Nairobi report that most failures are the USB outlet, not the panel. Buy a better outlet than you think you need.", "Maduka ya Nairobi yanaripoti kuwa sehemu nyingi zinazoshindwa ni mwanya wa USB, si paneli. Nunua mwanya bora kuliko unavyofikiri.", "Les boutiques de Nairobi signalent que la plupart des pannes viennent de la sortie USB, pas du panneau. Achetez une meilleure sortie que prévu."),
    ],
  },
  {
    slug: "solar-cabinet-dryer",
    category: "solar",
    skill: "intermediate",
    image: "/images/cat-solar.jpg",
    imageAlt: L(
      "Team of workers installing solar panels on a sunny day",
      "Kikundi cha wafanyakazi kikifunga paneli za jua siku ya jua",
      "Équipe d'ouvriers installant des panneaux solaires par temps ensoleillé",
    ),
    featured: false,
    version: "1.2",
    updated: "2025-12-05",
    contributor: "Grace N.",
    location: "Kigali, Rwanda",
    title: L(
      "Solar cabinet dryer for produce",
      "Kikaushio cha kabati cha jua kwa mazao",
      "Séchoir solaire en armoire pour les récoltes",
    ),
    summary: L(
      "An insulated wooden cabinet with a glazed top, black absorber plate and screened vents, drying fruit, fish or herbs faster and cleaner than open sun.",
      "Kabati la mbao lililowekwa kizuia joto lenye kioo juu, bati jeusi la kunyonya joto na matundu yenye wavu, linalokausha matunda, samaki au mboga kwa haraka na usafi kuliko jua wazi.",
      "Une armoire en bois isolée avec un vitrage sur le dessus, une plaque absorbante noire et des ouvertures grillagées, qui sèche fruits, poisson ou herbes plus vite et plus proprement qu'au soleil ouvert.",
    ),
    overview: L(
      "Air enters low, is heated by a black plate under glass, rises through mesh trays and leaves through a high vent. The cabinet keeps insects and dust out and reaches a steady temperature that open sun drying cannot hold overnight. Size it to your harvest: one square metre of tray area handles roughly 8 to 10 kg of sliced fruit per batch.",
      "Hewa huingia chini, hupashwa na bati jeusi chini ya kioo, hupanda kupitia trei zenye wavu na kutoka kupitia mwanya wa juu. Kabati huzuia wadudu na vumbi na hufikia joto thabiti ambalo ukaushaji wa jua wazi hauwezi kulihifadhi usiku. Likadirie kwa mavuno yako: mita moja ya mraba ya trei hushughulikia takriban kilo 8 hadi 10 za matunda yaliyokatwa kwa kila kundi.",
      "L'air entre bas, est chauffé par une plaque noire sous vitrage, monte à travers des clayettes grillagées et sort par une ouverture haute. L'armoire protège des insectes et de la poussière et atteint une température stable que le séchage au soleil ouvert ne maintient pas la nuit. Dimensionnez la selon votre récolte : un mètre carré de clayettes traite environ 8 à 10 kg de fruits tranchés par fournée.",
    ),
    buildTime: L("Two days", "Siku mbili", "Deux jours"),
    cost: L("Medium, glass and timber", "Kati, kioo na mbao", "Moyen, verre et bois"),
    materials: [
      L("Framed timber, planed and dry", "Mbao za fremu, zilizosawazishwa na kavu", "Bois de cadre raboté et sec"),
      L("Plywood or reclaimed board for the walls", "Plywood au ubao uliookotwa kwa kuta", "Contreplaqué ou planches de récupération pour les parois"),
      L("A glass or clear polycarbonate sheet for the top", "Kioo au karatasi ya polikaboneti iliyo wazi kwa juu", "Une plaque de verre ou de polycarbonate transparent pour le dessus"),
      L("Matt black metal sheet for the absorber", "Bati la chuma jeusi lisilong'aa kwa kunyonya joto", "Tôle métallique noire mate pour l'absorbeur"),
      L("Stainless or food safe mesh for the trays", "Wavu wa chuma cha pua au salama kwa chakula kwa trei", "Grillage inoxydable ou alimentaire pour les clayettes"),
      L("Insulation offcuts, sawdust or dry grass for the walls", "Vipande vya kuzuia joto, vumbi la mbao au nyasi kavu kwa kuta", "Chutes d'isolant, sciure ou herbe sèche pour les parois"),
      L("Hinges, screws and a latch", "Bawaba, skrubu na komeo", "Charnières, vis et loquet"),
      L("Insect screen for the vents", "Wavu wa kuzuia wadudu kwa matundu", "Moustiquaire pour les ouvertures"),
    ],
    tools: [
      L("Saw and square", "Msumeno na pembe mraba", "Scie et équerre"),
      L("Drill and screwdriver", "Kizibo na bisibisi", "Perceuse et tournevis"),
      L("Staple gun for mesh", "Bunduki la stapuli kwa wavu", "Agrafeuse pour le grillage"),
      L("Tape measure and pencil", "Tepu ya kupimia na penseli", "Mètre ruban et crayon"),
      L("Gloves and a dust mask", "Glavu na kifuniko cha vumbi", "Gants et masque antipoussière"),
    ],
    steps: [
      L("Build a rectangular box with the absorber tray at the bottom, and line the walls with whatever insulation you have.", "Jenga sanduku la mstatili lenye trei ya kunyonya joto chini, na funga kuta kwa kizuia joto chochote ulicho nacho.", "Construisez un caisson rectangulaire avec le bac absorbeur au fond et doublez les parois avec l'isolant disponible."),
      L("Paint or blacken the absorber plate, then set it above the low air inlet so air must pass over it.", "Paka rangi au fanya bati liwe jeusi, kisha liweke juu ya mwanya wa hewa wa chini ili hewa ilazimike kupita juu yake.", "Noircissez la plaque absorbante, puis placez la au dessus de l'entrée d'air basse pour forcer l'air à passer dessus."),
      L("Fit the glazed top on a slight slope with a sealed frame, so rain runs off and the glass never touches the produce.", "Funga kioo cha juu kwa mteremko mdogo na fremu iliyofungwa, ili mvua itiririke na kioo kisiguse chakula.", "Posez le vitrage en légère pente avec un cadre étanche, pour que la pluie s'écoule et que le verre ne touche jamais les aliments."),
      L("Add low inlet vents and high outlet vents, both screened, and make one of them adjustable so you can control airflow.", "Ongeza matundu ya kuingiza chini na ya kutolea juu, yote yenye wavu, na fanya moja ibadilishwe ili udhibiti mtiririko wa hewa.", "Ajoutez des entrées basses et des sorties hautes grillagées, dont une réglable pour contrôler le flux d'air."),
      L("Slide in the mesh trays with a small gap at the back so air can circulate, then load produce in a single layer.", "Ingiza trei zenye wavu ukiacha pengo dogo nyuma ili hewa izunguke, kisha pakia mazao kwa tabaka moja.", "Glissez les clayettes grillagées en laissant un petit passage arrière pour la circulation, puis chargez les aliments sur une seule couche."),
      L("Run a test batch with a thermometer inside, and note how long your usual produce takes at your altitude.", "Endesha kundi la jaribio ukiwa na kipima joto ndani, na andika muda ambao mazao yako huchukua kwenye mwinuko wako.", "Faites une fournée d'essai avec un thermomètre à l'intérieur et notez le temps nécessaire pour vos produits à votre altitude."),
    ],
    safety: [
      L("Do not dry meat or fish to a level you have not verified. Under dried protein is a food poisoning risk.", "Usikaushe nyama au samaki hadi kiwango usichokithibitisha. Protini isiyokauka vya kutosha ni hatari ya sumu ya chakula.", "Ne séchez pas viande ou poisson à un niveau non vérifié. Une protéine insuffisamment séchée présente un risque d'intoxication."),
      L("Glass edges and cut mesh are sharp. Cap the corners and wear gloves while handling trays.", "King'o za kioo na wavu uliokatwa ni kali. Funika pembe na vaa glavu unaposhika trei.", "Les bords de verre et le grillage coupé sont tranchants. Protégez les angles et portez des gants en manipulant les clayettes."),
      L("Temperatures inside can exceed 70 degrees Celsius. Do not use the cabinet to store anything while the sun is on it.", "Joto ndani linaweza kuzidi nyuzi 70 Selsiasi. Usitumie kabati kuhifadhi chochote wakati jua liko juu yake.", "La température intérieure peut dépasser 70 degrés Celsius. N'utilisez pas l'armoire pour stocker quoi que ce soit en plein soleil."),
      L("Ventilate the room if you seal the wood. Many varnishes and paints are not food safe once heated.", "Pitisha hewa chumbani kama unafunga mbao. Rangi nyingi na varnish si salama kwa chakula zinapopashwa.", "Ventilez la pièce si vous traitez le bois. Beaucoup de vernis et peintures ne sont pas alimentaires une fois chauffés."),
    ],
    notes: [
      L("Drying time drops sharply when produce is sliced evenly. Uneven slices are the most common complaint.", "Muda wa ukaushaji hushuka sana mazao yanapokatwa sawasawa. Vipande visivyo sawa ndio malalamiko ya kawaida zaidi.", "Le temps de séchage baisse nettement quand les produits sont tranchés régulièrement. Les tranches inégales sont la plainte la plus fréquente."),
      L("At altitude the cabinet holds heat better and needs more vent area than the same design at sea level.", "Kwenye mwinuko kabati hushika joto zaidi na huhitaji eneo kubwa la matundu kuliko muundo ule ule usawa wa bahari.", "En altitude, l'armoire retient mieux la chaleur et demande plus de surface d'ouverture que le même modèle au niveau de la mer."),
    ],
  },
  {
    slug: "bucket-drip-irrigation-kit",
    category: "agri",
    skill: "beginner",
    image: "/images/bp-drip.jpg",
    imageAlt: L(
      "Row of young plants in pots watered by drip lines",
      "Mstari wa mimea michanga kwenye vyungu ikimwagiliwa kwa mistari ya matone",
      "Rangée de jeunes plants en pots irrigués par des lignes de goutteurs",
    ),
    featured: true,
    version: "1.4",
    updated: "2026-02-14",
    contributor: "Halima A.",
    location: "Morogoro, Tanzania",
    title: L(
      "Bucket drip irrigation kit",
      "Kifaa cha umwagiliaji wa matone cha ndoo",
      "Kit d'irrigation goutte à goutte sur seau",
    ),
    summary: L(
      "A raised bucket feeding low pressure drip lines to a small plot, giving each plant a slow measured drink at the root.",
      "Ndoo iliyoinuliwa inayolisha mistari ya matone yenye shinikizo ndogo kwenye shamba dogo, ikimpa kila mmea kinywaji polepole kilichopimwa kwenye mzizi.",
      "Un seau surélevé alimentant des lignes de goutteurs basse pression vers une petite parcelle, pour un arrosage lent et mesuré au pied de chaque plant.",
    ),
    overview: L(
      "Head pressure from a raised bucket is enough for drip line on flat ground. Raise the bucket 1 metre and you get about 0.1 bar, which suits most emitter spacing. The kit waters a bed of about 30 plants from a 20 litre bucket, and it can be built entirely from hardware store parts in an afternoon.",
      "Shinikizo la kichwa kutoka ndoo iliyoinuliwa linatosha kwa mstari wa matone kwenye ardhi tambarare. Inua ndoo mita 1 na unapata takriban baa 0.1, inayofaa nafasi nyingi za vitoa maji. Kifaa hiki kinamwagilia shamba la takriban mimea 30 kutoka ndoo ya lita 20, na kinaweza kujengwa kabisa kwa vipande vya duka la vifaa kwa mchana mmoja.",
      "La hauteur d'eau d'un seau surélevé suffit pour une ligne de goutteurs sur terrain plat. Montez le seau de 1 mètre et vous obtenez environ 0,1 bar, ce qui convient à la plupart des espacements. Le kit arrose une planche d'environ 30 plants depuis un seau de 20 litres et se construit entièrement en un après midi avec des pièces de quincaillerie.",
    ),
    buildTime: L("An afternoon", "Mchana mmoja", "Un après midi"),
    cost: L("Low to medium", "Ndogo hadi kati", "Faible à moyen"),
    materials: [
      L("A 20 litre bucket with a lid", "Ndoo ya lita 20 yenye mfuniko", "Un seau de 20 litres avec couvercle"),
      L("A bulkhead fitting or grommet for the outlet", "Kiungio cha ukutani au pete ya mpira kwa mwanya wa kutokea", "Un raccord traversée de cloison ou un joint pour la sortie"),
      L("A ball valve or clamp to control flow", "Vali ya mpira au kibanio cha kudhibiti mtiririko", "Une vanne à bille ou une pince pour régler le débit"),
      L("Mainline hose, 12 to 16 mm", "Hosi kuu, milimita 12 hadi 16", "Tuyau principal de 12 à 16 mm"),
      L("Drip line with emitters, or micro tube with adjustable drippers", "Mstari wa matone wenye vitoa maji, au neli ndogo yenye vidondoshi vinavyobadilishwa", "Ligne de goutteurs, ou micro tubes avec goutteurs réglables"),
      L("A simple screen or cloth filter before the mainline", "Kichujio cha wavu au kitambaa kabla ya hosi kuu", "Un filtre à maille ou tissu avant le tuyau principal"),
      L("End caps and tees", "Vifuniko vya mwisho na viungio vya T", "Bouchons d'extrémité et tés"),
      L("Stakes or stones to raise the bucket", "Fimbo au mawe ya kuinua ndoo", "Piquets ou pierres pour surélever le seau"),
    ],
    tools: [
      L("Drill or heated rod for the outlet hole", "Kizibo au fimbo iliyopashwa kwa tundu la kutokea", "Perceuse ou tige chauffée pour le trou de sortie"),
      L("Knife or pipe cutter", "Kisu au kikata bomba", "Couteau ou coupe tuyau"),
      L("Spanner for fittings", "Spana kwa viungio", "Clé pour les raccords"),
      L("Measuring jug and a watch", "Kopo la kupimia na saa", "Récipient gradué et une montre"),
    ],
    steps: [
      L("Set the bucket on a firm stand about 1 metre above the highest plant, and check that the stand will not tip when full.", "Weka ndoo kwenye stendi imara takriban mita 1 juu ya mmea mrefu zaidi, na hakikisha stendi haitaanguka ikiwa imejaa.", "Posez le seau sur un support ferme à environ 1 mètre au dessus du plant le plus haut, et vérifiez que le support ne basculera pas une fois plein."),
      L("Fit the outlet near the bottom of the bucket, add the filter inside, then the valve outside, and check for drips.", "Funga mwanya wa kutokea karibu na chini ya ndoo, ongeza kichujio ndani, kisha vali nje, na kague uvujaji.", "Posez la sortie près du fond du seau, ajoutez le filtre à l'intérieur, puis la vanne à l'extérieur, et vérifiez l'étanchéité."),
      L("Lay the mainline along the bed, cap the far end, and punch the drip take offs at each plant position.", "Tandaza hosi kuu kando ya shamba, funga mwisho wa mbali, na toboa njia za matone kwenye kila nafasi ya mmea.", "Déroulez le tuyau principal le long de la planche, bouchez l'extrémité et percez les départs de goutteurs à chaque plant."),
      L("Fit a drip line or an adjustable dripper at each plant, then open the valve and watch every emitter for two minutes.", "Funga mstari wa matone au kidondoshi kinachobadilishwa kwenye kila mmea, kisha fungua vali na uangalie kila kitoa maji kwa dakika mbili.", "Posez une ligne ou un goutteur réglable à chaque plant, ouvrez la vanne et observez chaque goutteur deux minutes."),
      L("Measure the output. Fill the bucket, run for 15 minutes, and note how much each plant received so you can set a watering schedule.", "Pima matokeo. Jaza ndoo, endesha kwa dakika 15, na andika kiasi kila mmea ulichopokea ili uweke ratiba ya kumwagilia.", "Mesurez le débit. Remplissez le seau, faites couler 15 minutes et notez ce que chaque plant a reçu pour établir un calendrier."),
    ],
    safety: [
      L("A full 20 litre bucket on a stand weighs about 20 kg. Build the stand wide, and keep it away from paths.", "Ndoo ya lita 20 iliyojaa kwenye stendi ina uzito wa takriban kilo 20. Jenga stendi pana, na iiweke mbali na njia.", "Un seau de 20 litres plein sur un support pèse environ 20 kg. Faites un support large et éloignez le des passages."),
      L("Filter the water. Unfiltered water clogs emitters within weeks, and a clogged kit quietly kills the crop it was meant to save.", "Chuja maji. Maji yasiyochujwa huziba vitoa maji ndani ya wiki, na kifaa kilichozibika huua kimya kimya mazao kilichokusudiwa kuyaokoa.", "Filtrez l'eau. Une eau non filtrée bouche les goutteurs en quelques semaines, et un kit bouché tue discrètement la culture qu'il devait sauver."),
      L("Do not use containers that held chemicals, fuel or paint anywhere in this build.", "Usitumie vyombo vilivyoweka kemikali, mafuta au rangi popote kwenye muundo huu.", "N'utilisez aucun récipient ayant contenu produits chimiques, carburant ou peinture dans cette construction."),
      L("Reclaimed hose can carry lead or old pesticide. Use new hose for anything you eat.", "Hosi iliyookotwa inaweza kuwa na risasi au dawa ya zamani. Tumia hosi mpya kwa chochote unachokula.", "Un tuyau récupéré peut contenir du plomb ou d'anciens pesticides. Utilisez un tuyau neuf pour tout ce qui se mange."),
    ],
    notes: [
      L("Watering in the evening cut evaporation losses noticeably for growers in Morogoro.", "Kumwagilia jioni kulipunguza hasara ya uvukizaji kwa wakulima wa Morogoro kwa njia inayoonekana.", "Arroser le soir a réduit sensiblement les pertes par évaporation pour les cultivateurs de Morogoro."),
      L("Adjustable drippers clog more than fixed emitters but are far easier to clear. Choose based on how often you can visit the plot.", "Vidondoshi vinavyobadilishwa huziba zaidi kuliko vitoa maji vilivyowekwa lakini ni rahisi zaidi kusafisha. Chagua kulingana na mara unavyoweza kutembelea shamba.", "Les goutteurs réglables se bouchent plus que les goutteurs fixes mais se dégagent bien plus facilement. Choisissez selon la fréquence de vos visites."),
    ],
  },
  {
    slug: "seed-dibber-and-marking-rope",
    category: "agri",
    skill: "beginner",
    image: "/images/cat-agri.jpg",
    imageAlt: L(
      "Two farmers cultivating crops in an African village landscape",
      "Wakulima wawili wakilima mazao kwenye mandhari ya kijiji cha Kiafrika",
      "Deux cultivateurs travaillant leurs cultures dans un paysage villageois africain",
    ),
    featured: false,
    version: "1.0",
    updated: "2025-08-11",
    contributor: "Peter K.",
    location: "Busia, Kenya",
    title: L(
      "Seed dibber and marking rope",
      "Kichimbia mbegu na kamba ya kuashiria",
      "Plantoir à semences et cordeau de marquage",
    ),
    summary: L(
      "A handled dibber with a depth stop plus a knotted marking rope, giving even spacing and even depth across a whole bed.",
      "Kichimbia chenye mpini na kizuizi cha kina pamoja na kamba yenye mafundo, vinavyotoa nafasi sawa na kina sawa kwenye shamba lote.",
      "Un plantoir à poignée avec butée de profondeur et un cordeau à nœuds, pour un espacement et une profondeur réguliers sur toute une planche.",
    ),
    overview: L(
      "Even spacing and even depth are the cheapest yield increase on a small plot. This pair of tools costs almost nothing and takes an hour to make. The rope carries knots at your chosen spacing, and the dibber carries a depth mark so every seed goes to the same depth, which matters most for small seeds.",
      "Nafasi sawa na kina sawa ndio ongezeko la mavuno la bei nafuu zaidi kwenye shamba dogo. Vifaa hivi viwili vinagharimu karibu chochote na vinachukua saa moja kutengeneza. Kamba hubeba mafundo kwenye nafasi uliyochagua, na kichimbia hubeba alama ya kina ili kila mbegu iende kina kile kile, jambo muhimu zaidi kwa mbegu ndogo.",
      "Un espacement et une profondeur réguliers sont l'augmentation de rendement la moins chère sur une petite parcelle. Ces deux outils ne coûtent presque rien et se fabriquent en une heure. Le cordeau porte des nœuds à l'espacement choisi et le plantoir une marque de profondeur, ce qui compte surtout pour les petites graines.",
    ),
    buildTime: L("One hour", "Saa moja", "Une heure"),
    cost: L("Very low, mostly offcuts", "Ndogo sana, hasa vipande vilivyobaki", "Très faible, surtout des chutes"),
    materials: [
      L("A straight hardwood stick about 40 cm long", "Fimbo ya mbao ngumu iliyonyooka ya takriban sentimita 40", "Un bâton de bois dur droit d'environ 40 cm"),
      L("An offcut for the handle grip", "Kipande kilichobaki kwa mpini wa kushika", "Une chute pour la poignée"),
      L("A depth stop: a screwed block, a nail or a cable tie", "Kizuizi cha kina: kizuizi cha skrubu, msumari au tai ya kebo", "Une butée de profondeur : cale vissée, clou ou collier"),
      L("String or sisal for the marking rope", "Kamba au uzi wa mkonge kwa kamba ya kuashiria", "Ficelle ou sisal pour le cordeau"),
      L("Two stakes to hold the rope", "Fimbo mbili za kushika kamba", "Deux piquets pour tendre le cordeau"),
      L("Paint or a burnt mark for measurements", "Rangi au alama ya kuchoma kwa vipimo", "Peinture ou marque brûlée pour les repères"),
    ],
    tools: [
      L("Knife or machete", "Kisu au panga", "Couteau ou machette"),
      L("Sandpaper or a rough stone", "Sandpapa au jiwe gumu", "Papier de verre ou pierre rugueuse"),
      L("Saw", "Msumeno", "Scie"),
      L("Tape measure", "Tepu ya kupimia", "Mètre ruban"),
    ],
    steps: [
      L("Cut the stick to length, taper one end to a blunt point, and smooth the whole thing so it does not raise splinters.", "Kata fimbo kwa urefu, chonga ncha moja iwe ncha butu, na lainisha yote ili isitoe miba.", "Coupez le bâton à longueur, taillez une extrémité en pointe émoussée et poncez l'ensemble pour éviter les échardes."),
      L("Mark the sowing depth for your crop on the shaft, then fix the depth stop so the dibber cannot go deeper.", "Weka alama ya kina cha kupanda kwa zao lako kwenye mti, kisha funga kizuizi cha kina ili kichimbia kisiende chini zaidi.", "Marquez la profondeur de semis de votre culture sur la tige, puis fixez la butée pour que le plantoir ne descende pas plus bas."),
      L("Add the grip at the top, shaped so the hand sits above the shaft and the wrist stays straight.", "Ongeza mpini juu, ulioundwa ili mkono ukae juu ya mti na kifundo cha mkono kibaki sawa.", "Ajoutez la poignée en haut, formée pour que la main repose au dessus de la tige et que le poignet reste droit."),
      L("Knot the rope at your chosen spacing, checking the knots against a tape measure rather than by eye.", "Funga mafundo kwenye kamba kwa nafasi uliyochagua, ukikagua mafundo kwa tepu ya kupimia badala ya jicho.", "Nouez le cordeau à l'espacement choisi, en vérifiant les nœuds au mètre plutôt qu'à l'œil."),
      L("Stretch the rope across the prepared bed, press a hole at every knot to the depth stop, sow, then move the rope one row on.", "Tandaza kamba juu ya shamba lililoandaliwa, bonyeza shimo kwenye kila fundo hadi kizuizi cha kina, panda, kisha sogeza kamba mstari mmoja mbele.", "Tendez le cordeau sur la planche préparée, faites un trou à chaque nœud jusqu'à la butée, semez, puis déplacez le cordeau d'un rang."),
    ],
    safety: [
      L("Blunt the point. A sharp dibber tip is a puncture wound waiting for the moment you slip on wet soil.", "Fanya ncha iwe butu. Ncha kali ya kichimbia ni jeraha la kuchoma linalosubiri wakati utakapoteleza kwenye udongo wenye unyevu.", "Émoussez la pointe. Un plantoir pointu est une blessure par perforation qui attend le moment où vous glissez sur un sol humide."),
      L("Carry the tool point down and never in a pocket or a belt without a cover.", "Beba chombo kikiwa na ncha chini na kamwe mfukoni au mkandani bila kifuniko.", "Portez l'outil pointe vers le bas, jamais dans une poche ou à la ceinture sans protection."),
      L("Smooth every surface. Splinters in a planting season are the most reported injury from this build.", "Lainisha kila uso. Miba wakati wa msimu wa kupanda ndio jeraha linaloripotiwa zaidi kutoka kwa muundo huu.", "Poncez chaque surface. Les échardes en saison de plantation sont la blessure la plus signalée pour cette construction."),
    ],
    notes: [
      L("Growers in Busia set the rope knots from their own seed packet spacing rather than from a general rule.", "Wakulima wa Busia huweka mafundo ya kamba kutoka nafasi ya kifurushi chao cha mbegu badala ya kanuni ya jumla.", "Les cultivateurs de Busia règlent les nœuds du cordeau selon l'espacement indiqué sur leur sachet de graines plutôt que selon une règle générale."),
      L("A second knot colour for the row spacing saves re measuring between beds.", "Rangi ya pili ya fundo kwa nafasi ya mistari huokoa kupima upya kati ya mashamba.", "Une seconde couleur de nœud pour l'espacement des rangs évite de remesurer entre les planches."),
    ],
  },
  {
    slug: "school-science-kit-local-materials",
    category: "education",
    skill: "beginner",
    image: "/images/schools-classroom.jpg",
    imageAlt: L(
      "Young learners in a classroom studying with a teacher and a model",
      "Wanafunzi wachanga darasani wakijifunza na mwalimu na mfano",
      "Deux jeunes élèves en classe avec un enseignant et une maquette",
    ),
    featured: false,
    version: "1.2",
    updated: "2026-03-08",
    contributor: "Beatrice M.",
    location: "Kampala, Uganda",
    title: L(
      "School science kit from local materials",
      "Kifaa cha sayansi cha shule kutoka vifaa vya karibu",
      "Kit scientifique scolaire en matériaux locaux",
    ),
    summary: L(
      "A reusable class kit that teaches measurement, levers, circuits and water filtration with bottles, card, wire and sand.",
      "Kifaa cha darasa kinachorudiwa kufundisha vipimo, leveri, saketi na uchujaji wa maji kwa chupa, kadibodi, waya na mchanga.",
      "Un kit de classe réutilisable qui enseigne mesure, leviers, circuits et filtration de l'eau avec bouteilles, carton, fil et sable.",
    ),
    overview: L(
      "Four experiments in one box, mapped to lower secondary physics, chemistry and biology topics. Each experiment uses consumables a school can replace for almost nothing, and each one has a failure mode students are asked to find on purpose. The kit is designed for groups of three and a single 40 minute lesson.",
      "Majaribio manne kwenye sanduku moja, yaliyounganishwa na mada za fizikia, kemia na baiolojia ya sekondari ya chini. Kila jaribio hutumia vifaa ambavyo shule inaweza kubadilisha kwa karibu chochote, na kila moja lina njia ya kushindwa ambayo wanafunzi wanaombwa waigundue kwa makusudi. Kifaa kimeundwa kwa vikundi vya watatu na somo moja la dakika 40.",
      "Quatre expériences dans une seule boîte, reliées aux thèmes de physique, chimie et biologie du premier cycle secondaire. Chaque expérience utilise des consommables remplaçables pour presque rien, et chacune a un mode de défaillance que les élèves doivent provoquer volontairement. Le kit est conçu pour des groupes de trois et une séance de 40 minutes.",
    ),
    buildTime: L("Two hours to assemble the box", "Saa mbili kukusanya sanduku", "Deux heures pour assembler la boîte"),
    cost: L("Low, mostly reused containers", "Ndogo, hasa vyombo vilivyotumika", "Faible, surtout récipients réutilisés"),
    materials: [
      L("Four clear 1.5 litre bottles, tops cut off", "Chupa nne wazi za lita 1.5, vichwa vimekatwa", "Quatre bouteilles transparentes de 1,5 litre, haut découpé"),
      L("Corrugated card or cereal boxes for levers and frames", "Kadibodi au masanduku ya nafaka kwa leveri na fremu", "Carton ondulé ou boîtes de céréales pour leviers et cadres"),
      L("Sand, gravel and cotton wool for the filter column", "Mchanga, kokoto na pamba kwa safu ya kichujio", "Sable, graviers et coton pour la colonne de filtration"),
      L("Insulated wire, a small bulb holder and two bulbs", "Waya uliofunikwa, kishikilia bulb na balbu mbili", "Fil isolé, une douille et deux ampoules"),
      L("Two size AA battery holders and batteries", "Vishikilia betri viwili vya saizi AA na betri", "Deux porte piles AA et des piles"),
      L("Steel ruler, string and a set of washers as masses", "Rula ya chuma, kamba na seti ya washeri kama uzito", "Règle en acier, ficelle et un jeu de rondelles comme masses"),
      L("A labelled storage box with a lid", "Sanduku la kuhifadhi lenye jina na mfuniko", "Une boîte de rangement étiquetée avec couvercle"),
    ],
    tools: [
      L("Scissors and a craft knife with a cutting board", "Mkasi na kisu cha kazi na ubao wa kukatia", "Ciseaux et cutter avec planche de découpe"),
      L("Wire strippers", "Kikata waya", "Pince à dénuder"),
      L("Marker pens and labels", "Kalamu za alama na lebo", "Marqueurs et étiquettes"),
      L("Stapler and tape", "Stapla na tepu", "Agrafeuse et ruban adhésif"),
    ],
    steps: [
      L("Cut the bottles to make two beakers and two filter columns, and smooth every cut edge with tape.", "Kata chupa kufanya vikombe viwili vya kupimia na nguzo mbili za kichujio, na lainisha kila ukingo wa mkato kwa tepu.", "Découpez les bouteilles pour obtenir deux béchers et deux colonnes de filtration, et lissez chaque bord coupé avec du ruban."),
      L("Build the lever rig from card: a fulcrum block, a beam with holes every 2 cm, and string loops for the masses.", "Jenga kifaa cha leveri kutoka kadibodi: kizuizi cha mhimili, boriti yenye matundu kila sentimita 2, na vitanzi vya kamba kwa uzito.", "Construisez le montage de levier en carton : un bloc pivot, une poutre percée tous les 2 cm et des boucles de ficelle pour les masses."),
      L("Wire the circuit board: two battery holders, a switch made from a paper clip, and two bulb holders so students can build series and parallel.", "Unganisha ubao wa saketi: vishikilia betri viwili, swichi kutoka klipu ya karatasi, na vishikilia balbu viwili ili wanafunzi waweze kujenga mfululizo na sambamba.", "Câblez le circuit : deux porte piles, un interrupteur en trombone et deux douilles, pour que les élèves montent série et parallèle."),
      L("Pack the filter column in layers, label each layer, and keep the sand and gravel dry in a separate bag between lessons.", "Pakia safu ya kichujio kwa tabaka, andika jina kila tabaka, na weka mchanga na kokoto vikavu kwenye mfuko tofauti kati ya masomo.", "Garnissez la colonne par couches, étiquetez chaque couche et gardez sable et graviers au sec dans un sac séparé entre les séances."),
      L("Write the four task cards, one per experiment, each with a question, a prediction line and a place to record what failed.", "Andika kadi nne za kazi, moja kwa kila jaribio, kila moja ikiwa na swali, mstari wa utabiri na nafasi ya kuandika kilichoshindwa.", "Rédigez les quatre fiches de tâches, une par expérience, chacune avec une question, une ligne de prédiction et un espace pour noter l'échec."),
    ],
    safety: [
      L("Cut plastic is sharp. Tape every rim before the kit reaches a student.", "Plastiki iliyokatwa ni kali. Tanda kila mdomo kwa tepu kabla kifaa hakijafika kwa mwanafunzi.", "Le plastique coupé est tranchant. Couvrez chaque bord de ruban avant que le kit n'arrive à un élève."),
      L("Battery circuits are low voltage and safe, but short circuits get hot fast. Teach students to disconnect between changes.", "Saketi za betri ni za volti ndogo na salama, lakini shorti hupata moto haraka. Wafundishe wanafunzi kukata kati ya mabadiliko.", "Les circuits sur piles sont basse tension et sûrs, mais les courts circuits chauffent vite. Apprenez aux élèves à débrancher entre les essais."),
      L("A teacher must supervise cutting and any craft knife use. No exceptions.", "Mwalimu lazima asimamie ukataji na matumizi yoyote ya kisu cha kazi. Hakuna ubaguzi.", "Un enseignant doit superviser toute découpe et tout usage de cutter. Sans exception."),
      L("Never filter and then drink water in class. The column is for observing turbidity, not for making drinking water.", "Usichuje kisha unywe maji darasani. Nguzo ni kwa kuangalia utelezi, si kutengeneza maji ya kunywa.", "Ne filtrez puis ne buvez jamais l'eau en classe. La colonne sert à observer la turbidité, pas à produire de l'eau potable."),
    ],
    notes: [
      L("Teachers in Kampala report that the parallel circuit task works better before the series task, not after.", "Walimu wa Kampala wanaripoti kuwa kazi ya saketi sambamba hufanya kazi vizuri kabla ya kazi ya mfululizo, si baada yake.", "Les enseignants de Kampala signalent que l'exercice sur le circuit parallèle réussit mieux avant celui sur le circuit série, et non après."),
      L("Keep a spare bulb holder in the box. It is the part that breaks most often.", "Weka kishikilia balbu cha akiba kwenye sanduku. Ndicho sehemu inayovunjika mara nyingi zaidi.", "Gardez une douille de rechange dans la boîte. C'est la pièce qui casse le plus souvent."),
    ],
  },
  {
    slug: "adjustable-walking-frame-prototype",
    category: "health-assist",
    skill: "intermediate",
    image: "/images/cat-health.jpg",
    imageAlt: L(
      "A health worker in protective equipment adjusting safety goggles indoors",
      "Mfanyakazi wa afya akiwa na vifaa vya kinga akirekebisha miwani ya usalama ndani",
      "Un agent de santé en équipement de protection ajustant des lunettes de sécurité",
    ),
    featured: false,
    version: "0.9",
    updated: "2026-04-19",
    contributor: "Technicians at Kisii Rehab Workshop",
    location: "Kisii, Kenya",
    title: L(
      "Adjustable walking frame prototype",
      "Kielelezo cha fremu ya kutembea inayobadilishwa",
      "Prototype de cadre de marche réglable",
    ),
    summary: L(
      "A height adjustable frame built from conduit or aluminium tube, published as a teaching and prototyping reference for technicians.",
      "Fremu inayobadilishwa kwa urefu iliyojengwa kwa bomba la umeme au neli ya alumini, iliyochapishwa kama marejeo ya kufundishia na kuiga kwa mafundi.",
      "Un cadre réglable en hauteur en tube de conduit ou d'aluminium, publié comme référence pédagogique et de prototypage pour techniciens.",
    ),
    overview: L(
      "This is a workshop reference, not a device for use. It documents how a frame is sized, how height adjustment is locked safely, and how feet are made non slip. Any frame used by a person must be measured and fitted by a qualified clinician or orthopaedic technician, then checked at every follow up.",
      "Hili ni rejeo la karakana, si kifaa cha matumizi. Linaelekeza jinsi fremu inavyokadiriwa, jinsi urekebishaji wa urefu unavyofungiwa salama, na jinsi miguu inavyofanywa isiteleze. Fremu yoyote inayotumiwa na mtu lazima ipimwe na kuwekwa na daktari au fundi wa viungo aliyehitimu, kisha ikaguliwe kila anaporudi.",
      "Ceci est une référence d'atelier, pas un dispositif d'usage. Elle décrit comment dimensionner un cadre, comment verrouiller le réglage en hauteur en sécurité et comment rendre les pieds antidérapants. Tout cadre utilisé par une personne doit être mesuré et ajusté par un clinicien ou un technicien orthopédiste qualifié, puis vérifié à chaque suivi.",
    ),
    buildTime: L("One day in a workshop", "Siku moja karakana", "Une journée en atelier"),
    cost: L("Medium, metal tube and fittings", "Kati, neli ya chuma na viungio", "Moyen, tube métallique et raccords"),
    materials: [
      L("Two lengths of aluminium or steel conduit tube for the sides", "Vipande viwili vya neli ya alumini au chuma kwa pande", "Deux longueurs de tube aluminium ou acier pour les côtés"),
      L("Two cross braces and four corner joints", "Vibanzi viwili vya msalaba na viungio vinne vya pembe", "Deux traverses et quatre raccords d'angle"),
      L("Telescoping inserts with through bolts for height adjustment", "Viingizio vya telescopu na bolti za kupitisha kwa urekebishaji wa urefu", "Tubes télescopiques avec boulons traversants pour le réglage en hauteur"),
      L("Four non slip rubber feet", "Miguu minne ya mpira isiyoteleza", "Quatre pieds en caoutchouc antidérapants"),
      L("Two hand grips, shaped and skin safe", "Vishikizo viwili vya mkono, vilivyoundwa na salama kwa ngozi", "Deux poignées ergonomiques et sans danger pour la peau"),
      L("Round head bolts so nothing protrudes", "Bolti zenye vichwa vya duara ili kusitokeze chochote", "Boulons à tête ronde pour qu'aucune partie ne dépasse"),
    ],
    tools: [
      L("Tube cutter or hacksaw", "Kikata neli au msumeno wa chuma", "Coupe tube ou scie à métaux"),
      L("Drill and metal bits", "Kizibo na visu vya chuma", "Perceuse et forets à métal"),
      L("Files and deburring tool", "Tupa na chombo cha kuondoa miba", "Limes et outil à ébavurer"),
      L("Spanners and a torque check habit", "Spana na mazoea ya kukagua kaza", "Clés et l'habitude de vérifier le serrage"),
      L("Rubber mallet", "Nyundo ya mpira", "Maillet en caoutchouc"),
    ],
    steps: [
      L("Cut the four legs to the longest setting you will fit, then deburr every cut inside and out.", "Kata miguu minne kwa mpangilio mrefu zaidi utakaowekewa, kisha ondoa miba kila mkato ndani na nje.", "Coupez les quatre pieds au réglage le plus long que vous ajusterez, puis ébavurez chaque coupe à l'intérieur et à l'extérieur."),
      L("Drill the height adjustment holes through both tubes at matching spacing, so a single through bolt carries the load at each setting.", "Toa matundu ya urekebishaji wa urefu kwenye neli zote mbili kwa nafasi zinazolingana, ili bolt moja ya kupitisha ibebe mzigo kwenye kila mpangilio.", "Percez les trous de réglage dans les deux tubes avec un espacement identique, pour qu'un seul boulon traversant porte la charge à chaque position."),
      L("Assemble the side frames with the cross braces, check they are square, then tighten every joint and mark the bolt heads so a loose one is visible.", "Kusanya fremu za pembeni na vibanzi vya msalaba, hakikisha ziko mraba, kisha kaza kila unganisho na weka alama kwenye vichwa vya bolti ili iliyolegea ionekane.", "Assemblez les cadres latéraux avec les traverses, vérifiez l'équerrage, serrez chaque raccord et marquez les têtes de boulons pour repérer tout desserrage."),
      L("Fit the grips and the rubber feet, then round or cover every edge a hand or a wrist can touch.", "Funga vishikizo na miguu ya mpira, kisha virandisha au funika kila ukingo unaoweza kuguswa na mkono au kifundo.", "Posez les poignées et les pieds antidérapants, puis arrondissez ou couvrez chaque bord que la main ou le poignet peut toucher."),
      L("Load test the frame on a bench before anyone stands near it, pushing down progressively to well above expected body weight.", "Jaribu fremu kwa mzigo kwenye benchi kabla mtu yeyote hajasimama karibu nayo, ukisukuma chini taratibu hadi zaidi ya uzito wa mwili unaotarajiwa.", "Testez la charge du cadre sur un établi avant que quiconque s'en approche, en poussant progressivement bien au delà du poids corporel attendu."),
    ],
    safety: [
      L("This is a teaching and prototyping reference. It is not a medical device and must not be given to a person to use.", "Hili ni rejeo la kufundishia na kuiga. Si kifaa cha tiba na hakipaswi kupewa mtu kukitumia.", "Ceci est une référence pédagogique et de prototypage. Ce n'est pas un dispositif médical et ne doit pas être confié à une personne."),
      L("Height, grip width and fit must be set by a qualified clinician or orthopaedic technician for the individual user.", "Urefu, upana wa mpini na uwekaji lazima vipangwe na daktari au fundi wa viungo aliyehitimu kwa mtumiaji husika.", "La hauteur, la largeur des poignées et l'ajustement doivent être réglés par un clinicien ou technicien orthopédiste qualifié pour chaque utilisateur."),
      L("Height adjustment is the failure point. Use through bolts with nyloc nuts, never friction alone, and recheck after the first week of use.", "Urekebishaji wa urefu ndio mahali pa kushindwa. Tumia bolti za kupitisha na nati za nailoki, kamwe msuguano peke yake, na kagua tena baada ya wiki ya kwanza ya matumizi.", "Le réglage en hauteur est le point de rupture. Utilisez des boulons traversants avec écrous nyloc, jamais la seule friction, et revérifiez après la première semaine."),
      L("Rubber feet wear smooth. Check them at every review and replace them before the frame is used again.", "Miguu ya mpira huchakaa na kuwa laini. Ikague kila ukaguzi na ibadilishe kabla fremu haitatumika tena.", "Les pieds en caoutchouc se lissent. Vérifiez les à chaque contrôle et remplacez les avant toute réutilisation."),
    ],
    notes: [
      L("The workshop marks every bolt head with a paint line across the joint so a loosening bolt is obvious at a glance.", "Karakana huweka mstari wa rangi kwenye kila kichwa cha bolt kupitia unganisho ili bolt inayolegea ionekane mara moja.", "L'atelier trace un repère de peinture sur chaque tête de boulon à travers le raccord, pour qu'un desserrage se voie d'un coup d'œil."),
      L("Technicians report that users prefer a slightly narrower frame than fitters first choose, so make the width adjustable where you can.", "Mafundi wanaripoti kuwa watumiaji hupendelea fremu nyembamba kidogo kuliko wanavyochagua wawekaji, kwa hiyo fanya upana ubadilishwe pale inapowezekana.", "Les techniciens signalent que les utilisateurs préfèrent un cadre légèrement plus étroit que le premier choix des ajusteurs : rendez la largeur réglable si possible."),
    ],
  },
  {
    slug: "bicycle-cargo-trailer",
    category: "mobility",
    skill: "intermediate",
    image: "/images/cat-mobility.jpg",
    imageAlt: L(
      "An older mechanic repairs a bicycle in an outdoor workshop, showing local craftsmanship",
      "Fundi mzee anakarabati baiskeli kwenye karakana ya nje, akionyesha ufundi wa karibu",
      "Un mécanicien âgé répare un vélo dans un atelier en plein air, montrant un savoir faire local",
    ),
    featured: false,
    version: "1.1",
    updated: "2026-01-09",
    contributor: "Bwindi workshop team",
    location: "Bwindi, Uganda",
    title: L(
      "Bicycle cargo trailer",
      "Trela ya mizigo ya baiskeli",
      "Remorque de vélo porte charge",
    ),
    summary: L(
      "A single wheel trailer from two salvaged bicycle wheels, angle iron or timber, and a hitch that clamps to the seat post.",
      "Trela ya gurudumu moja kutoka magurudumu mawili ya baiskeli yaliyookotwa, chuma cha pembe au mbao, na kiungio kinachobana kwenye mti wa kiti.",
      "Une remorque à une roue à partir de deux roues de vélo récupérées, cornière ou bois, et un attelage qui se fixe sur la tige de selle.",
    ),
    overview: L(
      "Two wheels become a stable single wheel trailer with a low platform and a hitch that swivels but cannot disconnect. The low deck keeps the load near the axle so the trailer tracks straight. Built with a grinder, a drill and a welder, or with bolts and clamps if you have no welder.",
      "Magurudumu mawili yanakuwa trela imara ya gurudumu moja yenye jukwaa la chini na kiungio kinachozunguka lakini hakiwezi kutengana. Jukwaa la chini huweka mzigo karibu na ekseli ili trela ifuate mstari ulionyooka. Imejengwa kwa mashine ya kusaga, kizibo na mashine ya kulehemia, au kwa bolti na vibano kama huna mashine ya kulehemia.",
      "Deux roues deviennent une remorque à une roue stable avec un plateau bas et un attelage pivotant mais indétachable. Le plateau bas garde la charge près de l'axe pour que la remorque suive une trajectoire droite. Se construit avec une meuleuse, une perceuse et une soudeuse, ou avec boulons et colliers sans soudeuse.",
    ),
    buildTime: L("Two days", "Siku mbili", "Deux jours"),
    cost: L("Low to medium, mostly salvage", "Ndogo hadi kati, hasa vyakavu", "Faible à moyen, surtout récupération"),
    materials: [
      L("Two matching salvaged bicycle wheels, 26 inch or larger", "Magurudumu mawili ya baiskeli yaliyookotwa yanayofanana, inchi 26 au zaidi", "Deux roues de vélo récupérées identiques, 26 pouces ou plus"),
      L("Angle iron or hardwood for the frame rails", "Chuma cha pembe au mbao ngumu kwa reli za fremu", "Cornière ou bois dur pour les longerons"),
      L("Plywood or reclaimed board for the deck", "Plywood au ubao uliookotwa kwa jukwaa", "Contreplaqué ou planches de récupération pour le plateau"),
      L("A hitch clamp sized for the seat post", "Kibanio cha kiungio chenye ukubwa wa mti wa kiti", "Un collier d'attelage adapté à la tige de selle"),
      L("A swivel joint with a locking pin or bolt", "Unganisho linalozunguka na pini au bolt ya kufunga", "Une articulation pivotante avec goupille ou boulon de verrouillage"),
      L("Reflector and a flag or light mount", "Kireflecta na bendera au kishikilia taa", "Catadioptre et support de drapeau ou de feu"),
      L("Bolts, nuts and locking washers", "Bolti, nati na washeri za kufunga", "Boulons, écrous et rondelles frein"),
    ],
    tools: [
      L("Angle grinder with cutting and flap discs", "Mashine ya kusaga yenye diski za kukata na kusawazisha", "Meuleuse d'angle avec disques à tronçonner et à lamelles"),
      L("Drill and metal bits", "Kizibo na visu vya chuma", "Perceuse et forets à métal"),
      L("Spanner and socket set", "Seti ya spana na soketi", "Jeu de clés et de douilles"),
      L("Welder, or a bolted build with clamps", "Mashine ya kulehemia, au muundo wa bolti na vibano", "Poste à souder, ou montage boulonné avec colliers"),
      L("Square and tape measure", "Pembe mraba na tepu ya kupimia", "Équerre et mètre ruban"),
    ],
    steps: [
      L("Check both wheels for true, spoke tension and rim cracks, then build the frame rails so the wheel sits centred between them.", "Kagua magurudumu yote ikiwa yako sawa, mkazo wa spi na nyufa za rimu, kisha jenga reli za fremu ili gurudumu likae katikati yake.", "Vérifiez les deux roues (voile, tension des rayons, fissures de jante), puis construisez les longerons pour que la roue soit centrée."),
      L("Build the deck low, no higher than the wheel axle, and fix it so it cannot flex under a loaded corner.", "Jenga jukwaa chini, si juu kuliko ekseli ya gurudumu, na lifunge lisipinde chini ya kona yenye mzigo.", "Construisez le plateau bas, pas plus haut que l'axe de roue, et fixez le pour qu'il ne fléchisse pas en virage chargé."),
      L("Make the hitch from a seat post clamp and a swivel joint that is retained by a bolt, so it can rotate but never pull apart.", "Tengeneza kiungio kutoka kibanio cha mti wa kiti na unganisho linalozunguka lililoshikiliwa na bolt, ili lizunguke lakini lisitengane kamwe.", "Fabriquez l'attelage avec un collier de tige de selle et une articulation retenue par un boulon : elle peut pivoter mais jamais se séparer."),
      L("Add side rails or tie down points, so a load can be strapped at four points and cannot shift onto the wheel.", "Ongeza reli za pembeni au sehemu za kufungia, ili mzigo ufungwe katika sehemu nne usisogee kuelekea gurudumu.", "Ajoutez des ridelles ou des points d'arrimage, pour sangler la charge en quatre points et l'empêcher de glisser sur la roue."),
      L("Fit a reflector and a flag, then test with sandbags: straight line, figure of eight, and an emergency stop from walking pace.", "Funga kireflecta na bendera, kisha jaribu na mifuko ya mchanga: mstari ulionyooka, umbo la nane, na kusimama ghafla kutoka mwendo wa kutembea.", "Posez un catadioptre et un drapeau, puis testez avec des sacs de sable : ligne droite, huit et arrêt d'urgence à allure lente."),
    ],
    safety: [
      L("A trailer doubles your stopping distance. Ride slower than you think, and test braking on a quiet surface first.", "Trela huongeza mara mbili umbali wa kusimama. Endesha polepole kuliko unavyofikiri, na jaribu breki kwenye uso tulivu kwanza.", "Une remorque double la distance de freinage. Roulez plus lentement que vous ne le pensez et testez le freinage sur une surface calme."),
      L("Never carry passengers. The deck is for goods only.", "Usibebe abiria kamwe. Jukwaa ni la mizigo pekee.", "Ne transportez jamais de passagers. Le plateau est réservé aux marchandises."),
      L("The hitch is the part that fails. Use a retained swivel, check it before every ride, and never tow with a rope.", "Kiungio ndio sehemu inayoshindwa. Tumia unganisho lililoshikiliwa, likague kabla ya kila safari, na usivute kamwe kwa kamba.", "L'attelage est la pièce qui cède. Utilisez une articulation retenue, vérifiez la avant chaque sortie et ne tractez jamais avec une corde."),
      L("Load low and centred. High or offset loads tip the trailer in the second corner, not the first.", "Pakia chini na katikati. Mizigo ya juu au iliyosogea huelekeza trela kwenye kona ya pili, si ya kwanza.", "Chargez bas et centré. Une charge haute ou décentrée fait basculer la remorque au deuxième virage, pas au premier."),
    ],
    notes: [
      L("The Bwindi team uses two rear wheels rather than front wheels, because rear hubs take side load better.", "Timu ya Bwindi hutumia magurudumu mawili ya nyuma badala ya ya mbele, kwa sababu hubu za nyuma huvumilia mzigo wa pembeni vizuri zaidi.", "L'équipe de Bwindi utilise deux roues arrière plutôt que des roues avant, car les moyeux arrière supportent mieux la charge latérale."),
      L("Welders report that the hitch plate should be twice the thickness that looks right. It is the only part that never gets replaced once it bends.", "Wanaolehemia wanaripoti kuwa bati la kiungio liwe mara mbili ya unene unaoonekana sawa. Ndicho sehemu pekee isiyobadilishwa mara inapopinda.", "Les soudeurs signalent que la platine d'attelage doit être deux fois plus épaisse que ce qui paraît juste. C'est la seule pièce jamais remplacée une fois pliée."),
    ],
  },
];

export function getBlueprint(slug: string) {
  return blueprints.find((b) => b.slug === slug);
}

export function relatedBlueprints(slug: string, limit = 3) {
  const current = getBlueprint(slug);
  if (!current) return blueprints.slice(0, limit);
  const sameCategory = blueprints.filter(
    (b) => b.slug !== slug && b.category === current.category,
  );
  const others = blueprints.filter(
    (b) => b.slug !== slug && b.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function featuredBlueprints(limit = 3) {
  return blueprints.filter((b) => b.featured).slice(0, limit);
}
