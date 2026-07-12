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
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export function Logo({ className, short = false, size = "md" }: LogoProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-3 group", className)}>
      <BrandMark
        className={cn(
          "shrink-0 transition-transform group-hover:scale-105 drop-shadow-[0_6px_16px_-6px_rgba(230,20,20,0.45)]",
          sizeMap[size]
        )}
      />
      {!short && (
        <span className="flex flex-col leading-none">
          <span className="font-logo text-2xl font-semibold tracking-[-0.01em]">
            {SITE.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground mt-1">
            Mikroskopia żywej kropli krwi · Kalisz
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
        sizes="80px"
        className="object-contain"
        priority
      />
    </span>
  );
}
