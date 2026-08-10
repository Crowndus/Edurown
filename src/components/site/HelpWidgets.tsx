import { useState } from "react";
import { MessageCircle, X, HelpCircle, ChevronRight, Mail } from "lucide-react";
import founderPhoto from "@/assets/founder.jpg";
import { CONTACT, FAQS } from "@/data/site";

export function HelpWidgets() {
  const [faqOpen, setFaqOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [openQ, setOpenQ] = useState<number | null>(null);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50">
      <div className="container-page pointer-events-none flex flex-col items-end gap-3 pb-5">
        {faqOpen && (
          <div className="pointer-events-auto w-full max-w-sm rounded-2xl border border-border bg-card p-4 shadow-lift">
            <div className="flex items-center justify-between gap-3">
              <strong className="text-sm font-semibold">Quick Questions</strong>
              <button
                type="button"
                aria-label="Close quick questions"
                onClick={() => setFaqOpen(false)}
                className="rounded-full p-1 text-muted-foreground hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="mt-3 space-y-2">
              {FAQS.map((f, i) => (
                <li key={f.q} className="rounded-xl bg-secondary/70">
                  <button
                    type="button"
                    onClick={() => setOpenQ(openQ === i ? null : i)}
                    className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm font-semibold"
                  >
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 text-gold transition-transform ${openQ === i ? "rotate-90" : ""}`}
                    />
                    <span className="min-w-0">{f.q}</span>
                  </button>
                  {openQ === i && (
                    <p className="px-3 pb-3 text-xs leading-relaxed text-muted-foreground">{f.a}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {chatOpen && (
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
            <div className="flex items-start justify-between gap-3 bg-ink px-4 py-3.5 text-ink-foreground">
              <div className="flex min-w-0 items-center gap-3">
                <span className="relative shrink-0">
                  <img
                    src={founderPhoto}
                    alt="Stephen"
                    loading="lazy"
                    className="h-10 w-10 rounded-full border-2 border-gold object-cover"
                  />
                  <span className="pulse-dot absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink bg-[#2ecc71]" />
                </span>
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-semibold">Stephen — "The Crown"</h4>
                  <span className="text-xs text-ink-foreground/70">Online · Replies in minutes</span>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close chat"
                onClick={() => setChatOpen(false)}
                className="shrink-0 rounded-full p-1 hover:bg-ink-foreground/10"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2.5 p-4 text-sm">
              <div className="flex items-end gap-2">
                <img
                  src={founderPhoto}
                  alt="Stephen"
                  loading="lazy"
                  className="h-8 w-8 shrink-0 rounded-full object-cover"
                />
                <div className="space-y-2">
                  <p className="rounded-2xl rounded-bl-sm bg-secondary px-3.5 py-2.5">
                    Hi there! 👋 I'm Stephen — "The Crown".
                  </p>
                  <p className="rounded-2xl rounded-bl-sm bg-secondary px-3.5 py-2.5">
                    Need help with a paper, data analysis, or technical project? I'm here to help!
                  </p>
                </div>
              </div>
              <p className="rounded-2xl bg-gold-tint px-3.5 py-2.5 text-foreground">
                💡 Send me your topic and I'll send you a{" "}
                <strong className="font-semibold">free 300-word sample</strong> — no strings
                attached.
              </p>
              <div className="flex gap-2 pt-1">
                <a
                  href={CONTACT.whatsapp}
                  className="flex-1 rounded-md bg-ink px-3 py-2.5 text-center text-xs font-semibold text-ink-foreground"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-2.5 text-xs font-semibold"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Email
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="pointer-events-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setFaqOpen((v) => !v);
              setChatOpen(false);
            }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold shadow-card"
          >
            <HelpCircle className="h-4 w-4 text-gold" />
            FAQ
          </button>
          <button
            type="button"
            onClick={() => {
              setChatOpen((v) => !v);
              setFaqOpen(false);
            }}
            className="inline-flex items-center gap-2.5 rounded-full bg-ink py-2 pl-2 pr-4 text-sm font-semibold text-ink-foreground shadow-lift"
          >
            <span className="relative">
              <img
                src={founderPhoto}
                alt="Stephen"
                loading="lazy"
                className="h-9 w-9 rounded-full border-2 border-gold object-cover"
              />
            </span>
            Chat with Crowndus
            <span className="pulse-dot h-2.5 w-2.5 rounded-full bg-[#2ecc71]" />
          </button>
        </div>
      </div>
    </div>
  );
}
