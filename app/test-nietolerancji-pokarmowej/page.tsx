import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone, FlaskConical, Activity, ListChecks, CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/effects/reveal";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, medicalTestSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Badanie na nietolerancję pokarmową (IgG) — FoodDetective, Food Print",
  description:
    "Testy na nietolerancje pokarmowe IgG w Kaliszu — FoodDetective™ (59 produktów), Food Print 200+ oraz Food Test 90/110. Objawy, przyczyny, przebieg badania. Metoda wspomagająca dietę eliminacyjną.",
  path: "/test-nietolerancji-pokarmowej",
});

const PRZYCZYNY = [
  "Dieta matki i niemowlęcia",
  "Niewłaściwe odżywianie, dieta wysokoprzetworzona",
  "Stosowanie leków NLPZ i antybiotyków",
  "Alkohol",
  "Zakażenia pasożytnicze, bakteryjne, kandydoza",
  "Stres",
  "Niedostateczne trawienie",
  "Zapalenia jelit",
];

const OBJAWY = [
  {
    grupa: "Układ oddechowy",
    items: ["Nieżyt nosa", "Zapalenie zatok", "Astma"],
  },
  {
    grupa: "Przewód pokarmowy",
    items: ["Wzdęcia, zaparcia", "Zespół nadwrażliwego jelita", "Biegunki", "Otyłość"],
  },
  {
    grupa: "Skóra",
    items: ["Atopowe zapalenie skóry", "Łuszczyca", "Wysypki, egzema", "Pokrzywka"],
  },
  {
    grupa: "Inne",
    items: [
      "Problemy z poczęciem lub utrzymaniem ciąży",
      "Bóle mięśni i stawów, osłabienie",
      "Migreny, zaburzenia koncentracji",
      "Stany depresyjne, lęki",
    ],
  },
];

const FOOD_DETECTIVE = [
  { grupa: "Zboża", items: "kukurydza, pszenica durum, gluten, owies, ryż, żyto, pszenica" },
  {
    grupa: "Orzechy i strączkowe",
    items:
      "migdały, orzechy brazylijskie, orzechy cashew, ziarno kakaowca, orzeszki ziemne, mieszanina roślin strączkowych (groch, soczewica, fasola haricot), soja, orzechy włoskie",
  },
  { grupa: "Mięsa", items: "wołowina, kurczak, baranina, wieprzowina" },
  {
    grupa: "Ryby i owoce morza",
    items:
      "mieszanina ryb słodkowodnych (łosoś, pstrąg), mieszanina skorupiaków (krewetka, krab, homar, małż), tuńczyk, mieszanina ryb białych (łupacz, dorsz, płastuga)",
  },
  {
    grupa: "Warzywa",
    items: "brokuły, kapusta, marchewka, seler, ogórek, por, papryka (czerwona, zielona, żółta), ziemniak",
  },
  {
    grupa: "Owoce",
    items:
      "jabłko, czarna porzeczka, grejpfrut, mieszanina melonów (kantalupa i arbuz), oliwki, pomarańcza i cytryna, truskawka, pomidor",
  },
  { grupa: "Inne", items: "jajko (całe), mleko krowie, czosnek, imbir, grzyby, herbata, drożdże" },
];

