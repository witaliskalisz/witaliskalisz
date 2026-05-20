import type { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, Facebook } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { LeadForm } from "@/components/forms/lead-form";
import { SITE } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Kontakt — Witalis Kalisz",
  description: "ul. Babina 6, 62-800 Kalisz · tel. 881 353 444 · rejestracja pon-pt 16:00-20:00.",
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
            <span className="italic font-normal text-muted-foreground">Najszybciej — telefonicznie.</span>
          </h1>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <Card className="p-7 space-y-5">
                <h2 className="font-display text-2xl">Dane kontaktowe</h2>
                <div className="space-y-4">
                  <ContactRow icon={MapPin} label="Adres">
                    <p>{SITE.address.street}</p>
                    <p>{SITE.address.postal} {SITE.address.city}</p>
                  </ContactRow>
                  <ContactRow icon={Phone} label="Rejestracja telefoniczna" href={`tel:${SITE.contact.phone}`}>
                    {SITE.contact.phoneDisplay}
                  </ContactRow>
                  <ContactRow icon={Mail} label="E-mail" href={`mailto:${SITE.contact.email}`}>
                    {SITE.contact.email}
                  </ContactRow>
                  <ContactRow icon={Clock} label="Godziny rejestracji">
                    Pon-Pt 16:00 – 20:00
                  </ContactRow>
                  {SITE.social.facebook && (
                    <ContactRow icon={Facebook} label="Facebook" href={SITE.social.facebook}>
                      facebook.com/witalis
                    </ContactRow>
                  )}
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="overflow-hidden">
                <div className="aspect-[5/4]">
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

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <Card>
                <CardContent className="p-8 md:p-10">
                  <div className="mb-6 space-y-2">
                    <h2 className="font-display text-2xl md:text-3xl">Formularz kontaktowy</h2>
                    <p className="text-sm text-muted-foreground">
                      Wolisz napisać niż zadzwonić? Wpisz krótko, czego potrzebujesz —
                      odezwiemy się w ciągu 24 godzin roboczych.
                    </p>
                  </div>
                  <LeadForm />
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
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
