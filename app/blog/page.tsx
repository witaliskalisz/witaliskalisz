import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { ARTICLES } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Wiedza Witalis",
  description: "Artykuły o niedoborach, jelitach, hormonach, sportowej diagnostyce i longevity. Pisane przez praktykę, nie na podstawie copy-paste.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="pt-12">
      <section className="container py-16 md:py-20">
        <Reveal className="max-w-3xl space-y-5 mb-12">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">Blog</Badge>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
            Wiedza,
            <br />
            <span className="italic font-normal text-muted-foreground">której nie dostaniesz w gabinecie.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Konkret, oparty na praktyce i piśmiennictwie. Bez marketingowej waty.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ARTICLES.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.06}>
              <Link
                href={`/blog/${a.slug}`}
                className="group block h-full rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm overflow-hidden transition-all hover:border-foreground/20 hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)]"
              >
                <div className="relative aspect-[16/10] flex items-center justify-center bg-gradient-to-br from-primary/20 via-card to-[hsl(var(--neon))]/10">
                  <span className="text-7xl filter drop-shadow-lg">{a.heroEmoji}</span>
                </div>
                <div className="p-6 md:p-7 space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <Badge variant="accent" className="text-[10px]">{a.category}</Badge>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <Clock className="size-3" /> {a.readingTimeMin} min
                    </span>
                  </div>
                  <h2 className="font-display text-xl leading-tight group-hover:text-primary transition-colors">
                    {a.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{a.excerpt}</p>
                  <div className="flex items-center gap-2 pt-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    Czytaj artykuł <ArrowRight className="size-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
