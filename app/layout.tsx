import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Founders Gang - Where Entrepreneurs Belong",
    template: "%s | Founders Gang",
  },
  description:
    "Founders Gang is where entrepreneurs belong—a one-stop platform to connect, learn, share, and grow together in the startup journey.",
  keywords: [
    "entrepreneurs",
    "startup",
    "founders",
    "business",
    "networking",
    "startup tools",
    "entrepreneurship",
    "startup community",
    "business resources",
    "startup ecosystem",
  ],
  authors: [{ name: "Founders Gang" }],
  creator: "Founders Gang",
  publisher: "Founders Gang",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://foundersgang.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://foundersgang.com",
    title: "Founders Gang",
    description:
      "Founders Gang is where entrepreneurs belong—a one-stop platform to connect, learn, share, and grow together in the startup journey.",
    siteName: "Founders Gang",
    images: [
      {
        url: "/images/logos/founders-gang-dark.jpg",
        width: 1200,
        height: 630,
        alt: "Founders Gang - Where Entrepreneurs Belong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders Gang - Where Entrepreneurs Belong",
    description:
      "Founders Gang is where entrepreneurs belong—a one-stop platform to connect, learn, share, and grow together in the startup journey.",
    images: ["/images/logos/founders-gang-dark.jpg"],
    creator: "@foundersgang",
    site: "@foundersgang",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Founders Gang",
              url: "https://foundersgang.com",
              logo: "https://foundersgang.com/images/logos/founders-gang-light.jpg",
              description:
                "Founders Gang is where entrepreneurs belong—a one-stop platform to connect, learn, share, and grow together in the startup journey.",
              sameAs: [
                "https://twitter.com/foundersgang",
                "https://linkedin.com/company/foundersgang",
                "https://instagram.com/foundersgang",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                url: "https://foundersgang.com/contact",
              },
            }),
          }}
        />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
