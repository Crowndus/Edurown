# Edurown — Direct Academic & Technical Writing Support

**Edurown** is a direct, personal academic and technical writing support service for students and professionals worldwide. No middlemen, no bidding pools — just clear communication and careful work, start to finish.

🔗 **Live Site:** [edurown.vercel.app](https://edurown.vercel.app)

---

## 📌 Overview

Edurown was built to cut through the opaque middleman chain that exists on platforms like Edusson, EduBirdie, and Nerdy. When you pay $100 on these platforms, the writer often receives just $25 or less. Edurown removes the layers — students pay less, writers get paid fairly, and quality stays high.

---

## 🖼️ Preview

![Edurown workspace preview](src/assets/hero-workspace.jpg)

---

## 🚀 Features

- **📝 Academic Writing:** Essays, research papers, dissertations, case studies, and term papers
- **📊 Data & Statistical Analysis:** Data visualization, statistical testing, and clear write-ups
- **💻 Technical Projects:** Web development, coding, and applied coursework
- **🔬 Lab & Technical Reports:** Bioimage analysis, cybersecurity reports, and more
- **✏️ Editing & Proofreading:** Line-by-line review for clarity, grammar, and citations
- **🌍 Worldwide Service:** Comfortable working across time zones and formatting standards
- **✨ Premium motion:** Sitewide scroll-reveal and page-load transitions, with a `prefers-reduced-motion` fallback

---

## 🛠️ Tech Stack

| **Category** | **Technologies** |
| :--- | :--- |
| **Framework** | React 19, TanStack Start (SSR), TanStack Router, TanStack Query |
| **Styling** | Tailwind CSS v4, shadcn/ui (Radix primitives) |
| **Build** | Vite, Nitro |
| **Icons** | lucide-react |
| **Hosting** | Vercel |
| **Version Control** | Git & GitHub |

This is a rebuild of the original static HTML/CSS/JS site on a proper component-based, server-rendered stack — same content and brand, new foundation.

---

## 📁 Project Structure

```
edurown/
├── src/
│   ├── routes/            # File-based routes (/, /about, /services, /pricing, /contact, /blog/*)
│   ├── components/
│   │   ├── site/          # Header, Footer, Hero, Blocks, ScrollReveal, RouteProgress, etc.
│   │   └── ui/             # shadcn/ui primitives
│   ├── data/               # Site copy, services, testimonials, blog posts
│   ├── assets/              # Images (hero photo, founder photo, etc.)
│   ├── hooks/ / lib/         # Shared hooks and utilities
│   └── styles.css            # Design tokens + Tailwind theme
├── public/                    # Favicon, robots.txt
├── vite.config.ts
└── package.json
```

---

## 📸 Live Preview / Screenshots

Full-page screenshots of every route (Home, About, Services, Pricing, Contact, Blog) aren't checked into this repo — grab fresh ones from the live site above any time the design changes, so they never go stale.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm (or bun)

### Local Development

```bash
git clone https://github.com/Crowndus/Edurown.git
cd Edurown
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

### Deploy to Vercel

Vercel is connected to this GitHub repo, so pushing to the deployed branch redeploys automatically. Vercel auto-detects the Nitro build output — no extra configuration needed. If a fresh import is ever required:

1. Push your changes to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import this repository
3. Framework Preset: leave on auto-detect (or "Other") — Build Command `npm run build`, Install Command `npm install`
4. Click **Deploy**

---

## 📫 Contact

- **Website:** [edurown.vercel.app](https://edurown.vercel.app)
- **Email:** stephen.kisangi1@gmail.com
- **WhatsApp:** [+254 792 915655](https://wa.me/254792915655)
- **GitHub:** [Crowndus](https://github.com/Crowndus)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

*"Solving problems, always. We're getting there."* 🚀
