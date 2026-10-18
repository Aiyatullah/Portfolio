# Portfolio — Saiyed Aiyatullah

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Motion + three.js (react-three-fiber).

## Highlights
- Custom GLSL particle scene (~22k points) that morphs sphere → torus knot → crystal lattice → galaxy as you scroll,
  reacts to the cursor and emits a shockwave on click. Falls back to a gradient when WebGL is unavailable.
- Interactive **Agent Gate** demo: send low/high-risk agent requests through a policy gateway and approve/deny them.
- Command palette (Ctrl/⌘ + K), custom cursor, magnetic buttons, spotlight cards, count-up stats.
- SEO: metadata, JSON-LD `Person`, generated Open Graph image, favicon.

## Develop
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Content lives in `lib/data.ts`. Set `NEXT_PUBLIC_SITE_URL` to your production URL for correct social-preview links.
The résumé PDF is `public/Saiyed_Aiyatullah_Resume.pdf`.
