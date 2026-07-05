export interface CannedTopic {
  triggers: string[];
  answer: string;
  followups?: string[];
}

export const CANNED_TOPICS: CannedTopic[] = [
  {
    triggers: ["cena", "cennik", "kosztuje", "ceny", "ile", "ile to"],
    answer:
      "Mamy 3 pakiety: Start (249 zł — żywa kropla krwi + konsultacja), Gut Health (od 349 zł — nietolerancje pokarmowe, cena zależna od liczby badanych produktów) oraz Witaminy & Minerały (449 zł — analiza niedoborów). Szczegóły w sekcji Pakiety.",
    followups: ["Jak wybrać pakiet?", "Czy mogę zapłacić kartą?", "Faktura VAT?"],
  },
  {
    triggers: ["jak", "wybrać", "polec", "który pakiet", "polecisz"],
    answer:
      "Najszybciej: wypełnij krótki quiz na stronie głównej (3 pytania). Na podstawie objawów polecę pakiet. Większość osób zaczyna od Gut Health przy problemach trawiennych, Witaminy & Minerały przy zmęczeniu, albo Start jeśli chce najpierw zobaczyć swoją krew.",
    followups: ["Pokaż mi quiz", "Co zawiera Gut Health?"],
  },
  {
    triggers: ["zapis", "rezerw", "umów", "wizyt", "termin", "kiedy"],
    answer:
      "Rejestracja telefoniczna: 881 353 444, pon-pt 16:00-20:00. Pierwsza wizyta zwykle dostępna w 3-7 dni. Wolisz napisać? Odezwij się mailowo lub w wiadomości prywatnej na Facebooku / Instagramie.",
    followups: ["Gdzie jesteście?", "Co zabrać na wizytę?"],
  },
  {
    triggers: ["adres", "gdzie", "lokalizacja", "kontakt", "kalisz", "dojazd"],
    answer:
      "ul. Babina 6, 62-800 Kalisz. Centrum miasta. Mapę znajdziesz na stronie /kontakt.",
    followups: ["Parking?", "Komunikacja miejska?"],
  },
  {
    triggers: ["żywa kropla", "krew", "mikroskop", "badanie krwi"],
    answer:
      "Mikroskopowe badanie żywej kropli krwi: kropla krwi z palca na szkiełku oglądana w powiększeniu 100×–1600×. Widzisz na żywo agregaty erytrocytów, aktywność leukocytów, obecność pasożytów, candidy, kryształów, uszkodzeń wolnorodnikowych. Trwa ok. 60 min razem z konsultacją.",
    followups: ["Czy to bezpieczne?", "Jak się przygotować?"],
  },
  {
    triggers: ["nietoler", "food", "ige", "igg", "fooddetective", "alerg"],
    answer:
      "Test FoodDetective™ mierzy przeciwciała IgG na produkty spożywcze — to wskazówka do diety eliminacyjnej. Jest w pakiecie Gut Health (od 349 zł, cena zależna od liczby badanych produktów). To NIE są testy IgE (alergie natychmiastowe) — IgG to nietolerancje utajone (objawy 2-72h po posiłku).",
    followups: ["Różnica IgG vs IgE?", "Co zawiera Gut Health?"],
  },
  {
    triggers: ["bezpiecz", "ciąża", "dzieci", "dziecko"],
    answer:
      "Mikroskopowe badanie żywej kropli krwi i test FoodDetective™ są bezpieczne od 5 r.ż. (po wcześniejszej konsultacji telefonicznej). Ewentualne przeciwwskazania omawiamy podczas zapisu.",
  },
  {
    triggers: ["rodo", "dane", "prywatność"],
    answer:
      "Pełna zgodność RODO. Twoje wyniki przechowywane w zabezpieczonych dokumentach + zaszyfrowana baza. Nie przekazujemy danych podmiotom trzecim. Masz prawo do wglądu, edycji i usunięcia danych. Szczegóły: /polityka-prywatnosci",
  },
  {
    triggers: ["płatność", "karta", "blik", "raty", "faktura", "vat"],
    answer:
      "Płatność: gotówka, BLIK lub karta. Wystawiamy fakturę VAT (firmy i osoby fizyczne).",
  },
  {
    triggers: ["nfz", "refund"],
    answer:
      "Nie — działamy wyłącznie prywatnie. NFZ nie refunduje naszych testów. Wiele firm jednak rozlicza nasze pakiety jako benefit pozapłacowy / świadczenie medyczne — sprawdź ze swoją księgowością.",
  },
];

export const DEFAULT_GREETING =
  "Cześć! Jestem wirtualnym asystentem Witalis. Mogę pomóc z wyborem pakietu, cennikiem, terminem wizyty lub odpowiedzieć na pytania o testy. O co chciałbyś zapytać?";

export const DEFAULT_FOLLOWUPS = [
  "Ile kosztują pakiety?",
  "Jak się zapisać?",
  "Który pakiet wybrać?",
  "Jaki adres?",
];

export const FALLBACK =
  "Hmm, nie jestem pewien czy dobrze rozumiem. Spróbuj zadać pytanie inaczej — albo zadzwoń bezpośrednio: 881 353 444 (pon-pt 16:00-20:00). Z osobą najszybciej rozwiążemy każde pytanie.";

export function findCannedResponse(input: string): { answer: string; followups?: string[] } {
  const text = input.toLowerCase();
  for (const topic of CANNED_TOPICS) {
    for (const trigger of topic.triggers) {
      if (text.includes(trigger)) {
        return { answer: topic.answer, followups: topic.followups };
      }
    }
  }
  return { answer: FALLBACK, followups: DEFAULT_FOLLOWUPS };
}
