import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Providers from "@/components/Providers"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Knbn-board",
  description: "Kanban-board",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.className} antialiased min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 mx-1`}
      >
        <Providers>
          <Toaster position={"top-right"} richColors />
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
