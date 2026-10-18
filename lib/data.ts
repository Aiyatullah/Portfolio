export const profile = {
  name: "Saiyed Aiyatullah",
  fullName: "Saiyed Aiyatullah Kalimullah",
  role: "Software Engineer",
  tagline: "Backend / Full-Stack / AI",
  location: "Surat, Gujarat, India",
  email: "zeelsaiyed12@gmail.com",
  phone: "+91 9825896794",
  linkedin: "https://linkedin.com/in/aiyatullah-saiyed-8b4538251",
  github: "https://github.com/Aiyatullah",
  leetcode: "https://leetcode.com/u/aiyatullah/",
  resume: "/Saiyed_Aiyatullah_Resume.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const stats = [
  { value: 60, suffix: "/wk", label: "AI articles shipped", note: "scaled from 10 on ContentPilot" },
  { value: 4.5, suffix: "%", label: "Conversion rate", note: "up from 1% after launch", decimals: 1 },
  { value: 4, suffix: "", label: "Production platforms", note: "ContentPilot · MARA · Pontora · ParkingMD" },
  { value: 2, suffix: "", label: "Company awards", note: "Rising Star · AI Hero at EnactOn" },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "EnactOn Technologies",
    period: "Feb 2026 — Present",
    place: "Surat, India",
    points: [
      "Lead engineer on ContentPilot, an AI SEO content platform, working forward-deployed with the client.",
      "Built Artie, a ClickUp agent that answers @mentions in comments and chat using live Search Console, GA4 and content data through MCP tools, and creates images, checklists and drafts back in the thread.",
      "Led the MARA team and architected Pontora's multi-tenant backend for Swiss clients.",
      "Shipped features on ParkingMD's Care and Patient portals (Support Queries, template sync locks, campaign attribution) and own their deploy and preview pipelines.",
      "Improved backend performance with lazy initialization, background job scheduling and query/API optimization.",
    ],
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "BullMQ", "Claude MCP", "LlamaIndex", "Stripe", "GitHub Actions"],
    awards: ["Rising Star", "AI Hero"],
  },
  {
    role: "Software Engineer (Intern)",
    company: "EnactOn Technologies",
    period: "Jun 2025 — Jan 2026",
    place: "Surat, India",
    points: [
      "Led system design and the team for a production Learning Management System, then moved onto the ContentPilot platform.",
    ],
    tags: ["System design", "REST", "RBAC", "Team lead"],
    awards: [],
  },
];

export type Product = {
  id: string;
  name: string;
  kind: string;
  badge: string;
  summary: string;
  highlights: string[];
  stack: string[];
  metric?: { value: string; label: string };
  hue: number;
};

export const products: Product[] = [
  {
    id: "contentpilot",
    name: "ContentPilot",
    kind: "AI SEO content platform",
    badge: "Forward deployed · Lead engineer",
    summary:
      "An AI content platform that takes SEO articles from keyword to published page. AI does the heavy lifting, people approve the important steps, and quality checks gate everything that goes live.",
    highlights: [
      "End-to-end article automation: keyword and SERP research, competitor-driven outlines, drafts, images and SEO metadata in one pipeline, taking output from 10 to up to 60 articles a week.",
      "Human in the loop by design: approval gates on the outline, the draft and the publish step, with automated quality checks before anything goes live.",
      "Agentic visual editor: an AI assistant that edits articles and fills template pages field by field, with live previews, undo and history.",
      "Brand-aware: onboarding captures audience, guidelines and SEO preferences, and repeated corrections are learned as lasting brand preferences.",
      "Publishes straight to each brand's site (Astro on GitHub and WordPress), on a schedule, with an image CDN and a check that pages are really live.",
      "Works where the team works: Artie, a ClickUp agent, answers @mentions with live Search Console and GA4 data, and an MCP server lets Claude plan topics and queue articles only after explicit confirmation.",
    ],
    stack: ["Next.js API", "Prisma", "PostgreSQL", "BullMQ", "Claude MCP", "ClickUp API", "AI SDK"],
    metric: { value: "10 → 60", label: "articles / week" },
    hue: 265,
  },
  {
    id: "mara",
    name: "MARA",
    kind: "Swiss real-estate platform",
    badge: "Team lead",
    summary:
      "A property platform for the Swiss market that finds homes by meaning, not just filters, and connects straight into agents' CRMs.",
    highlights: [
      "Semantic property search and AI-assisted onboarding.",
      "Custom CMS, sun simulation and location intelligence.",
      "Pipedrive and Casa Gateway CRM integrations.",
    ],
    stack: ["Semantic search", "Next.js", "Pipedrive", "Casa Gateway", "CMS"],
    metric: { value: "CH", label: "Swiss market" },
    hue: 20,
  },
  {
    id: "pontora",
    name: "Pontora",
    kind: "Multi-tenant Swiss HRMS",
    badge: "Backend architect",
    summary:
      "Backend services for an HR platform where every company is its own tenant, from payroll to invoices, billed in CHF.",
    highlights: [
      "RBAC, impersonation, payroll and invoicing.",
      "Document OCR pipeline with LlamaIndex.",
      "Stripe subscription billing in CHF.",
    ],
    stack: ["NestJS", "PostgreSQL", "LlamaIndex", "Stripe", "RBAC"],
    metric: { value: "CHF", label: "Stripe billing" },
    hue: 160,
  },
  {
    id: "parkingmd",
    name: "ParkingMD",
    kind: "Online medical documents: Care Portal + Patient Portal",
    badge: "Engineer · Features and DevOps",
    summary:
      "ParkingMD lets patients get official medical documents online: disability and pregnancy parking placards, doctor's notes, FMLA leave papers, tinted-window medical exemptions and more. Patients sign up, pay and complete an intake in the Patient Portal. Doctors and admins review each case, sign the document and deliver it through the Care Portal, across several brands from one codebase.",
    highlights: [
      "State-aware services: every service has its own guided funnel and the right state forms.",
      "Guided patient journey: sign-up, checkout, scheduling, intake, ID and medical-records upload, with a live status page for each case.",
      "Doctor and admin workflow: review intake, generate and e-sign official documents, deliver them to the patient, and track consent for records requests.",
      "Always in touch: SMS and email notifications, automated follow-up calls, patient chat, and a Support Query channel so doctors can ask the support team from inside a case.",
      "Admin tooling: custom KPI dashboards, work queues, template syncing across brands and campaign attribution from SMS and email clicks.",
      "Payments with Stripe and provider payouts, plus per-branch preview deployments for safe releases.",
    ],
    stack: ["Next.js", "tRPC", "Drizzle", "PostgreSQL", "BullMQ", "GitHub Actions"],
    metric: { value: "2", label: "portals" },
    hue: 330,
  },
];

