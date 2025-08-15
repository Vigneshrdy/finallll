"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"
import { supabase, type BlogPost } from "@/lib/supabase"

export default function BlogGrid() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const { data, error } = await supabase
          .from("blog_posts")
          .select(`
            id,
            title,
            mini_description,
            thumbnail_url,
            created_at,
            tags,
            author_id,
            slug,
            profiles (
              username,
              full_name,
              avatar_url
            )
          `)
          .order("created_at", { ascending: false })

        if (error) {
          console.error("Error fetching blog posts:", error)
          return
        }

        setPosts(data as BlogPost[])
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const getReadTime = (description: string) => {
    const wordCount = description.split(/\s+/).length
    const minutes = Math.ceil(wordCount / 200)
    return `${minutes} min read`
  }

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "artificial intelligence":
        return "bg-purple-100 text-purple-800"
      case "guide":
        return "bg-green-100 text-green-800"
      case "ideas":
        return "bg-orange-100 text-orange-800"
      case "startup":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => {
        const authorName = post.profiles?.full_name || post.profiles?.username || "Anonymous"
        const category = post.tags?.[0] || "Uncategorized"
        const href = post.slug ? `/blog/${post.slug}` : `#`

        return (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={post.thumbnail_url || "/placeholder.svg?height=200&width=300"}
                alt={post.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <Badge variant="secondary" className={`text-xs ${getCategoryColor(category)}`}>
                  {category}
                </Badge>
                <span className="text-xs text-gray-500">{getReadTime(post.mini_description)}</span>
              </div>

              <h3 className="font-semibold text-gray-900 mb-3 line-clamp-2 leading-tight">
                <Link href={href} className="hover:text-blue-600">
                  {post.title}
                </Link>
              </h3>

              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.mini_description}</p>

              <div className="flex items-center">
                {post.profiles?.avatar_url ? (
                  <Image
                    src={post.profiles.avatar_url || "/placeholder.svg"}
                    alt={authorName}
                    width={32}
                    height={32}
                    className="rounded-full mr-3"
                  />
                ) : (
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                )}
                <div>
                  <p className="text-sm font-medium text-gray-900">{authorName}</p>
                  <p className="text-xs text-gray-500">{formatDate(post.created_at)}</p>
                </div>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}
