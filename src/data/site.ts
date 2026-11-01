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
    title: "Essays & Research Papers",
    body: "Original, well-researched writing tailored to your topic, referencing style, and academic level.",
  },
  {
    title: "Data & Statistical Analysis",
    body: "Statistical testing, data visualization, and lab or bioimage analysis, with clear write-ups of methods and results.",
  },
  {
    title: "Dissertations & Theses",
    body: "Structured, chapter-by-chapter support from proposal through final defense-ready draft.",
  },
  {
    title: "Editing & Proofreading",
    body: "Line-by-line review for clarity, grammar, structure, and citation accuracy.",
  },
  {
    title: "Case Studies & Reports",
    body: "Cybersecurity, business, and lab reports built around real methodology and clear findings.",
  },
  {
    title: "Web & Coursework Projects",
    body: "Applied coursework in web design, systems, and technical subjects, built and documented properly.",
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
    body: "Comfortable working across time zones, currencies, and formatting standards.",
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
    body: "50% upfront, 50% when you're happy with the draft.",
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
    title: "Lab & Technical Reports",
    body: "Bioimage analysis, cybersecurity lab reports, and other technical write-ups grounded in real methodology.",
  },
  {
    title: "Editing & Proofreading",
    body: "Line-by-line review for clarity, grammar, structure, and citation accuracy.",
  },
  {
    title: "Workflow Automation & Scripting",
    body: "Save hundreds of hours by automating your manual business processes, web scraping, and data entry workflows.",
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
    title: "Algorithmic Trading & FinTech Solutions",
    body: "Development of real-time trading bots, market data pipelines, and risk-management algorithms.",
  },
];

export const PRICING_GROUPS = [
  {
    group: "Writing & Research",
    rows: [
      {
        title: "Data Analysis & Scripting",
        body: "Data cleaning, analysis scripts, and clear reports on your findings.",
        price: "$8 - $16",
        unit: "per page",
      },
      {
        title: "Web App Development (MVP)",
        body: "A working first version of your product, built with React, Next.js, and a modern backend.",
        price: "$12 - $20",
        unit: "per page",
      },
      {
        title: "Full-Stack Software Engineering",
        body: "End-to-end builds from architecture to deployment, priced on scope.",
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
        title: "Algorithmic Trading Bots",
        body: "Real-time trading bots, market data pipelines, and risk management matched to your strategy.",
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
        title: "Technical Interview Prep & Code Review",
        body: "Mock interviews, feedback, and line-level code review to sharpen your engineering skills.",
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
  { label: "You get a free consultation", body: "- 30-minute scoping call before you commit." },
  { label: "Milestone payments", body: "- 50% now, 50% when you're happy." },
  { label: "Your work stays private", body: "- never shared, never resold." },
  { label: "Direct WhatsApp support", body: "- message Stephen anytime." },
];
