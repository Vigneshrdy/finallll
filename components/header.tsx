import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo with Image */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logos/founders-gang-light.jpg" // path inside public
                alt="Founders Gang Intro"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="text-xl font-semibold text-gray-900">Founders Gang</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/videos" className="text-gray-700 hover:text-gray-900 font-medium">
              Videos
            </Link>
            <Link href="/tools" className="text-gray-700 hover:text-gray-900 font-medium">
              Tools
            </Link>
            <a
              href="https://startup.foundersgang.com/companies"
              className="text-gray-700 hover:text-gray-900 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Startups
            </a>
            <a
              href="https://startup.foundersgang.com/founders"
              className="text-gray-700 hover:text-gray-900 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founders
            </a>
          </nav>

          {/* Get Started Button */}
          <div className="flex items-center">
            <Link href="/get-started">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
