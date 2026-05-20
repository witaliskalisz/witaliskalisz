"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  GraduationCap,
  Heart,
  Microscope,
  Quote,
  Sparkles,
  Stethoscope,
  User,
} from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";

const QUALIFICATIONS = [
  { icon: Calendar, label: "7+ lat doświadczenia", sub: "od 2018" },
  { icon: Microscope, label: "Mikroskopia żywej krwi", sub: "specjalizacja" },
  { icon: Stethoscope, label: "FoodDetective™", sub: "certyfikat" },
  { icon: Award, label: "Diacom 3D Scanner", sub: "operator" },
];

const VALUES = [
  {
    icon: Heart,
    title: "Pełna uwaga",
    desc: "Każda wizyta to 60–120 minut tylko dla Ciebie. Bez asystentów, bez pośpiechu.",
  },
  {
    icon: User,
    title: "Indywidualne podejście",
    desc: "Plan żywieniowy i suplementacyjny dobierany pod Twój wywiad i wyniki — nie szablon.",
  },
  {
    icon: GraduationCap,
    title: "Ciągły rozwój",
    desc: "Regularne szkolenia z dietetyki funkcjonalnej, sport science i microbiomu.",
  },
];

export function Team() {
  return (
    <section className="py-24 md:py-32 relative" id="zespol">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
      </div>

      <div className="container">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 space-y-5">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            09 · Poznaj właścicielkę
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Jedna osoba.
            <br />
            <span className="italic font-normal text-muted-foreground">Pełna uwaga.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Witalis to nie korporacja. To pracownia jednej specjalistki, która od 2018 roku
            osobiście prowadzi każdą wizytę.
          </p>
        </Reveal>

        <div className="max-w-6xl mx-auto">
          {/* Profile card */}
          <Reveal delay={0.1}>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Photo */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/15 via-card to-[hsl(var(--neon))]/10 border border-border/50 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
                  {/* Placeholder portrait illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 200 250" className="w-full h-full" aria-hidden>
                      <defs>
                        <linearGradient id="portrait-bg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="hsl(var(--neon))" stopOpacity="0.15" />
                        </linearGradient>
                        <linearGradient id="portrait-fig" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.85" />
                          <stop offset="100%" stopColor="hsl(var(--neon))" stopOpacity="0.65" />
                        </linearGradient>
                      </defs>
                      <rect width="200" height="250" fill="url(#portrait-bg)" />
                      <circle cx="100" cy="92" r="46" fill="url(#portrait-fig)" />
                      <path
                        d="M 18 260 Q 18 158 100 158 Q 182 158 182 260 Z"
                        fill="url(#portrait-fig)"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <Badge variant="glass" className="text-[9px] backdrop-blur-md">
                      [DODAJ ZDJĘCIE]
                    </Badge>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-display text-2xl text-background drop-shadow">
                      [Imię i nazwisko]
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-background/80 mt-1">
                      Założycielka · Specjalistka diagnostyki funkcjonalnej
                    </p>
                  </div>
                </div>

                {/* Quick stats under photo */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {QUALIFICATIONS.slice(0, 2).map((q) => (
                    <div
                      key={q.label}
                      className="flex items-center gap-2.5 p-3 rounded-2xl bg-card/60 border border-border/40"
                    >
                      <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <q.icon className="size-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-semibold leading-tight truncate">{q.label}</p>
                        <p className="text-[10px] text-muted-foreground">{q.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div className="lg:col-span-7 space-y-7">
                <Badge variant="accent">
                  <Sparkles className="size-3" /> O właścicielce
                </Badge>

                <div className="relative">
                  <Quote className="size-8 text-primary/30 absolute -top-2 -left-1" />
                  <p className="font-display text-2xl md:text-[28px] leading-snug text-pretty pl-8 italic">
                    „[Tu wstawisz osobistą wypowiedź właścicielki — np. dlaczego zaczęła się
                    zajmować diagnostyką funkcjonalną, jaka jest jej filozofia pracy z klientem,
                    co ją wyróżnia.]"
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Doświadczenie:</strong> [Tu opis ścieżki
                    zawodowej — wykształcenie, ile lat w branży, jakie szkolenia, certyfikaty.]
                  </p>
                  <p>
                    <strong className="text-foreground">Specjalizacja:</strong> Mikroskopia żywej
                    kropli krwi, testy nietolerancji pokarmowych IgG (FoodDetective™, Food Print
                    200+), funkcjonalna diagnostyka Diacom 3D, indywidualne plany suplementacyjne.
                  </p>
                  <p>
                    <strong className="text-foreground">Filozofia pracy:</strong> [Tu kilka zdań
                    o podejściu — np. „indywidualne traktowanie każdego klienta, czas na rozmowę,
                    plan dopasowany do realiów życia, a nie szablon."]
                  </p>
                </div>

                <div className="rounded-3xl bg-card/60 border border-border/50 p-5 space-y-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Kwalifikacje i certyfikaty
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {QUALIFICATIONS.map((q) => (
                      <div key={q.label} className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <q.icon className="size-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold leading-tight">{q.label}</p>
                          <p className="text-[10px] text-muted-foreground">{q.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Values strip */}
          <Reveal delay={0.25} className="mt-12 grid md:grid-cols-3 gap-4">
            {VALUES.map((v) => (
              <motion.div
                key={v.title}
                whileHover={{ y: -3 }}
                className="rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 transition-colors hover:border-foreground/20"
              >
                <div className="size-10 rounded-2xl bg-gradient-to-br from-primary/15 to-[hsl(var(--neon))]/10 flex items-center justify-center mb-3">
                  <v.icon className="size-4 text-primary" />
                </div>
                <h3 className="font-display text-lg mb-1.5">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </Reveal>

          <Reveal delay={0.35}>
            <p className="text-[11px] text-center text-muted-foreground mt-10 max-w-2xl mx-auto italic">
              Sekcja zaprojektowana do uzupełnienia danymi rzeczywistymi — wstaw zdjęcie portretowe,
              imię i nazwisko, treść osobistego cytatu i opis ścieżki zawodowej.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
