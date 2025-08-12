import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Providers from "@/components/Providers"
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Trello Clone",
  description: "Trello Clone with next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.className} antialiased min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 mx-1`}
        >
          <Toaster position={"top-right"} richColors />
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  )
}
