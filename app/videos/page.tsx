import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Videos - Educational Content for Entrepreneurs",
  description:
    "Know About Founders Gang · How to Build & Deploy a FullStack Website with AI Tools - Discover helpful video resources and tutorials for entrepreneurs.",
  keywords: [
    "founders gang videos",
    "entrepreneur tutorials",
    "startup videos",
    "fullstack development",
    "AI tools",
    "business education",
  ],
  openGraph: {
    title: "Videos - Educational Content for Entrepreneurs | Founders Gang",
    description:
      "Know About Founders Gang · How to Build & Deploy a FullStack Website with AI Tools - Discover helpful video resources and tutorials.",
    url: "https://foundersgang.com/videos",
    type: "website",
    images: [
      {
        url: "/images/videos/founders-gang-intro.jpg",
        width: 1200,
        height: 630,
        alt: "Founders Gang Educational Videos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Videos - Educational Content for Entrepreneurs | Founders Gang",
    description:
      "Know About Founders Gang · How to Build & Deploy a FullStack Website with AI Tools - Educational videos for entrepreneurs.",
    images: ["/images/videos/founders-gang-intro.jpg"],
  },
  alternates: {
    canonical: "https://foundersgang.com/videos",
  },
};

const videos = [
  {
    id: 1,
    title: "Know About Founders Gang",
    description: "Watch this video to know about Founders Gang aim and mission",
    author: "Founders Gang",
    image: "/images/videos/founders-gang-intro.jpg", // upload manually
    link: "https://www.youtube.com/watch?v=muwB0cYoZDc",
  },
  {
    id: 2,
    title:
      "How to Build & Deploy a FullStack Website with AI Tools and Deploy it",
    description:
      "Know how to build fullstack website using AI tools like lovable and deploy it using vercel",
    author: "Victor Adhikary",
    image: "/images/videos/fullstack-website.jpg", // upload manually
    link: "https://www.youtube.com/watch?v=4IQLOGUvwco",
  },
];

export default function VideosPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-white px-6 py-10">
        <h1 className="text-3xl font-bold mb-2">Videos</h1>
        <p className="text-gray-600 mb-8">
          Discover helpful video resources and tutorials
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition-shadow duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                  {video.title}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {video.description}
                </p>
                <p className="mt-3 text-gray-800 text-sm font-medium">
                  {video.author}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
