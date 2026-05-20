"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { SITE } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-zinc-900 to-foreground" />
        <div className="absolute inset-0 grid-bg opacity-[0.06]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[800px] rounded-full bg-gradient-radial from-primary/30 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 size-[600px] rounded-full bg-gradient-radial from-[hsl(var(--neon))]/25 to-transparent blur-3xl" />
      </div>

      <div className="container relative">
        <Reveal className="max-w-4xl mx-auto text-center space-y-8">
          <Badge
            variant="glass"
            className="text-[11px] uppercase tracking-[0.18em] py-1.5 border-white/15 bg-white/5 text-background"
          >
            Czas zacząć
          </Badge>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-background text-balance">
            Zacznij rozumieć
            <br />
            <span className="italic font-normal text-background/50">swoje ciało.</span>
          </h2>

          <p className="text-lg md:text-xl text-background/70 max-w-2xl mx-auto leading-relaxed text-pretty">
            Pierwszy krok kosztuje 249 zł i zajmie godzinę.
            Drugi krok — to reszta życia z energią, której teraz nie masz.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <MagneticButton>
              <Button asChild variant="primary" size="xl" className="min-w-[220px]">
                <Link href="/umow-konsultacje">
                  Umów konsultację
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </MagneticButton>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 text-background"
            >
              <a href={`tel:${SITE.contact.phone}`}>
                <Phone className="size-4" />
                {SITE.contact.phoneDisplay}
              </a>
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-background/50">
            <span>📍 ul. Babina 6, Kalisz</span>
            <span className="hidden sm:inline">·</span>
            <span>📞 Rejestracja pon-pt 16:00-20:00</span>
            <span className="hidden sm:inline">·</span>
            <span>🔒 RODO compliant</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
