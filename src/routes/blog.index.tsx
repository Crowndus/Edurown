import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { PageHero, QuoteCta } from "@/components/site/Blocks";
import {
  BLOG_CATEGORIES,
  COMING_SOON_IMAGE,
  COMING_SOON_POST,
  POSTS,
  POST_IMAGES,
} from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Expert Insights from The Crown | Edurown" },
      {
        name: "description",
        content:
          "Straight talk on academic writing, data analysis, research, and technical projects from a Carnegie Mellon-admitted engineer.",
      },
      { property: "og:title", content: "Blog — Expert Insights from The Crown | Edurown" },
      {
        property: "og:description",
        content:
          "Straight talk on academic writing, data analysis, research, and technical projects.",
      },
    ],
  }),
  component: Blog,
});

function Blog() {
  const [active, setActive] = useState("All");
  const posts = active === "All" ? POSTS : POSTS.filter((p) => p.category === active);
  const showComingSoon = active === "All" || active === COMING_SOON_POST.category;
  const totalMinutes = POSTS.reduce((sum, p) => sum + parseInt(p.read, 10), 0);

  const stats = [
    { value: String(POSTS.length), label: "Published Posts" },
    { value: String(totalMinutes), label: "Minutes of Reading" },
    { value: String(BLOG_CATEGORIES.length - 1), label: "Categories" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Expert Insights from The Crown"
        lead="Straight talk on academic writing, data analysis, research, and technical projects from a Carnegie Mellon-admitted engineer."
      >
        <dl className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <dt className="text-3xl font-extrabold text-primary">{s.value}</dt>
              <dd className="mt-1 text-sm font-semibold text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      <section className="py-14 md:py-16">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2.5 text-sm font-bold transition-colors ${
                  active === c
                    ? "bg-ink text-ink-foreground shadow-cta"
                    : "border border-border bg-card text-foreground/80 hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                {POST_IMAGES[p.slug] && (
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="block">
                    <img
                      src={POST_IMAGES[p.slug]}
                      alt={p.title}
                      loading="lazy"
                      className="h-48 w-full object-cover"
                    />
                  </Link>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit rounded-full bg-gold-tint px-3 py-1.5 text-xs font-semibold text-gold-deep">
                    {p.category}
                  </span>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-gold" />
                      {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      {p.read.replace(" read", "")}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl leading-snug">
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-gold">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.cardExcerpt}
                  </p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}

            {showComingSoon && (
              <article className="flex flex-col overflow-hidden rounded-2xl border border-dashed border-border bg-secondary/40">
                <img
                  src={COMING_SOON_IMAGE}
                  alt={COMING_SOON_POST.title}
                  loading="lazy"
                  className="h-48 w-full object-cover opacity-70"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                    {COMING_SOON_POST.category}
                  </span>
                  <span className="mt-4 text-xs font-semibold text-muted-foreground">
                    {COMING_SOON_POST.date}
                  </span>
                  <h3 className="mt-3 text-xl leading-snug">{COMING_SOON_POST.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {COMING_SOON_POST.excerpt}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-muted-foreground">
                    {COMING_SOON_POST.note}
                  </span>
                </div>
              </article>
            )}
          </div>

        </div>
      </section>

      <QuoteCta
        title="Get a Free Quote"
        lead="Tell us about your project and get a free, no-obligation quote within 24 hours."
      />
    </>
  );
}
