"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/lib/testimonials";
import { getPackageBySlug } from "@/lib/packages";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = TESTIMONIALS[active];
  const pkg = getPackageBySlug(t.packageSlug);

  function next() {
    setActive((a) => (a + 1) % TESTIMONIALS.length);
  }
  function prev() {
    setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="opinie">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
      </div>
      <div className="container">
        <Reveal className="text-center max-w-3xl mx-auto mb-12 space-y-5">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            08 · Co mówią klienci
          </Badge>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            <span className="italic font-normal text-muted-foreground">Historie ludzi,</span>
            <br />którzy nie odpuścili
          </h2>
        </Reveal>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-12 gap-10 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <Quote className="size-12 text-primary/40" />
                  <p className="font-display text-2xl md:text-3xl leading-snug text-balance">
                    „{t.quote}"
                  </p>
                  {t.result && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-4 py-2 text-sm font-medium text-success">
                      <span className="size-1.5 rounded-full bg-success" /> {t.result}
                    </div>
                  )}
                  <div className="pt-2">
                    <p className="font-semibold">{t.name}, {t.age}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      <span>{t.city}</span>
                      {pkg && (
                        <>
                          <span className="text-border">·</span>
                          <span>Pakiet: {pkg.name}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-card to-[hsl(var(--neon))]/15 border border-border/50">
                    <Avatar id={t.id} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                      <div className="flex gap-0.5">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      {t.demo && (
                        <Badge variant="glass" className="text-[9px] backdrop-blur-md">
                          DEMO
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Opinia ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-foreground/30"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prev} aria-label="Poprzednia opinia">
                <ArrowLeft className="size-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={next} aria-label="Następna opinia">
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        <Reveal delay={0.2}>
          <p className="text-[11px] text-center text-muted-foreground mt-10 max-w-2xl mx-auto">
            Opinie oznaczone „DEMO" to placeholdery — przed publikacją zostaną zastąpione
            prawdziwymi historiami klientów, po uzyskaniu pełnej zgody marketingowej zgodnie z RODO.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Avatar({ id }: { id: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg viewBox="0 0 200 200" className="size-full" aria-hidden>
        <defs>
          <linearGradient id={`av-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="1" stopColor="hsl(var(--neon))" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="78" r="40" fill={`url(#av-${id})`} />
        <path
          d="M 30 200 Q 30 130 100 130 Q 170 130 170 200 Z"
          fill={`url(#av-${id})`}
        />
        <circle cx="100" cy="100" r="100" fill="white" opacity="0.1" />
      </svg>
    </div>
  );
}
