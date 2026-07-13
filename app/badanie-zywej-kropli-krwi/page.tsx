import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Phone, Microscope, Droplets, ClipboardList, CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/effects/reveal";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, medicalTestSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Badanie żywej kropli krwi — na czym polega",
  description:
    "Mikroskopowe badanie żywej kropli krwi w Kaliszu — na czym polega, jak przebiega, jak się przygotować i co pozwala zaobserwować. Metoda obserwacyjna, komplementarna do badań laboratoryjnych.",
  path: "/badanie-zywej-kropli-krwi",
});

const OBSERWACJE = [
  "Kształt oraz agregacje czerwonych krwinek",
  "Stopień aktywności białych krwinek (odporność)",
  "Uszkodzenia komórek krwi przez wolne rodniki",
  "Obecność struktur niepożądanych (m.in. pasożyty, grzyby, metale ciężkie)",
  "Zaburzenia trawienia białek",
  "Struktury krystaliczne (blaszki cholesterolu, kryształy kwasu moczowego)",
  "Wskazówki dot. niedoborów żelaza, kwasu foliowego, witaminy B12 (anemie)",
  "Oznaki stanów zapalnych i zakwaszenia organizmu",
  "Obserwacje sugerujące obciążenie trzustki i wątroby",
  "Wskazówki dot. nawodnienia organizmu",
];

export default function ZywaKroplaPage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema([
              { name: "Strona główna", href: "/" },
              { name: "Badanie żywej kropli krwi", href: "/badanie-zywej-kropli-krwi" },
            ]),
            medicalTestSchema({
              name: "Mikroskopowe badanie żywej kropli krwi",
              description:
                "Obserwacyjne, funkcjonalne badanie świeżej kropli krwi pod mikroskopem cyfrowym (powiększenie do 1600×). Metoda komplementarna do badań laboratoryjnych.",
              path: "/badanie-zywej-kropli-krwi",
            }),
          ]),
        }}
      />
      {/* Hero */}
      <section className="container py-14 md:py-24">
        <Reveal className="max-w-3xl space-y-5">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            Badanie żywej kropli krwi
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.03] tracking-tight">
            Zobacz swoją krew
            <br />
            <span className="italic font-normal text-muted-foreground">na żywo, na ekranie.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            To technika badawcza służąca ocenie zdolności organizmu do utrzymania wewnętrznej
            stabilności — homeostazy. Warunkiem stabilności organizmu jest utrzymanie parametrów
            krwi na odpowiednim poziomie.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild variant="primary" size="lg">
              <a href={`tel:${SITE.contact.phone}`}>
                <Phone className="size-4" /> Zadzwoń: {SITE.contact.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pakiety/start">
                Pakiet Start
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Na czym polega */}
      <section className="container pb-6">
        <div className="grid md:grid-cols-3 gap-5">
          <InfoCard icon={Microscope} title="Na czym polega">
            Kamera cyfrowa zainstalowana na osi optycznej mikroskopu przesyła na bieżąco obraz
            pobranej krwi na ekran komputera. Umożliwia to wykonywanie zdjęć preparatu, a nawet
            rejestrację filmów poruszających się erytrocytów, leukocytów i innych składników krwi,
            jak również elementów niepożądanych.
          </InfoCard>
          <InfoCard icon={Droplets} title="Przebieg badania">
            Krew z nakłutej opuszki palca nanoszona jest na szkiełko podstawowe i po odpowiednim
            przygotowaniu oglądana pod mikroskopem, z wykorzystaniem zmiennych powiększeń od 100× do
            1600×. W trakcie analizy możesz obserwować własną krew na ekranie komputera.
          </InfoCard>
          <InfoCard icon={ClipboardList} title="Jak się przygotować">
            <ul className="space-y-1.5">
              <li>• Co najmniej 24 godziny przed badaniem nie spożywaj alkoholu.</li>
              <li>• W dniu badania nie pij kawy.</li>
              <li>• Na 2 godziny przed badaniem nie spożywaj posiłku.</li>
              <li>• Około 30 min przed badaniem wypij 0,5 litra wody.</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* Co pozwala zaobserwować */}
      <section className="container py-12 md:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5">
            <Reveal className="space-y-4 lg:sticky lg:top-28">
              <h2 className="font-display text-3xl md:text-4xl leading-tight tracking-tight">
                Co pozwala
                <br />
                <span className="italic font-normal text-muted-foreground">zaobserwować</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Obraz żywej kropli krwi pozwala zwrócić uwagę na szereg sygnałów i wskazać kierunki
                dalszej diagnostyki. To metoda obserwacyjna i edukacyjna — widzisz swoją krew na
                żywo i wspólnie omawiamy, co warto sprawdzić dalej.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {OBSERWACJE.map((o) => (
                      <li key={o} className="flex gap-2.5 text-sm">
                        <CheckCircle2 className="size-4 text-success shrink-0 mt-0.5" />
                        <span className="text-foreground/85">{o}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Czego nie można określić + disclaimer */}
      <section className="container pb-20">
        <Reveal>
          <Card className="border-amber-500/30 bg-amber-500/[0.04]">
            <CardContent className="p-6 md:p-8 flex flex-col md:flex-row gap-5">
              <div className="size-11 rounded-2xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                <XCircle className="size-5" />
              </div>
              <div className="space-y-2">
                <h2 className="font-display text-xl md:text-2xl">Czego badanie nie określa</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  W świeżej kropli krwi <strong className="text-foreground">nie można</strong> określić
                  grupy krwi, poziomu glukozy, stopnia kwasowości ani innych parametrów badanych
                  aparaturowo. Mikroskopowe badanie żywej kropli krwi to metoda{" "}
                  <strong className="text-foreground">obserwacyjna, funkcjonalna i komplementarna</strong> —
                  nie zastępuje morfologii, badań laboratoryjnych ani konsultacji lekarskiej. W razie
                  potrzeby kierujemy na konkretne badania laboratoryjne.
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>

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
