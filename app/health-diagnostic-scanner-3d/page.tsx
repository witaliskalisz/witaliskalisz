import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone, ScanLine, Layers, Sparkles, ListChecks, ShieldAlert, CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/effects/reveal";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, medicalTestSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "HEALTH DIAGNOSTIC SCANNER 3D — biorezonans w Kaliszu",
  description:
    "HEALTH DIAGNOSTIC SCANNER 3D (biorezonans kwantowy) w Kaliszu — skanowanie czynnościowego stanu organizmu w ok. 15 minut. Metoda badania, zakres, zalety, przygotowanie i przeciwwskazania. Metoda komplementarna.",
  path: "/health-diagnostic-scanner-3d",
});

const ZAKRES = [
  "Przekroje kręgów kręgosłupa (krążki, stawy międzykręgowe, uciski rdzenia)",
  "Układ trawienny: przełyk, żołądek, dwunastnica, jelita, trzustka, wątroba, woreczek żółciowy",
  "Układ limfatyczny oraz krwinki",
  "Narządy układu hormonalnego",
  "Narządy miednicy mniejszej",
  "Układ moczowy",
  "Serce i układ krwionośny",
  "Układ nerwowy (nerwy i centralny układ nerwowy)",
  "Układ oddechowy",
  "Stan stawów i tkanki łącznej",
];

const ZALETY = [
  "Wizualne funkcje graficzne w bardzo krótkim czasie (ok. 15 minut)",
  "Ocena stanu czynnościowego organizmu jako całości i poszczególnych narządów",
  "Kontrola skuteczności dowolnej terapii",
  "Szybka ocena działania preparatu lub innego czynnika na organizm",
  "Ustalenie stopnia zmian w narządzie lub układzie w ujęciu procentowym",
  "Porównanie wyników z dwóch sesji — analiza dynamiki zmian",
];

const PRZED = [
  "Na 2 godziny przed badaniem nie jeść",
  "Bezpośrednio przed badaniem nie jeść czekolady, cytrusów, nie żuć gumy",
  "W dniu badania nie spożywać ostrych potraw, kawy, mocnej herbaty, napojów energetycznych i używek",
  "W miarę możliwości nie przyjmować suplementów i leków (w sytuacjach nie zagrażających zdrowiu)",
  "Przy lekach — wykonać badanie przed przyjęciem kolejnej dawki (np. insuliny)",
  "Usunąć metalowe przedmioty dotykające skóry (kolczyki, zegarek, okulary w metalowej oprawie, klucze, telefon, pasek)",
];

const PRZECIWWSKAZANIA = [
  "Ciąża",
  "Rozrusznik serca",
  "Epilepsja",
  "Duże metalowe implanty (endoprotezy ze stali; protezy tytanowe nie są przeciwwskazaniem)",
  "Implant ślimakowy",
  "Ogólnoustrojowe zakażenie organizmu",
  "Rozległe krwawienia wewnętrzne",
];

export default function ScannerPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Strona główna", href: "/" },
              { name: "HEALTH DIAGNOSTIC SCANNER 3D", href: "/health-diagnostic-scanner-3d" },
            ]),
            medicalTestSchema({
              name: "HEALTH DIAGNOSTIC SCANNER 3D (biorezonans)",
              description:
                "Biorezonansowa diagnostyka funkcjonalna oceniająca czynnościowy stan organizmu w ok. 15 minut. Metoda komplementarna, nie zastępuje badań laboratoryjnych.",
              path: "/health-diagnostic-scanner-3d",
            }),
          ]),
        }}
      />
      {/* Hero */}
      <section className="container py-14 md:py-24">
        <Reveal className="max-w-3xl space-y-5">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            HEALTH DIAGNOSTIC SCANNER 3D
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.03] tracking-tight">
            Skan całego organizmu
            <br />
            <span className="italic font-normal text-muted-foreground">w około 15 minut.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Skaner 3D to nowoczesny sposób diagnozowania czynnościowego stanu organizmu. Urządzenie
            łączy się z falami elektromagnetycznymi organizmu i poprzez ekran komputera komunikuje
            stan narządów, komórek krwi i mikroorganizmów. Podczas badania fotodioda w słuchawkach
            diagnostycznych rejestruje częstotliwości z punktów biologicznie aktywnych (BAP), a
            program porównuje je z bazą wzorców. Badanie najważniejszych narządów trwa ok. 15 minut.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild variant="primary" size="lg">
              <a href={`tel:${SITE.contact.phone}`}>
                <Phone className="size-4" /> Zadzwoń: {SITE.contact.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pakiety/full-body">
                Pakiet Full Body Premium
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Metoda + zalety */}
      <section className="container pb-6">
        <div className="grid md:grid-cols-2 gap-5">
          <InfoCard icon={ScanLine} title="Metoda badania">
            <p>
              Badanie pozwala uchwycić stan organizmu w danej chwili — to badanie dynamiczne. Program
              zapisuje częstotliwości z punktów biologicznie aktywnych i porównuje je z bazą
              częstotliwości prawidłowych i zmienionych chorobowo. Na tej podstawie odczytujemy
              obszary wymagające uwagi i proponujemy suplementy, zioła, porady dietetyczne oraz
              zalecenia dalszych badań.
            </p>
          </InfoCard>
          <InfoCard icon={Sparkles} title="Zalety metody">
            <ul className="space-y-1.5">
              {ZALETY.map((z) => (
                <li key={z}>• {z}</li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Zakres */}
      <section className="container py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal className="space-y-4 lg:sticky lg:top-28">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                Co możemy
                <br />
                <span className="italic font-normal text-muted-foreground">przebadać</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Na skanerze 3D badamy najważniejsze narządy i układy ciała. To najszybszy sposób
                badania przy największej liczbie zmiennych.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <ul className="space-y-2.5">
                    {ZAKRES.map((z) => (
                      <li key={z} className="flex gap-2.5 text-sm">
                        <Layers className="size-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/85">{z}</span>
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
        <div className="grid md:grid-cols-2 gap-5">
          <ListCard icon={ListChecks} title="Przygotowanie do badania" items={PRZED} />
          <ListCard icon={ShieldAlert} title="Przeciwwskazania" items={PRZECIWWSKAZANIA} accent="amber" />
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="container py-12 md:py-16">
        <Disclaimer>
          HEALTH DIAGNOSTIC SCANNER 3D (biorezonans) to metoda <strong className="text-foreground">funkcjonalna,
          obserwacyjna i komplementarna</strong>. Biorezonans nie jest standardem medycyny
          opartej na dowodach — traktujemy go jako narzędzie pomocne we wskazaniu kierunków dalszej
          diagnostyki i monitorowaniu samopoczucia. Nie zastępuje badań laboratoryjnych ani
          konsultacji lekarskiej.
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
