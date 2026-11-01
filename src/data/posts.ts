export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: { label?: string; text: string }[] };

export type Post = {
  slug: string;
  category: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
  cardExcerpt: string;
  blocks: PostBlock[];
  ctaTitle: string;
  ctaBody: string;
  ctaLabel: string;
};

export const POSTS: Post[] = [
  {
    slug: "why-python-and-pandas-are-revolutionizing-data-analysis",
    category: "Data Science",
    date: "July 24, 2026",
    read: "4 min read",
    title: "Why Python and Pandas are Revolutionizing Data Analysis",
    excerpt:
      "How Python and Pandas turn messy spreadsheets into repeatable, auditable data pipelines, and what that changes for a small team.",
    cardExcerpt:
      "Why Python and Pandas have become the default toolkit for fast, repeatable data analysis.",
    blocks: [
      {
        type: "p",
        text: "Most data work still starts the same way: a folder of spreadsheets, a few manual fixes, and a chart nobody can reproduce next month. Python and Pandas change that.",
      },
      { type: "h2", text: "From One-Off Spreadsheets to Repeatable Pipelines" },
      {
        type: "p",
        text: "With Pandas, every cleaning step is code. Load the data, fix the types, handle missing values, merge your sources, and export the result. Run it again tomorrow on fresh data and you get the same output, with no manual clicking.",
      },
      { type: "h2", text: "What Makes It Powerful" },
      {
        type: "list",
        items: [
          {
            label: "Fast on real data:",
            text: "vectorized operations handle large tables without the lag of a spreadsheet.",
          },
          {
            label: "Auditable:",
            text: "every transformation is written down, so anyone can see how a number was produced.",
          },
          {
            label: "Connected:",
            text: "Pandas works with Scikit-learn for predictive models and with plotting libraries for interactive dashboards.",
          },
        ],
      },
      { type: "h2", text: "Where It Pays Off" },
      {
        type: "p",
        text: "Cleaning inconsistent exports, joining data from different systems, building forecasts, and automating weekly reports are the jobs where teams save the most hours.",
      },
      { type: "h2", text: "Getting Started" },
      {
        type: "p",
        text: "Pick one painful, repetitive report. Rebuild it as a short script, then schedule it. That single step is often enough to show what automation can do for the rest of your data work.",
      },
    ],
    ctaTitle: "Have Data That Needs Taming?",
    ctaBody: "Book a free 30-minute scoping call to talk through your data project.",
    ctaLabel: "Book a Free Consultation",
  },
  {
    slug: "building-scalable-web-apps-react-19-and-tanstack",
    category: "Web Development",
    date: "July 24, 2026",
    read: "5 min read",
    title: "Building Scalable Web Apps: A Look at React 19 and TanStack",
    excerpt:
      "A practical look at building fast, maintainable web apps with React 19 and the TanStack ecosystem.",
    cardExcerpt:
      "How React 19 and TanStack help you build web apps that stay fast and easy to change.",
    blocks: [
      {
        type: "p",
        text: "A scalable web app is not just one that survives traffic. It is one the team can keep changing without fear. React 19 and the TanStack libraries make that much easier.",
      },
      { type: "h2", text: "Why React 19" },
      {
        type: "p",
        text: "React 19 improves how apps handle async work, forms, and server rendering. That means less boilerplate and fewer loading-state bugs in everyday code.",
      },
      { type: "h2", text: "What TanStack Adds" },
      {
        type: "list",
        items: [
          {
            label: "Router:",
            text: "type-safe, file-based routes so broken links and bad params are caught at build time.",
          },
          {
            label: "Query:",
            text: "caching, background refetching, and request deduplication for server data.",
          },
          {
            label: "Start:",
            text: "server-rendered, full-stack routing that deploys cleanly to platforms like Vercel.",
          },
        ],
      },
      { type: "h2", text: "Patterns That Scale" },
      {
        type: "p",
        text: "Keep routes thin, put data fetching in one layer, share design tokens through a single stylesheet, and reuse small UI primitives. This site is built exactly that way.",
      },
      { type: "h2", text: "The Takeaway" },
      {
        type: "p",
        text: "Pick tools that make correctness the default. The payoff shows up months later, when adding a feature takes an afternoon instead of a week.",
      },
    ],
    ctaTitle: "Planning a Web App?",
    ctaBody: "Book a free 30-minute scoping call to talk through your architecture.",
    ctaLabel: "Book a Free Consultation",
  },
  {
    slug: "how-i-built-a-deriv-powered-algorithmic-trading-platform",
    category: "Algorithmic Trading",
    date: "July 24, 2026",
    read: "5 min read",
    title: "How I Built a Deriv-Powered Algorithmic Trading Platform",
    excerpt:
      "A look at the architecture behind a real-time trading platform built on the Deriv API: data streaming, strategy logic, and risk controls.",
    cardExcerpt:
      "The architecture behind a real-time algorithmic trading platform built on the Deriv API.",
    blocks: [
      {
        type: "p",
        text: "Algorithmic trading looks glamorous from the outside. In practice it is an engineering problem: reliable data in, clear rules in the middle, and strict risk controls on the way out.",
      },
      { type: "h2", text: "The Architecture" },
      {
        type: "p",
        text: "The platform connects to the Deriv WebSocket API to stream live market data, so decisions are made on fresh ticks instead of polled snapshots.",
      },
      {
        type: "list",
        items: [
          {
            label: "Data layer:",
            text: "streams ticks and candles over WebSocket and normalizes them for the strategy.",
          },
          {
            label: "Strategy layer:",
            text: "turns market data into signals using explicit, testable rules.",
          },
          {
            label: "Execution layer:",
            text: "places and monitors trades through the API and handles errors and reconnects.",
          },
          {
            label: "Risk layer:",
            text: "caps stake size, limits losses, and can halt trading automatically.",
          },
        ],
      },
      { type: "h2", text: "Lessons Learned" },
      {
        type: "p",
        text: "Connections drop, so reconnect logic matters more than the strategy. Log everything, because you cannot improve what you cannot replay. And put risk rules in code, not in your head.",
      },
      { type: "h2", text: "A Note on Risk" },
      {
        type: "p",
        text: "Trading carries real financial risk, and no bot removes it. The goal of good engineering is to make behavior predictable and losses bounded.",
      },
    ],
    ctaTitle: "Want a Trading System Built?",
    ctaBody: "Book a free 30-minute scoping call to discuss your strategy and architecture.",
    ctaLabel: "Book a Free Consultation",
  },
];

export const COMING_SOON_POST = {
  category: "Algorithmic Trading",
  date: "Coming Soon",
  title: "Designing Risk Controls for Automated Trading Systems",
  excerpt:
    "A practical look at position sizing, stop rules, and kill switches for trading bots.",
  note: "Coming soon...",
};

export const BLOG_CATEGORIES = ["All", "Data Science", "Web Development", "Algorithmic Trading"];

export const POST_IMAGES: Record<string, string> = {
  "why-python-and-pandas-are-revolutionizing-data-analysis":
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?fm=jpg&q=80&w=900&fit=crop",
  "building-scalable-web-apps-react-19-and-tanstack":
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?fm=jpg&q=80&w=900&fit=crop",
  "how-i-built-a-deriv-powered-algorithmic-trading-platform":
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=80&w=900&fit=crop",
};

export const COMING_SOON_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=jpg&q=80&w=900&fit=crop";
