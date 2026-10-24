import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { profile } from "@/lib/data";

const title = `${profile.name} — Software Engineer in Surat, Gujarat | Backend & Agentic AI`;
const description =
  "Saiyed Aiyatullah (Aiyatullah Saiyed) is a software developer in Surat, Gujarat, India, working at EnactOn Technologies. He builds multi-tenant SaaS backends, agentic AI pipelines (MCP) and workflow automation with NestJS, Next.js and PostgreSQL for Swiss and global clients.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: title, template: `%s | ${profile.name}` },
  description,
  applicationName: `${profile.name} — Portfolio`,
  keywords: [
    "Saiyed Aiyatullah",
    "Saiyed Aiyatullah portfolio",
    "Aiyatullah Saiyed",
    "Saiyad Aiyatullah",
    "Aiyatullah Saiyad",
    "Software Developer in Surat",
    "Software Engineer Gujarat",
    "Software Engineer",
    "Backend Engineer",
    "Agentic AI",
    "MCP",
    "Claude MCP",
    "NestJS",
    "Next.js",
    "PostgreSQL",
    "multi-tenant SaaS",
    "Surat",
    "Gujarat",
    "India",
    "Portfolio",
  ],
  authors: [{ name: profile.fullName, url: profile.url }],
  creator: profile.fullName,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { title, description, type: "profile", url: "/", siteName: `${profile.name} — Portfolio`, locale: "en_IN", firstName: "Saiyed", lastName: "Aiyatullah" },
  twitter: { card: "summary_large_image", title, description },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION ?? "4lqGN_AJudPSg-j1O3EUXWGhW0mSLsA73BkAE0YCfas" },
};

export const viewport: Viewport = { themeColor: "#07070a", colorScheme: "dark" };

const person = {
  "@type": "Person",
  "@id": `${profile.url}/#person`,
  name: profile.fullName,
  alternateName: [profile.name, "Aiyatullah Saiyed", "Saiyad Aiyatullah", "Aiyatullah Saiyad"],
  url: profile.url,
  jobTitle: "Software Engineer",
  description,
  worksFor: { "@type": "Organization", name: "EnactOn Technologies" },
  email: profile.email,
  address: { "@type": "PostalAddress", addressLocality: "Surat", addressRegion: "Gujarat", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Parul University" },
  knowsAbout: ["Backend engineering", "Agentic AI", "Model Context Protocol", "NestJS", "Next.js", "PostgreSQL", "Multi-tenant SaaS", "System design", "RBAC"],
  sameAs: [profile.linkedin, profile.github, profile.leetcode],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    { "@type": "WebSite", "@id": `${profile.url}/#website`, url: profile.url, name: `${profile.name} — Portfolio`, inLanguage: "en", publisher: { "@id": `${profile.url}/#person` } },
    { "@type": "ProfilePage", "@id": `${profile.url}/#profile`, url: profile.url, name: title, isPartOf: { "@id": `${profile.url}/#website` }, mainEntity: { "@id": `${profile.url}/#person` } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
