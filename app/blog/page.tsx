import type { Metadata } from "next"
import BlogGrid from "@/components/blog-grid"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog | Founders Gang - Insights for Entrepreneurs",
  description:
    "Discover insights, guides, and stories for entrepreneurs. Learn about startups, AI, business strategies, and entrepreneurial opportunities from industry experts.",
  keywords:
    "startup blog, entrepreneurship, business insights, startup guides, AI in business, founder stories, business strategy",
  openGraph: {
    title: "Blog | Founders Gang",
    description: "Insights, guides, and stories for entrepreneurs",
    type: "website",
    siteName: "Founders Gang",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Founders Gang Blog - Insights for Entrepreneurs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Founders Gang",
    description: "Insights, guides, and stories for entrepreneurs",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  alternates: {
    canonical: "https://foundersgang.com/blog",
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600">Insights, guides, and stories for entrepreneurs</p>
          </div>

          <BlogGrid />
        </div>
      </main>
      <Footer />
    </>
  )
}
