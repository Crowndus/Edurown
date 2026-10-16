import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HelpWidgets } from "@/components/site/HelpWidgets";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { RouteProgress } from "@/components/site/RouteProgress";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-ink-foreground transition-colors hover:bg-ink/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-ink-foreground transition-colors hover:bg-ink/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent-soft"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Edurown — Digital Solutions for Growing Businesses" },
      {
        name: "description",
        content:
          "Modern websites, practical AI automations, education technology, digital design, and data solutions for organisations worldwide.",
      },
      { name: "author", content: "Edurown" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Edurown — Direct Academic & Technical Writing Support" },
      { name: "twitter:title", content: "Edurown — Direct Academic & Technical Writing Support" },
      { property: "og:description", content: "Work one-on-one with a Carnegie Mellon-admitted engineer for essays, research papers, dissertations, data analysis, and technical projects. No middlemen." },
      { name: "twitter:description", content: "Work one-on-one with a Carnegie Mellon-admitted engineer for essays, research papers, dissertations, data analysis, and technical projects. No middlemen." },
      { property: "og:image", content: "https://edurown.vercel.app/og-image.jpg" },
      { name: "twitter:image", content: "https://edurown.vercel.app/og-image.jpg" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const mainRef = useRef<HTMLElement>(null);

  // Re-trigger the page-load fade on every route change without unmounting
  // the outlet subtree (keeps query cache + scroll restoration intact).
  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    el.classList.remove("route-fade");
    // Force reflow so the animation restarts even though the class name is unchanged.
    void el.offsetWidth;
    el.classList.add("route-fade");
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouteProgress />
      <ScrollReveal />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main ref={mainRef} className="route-fade flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <HelpWidgets />
      </div>
    </QueryClientProvider>
  );
}
