"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { FreelancerArticle } from "@/components/blog/freelancer-article"

const posts: Record<string, { slug: string; title: string; category: string; date: string; author: string; readTime: string }> = {
  "why-enterprise-software-projects-fail": {
    slug: "why-enterprise-software-projects-fail",
    title: "Why Enterprise Software Projects Fail — And How to Prevent It",
    category: "Engineering",
    date: "June 12, 2025",
    author: "WeCode4U Editorial",
    readTime: "8 min read",
  },
  "freelancer-vs-agency-vs-offshore-team": {
    slug: "freelancer-vs-agency-vs-offshore-team",
    title: "Freelancer, Agency, or Offshore Team: Which Model Fits Your Stage?",
    category: "Offshore / Hiring",
    date: "May 5, 2026",
    author: "WeCode4U Editorial",
    readTime: "5 min read",
  },
}

const allPosts = [
  {
    slug: "architecture-decisions-that-compound",
    title: "Architecture Decisions That Compound Over Time",
    description: "The choices made in the first three months determine a system's ceiling. We examine the decisions we make early, and the long-term consequences of getting them right.",
    category: "Systems Design",
    date: "May 2025",
  },
  {
    slug: "the-real-cost-of-technical-debt",
    title: "The Real Cost of Technical Debt in Custom Software",
    description: "Technical debt isn't a future problem — it compounds daily. How we quantify it, communicate it to stakeholders, and address it without halting delivery.",
    category: "Engineering",
    date: "April 2025",
  },
  {
    slug: "predictability-over-speed",
    title: "Predictability Over Speed: How We Think About Delivery",
    description: "Fast delivery is easy to sell. Predictable delivery is what actually builds trust. We explain why we optimise for consistency, not velocity.",
    category: "Delivery",
    date: "March 2025",
  },
  {
    slug: "iso-27001-in-practice",
    title: "ISO 27001 in Practice: What Security Certification Actually Means",
    description: "Most teams treat ISO 27001 as a badge. We treat it as a baseline. A candid look at what the certification requires and what it doesn't cover.",
    category: "Security",
    date: "February 2025",
  },
  {
    slug: "building-long-term-client-partnerships",
    title: "What Long-Term Client Partnerships Actually Require",
    description: "We've worked with some clients for over a decade. It's not about account management — it's about accountability and solving the right problems at the right time.",
    category: "Culture",
    date: "January 2025",
  },
]

