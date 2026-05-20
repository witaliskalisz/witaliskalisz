"use client";

import { motion } from "framer-motion";
import { ClipboardList, Calendar, Microscope, FileSearch, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";

const STEPS = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Wybierasz pakiet lub dzwonisz",
    desc: "Sam wybierasz pakiet z naszej listy albo dzwonisz/wypełniasz quiz na stronie — pomagamy dobrać najlepszy wariant na Twoje objawy.",
    duration: "5 min",
  },
  {
    n: "02",
    icon: Calendar,
    title: "Rezerwujesz wizytę",
    desc: "Rejestracja telefoniczna pon-pt 16:00–20:00. Najczęściej dostępny termin w ciągu 3-7 dni. Wizyta w gabinecie w centrum Kalisza.",
    duration: "3-7 dni",
  },
  {
    n: "03",
    icon: Microscope,
    title: "Wykonujemy badania",
    desc: "60-120 minut w gabinecie. Mikroskopowe badanie żywej kropli krwi, testy nietolerancji (gdy w pakiecie), skanowanie Diacom 3D. Wyniki widzisz natychmiast na ekranie.",
    duration: "60-120 min",
  },
  {
    n: "04",
    icon: FileSearch,
    title: "Analiza i diagnoza",
    desc: "Omawiamy każdy wynik — pokazujemy zdjęcia preparatu krwi, mapę z Diacom 3D, listę nietolerowanych produktów. Niczego nie ukrywamy. Wszystko zrozumiałe.",
    duration: "30-60 min",
  },
  {
    n: "05",
    icon: MessageSquare,
    title: "Personalny plan działania",
    desc: "Dostajesz indywidualny plan: dietetyczny, suplementacyjny, lifestyle. Konkretne preparaty, dawki, terminy. Follow-up telefoniczny po 30 dniach.",
    duration: "trwały efekt",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="jak-to-dziala">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 dotted-bg opacity-50" />
      </div>

      <div className="container">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            02 · Jak to działa
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            <span className="italic font-normal text-muted-foreground">Od pytania</span> do planu
            <br /> w 5 krokach
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Bez tygodni czekania, bez biegania od specjalisty do specjalisty.
            Cała diagnostyka i plan działania — w jednym miejscu.
          </p>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[36px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex md:items-center gap-6 md:gap-12 mb-12 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number bubble */}
                <div className="relative shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:z-10">
                  <div className="size-[72px] md:size-20 rounded-full bg-gradient-to-br from-primary to-[hsl(var(--neon))] text-primary-foreground flex items-center justify-center shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.5)]">
                    <step.icon className="size-7 md:size-8" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 size-6 rounded-full bg-card border border-border flex items-center justify-center">
                    <span className="text-[10px] font-mono font-bold text-foreground">{step.n}</span>
                  </div>
                </div>

                {/* Content card */}
                <div className={`flex-1 md:max-w-[42%] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="glass rounded-3xl p-6 md:p-7 transition-all hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1">
                    <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Badge variant="accent" className="text-[10px]">{step.duration}</Badge>
                    </div>
                    <h3 className="font-display text-2xl leading-tight mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>

                {/* Empty spacer for opposite side on desktop */}
                <div className="hidden md:block flex-1 md:max-w-[42%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
