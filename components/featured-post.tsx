import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function FeaturedPost() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>
        </div>

        <div className="mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            Uncategorized
          </Badge>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Micro-Mobility and EV Infrastructure in India: Market Overview and Entrepreneurial Opportunities
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          India's transportation ecosystem is rapidly electrifying, driven especially by micro-mobility (e-bikes,
          e-scooters, electric rickshaws) and associated EV infrastructure (primarily charging networks). In 2024, India
          saw unprecedented growth in EV adoption: about 1.9 million EVs were sold, a 19% increase over 2023.
          Two-wheelers accounted for 59% of EV sales and three-wheelers 35%.
        </p>

        <div className="flex items-center mb-8">
          <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
          <div>
            <p className="font-medium text-gray-900">Founders Gang</p>
            <div className="flex items-center text-sm text-gray-500">
              <span>30 June 2025 at 11:50</span>
              <span className="mx-2">•</span>
              <span>4 min read</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Knyke0zxTBt80OhXruSOGMxFc2dDts.png"
            alt="Micro-mobility and EV infrastructure illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Given that two-wheelers constitute over 70% of all vehicles, electric two-wheelers (e-2Ws) are expected to
            make up 60–70% of new two-wheeler sales by 2030. Surveys show 86% of consumers would consider an e-2W for
            their next vehicle.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            For{" "}
            <Link href="/entrepreneurs" className="text-blue-600 hover:text-blue-700 underline">
              entrepreneurs
            </Link>
            , this translates into a large and growing market:
          </p>

          <ul className="list-disc pl-6 mb-8 text-gray-700">
            <li className="mb-2">
              <Link href="/india" className="text-blue-600 hover:text-blue-700 underline">
                India's
              </Link>{" "}
              <Link href="/micro-mobility-market" className="text-blue-600 hover:text-blue-700 underline">
                micro-mobility market
              </Link>{" "}
              is projected to grow from USD 2.21 billion (2024) to USD 8.28 billion (2033) at a CAGR of ~14.6%.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
