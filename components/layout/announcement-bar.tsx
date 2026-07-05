import Link from "next/link";
import { Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="relative z-50 border-b border-border/40 bg-gradient-to-r from-primary/5 via-[hsl(var(--neon))]/8 to-primary/5 backdrop-blur">
      <div className="container py-2 flex items-center justify-center gap-2 text-[11px] md:text-xs font-medium text-foreground/80">
        <Sparkles className="size-3.5 text-primary shrink-0" />
        <span className="text-balance text-center">
          Witalis — prywatna diagnostyka funkcjonalna w sercu Kalisza.
          <Link href="/pakiety" className="ml-2 underline-offset-4 hover:underline font-semibold">
            Zobacz pakiety →
          </Link>
        </span>
      </div>
    </div>
  );
}
