import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import { supabase, type BlogPost } from "@/lib/supabase"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from("blog_posts")
    .select(`
      id,
      title,
      content,
      mini_description,
      thumbnail_url,
      created_at,
      updated_at,
      tags,
      author_id,
      slug,
      profiles (
        username,
        full_name,
        avatar_url
      )
    `)
    .eq("slug", slug)
    .single()

  if (error) {
    console.error("Error fetching blog post:", error)
    return null
  }

  return data as BlogPost
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found | Founders Gang",
      description: "The requested blog post could not be found.",
    }
  }

  const title = post.title
  const description = post.mini_description
  const imageUrl = post.thumbnail_url || "/placeholder.svg?height=630&width=1200"
  const authorName = post.profiles?.full_name || post.profiles?.username || "Founders Gang"
  const publishedTime = new Date(post.created_at).toISOString()
  const modifiedTime = new Date(post.updated_at).toISOString()

  return {
    title: `${title} | Founders Gang`,
    description,
    keywords: post.tags?.join(", ") || "startup, entrepreneurship, founders, business",
    authors: [{ name: authorName }],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      modifiedTime,
      authors: [authorName],
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "Founders Gang",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@foundersgang",
    },
    alternates: {
      canonical: `https://foundersgang.com/blog/${params.slug}`,
    },
    other: {
      "article:author": authorName,
      "article:published_time": publishedTime,
      "article:modified_time": modifiedTime,
      "article:section": post.tags?.[0] || "Business",
      "article:tag": post.tags?.join(",") || "",
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getReadTime = (content: string) => {
    const wordCount = content.split(/\s+/).length
    const minutes = Math.ceil(wordCount / 200)
    return `${minutes} min read`
  }

  const authorName = post.profiles?.full_name || post.profiles?.username || "Anonymous"

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back to blog link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>

          {/* Article header */}
          <header className="mb-8">
            {post.tags && post.tags.length > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-blue-600" />
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                  {post.tags[0]}
                </span>
              </div>
            )}

            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h1>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">{post.mini_description}</p>

            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{authorName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{getReadTime(post.content)}</span>
              </div>
            </div>
          </header>

          {/* Featured image */}
          {post.thumbnail_url && (
            <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.thumbnail_url || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Article content */}
          <article className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-gray-800 leading-relaxed" />
          </article>

          {/* Author info */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              {post.profiles?.avatar_url && (
                <Image
                  src={post.profiles.avatar_url || "/placeholder.svg"}
                  alt={authorName}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{authorName}</h3>
                <p className="text-gray-600">Author at Founders Gang</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
