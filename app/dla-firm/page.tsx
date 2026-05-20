import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2, HeartPulse, TrendingUp, Users, Award, ShieldCheck, Calculator, ClipboardList } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LeadForm } from "@/components/forms/lead-form";
import { B2BSection } from "@/components/sections/b2b-section";
import { PACKAGES } from "@/lib/packages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Witalis at Work — diagnostyka jako benefit pozapłacowy",
  description:
    "Mobilna diagnostyka dla firm w Wielkopolsce. Właścicielka Witalis przyjeżdża do biura, bada zespół, dostarcza indywidualne raporty i — opcjonalnie — startową suplementację.",
  path: "/dla-firm",
});

const PROCESS = [
  { n: "01", title: "Rozmowa z HR / zarządem", desc: "30-minutowe spotkanie online lub w siedzibie. Dobieramy pakiet, harmonogram, miejsce." },
  { n: "02", title: "Logistyka dnia badań", desc: "Przyjeżdżamy, w jednym dniu badamy 8-25 osób w wybranej przestrzeni (salka konferencyjna)." },
  { n: "03", title: "Indywidualne raporty", desc: "Każdy pracownik dostaje swój prywatny wynik + zalecenia. HR — tylko zanonimizowany overview." },
  { n: "04", title: "Follow-up i suplementacja", desc: "Opcjonalnie: dostawa suplementacji startowej (30 dni) i konsultacja po 90 dniach." },
];

const VALUES = [
  { icon: HeartPulse, title: "20-30% mniej dni L4", desc: "Pracownicy z zdiagnozowanymi niedoborami (D3/Fe/B12) mają mierzalnie niższą absencję." },
  { icon: TrendingUp, title: "+15% jakości pracy", desc: "Funkcje kognitywne (focus, pamięć) zależą od B12, magnezu, omega-3 — to nie marketing." },
  { icon: Users, title: "Retencja Gen Z/M", desc: "Well-being w top-3 oczekiwań tych pokoleń. Konkret > Multisport." },
  { icon: Award, title: "Employer brand", desc: "Konkretny benefit do pokazania w rekrutacji i ankietach satysfakcji." },
  { icon: ShieldCheck, title: "RODO compliant", desc: "Indywidualne raporty wracają wyłącznie do pracownika — HR widzi tylko statystyki." },
  { icon: Calculator, title: "Możliwy do rozliczenia", desc: "Wiele firm rozlicza nasze pakiety jako świadczenie medyczne — skonsultuj z księgowością." },
];

const B2B_PACKAGES = PACKAGES.filter((p) => p.category === "business");

export default function DlaFirmPage() {
  return (
    <div className="pt-12">
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 right-0 size-[600px] rounded-full bg-gradient-radial from-primary/15 to-transparent blur-3xl" />
        </div>
        <div className="container">
          <Reveal className="max-w-3xl space-y-6">
            <Badge variant="accent" className="text-[11px] uppercase tracking-[0.18em]">
              <Building2 className="size-3" /> Witalis at Work
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance">
              Benefit, który <span className="italic font-normal text-muted-foreground">naprawdę</span>
              <br />coś zmienia.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              Multisport bywa nieużywany. Karta lunchowa nie buduje zdrowia. Coś, co realnie wpływa
              na samopoczucie ludzi w Twoim zespole? Diagnostyka funkcjonalna, dostarczana do biura.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild variant="primary" size="xl">
                <Link href="#oferta">
                  Zobacz pakiety
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="#kontakt">Porozmawiajmy</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values grid */}
      <section className="container py-20">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight">
            Co Twoja firma <span className="italic font-normal text-muted-foreground">realnie zyska</span>
          </h2>
          <p className="text-muted-foreground">Konkret, nie buzzwordy.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <Card className="h-full p-7 hover:-translate-y-1 transition-transform">
                <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <v.icon className="size-5" />
                </div>
                <h3 className="font-display text-xl mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process timeline */}
      <section className="bg-muted/40 py-20">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
              <ClipboardList className="size-3" /> Proces
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight">
              Od ustalenia do follow-upu
            </h2>
            <p className="text-muted-foreground">Cztery kroki. Zwykle 2-3 tygodnie od pierwszej rozmowy.</p>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="relative bg-card border border-border/50 rounded-3xl p-6 h-full">
                  <span className="font-display text-4xl text-primary/30">{p.n}</span>
                  <h3 className="font-display text-lg mt-3 mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="container py-20" id="oferta">
        <Reveal className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight">
            Trzy pakiety dla firm
          </h2>
          <p className="text-muted-foreground">Od pierwszego screeningu po Executive Care.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {B2B_PACKAGES.map((p) => (
            <Card key={p.slug} className="p-7 hover:-translate-y-1 transition-transform">
              {p.badge && <Badge variant="accent" className="mb-3">{p.badge}</Badge>}
              <h3 className="font-display text-2xl mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground italic mb-4">{p.tagline}</p>
              <div className="font-display text-3xl mb-1">{p.metadata.priceLabel}</div>
              {p.minPersons && <p className="text-xs text-muted-foreground mb-5">min. {p.minPersons} osób · {p.duration}</p>}
              <p className="text-sm leading-relaxed mb-5">{p.description}</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={`/pakiety/${p.slug}`}>Szczegóły</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <B2BSection />

      {/* CTA / Lead form */}
      <section className="container py-24" id="kontakt">
        <Reveal className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8 space-y-3">
                <Badge variant="success" className="text-[10px]">30-minutowa konsultacja, bezpłatnie</Badge>
                <h2 className="font-display text-3xl md:text-4xl leading-tight">
                  Porozmawiajmy o Twojej firmie.
                </h2>
                <p className="text-muted-foreground">
                  Wstępne ustalenia online. Bez zobowiązań. Pomożemy ocenić, czy to coś dla Was.
                </p>
              </div>
              <LeadForm defaultTopic="b2b" />
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </div>
  );
}
