"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ARTICLES } from "@/lib/articles";

export function BlogPreview() {
  const articles = ARTICLES.slice(0, 3);

  return (
    <section className="py-24 md:py-32 relative" id="blog">
      <div className="container">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-5 max-w-2xl">
            <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
              10 · Wiedza
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
              Edukacja, której
              <br />
              <span className="italic font-normal text-muted-foreground">nie dostaniesz</span> w gabinecie.
            </h2>
          </div>
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              Wszystkie artykuły
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <motion.article
              key={a.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Link
                href={`/blog/${a.slug}`}
                className="block h-full rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden transition-all hover:border-foreground/20 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/20 via-card to-[hsl(var(--neon))]/10 flex items-center justify-center">
                  <span className="text-7xl filter drop-shadow-lg">{a.heroEmoji}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-card/50 via-transparent to-transparent" />
                </div>
                <div className="p-6 md:p-7 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <Badge variant="accent" className="text-[10px]">{a.category}</Badge>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="size-3" />
                      {a.readingTimeMin} min czytania
                    </span>
                  </div>
                  <h3 className="font-display text-xl leading-tight group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center gap-2 pt-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Czytaj artykuł
                    <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
