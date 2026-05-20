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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { BrandMark } from "@/components/layout/logo";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 min-h-[88dvh] flex items-center">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-[0.35] dark:opacity-[0.18]" />
        <div className="absolute inset-x-0 top-0 h-[700px] bg-gradient-to-b from-primary/[0.06] via-transparent to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1100px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-gradient-radial from-[hsl(var(--neon))]/15 via-[hsl(var(--neon))]/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-gradient-radial from-violet-500/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Massive brand block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <div className="flex items-center gap-4 md:gap-5">
              <span className="relative inline-flex items-center justify-center size-[64px] md:size-[80px] rounded-3xl bg-gradient-to-br from-primary to-[hsl(var(--neon))] shadow-[0_16px_50px_-12px_hsl(var(--primary)/0.55)]">
                <BrandMark className="size-9 md:size-12 text-primary-foreground" />
                <span className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary to-[hsl(var(--neon))] opacity-30 blur-xl -z-10" />
              </span>
              <span className="font-display text-[clamp(3.5rem,9vw,7rem)] leading-none tracking-[-0.04em] font-semibold">
                Witalis
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-border" />
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.32em] text-muted-foreground">
                Prywatna diagnostyka · Kalisz · od 2018
              </span>
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-border" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10"
          >
            <Badge variant="glass" className="text-[11px] uppercase tracking-[0.18em] py-1.5">
              <Sparkles className="size-3 text-primary" />
              Witalis 2026 · Diagnostyka jutra, dziś
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[0.95] tracking-[-0.025em] text-balance"
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
            Premium diagnostyka krwi, nietolerancji pokarmowych i niedoborów — taka, jakiej używają
            zawodnicy{" "}
            <strong className="text-foreground font-medium">
              FC Barcelony, Realu Madryt i klubów Bundesligi
            </strong>
            . Tutaj, w Kaliszu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <MagneticButton>
              <Button asChild variant="primary" size="xl">
                <Link href="/umow-konsultacje">
                  Umów konsultację
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </MagneticButton>
            <Button asChild variant="outline" size="xl">
              <Link href="/pakiety">Sprawdź pakiety</Link>
            </Button>
          </motion.div>

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
                <strong className="text-foreground">4.9</strong> · Klienci od 2018
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="size-4" />
              <span>
                <strong className="text-foreground">
                  {SITE.clientsServed.toLocaleString("pl-PL")}+
                </strong>{" "}
                klientów
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ShieldCheck className="size-4 text-success" />
              <span>RODO compliant</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Microscope className="size-4 text-primary" />
              <span>FoodDetective™ · Diacom 3D</span>
            </div>
          </motion.div>

          {/* Premium stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 md:mt-24 w-full max-w-4xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: Microscope, label: "Powiększenie", value: "1600×", sub: "mikroskop" },
                { icon: FlaskConical, label: "Alergeny", value: "222", sub: "Food Print 200+" },
                { icon: Activity, label: "Trafność", value: "95%", sub: "Diacom 3D" },
                { icon: ShieldCheck, label: "Wyniki", value: "40 min", sub: "FoodDetective" },
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
