import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { profile } from "@/lib/data";

const title = `${profile.name} — Software Engineer (Backend / Full-Stack / AI)`;
const description =
  "Software Engineer at EnactOn Technologies building multi-tenant SaaS backends, agentic AI pipelines and workflow automation for Swiss and global clients. NestJS, Next.js, PostgreSQL, Claude MCP.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title,
  description,
  keywords: ["Saiyed Aiyatullah", "Software Engineer", "NestJS", "Next.js", "PostgreSQL", "Agentic AI", "Claude MCP", "Surat", "Portfolio"],
  authors: [{ name: profile.fullName, url: profile.linkedin }],
  openGraph: { title, description, type: "website", siteName: profile.name },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#07070a", colorScheme: "dark" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: "Software Engineer",
  worksFor: { "@type": "Organization", name: "EnactOn Technologies" },
  email: profile.email,
  address: { "@type": "PostalAddress", addressLocality: "Surat", addressRegion: "Gujarat", addressCountry: "IN" },
  alumniOf: "Parul University",
  sameAs: [profile.linkedin, profile.github, profile.leetcode],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
