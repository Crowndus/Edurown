# Edurown

Static site — no build step required. Pages: `index.html`, `about.html`, `services.html`, `contact.html`.

## Deploy to Vercel

**Option A — Drag and drop (fastest)**
1. Go to https://vercel.com/new
2. Drag this whole folder onto the page
3. Click Deploy

**Option B — Vercel CLI**
```
npm install -g vercel
cd edurown
vercel --prod
```

**Option C — GitHub + Vercel**
1. Push this folder to a new GitHub repo
2. In Vercel, click "Add New Project" and import that repo
3. Framework preset: "Other" (no build command needed)
4. Deploy

No environment variables or backend are required — the contact form opens the visitor's email app addressed directly to stephen.crowndus1@gmail.com.
