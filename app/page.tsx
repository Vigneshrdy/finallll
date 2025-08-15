import Header from "@/components/header"
import Footer from "@/components/footer"
import BlogGrid from "@/components/blog-grid"
import HeroCarousel from "@/components/hero-carousel"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Founders Gang - Where Entrepreneurs Belong",
  description:
    "Founders Gang is where entrepreneurs belong—a one-stop platform to connect, learn, share, and grow together in the startup journey.",
  openGraph: {
    title: "Founders Gang - Where Entrepreneurs Belong",
    description:
      "Founders Gang is where entrepreneurs belong—a one-stop platform to connect, learn, share, and grow together in the startup journey.",
    url: "https://foundersgang.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders Gang - Where Entrepreneurs Belong",
    description:
      "Founders Gang is where entrepreneurs belong—a one-stop platform to connect, learn, share, and grow together in the startup journey.",
  },
  alternates: {
    canonical: "https://foundersgang.com",
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <HeroCarousel />

        {/* Latest Blog Posts Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Latest blog posts</h2>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <BlogGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
