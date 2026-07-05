import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

interface LogoProps {
  className?: string;
  short?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { box: "h-9 w-9", px: 36 },
  md: { box: "h-10 w-10", px: 40 },
  lg: { box: "h-12 w-12", px: 48 },
};

export function Logo({ className, short = false, size = "md" }: LogoProps) {
  const s = sizeMap[size];

  return (
    <Link href="/" className={cn("inline-flex items-center gap-3 group", className)}>
      <span
        className={cn(
          "relative inline-flex shrink-0 transition-transform group-hover:scale-105",
          s.box
        )}
      >
        <BrandMark className="size-full" />
      </span>
      {!short && (
        <span className="flex flex-col leading-none">
          <span className="font-logo text-2xl font-semibold tracking-[-0.01em]">
            {SITE.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground mt-1">
            Mikroskopia żywej krwi · Kalisz
          </span>
        </span>
      )}
    </Link>
  );
}

/** Znak marki Witalis — oficjalne logo (ikona). */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block", className)}>
      <Image
        src="/logo-mark.png"
        alt="Witalis"
        fill
        sizes="48px"
        className="object-contain drop-shadow-[0_6px_16px_-6px_hsl(var(--primary)/0.5)]"
        priority
      />
    </span>
  );
}