export const sideProjects: {
  name: string;
  kind: string;
  summary: string;
  bullets: string[];
  stack: string[];
  href?: string;
}[] = [
  {
    name: "Agent Gate",
    kind: "Open source · control plane for AI agents",
    summary:
      "A multi-tenant gateway that sits between AI agents and the REST / MCP tools they call. Scoped permissions, a human approval queue for risky actions, and a full audit trail.",
    bullets: [
      "JWT identity and scope-based RBAC policy gateway.",
      "Human-in-the-loop approval queue that pauses high-risk actions.",
      "Attributable audit traces, provider-fallback replay for evaluation.",
      "Supabase row-level security for tenant isolation. Swagger docs, unit + e2e tests, Docker Compose.",
    ],
    stack: ["TypeScript", "NestJS", "Next.js", "Supabase", "MCP", "JWT", "Docker"],
    href: "https://github.com/Aiyatullah/Agent-Gate",
  },
  {
    name: "Secure database access for AI",
    kind: "dbmcp + DB Access portal · internal tooling",
    summary:
      "Teammates want their AI assistants to read company data, but not to hold database credentials or risk a write. A self-serve portal gets them connected in a few clicks, and a hosted read-only Postgres MCP server controls who can query what.",
    bullets: [
      "Self-serve onboarding: sign in, get access and copy a ready-made MCP config.",
      "Per-person tokens stored as hashes, with revocation and per-database access.",
      "Every SQL statement is checked before it runs: one SELECT or EXPLAIN, a required LIMIT, a function allowlist and a 30s read-only transaction, with row and size caps.",
      "A named audit log of who ran which query. Docker deploy with backup/restore, health checks and 26 tests.",
    ],
    stack: ["TypeScript", "Node.js", "MCP", "PostgreSQL", "Cloudflare Workers", "Hono", "Docker"],
  },
  {
    name: "Swiss Tax Calculator MCP",
    kind: "Open source · MCP server + Python API",
    summary:
      "Lets AI assistants answer Swiss tax questions with real numbers. It wraps the official ESTV federal tax calculator and covers every Swiss municipality for tax years 2010–2026, with no API key needed.",
    bullets: [
      "Household income and wealth tax, with deductions, for any municipality.",
      "Compare places, or find the cheapest municipality nearby.",
      "Plan capital withdrawals, and see what a deduction is worth.",
      "Capital-payment, inheritance and gift, and company tax. Usable as an MCP server or a plain Python client, checked against golden test cases.",
    ],
    stack: ["Python", "MCP", "httpx", "pytest", "uv"],
    href: "https://github.com/Aiyatullah/swiss-tax-calculator-mcp",
  },
];

export const skills = [
  { group: "Backend", items: ["Node.js", "NestJS", "Express.js", "REST APIs", "BullMQ queues", "Background jobs", "Stripe"] },
  { group: "AI", items: ["Agentic AI", "Claude MCP", "LlamaIndex", "RAG", "Semantic search", "OCR", "LLMs", "AI SDK"] },
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
  { group: "Data", items: ["PostgreSQL", "Prisma", "Drizzle ORM", "Supabase", "Redis", "MongoDB", "Firebase"] },
  { group: "Frontend", items: ["React", "Next.js", "Astro", "Tailwind CSS"] },
  { group: "Cloud / DevOps", items: ["Docker", "Google Cloud", "Cloudflare", "GitHub Actions", "Vercel"] },
  { group: "Engineering", items: ["System design", "Multi-tenant SaaS", "RBAC", "Auth", "API & DB design"] },
];

export const publication = {
  title: "Care Smart AI: Hospital Management System with AI Integration",
  venue: "IJSRET, Vol. 11, Issue 4, Jul–Aug 2025",
  note: "First author",
  detail:
    "scikit-learn symptom-to-disease classifier (SVM, Random Forest, Naive Bayes with symptom encoding and data balancing) plus an NLP report summarizer served as a microservice.",
};

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  school: "Parul University",
  period: "2022 — 2026",
  score: "CGPA 8.30 / 10",
};
