"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  as: Component = "div",
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  as?: any;
}) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden rounded-2xl bg-transparent p-[1px]",
        containerClassName
      )}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: "inherit" }}
      >
        <motion.div
          className="absolute h-[200%] w-[200%]"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0 340deg, rgba(255,255,255,0.3) 360deg)",
            top: "-50%",
            left: "-50%",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div
        className={cn(
          "relative z-10 rounded-[inherit] bg-background",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
}
