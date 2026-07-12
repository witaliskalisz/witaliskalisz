import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone, Cpu, Radio, ListChecks, ShieldAlert, CheckCircle2, XCircle, PiggyBank } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/effects/reveal";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, medicalTestSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Analizator Zdrowia Quantum — analiza niedoborów witamin i minerałów",
  description:
    "Analizator Zdrowia Quantum (Kwantowy Magnetyczny Analizator Rezonansowy) w Kaliszu — bezinwazyjna, szybka ocena niedoborów witamin, minerałów i pracy narządów. Technika pomiaru, dostępne raporty, przygotowanie. Metoda komplementarna.",
  path: "/analizator-quantum",
});

const RAPORTY = [
  "Układ krążenia i naczyń mózgowych",
  "Układ hormonalny",
  "Funkcja przewodu pokarmowego",
  "Czynność wątroby",
  "Funkcja pęcherzyka żółciowego",
  "Funkcja trzustki",
  "Funkcja płuc",
  "System odpornościowy",
  "Tarczyca",
  "Witaminy",
  "Mikroelementy",
  "Aminokwasy / nerki",
  "Choroby kości",
  "Wskaźnik wzrostu kości",
  "Gęstość mineralna kości",
  "Choroby reumatoidalne kości",
  "Oczy",
  "Mózg",
  "Metale ciężkie",
  "Alergia",
  "Koenzym",
  "Element ludzki",
  "Cukier we krwi",
  "Puls serca i mózgu",
  "Podstawowe jakości fizyczne",
  "Meridiany i zabezpieczenia",
  "Toksyny",
  "Cykl menstruacyjny",
  "Piersi",
  "Ginekologia",
  "Nasienie / plemniki",
  "Prostata",
  "Funkcje seksualne mężczyzn",
  "Otyłość",
  "Kolagen",
  "Skóra",
  "Jelito grube",
];

const PRZECIWWSKAZANIA = [
  "Ciąża",
  "Rozrusznik serca",
  "Epilepsja",
  "Duże metalowe implanty (endoprotezy ze stali; protezy tytanowe nie są przeciwwskazaniem)",
  "Ogólnoustrojowe zakażenie organizmu",
  "Rozległe krwawienia wewnętrzne (miesiączka)",
  "Pompa insulinowa",
];

const PRZED = [
  "Nie spożywać alkoholu przez 48 godzin",
  "Nie zażywać środków odurzających",
  "Odstawić suplementy, witaminy i minerały na min. 48 godzin",
  "Odstawić produkty farmaceutyczne na min. 24 godziny (o ile nie zagrażają zdrowiu — np. leki przeciwbólowe, rozkurczowe)",
  "Od dnia poprzedzającego ograniczyć używki (kawa, herbata, papierosy)",
  "Wypić min. 1,5 litra wody w dniu poprzedzającym badanie",
  "Być około 3 godziny po posiłku",
];

const PODCZAS = ["Zdjąć biżuterię", "Wyciszyć telefon", "Być zrelaksowanym"];

