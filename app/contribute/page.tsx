import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contribute - Join Our Entrepreneur Community",
  description:
    "Founders Gang is where entrepreneurs belong—contribute to our community by sharing your knowledge, experiences, and insights with fellow founders.",
  keywords: ["contribute to founders gang", "entrepreneur community", "startup contributions", "share knowledge"],
  openGraph: {
    title: "Contribute - Join Our Entrepreneur Community | Founders Gang",
    description:
      "Contribute to our community by sharing your knowledge, experiences, and insights with fellow founders.",
    url: "https://foundersgang.com/contribute",
    type: "website",
  },
  alternates: {
    canonical: "https://foundersgang.com/contribute",
  },
}

export default function Contribute() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contribute to Founders Gang</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founders Gang is where entrepreneurs belong—share your knowledge and help build our community together.
            </p>
          </div>

          <div className="prose prose-lg mx-auto">
            <h2>How You Can Contribute</h2>
            <p>
              Our community thrives on the collective knowledge and experiences of entrepreneurs like you. Here are ways
              you can contribute:
            </p>

            <h3>Share Your Story</h3>
            <p>
              Tell us about your entrepreneurial journey, the challenges you've faced, and the lessons you've learned
              along the way.
            </p>

            <h3>Write Articles</h3>
            <p>
              Share your expertise by writing articles on topics relevant to the startup ecosystem, from fundraising to
              product development.
            </p>

            <h3>Create Resources</h3>
            <p>Help fellow entrepreneurs by creating tools, templates, or guides that can benefit the community.</p>

            <h3>Mentor Others</h3>
            <p>
              Share your experience by mentoring upcoming entrepreneurs and helping them navigate their startup journey.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Ready to Contribute?</h3>
              <p className="text-blue-800 mb-4">
                Join our community of entrepreneurs and start making a difference today.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
