"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Microscope, Sparkles, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";

const QUALIFICATIONS = [
  { icon: Calendar, label: "15+ lat doświadczenia" },
  { icon: Microscope, label: "Specjalistka diagnostyki mikroskopowej" },
  { icon: Stethoscope, label: "Certyfikat FoodDetective™" },
  { icon: Award, label: "Operator Diacom 3D" },
];

export function Team() {
  return (
    <section className="py-24 md:py-32 relative" id="zespol">
      <div className="container">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            09 · Zespół Witalis
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Jedna osoba.
            <br />
            <span className="italic font-normal text-muted-foreground">Pełna uwaga.</span>
          </h2>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          <Reveal delay={0.1}>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-card/60 backdrop-blur-sm rounded-3xl border border-border/50 p-8 md:p-12">
              {/* Photo placeholder */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-card to-[hsl(var(--neon))]/15 border border-border/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 200 250" className="size-full" aria-hidden>
                      <defs>
                        <linearGradient id="team-grad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                          <stop offset="1" stopColor="hsl(var(--neon))" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                      <circle cx="100" cy="90" r="48" fill="url(#team-grad)" />
                      <path
                        d="M 20 250 Q 20 160 100 160 Q 180 160 180 250 Z"
                        fill="url(#team-grad)"
                      />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="glass" className="text-[10px] backdrop-blur-md">
                      Zdjęcie placeholder — do uzupełnienia
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <Badge variant="accent" className="mb-3">
                    <Sparkles className="size-3" /> Założycielka
                  </Badge>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight">
                    Marzena Kowalska
                  </h3>
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground mt-2">
                    Specjalista diagnostyki funkcjonalnej
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-pretty">
                  „Założyłam Witalis w 2018 roku, bo przez 15 lat pracy w służbie zdrowia
                  widziałam to samo: ludzie przychodzą po pomoc, wychodzą z receptą na
                  objawy. Bez czasu na zrozumienie przyczyn. Postanowiłam stworzyć miejsce,
                  gdzie diagnostyka jest naprawdę indywidualna — z czasem, z mikroskopem,
                  z planem. I tak działam dziś, sama, świadomie."
                </p>
                <p className="text-[11px] italic text-muted-foreground">
                  [Cytat placeholder — do uzupełnienia osobistym bio]
                </p>

                <div className="grid grid-cols-2 gap-3 pt-3">
                  {QUALIFICATIONS.map((q) => (
                    <div
                      key={q.label}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-background/60 border border-border/40"
                    >
                      <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <q.icon className="size-4" />
                      </div>
                      <span className="text-xs font-medium">{q.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <motion.div
              whileHover={{ y: -2 }}
              className="mt-8 text-center p-6 rounded-3xl border border-dashed border-border bg-muted/30"
            >
              <p className="text-sm text-muted-foreground italic">
                Witalis rozwija się — wkrótce dołączą do nas dietetyczka kliniczna i
                trener przygotowania motorycznego.
                <br />
                Zainteresowany dołączeniem? <a href="mailto:witalis.kalisz@wp.pl" className="text-primary underline-offset-4 hover:underline">napisz do nas</a>.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