const BlogVisual = ({ slug }: { slug: string }) => {
  switch (slug) {
    case "architecture-decisions-that-compound":
      return (
        <div className="w-full h-full relative overflow-hidden" style={{ background: "#f5f0ea" }}>
          <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <rect x="20"  y="28"  width="360" height="34" rx="4" fill="#1a1916" opacity="0.07" />
            <rect x="44"  y="76"  width="312" height="34" rx="4" fill="#1a1916" opacity="0.10" />
            <rect x="68"  y="124" width="264" height="34" rx="4" fill="#fb6e3e" opacity="0.17" />
            <rect x="92"  y="172" width="216" height="34" rx="4" fill="#1a1916" opacity="0.06" />
            {[120, 200, 280].map(cx => (
              <g key={cx}>
                <line x1={cx} y1="62"  x2={cx} y2="76"  stroke="#c9c4bd" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1={cx} y1="110" x2={cx} y2="124" stroke="#c9c4bd" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1={cx} y1="158" x2={cx} y2="172" stroke="#c9c4bd" strokeWidth="1.5" strokeDasharray="2 2" />
              </g>
            ))}
            <rect x="32"  y="41" width="52" height="4" rx="2" fill="#1a1916" opacity="0.18" />
            <rect x="56"  y="89" width="68" height="4" rx="2" fill="#1a1916" opacity="0.18" />
            <rect x="80"  y="137" width="84" height="4" rx="2" fill="#fb6e3e" opacity="0.45" />
            <rect x="104" y="185" width="60" height="4" rx="2" fill="#1a1916" opacity="0.12" />
          </svg>
        </div>
      )
    case "the-real-cost-of-technical-debt":
      return (
        <div className="w-full h-full relative overflow-hidden" style={{ background: "#f0eee9" }}>
          <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
            {[70, 110, 150, 190].map(y => (
              <line key={y} x1="40" y1={y} x2="370" y2={y} stroke="#1a1916" strokeWidth="0.5" opacity="0.06" />
            ))}
            <polygon points="56,198 56,186 88,178 120,165 152,149 184,129 216,105 248,80 280,56 312,36 344,22 344,198" fill="#fb6e3e" opacity="0.07" />
            <polyline points="56,186 88,178 120,165 152,149 184,129 216,105 248,80 280,56 312,36 344,22" fill="none" stroke="#fb6e3e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
            <line x1="40" y1="198" x2="370" y2="198" stroke="#1a1916" strokeWidth="1" opacity="0.1" />
            <line x1="56" y1="18"  x2="56"  y2="198" stroke="#1a1916" strokeWidth="1" opacity="0.1" />
            <circle cx="344" cy="22" r="5"  fill="#fb6e3e" opacity="0.75" />
            <circle cx="344" cy="22" r="10" fill="#fb6e3e" opacity="0.12" />
            <rect x="64"  y="194" width="26" height="3" rx="1.5" fill="#1a1916" opacity="0.11" />
            <rect x="330" y="194" width="26" height="3" rx="1.5" fill="#1a1916" opacity="0.11" />
          </svg>
        </div>
      )
    case "predictability-over-speed":
      return (
        <div className="w-full h-full relative overflow-hidden" style={{ background: "#edeae4" }}>
          <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <line x1="36" y1="130" x2="364" y2="130" stroke="#fb6e3e" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
            {[62, 68, 64, 66, 120, 63, 65, 68].map((h, i) => (
              <rect key={i} x={32 + i * 44} y={200 - h} width={28} height={h} rx="3" fill={h > 100 ? "#fb6e3e" : "#1a1916"} opacity={h > 100 ? 0.45 : 0.12} />
            ))}
            <line x1="36" y1="200" x2="364" y2="200" stroke="#1a1916" strokeWidth="1" opacity="0.1" />
          </svg>
        </div>
      )
    case "iso-27001-in-practice":
      return (
        <div className="w-full h-full relative overflow-hidden" style={{ background: "#eef0eb" }}>
          <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <circle cx="200" cy="110" r="88" fill="none" stroke="#1a1916" strokeWidth="1.5" opacity="0.07" />
            <circle cx="200" cy="110" r="60" fill="none" stroke="#1a1916" strokeWidth="1.5" opacity="0.10" />
            <circle cx="200" cy="110" r="34" fill="#fb6e3e" opacity="0.10" />
            <circle cx="200" cy="110" r="34" fill="none" stroke="#fb6e3e" strokeWidth="1.5" opacity="0.35" />
            <rect x="188" y="108" width="24" height="18" rx="3" fill="#fb6e3e" opacity="0.55" />
            <path d="M193 108 v-7 a7 7 0 0 1 14 0 v7" fill="none" stroke="#fb6e3e" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
            <circle cx="200" cy="116" r="2.5" fill="white" opacity="0.7" />
            <rect x="199" y="118" width="2" height="4" rx="1" fill="white" opacity="0.6" />
            {[0, 60, 120, 180, 240, 300].map(deg => {
              const rad = (deg * Math.PI) / 180
              return <line key={deg} x1={200 + 84 * Math.cos(rad)} y1={110 + 84 * Math.sin(rad)} x2={200 + 91 * Math.cos(rad)} y2={110 + 91 * Math.sin(rad)} stroke="#1a1916" strokeWidth="1.5" opacity="0.14" strokeLinecap="round" />
            })}
          </svg>
        </div>
      )
    case "building-long-term-client-partnerships":
      return (
        <div className="w-full h-full relative overflow-hidden" style={{ background: "#f0ece5" }}>
          <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <line x1="52" y1="84"  x2="348" y2="84"  stroke="#1a1916" strokeWidth="1.5" opacity="0.12" />
            <line x1="52" y1="136" x2="348" y2="136" stroke="#1a1916" strokeWidth="1.5" opacity="0.12" />
            <rect x="52" y="72" width="36" height="4" rx="2" fill="#1a1916" opacity="0.12" />
            <rect x="52" y="144" width="44" height="4" rx="2" fill="#1a1916" opacity="0.12" />
            {[80, 140, 200, 260, 320].map((x, i) => (
              <g key={x}>
                <line x1={x} y1="84" x2={x} y2="136" stroke="#fb6e3e" strokeWidth="1.5" opacity="0.4" />
                <circle cx={x} cy="84"  r="4" fill="#fb6e3e" opacity={0.5 + i * 0.06} />
                <circle cx={x} cy="136" r="4" fill="#fb6e3e" opacity={0.5 + i * 0.06} />
              </g>
            ))}
            <polygon points="52,84 80,84 140,84 200,84 260,84 320,84 320,136 260,136 200,136 140,136 80,136 52,136" fill="#fb6e3e" opacity="0.04" />
          </svg>
        </div>
      )
    default:
      return (
        <div className="w-full h-full relative overflow-hidden" style={{ background: "#f2f0ed" }}>
          <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
            <line x1="76"  y1="110" x2="132" y2="110" stroke="#c9c4bd" strokeWidth="2" />
            <line x1="164" y1="110" x2="220" y2="110" stroke="#fb6e3e" strokeWidth="2" strokeDasharray="5 4" opacity="0.7" />
            <line x1="252" y1="110" x2="308" y2="110" stroke="#c9c4bd" strokeWidth="2" />
            {[60, 148, 236, 324].map((cx, i) => (
              <g key={cx}>
                <circle cx={cx} cy="110" r="16" fill={i === 1 ? "#fb6e3e" : "#1a1916"} opacity={i === 1 ? 0.15 : 0.07} />
                <circle cx={cx} cy="110" r="8"  fill={i === 1 ? "#fb6e3e" : "#1a1916"} opacity={i === 1 ? 0.55 : 0.22} />
                <rect x={cx - 18} y="134" width="36" height="4" rx="2" fill="#1a1916" opacity="0.1" />
              </g>
            ))}
            <line x1="186" y1="102" x2="198" y2="118" stroke="#fb6e3e" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
            <line x1="198" y1="102" x2="186" y2="118" stroke="#fb6e3e" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
          </svg>
        </div>
      )
  }
}

