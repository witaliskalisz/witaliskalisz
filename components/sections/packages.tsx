"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Building2, Trophy, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";
import { PACKAGES, CATEGORY_LABELS, type PackageCategory, type Package } from "@/lib/packages";
import { cn } from "@/lib/utils";

const CATEGORY_ICONS: Record<PackageCategory, React.ElementType> = {
  individual: User,
  business: Building2,
  sport: Trophy,
};

/**
 * Parses price labels like:
 *   "249 zł"           → { amount: "249", suffix: "zł" }
 *   "1 499 zł"         → { amount: "1 499", suffix: "zł" }
 *   "od 199 zł / os."  → { prefix: "od", amount: "199", suffix: "zł / os." }
 *   "od 1 299 zł / os." → { prefix: "od", amount: "1 299", suffix: "zł / os." }
 *   "Wycena indywidualna" → { amount: "Wycena indywidualna" }
 */
export function parsePriceLabel(label: string) {
  const match = label.match(/^(od\s+)?([\d\s]+?)(\s*zł.*)?$/);
  if (match && match[2] && /\d/.test(match[2])) {
    return {
      prefix: match[1]?.trim() ?? null,
      amount: match[2].trim(),
      suffix: match[3]?.trim() ?? null,
    };
  }
  return { prefix: null, amount: label, suffix: null };
}

export function Packages() {
  return (
    <section className="py-24 md:py-32 relative" id="pakiety">
      <div className="container">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 space-y-5">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            03 · Pakiety diagnostyczne
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            Wybierz, co
            <br />
            <span className="italic font-normal text-muted-foreground">jest dla Ciebie</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            14 starannie zaprojektowanych pakietów — od pierwszego rzutu oka po VIP-owski
            program długowieczności. Plus pakiety dla firm i sportowców.
          </p>
        </Reveal>

        <Tabs defaultValue="individual" className="w-full">
          <Reveal delay={0.1} className="flex justify-center mb-10">
            <TabsList>
              {(Object.keys(CATEGORY_LABELS) as PackageCategory[]).map((cat) => {
                const Icon = CATEGORY_ICONS[cat];
                return (
                  <TabsTrigger key={cat} value={cat} className="gap-2">
                    <Icon className="size-4" />
                    <span>{CATEGORY_LABELS[cat].label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Reveal>

          {(Object.keys(CATEGORY_LABELS) as PackageCategory[]).map((cat) => (
            <TabsContent key={cat} value={cat}>
              <p className="text-center text-sm text-muted-foreground mb-8 italic">
                {CATEGORY_LABELS[cat].sub}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {PACKAGES.filter((p) => p.category === cat).map((pkg, i) => (
                  <PackageCard key={pkg.slug} pkg={pkg} index={i} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/pakiety">
              Pełne porównanie pakietów
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="relative"
    >
      {pkg.featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <Badge variant="accent" className="shadow-lg">
            <Sparkles className="size-3" /> {pkg.badge ?? "Najpopularniejszy"}
          </Badge>
        </div>
      )}
      <Card
        className={cn(
          "relative h-full overflow-hidden transition-all flex flex-col",
          pkg.featured
            ? "border-primary/40 shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.4)] bg-gradient-to-b from-primary/[0.04] to-card"
            : "hover:border-foreground/20 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]"
        )}
      >
        {pkg.badge && !pkg.featured && (
          <Badge variant="glass" className="absolute top-4 right-4">
            {pkg.badge}
          </Badge>
        )}
        <CardContent className="p-7 flex flex-col flex-1">
          <div className="mb-4">
            <h3 className="font-display text-2xl leading-tight mb-1.5">{pkg.name}</h3>
            <p className="text-sm text-muted-foreground italic">{pkg.tagline}</p>
          </div>

          <div className="flex items-baseline gap-1.5 mb-1 flex-wrap">
            {(() => {
              const parsed = parsePriceLabel(pkg.metadata.priceLabel);
              return (
                <>
                  {parsed.prefix && (
                    <span className="text-base text-muted-foreground font-medium">
                      {parsed.prefix}
                    </span>
                  )}
                  <span className="font-display text-4xl tracking-tight">{parsed.amount}</span>
                  {parsed.suffix && (
                    <span className="text-sm text-muted-foreground">{parsed.suffix}</span>
                  )}
                </>
              );
            })()}
          </div>
          {pkg.minPersons && (
            <p className="text-xs text-muted-foreground mb-3">
              min. {pkg.minPersons} osób · {pkg.duration}
            </p>
          )}
          {!pkg.minPersons && <p className="text-xs text-muted-foreground mb-3">{pkg.duration}</p>}

          <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
            {pkg.description}
          </p>

          <ul className="space-y-2 mb-7 flex-1">
            {pkg.includes.slice(0, 4).map((item, idx) => (
              <li key={idx} className="flex gap-2 text-sm">
                <Check className="size-4 text-success shrink-0 mt-0.5" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
            {pkg.includes.length > 4 && (
              <li className="text-xs text-muted-foreground pl-6">
                + {pkg.includes.length - 4} kolejne pozycje
              </li>
            )}
          </ul>

          <Button asChild variant={pkg.featured ? "primary" : "outline"} className="w-full">
            <Link href={`/pakiety/${pkg.slug}`}>
              {pkg.price === null ? "Zapytaj o ofertę" : "Zobacz szczegóły"}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
