import Link from "next/link"
import Image from "next/image"

interface BlogCardProps {
  id: string | null
  title: string
  excerpt: string
  author: string
  authorAvatar?: string | null
  date: string
  readTime: string
  category: string
  image?: string
}

export default function BlogCard({
  id,
  title,
  excerpt,
  author,
  authorAvatar,
  date,
  readTime,
  category,
  image,
}: BlogCardProps) {
  const href = id ? `/blog/${id}` : "#"

  return (
    <Link href={href} className="group block">
      <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
        {image && (
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded">
              {category}
            </span>
            <span className="text-sm text-gray-500">{readTime}</span>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>

          <div className="flex items-center gap-3">
            {authorAvatar && (
              <Image
                src={authorAvatar || "/placeholder.svg"}
                alt={author}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <div className="text-sm">
              <p className="font-medium text-gray-900">{author}</p>
              <p className="text-gray-500">{date}</p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
