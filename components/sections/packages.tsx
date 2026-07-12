"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Sparkles, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";
import { PACKAGES, type Package } from "@/lib/packages";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Parses price labels like:
 *   "249 zł"    → { amount: "249", suffix: "zł" }
 *   "od 849 zł" → { prefix: "od", amount: "849", suffix: "zł" }
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
    <section className="py-16 md:py-28 relative" id="pakiety">
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-4">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            01 · Pakiety
          </Badge>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-balance">
            Wybierz pakiet
            <br />
            <span className="italic font-normal text-muted-foreground">dopasowany do Ciebie</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty">
            Jasne ścieżki — od pierwszego badania krwi po pełną, kompleksową diagnostykę.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto items-start">
          {PACKAGES.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} index={i} />
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Button asChild variant="primary" size="lg">
            <a href={`tel:${SITE.contact.phone}`}>
              <Phone className="size-4" /> Zadzwoń: {SITE.contact.phoneDisplay}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/pakiety">
              Szczegóły i cennik
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

function PackageCard({ pkg, index }: { pkg: Package; index: number }) {
  const parsed = parsePriceLabel(pkg.metadata.priceLabel);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
            ? "border-primary/40 shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.4)] bg-gradient-to-b from-primary/[0.04] to-card lg:-translate-y-2"
            : "hover:border-foreground/20 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]"
        )}
      >
        <CardContent className="p-6 md:p-7 flex flex-col flex-1">
          <div className="mb-4">
            <h3 className="font-display text-2xl leading-tight mb-1">{pkg.name}</h3>
            <p className="text-sm text-muted-foreground italic">{pkg.tagline}</p>
          </div>

          <div className="flex items-baseline gap-1.5 flex-wrap">
            {parsed.prefix && (
              <span className="text-base text-muted-foreground font-medium">{parsed.prefix}</span>
            )}
            <span className="font-display text-4xl tracking-tight">{parsed.amount}</span>
            {parsed.suffix && (
              <span className="text-sm text-muted-foreground">{parsed.suffix}</span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1 mb-5">
            {pkg.metadata.priceNote ?? pkg.duration}
          </p>

          {/* Korzyści — bullet points */}
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-2.5">
            Co zyskujesz
          </p>
          <ul className="space-y-2 mb-6 flex-1">
            {pkg.outcomes.map((item, idx) => (
              <li key={idx} className="flex gap-2 text-sm">
                <Check className="size-4 text-success shrink-0 mt-0.5" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2">
            <Button asChild variant={pkg.featured ? "primary" : "outline"} className="w-full">
              <Link href={`/pakiety/${pkg.slug}`}>
                Zobacz szczegóły
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
