import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, Clock, Phone, Sparkles, Target, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/effects/reveal";
import { PACKAGES, getPackageBySlug } from "@/lib/packages";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return PACKAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return buildMetadata({ title: "Pakiet nieznaleziony" });
  return buildMetadata({
    title: `${pkg.name} — ${pkg.metadata.priceLabel}`,
    description: pkg.tagline + " " + pkg.description.slice(0, 150),
    path: `/pakiety/${slug}`,
  });
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const related = PACKAGES.filter((p) => p.category === pkg.category && p.slug !== pkg.slug).slice(0, 3);

  return (
    <div className="pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Strona główna", href: "/" },
              { name: "Pakiety", href: "/pakiety" },
              { name: pkg.name, href: `/pakiety/${slug}` },
            ])
          ),
        }}
      />

      <div className="container py-12 md:py-20">
        <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3">
          <Link href="/pakiety">
            <ArrowLeft className="size-4" /> Wszystkie pakiety
          </Link>
        </Button>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-10">
            <Reveal className="space-y-5">
              {pkg.badge && <Badge variant="accent"><Sparkles className="size-3" /> {pkg.badge}</Badge>}
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance">
                {pkg.name}
              </h1>
              <p className="text-xl text-muted-foreground italic max-w-2xl">{pkg.tagline}</p>
              <div className="flex items-baseline gap-3 pt-2">
                <span className="font-display text-5xl">{pkg.metadata.priceLabel}</span>
                <span className="text-muted-foreground">· {pkg.duration}</span>
              </div>
              {pkg.metadata.priceNote && (
                <p className="text-sm text-muted-foreground">{pkg.metadata.priceNote}</p>
              )}
            </Reveal>

            <Reveal delay={0.1} className="space-y-4">
              <p className="text-lg leading-relaxed text-pretty">{pkg.description}</p>
              <Link
                href="/badanie-zywej-kropli-krwi"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                Jak wygląda badanie żywej kropli krwi?
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.15}>
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-display text-2xl mb-5 flex items-center gap-2">
                    <Check className="size-5 text-success" /> Co dostajesz
                  </h2>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <div className="size-6 rounded-lg bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="size-3.5 text-success" />
                        </div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-5">
              <Reveal delay={0.2}>
                <Card>
                  <CardContent className="p-7">
                    <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                      <Users className="size-5 text-primary" /> Dla kogo
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {pkg.forWhom.map((item, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
              <Reveal delay={0.25}>
                <Card>
                  <CardContent className="p-7">
                    <h3 className="font-display text-xl mb-4 flex items-center gap-2">
                      <Target className="size-5 text-primary" /> Co osiągniesz
                    </h3>
                    <ul className="space-y-2 text-sm">
                      {pkg.outcomes.map((item, i) => (
                        <li key={i} className="flex gap-2 text-muted-foreground">
                          <span className="text-primary">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            </div>

            {related.length > 0 && (
              <Reveal delay={0.3} className="pt-8 border-t border-border/50">
                <h2 className="font-display text-2xl mb-6">Pozostałe pakiety</h2>
                <div className="grid sm:grid-cols-3 gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/pakiety/${r.slug}`}
                      className="group block p-4 rounded-2xl border border-border bg-card/60 hover:border-foreground/30 transition-colors"
                    >
                      <div className="text-xs text-muted-foreground">{r.metadata.priceLabel}</div>
                      <div className="font-display text-lg mt-1 group-hover:text-primary transition-colors">{r.name}</div>
                    </Link>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* Sticky sidebar CTA — kontakt telefoniczny */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal delay={0.2}>
                <Card className="bg-gradient-to-br from-primary/5 via-card to-card">
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-2">
                      <Badge variant="success" className="text-[10px]">
                        <Clock className="size-3" /> {SITE.contact.hoursRegistration}
                      </Badge>
                      <h3 className="font-display text-2xl">Zapytaj o ten pakiet</h3>
                      <p className="text-sm text-muted-foreground">
                        Wizyty umawiamy telefonicznie — zadzwoń, a dobierzemy termin i odpowiemy na
                        wszystkie pytania. Wolisz napisać? Odezwij się mailowo lub w DM.
                      </p>
                    </div>
                    <a
                      href={`tel:${SITE.contact.phone}`}
                      className="block text-center font-display text-3xl tracking-tight hover:text-primary transition-colors"
                    >
                      {SITE.contact.phoneDisplay}
                    </a>
                    <Button asChild variant="primary" size="lg" className="w-full">
                      <a href={`tel:${SITE.contact.phone}`}>
                        <Phone className="size-4" /> Zadzwoń teraz
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="w-full">
                      <Link href="/kontakt">
                        E-mail / Facebook / Instagram
                        <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
