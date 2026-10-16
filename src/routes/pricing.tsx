import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, MessageCircle, Mail } from "lucide-react";
import { FounderCard, PageHero, SectionHead } from "@/components/site/Blocks";
import { CONTACT, PRICING_DIFFERENCE, PRICING_GROUPS, SAFEGUARDS } from "@/data/site";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Straightforward Starting Rates | Edurown" },
      {
        name: "description",
        content:
          "Indicative pricing for websites, automation, education technology, design, data, and technical support. Exact quotes depend on scope and deliverables.",
      },
      { property: "og:title", content: "Pricing — Straightforward Starting Rates | Edurown" },
      {
        property: "og:description",
        content:
          "Starting points, not a checkout page. Message your brief and we'll confirm the exact price.",
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Straightforward starting rates."
        lead="Every project is different. Share your goals, required features, timeline, and budget range. We'll suggest a practical scope and confirm the quote before work begins."
      />

      {PRICING_GROUPS.map((group, gi) => (
        <section
          key={group.group}
          className={
            gi % 2 === 1
              ? "surface-band border-y border-border py-14 md:py-16"
              : "py-14 md:py-16"
          }
        >
          <div className="container-page">
            <span className="inline-flex rounded-full bg-primary-soft px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-foreground/70">
              {group.group}
            </span>
            <ul className="mt-7 space-y-3">
              {group.rows.map((row) => (
                <li
                  key={row.title}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card sm:p-6"
                >
                  <div className="min-w-0">
                    <h3 className="text-lg">{row.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {row.body}
                    </p>
                  </div>
                  <div className="shrink-0 text-right">
                    <span className="block text-lg font-extrabold text-primary sm:text-xl">
                      {row.price}
                    </span>
                    {row.unit && (
                      <span className="text-xs font-semibold text-muted-foreground">
                        {row.unit}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="mint-band border-y border-border py-16 md:py-20">
        <div className="container-page grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHead
              eyebrow="Before you commit"
              title="Clear scope. Direct collaboration. Practical delivery."
              lead="We keep the process direct: agree on the outcome, scope, timeline, and deliverables before work begins."
            />
            <ul className="mt-7 space-y-3">
              {PRICING_DIFFERENCE.map((d) => (
                <li key={d.label} className="flex items-start gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>
                    <strong className="font-bold">{d.label}</strong> {d.body}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CONTACT.whatsapp}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-ink-foreground shadow-cta"
              >
                Discuss Your Project
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold shadow-card"
              >
                Meet Stephen
              </Link>
            </div>
          </div>
          <FounderCard />
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHead
            eyebrow="How we protect you"
            title="A clear process from day one"
            center
          />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {SAFEGUARDS.map((s) => (
              <li
                key={s.label}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-card"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary-soft">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </span>
                <p className="text-sm leading-relaxed">
                  <strong className="font-bold">{s.label}</strong>{" "}
                  {s.body.replace(", no extra charges.", " - no extra charges.")}
                </p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
            For larger projects, we can agree on milestones and review points so expectations stay clear on both sides.
          </p>
          <blockquote className="mx-auto mt-8 max-w-3xl rounded-3xl bg-ink p-7 text-center text-lg font-semibold leading-relaxed text-ink-foreground">
            "Good digital work starts with a clear problem, a shared plan, and direct communication."
          </blockquote>
        </div>
      </section>

      <section className="surface-band border-t border-border py-16 md:py-20">
        <div className="container-page text-center">
          <h2 className="mx-auto max-w-2xl text-3xl md:text-[2.4rem] md:leading-tight">
            Get an exact price for your project
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Share your project goals, key requirements, and preferred timeline. We'll discuss the scope and provide a clear quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={CONTACT.whatsapp}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-ink-foreground shadow-cta"
            >
              <MessageCircle className="h-4 w-4" />
              Message on WhatsApp
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-bold shadow-card"
            >
              <Mail className="h-4 w-4 text-accent" />
              Email Directly
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
