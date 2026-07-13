"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Heart,
  Microscope,
  Quote,
  Sparkles,
  Stethoscope,
  User,
} from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";

const QUALIFICATIONS = [
  { icon: Calendar, label: "Od 2016 roku", sub: "gabinet w Kaliszu" },
  { icon: Microscope, label: "Mikroskopia żywej kropli krwi", sub: "specjalizacja" },
  { icon: Stethoscope, label: "FoodDetective™", sub: "certyfikat" },
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
            06 · Poznaj właścicielkę
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Jedna osoba.
            <br />
            <span className="italic font-normal text-muted-foreground">Pełna uwaga.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Witalis to nie korporacja. To pracownia jednej specjalistki, która od 2016 roku
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
                  <Image
                    src="/wlascicielka.jpg"
                    alt="Właścicielka Witalis — specjalistka diagnostyki funkcjonalnej"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    quality={95}
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-display text-2xl text-background drop-shadow">
                      {SITE.owner.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-background/85 mt-1">
                      {SITE.owner.title} · Diagnostyka funkcjonalna
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
                    „Każda osoba przychodzi z inną historią, dlatego nie pracuję według jednego
                    schematu. Poświęcam czas na rozmowę, analizę i wyjaśnienie wyników prostym
                    językiem, tak aby klient wiedział, od czego realnie zacząć."
                  </p>
                  <p className="mt-4 pl-8 text-sm font-medium text-muted-foreground">
                    — {SITE.owner.name}, {SITE.owner.title}
                  </p>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Filozofia pracy:</strong> Stawiam na spokojną
                    rozmowę, indywidualne podejście i jasne wyjaśnienie wyników. Nie pracuję według
                    gotowego schematu — każda konsultacja jest dopasowana do stylu życia, objawów,
                    historii zdrowotnej i realnych możliwości klienta.
                  </p>
                  <p>
                    <strong className="text-foreground">Specjalizacja:</strong> Mikroskopia żywej
                    kropli krwi, testy nietolerancji pokarmowych IgG (FoodDetective™) oraz
                    indywidualne plany suplementacyjne i dietetyczne.
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
          <Reveal delay={0.25} className="mt-12 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}
