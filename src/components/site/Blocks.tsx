import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import founderPhoto from "@/assets/founder.jpg";
import { CONTACT, HOME_STEPS } from "@/data/site";

/**
 * A small rotating palette for feature/service icon chips — keeps the
 * brand's gold reserved for links, CTAs, and underlines, while icons
 * across grids get their own legible, inviting colour so they read as
 * distinct, clickable items rather than one flat wash of gold.
 */
export const ICON_ACCENTS = [
  { bg: "bg-[#e7edfa]", text: "text-[#2a4d8f]" }, // dusty blue
  { bg: "bg-[#e3f3ec]", text: "text-[#1f7a5c]" }, // emerald teal
  { bg: "bg-[#f2e9fb]", text: "text-[#6b3fa0]" }, // plum
  { bg: "bg-[#fdece0]", text: "text-[#a8521c]" }, // warm terracotta
  { bg: "bg-[#eef4e4]", text: "text-[#4c7a2c]" }, // sage green
  { bg: "bg-[#fbe8ee]", text: "text-[#af3f65]" }, // rose
] as const;

/** Raw hex twins of ICON_ACCENTS, for inline SVG where Tailwind classes can't reach. */
export const ICON_ACCENT_HEX = [
  "#2a4d8f", // dusty blue
  "#1f7a5c", // emerald teal
  "#6b3fa0", // plum
  "#a8521c", // warm terracotta
  "#4c7a2c", // sage green
  "#af3f65", // rose
] as const;

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-glow border-b border-border">
      <div className="container-page py-16 md:py-20">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
        {children}
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold ${center ? "justify-center" : ""}`}
        >
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl md:text-[2.4rem] md:leading-tight">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{lead}</p>}
    </div>
  );
}

export function QuoteCta({
  title,
  lead,
  primaryLabel = "WhatsApp",
  secondaryLabel = "Email Us",
}: {
  title: string;
  lead: string;
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="container-page">
        <div className="overflow-hidden rounded-3xl bg-ink px-6 py-12 text-center text-ink-foreground md:px-14 md:py-16">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-[2.4rem] md:leading-tight">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-foreground/75">
            {lead}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={CONTACT.whatsapp}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition-colors hover:bg-gold-deep"
            >
              <MessageCircle className="h-4 w-4" />
              {primaryLabel}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-6 py-3.5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-ink-foreground/10"
            >
              <Mail className="h-4 w-4" />
              {secondaryLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FounderCard() {
  return (
    <div className="text-center">
      <img
        src={founderPhoto}
        alt="Stephen, founder of Edurown"
        loading="lazy"
        className="mx-auto aspect-square w-full max-w-[18rem] rounded-2xl object-cover"
      />
      <h3 className="mt-4 text-lg">Stephen — "The Crown"</h3>
      <p className="text-sm text-muted-foreground">IT & AI Consultant</p>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {["Information Technology", "AI & Automation", "Direct Collaboration"].map((b) => (
          <span
            key={b}
            className="rounded-full bg-gold-tint px-3 py-1 text-[0.68rem] font-semibold text-gold-deep"
          >
            {b}
          </span>
        ))}
      </div>
      <Link to="/about" className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline">
        about who's behind Edurown
      </Link>
    </div>
  );
}

/* Circular process diagram — six nodes around a "PROJECTS GROW" hub. */
const CYCLE_POINTS = [
  { x: 270, y: 105, lx: 270, ly: 62, anchor: "middle" as const },
  { x: 412.9, y: 187.5, lx: 448.9, ly: 192.5, anchor: "start" as const },
  { x: 412.9, y: 352.5, lx: 448.9, ly: 357.5, anchor: "start" as const },
  { x: 270, y: 435, lx: 270, ly: 482, anchor: "middle" as const },
  { x: 127.1, y: 352.5, lx: 91.1, ly: 357.5, anchor: "end" as const },
  { x: 127.1, y: 187.5, lx: 91.1, ly: 192.5, anchor: "end" as const },
];

const CYCLE_ARCS = [
  "M 270 105 A 165 165 0 0 1 412.9 187.5",
  "M 412.9 187.5 A 165 165 0 0 1 412.9 352.5",
  "M 412.9 352.5 A 165 165 0 0 1 270 435",
  "M 270 435 A 165 165 0 0 1 127.1 352.5",
  "M 127.1 352.5 A 165 165 0 0 1 127.1 187.5",
];

export function CycleDiagram() {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="mx-auto w-full max-w-[34rem]">
        <svg viewBox="-40 30 620 480" className="h-auto w-full" role="img" aria-label="Edurown process cycle">
          {CYCLE_ARCS.map((d) => (
            <path key={d} d={d} fill="none" stroke="var(--border)" strokeWidth="2" />
          ))}
          <path
            d="M 127.1 187.5 A 165 165 0 0 1 270 105"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="2"
            strokeDasharray="2 6"
          />

          <text
            x="270"
            y="266"
            textAnchor="middle"
            className="fill-muted-foreground font-display text-[13px] font-semibold tracking-[0.16em]"
          >
            CLIENTS
          </text>
          <text
            x="270"
            y="286"
            textAnchor="middle"
            className="fill-muted-foreground font-display text-[13px] font-semibold tracking-[0.16em]"
          >
            RETURN
          </text>

          {CYCLE_POINTS.map((p, i) => (
            <g key={i}>
              <circle
                cx={p.x}
                cy={p.y}
                r="26"
                fill="var(--ink)"
                stroke={ICON_ACCENT_HEX[i % ICON_ACCENT_HEX.length]}
                strokeWidth="2.5"
              />
              <text
                x={p.x}
                y={p.y + 6}
                textAnchor="middle"
                fill={ICON_ACCENT_HEX[i % ICON_ACCENT_HEX.length]}
                className="font-display text-[16px] font-semibold"
              >
                {i + 1}
              </text>
              <text
                x={p.lx}
                y={p.ly}
                textAnchor={p.anchor}
                className="fill-foreground font-display text-[14px] font-semibold"
              >
                {HOME_STEPS[i]?.title}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <ol className="divide-y divide-border">
        {HOME_STEPS.map((s, i) => {
          const c = ICON_ACCENTS[i % ICON_ACCENTS.length]!;
          return (
            <li key={s.title} className="flex gap-4 py-4">
              <span
                className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full font-display text-sm font-semibold ${c.bg} ${c.text}`}
              >
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="mb-0.5 block text-[0.95rem] font-semibold text-foreground">
                  {s.title}
                </strong>
                {s.body}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
