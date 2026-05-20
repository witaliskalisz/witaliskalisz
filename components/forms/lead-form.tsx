"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(2, "Wpisz imię i nazwisko"),
  email: z.string().email("Wpisz poprawny e-mail"),
  phone: z.string().min(9, "Wpisz numer telefonu").regex(/^[0-9\s+()-]+$/, "Tylko cyfry"),
  topic: z.string().min(1, "Wybierz temat"),
  message: z.string().max(800).optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Wymagana zgoda" }) }),
});

type FormData = z.infer<typeof schema>;

const TOPICS = [
  { value: "consult", label: "Chcę umówić konsultację" },
  { value: "package", label: "Mam pytanie o pakiet" },
  { value: "b2b", label: "Oferta dla firmy" },
  { value: "sport", label: "Oferta dla klubu sportowego" },
  { value: "other", label: "Inne" },
];

export function LeadForm({ defaultTopic }: { defaultTopic?: string } = {}) {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { topic: defaultTopic ?? "consult", consent: true as const },
  });

  const topic = watch("topic");

  async function onSubmit(data: FormData) {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("network");
      toast.success("Dziękujemy za wiadomość", {
        description: "Skontaktujemy się z Tobą w ciągu 24 godzin roboczych.",
      });
      setDone(true);
      reset();
    } catch {
      toast.error("Coś poszło nie tak", {
        description: "Spróbuj ponownie albo zadzwoń: 881 353 444.",
      });
    }
  }

  if (done) {
    return (
      <div className="rounded-3xl border border-success/30 bg-success/5 p-8 text-center space-y-4">
        <div className="inline-flex items-center justify-center size-12 rounded-full bg-success/15 text-success mb-2">
          <Check className="size-6" />
        </div>
        <h3 className="font-display text-2xl">Wiadomość wysłana.</h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Odpowiemy w ciągu 24 godzin roboczych. Jeśli sprawa pilna — zadzwoń bezpośrednio:
          <a href="tel:+48881353444" className="text-foreground font-medium ml-1 underline-offset-4 hover:underline">
            881 353 444
          </a>
          .
        </p>
        <Button variant="ghost" onClick={() => setDone(false)}>
          Wyślij kolejną wiadomość
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Imię i nazwisko *</Label>
          <Input id="name" {...register("name")} placeholder="Jan Kowalski" />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Telefon *</Label>
          <Input id="phone" {...register("phone")} placeholder="600 100 200" />
          {errors.phone && <p className="text-xs text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">E-mail *</Label>
        <Input id="email" type="email" {...register("email")} placeholder="jan@firma.pl" />
        {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="topic">Temat *</Label>
        <Select value={topic} onValueChange={(v) => setValue("topic", v, { shouldValidate: true })}>
          <SelectTrigger id="topic">
            <SelectValue placeholder="Wybierz temat" />
          </SelectTrigger>
          <SelectContent>
            {TOPICS.map((t) => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.topic && <p className="text-xs text-destructive">{errors.topic.message}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Wiadomość (opcjonalnie)</Label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Napisz krótko, co Cię interesuje..."
          rows={4}
        />
      </div>

      <label className="flex items-start gap-2 text-xs text-muted-foreground leading-snug">
        <input type="checkbox" {...register("consent")} className="mt-0.5 accent-primary" />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu zwrotnego, zgodnie z{" "}
          <a href="/polityka-prywatnosci" className="underline">Polityką prywatności</a>.
          *
        </span>
      </label>
      {errors.consent && <p className="text-xs text-destructive">{errors.consent.message}</p>}

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Wysyłanie...
          </>
        ) : (
          <>
            Wyślij wiadomość <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  );
}
