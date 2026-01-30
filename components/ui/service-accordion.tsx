"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServiceAccordion({
  items,
  className,
}: {
  items: ServiceItem[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={cn("", className)}>
      {items.map((item, i) => {
        const isActive = activeIndex === i;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "group cursor-pointer border-b border-border transition-all duration-500",
              isActive && "border-foreground/20"
            )}
          >
            <div className="flex items-center gap-6 py-8 sm:py-10">
              {/* Number */}
              <span
                className={cn(
                  "font-mono text-sm transition-colors duration-300",
                  isActive ? "text-foreground" : "text-muted-foreground/40"
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className={cn(
                  "transition-all duration-500",
                  isActive
                    ? "scale-110 text-foreground"
                    : "scale-100 text-muted-foreground/40 group-hover:text-muted-foreground"
                )}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className={cn(
                  "text-2xl font-semibold tracking-tight transition-colors duration-300 sm:text-3xl lg:text-4xl",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground/40 group-hover:text-muted-foreground"
                )}
              >
                {item.title}
              </h3>

              {/* Arrow */}
              <motion.div
                animate={{ rotate: isActive ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "ml-auto text-2xl transition-colors duration-300",
                  isActive ? "text-foreground" : "text-muted-foreground/20"
                )}
              >
                +
              </motion.div>
            </div>

            {/* Expandable description */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 pl-[4.5rem] text-lg leading-relaxed text-muted-foreground sm:max-w-xl sm:pl-[5.5rem]">
                    {item.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
