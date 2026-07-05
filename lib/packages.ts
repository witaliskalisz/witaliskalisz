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
  metadata: {
    /** Etykieta cenowa w UI — np. "249 zł" lub "od 349 zł". */
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
      "Wydruk z 3–5 zdjęciami preparatu",
    ],
    forWhom: [
      "Osoby ciekawe stanu swojej krwi",
      "Pierwsza wizyta — chcesz nas poznać",
      "Chcesz zacząć bez dużej inwestycji",
    ],
    outcomes: [
      "Wstępna ocena stanu krwi na żywo",
      "Mapa potencjalnych problemów",
      "Rekomendacja dalszych kroków",
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
      "Wzdęcia, IBS, problemy skórne, migreny, przewlekłe zmęczenie — źródło często leży w jelitach. Test nietolerancji pokarmowych IgG (FoodDetective™) + analiza obrazu krwi pod kątem candidy, dysbiozy i zaburzeń trawienia. Cena zależy od liczby badanych produktów.",
    includes: [
      "Test nietolerancji pokarmowych IgG (FoodDetective™)",
      "Mikroskopowe badanie żywej kropli krwi (candida, dysbioza)",
      "Konsultacja: omówienie wyników prostym językiem",
      "Personalny plan diety eliminacyjnej",
      "Plan wsparcia mikroflory (probiotyki)",
    ],
    forWhom: [
      "Wzdęcia, zaparcia, biegunki, IBS",
      "Problemy skórne (AZS, trądzik, łuszczyca)",
      "Migreny, brain fog, zmęczenie po posiłku",
      "Uporczywe problemy mimo diety",
    ],
    outcomes: [
      "Lista nietolerowanych pokarmów",
      "Plan eliminacyjny dopasowany do Ciebie",
      "Plan odbudowy mikroflory jelitowej",
    ],
    // TODO(Wiktor): potwierdź realną cenę startową Gut Health (na razie placeholder „od 349 zł”).
    metadata: {
      priceLabel: "od 349 zł",
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
      "Przewlekłe zmęczenie, mgła mózgowa, wypadające włosy — to często ukryte niedobory. Sprawdzimy żelazo, B12, kwas foliowy oraz markery mikroelementów. Dostaniesz indywidualnie dobrany plan suplementacji.",
    includes: [
      "Mikroskopowe badanie żywej kropli krwi",
      "Ocena niedoborów Fe, B12, kwasu foliowego (anemie)",
      "Analiza mikroelementów",
      "Indywidualnie dobrany plan suplementacji (30 dni)",
      "Karta zaleceń dietetycznych",
    ],
    forWhom: [
      "Permanentne zmęczenie i brak energii",
      "Słaba koncentracja i mgła mózgowa",
      "Wypadające włosy, łamliwe paznokcie",
      "Anemia w wywiadzie",
    ],
    outcomes: [
      "Lista zidentyfikowanych niedoborów",
      "30-dniowy plan suplementacji",
      "Plan kontroli za 90 dni",
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
      "Najpełniejsza diagnostyka, jaką oferujemy w jednym pakiecie — połączenie wszystkich naszych narzędzi: rozszerzonej analizy żywej kropli krwi, testu nietolerancji pokarmowych FoodDetective™ oraz kompleksowej oceny niedoborów. Plus 90-dniowy program wsparcia z konsultacjami kontrolnymi.",
    includes: [
      "Rozszerzone mikroskopowe badanie żywej kropli krwi",
      "Test nietolerancji pokarmowych FoodDetective™",
      "Kompleksowa analiza niedoborów (Fe, B12, kwas foliowy, mikroelementy)",
      "3 konsultacje indywidualne (start, 30 dni, 90 dni)",
      "Pełny plan żywieniowy + suplementacyjny + lifestyle",
      "Suplementacja startowa na 30 dni w cenie pakietu",
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
    metadata: { priceLabel: "1 899 zł", accent: "blue" },
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return PACKAGES.find((p) => p.slug === slug);
}
