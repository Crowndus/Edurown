import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, UserRound, PenLine, CircleDollarSign, FileText, Mails } from "lucide-react";
import { NAV, CONTACT } from "@/data/site";
import { Logo } from "./Logo";

const NAV_ICONS = [UserRound, PenLine, CircleDollarSign, FileText, Mails] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink-foreground/10 bg-ink/95 text-ink-foreground backdrop-blur"
          : "border-border bg-surface/95 backdrop-blur"
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center gap-4 sm:gap-6">
        <Link to="/" className="min-w-0 shrink" onClick={() => setOpen(false)}>
          <Logo dark={scrolled} />
        </Link>


        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {NAV.map((item, i) => {
            const Icon = NAV_ICONS[i % NAV_ICONS.length]!;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`nav-underline group flex items-center gap-1.5 rounded-md px-3 py-2.5 text-[0.85rem] font-medium transition-colors hover:text-gold ${
                  scrolled ? "text-ink-foreground/85" : "text-secondary-foreground"
                }`}
                activeProps={{ className: "nav-underline-active text-gold" }}
              >
                <Icon className="h-4 w-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <a
            href={`mailto:${CONTACT.email}`}
            className={`hidden items-center whitespace-nowrap rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors md:inline-flex ${
              scrolled
                ? "border-gold text-gold hover:bg-gold hover:text-ink"
                : "border-ink text-ink hover:bg-ink hover:text-ink-foreground"
            }`}
          >
            Email Directly
          </a>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-gold px-4 py-2.5 text-[0.8rem] font-semibold text-white shadow-gold transition-colors hover:bg-gold-deep sm:px-5 sm:text-sm"
          >
            Start a Project
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border lg:hidden ${
              scrolled ? "border-ink-foreground/25 text-ink-foreground" : "border-border text-foreground"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

      </div>

      {open && (
        <nav className="border-t border-border bg-surface lg:hidden">
          <div className="container-page flex flex-col py-3">
            {NAV.map((item, i) => {
              const Icon = NAV_ICONS[i % NAV_ICONS.length]!;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2.5 border-b border-border/70 px-1 py-3.5 text-sm font-medium text-secondary-foreground"
                  activeProps={{ className: "text-gold" }}
                >
                  <Icon className="h-4 w-4 shrink-0 text-gold" />
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`mailto:${CONTACT.email}`}
              className="px-1 py-3.5 text-sm font-semibold text-primary"
            >
              Email Directly
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
