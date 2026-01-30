"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-[5000] flex items-center justify-between px-8 py-4 bg-background/80 backdrop-blur-md border-b border-border/50",
        className
      )}
    >
      <a href="#" className="text-lg font-bold tracking-tight">
        commit<span className="text-muted-foreground">.</span>
      </a>

      <div className="hidden sm:flex items-center gap-8">
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {navItem.name}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="rounded-full border border-foreground bg-foreground text-background px-5 py-2 text-sm font-medium transition-opacity hover:opacity-80"
      >
        Let&apos;s Talk
      </a>
    </nav>
  );
};
