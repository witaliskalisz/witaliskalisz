"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/testimonials";
import { SITE } from "@/lib/site";

const GOOGLE_REVIEWS_URL = `https://www.google.com/maps/search/${encodeURIComponent(
  "Witalis " + SITE.address.fullLine
)}`;

export function Testimonials() {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden" id="opinie">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-3xl" />
      </div>
      <div className="container">
        <Reveal className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-4">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
            05 · Opinie z Google
          </Badge>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight text-balance">
            Co mówią
            <span className="italic font-normal text-muted-foreground"> nasi klienci</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>
              <strong className="text-foreground">4,9</strong> · opinie w Google
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star key={s} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <GoogleGlyph />
                  </div>
                  <Quote className="size-6 text-primary/30 mb-2" />
                  <p className="text-sm leading-relaxed text-foreground/85 flex-1">{t.quote}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-sm font-semibold">{t.name}</p>
                    {t.demo && (
                      <Badge variant="glass" className="text-[9px]">
                        DEMO
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Zobacz wszystkie opinie w Google
              <ExternalLink className="size-4" />
            </a>
          </Button>
          <p className="text-[11px] text-muted-foreground mt-6 max-w-xl mx-auto">
            Opinie oznaczone „DEMO" to placeholdery — przed publikacją zostaną zastąpione realnymi
            opiniami klientów z profilu Google.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function GoogleGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-label="Google" role="img">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.87Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.26v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.26a12 12 0 0 0 0 10.74l4.01-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44A11.95 11.95 0 0 0 12 0 12 12 0 0 0 1.26 6.63l4.01 3.09C6.22 6.86 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}
