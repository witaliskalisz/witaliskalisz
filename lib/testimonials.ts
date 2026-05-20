export interface Testimonial {
  id: string;
  name: string;
  age: number;
  role: string;
  city: string;
  packageSlug: string;
  rating: 5;
  quote: string;
  result?: string;
  demo: true;
}

/**
 * UWAGA: To są placeholdery zgodne z briefem.
 * Przed publikacją: zebrać prawdziwe zgody klientów (RODO + zgoda marketingowa)
 * i wymienić w tej tablicy. Każdy obiekt ma flagę `demo: true` która jest
 * widoczna w UI jako dyskretny badge.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Magdalena K.",
    age: 38,
    role: "Marketing managerka",
    city: "Kalisz",
    packageSlug: "gut-health",
    rating: 5,
    quote:
      "Przez 4 lata bezskutecznie szukałam przyczyny migren i wzdęć. Test FoodDetective pokazał silne nietolerancje na 7 produktów — w tym te, które jadłam codziennie. Po 6 tygodniach diety eliminacyjnej — całkiem inne życie.",
    result: "Migreny spadły z 8 do 1 w miesiącu",
    demo: true,
  },
  {
    id: "t2",
    name: "Tomasz W.",
    age: 42,
    role: "Triathlonista amator",
    city: "Ostrów Wielkopolski",
    packageSlug: "pro-athlete",
    rating: 5,
    quote:
      "Trenuję 12 godzin tygodniowo, ale ostatnie pół roku — same gorsze czasy. Pakiet Pro Athlete wykrył krytyczny niedobór ferrytyny i magnezu. Po 8 tygodniach na celowanej suplementacji — życiowe PB na półmaratonie.",
    result: "Półmaraton: 1:32 → 1:24",
    demo: true,
  },
  {
    id: "t3",
    name: "Karolina P.",
    age: 29,
    role: "Software engineer",
    city: "Poznań",
    packageSlug: "vitamins",
    rating: 5,
    quote:
      "Klasyczne badania krwi wyszły 'w normie', a ja dosłownie zasypiałam przy biurku. Witalis pokazał niedobory B12 i kwasu foliowego, których standardowy panel NFZ nie pokrył. Życie wróciło.",
    result: "Energia 4/10 → 9/10 w 6 tygodni",
    demo: true,
  },
  {
    id: "t4",
    name: "Krzysztof M.",
    age: 51,
    role: "CEO firmy budowlanej",
    city: "Kalisz",
    packageSlug: "vip-longevity",
    rating: 5,
    quote:
      "Po 50-tce zaczęło mi spadać tempo. Wybrałem program 6-miesięczny. Najlepsza inwestycja zdrowotna mojego życia. Pełna kontrola, regularne re-testy, indywidualna suplementacja.",
    result: "Kortyzol w normie, sen +2h jakości",
    demo: true,
  },
  {
    id: "t5",
    name: "Anna J.",
    age: 45,
    role: "HR Director",
    city: "Wrocław",
    packageSlug: "team-vitality",
    rating: 5,
    quote:
      "Wprowadziliśmy Team Vitality jako benefit dla naszych 34 osób. Po pół roku — absencja spadła o 23%, ankiety wewnętrzne pokazały skok satysfakcji z pakietu benefitów o 41%.",
    result: "L4: -23%, eNPS: +18 punktów",
    demo: true,
  },
  {
    id: "t6",
    name: "Piotr S.",
    age: 33,
    role: "Atopowe zapalenie skóry, od dziecka",
    city: "Łódź",
    packageSlug: "food-print-200",
    rating: 5,
    quote:
      "30 lat życia ze swędzącymi rumieńcami. Standardowi dermatolodzy — sterydy i tyle. Food Print 200+ pokazał 17 produktów do eliminacji. Po 4 miesiącach — skóra pierwszy raz w życiu czysta.",
    result: "Powierzchnia zmian skórnych: -85%",
    demo: true,
  },
  {
    id: "t7",
    name: "Joanna B.",
    age: 36,
    role: "Mama trójki dzieci, ciągłe zmęczenie",
    city: "Kalisz",
    packageSlug: "start",
    rating: 5,
    quote:
      "Zaczęłam od pakietu Start, sceptycznie. Pani Marzena pokazała mi na ekranie moją krew — agregaty erytrocytów, niska aktywność leukocytów. Wzięłam to poważnie. Po Witaminach & Minerałach jestem nowym człowiekiem.",
    result: "Energia: stabilna przez cały dzień",
    demo: true,
  },
  {
    id: "t8",
    name: "Dariusz K.",
    age: 47,
    role: "Trener piłki nożnej, MUKS U-17",
    city: "Pleszew",
    packageSlug: "team-sport",
    rating: 5,
    quote:
      "Zaprosiliśmy Witalis do badań drużyny U-17. Wyniki zaskoczyły — 60% chłopaków miało krytyczny niedobór D3, połowa anemię z niedoboru żelaza. Sezon zakończyliśmy bez kontuzji poważnych — pierwszy raz od 5 lat.",
    result: "Kontuzje sezonu: 11 → 2",
    demo: true,
  },
];
