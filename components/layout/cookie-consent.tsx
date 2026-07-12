"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "witalis-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // brak dostępu do localStorage — nie pokazujemy banera
    }
  }, []);

  function decide(choice: "all" | "necessary" | "rejected") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* noop */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Zgoda na pliki cookies"
      className="fixed inset-x-3 bottom-3 z-[90] mx-auto max-w-2xl rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl p-4 md:p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]"
    >
      <div className="flex gap-3">
        <div className="size-10 shrink-0 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
          <Cookie className="size-5" />
        </div>
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Używamy plików cookies, aby strona działała poprawnie (m.in. preferencja motywu). Nie
            stosujemy śledzenia reklamowego ani profilowania. Możesz zdecydować o swoim wyborze.{" "}
            <Link href="/polityka-cookies" className="text-primary underline underline-offset-4">
              Polityka cookies
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="primary" size="sm" onClick={() => decide("all")} className="w-full sm:w-auto">
              Akceptuj wszystkie
            </Button>
            <Button variant="outline" size="sm" onClick={() => decide("necessary")} className="w-full sm:w-auto">
              Tylko niezbędne
            </Button>
            <Button variant="ghost" size="sm" onClick={() => decide("rejected")} className="w-full sm:w-auto">
              Odrzuć
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
