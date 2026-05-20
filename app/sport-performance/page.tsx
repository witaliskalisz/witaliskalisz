import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Trophy, Activity, Zap, ShieldAlert, Target } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LeadForm } from "@/components/forms/lead-form";
import { AthleteSection } from "@/components/sections/athlete-section";
import { PACKAGES } from "@/lib/packages";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sport Performance — diagnostyka dla sportowców",
  description:
    "Witalis Sport — pakiety diagnostyczne dla amatorów, półzawodowców i klubów. Markery, które monitorują FC Barcelona, Real Madryt i kluby Bundesligi.",
  path: "/sport-performance",
});

const MARKERS = [
  { name: "Ferrytyna", desc: "Zapasy żelaza — najczęstszy niedobór u biegaczy i kobiet. Spadek ferrytyny = -8-15% VO2max." },
  { name: "Witamina D3", desc: "Siła mięśni, regeneracja, odporność. 90% Polaków zimą ma niedobór." },
  { name: "Magnez (tkankowy)", desc: "Skurcze, jakość snu, ATP w mięśniach. Standardowy test surowicy nie wystarcza." },
  { name: "B12 + folian", desc: "Krytyczne dla wegetarian i wegan. Bez B12 — chroniczne zmęczenie i spadek formy." },
  { name: "Omega-3 index", desc: "Stan zapalny, regeneracja, funkcje kognitywne. Średnia Polaka ~4%, sportowiec >8%." },
  { name: "Hormony stresu", desc: "Kortyzol poranny, krzywa dobowa. Przetrenowanie = rozjechana krzywa." },
  { name: "Markery zapalne", desc: "hsCRP, IL-6, leukocyty pod mikroskopem. Tłumienie infekcji = lepsza forma." },
  { name: "Hydratacja & elektrolity", desc: "Agregaty erytrocytów pod mikroskopem to widoczny marker odwodnienia." },
];

const SPORT_PACKAGES = PACKAGES.filter((p) => p.category === "sport");

const CONSEQUENCES = [
  { icon: Activity, title: "Spadek VO2max", desc: "Niedobór żelaza obniża pułap tlenowy nawet o 15%." },
  { icon: Zap, title: "Gorsza regeneracja", desc: "Magnez i omega-3 to fundament odbudowy między treningami." },
  { icon: ShieldAlert, title: "Kontuzje przeciążeniowe", desc: "D3 < 30 ng/mL koreluje z wyższym ryzykiem urazów mięśni." },
  { icon: Target, title: "Stagnacja wyników", desc: "Ukryte niedobory to #1 powód, dla którego progres znika." },
];

export default function SportPage() {
  return (
    <div className="pt-12">
      {/* HERO */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-zinc-900 to-foreground" />
          <div className="absolute inset-0 grid-bg opacity-[0.08]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[1000px] rounded-full bg-gradient-radial from-primary/20 to-transparent blur-3xl" />
        </div>
        <div className="container relative text-background">
          <Reveal className="max-w-3xl space-y-6">
            <Badge variant="glass" className="text-[11px] uppercase tracking-[0.18em] border-white/20 bg-white/10 text-background">
              <Trophy className="size-3" /> Sport Performance
            </Badge>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance">
              Trenujesz <span className="italic font-normal text-background/50">jak zawodowiec</span>
              <br />— badaj się jak <span className="bg-gradient-to-br from-primary via-[hsl(var(--neon))] to-primary bg-clip-text text-transparent">zawodowiec</span>.
            </h1>
            <p className="text-xl text-background/70 leading-relaxed text-pretty max-w-2xl">
              Każdy klub La Liga, Bundesligi i Premier League ma dział medyczny monitorujący biomarkery
              swoich zawodników co 4-6 tygodni. Bo niewidoczny niedobór = widoczna porażka. To samo
              dostajesz w Kaliszu, w 60 minut.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild variant="primary" size="xl">
                <Link href="#pakiety">
                  Zobacz pakiety sport
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-background"
              >
                <Link href="#kluby">Dla klubów</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <AthleteSection />

      {/* Markers */}
      <section className="py-20 container">
        <Reveal className="max-w-2xl mx-auto text-center space-y-4 mb-12">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">Co badamy</Badge>
          <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight">
            8 kluczowych markerów sportowca
          </h2>
          <p className="text-muted-foreground">
            Te same markery, co w FC Barcelonie i Realu Madryt. Plus mikroskopia żywej krwi i skanowanie Diacom 3D.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MARKERS.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <Card className="h-full p-5">
                <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold font-mono mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display text-lg mb-1.5">{m.name}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Consequences */}
      <section className="py-20 bg-muted/40">
        <div className="container">
          <Reveal className="max-w-2xl mx-auto text-center space-y-4 mb-12">
            <Badge variant="amber" className="text-[10px]">Bez monitoringu</Badge>
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight">
              Co dzieje się, gdy ignorujesz markery
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-5">
            {CONSEQUENCES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="text-center space-y-3">
                  <div className="inline-flex size-14 rounded-2xl bg-amber-500/10 text-amber-600 items-center justify-center">
                    <c.icon className="size-6" />
                  </div>
                  <h3 className="font-display text-lg">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="container py-20" id="pakiety">
        <Reveal className="max-w-2xl mx-auto text-center space-y-4 mb-12">
          <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight">
            Pakiety sport
          </h2>
          <p className="text-muted-foreground">
            Dla amatorów, półzawodowców i klubów. Programy 1-wizytowe i 3-miesięczne.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPORT_PACKAGES.map((p) => (
            <Card key={p.slug} className="p-6 hover:-translate-y-1 transition-transform">
              {p.badge && <Badge variant="accent" className="mb-3 text-[10px]">{p.badge}</Badge>}
              <h3 className="font-display text-xl mb-1">{p.name}</h3>
              <p className="text-xs text-muted-foreground italic mb-4">{p.tagline}</p>
              <div className="font-display text-2xl mb-3">{p.metadata.priceLabel}</div>
              <p className="text-xs text-muted-foreground mb-4">{p.duration}</p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={`/pakiety/${p.slug}`}>Szczegóły</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Kluby */}
      <section className="container py-20" id="kluby">
        <Reveal className="max-w-3xl mx-auto">
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-12 space-y-5 bg-gradient-to-br from-primary/5 to-card">
                <Badge variant="accent" className="text-[10px]">
                  <Trophy className="size-3" /> Dla klubów
                </Badge>
                <h2 className="font-display text-3xl md:text-4xl leading-tight">
                  Profesjonalna diagnostyka<br />dla całej drużyny.
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Model FC Barcelony skalowany do polskich realiów. Dla klubów piłkarskich,
                  siatkarskich, koszykarskich, MMA, drużyn akademickich. Roczna umowa partnerska
                  z 20% zniżką.
                </p>
                <Button asChild variant="primary" size="lg">
                  <Link href="/kontakt?temat=sport">
                    Zapytaj o wycenę dla klubu <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="p-10 md:p-12 bg-card">
                <LeadForm defaultTopic="sport" />
              </div>
            </div>
          </Card>
        </Reveal>
      </section>
    </div>
  );
}
