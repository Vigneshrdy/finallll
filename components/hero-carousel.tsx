"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "How to Validate Your Startup Idea: A Step-by-Step Guide for First-Time Founders",
    author: "Founders Gang",
    date: "24 May 2025",
    category: "startup",
    tags: ["guide"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Top Startup Ideas in the Age of AI (May 2025 Edition)",
    author: "Victor Adhikary",
    date: "28 May 2025",
    category: "ideas",
    tags: ["AI", "startup"],
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const currentHero = heroSlides[currentSlide]

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={currentHero.image || "/placeholder.svg"}
          alt={currentHero.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{currentHero.title}</h1>

          <div className="flex items-center justify-center gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold">FG</span>
              </div>
              <span>{currentHero.author}</span>
            </div>
            <span>•</span>
            <span>{currentHero.date}</span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">{currentHero.category}</span>
            {currentHero.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">Read article</Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
