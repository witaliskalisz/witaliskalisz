"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Loader2, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  email: z.string().email("Wpisz poprawny adres e-mail"),
  consent: z.literal(true, { errorMap: () => ({ message: "Wymagana zgoda" }) }),
});

type FormData = z.infer<typeof schema>;

export function NewsletterForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { consent: true as const, email: "" },
  });

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Network");
      toast.success("Zapisaliśmy Cię na newsletter", {
        description: "Pierwszy email wyślemy za kilka dni.",
      });
      setDone(true);
      reset();
    } catch {
      toast.error("Coś poszło nie tak", {
        description: "Spróbuj ponownie za chwilę lub zadzwoń.",
      });
    }
  }

  if (done) {
    return (
      <div className="flex items-center gap-2 p-3 rounded-2xl bg-success/10 text-success text-sm">
        <Check className="size-4" />
        Dziękujemy! Sprawdź swoją skrzynkę.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex gap-2">
        <Input
          type="email"
          placeholder="twoj@email.pl"
          {...register("email")}
          aria-invalid={!!errors.email}
        />
        <Button type="submit" variant="primary" size="default" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <>
              <span className="hidden sm:inline">Zapisz</span>
              <ArrowRight className="size-4" />
            </>
          )}
        </Button>
      </div>
      {errors.email && (
        <p className="text-xs text-destructive">{errors.email.message}</p>
      )}
      <label className="flex items-start gap-2 text-[11px] text-muted-foreground leading-snug">
        <input type="checkbox" {...register("consent")} className="mt-0.5 accent-primary" />
        <span>
          Wyrażam zgodę na otrzymywanie newslettera Witalis. Mogę wypisać się w każdym
          momencie. Więcej w{" "}
          <a href="/polityka-prywatnosci" className="underline">
            Polityce prywatności
          </a>
          .
        </span>
      </label>
    </form>
  );
}
