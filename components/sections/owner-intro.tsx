"use client";

import Image from "next/image";
import { Reveal } from "@/components/effects/reveal";
import { SITE } from "@/lib/site";

export function OwnerIntro() {
  return (
    <section className="relative py-12 md:py-16" id="wprowadzenie">
      <div className="container">
        <Reveal className="max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
          <div className="relative size-24 md:size-28 rounded-full overflow-hidden ring-4 ring-primary/15 shadow-[0_16px_40px_-16px_hsl(var(--primary)/0.45)]">
            <Image
              src="/wlascicielka.jpg"
              alt={SITE.owner.name}
              fill
              sizes="112px"
              quality={95}
              className="object-cover object-[center_20%]"
            />
          </div>

          <div>
            <p className="font-display text-2xl">{SITE.owner.name}</p>
            <p className="text-sm text-muted-foreground mt-1">{SITE.owner.title}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
