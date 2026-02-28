"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedDecimalProps = {
  value: number;
  decimals?: number;
  duration?: number;
  className?: string;
  suffix?: string;
};

export function AnimatedDecimal({ value, decimals = 1, duration = 1.2, className, suffix = "" }: AnimatedDecimalProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(latest.toFixed(decimals));
      }
    });

    return () => controls.stop();
  }, [decimals, duration, isInView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
