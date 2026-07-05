"use client";

import { motion } from "framer-motion";
import {
  Microscope,
  Crown,
  Brain,
  ShieldCheck,
  Timer,
  HeartHandshake,
} from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { AnimatedNumber } from "@/components/effects/animated-number";
import { SITE } from "@/lib/site";

const REASONS = [
  {
    icon: Crown,
    title: "Jedyna taka w regionie kaliskim",
    desc: "Jedno z niewielu miejsc w Wielkopolsce południowej, gdzie mikroskopię żywej kropli krwi łączymy z testami nietolerancji IgG i analizą niedoborów pod jednym dachem.",
    accent: "from-amber-500/15 to-amber-400/0",
  },
  {
    icon: Microscope,
    title: "Sprzęt klasy laboratoryjnej",
    desc: "Mikroskop z kamerą cyfrową do powiększenia 1600× oraz certyfikowany system testów nietolerancji FoodDetective™. Prawdziwa diagnostyka, którą widzisz na własne oczy.",
    accent: "from-blue-500/15 to-blue-400/0",
  },
  {
    icon: Brain,
    title: "Indywidualne podejście",
    desc: "Właścicielka osobiście prowadzi każdą wizytę. Bez asystentów, bez 'taśmy'. Każdy klient dostaje 60-120 minut pełnej uwagi. Bez NFZ-owego pośpiechu.",
    accent: "from-violet-500/15 to-violet-400/0",
  },
  {
    icon: Timer,
    title: "Szybkie wyniki",
    desc: "Mikroskopia żywej kropli krwi — efekt natychmiastowy podczas wizyty. Test nietolerancji FoodDetective™ — wynik już po ok. 40 minutach, jeszcze w gabinecie.",
    accent: "from-cyan-500/15 to-cyan-400/0",
  },
  {
    icon: HeartHandshake,
    title: "Plan, nie tylko wyniki",
    desc: "Nie zostawiamy Cię ze stertą wykresów. Dostajesz konkretne zalecenia: nazwy preparatów, dawki, terminy, listę produktów. Plan, który da się wykonać.",
    accent: "from-emerald-500/15 to-emerald-400/0",
  },
  {
    icon: ShieldCheck,
    title: "RODO & dyskrecja",
    desc: "Wyniki nigdy nie opuszczą gabinetu bez Twojej zgody. Pełna zgodność RODO, zaszyfrowane przechowywanie. Pełna prywatność w czasie wizyt.",
    accent: "from-rose-500/15 to-rose-400/0",
  },
];

const STATS = [
  { value: SITE.clientsServed, suffix: "+", label: "klientów od 2018 roku" },
  { value: 7, suffix: " lat", label: "doświadczenia w praktyce" },
  { value: 59, suffix: "", label: "produktów w FoodDetective™" },
  { value: 1600, suffix: "×", label: "powiększenie mikroskopu" },
];

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 relative" id="dlaczego-my">
      <div className="container">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            Dlaczego Witalis
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Konkret
            <br />
            <span className="italic font-normal text-muted-foreground">zamiast obietnic.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Właścicielka prowadzi Witalis od 2018 roku. Osobiście — bo każdy klient zasługuje na
            pełną uwagę i wyniki wytłumaczone prostym językiem.
          </p>
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 mb-20">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center md:text-left p-6 rounded-3xl bg-card/40 border border-border/50 backdrop-blur-sm"
            >
              <div className="font-display text-4xl md:text-5xl tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                <AnimatedNumber value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </Reveal>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl p-6 md:p-8 border border-border/60 bg-card/60 backdrop-blur-sm transition-all hover:border-foreground/20 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]"
            >
              <div
                className={`absolute -top-20 -right-20 size-48 rounded-full bg-gradient-to-br ${r.accent} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`}
              />
              <div className="relative">
                <div className="inline-flex items-center justify-center size-12 rounded-2xl bg-background border border-border/60 shadow-sm mb-5">
                  <r.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-display text-xl leading-tight mb-2.5">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
