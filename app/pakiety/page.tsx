import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, Sparkles, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/effects/reveal";
import { PACKAGES } from "@/lib/packages";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Pakiety diagnostyczne — Witalis Kalisz",
  description:
    "Pakiety diagnostyki funkcjonalnej: Start (żywa kropla krwi), Gut Health (nietolerancje pokarmowe), Witaminy & Minerały (analiza niedoborów) i Full Body Premium (pełna diagnostyka).",
  path: "/pakiety",
});

export default function PakietyPage() {
  return (
    <div>
      <section className="container py-14 md:py-24">
        <Reveal className="max-w-3xl space-y-5 mb-12">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            Pakiety
          </Badge>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.03] tracking-tight">
            Nasze pakiety.
            <br />
            <span className="italic font-normal text-muted-foreground">Zero zgadywania.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Każdy pakiet to konkretna kombinacja badań, konsultacji i planu działania. Ceny brutto.
            Nie wiesz, który wybrać? Zadzwoń — pomożemy bez zobowiązań.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild variant="primary" size="lg">
              <a href={`tel:${SITE.contact.phone}`}>
                <Phone className="size-4" /> Zadzwoń: {SITE.contact.phoneDisplay}
              </a>
            </Button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {PACKAGES.map((p) => (
            <Card
              key={p.slug}
              className={cn(
                "relative flex flex-col hover:-translate-y-1 transition-transform",
                p.featured && "border-primary/40 shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.3)]"
              )}
            >
              {p.badge && (
                <Badge variant="accent" className="absolute -top-2.5 left-6">
                  <Sparkles className="size-3" /> {p.badge}
                </Badge>
              )}
              <CardContent className="p-7 flex-1 flex flex-col">
                <div className="mb-4">
                  <h2 className="font-display text-2xl">{p.name}</h2>
                  <p className="text-sm text-muted-foreground italic mt-1">{p.tagline}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl">{p.metadata.priceLabel}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 mb-4">
                  {p.metadata.priceNote ?? p.duration}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {p.description}
                </p>

                <div className="mb-5">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">
                    W pakiecie:
                  </p>
                  <ul className="space-y-1.5">
                    {p.includes.map((item, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <Check className="size-4 text-success shrink-0 mt-0.5" />
                        <span className="text-foreground/85">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-border/50 grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/pakiety/${p.slug}`}>Szczegóły</Link>
                  </Button>
                  <Button asChild variant="primary" size="sm">
                    <Link href={`/umow-konsultacje?pakiet=${p.slug}`}>
                      Wybierz <ArrowRight className="size-3.5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
