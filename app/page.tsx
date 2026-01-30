"use client";

import { ArrowRight, ArrowUpRight, Palette, Code, Sparkles, Zap, Globe, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextReveal } from "@/components/ui/text-reveal";
import { AnimatedGridPattern } from "@/components/ui/animated-beam";
import { LampEffect } from "@/components/ui/lamp-effect";
import { MovingBorder } from "@/components/ui/moving-border";
import { ServiceAccordion } from "@/components/ui/service-accordion";
import { ParallaxText } from "@/components/ui/parallax-text";
import { FadeIn } from "@/components/ui/fade-in-section";
import { motion } from "motion/react";

const NAV_LINKS = [
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Work", link: "#work" },
  { name: "Community", link: "#community" },
  { name: "Contact", link: "#contact" },
];

const SERVICES = [
  {
    icon: <Palette className="h-7 w-7" />,
    title: "Brand Identity",
    description:
      "We craft visual identities that resonate. From logos to full brand systems, we build the foundation your brand stands on.",
  },
  {
    icon: <Code className="h-7 w-7" />,
    title: "Web Development",
    description:
      "Pixel-perfect, performant websites and applications built with modern technology stacks that scale with your vision.",
  },
  {
    icon: <Sparkles className="h-7 w-7" />,
    title: "Creative Strategy",
    description:
      "Data-informed creative direction that connects your brand to the right audience at the right moment.",
  },
  {
    icon: <Zap className="h-7 w-7" />,
    title: "Product Design",
    description:
      "End-to-end product design from research and wireframes to polished interfaces your users will love.",
  },
  {
    icon: <Globe className="h-7 w-7" />,
    title: "Digital Marketing",
    description:
      "Growth-driven campaigns across channels — SEO, social, content, and paid media that deliver real results.",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Community Building",
    description:
      "We help brands build engaged communities through events, content ecosystems, and authentic connection.",
  },
];

const PROJECTS = [
  {
    title: "Meridian",
    category: "Brand Identity",
    gradient: "from-zinc-900 via-zinc-800 to-zinc-700",
  },
  {
    title: "Hyperform",
    category: "Web Development",
    gradient: "from-neutral-800 via-stone-700 to-neutral-600",
  },
  {
    title: "Luminary",
    category: "Product Design",
    gradient: "from-stone-900 via-neutral-800 to-stone-700",
  },
  {
    title: "Nocturn",
    category: "Creative Strategy",
    gradient: "from-zinc-800 via-neutral-700 to-zinc-600",
  },
];

