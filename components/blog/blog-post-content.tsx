"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ArticleBody } from "@/components/blog/articles"
import { blogPosts, getBlogPost } from "@/lib/blog"

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
  const post = getBlogPost(slug) ?? blogPosts[0]
  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

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
              <span>{post.displayDate}</span>
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
            <ArticleBody slug={post.slug} />

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
                    <span className="text-[11px] text-[#b8b5b0]">{related.displayDate}</span>
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