export default function NietolerancjaPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Strona główna", href: "/" },
              { name: "Test nietolerancji pokarmowej", href: "/test-nietolerancji-pokarmowej" },
            ]),
            medicalTestSchema({
              name: "Test nietolerancji pokarmowej IgG (FoodDetective, Food Print)",
              description:
                "Oznaczenie przeciwciał IgG przeciwko antygenom pokarmowym — wskazówka do diety eliminacyjnej. Metoda komplementarna, nie zastępuje diagnostyki alergii IgE.",
              path: "/test-nietolerancji-pokarmowej",
            }),
          ]),
        }}
      />
      {/* Hero */}
      <section className="container py-14 md:py-24">
        <Reveal className="max-w-3xl space-y-5">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            Nietolerancja pokarmowa
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.03] tracking-tight">
            Ukryta nietolerancja
            <br />
            <span className="italic font-normal text-muted-foreground">na to, co jesz.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Nietolerancja pokarmowa zaliczana jest do chorób cywilizacyjnych, a jej rozwój wiąże się
            z coraz częstszym stosowaniem środków chemicznych w produkcji żywności. Długotrwałe,
            trudne do zdiagnozowania objawy mogą mieć u podłoża ukrytą nadwrażliwość na pokarmy — we
            krwi można wtedy wykryć zwiększoną ilość przeciwciał IgG przeciwko pokarmom, których
            organizm „nie lubi". Szacuje się, że dotyczy to około 45% populacji. Objawy pojawiają się
            od kilku godzin do trzech dni po spożyciu i mogą utrzymywać się tygodniami.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild variant="primary" size="lg">
              <a href={`tel:${SITE.contact.phone}`}>
                <Phone className="size-4" /> Zadzwoń: {SITE.contact.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pakiety/gut-health">
                Pakiet Gut Health
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Przyczyny + Diagnostyka + Przebieg */}
      <section className="container pb-6">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard icon={Activity} title="Przyczyny objawów">
            <ul className="space-y-1.5">
              {PRZYCZYNY.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </InfoCard>
          <InfoCard icon={FlaskConical} title="Diagnostyka">
            <p>
              Określenie poziomu przeciwciał IgG przeciwko antygenom pokarmowym. Materiałem jest
              niewielka ilość krwi pobrana z opuszki palca do specjalnej probówki dołączonej do
              zestawu.
            </p>
            <p className="mt-3">
              Ilościowe oznaczenie stężenia przeciwciał IgG i graficzne przedstawienie wyniku
              pozwala łatwo rozróżnić poziom reakcji i ułożyć odpowiednią dietę eliminacyjną.
            </p>
          </InfoCard>
          <InfoCard icon={ListChecks} title="Jak przebiega badanie">
            <p>
              Test ambulatoryjny wykonujemy w gabinecie — pobieramy kroplę krwi z palca. Wynik testu
              FoodDetective™ jest gotowy po ok. 40 minutach. Testy laboratoryjne (Food Print, Food
              Test) wysyłamy do laboratorium, a wynik omawiamy na kolejnej konsultacji.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* Objawy */}
      <section className="container py-12 md:py-16">
        <Reveal className="max-w-2xl space-y-3 mb-8">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight">Objawy nietolerancji</h2>
          <p className="text-muted-foreground">
            Objawy bywają odległe w czasie i niespecyficzne — np. mleko czy chleb spożyte jednego
            dnia mogą powodować ból stawów trzy dni później.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OBJAWY.map((o) => (
            <Card key={o.grupa}>
              <CardContent className="p-6">
                <h3 className="font-display text-lg mb-3">{o.grupa}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {o.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <CheckCircle2 className="size-4 text-success shrink-0 mt-0.5" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testy */}
      <section className="container pb-12 md:pb-16">
        <Reveal className="max-w-2xl space-y-3 mb-8">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight">
            Wykonywane testy na nietolerancję
          </h2>
        </Reveal>

        <div className="space-y-5">
          <Card>
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="accent">Test ambulatoryjny</Badge>
                <h3 className="font-display text-xl md:text-2xl">FoodDetective™ — 59 produktów</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-5">
                Określa reakcje organizmu na 59 najpopularniejszych produktów żywieniowych. Wynik już
                po ok. 40 minutach, jeszcze w gabinecie.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {FOOD_DETECTIVE.map((g) => (
                  <div key={g.grupa} className="rounded-2xl border border-border/60 p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-primary mb-1.5">
                      {g.grupa}
                    </p>
                    <p className="text-sm text-foreground/85 leading-relaxed">{g.items}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <CardContent className="p-6 md:p-8">
                <Badge variant="outline" className="mb-3 text-[10px] uppercase tracking-wider">
                  Test laboratoryjny
                </Badge>
                <h3 className="font-display text-xl mb-2">Food Print / Food Print 200+</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Precyzyjny pomiar poziomu antygenowo-swoistych IgG w technologii mikromacierzy.
                  Dostępne panele: rozpoznawczy oraz badający 222 alergeny. Materiałem jest próbka
                  krwi z palca; wynik podany ilościowo.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 md:p-8">
                <Badge variant="outline" className="mb-3 text-[10px] uppercase tracking-wider">
                  Test laboratoryjny
                </Badge>
                <h3 className="font-display text-xl mb-2">Food Test 90 / 110</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pomiar IgG klasyczną technologią immunoenzymatyczną ELISA. Dostępne panele:
                  rozpoznawczy (rozszerzalny do 109 alergenów), 90 oraz 90 wegetariański. Materiałem
                  jest próbka krwi z palca; wynik podany ilościowo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="container pb-20">
        <Disclaimer>
          Testy IgG traktujemy jako <strong className="text-foreground">wskazówkę do diety
          eliminacyjnej i obserwacji</strong>, nie jako rozpoznanie medyczne — stowarzyszenia
          alergologiczne (EAACI, AAAAI) nie uznają ich za potwierdzony klinicznie test diagnozujący
          nietolerancje. To nie są testy IgE (alergie natychmiastowe). U części osób eliminacja
          wskazanych produktów koreluje z poprawą samopoczucia.
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
