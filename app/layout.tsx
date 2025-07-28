import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description:
    "Empower your marketing with AI-powered tools for content generation, analytics, design, and campaign automation. Perfect for marketers and startups.",
  keywords: "AI marketing, marketing automation, content generation, campaign optimization, startup marketing",
  authors: [{ name: "ADmyBRAND Team" }],
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description:
      "Empower your marketing with AI-powered tools for content generation, analytics, design, and campaign automation.",
    type: "website",
    url: "https://admybrand.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description:
      "Empower your marketing with AI-powered tools for content generation, analytics, design, and campaign automation.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
