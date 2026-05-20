"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MARKERS = [
  {
    label: "Ferrytyna",
    detail: "Zapasy żelaza · biegacze, kobiety, weganie",
    accent: "from-rose-500/20 to-red-400/5",
  },
  {
    label: "Witamina D3",
    detail: "Siła mięśni i regeneracja · 90% Polaków zimą",
    accent: "from-amber-500/20 to-yellow-400/5",
  },
  {
    label: "Magnez",
    detail: "Skurcze, jakość snu, ATP · niedostrzegane",
    accent: "from-violet-500/20 to-violet-400/5",
  },
  {
    label: "B12 + folian",
    detail: "Wegetarianie · synteza energii w mitochondriach",
    accent: "from-emerald-500/20 to-emerald-400/5",
  },
  {
    label: "Omega-3 index",
    detail: "Stan zapalny · średnia Polaka ~4%, cel >8%",
    accent: "from-cyan-500/20 to-cyan-400/5",
  },
  {
    label: "Kortyzol / stres",
    detail: "Przetrenowanie · krzywa dobowa",
    accent: "from-slate-500/20 to-zinc-400/5",
  },
];

export function AthleteSection() {
  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-foreground via-zinc-900 to-foreground text-background"
      id="sport"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-[0.08]" />
        <div className="absolute top-0 right-0 size-[800px] rounded-full bg-gradient-radial from-primary/25 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 size-[600px] rounded-full bg-gradient-radial from-[hsl(var(--neon))]/20 to-transparent blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-7">
            <Reveal>
              <Badge
                variant="glass"
                className="text-[11px] uppercase tracking-[0.18em] border-white/20 text-background bg-white/10"
              >
                <Trophy className="size-3" /> 05 · Performance & wellness
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-balance">
                Te same markery, które monitorują
                <br />
                <span className="bg-gradient-to-br from-primary via-[hsl(var(--neon))] to-primary bg-clip-text text-transparent">
                  zawodowi sportowcy
                </span>
                <br />
                <span className="italic font-normal text-background/60">
                  — przeniesione na Twój trening.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-background/70 max-w-xl leading-relaxed text-pretty">
                Sztaby medyczne na najwyższym poziomie sportu regularnie sprawdzają u zawodników{" "}
                <strong className="text-background">ferrytynę, witaminę D3, B12, magnez, omega-3
                index i hormony stresu</strong>. Bo każdy niezauważony niedobór = niższe VO2max,
                gorsza regeneracja, ryzyko kontuzji. Tę funkcjonalną mapę markerów oferujemy także
                amatorom i półzawodowcom.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-xs text-background/50 leading-relaxed max-w-xl">
                Praktyka monitorowania biomarkerów u sportowców wyczynowych jest dobrze
                udokumentowana w literaturze sports medicine (m.in. konsensusy MKOl/IOC, publikacje
                w British Journal of Sports Medicine). Witalis stosuje metody funkcjonalne i
                komplementarne — nie zastępują badań laboratoryjnych.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button asChild variant="primary" size="xl">
                  <Link href="/sport-performance">
                    Sprawdź pakiety sportowe
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="border-white/20 bg-white/5 hover:bg-white/10 text-background"
                >
                  <Link href="/blog/jak-badaja-sportowcy-bundesligi">Co i dlaczego badamy</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Markers grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {MARKERS.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${m.accent} backdrop-blur-md p-4 hover:border-white/30 transition-colors`}
              >
                <div className="absolute inset-0 bg-white/5" />
                <div className="relative">
                  <p className="font-display text-base leading-tight">{m.label}</p>
                  <p className="text-[11px] text-background/60 mt-1.5 leading-snug">
                    {m.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
