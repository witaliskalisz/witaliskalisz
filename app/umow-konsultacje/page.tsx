import { Suspense } from "react";
import type { Metadata } from "next";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { BookingForm } from "@/components/forms/booking-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Umów konsultację — Witalis Kalisz",
  description: "Zarezerwuj termin online. Wybierz pakiet, datę i godzinę. Termin potwierdzimy telefonicznie w ciągu 24h.",
  path: "/umow-konsultacje",
});

function BookingClient({ initial }: { initial?: string }) {
  return <BookingForm initialPackageSlug={initial} />;
}

export default async function UmowKonsultacjePage({
  searchParams,
}: {
  searchParams: Promise<{ pakiet?: string }>;
}) {
  const { pakiet } = await searchParams;
  return (
    <div className="pt-12">
      <section className="container py-16 md:py-20">
        <Reveal className="max-w-2xl mx-auto text-center space-y-5 mb-12">
          <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">Rezerwacja online</Badge>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Umów konsultację
          </h1>
          <p className="text-lg text-muted-foreground">
            3 proste kroki. Termin potwierdzimy telefonicznie w ciągu 24 godzin roboczych.
          </p>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <Suspense fallback={<div className="text-center py-20 text-muted-foreground">Wczytywanie formularza...</div>}>
              <BookingClient initial={pakiet} />
            </Suspense>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
