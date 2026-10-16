import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MessageCircle,
  Mail,
  CalendarClock,
  ShieldCheck,
  Sparkles,
  Globe,
  UserCheck,
  Lock,
  ArrowRight,
  Check,
  Quote,
  Star,
  PenLine,
  FileText,
  GraduationCap,
  BarChart3,
  Code2,
  Terminal,
  Briefcase,
  FlaskConical,
  Award,
  type LucideIcon,
} from "lucide-react";

import { CycleDiagram, FounderCard, ICON_ACCENTS, QuoteCta, SectionHead } from "@/components/site/Blocks";
import heroWorkspace from "@/assets/hero-workspace.jpg";

import {
  CAUTION_POINTS,
  CONTACT,
  HOME_CHIPS,
  HOME_PILLARS,
  HOME_SERVICES,
  HOME_STEPS,
  MARQUEE_ITEMS,
  PORTFOLIO,
  SAFEGUARDS,
  TESTIMONIALS,
  TRUST_BADGES,
} from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Edurown — Digital Solutions for Growing Businesses" },
      {
        name: "description",
        content:
          "Edurown builds modern websites, practical AI automations, education technology, digital brands, and data solutions for organisations worldwide.",
      },
      { property: "og:title", content: "Edurown — Digital Solutions for Growing Businesses" },
      {
        property: "og:description",
        content:
          "Modern websites, practical AI automations, education technology, digital design, and data solutions for organisations worldwide.",
      },
    ],
  }),
  component: Index,
});

const PILLAR_ICONS = [UserCheck, Lock, Globe] as const;

const MARQUEE_ICONS: Record<string, LucideIcon> = {
  "Web Design & Development": Code2,
  "AI & Workflow Automation": Sparkles,
  "Education Technology": GraduationCap,
  "Branding & Digital Design": PenLine,
  "Data & IT Solutions": BarChart3,
  "Website Care & Support": ShieldCheck,
};


