import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt — Witalis Kalisz",
  description: "Zadzwoń: 881 353 444 · ul. Babina 6, 62-800 Kalisz · rejestracja pon-pt 16:00-20:00. Napisz też e-mail lub DM na Facebooku / Instagramie.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <div className="pt-12">
      <section className="container py-16 md:py-20">
        <Reveal className="max-w-3xl space-y-5 mb-12">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">Kontakt</Badge>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Porozmawiajmy.<br />
            <span className="italic font-normal text-muted-foreground">Najprościej — telefonicznie.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
            Wizyty umawiamy telefonicznie — tak najszybciej dobierzemy termin i odpowiemy na pytania.
            Wolisz napisać? Odezwij się mailowo albo w wiadomości prywatnej na Facebooku lub Instagramie.
          </p>
        </Reveal>

        {/* Telefon — główny kontakt */}
        <Reveal>
          <Card className="relative overflow-hidden border-primary/40 bg-gradient-to-br from-primary/[0.06] via-card to-card shadow-[0_20px_60px_-25px_hsl(var(--primary)/0.4)]">
            <div className="absolute -top-24 -right-16 size-64 rounded-full bg-gradient-radial from-primary/20 to-transparent blur-2xl" />
            <CardContent className="relative p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Rejestracja telefoniczna
                </p>
                <a
                  href={`tel:${SITE.contact.phone}`}
                  className="block font-display text-4xl md:text-6xl tracking-tight hover:text-primary transition-colors"
                >
                  {SITE.contact.phoneDisplay}
                </a>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Clock className="size-4" /> {SITE.contact.hoursRegistration}
                </p>
              </div>
              <Button asChild variant="primary" size="xl" className="shrink-0">
                <a href={`tel:${SITE.contact.phone}`}>
                  <Phone className="size-5" /> Zadzwoń teraz
                </a>
              </Button>
            </CardContent>
          </Card>
        </Reveal>

        {/* Alternatywne kanały */}
        <Reveal delay={0.1} className="grid sm:grid-cols-3 gap-4 mt-4">
          <ContactChannel
            icon={Mail}
            title="E-mail"
            value={SITE.contact.email}
            href={`mailto:${SITE.contact.email}`}
            cta="Napisz e-mail"
          />
          <ContactChannel
            icon={Facebook}
            title="Facebook"
            value="Napisz do nas w DM"
            href={SITE.social.facebook}
            cta="Otwórz Facebooka"
          />
          <ContactChannel
            icon={Instagram}
            title="Instagram"
            value="Napisz do nas w DM"
            href={SITE.social.instagram}
            cta="Otwórz Instagram"
          />
        </Reveal>

        {/* Adres + mapa */}
        <div className="grid lg:grid-cols-12 gap-8 mt-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Card className="p-7 space-y-5 h-full">
                <h2 className="font-display text-2xl">Gabinet</h2>
                <div className="space-y-4">
                  <ContactRow icon={MapPin} label="Adres" href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address.fullLine)}`}>
                    <p>{SITE.address.street}</p>
                    <p>{SITE.address.postal} {SITE.address.city}</p>
                  </ContactRow>
                  <ContactRow icon={Clock} label="Godziny rejestracji">
                    {SITE.contact.hoursRegistration}
                  </ContactRow>
                  <ContactRow icon={Clock} label="Wizyty">
                    {SITE.contact.hoursVisit}
                  </ContactRow>
                </div>
              </Card>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Card className="overflow-hidden">
                <div className="aspect-[16/10]">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(SITE.address.fullLine)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa: ${SITE.address.fullLine}`}
                  />
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactChannel({
  icon: Icon,
  title,
  value,
  href,
  cta,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
  cta: string;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block"
    >
      <Card className="h-full transition-all hover:border-foreground/20 hover:-translate-y-1">
        <CardContent className="p-6 flex flex-col gap-3">
          <div className="size-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
            <Icon className="size-5" />
          </div>
          <div>
            <p className="font-display text-lg">{title}</p>
            <p className="text-sm text-muted-foreground">{value}</p>
          </div>
          <span className="text-sm font-medium text-primary group-hover:underline underline-offset-4">
            {cta} →
          </span>
        </CardContent>
      </Card>
    </a>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: React.ElementType;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const inner = (
    <div className="flex gap-4">
      <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon className="size-4" />
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
        <div className="text-sm font-medium mt-0.5">{children}</div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block hover:opacity-80 transition-opacity" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {inner}
      </a>
    );
  }
  return inner;
}
