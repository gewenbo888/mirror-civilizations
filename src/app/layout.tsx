import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mirror-civilizations.psyverse.fun"),
  title: "Mirror Civilizations · 镜像文明 — China and Europe in Parallel",
  description:
    "A bilingual atlas of 25 paired cities and regions across China and Europe, organised around three deep axes: BaiYue↔Latin, Northern Mandarin↔Germanic, Yangtze↔Mediterranean.",
  keywords: [
    "China Europe comparison",
    "Hong Kong Venice",
    "Shenzhen Florence",
    "镜像文明",
    "中欧对比",
    "百越拉丁",
    "civilizational geography",
    "Psyverse",
  ],
  authors: [{ name: "Gewenbo", url: "https://psyverse.fun" }],
  alternates: { canonical: "/", languages: { en: "/", "zh-CN": "/", "x-default": "/" } },
  openGraph: {
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "Mirror Civilizations · 镜像文明 — China and Europe in Parallel" }],
    title: "Mirror Civilizations · 镜像文明",
    description:
      "China and Europe as the same essay written twice — Hong Kong is Venice, Luoyang is Athens, Wuhan is Alexandria. 25 pairs, 3 axes, bilingual.",
    url: "https://mirror-civilizations.psyverse.fun/",
    siteName: "Mirror Civilizations",
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN"],
  },
  twitter: {
    images: ["/twitter-image.png"],
    card: "summary_large_image",
    title: "Mirror Civilizations · 镜像文明",
    description: "China and Europe as the same essay written twice — 25 paired cities, 3 deep axes.",
  },
  robots: { index: true, follow: true },
  other: { "theme-color": "#fbf6ec" },
};

export const viewport: Viewport = {
  themeColor: "#fbf6ec",
  width: "device-width",
  initialScale: 1,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mirror Civilizations · 镜像文明",
  description: "A bilingual atlas pairing Chinese cities and regions with their European counterparts.",
  url: "https://mirror-civilizations.psyverse.fun/",
  inLanguage: ["en", "zh-CN"],
  author: { "@type": "Person", name: "Gewenbo", url: "https://psyverse.fun/" },
  publisher: { "@type": "Organization", name: "Psyverse", url: "https://psyverse.fun/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-lang="en">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script src="https://analytics-dashboard-two-blue.vercel.app/tracker.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
