export interface FaqItem {
  q: string;
  a: string;
  category: "general" | "diagnostics" | "logistics" | "safety";
}

export const FAQ: FaqItem[] = [
  {
    category: "diagnostics",
    q: "Czym jest mikroskopowe badanie żywej kropli krwi?",
    a: "To technika obserwacji świeżej kropli krwi pod mikroskopem z powiększeniem 100×–1600×. Pozwala ocenić kształt erytrocytów, aktywność leukocytów, obecność uszkodzeń wolnorodnikowych, kryształów, parazytów, dysbiozę oraz markery zapalne. Klient widzi obraz swojej krwi na żywo na ekranie komputera.",
  },
  {
    category: "diagnostics",
    q: "Czym Diacom 3D różni się od klasycznych badań laboratoryjnych?",
    a: "Diacom 3D to skaner bioreznoansowy — analizuje częstotliwości punktów biologicznie aktywnych (BAP) i porównuje je z bazą wzorców. Jest to metoda **komplementarna**, która pozwala wcześnie wykryć trendy w organizmie, ale **nie zastępuje badań laboratoryjnych krwi** w przypadku konkretnych diagnoz. Traktuj go jako narzędzie wczesnego wykrywania kierunków i monitorowania.",
  },
  {
    category: "diagnostics",
    q: "Czym FoodDetective™ różni się od testów alergicznych IgE w laboratorium?",
    a: "Testy IgE wykrywają **alergie natychmiastowe** (anafilaksja, wysypka, obrzęk — reakcja w minutach). FoodDetective i Food Print mierzą **przeciwciała IgG**, czyli **nietolerancje pokarmowe utajone**, których objawy pojawiają się od kilku godzin do 3 dni po posiłku. To dwa różne mechanizmy. Nietolerancje IgG mogą stać za przewlekłym zmęczeniem, IBS, problemami skórnymi.",
  },
  {
    category: "logistics",
    q: "Jak się zapisać na wizytę?",
    a: "Rejestracja telefoniczna: **881 353 444**, od poniedziałku do piątku w godzinach **16:00–20:00**. Możesz też wypełnić formularz na stronie — oddzwaniamy w ciągu 24 godzin roboczych. Pierwsza wizyta zwykle dostępna w ciągu 3-7 dni.",
  },
  {
    category: "logistics",
    q: "Ile trwa wizyta i co ze sobą zabrać?",
    a: "Czas zależy od pakietu (60–120 min). Co zabrać: dowód osobisty (do FV), wcześniejsze wyniki badań laboratoryjnych jeśli posiadasz, lista przyjmowanych leków i suplementów. **Na 24 godziny przed badaniem nie pij alkoholu, na 2 godziny przed — nie jedz**. 30 min przed wizytą wypij 500 ml wody.",
  },
  {
    category: "logistics",
    q: "Jak długo czeka się na wyniki?",
    a: "**Mikroskopowe badanie żywej kropli i Diacom 3D** — wynik omawiamy podczas wizyty (efekt natychmiastowy). **FoodDetective™** — wynik po ok. 40 minutach (oddajesz krew, czekasz w gabinecie). **Food Print 200+** — wynik laboratoryjny po 10-14 dniach roboczych, omawiamy go na drugiej konsultacji.",
  },
  {
    category: "logistics",
    q: "Czy można płacić kartą? Czy wystawiacie fakturę?",
    a: "Tak — przyjmujemy gotówkę, BLIK i karty płatnicze. Wystawiamy fakturę VAT na życzenie (dla firm i osób fizycznych). Możliwa płatność za pakiety wielowizytowe w 2 ratach (bez odsetek).",
  },
  {
    category: "logistics",
    q: "Czy refunduje to NFZ?",
    a: "Nie — Witalis działa wyłącznie w sektorze prywatnym. NFZ nie refunduje testów FoodDetective, Food Print ani diagnostyki bioreznoansowej Diacom 3D. Część firm jednak rozlicza nasze pakiety **jako benefit pozapłacowy** lub świadczenie medyczne — zapytaj swoją księgowość.",
  },
  {
    category: "safety",
    q: "Czy badanie jest bezpieczne dla dzieci i kobiet w ciąży?",
    a: "Mikroskopowe badanie żywej kropli krwi i FoodDetective są bezpieczne od 5 r.ż. (po konsultacji telefonicznej). Diacom 3D **NIE jest wykonywany u kobiet w ciąży, osób z rozrusznikiem serca, padaczką, implantem ślimakowym, dużymi metalowymi endoprotezami stalowymi ani podczas ogólnoustrojowych zakażeń**. Pełna lista przeciwwskazań omawiana podczas zapisu.",
  },
  {
    category: "safety",
    q: "Jak chronicie moje dane (RODO)?",
    a: "Pełna zgodność z RODO. Twoje wyniki i dane medyczne są przechowywane w zabezpieczonych dokumentach papierowych pod kluczem oraz w zaszyfrowanej bazie elektronicznej. Nie przekazujemy danych żadnym podmiotom trzecim. Masz prawo do wglądu, edycji i usunięcia danych w dowolnym momencie.",
  },
  {
    category: "general",
    q: "Czy Witalis zastępuje wizytę u lekarza?",
    a: "**Nie.** Witalis to diagnostyka **funkcjonalna i prewencyjna** — pomaga zrozumieć, co dzieje się w Twoim organizmie i jak go wesprzeć. Jeśli mamy podejrzenie poważnej choroby, kierujemy Cię do odpowiedniego specjalisty. Współpracujemy uzupełniająco z lekarzami rodzinnymi, endokrynologami i dietetykami klinicznymi.",
  },
  {
    category: "general",
    q: "Skąd mam wiedzieć, który pakiet wybrać?",
    a: "Wypełnij **3-minutowy quiz na stronie głównej** — na podstawie Twoich objawów polecimy najlepszy pakiet startowy. Możesz też zadzwonić — chętnie pomożemy w wyborze bez zobowiązań. Wiele osób zaczyna od pakietu **Start** lub **Gut Health** i rozszerza w razie potrzeby.",
  },
];

export const FAQ_CATEGORIES = {
  general: "Ogólne",
  diagnostics: "Diagnostyka",
  logistics: "Wizyta i płatności",
  safety: "Bezpieczeństwo i prywatność",
} as const;
