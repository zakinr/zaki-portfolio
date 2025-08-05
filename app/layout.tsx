import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Muhammad Zaki Nur Rahman - Data Scientist Portfolio",
  description:
    "Fresh graduate Data Scientist with 2+ internship experiences and multiple national awards. Passionate about machine learning, data visualization, and delivering impactful solutions.",
  keywords: "data scientist, machine learning, python, portfolio, fresh graduate, telkom university",
  authors: [{ name: "Muhammad Zaki Nur Rahman" }],
  openGraph: {
    title: "Muhammad Zaki Nur Rahman - Data Scientist Portfolio",
    description: "Fresh graduate Data Scientist with expertise in machine learning and data visualization",
    url: "https://your-domain.com",
    siteName: "Zaki Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zaki Nur Rahman - Data Scientist",
    description: "Fresh graduate Data Scientist with 2+ internship experiences",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
