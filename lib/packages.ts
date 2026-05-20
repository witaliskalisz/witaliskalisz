export type PackageCategory = "individual" | "business" | "sport";

export interface Package {
  slug: string;
  category: PackageCategory;
  name: string;
  tagline: string;
  price: number | null; // null = "wycena indywidualna"
  unit?: string; // "/os." dla B2B
  minPersons?: number;
  duration: string;
  featured?: boolean;
  badge?: string;
  description: string;
  includes: string[];
  forWhom: string[];
  outcomes: string[];
  metadata: {
    /** Etykieta cenowa w UI — np. "od 249 zł" lub "Wycena indywidualna". */
    priceLabel: string;
    /** Główny kolor akcentu karty (Tailwind). */
    accent: "blue" | "violet" | "cyan" | "emerald" | "amber" | "rose" | "graphite";
  };
}

export const PACKAGES: Package[] = [
  // ============================================================
  // INDYWIDUALNE — B2C
  // ============================================================
  {
    slug: "start",
    category: "individual",
    name: "Start",
    tagline: "Pierwszy rzut oka na Twój organizm",
    price: 249,
    duration: "60 min",
    description:
      "Idealny pierwszy krok — sprawdzisz, co dzieje się w Twojej krwi, zanim zainwestujesz w pełną diagnostykę. Zobaczysz na żywo, jak wyglądają Twoje erytrocyty, leukocyty i czy są obecne struktury niepożądane.",
    includes: [
      "Mikroskopowe badanie żywej kropli krwi (powiększenie do 1600×)",
      "Krótka konsultacja: omówienie obrazu krwi",
      "Pierwsze wskazówki kierunku dalszej diagnostyki",
      "Wydruk z 3-5 zdjęciami preparatu",
    ],
    forWhom: [
      "Osoby ciekawe stanu swojej krwi",
      "Pierwsza wizyta — chcesz nas poznać",
      "Budżet ograniczony, ale chcesz zacząć",
    ],
    outcomes: [
      "Wstępna ocena stanu krwi",
      "Mapa potencjalnych problemów",
      "Rekomendacja dalszych badań",
    ],
    metadata: { priceLabel: "249 zł", accent: "blue" },
  },
  {
    slug: "vitamins",
    category: "individual",
    name: "Witaminy & Minerały",
    tagline: "Znajdź ukryte niedobory, które kradną Ci energię",
    price: 449,
    duration: "75 min",
    description:
      "Większość Polaków zimą ma niedobór witaminy D — ale to wierzchołek góry lodowej. Sprawdzimy żelazo, B12, kwas foliowy oraz markery mikroelementów. Dostaniesz indywidualnie dobrany plan suplementacji.",
    includes: [
      "Mikroskopowe badanie żywej kropli krwi",
      "Ocena niedoborów Fe, B12, kwasu foliowego (anemie)",
      "Skanowanie elementów mikroelementarnych przez Diacom 3D",
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
      "30-dniowy plan suplementacji z konkretnymi preparatami",
      "Plan kontroli za 90 dni",
    ],
    metadata: { priceLabel: "449 zł", accent: "amber" },
  },
  {
    slug: "hormonal",
    category: "individual",
    name: "Hormonal Balance",
    tagline: "Zrozum swoje hormony — od tarczycy po stres",
    price: 699,
    duration: "90 min",
    description:
      "Hormony rządzą wszystkim: snem, wagą, nastrojem, libido. Skanowanie układu hormonalnego przez Diacom 3D + obraz krwi pozwala wcześnie wykryć dysbalans, którego nie pokazują standardowe badania NFZ.",
    includes: [
      "Diacom 3D — pełny panel układu hormonalnego",
      "Mikroskopowe badanie żywej kropli krwi",
      "Indywidualna konsultacja 45 min",
      "Plan wsparcia hormonalnego (suplementy + lifestyle)",
      "Skierowanie na ewentualne badania laboratoryjne (TSH, fT3, fT4, kortyzol)",
    ],
    forWhom: [
      "Problemy z tarczycą",
      "Spadek libido, problemy z koncentracją",
      "Wahania nastroju i wagi",
      "Kobiety w okresie okołomenopauzalnym",
      "Mężczyźni po 35 r.ż.",
    ],
    outcomes: [
      "Mapa stanu układu hormonalnego",
      "Plan działania na 90 dni",
      "Rekomendacje laboratoryjne",
    ],
    metadata: { priceLabel: "699 zł", accent: "violet" },
  },
  {
    slug: "gut-health",
    category: "individual",
    name: "Gut Health",
    tagline: "Twoje jelita — drugi mózg, którego nikt nie słucha",
    price: 899,
    duration: "120 min",
    featured: true,
    badge: "Najpopularniejszy",
    description:
      "45% populacji ma nierozpoznaną nietolerancję pokarmową. Wzdęcia, IBS, problemy skórne, migrena, depresja — wszystko może mieć źródło w jelitach. Test FoodDetective™ na 59 najpopularniejszych pokarmów + analiza obrazu krwi pod kątem pasożytów, candidy i zaburzeń trawienia.",
    includes: [
      "Test FoodDetective™ — 59 pokarmów (IgG)",
      "Mikroskopowe badanie żywej kropli krwi (pasożyty, candida, dysbioza)",
      "Konsultacja 60 min: omówienie wyników",
      "Personalny plan diety eliminacyjnej (90 dni)",
      "Plan suplementacji probiotycznej i przeciwgrzybiczej",
      "Follow-up po 30 dniach (telefoniczny)",
    ],
    forWhom: [
      "Wzdęcia, zaparcia, biegunki",
      "Zespół jelita nadwrażliwego (IBS)",
      "Atopowe zapalenie skóry, łuszczyca, trądzik",
      "Migreny, brain fog, zmęczenie po posiłku",
      "Otyłość trzewna mimo diety",
    ],
    outcomes: [
      "Lista nietolerowanych pokarmów (z poziomem reaktywności)",
      "90-dniowy plan eliminacyjny",
      "Plan odbudowy mikroflory",
      "Re-test po 6 miesiącach (rekomendacja)",
    ],
    metadata: { priceLabel: "899 zł", accent: "emerald" },
  },
  {
    slug: "food-print-200",
    category: "individual",
    name: "Food Print 200+",
    tagline: "Najszersza analiza nietolerancji dostępna w Polsce",
    price: 1499,
    duration: "2× 90 min",
    description:
      "Najwyższej klasy laboratoryjna analiza IgG na 222 alergeny pokarmowe w technologii mikromacierzy. Gdy podstawowy FoodDetective to za mało — Food Print 200+ pokaże dokładnie każdy pokarm, na który Twój organizm reaguje. Wynik laboratoryjny z dokładnym poziomem reaktywności.",
    includes: [
      "Food Print 200+ (technologia mikromacierzy, 222 alergeny)",
      "Mikroskopowe badanie żywej kropli krwi",
      "Konsultacja wstępna 45 min (zbieranie wywiadu)",
      "Konsultacja właściwa 60 min (omówienie wyników)",
      "Pełen plan eliminacyjny + dietetyczny (180 dni)",
      "Wsparcie e-mailowe przez 30 dni",
    ],
    forWhom: [
      "Wieloletnie, oporne problemy zdrowotne",
      "Rozległe problemy skórne i autoimmunologiczne",
      "Po nieudanych dietach eliminacyjnych",
      "Osoby premium — chcesz najwięcej danych",
    ],
    outcomes: [
      "Ilościowy wynik dla 222 alergenów",
      "Personalny plan żywieniowy oparty na danych",
      "Lista bezpiecznych pokarmów",
    ],
    metadata: { priceLabel: "1 499 zł", accent: "rose" },
  },
  {
    slug: "full-body",
    category: "individual",
    name: "Full Body Premium",
    tagline: "Wszystko o Tobie. Jeden kompleksowy raport.",
    price: 1899,
    duration: "3 wizyty × 90 min",
    description:
      "Najpełniejsza diagnostyka jaką oferujemy w jednorazowym pakiecie. Połączenie wszystkich naszych narzędzi: Diacom 3D (pełne skanowanie), żywa kropla, FoodDetective. Plus 90-dniowy program wsparcia z mailowymi check-inami.",
    includes: [
      "Diacom 3D — pełne skanowanie ciała (wszystkie układy)",
      "Mikroskopowe badanie żywej kropli krwi (rozszerzone)",
      "Test FoodDetective™ — 59 pokarmów",
      "3 konsultacje indywidualne (start, 30 dni, 90 dni)",
      "Pełny plan żywieniowy + suplementacyjny + lifestyle",
      "Suplementacja startowa na 30 dni w cenie pakietu",
    ],
    forWhom: [
      "Chcesz pełny obraz swojego zdrowia",
      "Wartość dla osób po 40 r.ż.",
      "Przed lub po dużych zmianach (ciąża, sport, dieta)",
      "Premium klient",
    ],
    outcomes: [
      "Pełna mapa stanu zdrowia",
      "90-dniowy program transformacji",
      "Re-test pełny po 12 miesiącach (z 15% zniżką)",
    ],
    metadata: { priceLabel: "1 899 zł", accent: "blue" },
  },
  {
    slug: "vip-longevity",
    category: "individual",
    name: "VIP Longevity 6M",
    tagline: "6-miesięczny program długowieczności",
    price: 4999,
    duration: "6 miesięcy",
    badge: "VIP",
    description:
      "Najwyższy poziom opieki — 6-miesięczny program z dwoma pełnymi diagnostykami (start + miesiąc 3) oraz comiesięcznymi konsultacjami. Dla tych, którzy nie chcą być pacjentami, tylko zarządzać swoim zdrowiem jak portfelem inwestycyjnym.",
    includes: [
      "2× pełna diagnostyka (jak Full Body Premium)",
      "6 miesięcznych konsultacji 60 min",
      "Personalizowana suplementacja przez 6 miesięcy (w cenie)",
      "Dostęp telefoniczny VIP (priority calls)",
      "Re-test FoodDetective i Diacom w 3. miesiącu",
      "Roczne podsumowanie + plan na kolejne 6 miesięcy",
    ],
    forWhom: [
      "Klienci ceniący długoterminowe podejście",
      "Osoby chcące maksymalizować jakość życia",
      "Po 45-50 r.ż. — focus na longevity i prewencji",
    ],
    outcomes: [
      "Pełna kontrola nad biomarkerami zdrowia",
      "Spadek subiektywnego wieku biologicznego",
      "Plan długoterminowy",
    ],
    metadata: { priceLabel: "4 999 zł", accent: "graphite" },
  },

  // ============================================================
  // BUSINESS — B2B (Witalis at Work)
  // ============================================================
  {
    slug: "office-check",
    category: "business",
    name: "Office Check",
    tagline: "Diagnostyka, która przyjeżdża do Twojego biura",
    price: 199,
    unit: "/os.",
    minPersons: 8,
    duration: "15-20 min / os.",
    description:
      "Najprostszy sposób, by włączyć diagnostykę krwi do pakietu benefitów. Przyjeżdżamy do Twojej firmy, w ciągu jednego dnia roboczego wykonujemy mini-screening i krótką konsultację dla każdego chętnego pracownika. Raport zbiorczy dla HR (zanonimizowany).",
    includes: [
      "Dojazd do siedziby firmy (Kalisz i okolice do 50 km gratis)",
      "Mikroskopowe badanie żywej kropli krwi dla każdego chętnego",
      "Krótka konsultacja indywidualna (15 min)",
      "Indywidualne karty zaleceń dla pracowników",
      "Zanonimizowany raport agregowany dla HR",
      "Rekomendacje na poziomie firmowym (np. „45% pracowników niedobór D3 — rozważ benefit suplementacyjny”)",
    ],
    forWhom: [
      "Firmy 8-50 pracowników",
      "Pierwszy raz wprowadzasz health benefit",
      "Chcesz przetestować zainteresowanie zespołu",
    ],
    outcomes: [
      "Indywidualne benefity dla pracowników",
      "Dane decyzyjne dla HR",
      "Wzrost employer brand value",
    ],
    metadata: { priceLabel: "od 199 zł / os.", accent: "blue" },
  },
  {
    slug: "team-vitality",
    category: "business",
    name: "Team Vitality",
    tagline: "Pełna diagnostyka jako benefit pozapłacowy",
    price: 449,
    unit: "/os.",
    minPersons: 6,
    duration: "30 min / os.",
    featured: true,
    badge: "Rekomendowane",
    description:
      "Pakiet odpowiadający benefitowi 'Multisport, ale dla zdrowia'. Każdy pracownik otrzymuje pełną analizę żywej kropli krwi, ocenę niedoborów oraz indywidualnie dobrany plan suplementacji. Dostarczamy także suplementację startową na 30 dni (opcjonalnie).",
    includes: [
      "Wszystko z Office Check",
      "Pełna analiza niedoborów (Fe, B12, kwas foliowy, mikroelementy)",
      "Indywidualnie dobrany plan suplementacji",
      "Suplementacja startowa 30 dni — opcjonalnie +120 zł/os.",
      "Sesja Q&A dla całego zespołu (60 min)",
      "Materiały edukacyjne dla pracowników (PDF guide)",
    ],
    forWhom: [
      "Firmy 6-100 pracowników",
      "Chcesz benefit, który realnie wpływa na samopoczucie zespołu",
      "Industries z wysokim stresem (IT, finanse, marketing)",
    ],
    outcomes: [
      "Mierzalny spadek absencji L4 (case studies)",
      "Wyższa retencja talentów",
      "Wzmocniony employer brand",
    ],
    metadata: { priceLabel: "od 449 zł / os.", accent: "emerald" },
  },
  {
    slug: "executive-care",
    category: "business",
    name: "Executive Care",
    tagline: "Premium diagnostyka dla zarządu i kluczowych talentów",
    price: 1299,
    unit: "/os.",
    minPersons: 3,
    duration: "120 min / os.",
    description:
      "Pełny pakiet Full Body Premium dla kluczowych osób w firmie. C-level, founderzy, kluczowi specjaliści. Dyskretnie, w naszej siedzibie lub u klienta, z 3-miesięcznym follow-upem.",
    includes: [
      "Pełny pakiet Full Body Premium dla każdej osoby",
      "Diacom 3D + żywa kropla + FoodDetective",
      "3-miesięczny program follow-up",
      "Bezpośredni kontakt z mamą (priority calls)",
      "Roczny re-check w cenie",
      "Pełna dyskrecja i NDA na życzenie",
    ],
    forWhom: [
      "C-level i zarząd",
      "Founderzy i kluczowi inwestorzy",
      "Top sales / top engineers (retention play)",
    ],
    outcomes: [
      "Mierzalna poprawa energii i koncentracji u kluczowych talentów",
      "Konkretny benefit retencyjny",
      "Możliwy do rozliczenia w ramach świadczeń medycznych",
    ],
    metadata: { priceLabel: "od 1 299 zł / os.", accent: "graphite" },
  },

  // ============================================================
  // SPORT — Athlete / Performance
  // ============================================================
  {
    slug: "amateur-athlete",
    category: "sport",
    name: "Amateur Athlete",
    tagline: "Badaj się jak zawodnik — nawet jeśli grasz w okręgówce",
    price: 599,
    duration: "75 min",
    description:
      "Trenujesz 4-6 razy w tygodniu? Biegasz, jeździsz na rowerze, podnosisz ciężary albo grasz w piłkę półzawodowo? Twoje ciało pracuje na obrotach profesjonalisty — zacznij je tak traktować. Dokładnie ten sam zestaw markerów, który monitorują zawodnicy Ekstraklasy i lig zagranicznych.",
    includes: [
      "Mikroskopowe badanie żywej kropli krwi (skupione na markerach sportowych)",
      "Analiza pod kątem: ferrytyny, B12, mikroelementów, hydratacji",
      "Diacom 3D — ocena układu krwionośnego i mięśniowego",
      "Plan suplementacji sportowej (białko / kreatyna / D3 / Mg / B-complex)",
      "Karta z rekomendacjami przedtreningowymi i regeneracyjnymi",
    ],
    forWhom: [
      "Biegacze, kolarze, triathloniści",
      "Crossfit, siłownia 4+ razy w tygodniu",
      "Półzawodowi piłkarze, koszykarze",
      "Sztuki walki, sporty wytrzymałościowe",
    ],
    outcomes: [
      "Identyfikacja niedoborów ograniczających wydolność",
      "Plan suplementacji dopasowany do dyscypliny",
      "Lepsza regeneracja, mniej kontuzji",
    ],
    metadata: { priceLabel: "599 zł", accent: "cyan" },
  },
  {
    slug: "pro-athlete",
    category: "sport",
    name: "Pro Athlete",
    tagline: "Tak monitorują zdrowie w FC Barcelonie i Realu Madryt",
    price: 1199,
    duration: "3 × 60 min",
    featured: true,
    badge: "Sport Pro",
    description:
      "Pełny program 3-miesięczny dla zawodowych i półzawodowych sportowców. Robimy to samo, co sztaby medyczne klubów Bundesligi i La Liga: regularny monitoring biomarkerów + dopasowanie suplementacji do fazy treningu. Cykl: start → 6 tygodni → 12 tygodni.",
    includes: [
      "Pełny panel sportowy ×3 (start, 6 tyg., 12 tyg.)",
      "Diacom 3D — pełen skan układu mięśniowo-szkieletowego",
      "Hormony stresu (kortyzol — Diacom)",
      "Monitoring obciążenia treningowego (subjective + krew)",
      "Personalizowany plan suplementacji zmieniany co fazę",
      "Dostęp priority do konsultacji telefonicznych",
    ],
    forWhom: [
      "Zawodowi sportowcy",
      "Zawodnicy klubowi (Ekstraklasa, niższe ligi)",
      "Triathloniści Ironman i ultra-runners",
      "Sportowcy walczący o awans do wyższej kategorii",
    ],
    outcomes: [
      "Wyższe VO2max przez korektę niedoborów",
      "Niższe ryzyko kontuzji przeciążeniowych",
      "Optymalna regeneracja między treningami",
    ],
    metadata: { priceLabel: "1 199 zł", accent: "cyan" },
  },
  {
    slug: "team-sport",
    category: "sport",
    name: "Sport Club / Team",
    tagline: "Profesjonalna diagnostyka dla całej drużyny",
    price: null,
    duration: "Dzień zjazdowy",
    description:
      "Model FC Barcelony skalowany do polskich realiów: przyjeżdżamy do klubu, w ciągu jednego dnia badamy całą drużynę, dostarczamy indywidualne raporty oraz rekomendacje dla sztabu szkoleniowego. Dla klubów piłkarskich, siatkarskich, koszykarskich, szkółek MMA, drużyn akademickich.",
    includes: [
      "Dojazd do klubu (Wielkopolska + sąsiednie województwa)",
      "Diagnostyka dla 12-25 zawodników w ciągu dnia",
      "Indywidualne raporty dla każdego zawodnika",
      "Briefing dla sztabu szkoleniowego (60-90 min)",
      "Roczny plan re-testów (jesień / wiosna)",
      "Opcjonalnie: roczna umowa partnerska z 20% zniżką",
    ],
    forWhom: [
      "Kluby piłkarskie (młodzieżowe i seniorskie)",
      "Sekcje siatkówki, koszykówki, piłki ręcznej",
      "Szkółki MMA i sportów walki",
      "Drużyny akademickie i ligi amatorskie",
    ],
    outcomes: [
      "Indywidualizacja przygotowania zawodników",
      "Niższa liczba kontuzji w sezonie",
      "Argument sponsorski („nasi gracze są monitorowani jak w La Liga”)",
    ],
    metadata: { priceLabel: "Wycena indywidualna", accent: "graphite" },
  },
  {
    slug: "recovery-1on1",
    category: "sport",
    name: "Recovery 1:1",
    tagline: "Wróć szybciej po kontuzji lub przetrenowaniu",
    price: 349,
    duration: "60 min",
    description:
      "Krótka, skoncentrowana diagnostyka dla sportowca w fazie regeneracji. Sprawdzamy obciążenie organizmu, markery zapalne (obraz krwi), niedobory regeneracyjne (Mg, B-complex, omega-3) oraz dajemy konkretny plan na 21 dni odbudowy.",
    includes: [
      "Mikroskopowe badanie żywej kropli krwi (markery zapalne, hydratacja)",
      "Konsultacja 45 min z naciskiem na regenerację",
      "21-dniowy protokół powrotu do formy",
      "Lista konkretnych suplementów regeneracyjnych",
    ],
    forWhom: [
      "Po kontuzji wymagającej przerwy 2+ tygodnie",
      "Objawy przetrenowania (brak snu, spadek formy, irritability)",
      "Powrót po grypie / COVID / ciężkim sezonie",
    ],
    outcomes: [
      "Krótszy powrót do pełnej formy",
      "Świadomość markerów zapalnych",
    ],
    metadata: { priceLabel: "349 zł", accent: "amber" },
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return PACKAGES.find((p) => p.slug === slug);
}

export function getPackagesByCategory(category: PackageCategory): Package[] {
  return PACKAGES.filter((p) => p.category === category);
}

export const CATEGORY_LABELS: Record<PackageCategory, { label: string; sub: string }> = {
  individual: {
    label: "Indywidualne",
    sub: "Dla siebie, dla rodziny",
  },
  business: {
    label: "Dla firm",
    sub: "Witalis at Work — benefit, który leczy",
  },
  sport: {
    label: "Sport",
    sub: "Performance jak w La Liga",
  },
};
