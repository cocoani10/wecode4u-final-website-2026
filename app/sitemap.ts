import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.wecode4u.com'
  const lastModified = new Date()

  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl,                         lastModified, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${baseUrl}/services`,           lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/contact`,            lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/why-us`,             lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/how-we-work`,        lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/case-studies`,       lastModified, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${baseUrl}/about`,              lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`,               lastModified, changeFrequency: 'weekly',  priority: 0.7 },
  ]

  const posts: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...pages, ...posts]
}
