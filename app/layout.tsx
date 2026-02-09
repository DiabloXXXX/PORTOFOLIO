import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Mono, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SmoothScroll from "@/components/SmoothScroll"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})
const _syne = Syne({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
})

export const metadata: Metadata = {
  title: "Yugi Indra Prakasa | Full Stack Developer & UI/UX Designer",
  description: "Portfolio of Yugi Indra Prakasa - A Final Year IT Student at Universitas Gunadarma specializing in Full Stack Development, UI/UX Design, and Data Science. Open to internship opportunities.",
  keywords: ["Yugi Indra Prakasa", "Full Stack Developer", "UI/UX Designer", "Data Science", "Portfolio", "Universitas Gunadarma", "Web Developer Indonesia"],
  authors: [{ name: "Yugi Indra Prakasa" }],
  creator: "Yugi Indra Prakasa",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://yugiindra.vercel.app",
    title: "Yugi Indra Prakasa | Full Stack Developer & UI/UX Designer",
    description: "Portfolio of Yugi Indra Prakasa - A Final Year IT Student specializing in Full Stack Development, UI/UX Design, and Data Science.",
    siteName: "Yugi Indra Prakasa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yugi Indra Prakasa | Full Stack Developer & UI/UX Designer",
    description: "Portfolio of Yugi Indra Prakasa - Full Stack Development, UI/UX Design, and Data Science.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_spaceMono.variable} ${_syne.variable} font-sans antialiased`}>
        <SmoothScroll />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
