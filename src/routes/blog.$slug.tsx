import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock, MessageCircle } from "lucide-react";
import { POSTS, type Post, type PostBlock } from "@/data/posts";
import { CONTACT } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — Edurown Blog" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Edurown Blog` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData() as { post: Post };

  return (
    <>
      <section className="hero-glow border-b border-border">
        <div className="container-page py-14 md:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
            <span className="rounded-full bg-card px-3 py-1.5 text-accent shadow-card">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.read}
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl leading-[1.1] md:text-5xl">{post.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {post.excerpt}
          </p>
        </div>
      </section>

      <article className="py-14 md:py-16">
        <div className="container-page max-w-3xl">
          {post.blocks.map((block: PostBlock, i: number) => {
            if (block.type === "h2")
              return (
                <h2 key={i} className="mt-12 text-3xl first:mt-0">
                  {block.text}
                </h2>
              );
            if (block.type === "h3")
              return (
                <h3 key={i} className="mt-8 text-xl">
                  {block.text}
                </h3>
              );
            if (block.type === "list")
              return (
                <ul key={i} className="mt-5 space-y-3">
                  {block.items.map((item: { label?: string; text: string }) => (
                    <li
                      key={item.text}
                      className="rounded-2xl border border-border bg-card p-4 text-base leading-relaxed shadow-card"
                    >
                      {item.label && <strong className="font-bold">{item.label}</strong>}{" "}
                      {item.text}
                    </li>
                  ))}
                </ul>
              );
            return (
              <p key={i} className="mt-5 text-base leading-[1.8] text-muted-foreground">
                {block.text}
              </p>
            );
          })}

          <div className="mt-14 rounded-3xl bg-ink p-8 text-center text-ink-foreground md:p-10">
            <h3 className="text-2xl">{post.ctaTitle}</h3>
            <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-foreground/75">
              {post.ctaBody}
            </p>
            <a
              href={CONTACT.whatsapp}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-ink-foreground shadow-cta"
            >
              <MessageCircle className="h-4 w-4" />
              {post.ctaLabel}
            </a>
          </div>
        </div>
      </article>
    </>
  );
}
