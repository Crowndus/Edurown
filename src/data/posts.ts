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
    slug: "the-hidden-cost-of-writing-your-research-paper-alone",
    category: "Academic Writing",
    date: "July 24, 2026",
    read: "5 min read",
    title: "The Hidden Cost of Writing Your Research Paper Alone",
    excerpt:
      "Every year, thousands of students waste time, money, and sanity trying to write research papers alone. Here's what they don't tell you.",
    cardExcerpt:
      "Why students waste time and money trying to do it themselves when expert help is closer than they think.",
    blocks: [
      {
        type: "p",
        text: "It's 2 AM. The deadline is tomorrow. The introduction has been rewritten five times. Exhaustion has set in, and the paper is nowhere near done.",
      },
      { type: "p", text: "This is not a failure of intelligence. It's a failure of strategy." },
      { type: "h2", text: "The Real Cost of Writing Alone" },
      {
        type: "p",
        text: "Attempting to write a research paper without proper support comes with hidden costs that often go unnoticed.",
      },
      { type: "h3", text: "1. Time That Cannot Be Recovered" },
      {
        type: "p",
        text: "A well-structured research paper that could be written in 5-7 days with proper guidance often takes students 2-3 weeks of trial and error. That's time that could be spent on other assignments, studying for exams, or enjoying student life.",
      },
      { type: "h3", text: "2. Mental Health" },
      {
        type: "p",
        text: "The stress of writing alone is real. Students report anxiety, burnout, and even depression from the pressure of high-stakes academic writing. Mental health matters more than any paper.",
      },
      { type: "h3", text: "3. Grades That Were Earned But Not Received" },
      {
        type: "p",
        text: "The material is understood. The concepts are clear. But when it comes to structuring, formatting, and articulating ideas clearly, points are lost. A 68% could have been an 85% with the right support.",
      },
      { type: "h3", text: "4. Opportunity Cost" },
      {
        type: "p",
        text: "While stuck on a research paper, networking, internships, and extracurricular activities that build a career are being missed. Every hour spent struggling is an hour not spent advancing a future.",
      },
      { type: "h2", text: "What Edurown Provides" },
      {
        type: "p",
        text: "Students from the US, UK, Australia, and beyond have received help writing research papers that get results. Here's what they get:",
      },
      {
        type: "list",
        items: [
          {
            label: "Clarity:",
            text: "No more staring at a blank page. Arguments are structured from the start.",
          },
          {
            label: "Speed:",
            text: "What takes 2 weeks takes 5 days. More time is freed up for other priorities.",
          },
          {
            label: "Quality:",
            text: "First-Class Honours-level writing that meets the highest academic standards.",
          },
          {
            label: "Peace of Mind:",
            text: "No more late nights, no more stress, no more wondering if it's being done right.",
          },
        ],
      },
      { type: "h2", text: "Real Results, Real Students" },
      {
        type: "p",
        text: "A Cybersecurity student from the USA went from struggling to straight A's in her Cyber Security course.",
      },
      {
        type: "p",
        text: "A Data Science student from Los Angeles finally understood Logistic Regression after his assignment came back with a 68.75%. He ended up with a strong grade that actually reflected his ability.",
      },
      { type: "h2", text: "What Is Your Time Worth?" },
      {
        type: "p",
        text: "If 40 hours are being spent struggling with a research paper and still getting a mediocre grade, that's a double loss. The time is lost. And the grade is lost.",
      },
      {
        type: "p",
        text: "For a fraction of that time investment, a professionally written, high-quality paper can be delivered on time.",
      },
    ],
    ctaTitle: "Ready to Stop Wasting Time?",
    ctaBody: "Get a free sample on your topic before you commit to anything.",
    ctaLabel: "Get Your Free Sample",
  },
  {
    slug: "why-edurown-exists",
    category: "Story",
    date: "July 24, 2026",
    read: "4 min read",
    title: "Why Edurown Exists",
    excerpt:
      "The story behind the platform and why students deserve better than expensive middlemen.",
    cardExcerpt:
      "The story behind the platform and why students deserve better than expensive middleman platforms.",
    blocks: [
      {
        type: "p",
        text: "The academic support industry is broken. Here's why Edurown exists.",
      },
      { type: "h2", text: "The Problem" },
      {
        type: "p",
        text: "On most platforms, a student pays $100 for an essay. The writer receives $25. The platform takes the rest. That's 75% gone.",
      },
      {
        type: "p",
        text: 'Students pay premium prices but get unpredictable quality. They have no idea who is writing their papers. They deal with anonymous "writers" who may or may not deliver.',
      },
      { type: "h2", text: "The Solution" },
      {
        type: "p",
        text: "Edurown was built on a simple idea: cut out the middlemen. Let students work directly with a qualified expert.",
      },
      { type: "p", text: "When students work with Edurown:" },
      {
        type: "list",
        items: [
          { label: "They pay less", text: "— no 75% markup." },
          {
            label: "They get better quality",
            text: "— work done by a Carnegie Mellon-admitted engineer.",
          },
          {
            label: "They know who they're working with",
            text: "— no anonymous bidding pools.",
          },
          { label: "They get direct communication", text: "— WhatsApp, not a ticket system." },
        ],
      },
      { type: "h2", text: "What Edurown Offers" },
      {
        type: "list",
        items: [
          {
            label: "Academic Writing:",
            text: "Essays, research papers, dissertations, case studies, and term papers",
          },
          {
            label: "Data & Statistical Analysis:",
            text: "Data visualization, statistical testing, and clear write-ups",
          },
          {
            label: "Technical Projects:",
            text: "Web development, coding, and applied coursework",
          },
          {
            label: "Lab & Technical Reports:",
            text: "Bioimage analysis, cybersecurity reports, and more",
          },
          {
            label: "Editing & Proofreading:",
            text: "Line-by-line review for clarity, grammar, and citations",
          },
        ],
      },
      { type: "h2", text: "Why Students Deserve Better" },
      {
        type: "p",
        text: "Students are stressed, overwhelmed, and struggling. They pay too much for work that doesn't meet expectations. The industry takes advantage of their desperation.",
      },
      {
        type: "p",
        text: "Students deserve fair prices. They deserve quality work. They deserve to know who is helping them.",
      },
      { type: "h2", text: "What Edurown Guarantees" },
      {
        type: "list",
        items: [
          { label: "Free sample:", text: "Send your topic, get 300 words written before you pay." },
          {
            label: "Milestone payments:",
            text: "50% upfront, 50% when you're happy with the draft.",
          },
          {
            label: "Unlimited revisions:",
            text: "Tweak until it matches your brief — no extra charges.",
          },
          { label: "Direct WhatsApp:", text: "Chat directly. No tickets, no bots." },
        ],
      },
    ],
    ctaTitle: "Ready to Work with a Real Expert?",
    ctaBody: "Get a free sample on your topic before you commit to anything.",
    ctaLabel: "Get Your Free Sample",
  },
  {
    slug: "why-your-citations-are-costing-you-points",
    category: "Citation",
    date: "July 24, 2026",
    read: "6 min read",
    title: "Why Your Citations Are Costing You Points",
    excerpt:
      "The hidden penalties of citation mistakes and why students lose marks on something so fixable.",
    cardExcerpt:
      "The hidden penalties of citation mistakes and why students lose marks on something so fixable.",
    blocks: [
      {
        type: "p",
        text: "A great paper has been written. Arguments are solid. Research is thorough. But the grade comes back lower than expected. What went wrong?",
      },
      { type: "p", text: "Chances are, it was the citations." },
      { type: "h2", text: "The Hidden Cost of Citation Mistakes" },
      {
        type: "p",
        text: "Citation errors are one of the most common reasons students lose marks. And the worst part? They're completely avoidable.",
      },
      { type: "h3", text: "1. Lost Points on Every Assignment" },
      {
        type: "p",
        text: "Most professors have a section on their rubric dedicated to citations. Consistent 5-10% deductions for citation errors add up across every assignment.",
      },
      { type: "h3", text: "2. The Perception Problem" },
      {
        type: "p",
        text: "When professors see citation mistakes, they assume the student doesn't understand the material. Even if the content is excellent, messy citations make a student look unprofessional.",
      },
      { type: "h3", text: "3. Academic Integrity Risks" },
      {
        type: "p",
        text: "Poor citations can sometimes be interpreted as academic dishonesty — even when it's an honest mistake.",
      },
      { type: "h2", text: "Common Citation Mistakes Students Make" },
      {
        type: "list",
        items: [
          {
            label: "Missing page numbers",
            text: "— in APA and MLA, page numbers are required for direct quotes",
          },
          { label: "Incorrect formatting", text: "— mixing up MLA and APA styles" },
          { label: "Missing publisher information", text: "— especially in book citations" },
          {
            label: "Inconsistent date formatting",
            text: "— using different date formats throughout",
          },
          {
            label: "Not citing AI-generated content",
            text: "— many universities now require this",
          },
          { label: "Forgetting to add DOI or URL", text: "— for journal articles" },
        ],
      },
      { type: "h2", text: "How to Fix Your Citations" },
      { type: "h3", text: "1. Know Your Style Guide" },
      {
        type: "p",
        text: "MLA, APA, and Harvard are the most common styles. Each has specific rules for formatting, punctuation, and order.",
      },
      { type: "h3", text: "2. Use Citation Tools" },
      {
        type: "p",
        text: "Tools like Zotero, EndNote, and Mendeley can help automate the formatting process.",
      },
      { type: "h3", text: "3. Check Your University's Requirements" },
      {
        type: "p",
        text: "Some universities have specific requirements beyond the standard style guide.",
      },
      { type: "h3", text: "4. Get Expert Review" },
      {
        type: "p",
        text: "A fresh pair of eyes can catch mistakes that might be missed — especially citation errors.",
      },
    ],
    ctaTitle: "Stop Losing Points on Citations",
    ctaBody: "Get your paper reviewed by an expert before you submit.",
    ctaLabel: "Get Expert Review",
  },
];

export const COMING_SOON_POST = {
  category: "Data Science",
  date: "Coming Soon",
  title: "How Expert Data Analysis Helped a Client Win a Research Grant",
  excerpt:
    "The story of how expert data analysis turned a struggling project into a funded research initiative.",
  note: "Coming soon...",
};

export const BLOG_CATEGORIES = ["All", "Academic Writing", "Data Science", "Story", "Citation"];

export const POST_IMAGES: Record<string, string> = {
  "the-hidden-cost-of-writing-your-research-paper-alone":
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?fm=jpg&q=80&w=900&fit=crop",
  "why-edurown-exists":
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?fm=jpg&q=80&w=900&fit=crop",
  "why-your-citations-are-costing-you-points":
    "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?fm=jpg&q=80&w=900&fit=crop",
};

export const COMING_SOON_IMAGE =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fm=jpg&q=80&w=900&fit=crop";