export function BlogPostContent({ slug }: { slug: string }) {
  const post = posts[slug] ?? posts["why-enterprise-software-projects-fail"]
  const relatedPosts = allPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  return (
    <main className="bg-white">
      {/* Post header */}
      <section className="pt-32 pb-10 lg:pt-40 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-12"
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#a8a29e] hover:text-[#1a1916] transition-colors duration-150"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All posts
            </Link>
          </motion.div>

          {/* Title + meta */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-5 block">
              {post.category}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-[#1a1916] tracking-[-0.04em] leading-tight mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[#a8a29e] border-t border-[#e7e5e4] pt-6">
              <span>{post.author}</span>
              <span className="text-[#d6d3d1]">·</span>
              <span>{post.date}</span>
              <span className="text-[#d6d3d1]">·</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Body */}
      <section className="pb-28 lg:pb-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-2xl"
          >
            {slug === "freelancer-vs-agency-vs-offshore-team" ? (
              <FreelancerArticle />
            ) : (
              <>
                <p className="text-xl text-[#44403c] leading-relaxed mb-10 font-[450]">
                  Most enterprise software projects don't fail because of bad code. They fail because of misaligned expectations, unclear ownership, and scope decisions made before anyone truly understood the problem.
                </p>

                <div className="prose-article">

                  <h2>The failure mode nobody talks about</h2>
                  <p>
                    When a large software project collapses, the post-mortem usually points to technical causes — a poorly chosen architecture, an under-resourced team, a platform that couldn't scale. These are real. But they're almost always symptoms, not causes.
                  </p>
                  <p>
                    The actual failure typically began months earlier, in a requirements meeting, a procurement decision, or a kickoff where the right questions weren't asked. By the time code is written, the trajectory is already set.
                  </p>

                  <h2>Four root causes we see consistently</h2>
                  <p>
                    Across hundreds of projects, the failures we've witnessed — and the ones we've been brought in to rescue — cluster around a small set of patterns.
                  </p>

                  <h3>1. Scope defined before problems are understood</h3>
                  <p>
                    Fixed-scope contracts feel safe to procurement teams. They're not. When scope is locked before the domain is well understood, every discovery becomes a change request, every edge case becomes a negotiation, and the team optimises for contract compliance rather than business outcomes.
                  </p>

                  <h3>2. Ownership gaps between business and engineering</h3>
                  <p>
                    Complex systems need someone who can hold both the business intent and the technical implementation in their head simultaneously. When product, engineering, and business operate in separate silos with handoff-based communication, critical context is lost at every boundary.
                  </p>

                  <h3>3. Delivery cadence that hides problems</h3>
                  <p>
                    Quarterly demos create quarterly feedback loops. By the time something is visibly wrong, months of effort have been invested in the wrong direction. High-functioning teams surface problems in days, not quarters.
                  </p>

                  <h3>4. Technical debt treated as future work</h3>
                  <p>
                    Every shortcut compounds. A codebase where debt is routinely deferred becomes progressively harder to change — and the teams working in it become slower at exactly the moment the business needs they move faster.
                  </p>

                  <h2>What prevention actually looks like</h2>
                  <p>
                    Prevention isn't a methodology. It's a set of habits applied consistently. It means requiring real discovery before scope is committed. It means embedding technical judgment into business decisions, not receiving them as downstream requirements. It means building systems that expose failures early — through automated testing, continuous deployment, and feedback loops measured in hours, not weeks.
                  </p>
                  <p>
                    The teams that deliver reliably aren't the ones that never encounter problems. They're the ones that find problems early enough to do something about them.
                  </p>

                  <h2>A practical starting point</h2>
                  <p>
                    If you're evaluating a software engagement — whether you're a buyer or an engineering leader — the single most valuable question you can ask is: how will we know if something is going wrong, and how quickly will we know it?
                  </p>
                  <p>
                    The answer to that question tells you almost everything about how the project will run.
                  </p>

                </div>
              </>
            )}

          </motion.div>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-16 lg:py-20 bg-[#fafaf9] border-t border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex items-center gap-4 mb-0">
            <span className="text-[10px] font-semibold text-[#a8a29e] tracking-widest uppercase flex-shrink-0">
              More from the blog
            </span>
            <div className="flex-1 h-px bg-[#e7e5e4]" />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((related, index) => (
              <motion.div
                key={related.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.08 }}
              >
                <Link href={`/blog/${related.slug}`} className="group block">
                  <div className="w-full h-32 rounded-xl mb-5 overflow-hidden">
                    <BlogVisual slug={related.slug} />
                  </div>

                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-[11px] font-semibold text-[#fb6e3e] tracking-widest uppercase">
                      {related.category}
                    </span>
                    <span className="text-[#d6d3d1] text-[10px]">—</span>
                    <span className="text-[11px] text-[#b8b5b0]">{related.date}</span>
                  </div>

                  <h3 className="text-[17px] font-semibold text-[#1a1916] tracking-[-0.03em] leading-snug mb-2.5 group-hover:text-[#fb6e3e] transition-colors duration-150">
                    {related.title}
                  </h3>

                  <p className="text-sm text-[#78716c] leading-relaxed mb-4 line-clamp-2">
                    {related.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm text-[#a8a29e] group-hover:text-[#fb6e3e] transition-colors duration-150">
                    Read
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[#a8a29e] hover:text-[#1a1916] transition-colors duration-150"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All posts
            </Link>
          </div>

        </div>
      </section>
    </main>
  )
}
