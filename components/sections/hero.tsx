"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Star,
  ShieldCheck,
  Users,
  Microscope,
  ArrowRight,
  Activity,
  FlaskConical,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrandMark } from "@/components/layout/logo";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-24 md:pb-28 md:min-h-[88dvh] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-[0.3] dark:opacity-[0.16]" />
        <div className="absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b from-primary/[0.07] via-transparent to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-radial from-primary/15 via-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Duże, wyśrodkowane logo marki */}
          <motion.div
            id="hero-brand"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4 md:gap-5"
          >
            <div className="flex items-center gap-3 md:gap-5">
              <span className="relative inline-flex size-[56px] sm:size-[64px] md:size-[80px]">
                <BrandMark className="size-full" />
              </span>
              <span className="font-logo text-[clamp(3rem,9vw,7rem)] leading-none tracking-[-0.03em] font-semibold">
                Witalis
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:block h-px w-10 bg-gradient-to-r from-transparent to-border" />
              <span className="text-[9px] sm:text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] sm:tracking-[0.32em] text-muted-foreground text-center">
                Mikroskopia żywej kropli krwi · Kalisz · od 2016
              </span>
              <span className="hidden sm:block h-px w-10 bg-gradient-to-l from-transparent to-border" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8"
          >
            <Badge variant="glass" className="text-[11px] uppercase tracking-[0.18em] py-1.5">
              <Sparkles className="size-3 text-primary" />
              Diagnostyka jutra, dziś
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.025em] text-balance"
          >
            Zobacz, czego{" "}
            <span className="italic font-normal text-muted-foreground">naprawdę</span>
            <br />
            potrzebuje{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-br from-primary to-[hsl(var(--neon))] bg-clip-text text-transparent">
                Twoje ciało.
              </span>
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 w-full h-3 text-primary/50"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  d="M2 8 Q 100 -2, 198 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.9, duration: 1.2, ease: "easeOut" }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty"
          >
            Funkcjonalna diagnostyka prewencyjna —{" "}
            <strong className="text-foreground font-medium">
              mikroskopowe badanie żywej kropli krwi, testy na nietolerancje pokarmowe, analiza
              niedoborów witamin i minerałów analizatorem zdrowia Quantum, biorezonans HEALTH
              DIAGNOSTIC SCANNER 3D
            </strong>
            . Metody komplementarne, indywidualne podejście, pełna uwaga. W Kaliszu od 2016 roku.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto"
          >
            <MagneticButton>
              <Button asChild variant="primary" size="xl" className="w-full sm:w-auto">
                <a href={`tel:${SITE.contact.phone}`}>
                  <Phone className="size-4" />
                  Zadzwoń: {SITE.contact.phoneDisplay}
                </a>
              </Button>
            </MagneticButton>
            <Button asChild variant="outline" size="xl" className="w-full sm:w-auto">
              <Link href="/kontakt">
                Napisz do nas
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
          <p className="mt-3 text-xs text-muted-foreground">
            Rejestracja telefoniczna: {SITE.contact.hoursRegistration}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-muted-foreground">
                <strong className="text-foreground">5.0</strong> · Klienci od 2016
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="size-4" />
              <span>
                <strong className="text-foreground">Setki</strong> zadowolonych klientów
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="size-4 text-success" />
              <span>RODO compliant</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Microscope className="size-4 text-primary" />
              <span>FoodDetective™ · Żywa kropla krwi</span>
            </div>
          </motion.div>

          {/* Premium stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 md:mt-24 w-full max-w-4xl"
          >
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: Microscope, label: "Powiększenie", value: "1600×", sub: "mikroskop cyfrowy" },
                { icon: FlaskConical, label: "Produkty", value: "59", sub: "FoodDetective™" },
                { icon: Activity, label: "Doświadczenie", value: "od 2016", sub: "gabinet w Kaliszu" },
                { icon: ShieldCheck, label: "Wyniki", value: "40 min", sub: "FoodDetective™" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group glass rounded-2xl p-4 md:p-5 text-left transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="size-9 rounded-xl bg-gradient-to-br from-primary/15 to-[hsl(var(--neon))]/10 flex items-center justify-center">
                      <stat.icon className="size-4 text-primary" />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                  <div className="font-display text-3xl md:text-4xl tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
