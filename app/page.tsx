import { ArrowRight, ArrowUpRight, Menu, Sparkles, Zap, Palette, Code, Users, Globe, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "We craft visual identities that resonate. From logos to full brand systems, we build the foundation your brand stands on.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Pixel-perfect, performant websites and applications built with modern technology stacks that scale with your vision.",
  },
  {
    icon: Sparkles,
    title: "Creative Strategy",
    description:
      "Data-informed creative direction that connects your brand to the right audience at the right moment.",
  },
  {
    icon: Zap,
    title: "Product Design",
    description:
      "End-to-end product design from research and wireframes to polished interfaces your users will love.",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description:
      "Growth-driven campaigns across channels — SEO, social, content, and paid media that deliver real results.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "We help brands build engaged communities through events, content ecosystems, and authentic connection.",
  },
];

const PROJECTS = [
  {
    title: "Meridian",
    category: "Brand Identity",
    description: "Complete rebrand for a climate-tech startup redefining carbon markets.",
    year: "2025",
  },
  {
    title: "Hyperform",
    category: "Web Development",
    description: "High-performance e-commerce platform processing 10k+ orders daily.",
    year: "2025",
  },
  {
    title: "Luminary",
    category: "Product Design",
    description: "AI-powered design tool used by 50,000+ creatives worldwide.",
    year: "2024",
  },
  {
    title: "Nocturn",
    category: "Creative Strategy",
    description: "Launch campaign for a luxury audio brand — 2M+ impressions in week one.",
    year: "2024",
  },
];

const STATS = [
  { value: "120+", label: "Projects Delivered" },
  { value: "40+", label: "Community Members" },
  { value: "12", label: "Countries" },
  { value: "98%", label: "Client Retention" },
];

const TESTIMONIALS = [
  {
    quote:
      "Commit didn't just build our brand — they gave us a creative home. The community aspect is unlike anything else in the industry.",
    author: "Priya Sharma",
    role: "Founder, Meridian",
  },
  {
    quote:
      "Working with Commit felt like having an extension of our own team. Sharp, fast, and genuinely invested in our success.",
    author: "Marcus Chen",
    role: "CTO, Hyperform",
  },
  {
    quote:
      "The quality of work is exceptional, but what sets them apart is the thinking behind every pixel and every line of code.",
    author: "Elena Vogt",
    role: "VP Design, Luminary",
  },
];

