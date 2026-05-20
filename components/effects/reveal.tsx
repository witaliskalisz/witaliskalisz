"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface RevealProps extends Omit<MotionProps, "children"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "header" | "footer" | "main";
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
  ...rest
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </Component>
  );
}
