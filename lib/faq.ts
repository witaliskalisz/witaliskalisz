export interface FaqItem {
  q: string;
  a: string;
  category: "general" | "diagnostics" | "logistics" | "safety";
}

export const FAQ: FaqItem[] = [
  {
    category: "diagnostics",
    q: "Czym jest mikroskopowe badanie żywej kropli krwi?",
    a: "To technika **obserwacyjna i funkcjonalna** — świeżą kroplę krwi ogląda się pod mikroskopem cyfrowym (powiększenie 100×–1600×). Pozwala obserwować kształt erytrocytów, aktywność leukocytów i inne struktury. **Nie zastępuje morfologii ani badań laboratoryjnych** — jest narzędziem pomocniczym i edukacyjnym, które wskazuje kierunki dalszej diagnostyki.",
  },
  {
    category: "diagnostics",
    q: "Czym test nietolerancji IgG (FoodDetective™) różni się od testów alergicznych IgE?",
    a: "Testy IgE wykrywają **alergie natychmiastowe** (reakcja w minutach). FoodDetective mierzy **przeciwciała IgG** — wskaźnik kontaktu organizmu z pokarmem, u części osób łączony z objawami utajonymi (godziny do 3 dni po posiłku). Wynik traktuj jako wskazówkę do diety eliminacyjnej i obserwacji, nie jako rozpoznanie medyczne.",
  },
  {
    category: "logistics",
    q: "Jak się zapisać na wizytę?",
    a: "Najprościej telefonicznie: **881 353 444**, od poniedziałku do piątku **16:00–20:00**. Możesz też wypełnić formularz na stronie — oddzwonimy w ciągu 24 godzin roboczych. Pierwsza wizyta zwykle w ciągu 3–7 dni.",
  },
  {
    category: "general",
    q: "Skąd mam wiedzieć, który pakiet wybrać?",
    a: "Wypełnij **krótki quiz na stronie głównej** — na podstawie objawów polecimy pakiet. Możesz też zadzwonić — pomożemy w wyborze bez zobowiązań. Wiele osób zaczyna od pakietu **Start** lub **Gut Health**.",
  },
  {
    category: "general",
    q: "Czy Witalis zastępuje wizytę u lekarza?",
    a: "**Nie.** Witalis to diagnostyka **funkcjonalna i prewencyjna** — pomaga zrozumieć, co dzieje się w organizmie i jak go wesprzeć. Przy podejrzeniu poważnej choroby kierujemy do odpowiedniego specjalisty. Działamy uzupełniająco wobec medycyny konwencjonalnej.",
  },
];

export const FAQ_CATEGORIES = {
  general: "Ogólne",
  diagnostics: "Diagnostyka",
  logistics: "Wizyta i płatności",
  safety: "Bezpieczeństwo i prywatność",
} as const;
