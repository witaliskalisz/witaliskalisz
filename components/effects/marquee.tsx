import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
  duration?: number;
  gap?: number;
}

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  className,
  duration = 40,
  gap = 48,
}: MarqueeProps) {
  return (
    <div
      className={cn("group flex overflow-hidden", className)}
      style={
        {
          "--duration": `${duration}s`,
          "--gap": `${gap}px`,
        } as React.CSSProperties
      }
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={cn(
            "flex shrink-0 animate-marquee items-center justify-around",
            reverse && "[animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
          style={{ gap: `${gap}px`, paddingRight: `${gap}px` }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
