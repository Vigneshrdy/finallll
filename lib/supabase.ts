import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://nflyghnczyzsyybnaoqg.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mbHlnaG5jenl6c3l5Ym5hb3FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MzkxNDEsImV4cCI6MjA2MzUxNTE0MX0.hrued66wePJT2EDW2Tp8H3RCbfz51Bti1C0Qp0L98eM"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface BlogPost {
  id: string
  title: string
  content: string
  mini_description: string
  thumbnail_url: string | null
  created_at: string
  updated_at: string
  tags: string[]
  author_id: string
  slug: string | null
  profiles: {
    username: string | null
    full_name: string | null
    avatar_url: string | null
  }
}
