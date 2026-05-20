"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function AnimatedNumber({
  value,
  duration = 1.6,
  format = (n) => Math.round(n).toLocaleString("pl-PL"),
  className,
  suffix,
  prefix,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const display = useTransform(motionValue, (latest) => format(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration, ease: [0.22, 1, 0.36, 1] });
      return () => controls.stop();
    }
  }, [inView, motionValue, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
