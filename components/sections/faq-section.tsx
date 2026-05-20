"use client";

import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="py-24 md:py-32 relative" id="faq">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-32 space-y-6">
              <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">
                <MessageCircleQuestion className="size-3" /> 11 · Pytania
              </Badge>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance">
                Wszystko,
                <br />
                <span className="italic font-normal text-muted-foreground">o co ludzie</span>
                <br />
                pytają.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nie znalazłeś odpowiedzi? Zadzwoń lub napisz — chętnie pomożemy.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Button asChild variant="primary" size="lg">
                  <Link href="/kontakt">
                    Zadaj pytanie
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+48881353444">Zadzwoń: 881 353 444</a>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <Accordion type="single" collapsible className="space-y-3">
                {FAQ.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
