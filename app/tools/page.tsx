import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tools - Essential Resources for Entrepreneurs",
  description:
    "Founders Gang is where entrepreneurs belong—discover essential tools including Image Link Generator, QR Code Generator, and Startup Researcher for your business needs.",
  keywords: [
    "startup tools",
    "entrepreneur resources",
    "image link generator",
    "qr code generator",
    "startup researcher",
    "business tools",
    "founders gang tools",
  ],
  openGraph: {
    title: "Tools - Essential Resources for Entrepreneurs | Founders Gang",
    description:
      "Discover essential tools including Image Link Generator, QR Code Generator, and Startup Researcher for your business needs.",
    url: "https://foundersgang.com/tools",
    type: "website",
    images: [
      {
        url: "/images/tools/image-link-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Founders Gang Essential Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools - Essential Resources for Entrepreneurs | Founders Gang",
    description: "Discover essential tools including Image Link Generator, QR Code Generator, and Startup Researcher.",
    images: ["/images/tools/image-link-generator.jpg"],
  },
  alternates: {
    canonical: "https://foundersgang.com/tools",
  },
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Tools</h1>
            <p className="text-xl text-gray-600">Discover useful tools and resources for your projects</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Image Link Generator */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src="/images/tools/image-link-generator.jpg"
                  alt="Image Link Generator"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Image Link Generator</h3>
                <p className="text-gray-600 mb-4">
                  A simple, blazing-fast tool to upload your images and get instant shareable links. No watermarks. No
                  sign-ups. Just pure utility for builders, creators, and founders.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/images/logos/founders-gang-light.jpg" alt="Founders Gang" className="w-6 h-6" />
                    <span className="text-sm text-gray-500">Founders Gang</span>
                  </div>
                  <a
                    href="https://image.foundersgang.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Try Tool
                  </a>
                </div>
              </div>
            </div>

            {/* QR Code Generator */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src="/images/tools/qr-code-generator.jpg"
                  alt="QR Code Generator"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">QR Code Generator</h3>
                <p className="text-gray-600 mb-4">
                  QR Code Generator is a fast, easy-to-use tool that turns any text, URL or contact info into a
                  scannable QR code in seconds
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/images/logos/founders-gang-light.jpg" alt="Founders Gang" className="w-6 h-6" />
                    <span className="text-sm text-gray-500">Founders Gang</span>
                  </div>
                  <a
                    href="https://qr.foundersgang.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Try Tool
                  </a>
                </div>
              </div>
            </div>

            {/* Startup Researcher */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img
                  src="/images/tools/startup-researcher.jpg"
                  alt="Startup Researcher"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Startup Researcher</h3>
                <p className="text-gray-600 mb-4">
                  A smart tool that helps startups quickly research ideas, analyze competitors, and track market trends
                  all in one place.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/images/logos/founders-gang-light.jpg" alt="Founders Gang" className="w-6 h-6" />
                    <span className="text-sm text-gray-500">Founders Gang</span>
                  </div>
                  <a
                    href="https://research.foundersgang.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Try Tool
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
