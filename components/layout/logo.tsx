import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

interface LogoProps {
  className?: string;
  short?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { box: "h-9 w-9", icon: "size-5", radius: "rounded-xl" },
  md: { box: "h-10 w-10", icon: "size-6", radius: "rounded-2xl" },
  lg: { box: "h-12 w-12", icon: "size-7", radius: "rounded-2xl" },
};

export function Logo({ className, short = false, size = "md" }: LogoProps) {
  const s = sizeMap[size];

  return (
    <Link href="/" className={cn("inline-flex items-center gap-3 group", className)}>
      <span
        className={cn(
          "relative inline-flex items-center justify-center bg-gradient-to-br from-primary to-[hsl(var(--neon))] shadow-[0_6px_20px_-4px_hsl(var(--primary)/0.45)] transition-transform group-hover:scale-105",
          s.box,
          s.radius
        )}
      >
        <BrandMark className={cn(s.icon, "text-primary-foreground")} />
        <span
          className={cn(
            "absolute -inset-0.5 bg-gradient-to-br from-primary to-[hsl(var(--neon))] opacity-30 blur-md -z-10",
            s.radius
          )}
        />
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

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      {/* Teardrop rising from the centre of the W */}
      <path
        d="M 16 6 C 13.6 9, 12.1 11.1, 12.1 13.2 C 12.1 15.3, 13.8 16.9, 16 16.9 C 18.2 16.9, 19.9 15.3, 19.9 13.2 C 19.9 11.1, 18.4 9, 16 6 Z"
        fill="currentColor"
      />
      {/* Bold W formed by two V strokes */}
      <path
        d="M 5 15.5 L 9.6 25.8 C 10.1 26.9, 11.6 26.9, 12.1 25.8 L 16 17.2 L 19.9 25.8 C 20.4 26.9, 21.9 26.9, 22.4 25.8 L 27 15.5"
        stroke="currentColor"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
