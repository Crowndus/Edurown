import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, UserCheck, Lock, FileCheck, ExternalLink } from "lucide-react";
import founderPhoto from "@/assets/founder.jpg";
import { ICON_ACCENTS, PageHero, SectionHead } from "@/components/site/Blocks";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Edurown — A Digital Solutions Studio" },
      {
        name: "description",
        content:
          "Meet the people behind Edurown, direct, personal digital solutions for clients abroad.",
      },
      { property: "og:title", content: "About Edurown — Direct Academic Support, No Middlemen" },
      {
        property: "og:description",
        content:
          "Meet the people behind Edurown, building practical digital experiences for businesses, educators, and teams worldwide.",
      },
    ],
  }),
  component: About,
});

const VALUES = [
  {
    icon: UserCheck,
    title: "Direct Communication",
    body: "You always know who you're talking to and where your project stands.",
  },
  {
    icon: Lock,
    title: "Confidential & Secure",
    body: "Your information and your work are never shared.",
  },
  {
    icon: FileCheck,
    title: "Thoughtful, Useful Work",
    body: "Every solution is shaped around your goals, constraints, audience, and intended use.",
  },
];

const TEAM = [
  {
    photo: founderPhoto,
    alt: "Stephen, founder and lead researcher at Edurown",
    role: "Founder",
    name: 'Stephen — "The Crown"',
    bio: "A Kenya-based IT professional and digital builder who founded Edurown to help organisations turn ideas and operational challenges into useful digital solutions. He holds a First-Class Honours degree in Information Technology and has been admitted to Carnegie Mellon University Africa's Master's program in Engineering AI for Fall 2026. Since 2024 he's worked as a freelance IT and AI consultant, handling research, data analysis, and technical writing for clients internationally, bringing that same direct, hands-on approach to every Edurown project.",
    cta: { label: "Connect with Stephen", href: CONTACT.whatsapp },
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Edurown"
        title="A hands-on digital partner for practical problems."
        lead="Edurown is a digital solutions studio helping businesses, educators, and growing teams improve how they show up online and get work done. We focus on useful websites, practical automation, education technology, design, and data support — with direct communication from discovery to handover."
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <SectionHead eyebrow="The Team" title="Behind Edurown" center />
          <div className="mx-auto mt-10 max-w-3xl">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left"
              >
                <div className="w-32 shrink-0 overflow-hidden rounded-2xl sm:w-44 lg:w-64">
                  <img
                    src={member.photo}
                    alt={member.alt}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {member.role}
                  </span>
                  <h3 className="mt-3 text-2xl">{member.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{member.bio}</p>
                  <a
                    href={member.cta.href}
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-ink-foreground shadow-cta"
                  >
                    {member.cta.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mint-band border-y border-border py-16 md:py-20">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {VALUES.map((v, i) => {
            const c = ICON_ACCENTS[i % ICON_ACCENTS.length]!;
            return (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${c.bg}`}>
                  <v.icon className={`h-5 w-5 ${c.text}`} />
                </span>
                <h3 className="mt-5 text-lg">{v.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="rounded-3xl bg-ink px-6 py-12 text-center text-ink-foreground md:px-14 md:py-16">
            <h2 className="mx-auto max-w-2xl text-3xl md:text-[2.4rem] md:leading-tight">
              Want to work together?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-foreground/75">
              Send your brief and we'll reply directly, usually the same day.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-ink-foreground shadow-cta"
              >
                Start a Project
              </Link>
              <a
                href={CONTACT.whatsapp}
                className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/25 px-6 py-3.5 text-sm font-bold text-ink-foreground hover:bg-ink-foreground/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
