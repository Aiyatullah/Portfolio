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
      "A staged content platform where AI drafts, humans approve and quality checks gate every step, plus an agent that answers the team inside ClickUp.",
    highlights: [
      "Artie: a ClickUp agent that answers @mentions in task comments and chat with live Search Console and GA4 data, and creates images, checklists and drafts in the thread. Signed webhooks, a resumable job queue and a server-load guard keep it reliable.",
      "Astro publishing pipeline: queue-driven article workflow with a publish gate, automatic repair of template fields, scheduled publishing, an image CDN and a deploy monitor that checks pages are really live.",
      "Brand onboarding, SERP and competitor-driven outlines, and staged generation with human approval points.",
      "A scheduled job turns recurring user corrections into persistent brand preferences; ClickUp tasks update from pipeline status.",
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
    kind: "Care Portal & Patient Portal",
    badge: "Engineer · Features and DevOps",
    summary:
      "The provider/admin Care Portal and the patient-facing portal for ParkingMD. I ship features across both and own how they get deployed.",
    highlights: [
      "Support Queries: a typed API client, a transactional outbox and a BullMQ worker that keep doctor assignments in sync, safe under retries and out-of-order delivery.",
      "Support Query pill and inline provider-to-support conversation on the task view, with a read-only admin view.",
      "Template sync locks so a brand can keep its own document and letter templates, enforced on the receiving side.",
      "Campaign attribution: UTM parameters now survive magic-link redirects, so SMS and email clicks reach analytics.",
      "Per-branch preview deployments and deploy scripts on GitHub Actions.",
    ],
    stack: ["Next.js", "tRPC", "Drizzle", "PostgreSQL", "BullMQ", "GitHub Actions"],
    hue: 330,
  },
];

export const sideProjects = [
  {
    name: "Agent Gate",
    kind: "Personal project · control plane for AI agents",
    summary:
      "A multi-tenant gateway that sits between AI agents and the REST / MCP tools they call. Scoped permissions, a human approval queue for risky actions, and a full audit trail.",
    bullets: [
      "JWT identity and scope-based RBAC policy gateway.",
      "Human-in-the-loop approval queue that pauses high-risk actions.",
      "Attributable audit traces, provider-fallback replay for evaluation.",
      "Supabase row-level security for tenant isolation. Swagger docs, unit + e2e tests, Docker Compose.",
    ],
    stack: ["TypeScript", "NestJS", "Next.js", "Supabase", "MCP", "JWT", "Docker"],
  },
  {
    name: "dbmcp",
    kind: "Hosted read-only Postgres MCP server",
    summary:
      "Lets AI clients query company databases safely. Every person has their own token, every query is audited by name, and SQL is checked before it runs.",
    bullets: [
      "Per-person bearer tokens stored as hashes, with revocation and per-database access.",
      "SQL parsed with the Postgres parser: one SELECT or EXPLAIN, a required LIMIT, a function allowlist and a 30s read-only transaction.",
      "Row, cell and response-size caps, plus a JSONL audit log of who ran what.",
      "Docker deploy with backup/restore, health checks and 26 tests.",
    ],
    stack: ["TypeScript", "Node.js", "MCP", "PostgreSQL", "Docker"],
  },
  {
    name: "DB Access portal",
    kind: "Internal self-serve access tool",
    summary:
      "A small Cloudflare Worker that gets a teammate's AI client connected to company databases without a ticket: sign in, get your IP allowed, copy a ready-made MCP config.",
    bullets: [
      "Email allowlist and signed session cookies, plus a server-to-server endpoint for other portals.",
      "One entry per person, so re-clicking updates it instead of piling up rules.",
      "Contributed to the access configuration and rollout.",
    ],
    stack: ["Cloudflare Workers", "Hono", "TypeScript", "JWT", "MCP"],
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
