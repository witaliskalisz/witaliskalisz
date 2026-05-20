export interface CannedTopic {
  triggers: string[];
  answer: string;
  followups?: string[];
}

export const CANNED_TOPICS: CannedTopic[] = [
  {
    triggers: ["cena", "cennik", "kosztuje", "ceny", "ile", "ile to"],
    answer:
      "Nasze pakiety zaczynają się od 249 zł (Start — żywa kropla krwi + krótka konsultacja). Pełna oferta to 14 pakietów: indywidualne, dla firm i dla sportowców. Pełny cennik znajdziesz w sekcji Pakiety.",
    followups: ["Jak wybrać pakiet?", "Czy mogę zapłacić w ratach?", "Faktura VAT?"],
  },
  {
    triggers: ["jak", "wybrać", "polec", "który pakiet", "polecisz"],
    answer:
      "Najszybciej: wypełnij quiz na stronie głównej (5 pytań, 3 min). Na podstawie Twoich objawów polecę pakiet. Większość osób zaczyna od pakietu Gut Health (899 zł) jeśli ma problemy trawienne, albo Witaminy & Minerały (449 zł) jeśli głównym objawem jest zmęczenie.",
    followups: ["Pokaż mi quiz", "Co zawiera Gut Health?"],
  },
  {
    triggers: ["zapis", "rezerw", "umów", "wizyt", "termin", "kiedy"],
    answer:
      "Rejestracja telefoniczna: 881 353 444, pon-pt 16:00-20:00. Pierwsza wizyta zwykle dostępna w 3-7 dni. Możesz też zostawić swoje dane w formularzu — oddzwonimy w ciągu 24h roboczych.",
    followups: ["Gdzie jesteście?", "Co zabrać na wizytę?"],
  },
  {
    triggers: ["adres", "gdzie", "lokalizacja", "kontakt", "kalisz", "dojazd"],
    answer:
      "ul. Babina 6, 62-800 Kalisz. Centrum miasta. Mapę znajdziesz na stronie /kontakt. Dla pakietów B2B (firmy) i Sport Club przyjeżdżamy do klienta — dojazd w obrębie Wielkopolski.",
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
      "Mamy 3 poziomy testów nietolerancji IgG: FoodDetective (59 produktów, wynik w 40 min, w pakiecie Gut Health 899 zł), Food Print 200+ (laboratoryjny mikromacierz na 222 alergeny, 1499 zł) oraz Food Test 90/110. To NIE są testy IgE (alergie natychmiastowe) — testy IgG to nietolerancje utajone (objawy 2-72h po posiłku).",
    followups: ["Różnica IgG vs IgE?", "Który test wybrać?"],
  },
  {
    triggers: ["diacom", "scanner", "3d", "bioreznoans"],
    answer:
      "Diacom 3D to bioreznoansowy skaner funkcjonalny — w 15 minut ocenia stan układów organizmu (krwionośny, hormonalny, mięśniowy itd.). To metoda KOMPLEMENTARNA, nie zastępuje badań laboratoryjnych. Występuje w pakietach Hormonal Balance, Full Body Premium i VIP Longevity.",
    followups: ["Czy to działa?", "Dla kogo Diacom?"],
  },
  {
    triggers: ["firm", "biuro", "pracownik", "b2b", "hr", "benefit"],
    answer:
      "Witalis at Work — 3 pakiety dla firm. Office Check (199 zł/os.) — mini-screening dla 8+ osób. Team Vitality (449 zł/os.) — pełna diagnostyka jako benefit pozapłacowy. Executive Care (1299 zł/os.) — premium dla zarządu. Przyjeżdżamy do biura. Szczegóły: /dla-firm",
    followups: ["ROI dla firmy?", "Możliwość fakturowania?"],
  },
  {
    triggers: ["sport", "treningu", "biegam", "atleta", "klub", "drużyna", "fc barcelona", "real madryt"],
    answer:
      "Sport Performance — robimy dokładnie to, co działy medyczne FC Barcelony i Realu Madryt: monitorujemy markery sportowe, ferrytynę, niedobory, dobieramy suplementację. Amateur Athlete (599 zł), Pro Athlete (1199 zł, program 3-miesięczny) i pakiety dla klubów. /sport-performance",
    followups: ["Co konkretnie badacie?", "Dla biegacza?"],
  },
  {
    triggers: ["bezpiecz", "ciąża", "dzieci", "dziecko", "rozrusznik"],
    answer:
      "Żywa kropla krwi i FoodDetective są bezpieczne od 5 r.ż. Diacom 3D NIE jest wykonywany u kobiet w ciąży, osób z rozrusznikiem serca, padaczką, dużymi metalowymi implantami stalowymi, implantem ślimakowym ani w ogólnoustrojowym zakażeniu. Pełna lista przeciwwskazań omawiana podczas zapisu.",
  },
  {
    triggers: ["rodo", "dane", "prywatność"],
    answer:
      "Pełna zgodność RODO. Twoje wyniki przechowywane w zabezpieczonych dokumentach + zaszyfrowana baza. Nie przekazujemy danych podmiotom trzecim. Masz prawo do wglądu, edycji i usunięcia danych. Szczegóły: /polityka-prywatnosci",
  },
  {
    triggers: ["płatność", "karta", "blik", "raty", "faktura", "vat"],
    answer:
      "Płatność: gotówka, BLIK lub karta. Wystawiamy fakturę VAT (firmy i osoby fizyczne). Pakiety wielowizytowe (Full Body Premium, VIP Longevity) można rozłożyć na 2 raty bez odsetek.",
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
