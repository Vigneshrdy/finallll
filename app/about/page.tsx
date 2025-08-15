import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Our Mission to Connect Entrepreneurs",
  description:
    "Founders Gang is where entrepreneurs belong—learn about our mission to create a one-stop platform for entrepreneurs to connect, learn, share, and grow together.",
  keywords: ["about founders gang", "entrepreneur community", "startup mission", "founders story"],
  openGraph: {
    title: "About - Our Mission to Connect Entrepreneurs | Founders Gang",
    description:
      "Learn about our mission to create a one-stop platform for entrepreneurs to connect, learn, share, and grow together.",
    url: "https://foundersgang.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://foundersgang.com/about",
  },
}

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About Founders Gang</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founders Gang is where entrepreneurs belong—a one-stop platform to connect, learn, share, and grow
              together in the startup journey.
            </p>
          </div>

          <div className="prose prose-lg mx-auto">
            <h2>Our Mission</h2>
            <p>
              At Founders Gang, we believe that entrepreneurship is a journey best traveled together. Our platform
              serves as a comprehensive ecosystem where founders, entrepreneurs, and startup enthusiasts can connect,
              collaborate, and grow their ventures.
            </p>

            <h2>What We Offer</h2>
            <ul>
              <li>
                <strong>Community:</strong> Connect with like-minded entrepreneurs and founders
              </li>
              <li>
                <strong>Resources:</strong> Access valuable tools and educational content
              </li>
              <li>
                <strong>Learning:</strong> Stay updated with the latest trends and insights
              </li>
              <li>
                <strong>Growth:</strong> Scale your startup with our comprehensive platform
              </li>
            </ul>

            <h2>Join Our Community</h2>
            <p>
              Whether you're just starting your entrepreneurial journey or you're a seasoned founder, Founders Gang
              provides the resources, connections, and support you need to succeed.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
