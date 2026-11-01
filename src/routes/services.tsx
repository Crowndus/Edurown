import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { ICON_ACCENTS, PageHero, QuoteCta } from "@/components/site/Blocks";
import { SERVICES_ALL } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Technical Consulting & Software Development | Edurown" },
      {
        name: "description",
        content:
          "Custom web development, data analysis and predictive modeling, algorithmic trading, workflow automation, and system architecture.",
      },
      { property: "og:title", content: "Services | Technical Consulting | Edurown" },
      {
        property: "og:description",
        content:
          "Every project handled personally and matched to your requirements and timeline.",
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
        title="Engineering and data work, done properly."
        lead="Every project below is handled personally and matched to your requirements and timeline."
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
        lead="Send us your project details directly and we'll tell you exactly what it'll take."
        primaryLabel="WhatsApp"
        secondaryLabel="Email Us Directly"
      />
    </>
  );
}
