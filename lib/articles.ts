export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: "Niedobory" | "Jelita" | "Sport" | "Hormony" | "Longevity" | "FAQ";
  readingTimeMin: number;
  publishedAt: string; // ISO
  authorName: string;
  heroEmoji: string;
  /** Full markdown content (MDX-lite — wspieramy ## h2, ### h3, listy, **bold**, _italic_, [link](url)). */
  content: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "witamina-d-niedobor-polakow",
    title: "Witamina D — niedobór ma 90% Polaków od listopada do marca",
    excerpt:
      "Większości z nas brakuje 'witaminy słońca' przez 5 miesięcy w roku. Co to robi z odpornością, snem, siłą mięśni — i jak to skontrolować bez wizyty u endokrynologa.",
    category: "Niedobory",
    readingTimeMin: 6,
    publishedAt: "2026-04-08",
    authorName: "Zespół Witalis",
    heroEmoji: "☀️",
    content: `## Dlaczego polska zima zabiera Ci witaminę D

Witamina D nie jest właściwie witaminą — to **hormon**, który Twoja skóra produkuje pod wpływem promieniowania UVB. Problem: na szerokości geograficznej Polski (51°N w Kaliszu) **od listopada do marca słońce ma za niski kąt padania**, aby ta synteza w ogóle zachodziła. Niezależnie od tego, ile spacerujesz.

Wynik? Według badań przeprowadzonych w Polsce: **80-90% populacji ma niedobór witaminy D w okresie zimowym**.

## Co D3 robi w organizmie (i czego się nie spodziewasz)

- **Odporność** — bezpośrednio reguluje aktywność limfocytów T (niedobór = częstsze infekcje)
- **Sen** — wpływa na produkcję melatoniny
- **Mięśnie i siła** — receptor witaminy D jest obecny w komórkach mięśniowych
- **Nastrój** — niedobór skorelowany ze stanami depresyjnymi (sezonowymi)
- **Wchłanianie wapnia** — bez D3 magnez i wapń są bezużyteczne

## Jak to sprawdzić

Standardowy NFZ-owski wynik to **25(OH)D3** — w nM/l lub ng/ml. Optymalny poziom: **40-60 ng/ml** (NIE: 30 jak często mówią lekarze — to dolna granica "braku poważnego niedoboru", nie optymalność).

W Witalis sprawdzamy markery wchłaniania witaminy D pośrednio przez **mikroskopowe badanie żywej kropli krwi** oraz skanowanie Diacom 3D. To narzędzia funkcjonalne — jeśli wynik jest niepokojący, kierujemy Cię na laboratorium na 25(OH)D3.

## Dawkowanie — kogo słuchać

Polskie wytyczne 2023: 800-2000 IU dziennie dla dorosłych zimą. Wielu klinicystów uznaje to za zbyt niskie. **Optymalne dawkowanie zależy od BMI, ekspozycji na słońce i poziomu wyjściowego.**

W Witalis indywidualnie dobieramy dawkę po analizie obrazu krwi i historii zdrowotnej.

## Kiedy umówić wizytę

- Częste infekcje (4+ razy w sezonie)
- Brak energii mimo snu
- Mgła mózgowa
- Bóle mięśni i stawów bez wyraźnej przyczyny
- Stany depresyjne sezonowe`,
  },
  {
    slug: "food-detective-vs-igg-vs-ige",
    title: "FoodDetective vs. Food Print vs. testy IgE — czym się różnią",
    excerpt:
      "Trzy najczęściej mylone testy żywieniowe. Tłumaczymy bez ściemy: co wykrywa, kiedy zlecić i ile to kosztuje.",
    category: "Jelita",
    readingTimeMin: 8,
    publishedAt: "2026-03-22",
    authorName: "Zespół Witalis",
    heroEmoji: "🥗",
    content: `## Trzy różne mechanizmy = trzy różne testy

Najpierw biologia. Twój organizm może reagować na pokarm na trzy sposoby:

1. **IgE — natychmiastowa alergia.** Anafilaksja, obrzęk Quinckego, pokrzywka. Wystąpi w minutach. To sprawdza klasyczny test alergologiczny u lekarza.
2. **IgG — nietolerancja utajona.** Objawy 2-72 godziny po posiłku. Wzdęcia, bóle głowy, ekzema, brain fog, IBS. To sprawdzają FoodDetective, Food Print, Food Test.
3. **Reakcja niemediowana** — np. nietolerancja laktozy (brak laktazy), histamina, salicylany. Tutaj testy serologiczne nie zadziałają — potrzebne są inne metody (test wodorowy, dieta eliminacyjna prowadzona).

## FoodDetective™ — co to dokładnie

- 59 najpopularniejszych pokarmów: zboża, mięsa, ryby, warzywa, owoce, nabiał, jajko, drożdże, herbata, kakao
- Test **w gabinecie** — krew z palca, wynik po 40 minutach
- Cena: w naszym pakiecie **Gut Health** (899 zł) z całą resztą (mikroskopia + konsultacja + plan)
- Wynik: jakościowy (jest/nie ma reakcji) z poziomem siły reakcji

## Food Print Rozpoznawczy / Food Print 200+

- Technologia **mikromacierzy** — bardziej precyzyjna i ilościowa
- 200+ alergenów w wersji rozszerzonej (zboża rzadkie, owoce egzotyczne, przyprawy)
- Test **laboratoryjny** — wynik po 10-14 dniach
- Cena: w naszym pakiecie **Food Print 200+** (1499 zł)

## Food Test 90 / 110 / Vegetarian

- Klasyczna technologia ELISA (immunoenzymatyczna)
- Profile dedykowane: wegetarianie, panele 90/110 produktów
- Pośredni standard jakości — cena niższa niż 200+

## Który wybrać?

**Zacznij od FoodDetective (Gut Health 899 zł)** jeśli:
- Pierwsza w życiu diagnostyka nietolerancji
- Standardowa dieta zachodnia
- Budżet < 1000 zł

**Wybierz Food Print 200+ (1499 zł)** jeśli:
- Już próbowałeś diet eliminacyjnych bez efektu
- Egzotyczna lub specjalistyczna dieta (paleo, keto, wege)
- Wieloletnie przewlekłe problemy

**Idź do alergologa na test IgE** jeśli:
- Doszło już do anafilaksji / obrzęku
- Reakcja jest w minutach po jedzeniu
- Reakcja jest natychmiastowa i ciężka`,
  },
  {
    slug: "jak-badaja-sportowcy-bundesligi",
    title: "Tak monitorują biomarkery zawodnicy Bundesligi, La Liga i Premier League",
    excerpt:
      "Real Madrid, Bayern, Liverpool — wszystkie kluby ekstraklasowe mają zespoły medyczne, które robią to, co my robimy w Kaliszu. Tylko bez czekania na transfer.",
    category: "Sport",
    readingTimeMin: 9,
    publishedAt: "2026-03-05",
    authorName: "Zespół Witalis",
    heroEmoji: "⚽",
    content: `## Kulisy działu medycznego top-klubu europejskiego

W Real Madrid pracuje **kilkudziesięcioosobowy zespół medyczny**: lekarze sportowi, fizjoterapeuci, dietetycy, psycholodzy, **lekarz dietetyk-endokrynolog** kierujący panelem badań krwi. Podobnie FC Barcelona (historycznie pod Ricardem Pruną), Bayern Monachium (Säbener Straße labs), Liverpool (Mona Nemmer i sztab), Manchester City (CFG performance lab).

Co konkretnie monitorują regularnie:

### Standardowy panel ekstraklasowy (co 4-6 tygodni)

- **Ferrytyna** (zapasy żelaza)
- **25(OH)D3** (witamina D)
- **B12 + folian**
- **Magnez wewnątrzkomórkowy**
- **Omega-3 index**
- **Hormony stresu — kortyzol poranny + krzywa dobowa**
- **Testosteron wolny + całkowity** (mężczyźni)
- **Hormony tarczycy: TSH, fT3, fT4**
- **Markery zapalne: hsCRP, IL-6**
- **Kinaza kreatynowa (CK)** — marker obciążenia treningowego
- **Mocznik, kreatynina** — funkcja nerek pod obciążeniem

### Dlaczego to robią

Bo każda **niezauważona niedoborność = kontuzja, spadek formy, gorsza regeneracja**. Niedobór żelaza u biegacza spada VO2max o 8-15%. Niedobór D3 wydłuża czas regeneracji mięśni o 20-30%. Niski magnez = skurcze + zaburzenia snu = -1 godzina jakościowego snu = -10% performance.

## Co my robimy w Witalis

Dokładnie to samo, na poziomie funkcjonalnym i komplementarnym. W pakietach **Amateur Athlete** i **Pro Athlete** sprawdzamy:

- **Mikroskopowy obraz żywej kropli krwi** — agregacje erytrocytów (hydratacja!), aktywność leukocytów (markery zapalne), uszkodzenia wolnorodnikowe (obciążenie treningowe)
- **Diacom 3D** — funkcjonalna ocena układów (krwionośnego, mięśniowo-szkieletowego, hormonalnego)
- **Analiza niedoborów** — kierunki suplementacji
- **Skierowanie na badania laboratoryjne** tam, gdzie potrzebne (ferrytyna, D3, hormony)
- **Plan suplementacji dostosowany do dyscypliny i fazy treningu**

## "Ale ja gram w okręgówce, a nie w La Lidze"

Im wyższy poziom, tym mniejsze są różnice — każdy gram wagi i każdy procent VO2max się liczy. Ale prawda jest taka, że **amatorzy potrzebują dokładnie tych samych narzędzi** co zawodowcy, bo:

1. Nie mają sztabu, który dba o ich regenerację
2. Mają niższy budżet kaloryczny (krótsze treningi → mniej możliwości na pokrycie potrzeb)
3. Muszą balansować trening z pracą, rodziną, snem

Stąd nasz pakiet **Amateur Athlete (599 zł)** — wszystkie kluczowe markery, plan na 3 miesiące, follow-up.

## Co mówią dane

Sportowcy klubowi, którym wdrożono **regularny monitoring biomarkerów + indywidualną suplementację**:
- **-30% kontuzji** w sezonie (Manchester United, raport 2019)
- **+15% jakości snu** w grupie z dopasowanym Mg/Omega-3
- **Mniejsza absencja chorobowa** w okresie zimowym (D3 + cynk)

## Jak zacząć

Wypełnij quiz na stronie głównej (5 pytań), albo zadzwoń: **881 353 444**. Pakiet Amateur Athlete można rozłożyć na 2 raty.`,
  },
  {
    slug: "hormony-kortyzol-stres",
    title: "Kortyzol — hormon, który robi z Ciebie zombiego (i jak go znormalizować)",
    excerpt: "Jak chronicznie podniesiony kortyzol burzy sen, gromadzi tłuszcz na brzuchu i niszczy odporność — i co z tym zrobić.",
    category: "Hormony",
    readingTimeMin: 7,
    publishedAt: "2026-02-12",
    authorName: "Zespół Witalis",
    heroEmoji: "🧠",
    content: `## Kortyzol nie jest zły — chronicznie podwyższony jest

Kortyzol to Twój główny hormon stresu produkowany w nadnerczach. Ma wyraźną **rytmikę dobową**: pik 30-45 min po przebudzeniu, opada w ciągu dnia, niski wieczorem. Problem zaczyna się, gdy **rytmika się rozjeżdża** — krzywa płaska, zbyt wysoka wieczorem, lub odwrócona.

## Co robi chronicznie wysoki kortyzol

- **Brzuszna tkanka tłuszczowa** — kortyzol stymuluje gromadzenie tłuszczu wisceralnego
- **Insulinooporność** — przewlekły kortyzol = przewlekła glukoza we krwi
- **Spadek odporności** — supresja limfocytów
- **Sen "trzecio-fazowy"** (light sleep) zamiast głębokiego
- **Spadek libido i testosteronu** u mężczyzn
- **PMS i problemy menstruacyjne** u kobiet
- **Tarczyca pod obciążeniem** — często wtórnie niedoczynność

## Jak to sprawdzić

W Witalis robimy ocenę **funkcjonalną przez Diacom 3D** (skanowanie układu hormonalnego). Jeśli wynik jest niepokojący, kierujemy Cię na **laboratoryjny test kortyzolu ze śliny** — najbardziej miarodajny pomiar, 4 próbki w ciągu dnia.

## Co działa (oparte na dowodach)

1. **Sen 7-9 godzin, stała pora pójścia spać** — najsilniejsza interwencja
2. **Magnez wieczorem** (300-400mg, najlepiej glicynian)
3. **Witamina C** (500-1000mg) — wspiera nadnercza
4. **Adaptogenny: Ashwagandha (KSM-66), Rhodiola** — udokumentowane RCT
5. **Cardio o niskiej intensywności** (60-70% HRmax) zamiast HIIT na początku
6. **Cofnięcie kawy po 14:00**
7. **Praktyka oddechowa: 5-7 oddechów/min przed snem** (heart rate variability)

## Czego unikać

- **HIIT codziennie** (paradoksalnie podnosi kortyzol u przemęczonych)
- **Posty IF >16h** w fazie wypalenia (dla niektórych — destrukcyjne)
- **Kawa na pusty żołądek** — pik kortyzolu razem z kofeiną = roller coaster cały dzień`,
  },
  {
    slug: "longevity-biomarkery-monitoring",
    title: "Longevity — 7 biomarkerów, które warto monitorować po 40 r.ż.",
    excerpt: "Co badać raz w roku, jeśli zależy Ci na jakości życia za 20 lat. Lista oparta na zaleceniach Andrew Huberman, Peter Attia i naszej praktyce.",
    category: "Longevity",
    readingTimeMin: 6,
    publishedAt: "2026-01-28",
    authorName: "Zespół Witalis",
    heroEmoji: "🧬",
    content: `## Longevity to nie tylko długie życie — to **długie zdrowie**

Healthspan vs. lifespan. Tych 20 lat różnicy między średnią długością życia a średnim okresem życia bez chorób (w Polsce: ~73 lata długość życia, ~62 lata healthspan) to **stratny obszar** — i właśnie tu działa diagnostyka funkcjonalna.

## 7 kluczowych biomarkerów po 40

### 1. ApoB (apolipoproteina B)
Lepszy predyktor ryzyka sercowo-naczyniowego niż LDL. Cel: <80 mg/dL.

### 2. hsCRP (wrażliwy marker zapalny)
Cel: <1.0 mg/L. Podwyższony = chroniczne zapalenie = przyspieszone starzenie.

### 3. HbA1c (hemoglobina glikowana)
Średnia glukoza z 3 miesięcy. Cel: <5.4%. Optymalny: 5.0%.

### 4. Witamina D 25(OH)D3
Cel: 40-60 ng/mL.

### 5. Omega-3 Index
Procent EPA+DHA w błonach erytrocytów. Cel: >8%. Średnia Polaka: ~4%.

### 6. Ferrytyna
Cel: kobiety 50-100 ng/mL, mężczyźni 80-150 ng/mL.

### 7. TSH + fT3 + fT4
Tarczyca po 40 zaczyna spadać u wielu. Cel TSH: 1.0-2.5 uIU/mL.

## Co dodatkowo monitorujemy w Witalis

- **Mikroskopowy obraz żywej kropli krwi** — pokazuje rzeczy, których laboratorium nie widzi: agregacje, aktywność immunologiczną, kryształy
- **Diacom 3D** — funkcjonalne skanowanie wszystkich układów
- **Profile nietolerancji IgG** — stale podtrzymywane zapalenie z jelit to czynnik #1 przyspieszenia starzenia

## Pakiet VIP Longevity 6M

Dla osób, które chcą zarządzać zdrowiem strategicznie: 2 pełne diagnostyki w ciągu pół roku, 6 konsultacji miesięcznych, indywidualna suplementacja w cenie pakietu. Szczegóły w sekcji **Pakiety**.`,
  },
  {
    slug: "magnez-niedobor-objawy",
    title: "Magnez — niedobór, którego nie diagnozuje NFZ (a powinien)",
    excerpt: "Skurcze, problemy ze snem, kołatanie serca, ciągłe napięcie. 60% Polaków ma niedobór magnezu. A laboratoryjny test surowicy NIE wystarcza.",
    category: "Niedobory",
    readingTimeMin: 5,
    publishedAt: "2026-01-10",
    authorName: "Zespół Witalis",
    heroEmoji: "💊",
    content: `## Dlaczego test magnezu z NFZ Cię oszukuje

Standardowy magnez z surowicy krwi pokazuje tylko **1% całego magnezu w organizmie** — reszta jest w komórkach (głównie mięśnie, kości). Twój magnez w surowicy może być "w normie" mimo poważnego niedoboru tkankowego, bo organizm priorytetowo trzyma poziom we krwi kosztem komórek.

## Objawy niedoboru, których NFZ nie połączy

- **Skurcze łydek nocne**
- **Kołatanie serca / extrasystolie**
- **Lęk i napięcie ciągłe**
- **Problemy ze snem** (płytki, przerywany)
- **Tiki nerwowe** (drganie powieki!)
- **PMS u kobiet** — często magnez to game-changer
- **Migreny**
- **Insulinooporność**

## Co diagnozujemy w Witalis

- **Mikroskopowo** — agregacje erytrocytów (związane z elektrolitami), kryształy kwasu moczowego (magnez bierze udział w gospodarce purynowej)
- **Diacom 3D** — funkcjonalna ocena układu nerwowego i mięśniowego
- **Wywiad funkcjonalny** — kombinacja objawów dająca diagnozę

## Suplementacja — która forma działa

NIE: tlenek magnezu (Mg oxide) — biodostępność <5%
NIE: węglan magnezu — niska biodostępność

TAK:
- **Glicynian magnezu** — najlepszy na sen i lęk (najszerzej tolerowany)
- **Cytrynian magnezu** — uniwersalny, dobra biodostępność
- **Treonian magnezu** — przechodzi barierę krew-mózg (mgła mózgowa, koncentracja)
- **Malonian magnezu** — dla sportowców, wsparcie ATP

Dawka: 300-500 mg jonu magnezu dziennie (NIE: 500 mg związku — sprawdź etykietę).

## Kiedy do Witalis

Pakiet **Witaminy & Minerały** (449 zł) — dokładna ocena, plan suplementacji, follow-up.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
