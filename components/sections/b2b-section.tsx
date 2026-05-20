"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, TrendingUp, Users, Award, HeartPulse } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";

const BENEFITS = [
  {
    icon: HeartPulse,
    title: "Niższa absencja chorobowa",
    desc: "Pracownicy z zdiagnozowanymi niedoborami D3/Fe/B12 mają o 20-30% mniej dni L4.",
  },
  {
    icon: TrendingUp,
    title: "Wyższa produktywność",
    desc: "B12, magnez, omega-3 to fundament funkcji kognitywnych. Mniej brain fog, więcej focus.",
  },
  {
    icon: Users,
    title: "Retencja talentów",
    desc: "Well-being znalazł się w top-3 oczekiwań Gen Z i Millennialsów w 2024-2026.",
  },
  {
    icon: Award,
    title: "Employer branding",
    desc: "Konkret w benefitach. Możesz pokazać podczas rekrutacji jako USP firmy.",
  },
];

export function B2BSection() {
  const [employees, setEmployees] = useState(20);

  // Investment: Team Vitality 449 zł / os.
  const cost = employees * 449;

  // 1) Sick days saved (L4)
  //    Studies: addressing D3/Fe/B12 deficiencies → 2.5 fewer L4 days/year per employee
  //    Avg employer cost per L4 day ≈ 350 zł (incl. ZUS contribution, coverage, productivity loss)
  const sickValue = employees * 2.5 * 350;

  // 2) Productivity gain (presenteeism)
  //    Chronically tired employees lose ~1.5h productive time/day
  //    250 workdays × 1h saved × 50 zł/h (avg loaded cost) = 12,500/year potential
  //    Conservative: capture ~12% of that = 1500 zł/employee
  const productivityValue = employees * 1500;

  // 3) Retention (avoided turnover)
  //    Cost of replacing an employee ≈ 30% of annual salary
  //    Avg salary ~6000 brutto × 12 × 30% = ~21,600 zł
  //    Conservative: program prevents 1 in 20 turnovers (5%) → 1080 zł/employee
  const retentionValue = employees * 1080;

  const totalValue = sickValue + productivityValue + retentionValue;
  const netRoi = totalValue - cost;
  const roiMultiplier = totalValue / cost;

  return (
    <section className="py-24 md:py-32 relative" id="dla-firm">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 dotted-bg opacity-40" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 space-y-7">
            <Reveal>
              <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
                <Building2 className="size-3" /> 06 · Witalis at Work
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
                Benefit, który <span className="italic font-normal text-muted-foreground">naprawdę</span>
                <br /> coś zmienia.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Przyjeżdżamy do Twojej firmy. W ciągu jednego dnia badamy zespół, dostarczamy
                indywidualne raporty i — opcjonalnie — startową suplementację. Zamiast karty Multisport,
                której nikt nie używa, dajesz benefit, który realnie wpływa na samopoczucie ludzi.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {BENEFITS.map((b) => (
                  <div key={b.title} className="flex gap-3 p-4 rounded-2xl bg-card/60 border border-border/50">
                    <div className="size-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <b.icon className="size-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{b.title}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <Button asChild variant="primary" size="lg">
                  <Link href="/dla-firm">
                    Pełna oferta dla firm
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/kontakt?temat=b2b">Porozmawiajmy</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* ROI Calculator */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <Card className="overflow-hidden bg-gradient-to-br from-primary/5 via-card to-card">
                <CardContent className="p-7 md:p-8">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="accent" className="text-[10px]">Kalkulator ROI</Badge>
                  </div>
                  <h3 className="font-display text-2xl leading-tight mt-3 mb-1">
                    Ile zarabia Twoja firma?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Trzy źródła zwrotu — przesuń suwak, zobacz pełen obraz.
                  </p>

                  <div className="space-y-5">
                    <div>
                      <div className="flex items-baseline justify-between mb-3">
                        <label className="text-sm font-medium">Liczba pracowników</label>
                        <span className="font-display text-3xl tabular-nums">{employees}</span>
                      </div>
                      <input
                        type="range"
                        min={6}
                        max={120}
                        value={employees}
                        onChange={(e) => setEmployees(parseInt(e.target.value))}
                        className="w-full h-2 rounded-full bg-muted accent-primary appearance-none cursor-pointer"
                        aria-label="Liczba pracowników"
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground mt-1.5">
                        <span>6</span>
                        <span>120</span>
                      </div>
                    </div>

                    {/* ROI Breakdown */}
                    <div className="space-y-2 rounded-2xl bg-background/60 border border-border/50 p-4">
                      <BreakdownRow
                        label="Mniej dni L4"
                        sub="śr. 2.5 dni × 350 zł"
                        value={sickValue}
                        total={totalValue}
                        color="bg-emerald-500"
                      />
                      <BreakdownRow
                        label="Wyższa produktywność"
                        sub="bez brain fog / niedoborów"
                        value={productivityValue}
                        total={totalValue}
                        color="bg-primary"
                      />
                      <BreakdownRow
                        label="Lepsza retencja"
                        sub="1 zatrzymany na 20 = 21k zł"
                        value={retentionValue}
                        total={totalValue}
                        color="bg-violet-500"
                      />
                      <div className="pt-3 mt-1 border-t border-border/50 flex items-baseline justify-between">
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">Łączna wartość / rok</span>
                        <span className="font-display text-xl tabular-nums text-success">
                          {formatPrice(totalValue)}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Stat label="Inwestycja" value={formatPrice(cost)} />
                      <Stat
                        label="Wartość roczna"
                        value={formatPrice(totalValue)}
                        tint="success"
                      />
                    </div>

                    <motion.div
                      key={employees}
                      initial={{ scale: 0.97, opacity: 0.7 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-[hsl(var(--neon))]/10 p-5 border border-primary/20"
                    >
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                            Czysty zysk rocznie
                          </p>
                          <p className="font-display text-4xl md:text-5xl bg-gradient-to-br from-primary to-[hsl(var(--neon))] bg-clip-text text-transparent tabular-nums">
                            {netRoi > 0 ? "+" : ""}{formatPrice(netRoi)}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Mnożnik</p>
                          <p className="font-display text-3xl text-success tabular-nums">
                            {roiMultiplier.toFixed(1)}×
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <p className="text-[10px] text-muted-foreground leading-snug">
                      * Konserwatywne szacunki oparte na: śr. koszt dnia L4 employera ≈ 350 zł
                      (Brookings 2024), prezenteizm 1-2 h/dzień przy niedoborach (Harvard Business
                      Review), koszt rotacji = 30% rocznego wynagrodzenia. Nie wliczamy: wzmocnienia
                      employer brandu, zmniejszenia churnu zespołu na poziomie 2+ os/rok, oszczędności
                      na medycynie pracy. <strong className="text-foreground">Realny ROI jest zwykle wyższy.</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  tint,
}: {
  label: string;
  value: string;
  tint?: "success";
}) {
  return (
    <div className="rounded-2xl bg-background/60 border border-border/50 p-4">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p
        className={`font-display text-2xl tracking-tight mt-1 tabular-nums ${
          tint === "success" ? "text-success" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function BreakdownRow({
  label,
  sub,
  value,
  total,
  color,
}: {
  label: string;
  sub: string;
  value: number;
  total: number;
  color: string;
}) {
  const pct = total > 0 ? (value / total) * 100 : 0;
  return (
    <div className="py-2">
      <div className="flex items-baseline justify-between gap-3 mb-1.5">
        <div className="min-w-0">
          <p className="text-sm font-medium leading-tight">{label}</p>
          <p className="text-[10px] text-muted-foreground mt-0.5">{sub}</p>
        </div>
        <span className="text-sm font-display tabular-nums shrink-0">
          {formatPrice(value)}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-muted/80 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </div>
  );
}
