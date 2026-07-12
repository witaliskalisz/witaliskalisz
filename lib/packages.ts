export type PackageCategory = "individual";

export interface Package {
  slug: string;
  category: PackageCategory;
  name: string;
  tagline: string;
  price: number | null; // null = "wycena indywidualna"
  unit?: string;
  minPersons?: number;
  duration: string;
  featured?: boolean;
  badge?: string;
  description: string;
  includes: string[];
  forWhom: string[];
  outcomes: string[];
  /** Niebieskie linki „dla chętnych" do szczegółowych opisów badań. */
  learnMore?: { label: string; href: string }[];
  metadata: {
    /** Etykieta cenowa w UI — np. "249 zł" lub "od 849 zł". */
    priceLabel: string;
    /** Opcjonalny dopisek pod ceną — np. informacja o zmiennej wycenie. */
    priceNote?: string;
    /** Główny kolor akcentu karty (Tailwind). */
    accent: "blue" | "violet" | "cyan" | "emerald" | "amber" | "rose" | "graphite";
  };
}

export const PACKAGES: Package[] = [
  {
    slug: "start",
    category: "individual",
    name: "Start",
    tagline: "Pierwszy rzut oka na Twój organizm",
    price: 249,
    duration: "60 min",
    description:
      "Idealny pierwszy krok — zobaczysz na żywo, co dzieje się w Twojej krwi. Jak wyglądają Twoje erytrocyty, leukocyty i czy obecne są struktury niepożądane. Dostaniesz pierwsze wskazówki, od czego zacząć.",
    includes: [
      "Mikroskopowe badanie żywej kropli krwi (powiększenie do 1600×)",
      "Konsultacja: omówienie obrazu krwi prostym językiem",
      "Pierwsze wskazówki kierunku dalszej diagnostyki",
    ],
    forWhom: [
      "Osoby ciekawe stanu swojej krwi",
      "Pierwsza wizyta — chcesz nas poznać",
      "Chcesz zacząć bez dużej inwestycji",
    ],
    outcomes: [
      "Wstępna ocena stanu organizmu",
      "Mapa potencjalnych problemów",
      "Rekomendacja dalszych kroków",
    ],
    learnMore: [
      { label: "Jak wygląda badanie żywej kropli krwi?", href: "/badanie-zywej-kropli-krwi" },
    ],
    metadata: { priceLabel: "249 zł", accent: "blue" },
  },
  {
    slug: "gut-health",
    category: "individual",
    name: "Gut Health",
    tagline: "Twoje jelita — drugi mózg, którego nikt nie słucha",
    price: null,
    duration: "od 90 min",
    featured: true,
    badge: "Najpopularniejszy",
    description:
      "Wzdęcia, zaparcia, IBS, problemy skórne, migreny, przewlekłe zmęczenie — źródło często leży w jelitach. Test nietolerancji pokarmowych IgG (FoodDetective™) + analiza obrazu krwi pod kątem candidy, obecności pasożytów, zaburzeń trawienia i nieszczelnych jelit. Cena zależy od liczby badanych produktów.",
    includes: [
      "Test nietolerancji pokarmowych IgG (FoodDetective™)",
      "Mikroskopowe badanie żywej kropli krwi (metale ciężkie, pasożyty, grzyby/candida)",
      "Konsultacja: omówienie wyników prostym językiem",
      "Personalny plan diety eliminacyjnej",
      "Plan wsparcia mikroflory (probiotyki)",
    ],
    forWhom: [
      "Wzdęcia, zaparcia, biegunki, IBS",
      "Problemy skórne (AZS, trądzik, łuszczyca)",
      "Migreny, brain fog, zmęczenie po posiłku",
      "Problemy ze zrzuceniem dodatkowych kilogramów",
    ],
    outcomes: [
      "Lista nietolerowanych pokarmów",
      "Plan eliminacyjny dopasowany do Ciebie",
      "Plan odbudowy mikroflory jelitowej",
    ],
    learnMore: [
      { label: "Badanie na nietolerancję pokarmową — szczegóły", href: "/test-nietolerancji-pokarmowej" },
    ],
    metadata: {
      priceLabel: "od 849 zł",
      priceNote: "Cena zależna od liczby badanych produktów",
      accent: "emerald",
    },
  },
  {
    slug: "vitamins",
    category: "individual",
    name: "Witaminy & Minerały",
    tagline: "Znajdź ukryte niedobory, które kradną Ci energię",
    price: 449,
    duration: "75 min",
    description:
      "Przewlekłe zmęczenie, mgła mózgowa, wypadające włosy — to tylko część ukrytych niedoborów. Analizator Zdrowia Quantum (Kwantowy Magnetyczny Analizator Rezonansowy) bezinwazyjnie ocenia niedobory witamin, minerałów, aminokwasów i enzymów oraz pracę narządów strategicznych. Dostaniesz indywidualnie dobrany plan suplementacji.",
    includes: [
      "Mikroskopowe badanie żywej kropli krwi",
      "Badanie analizatorem zdrowia Quantum",
      "Indywidualnie dobrany plan suplementacji (90 dni)",
      "Karta zaleceń dietetycznych",
    ],
    forWhom: [
      "Permanentne zmęczenie i brak energii",
      "Słaba koncentracja i mgła mózgowa",
      "Wypadające włosy, łamliwe paznokcie",
      "Anemia w wywiadzie",
    ],
    outcomes: [
      "Lista przebadanych niedoborów",
      "90-dniowy plan suplementacji",
    ],
    learnMore: [
      { label: "Analizator Zdrowia Quantum — szczegóły", href: "/analizator-quantum" },
    ],
    metadata: { priceLabel: "449 zł", accent: "amber" },
  },
  {
    slug: "full-body",
    category: "individual",
    name: "Full Body Premium",
    tagline: "Wszystko o Tobie. Jeden kompleksowy raport.",
    price: 1899,
    duration: "3 wizyty × 90 min",
    badge: "Najpełniejszy",
    description:
      "Najpełniejsza diagnostyka, jaką oferujemy w jednym pakiecie — połączenie wszystkich naszych narzędzi: badanie żywej kropli krwi, testy na nietolerancje pokarmowe FoodDetective™ na 59 produktów, biorezonans urządzeniem HEALTH DIAGNOSTIC SCANNER 3D oraz kompleksowa ocena niedoborów witamin i minerałów Analizatorem Quantum. Plus 90-dniowy program wsparcia z konsultacjami kontrolnymi.",
    includes: [
      "Mikroskopowe badanie żywej kropli krwi",
      "Test nietolerancji pokarmowych FoodDetective™ (59 produktów)",
      "Kompleksowa analiza niedoborów witamin i minerałów analizatorem Quantum",
      "Biorezonans urządzeniem HEALTH DIAGNOSTIC SCANNER 3D",
      "3 konsultacje indywidualne (30, 60 i 90 dni)",
      "Plan suplementacyjny",
      "Rozpisana kuracja wspierająca organizm",
    ],
    forWhom: [
      "Chcesz pełny obraz swojego zdrowia",
      "Szczególnie po 40. roku życia",
      "Przed lub po dużych zmianach (dieta, sport, ciąża)",
      "Klient, który chce najwięcej danych naraz",
    ],
    outcomes: [
      "Pełna mapa stanu zdrowia",
      "90-dniowy program transformacji",
      "Kontrola po 12 miesiącach (rekomendacja)",
    ],
    learnMore: [
      { label: "Badanie żywej kropli krwi", href: "/badanie-zywej-kropli-krwi" },
      { label: "Test na nietolerancję pokarmową", href: "/test-nietolerancji-pokarmowej" },
      { label: "Analizator Zdrowia Quantum", href: "/analizator-quantum" },
      { label: "HEALTH DIAGNOSTIC SCANNER 3D", href: "/health-diagnostic-scanner-3d" },
    ],
    metadata: { priceLabel: "1 899 zł", accent: "blue" },
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return PACKAGES.find((p) => p.slug === slug);
}