function Index() {
  return (
    <>
      {/* Hero */}
      <section className="hero-glow border-b border-border">
        <div className="container-page grid items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="load-in load-in-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              Digital Solutions Studio
            </span>
            <h1 className="load-in load-in-2 mt-6 text-4xl leading-[1.06] md:text-[3.4rem]">
              Digital solutions built for the way you work.
            </h1>
            <p className="load-in load-in-3 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              From your first website to smarter workflows, Edurown helps businesses, educators, and growing teams turn ideas into useful digital experiences. We combine thoughtful design, practical technology, and direct collaboration to solve real problems.
            </p>

            <div className="load-in load-in-4 mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-ink-foreground shadow-cta transition-transform hover:-translate-y-0.5"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={CONTACT.whatsapp}
                className="inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-ink-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Message on WhatsApp
              </a>
              <a
                href="https://calendly.com/stephen-crowndus1/free-consultation-edurown-3"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-colors hover:bg-gold-deep"
              >
                <CalendarClock className="h-4 w-4" />
                Book a Call
              </a>
            </div>

            <ul className="load-in load-in-5 mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {TRUST_BADGES.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm font-medium">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-gold" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.4rem] bg-gold/10 blur-2xl"
            />
            <div className="load-in-scale relative rounded-[2rem] bg-gradient-to-br from-ink to-ink-soft p-3 shadow-lift ring-1 ring-gold/30">
              <div className="flex items-center gap-2 px-3 pb-3 pt-1">
                <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-foreground/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-foreground/15" />
                <span className="ml-auto text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold/80">
                  Edurown Studio
                </span>
              </div>
              <div className="relative overflow-hidden rounded-[1.5rem] ring-1 ring-gold/20">
                <img
                  src={heroWorkspace}
                  alt="A focused workspace with a laptop open on a minimal desk, representing a real, one-on-one working session with Edurown"
                  width={900}
                  height={1078}
                  fetchPriority="high"
                  className="photo-settle block aspect-[900/1078] w-full object-cover"
                />
                {/* Gold/ink wash so the photo reads as part of the brand panel rather than a dropped-in stock shot */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/0 to-ink/15 mix-blend-multiply"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gold/[0.06] mix-blend-overlay"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/70 to-transparent"
                />
                <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-foreground/90">
                  <span className="pulse-dot h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                  Ideas into working solutions
                </div>
              </div>
            </div>

            <div className="load-in load-in-5 mt-5 flex flex-wrap gap-2">
              {HOME_CHIPS.map((c, i) => (
                <span
                  key={c}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold ${
                    i % 2 === 1
                      ? "border-gold/40 bg-gold-tint text-gold-deep"
                      : "border-ink/15 bg-ink/5 text-ink"
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-border bg-ink py-4 text-ink-foreground">
        <div className="marquee-anim flex w-max gap-10 whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => {
            const Icon = MARQUEE_ICONS[item] ?? Sparkles;
            return (
              <span key={`${item}-${i}`} className="flex items-center gap-2.5 text-sm font-medium">
                <Icon className="h-4 w-4 shrink-0 text-gold" />
                {item}
              </span>
            );
          })}
        </div>
      </div>



      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHead
            eyebrow="Services"
            title="Digital solutions that move your work forward"
            lead="From a polished online presence to connected workflows and education platforms, choose the support that fits your next step."
            center
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_SERVICES.map((s, i) => {
              const c = ICON_ACCENTS[i % ICON_ACCENTS.length]!;
              return (
                <Link
                  key={s.title}
                  to="/services"
                  className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${c.bg}`}>
                    <Check className={`h-5 w-5 ${c.text}`} />
                  </span>
                  <h3 className="mt-5 text-lg">{s.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-gold-deep">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold shadow-card"
            >
              See All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mint-band border-y border-border py-16 md:py-20">
        <div className="container-page">
          <SectionHead eyebrow="Why Edurown" title="Thoughtful technology. Clear communication. Useful outcomes." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {HOME_PILLARS.map((p, i) => {
              const Icon = PILLAR_ICONS[i % PILLAR_ICONS.length]!;
              const c = ICON_ACCENTS[(i + 3) % ICON_ACCENTS.length]!;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-card"
                >
                  <span className={`grid h-11 w-11 place-items-center rounded-xl ${c.bg}`}>
                    <Icon className={`h-5 w-5 ${c.text}`} />
                  </span>
                  <h3 className="mt-5 text-lg">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHead
            eyebrow="How it works"
            title="A clear path from idea to launch"
            lead="We keep the process straightforward: understand the problem, agree on the scope, build with purpose, and refine together."
            center
          />
          <div className="mt-12">
            <CycleDiagram />
          </div>

        </div>
      </section>

      {/* Project approach */}
      <section className="surface-band border-y border-border py-16 md:py-20">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHead eyebrow="A good starting point" title="Let's solve the right problem first." lead="You don't need a perfect technical brief to get started. Tell us what isn't working, what you'd like to improve, and what a useful result would look like." />
            <ul className="mt-7 space-y-3">
              {["A short conversation to understand your goals", "A clear scope, timeline, and quote before work begins", "Review points and a practical handover at the end"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-ink-foreground shadow-cta">Discuss a Project</Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold shadow-card">View Starting Prices</Link>
            </div>
          </div>
          <FounderCard />
        </div>
      </section>

      {/* Portfolio */}
      <section className="mint-band border-y border-border py-16 md:py-20">
        <div className="container-page">
          <SectionHead
            eyebrow="Selected work"
            title="Work that speaks for itself"
            lead="A selection of technical work and applied problem-solving. More case studies can be added as new client work is published."
            center
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {PORTFOLIO.map((p) => (
              <article key={p.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <span className="inline-flex rounded-full bg-accent-soft px-3 py-1.5 text-xs font-bold text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguards */}
      <section className="bg-ink py-16 text-ink-foreground md:py-20">
        <div className="container-page grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              How we protect you
            </span>
            <h2 className="mt-4 font-display text-2xl font-semibold leading-snug md:text-3xl">
              A clear, collaborative process from start to handover:
            </h2>
            <ul className="mt-7">
              {SAFEGUARDS.map((s) => (
                <li
                  key={s.label}
                  className="flex items-start gap-3 border-b border-ink-foreground/10 py-3.5 last:border-b-0"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p className="text-sm leading-relaxed text-ink-foreground/85">
                    <strong className="font-semibold text-ink-foreground">{s.label}</strong>{" "}
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-ink-foreground/75">
              Every project starts with understanding the need and agreeing on a realistic plan. We keep communication direct, make decisions visible, and focus on solutions that are useful after handover.
            </p>
            <blockquote className="border-l-4 border-gold pl-6 font-display text-lg font-medium leading-relaxed text-ink-foreground">
              "Good digital work starts with a clear problem, a shared plan, and direct communication."
            </blockquote>
            <div className="flex flex-wrap gap-5 text-sm font-semibold">
              <Link to="/pricing" className="text-gold hover:underline">
                See full pricing
              </Link>
              <Link to="/about" className="text-gold hover:underline">
                about who's behind Edurown
              </Link>
            </div>
            <p className="text-base font-medium italic text-ink-foreground/70">
              "Practical solutions, built around your goals."
            </p>
          </div>

        </div>
      </section>

      <QuoteCta
        title="Tell us what you want to build"
        lead="Share your goals and requirements. We'll discuss the right scope and provide a clear, no-obligation quote."
      />

      <section className="surface-band border-t border-border py-16 md:py-20">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-[2.4rem] md:leading-tight">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Send your brief and we'll get back to you directly, usually within the same day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-ink-foreground shadow-cta"
            >
              <Mail className="h-4 w-4" />
              Email Us Directly
            </a>
            <a
              href={CONTACT.whatsapp}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold shadow-card"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
