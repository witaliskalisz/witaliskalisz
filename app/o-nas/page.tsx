import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";
import { WhyUs } from "@/components/sections/why-us";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "O nas — Witalis Kalisz",
  description:
    "Witalis to prywatna pracownia diagnostyki funkcjonalnej w Kaliszu, prowadzona osobiście przez właścicielkę od 2016 roku. Spokojna rozmowa, indywidualne podejście, jasne wyjaśnienie wyników.",
  path: "/o-nas",
});

export default function ONasPage() {
  return (
    <div>
      <section className="container py-14 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="space-y-5 order-2 lg:order-1">
            <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
              O nas
            </Badge>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.03] tracking-tight">
              Jedna specjalistka.
              <br />
              <span className="italic font-normal text-muted-foreground">Pełna uwaga.</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Witalis to prywatna pracownia diagnostyki funkcjonalnej w Kaliszu, prowadzona osobiście
              przez właścicielkę od 2016 roku. Stawiamy na spokojną rozmowę, indywidualne podejście i
              jasne wyjaśnienie wyników — bez pośpiechu i bez gotowych schematów.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button asChild variant="primary" size="lg">
                <a href={`tel:${SITE.contact.phone}`}>
                  <Phone className="size-4" /> Zadzwoń: {SITE.contact.phoneDisplay}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pakiety">
                  Zobacz pakiety
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 via-card to-[hsl(var(--neon))]/10 border border-border/50 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
              <Image
                src="/wlascicielka-2.jpg"
                alt="Właścicielka Witalis"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={95}
                className="object-cover object-center"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <WhyUs />
    </div>
  );
}