const STATS = [
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 40, suffix: "+", label: "Community Members" },
  { value: 12, suffix: "", label: "Countries" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

const TESTIMONIALS = [
  {
    quote: "Commit didn't just build our brand — they gave us a creative home. The community aspect is unlike anything else.",
    name: "Priya Sharma",
    title: "Founder, Meridian",
  },
  {
    quote: "Working with Commit felt like having an extension of our own team. Sharp, fast, and genuinely invested.",
    name: "Marcus Chen",
    title: "CTO, Hyperform",
  },
  {
    quote: "The quality is exceptional, but what sets them apart is the thinking behind every pixel and line of code.",
    name: "Elena Vogt",
    title: "VP Design, Luminary",
  },
];

const MARQUEE_ITEMS = [
  "BUILD FOR CHANGE",
  "BRAND IDENTITY",
  "WEB DEVELOPMENT",
  "CREATIVE STRATEGY",
  "PRODUCT DESIGN",
  "COMMUNITY",
];

const AVATAR_PLACEHOLDERS = Array.from({ length: 16 }, (_, i) => i);

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ─── Fixed Top Nav ─── */}
      <FloatingNav navItems={NAV_LINKS} />

      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-16">
        <AnimatedGridPattern className="opacity-60" />
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

        {/* Animated gradient orbs */}
        <div className="pointer-events-none absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-blob h-[600px] w-[600px] rounded-full bg-gradient-to-br from-foreground/[0.07] via-foreground/[0.03] to-transparent blur-3xl" />
        </div>
        <div className="pointer-events-none absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2">
          <div className="animate-blob delay-300 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-foreground/[0.05] via-foreground/[0.02] to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
          {/* Intro badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-5 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              Now accepting projects for 2025
            </span>
          </motion.div>

          {/* Main headline — each line staggers in */}
          <div className="mt-10">
            <motion.h1
              className="text-[clamp(4rem,14vw,14rem)] font-black leading-[0.85] tracking-tighter"
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              >
                Build for
              </motion.span>
              <motion.span
                className="block text-gradient"
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              >
                Change.
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            A creative collective that ships{" "}
            <FlipWords
              words={["brands", "products", "communities", "movements", "futures"]}
              className="text-foreground font-semibold"
            />{" "}
            for companies that refuse to blend in.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          >
            <ShimmerButton
              shimmerColor="#ffffff"
              background="rgba(0, 0, 0, 0.9)"
              className="px-10 py-4 text-base font-medium"
            >
              Start a Project
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </ShimmerButton>
            <a
              href="#work"
              className="group flex items-center gap-2 rounded-full border border-foreground/10 px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              See Our Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-24"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border-2 border-foreground/20 pt-2"
            >
              <div className="h-2 w-1 rounded-full bg-foreground/40" />
            </motion.div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ─── Marquee ─── */}
      <div className="overflow-hidden border-y border-border/50 bg-background py-5">
        <Marquee className="[--duration:25s]" pauseOnHover>
          {MARQUEE_ITEMS.map((item) => (
            <span key={item} className="mx-8 font-mono text-sm tracking-widest text-muted-foreground/60">
              {item}
              <span className="ml-8 text-foreground/20">&#x2022;</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* ─── About — Text Reveal ─── */}
      <section id="about" className="px-6 py-40">
        <div className="mx-auto max-w-5xl">
          <TextReveal
            text="We are a collective of 40+ designers, developers, and strategists across 12 countries — building brands that matter and communities that last."
            className="mb-24"
          />
        </div>

        {/* Stats with Moving Border */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <MovingBorder key={stat.label} duration={3000 + i * 500}>
                <div className="flex flex-col items-center justify-center px-6 py-14">
                  <span className="text-5xl font-bold tracking-tight sm:text-6xl">
                    <NumberTicker value={stat.value} />
                    {stat.suffix}
                  </span>
                  <span className="mt-3 text-sm text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              </MovingBorder>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Parallax Divider ─── */}
      <div className="overflow-hidden py-10">
        <ParallaxText
          baseVelocity={-1}
          className="text-[8rem] font-bold tracking-tighter text-foreground/[0.03] leading-none sm:text-[12rem]"
        >
          BUILD FOR CHANGE &#x2022;
        </ParallaxText>
      </div>

      {/* ─── Services — Accordion ─── */}
      <section id="services" className="px-6 py-32">
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mb-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Services
            </p>
          </FadeIn>

          <div className="mb-16">
            <TextReveal text="Everything you need to launch, grow, and stand out." />
          </div>

          <ServiceAccordion items={SERVICES} />
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section id="work" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <FadeIn>
                <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Selected Work
                </p>
              </FadeIn>
              <TextReveal text="Recent projects." />
            </div>
            <FadeIn delay={0.2}>
              <Button variant="outline" className="w-fit rounded-full">
                View All Work
                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <motion.a
                key={project.title}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-all duration-500 group-hover:scale-105`} />
                <div className="noise-bg absolute inset-0" />
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]" />
                <div className="relative z-10">
                  <Badge variant="secondary" className="mb-4 rounded-full border-white/20 bg-white/10 font-mono text-xs text-white backdrop-blur-sm">
                    {project.category}
                  </Badge>
                  <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex translate-y-2 items-center gap-2 text-white/60 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <span className="text-sm">View Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Parallax Divider 2 ─── */}
      <div className="overflow-hidden py-10">
        <ParallaxText
          baseVelocity={1}
          className="text-[8rem] font-bold tracking-tighter text-foreground/[0.03] leading-none sm:text-[12rem]"
        >
          COMMUNITY &#x2022; CRAFT &#x2022;
        </ParallaxText>
      </div>

      {/* ─── Testimonials ─── */}
      <section className="overflow-hidden py-32">
        <div className="mx-auto max-w-7xl px-6">
          <FadeIn>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              What People Say
            </p>
          </FadeIn>
          <div className="mb-16">
            <TextReveal text="Trusted by founders, CTOs, and design leaders." />
          </div>
        </div>
        <InfiniteMovingCards
          items={TESTIMONIALS}
          direction="right"
          speed="slow"
        />
      </section>

      {/* ─── Community ─── */}
      <section id="community" className="relative overflow-hidden px-6 py-32">
        <AnimatedGridPattern className="opacity-40" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <FadeIn className="text-center">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Community
            </p>
          </FadeIn>

          <div className="mx-auto max-w-3xl text-center">
            <TextReveal text="More than an agency. A creative home for builders." />
          </div>

          <FadeIn delay={0.2}>
            <p className="mx-auto mt-8 max-w-lg text-center text-lg leading-relaxed text-muted-foreground">
              Join a tight-knit collective of builders who share work, give honest feedback, and collaborate on projects that push the craft forward.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-10 flex items-center justify-center">
            <ShimmerButton
              shimmerColor="#ffffff"
              background="rgba(0, 0, 0, 0.9)"
              className="px-10 py-4 text-base font-medium"
            >
              Join the Community
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </ShimmerButton>
          </FadeIn>

          {/* Avatar row */}
          <div className="mt-16 flex items-center justify-center">
            {AVATAR_PLACEHOLDERS.map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="-ml-2 h-11 w-11 rounded-full border-2 border-background bg-gradient-to-br from-neutral-300 to-neutral-500 dark:from-neutral-600 dark:to-neutral-800"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA with Lamp Effect ─── */}
      <section id="contact" className="py-10">
        <LampEffect>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl"
          >
            Build for Change.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 max-w-md text-center text-lg text-muted-foreground"
          >
            Whether you have a project in mind or want to join the collective, we&apos;d love to hear from you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-10 flex items-center justify-center"
          >
            <ShimmerButton
              shimmerColor="#ffffff"
              background="rgba(0, 0, 0, 0.9)"
              className="px-12 py-5 text-lg font-medium"
            >
              Let&apos;s Talk
              <ArrowRight className="ml-2 inline h-5 w-5" />
            </ShimmerButton>
          </motion.div>
        </LampEffect>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="text-lg font-bold tracking-tight">
            commit<span className="text-muted-foreground">.</span>
          </a>
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.link}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {["Twitter", "GitHub", "LinkedIn", "Discord"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-7xl text-center">
          <p className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Commit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
