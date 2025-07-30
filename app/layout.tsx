import type { ReactNode } from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description:
    "Empower your marketing with AI-powered tools for content generation, analytics, design, and campaign automation. Perfect for marketers and startups.",
  keywords: "AI marketing, marketing automation, content generation, campaign optimization, startup marketing",
  authors: [{ name: "ADmyBRAND Team" }],
  robots: "index, follow",
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description:
      "Empower your marketing with AI-powered tools for content generation, analytics, design, and campaign automation.",
    type: "website",
    url: "https://admybrand.ai",
    siteName: "ADmyBRAND AI Suite",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description:
      "Empower your marketing with AI-powered tools for content generation, analytics, design, and campaign automation.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#7c3aed",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-black" />}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}