export default function QuantumPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Strona główna", href: "/" },
              { name: "Analizator Zdrowia Quantum", href: "/analizator-quantum" },
            ]),
            medicalTestSchema({
              name: "Analiza niedoborów witamin i minerałów — Analizator Zdrowia Quantum",
              description:
                "Bezinwazyjna, funkcjonalna ocena niedoborów witamin, minerałów, aminokwasów i pracy narządów Kwantowym Magnetycznym Analizatorem Rezonansowym. Metoda komplementarna.",
              path: "/analizator-quantum",
            }),
          ]),
        }}
      />
      {/* Hero */}
      <section className="container py-14 md:py-24">
        <Reveal className="max-w-3xl space-y-5">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            Analizator Zdrowia Quantum
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.03] tracking-tight">
            Niedobory witamin
            <br />
            <span className="italic font-normal text-muted-foreground">i minerałów w 60 sekund.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Analizator Zdrowia Quantum (Kwantowy Magnetyczny Analizator Rezonansowy) to innowacyjne
            urządzenie łączące bioinformatykę i inżynierię elektroniczną. Główna funkcja to
            bezinwazyjna, szybka ocena niedoborów witamin, minerałów, hormonów, aminokwasów, enzymów,
            poziomu cukru i cholesterolu oraz pracy narządów strategicznych: trzustki, wątroby,
            nerek, śledziony, mózgu i innych. Podstawowy raport estymowany jest już po 60 sekundach.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild variant="primary" size="lg">
              <a href={`tel:${SITE.contact.phone}`}>
                <Phone className="size-4" /> Zadzwoń: {SITE.contact.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pakiety/vitamins">
                Pakiet Witaminy & Minerały
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Na czym polega + technika */}
      <section className="container pb-6">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard icon={Cpu} title="Na czym polega">
            <p>
              To przewodnik z indywidualnym doradztwem — nieinwazyjny, praktyczny, prosty, szybki i
              ekonomiczny. Bazuje na medycynie kwantowej i naukowej analizie. Pozwala wyestymować
              raporty na temat składu ciała oraz wykryć m.in. poziom witamin, minerałów i
              pierwiastków śladowych. Test jest w pełni bezpieczny i bezinwazyjny.
            </p>
          </InfoCard>
          <InfoCard icon={Radio} title="Technika pomiaru">
            <p>
              Pomiar jest prosty i bezbolesny: pacjent trzyma w ręce elektrodę przez 60 sekund, która
              na zasadzie pola elektromagnetycznego odczytuje informacje. Drgania własne organizmu
              mają naturę elektromagnetyczną — można je wychwycić z powierzchni skóry i porównać z
              wzorcami zapisanymi w programie urządzenia.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* Dostępne raporty */}
      <section className="container py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal className="space-y-4 lg:sticky lg:top-28">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                Dostępne
                <br />
                <span className="italic font-normal text-muted-foreground">raporty</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Analizator generuje kilkadziesiąt raportów obejmujących kluczowe układy i parametry
                organizmu. Wspólnie omawiamy wyniki i układamy plan wsparcia.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm font-medium text-success">
                <PiggyBank className="size-4" />
                Wyniki porównywalne z ok. 20 badaniami laboratoryjnymi
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {RAPORTY.map((r) => (
                      <li key={r} className="flex gap-2.5 text-sm">
                        <CheckCircle2 className="size-4 text-success shrink-0 mt-0.5" />
                        <span className="text-foreground/85">{r}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Przygotowanie + przeciwwskazania */}
      <section className="container pb-6">
        <div className="grid md:grid-cols-3 gap-5">
          <ListCard icon={ListChecks} title="Przed wizytą" items={PRZED} />
          <ListCard icon={CheckCircle2} title="Podczas wizyty" items={PODCZAS} />
          <ListCard icon={ShieldAlert} title="Przeciwwskazania" items={PRZECIWWSKAZANIA} accent="amber" />
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="container py-12 md:py-16">
        <Disclaimer>
          Analizator Zdrowia Quantum to metoda <strong className="text-foreground">funkcjonalna i
          komplementarna</strong> — nie zastępuje badań laboratoryjnych ani konsultacji lekarskiej.
          Traktujemy go jako narzędzie pomocne we wskazaniu kierunków dalszej diagnostyki i
          monitorowaniu samopoczucia. Konkretne rozpoznania chorobowe wymagają badań laboratoryjnych.
        </Disclaimer>
        <Reveal delay={0.1} className="mt-10 text-center">
          <Button asChild variant="primary" size="lg">
            <a href={`tel:${SITE.contact.phone}`}>
              <Phone className="size-4" /> Umów badanie: {SITE.contact.phoneDisplay}
            </a>
          </Button>
        </Reveal>
      </section>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <Card className="h-full">
        <CardContent className="p-6 space-y-3">
          <div className="size-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <Icon className="size-5" />
          </div>
          <h2 className="font-display text-xl">{title}</h2>
          <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
        </CardContent>
      </Card>
    </Reveal>
  );
}

function ListCard({
  icon: Icon,
  title,
  items,
  accent,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
  accent?: "amber";
}) {
  return (
    <Reveal>
      <Card className={`h-full ${accent === "amber" ? "border-amber-500/30 bg-amber-500/[0.03]" : ""}`}>
        <CardContent className="p-6 space-y-3">
          <div
            className={`size-11 rounded-2xl flex items-center justify-center ${
              accent === "amber"
                ? "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                : "bg-primary/10 text-primary"
            }`}
          >
            <Icon className="size-5" />
          </div>
          <h2 className="font-display text-xl">{title}</h2>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            {items.map((i) => (
              <li key={i}>• {i}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </Reveal>
  );
}

function Disclaimer({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <Card className="border-amber-500/30 bg-amber-500/[0.04]">
        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-5">
          <div className="size-11 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <XCircle className="size-5" />
          </div>
          <div className="space-y-2">
            <h2 className="font-display text-xl md:text-2xl">Ważne</h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{children}</p>
          </div>
        </CardContent>
      </Card>
    </Reveal>
  );
}
