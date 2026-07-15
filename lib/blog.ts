export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  /** ISO date used for sitemap lastmod and BlogPosting schema */
  date: string
  /** Human-readable date shown in the UI */
  displayDate: string
  author: string
  readTime: string
}

/** Order matters: the blog listing maps visuals to posts by index. */
export const blogPosts: BlogPost[] = [
  {
    slug: "freelancer-vs-agency-vs-offshore-team",
    title: "Freelancer, Agency, or Offshore Team: Which Model Fits Your Stage?",
    description:
      "A direct breakdown of cost, speed, control, and scale so you can pick the hiring model that fits where your company is today.",
    category: "Offshore / Hiring",
    date: "2026-05-05",
    displayDate: "May 5, 2026",
    author: "WeCode4U Editorial",
    readTime: "5 min read",
  },
  {
    slug: "why-enterprise-software-projects-fail",
    title: "Why Enterprise Software Projects Fail — And How to Prevent It",
    description:
      "Most enterprise failures aren't technical. They're organisational — misaligned expectations, unclear ownership, and scope decisions made before anyone understood the problem.",
    category: "Engineering",
    date: "2025-06-12",
    displayDate: "June 12, 2025",
    author: "WeCode4U Editorial",
    readTime: "8 min read",
  },
  {
    slug: "architecture-decisions-that-compound",
    title: "Architecture Decisions That Compound Over Time",
    description:
      "The choices made in the first three months determine a system's ceiling. We examine the decisions we make early, and the long-term consequences of getting them right.",
    category: "Systems Design",
    date: "2025-05-20",
    displayDate: "May 20, 2025",
    author: "WeCode4U Editorial",
    readTime: "7 min read",
  },
  {
    slug: "the-real-cost-of-technical-debt",
    title: "The Real Cost of Technical Debt in Custom Software",
    description:
      "Technical debt isn't a future problem — it compounds daily. How we quantify it, communicate it to stakeholders, and address it without halting delivery.",
    category: "Engineering",
    date: "2025-04-14",
    displayDate: "April 14, 2025",
    author: "WeCode4U Editorial",
    readTime: "6 min read",
  },
  {
    slug: "predictability-over-speed",
    title: "Predictability Over Speed: How We Think About Delivery",
    description:
      "Fast delivery is easy to sell. Predictable delivery is what actually builds trust. We explain why we optimise for consistency, not velocity.",
    category: "Delivery",
    date: "2025-03-10",
    displayDate: "March 10, 2025",
    author: "WeCode4U Editorial",
    readTime: "6 min read",
  },
  {
    slug: "iso-27001-in-practice",
    title: "ISO 27001 in Practice: What Security Certification Actually Means",
    description:
      "Most teams treat ISO 27001 as a badge. We treat it as a baseline. A candid look at what the certification requires and what it doesn't cover.",
    category: "Security",
    date: "2025-02-17",
    displayDate: "February 17, 2025",
    author: "WeCode4U Editorial",
    readTime: "7 min read",
  },
  {
    slug: "building-long-term-client-partnerships",
    title: "What Long-Term Client Partnerships Actually Require",
    description:
      "We've worked with some clients for over a decade. It's not about account management — it's about accountability and solving the right problems at the right time.",
    category: "Culture",
    date: "2025-01-21",
    displayDate: "January 21, 2025",
    author: "WeCode4U Editorial",
    readTime: "5 min read",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}
