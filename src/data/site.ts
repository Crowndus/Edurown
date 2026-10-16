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
  {
    title: "Visit & Browse",
    body: "You look through services, pricing, and background, no account required.",
  },
  { title: "Reach Out", body: "Message directly on WhatsApp or email with what you need." },
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
  {
    title: "Essay Writing",
    body: "Well-structured, original essays across subjects, argued clearly and referenced correctly.",
  },
  {
    title: "Research Papers",
    body: "In-depth research grounded in credible sources, with a clear methodology and argument.",
  },
  {
    title: "Dissertations & Thesis Assistance",
    body: "Chapter-by-chapter support, from proposal and literature review through to final draft.",
  },
  {
    title: "Data & Statistical Analysis",
    body: "Statistical testing (t-tests, regressions, and more), data visualization, and clear write-ups of methods and results.",
  },
  {
    title: "Lab & Technical Reports",
    body: "Bioimage analysis, cybersecurity lab reports, and other technical write-ups grounded in real methodology.",
  },
  {
    title: "Editing & Proofreading",
    body: "Line-by-line review for clarity, grammar, structure, and citation accuracy.",
  },
  {
    title: "Coursework Help",
    body: "Applied coursework across subjects, including web design and technical assignments.",
  },
  {
    title: "Case Studies",
    body: "Structured case analysis for business, cybersecurity, and applied subjects.",
  },
  {
    title: "Literature Reviews",
    body: "Thorough, well-organized reviews that map the existing research on your topic.",
  },
  {
    title: "Term Papers",
    body: "Full-length term papers researched and written to your course's specific requirements.",
  },
];

export const PRICING_GROUPS = [
  {
    group: "Writing & Research",
    rows: [
      {
        title: "Essays",
        body: "Priced by academic level - high school, undergraduate, or graduate.",
        price: "$8 - $16",
        unit: "per page",
      },
      {
        title: "Research Papers",
        body: "Includes source research, citations, and structured argument.",
        price: "$12 - $20",
        unit: "per page",
      },
      {
        title: "Dissertations & Thesis Assistance",
        body: "Chapter-by-chapter or full project, priced on scope and level.",
        price: "from $400",
        unit: "per project",
      },
      {
        title: "Case Studies & Literature Reviews",
        body: "Structured analysis grounded in real sources and methodology.",
        price: "$12 - $18",
        unit: "per page",
      },
      {
        title: "Term Papers & Coursework Help",
        body: "Full-length work matched to your course's specific requirements.",
        price: "$10 - $16",
        unit: "per page",
      },
      {
        title: "Editing & Proofreading",
        body: "Line-by-line review of an existing draft for grammar, clarity, and citations.",
        price: "$4 - $7",
        unit: "per page",
      },
    ],
  },
  {
    group: "Applications & Scholarships",
    rows: [
      {
        title: "Application Essay Coaching & Editing",
        body: "Structural feedback, editing, and line-level polish on your own personal statement - you stay the author.",
        price: "$35 - $75",
        unit: "per essay",
      },
      {
        title: "Scholarship Application Support",
        body: "Coaching and editing on your scholarship essay and supporting materials.",
        price: "$40 - $100",
        unit: "per application",
      },
    ],
  },
  {
    group: "Technical & Data",
    rows: [
      {
        title: "Data & Statistical Analysis",
        body: "Statistical testing, data visualization, and clear write-ups of methods and results.",
        price: "$25 - $45",
        unit: "per hour",
      },
      {
        title: "Lab & Technical Reports",
        body: "Bioimage analysis, cybersecurity, and other technical write-ups.",
        price: "$15 - $22",
        unit: "per page",
      },
      {
        title: "Web Development",
        body: "From a single landing page to a small multi-page site, built and documented properly.",
        price: "$150 - $800+",
        unit: "per project",
      },
      {
        title: "Coding & Technical Projects",
        body: "Scripts, small applications, and technical coursework projects.",
        price: "$15 - $35",
        unit: "per hour",
      },
      {
        title: "Design & Analysis Work",
        body: "Visual design, layout, and applied analysis tasks outside standard writing.",
        price: "$20 - $40",
        unit: "per hour",
      },
      {
        title: "Data Entry",
        body: "Structured data entry and cleanup work, billed by time or by task.",
        price: "$4 - $8",
        unit: "per hour",
      },
    ],
  },
  {
    group: "Ongoing Work",
    rows: [
      {
        title: "Contract-Based & Retainer Work",
        body: "Ongoing academic or technical support on a recurring basis - priced around your volume and schedule.",
        price: "Custom Quote",
        unit: "",
      },
    ],
  },
];

export const PRICING_DIFFERENCE = [
  { label: "You get a free sample", body: "- 300 words, your topic, before you pay." },
  { label: "Milestone payments", body: "- 50% now, 50% when you're happy." },
  { label: "Your work stays private", body: "- never shared, never resold." },
  { label: "Direct WhatsApp support", body: "- message Stephen anytime." },
];
