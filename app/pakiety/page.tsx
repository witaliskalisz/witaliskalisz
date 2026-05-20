import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/effects/reveal";
import { PACKAGES, CATEGORY_LABELS, type PackageCategory } from "@/lib/packages";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Pakiety diagnostyczne — Witalis Kalisz",
  description:
    "14 starannie zaprojektowanych pakietów diagnostycznych: indywidualne, dla firm, dla sportowców. Od żywej kropli krwi po VIP Longevity 6-miesięczny.",
  path: "/pakiety",
});

const CAT_ORDER: PackageCategory[] = ["individual", "business", "sport"];

export default function PakietyPage() {
  return (
    <div>
      <section className="container py-16 md:py-24">
        <Reveal className="max-w-3xl space-y-5 mb-12">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            Pakiety
          </Badge>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Pełny <span className="italic font-normal text-muted-foreground">cennik</span>
            <br />i porównanie pakietów
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            14 wariantów dla trzech grup klientów. Każdy pakiet to konkretna kombinacja badań,
            konsultacji i planu działania. Ceny brutto.
          </p>
        </Reveal>

        {CAT_ORDER.map((cat) => (
          <div key={cat} id={cat === "individual" ? "indywidualne" : cat === "business" ? "dla-firm" : "sport"} className="mb-20 last:mb-0 scroll-mt-24">
            <Reveal className="mb-8 flex items-end justify-between gap-4 flex-wrap">
              <div>
                <h2 className="font-display text-3xl md:text-4xl tracking-tight">{CATEGORY_LABELS[cat].label}</h2>
                <p className="text-sm text-muted-foreground italic mt-1">{CATEGORY_LABELS[cat].sub}</p>
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {PACKAGES.filter((p) => p.category === cat).length} pakietów
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {PACKAGES.filter((p) => p.category === cat).map((p) => (
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
                      <h3 className="font-display text-2xl">{p.name}</h3>
                      <p className="text-sm text-muted-foreground italic mt-1">{p.tagline}</p>
                    </div>

                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-display text-4xl">
                        {p.metadata.priceLabel}
                      </span>
                    </div>
                    {p.minPersons && (
                      <p className="text-xs text-muted-foreground mb-3">
                        min. {p.minPersons} osób · {p.duration}
                      </p>
                    )}
                    {!p.minPersons && <p className="text-xs text-muted-foreground mb-3">{p.duration}</p>}

                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {p.description}
                    </p>

                    <div className="mb-5">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">W pakiecie:</p>
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
          </div>
        ))}
      </section>
    </div>
  );
}
