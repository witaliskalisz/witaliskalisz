import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center container py-20">
      <div className="text-center space-y-6 max-w-lg">
        <Badge variant="outline" className="text-[11px] uppercase tracking-[0.18em]">Błąd 404</Badge>
        <h1 className="font-display text-6xl md:text-7xl tracking-tight">
          Tej strony tu nie ma.
        </h1>
        <p className="text-muted-foreground">
          Adres mógł się zmienić. Wróć na stronę główną albo sprawdź pakiety.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button asChild variant="primary" size="lg">
            <Link href="/"><ArrowLeft className="size-4" /> Strona główna</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/pakiety">Zobacz pakiety</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
