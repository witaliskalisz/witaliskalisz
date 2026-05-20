import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SITE, NAVIGATION } from "@/lib/site";
import { Logo } from "./logo";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-muted/40">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground max-w-md">
              Premium diagnostyka funkcjonalna w Kaliszu. Mikroskopowe badanie żywej kropli krwi,
              testy nietolerancji pokarmowych IgG (FoodDetective™, Food Print 200+) oraz skaner
              Diacom 3D. Diagnostyka, której używają zawodnicy klubów Bundesligi i La Liga — w
              Twoim mieście.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address.fullLine)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <MapPin className="size-4 mt-0.5 shrink-0" />
                <span>{SITE.address.fullLine}</span>
              </a>
              <a
                href={`tel:${SITE.contact.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="size-4 shrink-0" />
                <span>{SITE.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${SITE.contact.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="size-4 shrink-0" />
                <span>{SITE.contact.email}</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="size-4 shrink-0" />
                <span>{SITE.contact.hoursRegistration}</span>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="text-sm font-semibold mb-3">Newsletter zdrowia</h4>
              <p className="text-xs text-muted-foreground mb-4 max-w-sm">
                Raz w miesiącu — esencja wiedzy o niedoborach, jelitach, hormonach i regeneracji.
                Bez spamu, zawsze możesz się wypisać.
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterColumn title="Diagnostyka" items={NAVIGATION.footer.diagnostyka} />
            <FooterColumn title="Dla kogo" items={NAVIGATION.footer.offerings} />
            <FooterColumn title="Witalis" items={NAVIGATION.footer.company} />
            <FooterColumn title="Informacje" items={NAVIGATION.footer.legal} />
          </div>
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted-foreground">
          <p>© {year} Witalis. Wszystkie prawa zastrzeżone.</p>
          <p>
            Diagnostyka funkcjonalna i prewencyjna. Nie zastępuje porady lekarskiej.
            Konsultacja medyczna pozostaje w gestii lekarza prowadzącego.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.18em] mb-4 text-foreground">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
