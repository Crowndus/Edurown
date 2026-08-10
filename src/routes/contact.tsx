import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/site/Blocks";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Edurown — Talk Directly to the Person Doing the Work" },
      {
        name: "description",
        content:
          "Message Edurown on WhatsApp or email with your topic, scope and deadline for a direct reply, usually the same day.",
      },
      { property: "og:title", content: "Contact Edurown — Talk Directly to Us" },
      {
        property: "og:description",
        content: "WhatsApp or email your brief and get a direct reply, no forms or account setup.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk directly to the person doing the work."
        lead="No contact forms, no ticket queues. Send your topic, scope, and deadline and you'll get a direct reply, usually the same day."
      />

      <section className="py-16 md:py-20">
        <div className="container-page grid gap-5 md:grid-cols-2">
          <a
            href={CONTACT.whatsapp}
            className="group rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft">
              <MessageCircle className="h-6 w-6 text-primary" />
            </span>
            <h2 className="mt-6 text-2xl">WhatsApp</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Fastest way to reach us. Send your brief and get a direct reply.
            </p>
            <span className="mt-5 inline-flex text-base font-bold text-primary group-hover:underline">
              {CONTACT.phone}
            </span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="group rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-soft">
              <Mail className="h-6 w-6 text-accent" />
            </span>
            <h2 className="mt-6 text-2xl">Email</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Best for detailed briefs, attachments, and formatting guides.
            </p>
            <span className="mt-5 inline-flex break-all text-base font-bold text-accent group-hover:underline">
              {CONTACT.email}
            </span>
          </a>
        </div>

        <div className="container-page mt-5 grid gap-5 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-secondary/40 p-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-card shadow-card">
              <Clock className="h-5 w-5 text-foreground/70" />
            </span>
            <h3 className="mt-5 text-lg">Response Time</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              Usually the same day, often within a few hours.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-secondary/40 p-8">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-card shadow-card">
              <MapPin className="h-5 w-5 text-foreground/70" />
            </span>
            <h3 className="mt-5 text-lg">Working Worldwide</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
              Clients across time zones, with deadlines matched to yours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
