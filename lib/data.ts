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
  { value: 4, suffix: "", label: "Products led or architected", note: "Swiss & global clients" },
  { value: 2, suffix: "", label: "Company awards", note: "Rising Star · AI Hero at EnactOn" },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "EnactOn Technologies",
    period: "Feb 2026 — Present",
    place: "Surat, India",
    points: [
      "Own ContentPilot end to end as a forward-deployed engineer, from scratch to launch.",
      "Led the MARA team and architected Pontora's multi-tenant backend for Swiss clients.",
      "Improved backend performance with lazy initialization, background job scheduling and query/API optimization.",
    ],
    tags: ["NestJS", "Next.js", "PostgreSQL", "Claude MCP", "LlamaIndex", "Stripe"],
    awards: ["Rising Star", "AI Hero"],
  },
  {
    role: "Software Engineer (Intern)",
    company: "EnactOn Technologies",
    period: "Jun 2025 — Jan 2026",
    place: "Surat, India",
    points: [
      "Led system design and the team for a production Learning Management System: role-based dashboards for instructors and students, course and assignment flows, and secure REST APIs.",
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
  link?: { label: string; href: string };
};

export const products: Product[] = [
  {
    id: "contentpilot",
    name: "ContentPilot",
    kind: "AI SEO content platform",
    badge: "Forward deployed · Owner",
    summary:
      "Owned end to end, from scratch to launch. A staged content pipeline where AI drafts, humans approve and quality checks gate every step.",
    highlights: [
      "Brand onboarding: audience, guidelines, SEO and visual preferences.",
      "SERP and competitor-driven outlines with staged generation and human approval points.",
      "Scheduled job that turns recurring user corrections into persistent brand preferences.",
      "ClickUp tasks created and updated automatically from pipeline status; Claude MCP agentic pipelines.",
    ],
    stack: ["NestJS", "Next.js", "PostgreSQL", "Claude MCP", "ClickUp API"],
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
    id: "lms",
    name: "LMS",
    kind: "Learning Management System",
    badge: "Team lead · System design",
    summary:
      "A production Learning Management System with role-based dashboards for instructors and students, built on secure REST APIs. I led the system design and the team.",
    highlights: [
      "Course and assignment flows for instructors and students.",
      "Role-based dashboards and secure REST APIs.",
    ],
    stack: ["System design", "REST APIs", "RBAC"],
    hue: 215,
  },
];

export const sideProjects = [
  {
    name: "Agent Gate",
    kind: "Control plane for AI agents",
    summary:
      "A multi-tenant gateway that sits between AI agents and the REST / MCP tools they call. Scoped permissions, a human approval queue for risky actions, and a full audit trail.",
    bullets: [
      "JWT identity and scope-based RBAC policy gateway.",
      "Human-in-the-loop approval queue that pauses high-risk actions.",
      "Attributable audit traces, provider-fallback replay for evaluation.",
      "Supabase row-level security for tenant isolation. Swagger docs, unit + e2e tests, Docker Compose.",
    ],
    stack: ["TypeScript", "NestJS", "Next.js", "Supabase", "MCP", "JWT", "Docker"],
    href: "https://github.com/Aiyatullah",
  },
  {
    name: "Google Home Automation Assistant",
    kind: "Agentic smart-home assistant",
    summary:
      "Links Google Home with Claude MCP servers for natural-language home control, reminders and task automation, with context memory and modular tool execution.",
    bullets: [],
    stack: ["Python", "FastAPI", "Docker", "Claude MCP"],
    href: "https://github.com/Aiyatullah",
  },
  {
    name: "AI Interview Mocker",
    kind: "Interview prep platform",
    summary: "Generates personalized interview questions and evaluates answers with LLMs.",
    bullets: [],
    stack: ["Next.js", "TypeScript", "Firebase", "LLMs"],
    href: "https://github.com/Aiyatullah/Ai-interview-mocker",
  },
];

export const skills = [
  { group: "Backend", items: ["Node.js", "NestJS", "Express.js", "REST APIs", "Background jobs", "Stripe"] },
  { group: "AI", items: ["Agentic AI", "Claude MCP", "LlamaIndex", "RAG", "Semantic search", "OCR", "LLMs"] },
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "SQL"] },
  { group: "Data", items: ["PostgreSQL", "Supabase", "MongoDB", "Firebase"] },
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
