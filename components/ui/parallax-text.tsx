"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export function ParallaxText({
  children,
  className,
  baseVelocity = -2,
}: {
  children: string;
  className?: string;
  baseVelocity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, baseVelocity * 200]
  );

  return (
    <div ref={ref} className={cn("overflow-hidden whitespace-nowrap", className)}>
      <motion.div style={{ x }} className="inline-block">
        <span className="inline-block pr-8">{children}</span>
        <span className="inline-block pr-8">{children}</span>
        <span className="inline-block pr-8">{children}</span>
        <span className="inline-block pr-8">{children}</span>
        <span className="inline-block pr-8">{children}</span>
        <span className="inline-block pr-8">{children}</span>
      </motion.div>
    </div>
  );
}
