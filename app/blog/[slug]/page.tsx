import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { blogPosts, getBlogPost } from "@/lib/blog"

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  const url = `https://www.wecode4u.com/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: 'https://www.wecode4u.com/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.wecode4u.com/blog/${post.slug}#article`,
    mainEntityOfPage: `https://www.wecode4u.com/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.wecode4u.com",
    },
    publisher: { "@id": "https://www.wecode4u.com/#organization" },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.wecode4u.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.wecode4u.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title },
    ],
  }

  const faqSchema = post.faq && post.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map(item => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogPostContent slug={slug} />
    </>
  )
}
