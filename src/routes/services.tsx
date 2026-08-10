import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ICON_ACCENTS, PageHero, QuoteCta } from "@/components/site/Blocks";
import { SERVICES_ALL } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Academic & Technical Work, Done Properly | Edurown" },
      {
        name: "description",
        content:
          "Essays, research papers, dissertations, data analysis, lab reports, editing, coursework, case studies, literature reviews and term papers.",
      },
      { property: "og:title", content: "Services — Academic & Technical Work | Edurown" },
      {
        property: "og:description",
        content:
          "Every project handled personally, matched to your brief, formatting, and deadline.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Academic and technical work, done properly."
        lead="Every project below is handled personally, matched to your brief, formatting, and deadline."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_ALL.map((s, i) => {
            const c = ICON_ACCENTS[i % ICON_ACCENTS.length]!;
            return (
              <article
                key={s.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${c.bg}`}>
                  <Check className={`h-5 w-5 ${c.text}`} />
                </span>
                <h3 className="mt-5 text-lg">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <QuoteCta
        title="Not sure which service you need?"
        lead="Send us your brief directly and we'll tell you exactly what it'll take."
        primaryLabel="WhatsApp"
        secondaryLabel="Email Us Directly"
      />
    </>
  );
}
