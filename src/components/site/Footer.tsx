import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe, Github, Linkedin, MessageCircle } from "lucide-react";
import { CONTACT, FOOTER_NAV } from "@/data/site";

const SOCIALS = [
  { href: "https://github.com/Crowndus", label: "GitHub", icon: Github },
  {
    href: "https://www.linkedin.com/in/stephen-kisangi-ba3b12231/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  { href: CONTACT.whatsapp, label: "WhatsApp", icon: MessageCircle },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <span className="flex items-center gap-2.5">
            <svg viewBox="0 0 64 64" className="h-10 w-10" fill="none" stroke="var(--gold)" strokeWidth="1.5">
              <circle cx="32" cy="32" r="30" strokeWidth="1" />
              <path d="M16 40 L16 26 L23 33 L32 20 L41 33 L48 26 L48 40 Z" strokeLinejoin="round" />
              <line x1="16" y1="44" x2="48" y2="44" />
            </svg>
            <span className="font-display text-xl font-bold tracking-tight">
              Edu<span className="text-gold">rown</span>
            </span>
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
            Digital solutions for growing businesses, educators, and teams — from web development and automation to education technology and data support.
          </p>

          <div className="mt-5 flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink-foreground/20 text-ink-foreground/80 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink-foreground/10 px-3 py-1.5 text-xs font-semibold text-ink-foreground/80">
            <Globe className="h-3.5 w-3.5 text-gold" />
            Remote-First — Serving Clients Worldwide
          </span>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-ink-foreground/60">
            Navigate
          </h4>
          <svg
            viewBox="0 0 46 10"
            className="mt-1.5 h-2 w-11"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 6 L9 2 L17 8 L25 2 L33 8 L41 2 L45 5" />
          </svg>
          <ul className="mt-4 space-y-2.5 text-sm">
            {FOOTER_NAV.map((item) => (
              <li key={item.to} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="text-[0.6rem] text-gold">
                  ◆
                </span>
                <Link
                  to={item.to}
                  className="text-ink-foreground/80 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-ink-foreground/60">
            Get In Touch
          </h4>
          <svg
            viewBox="0 0 46 10"
            className="mt-1.5 h-2 w-11"
            fill="none"
            stroke="var(--gold)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M1 6 L9 2 L17 8 L25 2 L33 8 L41 2 L45 5" />
          </svg>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 text-ink-foreground/80 transition-colors hover:text-gold"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span className="min-w-0 break-all">{CONTACT.email}</span>
              </a>
            </li>
            <li>
              <a
                href={CONTACT.whatsapp}
                className="flex items-center gap-2.5 text-ink-foreground/80 transition-colors hover:text-gold"
              >
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-ink-foreground/80">
              <MapPin className="h-4 w-4 shrink-0 text-gold" />
              {CONTACT.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10 py-6">
        <p className="container-page text-center text-xs text-ink-foreground/55">
          © 2026 Edurown. All rights reserved. Operations support by Humphrey.
        </p>
      </div>
    </footer>
  );
}
