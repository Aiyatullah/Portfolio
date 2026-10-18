const items = ["TypeScript", "NestJS", "Next.js", "PostgreSQL", "Claude MCP", "LlamaIndex", "Agentic AI", "Stripe", "Supabase", "Docker", "Python", "RAG", "GCP", "Cloudflare", "RBAC", "System design"];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div aria-hidden className="relative z-10 overflow-hidden border-y border-line bg-black/30 py-5 backdrop-blur-sm">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-2xl font-semibold tracking-tight text-fg/70 md:text-3xl">
            {t}
            <span className="serif text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
