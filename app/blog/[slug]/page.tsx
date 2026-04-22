import { BlogPostContent } from "@/components/blog/blog-post-content"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostContent slug={params.slug} />
}
