import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. ADVANCED METADATA (The "Tag" for Humans & Bots)
export const metadata = {
  title: "Matrix CR AI Studio | Pablo Ramirez",
  description: "AI Systems Architect & Agentic Engineer. Specializing in RAG Pipelines, Autonomous Agents, and Enterprise Infrastructure. Based in Costa Rica.",
  keywords: ["AI Architect", "Agentic AI", "RAG Systems", "LangChain Developer", "Costa Rica AI", "Pablo Ramirez", "DevOps Engineer"],
  authors: [{ name: "Pablo Ramirez" }],
  creator: "Pablo Ramirez",
  openGraph: {
    title: "Matrix CR AI Studio | Pablo Ramirez",
    description: "I build the reliable, secure 'Shell' that allows the AI 'Ghost' to function. Enterprise AI Architecture & Agent Deployment.",
    url: 'https://matrix-cr-studio.vercel.app',
    siteName: 'Matrix CR AI Studio',
    images: [
      {
        url: '/opengraph-image.png', // We can add a real image later
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // 2. THE DIGITAL IDENTITY CHIP (JSON-LD for AI Models)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Pablo Ramirez",
    "jobTitle": "AI Systems Architect",
    "url": "https://matrix-cr-studio.vercel.app",
    "sameAs": [
      "https://www.linkedin.com/in/pablo-ramirez-7357a2143/",
      "https://github.com/pabl0ramirez" // Update this if your username is different
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "RAG (Retrieval Augmented Generation)",
      "Autonomous Agents",
      "LangChain",
      "Python",
      "Docker",
      "Enterprise Infrastructure",
      "Cybersecurity"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Mithun Technologies",
        "sameAs": "https://www.mithuntechnologies.com/"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Cyfrin Updraft"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Heredia",
      "addressCountry": "Costa Rica"
    },
    "description": "Bilingual AI Application Engineer with 20+ years of technical experience in systems analysis, automation, and enterprise infrastructure."
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Inject the Data Chip */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {children}
        <Analytics />
      </body>
    </html>
  );
}