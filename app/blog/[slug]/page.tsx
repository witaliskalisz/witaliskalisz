import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Calendar, Clock, Phone } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return buildMetadata({ title: "Artykuł nieznaleziony" });
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${slug}`,
  });
}

function renderMarkdown(md: string): string {
  // Tiny markdown-ish renderer (h2 / h3 / lists / bold / italic / links).
  const lines = md.split("\n");
  let html = "";
  let inList = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("## ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h2 class="font-display text-3xl md:text-4xl mt-12 mb-5 tracking-tight">${trimmed.slice(3)}</h2>`;
    } else if (trimmed.startsWith("### ")) {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<h3 class="font-display text-2xl mt-8 mb-3">${trimmed.slice(4)}</h3>`;
    } else if (trimmed.startsWith("- ")) {
      if (!inList) { html += '<ul class="space-y-2 my-4 ml-6 list-disc marker:text-primary">'; inList = true; }
      html += `<li class="leading-relaxed">${inline(trimmed.slice(2))}</li>`;
    } else if (trimmed === "") {
      if (inList) { html += "</ul>"; inList = false; }
    } else {
      if (inList) { html += "</ul>"; inList = false; }
      html += `<p class="leading-relaxed my-4 text-foreground/90">${inline(trimmed)}</p>`;
    }
  }
  if (inList) html += "</ul>";
  return html;
}

function inline(s: string): string {
  return s
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
    .replace(/_(.+?)_/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary underline-offset-4 hover:underline">$1</a>');
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Strona główna", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: article.title, href: `/blog/${slug}` },
            ])
          ),
        }}
      />

      <article className="container py-12 md:py-20">
        <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3">
          <Link href="/blog">
            <ArrowLeft className="size-4" /> Wszystkie artykuły
          </Link>
        </Button>

        <Reveal className="max-w-3xl mx-auto space-y-6 mb-12">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <Badge variant="accent" className="text-[10px]">{article.category}</Badge>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-3" />
              {new Date(article.publishedAt).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3" /> {article.readingTimeMin} min
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance">
            {article.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{article.excerpt}</p>
          <div className="text-7xl">{article.heroEmoji}</div>
        </Reveal>

        <div className="max-w-3xl mx-auto prose-w prose-witalis"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
        />

        {/* CTA */}
        <Reveal delay={0.2} className="max-w-3xl mx-auto mt-16">
          <Card className="bg-gradient-to-br from-primary/5 via-card to-card">
            <CardContent className="p-8 md:p-10 text-center space-y-5">
              <Badge variant="success" className="text-[10px]">Pora przejść do działania</Badge>
              <h3 className="font-display text-3xl md:text-4xl leading-tight">
                Zaplanuj swoją diagnostykę
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Czytanie to dopiero pierwszy krok. Drugi: konkretne badania, twój własny obraz krwi, plan suplementacji.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <Button asChild variant="primary" size="lg">
                  <Link href="/umow-konsultacje">
                    Umów konsultację <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+48881353444">
                    <Phone className="size-4" /> 881 353 444
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>

        {/* Related */}
        <Reveal delay={0.25} className="max-w-5xl mx-auto mt-20">
          <h3 className="font-display text-2xl mb-6">Czytaj dalej</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group block p-5 rounded-2xl border border-border bg-card/60 hover:border-foreground/20 transition-colors"
              >
                <div className="text-3xl mb-3">{r.heroEmoji}</div>
                <div className="text-xs text-muted-foreground mb-1">{r.category}</div>
                <div className="font-display text-base leading-tight group-hover:text-primary transition-colors">{r.title}</div>
              </Link>
            ))}
          </div>
        </Reveal>
      </article>
    </div>
  );
}
