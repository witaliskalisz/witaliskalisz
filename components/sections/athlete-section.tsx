"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Trophy, Zap, Target } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedNumber } from "@/components/effects/animated-number";

const CLUBS = [
  {
    name: "Real Madrid",
    detail: "~11 pełnych paneli krwi / sezon",
    color: "from-yellow-400/20 to-amber-300/5",
  },
  {
    name: "FC Barcelona",
    detail: "Sztab medyczny ~14 specjalistów",
    color: "from-rose-500/20 to-red-400/5",
  },
  {
    name: "Bayern München",
    detail: "Säbener Straße — własne laboratorium",
    color: "from-red-500/20 to-red-400/5",
  },
  {
    name: "Liverpool FC",
    detail: "Nutrition team pod Moną Nemmer",
    color: "from-rose-600/20 to-rose-500/5",
  },
  {
    name: "Manchester City",
    detail: "CFG Performance Lab",
    color: "from-sky-500/20 to-cyan-400/5",
  },
  {
    name: "Juventus",
    detail: "JMedical — własna klinika sportowa",
    color: "from-zinc-500/20 to-zinc-400/5",
  },
];

const STATS = [
  { value: 30, suffix: "%", label: "redukcja kontuzji przeciążeniowych", source: "Man United 2019" },
  { value: 90, suffix: "%", label: "Polaków zimą ma niedobór D3", source: "badania populacyjne" },
  { value: 15, suffix: "%", label: "spadku VO2max przy niedoborze Fe", source: "Sports Med review" },
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
              <Badge variant="glass" className="text-[11px] uppercase tracking-[0.18em] border-white/20 text-background bg-white/10">
                <Trophy className="size-3" /> 05 · Performance health
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tight text-balance">
                Tak monitorują zdrowie
                <br />
                <span className="bg-gradient-to-br from-primary via-[hsl(var(--neon))] to-primary bg-clip-text text-transparent">
                  zawodnicy FC Barcelony
                </span>
                <br />
                <span className="italic font-normal text-background/60">— a Ty robisz to w Kaliszu.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-background/70 max-w-xl leading-relaxed text-pretty">
                Każdy klub Bundesligi, La Liga, Premier League ma dział medyczny, który regularnie
                monitoruje markery krwi swoich zawodników: ferrytynę, witaminę D, B12, magnez,
                hormony stresu. Bo każdy niedobór = niższe VO2max, gorsza regeneracja, kontuzje.
                Tę samą diagnostykę funkcjonalną otrzymujesz u nas.
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
                  <Link href="/blog/jak-badaja-sportowcy-bundesligi">Cały artykuł</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {CLUBS.map((club, i) => (
              <motion.div
                key={club.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${club.color} backdrop-blur-md p-4 hover:border-white/30 transition-colors`}
              >
                <div className="absolute inset-0 bg-white/5" />
                <div className="relative">
                  <p className="font-display text-base leading-tight">{club.name}</p>
                  <p className="text-[11px] text-background/60 mt-1.5">{club.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <Reveal delay={0.4} className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="font-display text-5xl md:text-6xl tracking-tight bg-gradient-to-br from-primary to-[hsl(var(--neon))] bg-clip-text text-transparent">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-background/80 max-w-xs mx-auto md:mx-0">{stat.label}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wider text-background/40">
                  źródło: {stat.source}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
