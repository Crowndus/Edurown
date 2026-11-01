export const CONTACT = {
  email: "stephen.crowndus1@gmail.com",
  phone: "+254 792 915655",
  whatsapp: "https://wa.me/254792915655",
  location: "Nairobi, Kenya",
};

export const NAV = [
  { to: "/about", label: "Want to Know About Edurown?" },
  { to: "/services", label: "Services we Offer" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
] as const;

export const FOOTER_NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export const MARQUEE_ITEMS = [
  "Data Science & Machine Learning",
  "Full-Stack Web Development",
  "Algorithmic Trading Systems",
  "Data & Statistical Analysis",
  "Web Development",
  "Coding Projects",
  "Case Studies",
  "Data Analysis & Visualization",
  "Technical Consulting & Strategy",
];

export const TRUST_BADGES = [
  "Production-Grade Code",
  "Custom Data Pipelines",
  "Scalable Architecture",
];

export const HOME_CHIPS = [
  "Data Science & Machine Learning",
  "Full-Stack Web Development",
  "Algorithmic Trading Systems",
  "Data Analysis",
  "Data Analysis & Visualization",
  "Case Studies",
];

export const HOME_SERVICES = [
  {
    title: "Custom Web Applications",
    body: "Fast, responsive, scalable web apps built with React, Next.js, and modern backend APIs.",
  },
  {
    title: "Data Analysis & Predictive Modeling",
    body: "Python, Pandas, and Scikit-learn pipelines, models, and dashboards that turn raw data into decisions.",
  },
  {
    title: "System Architecture & Documentation",
    body: "Robust architectures and clear, professional technical documentation for your engineering projects.",
  },
  {
    title: "Workflow Automation & Scripting",
    body: "Automate manual processes, web scraping, and data entry to save hundreds of hours.",
  },
  {
    title: "Algorithmic Trading & FinTech",
    body: "Real-time trading bots, market data pipelines, and risk-management algorithms.",
  },
  {
    title: "Security Reviews & Code Audits",
    body: "Security assessments and line-by-line code review with clear, actionable findings.",
  },
];

export const HOME_PILLARS = [
  {
    title: "You Deal Directly With Us",
    body: "No bidding pools or account managers, you talk directly with the person doing the work.",
  },
  {
    title: "Confidential, Always",
    body: "Your details and your work stay private from the first message to final delivery.",
  },
  {
    title: "Built for Clients Worldwide",
    body: "Comfortable working across time zones, currencies, and modern development standards.",
  },
];

export const HOME_STEPS = [
  {
    title: "Visit & Browse",
    body: "You look through services, pricing, and background, no account required.",
  },
  { title: "Reach Out", body: "Book a free scoping call, or message directly on WhatsApp or email." },
  {
    title: "Confirm Scope",
    body: "Instructions, expectations, deadline, and price agreed before anything starts.",
  },
  { title: "Work Begins", body: "Handled personally, matched exactly to your brief." },
  {
    title: "Deliver & Revise",
    body: "Finished work delivered on time, with revisions until it's right.",
  },
  {
    title: "Payment",
    body: "Settled once the work meets your brief, straightforward, on both sides.",
  },
];

export const CAUTION_POINTS = [
  "Book a free scoping call before you commit",
  "Split payment into milestones on larger projects",
  "See exactly who you're talking to, real name, direct line",
];

export const SAFEGUARDS = [
  {
    label: "Free Consultation:",
    body: "Book a 30-minute technical scoping call to discuss your project architecture before you commit.",
  },
  {
    label: "Milestone payments:",
    body: "50% upfront, 50% when you're happy with the build.",
  },
  {
    label: "Unlimited revisions:",
    body: "We tweak until it matches your brief, no extra charges.",
  },
  { label: "Direct WhatsApp:", body: "Chat with Stephen directly. No tickets, no bots." },
];

export const TESTIMONIALS = [
  {
    quote:
      "\"Stephen conducted a comprehensive security review for our internal systems. The documentation was thorough, and he clearly explained complex vulnerabilities to our team. He\u2019s the real deal.\"",
    name: "Roseline",
    role: "Operations Director, USA",
  },
  {
    quote:
      "\"We were completely stuck trying to build a predictive model for our sales data. Stephen not only built the data pipeline perfectly but walked us through the architecture step-by-step. Clean code, clear documentation, and we actually understood the model this time. Highly recommend.\"",
    name: "Brandon",
    role: "Data Manager, Los Angeles",
  },
];

export const PORTFOLIO = [
  {
    tag: "Data Science",
    title: "Lung Cancer Data Analysis",
    body: "Processed a dataset of 10,000+ patient records to analyze treatment outcomes by ethnicity, cancer stage, and smoking history. Delivered interactive visualizations and a clean Jupyter notebook with fully documented Pandas code.",
    stack: ["Python", "Pandas", "Data Visualization"],
  },
  {
    tag: "Cybersecurity",
    title: "NCL Spring 2026 Team Game",
    body: "Competed in the National Cyber League Spring 2026 team game, tackling challenges across OSINT, Cryptography, Forensics, Log Analysis, Network Traffic Analysis, and Password Cracking. Achieved 100% accuracy on completed challenges.",
    stack: ["OSINT", "Forensics", "Network Analysis"],
  },
];

export const FAQS = [
  {
    q: "Do you help with academic essays or assignments?",
    a: "No. Edurown is a technical consulting agency. We do not provide academic ghostwriting or homework help. We build software, analyze data, and provide technical documentation for businesses, startups, and professionals.",
  },
  {
    q: "What services do you specialize in?",
    a: "We focus on full-stack web development (React, Next.js), data analysis and predictive modeling (Python, Pandas), algorithmic trading bots, and system architecture documentation.",
  },
  {
    q: "How do we get started on a project?",
    a: "We begin with a free 30-minute technical scoping call to understand your requirements, after which we provide a clear timeline, architecture plan, and fixed price.",
  },
  {
    q: "How are pricing and timelines determined?",
    a: "Pricing is based on the technical complexity and scope of the project, not by the word count or page length. We provide fixed-price quotes so you know exactly what you are paying before we write a single line of code.",
  },
];

export const SERVICES_ALL = [
  {
    title: "Custom Web Application Development",
    body: "We build fast, responsive, and scalable web apps using React, Next.js, and modern backend APIs.",
  },
  {
    title: "Data Analysis & Predictive Modeling",
    body: "Transform raw data into actionable insights. We use Python, Pandas, and Scikit-learn to build predictive models and interactive data dashboards.",
  },
  {
    title: "System Architecture & Technical Documentation",
    body: "We design robust system architectures and write clear, professional technical documentation for your engineering projects.",
  },
  {
    title: "Data & Statistical Analysis",
    body: "Statistical testing (t-tests, regressions, and more), data visualization, and clear write-ups of methods and results.",
  },
  {
    title: "Security Reviews & Technical Reports",
    body: "Security assessments of your systems, with clear documentation of vulnerabilities and how to fix them.",
  },
  {
    title: "Code Review & Optimization",
    body: "Line-by-line review for performance, security, and best practices, with clear, prioritized feedback.",
  },
  {
    title: "Workflow Automation & Scripting",
    body: "Save hundreds of hours by automating your manual business processes, web scraping, and data entry workflows.",
  },
  {
    title: "Technical Interview Prep",
    body: "Mock interviews and structured feedback to help engineers prepare for technical interviews with confidence.",
  },
  {
    title: "Applied AI & Intelligent Systems",
    body: "Practical machine learning and automation systems built around your business data and goals.",
  },
  {
    title: "Algorithmic Trading & FinTech Solutions",
    body: "Development of real-time trading bots, market data pipelines, and risk-management algorithms.",
  },
];

export const PRICING_GROUPS = [
  {
    group: "Software & Engineering",
    rows: [
      {
        title: "Web App Development (MVP)",
        body: "From a single landing page to a working first version of your product, built with React, Next.js, and a modern backend.",
        price: "$150 - $800+",
        unit: "per project",
      },
      {
        title: "Full-Stack Software Engineering",
        body: "End-to-end builds from architecture to deployment, scoped and fixed-priced after a free scoping call.",
        price: "Custom Quote",
        unit: "",
      },
      {
        title: "Algorithmic Trading Bots",
        body: "Real-time trading bots, market data pipelines, and risk management matched to your strategy.",
        price: "Custom Quote",
        unit: "",
      },
      {
        title: "Coding & Technical Projects",
        body: "Scripts, small applications, and focused engineering tasks.",
        price: "$15 - $35",
        unit: "per hour",
      },
    ],
  },
  {
    group: "Data & Automation",
    rows: [
      {
        title: "Data Analysis & Scripting",
        body: "Data cleaning, statistical testing, visualization, and analysis scripts with clear reports on your findings.",
        price: "$25 - $45",
        unit: "per hour",
      },
      {
        title: "Workflow Automation & Data Entry",
        body: "Structured data entry, cleanup, and automation of repetitive processes, billed by time or by task.",
        price: "$4 - $8",
        unit: "per hour",
      },
    ],
  },
  {
    group: "Consulting & Documentation",
    rows: [
      {
        title: "System Architecture & Technical Documentation",
        body: "Architecture design, API documentation, and security reports grounded in real methodology.",
        price: "Custom Quote",
        unit: "",
      },
      {
        title: "Technical Interview Prep & Code Review",
        body: "Mock interviews, feedback, and line-level code review to sharpen your engineering skills.",
        price: "$35 - $75",
        unit: "per session",
      },
      {
        title: "Design & Analysis Work",
        body: "Visual design, layout, and applied analysis tasks to support your product.",
        price: "$20 - $40",
        unit: "per hour",
      },
    ],
  },
  {
    group: "Ongoing Work",
    rows: [
      {
        title: "Contract-Based & Retainer Work",
        body: "Ongoing technical support on a recurring basis, priced around your volume and schedule.",
        price: "Custom Quote",
        unit: "",
      },
    ],
  },
];

export const PRICING_DIFFERENCE = [
  { label: "You get a free consultation", body: "- 30-minute scoping call before you commit." },
  { label: "Milestone payments", body: "- 50% now, 50% when you're happy." },
  { label: "Your work stays private", body: "- never shared, never resold." },
  { label: "Direct WhatsApp support", body: "- message Stephen anytime." },
];

export const TECH_STACK = [
  "React 19",
  "Next.js",
  "TypeScript",
  "TanStack",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "Pandas",
  "Scikit-learn",
  "WebSockets",
  "Vercel",
];