const COMMUNITY_PERKS = [
  "Weekly design critiques & code reviews",
  "Access to private Slack with 40+ creators",
  "Monthly virtual & IRL meetups",
  "Exclusive workshops & masterclasses",
  "Early access to open-source tools",
  "Collaboration on real client projects",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* ─── Navbar ─── */}
      <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#" className="text-lg font-bold tracking-tight">
            commit<span className="text-muted-foreground">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden rounded-full md:inline-flex"
            >
              Join Community
            </Button>
            <Button size="sm" className="rounded-full">
              Start a Project
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
            <button className="ml-2 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Hero ─── */}
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pt-16 grid-bg">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge
            variant="secondary"
            className="animate-fade-in mb-8 rounded-full px-4 py-1.5 font-mono text-xs"
          >
            Now accepting projects for Q2 2026
          </Badge>
          <h1 className="animate-fade-in-up text-5xl font-bold leading-[1.08] tracking-tight sm:text-7xl lg:text-8xl">
            We build brands
            <br />
            <span className="text-muted-foreground">that build</span>
            <br />
            communities.
          </h1>
          <p className="animate-fade-in-up delay-200 mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Commit is a creative collective — part agency, part community. We
            bring together designers, developers, and strategists to create work
            that matters.
          </p>
          <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="rounded-full px-8">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full px-8 text-muted-foreground"
            >
              Explore Community
            </Button>
          </div>
        </div>
        {/* gradient fade at bottom */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ─── Marquee ─── */}
      <div className="overflow-hidden border-y border-border/50 bg-background py-4">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap font-mono text-sm text-muted-foreground">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex gap-12">
              <span>BRAND IDENTITY</span>
              <span className="text-foreground/20">/</span>
              <span>WEB DEVELOPMENT</span>
              <span className="text-foreground/20">/</span>
              <span>CREATIVE STRATEGY</span>
              <span className="text-foreground/20">/</span>
              <span>PRODUCT DESIGN</span>
              <span className="text-foreground/20">/</span>
              <span>DIGITAL MARKETING</span>
              <span className="text-foreground/20">/</span>
              <span>COMMUNITY</span>
              <span className="text-foreground/20">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── About ─── */}
      <section id="about" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                About Us
              </p>
              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                A new model for
                <br />
                creative work.
              </h2>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                We started Commit because we believed the best creative work
                doesn&apos;t come from traditional agency structures. It comes
                from community — from people who push each other, share openly,
                and build together.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Today, we&apos;re a collective of 40+ designers, developers, and
                strategists working across 12 countries. We take on client
                projects as a team and invest in each other&apos;s growth along
                the way.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-background px-6 py-12"
              >
                <span className="text-4xl font-bold tracking-tight sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* ─── Services ─── */}
      <section id="services" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 max-w-2xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Services
            </p>
            <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Everything you need
              <br />
              to launch &amp; grow.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From first concept to ongoing growth — we cover the full spectrum
              of creative and technical services.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col gap-4 bg-background p-10 transition-colors hover:bg-secondary/50"
              >
                <service.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                <h3 className="text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* ─── Work / Projects ─── */}
      <section id="work" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Selected Work
              </p>
              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Recent projects.
              </h2>
            </div>
            <Button variant="outline" className="w-fit rounded-full">
              View All Work
              <ArrowUpRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>
          <div className="flex flex-col">
            {PROJECTS.map((project, i) => (
              <a
                key={project.title}
                href="#"
                className="group flex flex-col gap-4 border-t border-border py-10 transition-colors last:border-b sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-muted-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 pl-10 sm:pl-0">
                  <Badge variant="secondary" className="rounded-full font-mono text-xs">
                    {project.category}
                  </Badge>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.year}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* ─── Testimonials ─── */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-16 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            What People Say
          </p>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="flex flex-col justify-between bg-background p-10"
              >
                <p className="text-base leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* ─── Community ─── */}
      <section id="community" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Community
              </p>
              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                More than an agency.
                <br />
                <span className="text-muted-foreground">A creative home.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Join a tight-knit collective of builders who share work, give
                honest feedback, and collaborate on projects that push the craft
                forward.
              </p>
              <Button size="lg" className="mt-8 rounded-full px-8">
                Join the Community
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {COMMUNITY_PERKS.map((perk) => (
                <div
                  key={perk}
                  className="flex items-start gap-3 rounded-xl border border-border bg-secondary/30 p-5"
                >
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                    <svg
                      className="h-3 w-3 text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm leading-snug">{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-secondary/30 px-8 py-24 text-center sm:px-16">
            <div className="relative z-10">
              <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s create something
                <br />
                <span className="text-muted-foreground">worth committing to.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
                Whether you have a project in mind or want to join the
                collective, we&apos;d love to hear from you.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="rounded-full px-8">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  hello@commit.studio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer id="contact" className="border-t border-border px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-1">
              <a href="#" className="text-lg font-bold tracking-tight">
                commit<span className="text-muted-foreground">.</span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A creative collective building
                <br />
                brands &amp; communities.
              </p>
            </div>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Navigation
              </p>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Connect
              </p>
              <ul className="space-y-3">
                {["Twitter / X", "GitHub", "LinkedIn", "Discord"].map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Contact
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>hello@commit.studio</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>
          <Separator className="my-12" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-mono text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Commit. All rights reserved.
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              Designed &amp; built by the Commit collective.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
