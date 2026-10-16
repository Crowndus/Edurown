export const CONTACT = {
  email: "stephen.crowndus1@gmail.com",
  phone: "+254 792 915655",
  whatsapp: "https://wa.me/254792915655",
  location: "Nairobi, Kenya",
};

export const NAV = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Solutions" },
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
  "Web Design & Development",
  "AI & Workflow Automation",
  "Education Technology",
  "Branding & Digital Design",
  "Data & IT Solutions",
  "Website Care & Support",
];

export const TRUST_BADGES = [
  "Built around your goals",
  "Clear scope & communication",
  "Remote-first collaboration",
];

export const HOME_CHIPS = [
  "Websites",
  "AI Automation",
  "EdTech",
  "Brand Identity",
  "Data Solutions",
  "IT Support",
];

export const HOME_SERVICES = [
  { title: "Web Design & Development", body: "Modern, responsive websites and landing pages designed to build trust, explain your offer, and turn visits into enquiries." },
  { title: "AI & Workflow Automation", body: "Practical automations that reduce repetitive work, connect everyday tools, and help teams work more efficiently." },
  { title: "Education Technology", body: "Learning platforms, school websites, learner and parent portals, and digital tools built around real education needs." },
  { title: "Branding & Digital Design", body: "Cohesive visual identities, social media assets, and digital experiences that make your business look consistent and credible." },
  { title: "Data & IT Solutions", body: "Data cleaning, reporting, dashboards, troubleshooting, and technical support that turn problems into clear next steps." },
  { title: "Website Care & Support", body: "Content updates, performance improvements, maintenance, and ongoing help as your business grows." },
];

export const HOME_PILLARS = [
  {
    title: "Direct Collaboration",
    body: "Talk directly with the person planning and delivering your project, from discovery through handover.",
  },
  {
    title: "Clear Scope & Delivery",
    body: "Agree on goals, deliverables, timeline, and budget before work begins, with progress updates along the way.",
  },
  {
    title: "Built for Real-World Use",
    body: "Responsive, practical solutions shaped around the people who will actually use them.",
  },
];

export const HOME_STEPS = [
  { title: "Discover", body: "Talk through the problem, goals, audience, and constraints." },
  { title: "Define Scope", body: "Agree on features, deliverables, timeline, and budget." },
  { title: "Plan", body: "Map the approach and priorities before building." },
  { title: "Build", body: "Create the solution in clear, reviewable stages." },
  { title: "Refine", body: "Review the work and make agreed improvements." },
  { title: "Handover", body: "Share the finished work and practical guidance for using it." },
];

export const CAUTION_POINTS = [
  "Ask for a short sample in your subject area",
  "Split payment into milestones on larger projects",
  "See exactly who you're talking to, real name, direct line",
];

export const SAFEGUARDS = [
  {
    label: "Discovery first:",
    body: "Share your goals and constraints; we will help define a sensible scope before work begins.",
  },
  {
    label: "Milestone delivery:",
    body: "Larger projects can be split into agreed stages with clear deliverables.",
  },
  {
    label: "Defined revisions:",
    body: "Revision rounds and acceptance criteria are agreed in the project scope.",
  },
  { label: "Direct communication:", body: "Speak with Stephen directly and get clear updates without unnecessary layers." },
];

export const TESTIMONIALS = [
  {
    quote:
      "\"Stephen handled my entire Cyber Security course, research, lab reports, and the final paper. The work was thorough, well-referenced, and he explained complex concepts clearly when I had questions. I ended the semester with straight A's. He's the real deal.\"",
    name: "Roseline",
    role: "Cybersecurity Student, USA",
  },
  {
    quote:
      '"I was completely stuck on my Logistic Regression assignment, the data just wasn\'t making sense. Stephen not only ran the analysis perfectly but walked me through the results step-by-step. Clean code, clear write-up, and I actually understood the hyperparameters this time. Highly recommend."',
    name: "Brandon",
    role: "Data Science, Los Angeles",
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
    q: "Is this a legitimate service?",
    a: "Yes, you're dealing directly with real, named people. See the About page for background, and feel free to ask for a sample before committing to anything.",
  },
  {
    q: "How does payment work?",
    a: "Price is agreed directly with you before work starts. Larger projects can be split into milestones.",
  },
  {
    q: "How fast is turnaround?",
    a: "Depends on scope and deadline, send your brief and you'll get a realistic timeline before agreeing to anything.",
  },
  {
    q: "What if the work isn't right?",
    a: "Revisions are part of the process until the work matches your brief.",
  },
];

export const SERVICES_ALL = [
  { title: "Web Design & Development", body: "Responsive business websites, landing pages, portfolio sites, and website redesigns built around your goals and audience." },
  { title: "AI & Workflow Automation", body: "Practical AI-assisted workflows, task automation, and tool integrations that reduce repetitive manual work." },
  { title: "Education Technology", body: "School websites, learning management systems, learner performance dashboards, and parent-facing portals." },
  { title: "Branding & Digital Design", body: "Visual identity direction, brand assets, social media designs, and consistent digital presentation." },
  { title: "Data & Reporting", body: "Data cleaning, analysis, reporting, and dashboards that make information easier to understand and use." },
  { title: "IT Support & Technical Solutions", body: "Practical troubleshooting, technical setup, documentation, and support for everyday digital workflows." },
  { title: "Website Care & Improvements", body: "Content updates, usability refinements, performance checks, and ongoing improvements after launch." },
  { title: "Digital Strategy & Consultation", body: "A focused discussion to clarify the problem, prioritise next steps, and identify a realistic digital approach." },
];

export const PRICING_GROUPS = [
  {
    group: "Websites & Online Presence",
    rows: [
      { title: "Landing Page", body: "A focused, responsive page for one offer, campaign, or service.", price: "$150–$350", unit: "per project" },
      { title: "Business Website", body: "A polished multi-page website for a small business or professional service.", price: "$350–$800+", unit: "per project" },
      { title: "Website Refresh", body: "Improve layout, messaging, mobile usability, and visual consistency on an existing site.", price: "$150–$400", unit: "per sprint" },
    ],
  },
  {
    group: "Automation, Data & Design",
    rows: [
      { title: "Workflow Automation", body: "Automate a clearly defined repetitive task or connect a small set of tools.", price: "$100–$500+", unit: "per workflow" },
      { title: "Dashboard & Data Reporting", body: "Clean, structure, and present a dataset or business report in a clear dashboard.", price: "$100–$400+", unit: "per project" },
      { title: "Brand & Social Design Pack", body: "A scoped set of visual assets to establish a consistent digital presence.", price: "$80–$250", unit: "per pack" },
    ],
  },
  {
    group: "Education Technology & Ongoing Support",
    rows: [
      { title: "School Website or Learning Portal", body: "Education-focused websites, learner/parent portals, and LMS features are scoped to requirements.", price: "Custom Quote", unit: "by scope" },
      { title: "Website Care Plan", body: "Agreed routine updates, checks, and small improvements for an existing site.", price: "$75–$200", unit: "per month" },
      { title: "IT Support & Consultation", body: "Troubleshooting, technical guidance, or a focused discovery session.", price: "From $25", unit: "per hour" },
    ],
  },
];

export const PRICING_DIFFERENCE = [
  { label: "Clear scope", body: "Deliverables and priorities are agreed before work starts." },
  { label: "Milestone options", body: "Larger projects can be divided into reviewable stages." },
  { label: "Direct communication", body: "Discuss the project with the person planning and delivering it." },
  { label: "Practical handover", body: "Receive agreed files, access details, and basic usage guidance." },
];
