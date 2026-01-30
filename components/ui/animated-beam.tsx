"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function AnimatedGridPattern({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/[0.04]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Animated highlight squares */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.rect
            key={i}
            width="40"
            height="40"
            x={Math.floor(Math.random() * 30) * 40}
            y={Math.floor(Math.random() * 20) * 40}
            fill="currentColor"
            className="text-foreground/[0.03]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              repeatDelay: Math.random() * 5 + 2,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
