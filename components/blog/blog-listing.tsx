"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = ["All", "Engineering", "Systems Design", "Delivery", "Security", "Culture", "Offshore / Hiring"]

const posts = [
  {
    slug: "freelancer-vs-agency-vs-offshore-team",
    title: "Freelancer, Agency, or Offshore Team: Which Model Fits Your Stage?",
    description:
      "A direct breakdown of cost, speed, control, and scale so you can pick the hiring model that fits where your company is today.",
    date: "May 2026",
    category: "Offshore / Hiring",
  },
  {
    slug: "why-enterprise-software-projects-fail",
    title: "Why Enterprise Software Projects Fail — And How to Prevent It",
    description:
      "Most enterprise failures aren't technical. They're organisational — misaligned expectations, unclear ownership, and scope decisions made before anyone understood the problem.",
    date: "June 2025",
    category: "Engineering",
  },
  {
    slug: "architecture-decisions-that-compound",
    title: "Architecture Decisions That Compound Over Time",
    description:
      "The choices made in the first three months determine a system's ceiling. We examine the decisions we make early, and the long-term consequences of getting them right.",
    date: "May 2025",
    category: "Systems Design",
  },
  {
    slug: "the-real-cost-of-technical-debt",
    title: "The Real Cost of Technical Debt in Custom Software",
    description:
      "Technical debt isn't a future problem — it compounds daily. How we quantify it, communicate it to stakeholders, and address it without halting delivery.",
    date: "April 2025",
    category: "Engineering",
  },
  {
    slug: "predictability-over-speed",
    title: "Predictability Over Speed: How We Think About Delivery",
    description:
      "Fast delivery is easy to sell. Predictable delivery is what actually builds trust. We explain why we optimise for consistency, not velocity.",
    date: "March 2025",
    category: "Delivery",
  },
  {
    slug: "iso-27001-in-practice",
    title: "ISO 27001 in Practice: What Security Certification Actually Means",
    description:
      "Most teams treat ISO 27001 as a badge. We treat it as a baseline. A candid look at what the certification requires and what it doesn't cover.",
    date: "February 2025",
    category: "Security",
  },
  {
    slug: "building-long-term-client-partnerships",
    title: "What Long-Term Client Partnerships Actually Require",
    description:
      "We've worked with some clients for over a decade. It's not about account management — it's about accountability and solving the right problems at the right time.",
    date: "January 2025",
    category: "Culture",
  },
]

/* ─────────────────────────────────────────────────────────────
   VISUALS — one per post, same quality, same h-48 container
   ───────────────────────────────────────────────────────────── */

/* 1 · Engineering — broken pipeline */
function Visual1() {
  const nodes = [60, 148, 236, 324]
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: "#f2f0ed" }}>
      <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <line x1="76"  y1="110" x2="132" y2="110" stroke="#c9c4bd" strokeWidth="2" />
        <line x1="164" y1="110" x2="220" y2="110" stroke="#fb6e3e" strokeWidth="2" strokeDasharray="5 4" opacity="0.7" />
        <line x1="252" y1="110" x2="308" y2="110" stroke="#c9c4bd" strokeWidth="2" />
        {nodes.map((cx, i) => (
          <g key={cx}>
            <circle cx={cx} cy="110" r="16" fill={i === 1 ? "#fb6e3e" : "#1a1916"} opacity={i === 1 ? 0.15 : 0.07} />
            <circle cx={cx} cy="110" r="8"  fill={i === 1 ? "#fb6e3e" : "#1a1916"} opacity={i === 1 ? 0.55 : 0.22} />
          </g>
        ))}
        <line x1="186" y1="102" x2="198" y2="118" stroke="#fb6e3e" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
        <line x1="198" y1="102" x2="186" y2="118" stroke="#fb6e3e" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />
        {nodes.map((cx, i) => (
          <rect key={`l${i}`} x={cx - 18} y="134" width="36" height="4" rx="2" fill="#1a1916" opacity="0.1" />
        ))}
      </svg>
    </div>
  )
}

/* 2 · Systems Design — architecture layer stack */
function Visual2() {
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
}

/* 3 · Engineering — compounding debt curve */
function Visual3() {
  const pts = "56,186 88,178 120,165 152,149 184,129 216,105 248,80 280,56 312,36 344,22"
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: "#f0eee9" }}>
      <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
        {[70, 110, 150, 190].map(y => (
          <line key={y} x1="40" y1={y} x2="370" y2={y} stroke="#1a1916" strokeWidth="0.5" opacity="0.06" />
        ))}
        <polygon points={`56,198 ${pts} 344,198`} fill="#fb6e3e" opacity="0.07" />
        <polyline points={pts} fill="none" stroke="#fb6e3e" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round" opacity="0.65" />
        <line x1="40" y1="198" x2="370" y2="198" stroke="#1a1916" strokeWidth="1" opacity="0.1" />
        <line x1="56" y1="18"  x2="56"  y2="198" stroke="#1a1916" strokeWidth="1" opacity="0.1" />
        <circle cx="344" cy="22" r="5"  fill="#fb6e3e" opacity="0.75" />
        <circle cx="344" cy="22" r="10" fill="#fb6e3e" opacity="0.12" />
        <rect x="64"  y="194" width="26" height="3" rx="1.5" fill="#1a1916" opacity="0.11" />
        <rect x="330" y="194" width="26" height="3" rx="1.5" fill="#1a1916" opacity="0.11" />
      </svg>
    </div>
  )
}

/* 4 · Delivery — cadence bars */
function Visual4() {
  const bars = [62, 68, 64, 66, 120, 63, 65, 68]
  const barW = 28
  const gap  = 16
  const startX = (400 - bars.length * (barW + gap) + gap) / 2
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: "#edeae4" }}>
      <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <line x1="36" y1="130" x2="364" y2="130" stroke="#fb6e3e" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
        {bars.map((h, i) => {
          const x = startX + i * (barW + gap)
          const isOutlier = h > 100
          return (
            <rect
              key={i}
              x={x} y={200 - h} width={barW} height={h} rx="3"
              fill={isOutlier ? "#fb6e3e" : "#1a1916"}
              opacity={isOutlier ? 0.45 : 0.12}
            />
          )
        })}
        <line x1="36" y1="200" x2="364" y2="200" stroke="#1a1916" strokeWidth="1" opacity="0.1" />
      </svg>
    </div>
  )
}

/* 5 · Security — concentric permission rings */
const VISUAL5_TICK_MARKS = [0, 60, 120, 180, 240, 300].map(deg => {
  const rad = (deg * Math.PI) / 180
  const r1 = 84, r2 = 91
  return {
    deg,
    x1: Number((200 + r1 * Math.cos(rad)).toFixed(2)),
    y1: Number((110 + r1 * Math.sin(rad)).toFixed(2)),
    x2: Number((200 + r2 * Math.cos(rad)).toFixed(2)),
    y2: Number((110 + r2 * Math.sin(rad)).toFixed(2)),
  }
})

function Visual5() {
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
        {VISUAL5_TICK_MARKS.map(mark => (
          <line key={mark.deg}
            x1={mark.x1} y1={mark.y1}
            x2={mark.x2} y2={mark.y2}
            stroke="#1a1916" strokeWidth="1.5" opacity="0.14" strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  )
}

/* 6 · Culture — two parallel timelines with persistent bridges */
function Visual6() {
  const bridgeXs = [80, 140, 200, 260, 320]
  return (
    <div className="w-full h-full relative overflow-hidden" style={{ background: "#f0ece5" }}>
      <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <line x1="52" y1="84"  x2="348" y2="84"  stroke="#1a1916" strokeWidth="1.5" opacity="0.12" />
        <line x1="52" y1="136" x2="348" y2="136" stroke="#1a1916" strokeWidth="1.5" opacity="0.12" />
        <rect x="52" y="72" width="36" height="4" rx="2" fill="#1a1916" opacity="0.12" />
        <rect x="52" y="144" width="44" height="4" rx="2" fill="#1a1916" opacity="0.12" />
        {bridgeXs.map((x, i) => (
          <g key={x}>
            <line x1={x} y1="84" x2={x} y2="136" stroke="#fb6e3e" strokeWidth="1.5" opacity="0.4" />
            <circle cx={x} cy="84"  r="4" fill="#fb6e3e" opacity={0.5 + i * 0.06} />
            <circle cx={x} cy="136" r="4" fill="#fb6e3e" opacity={0.5 + i * 0.06} />
          </g>
        ))}
        <polygon
          points={`52,84 ${bridgeXs.map(x => `${x},84`).join(" ")} ${bridgeXs.slice().reverse().map(x => `${x},136`).join(" ")} 52,136`}
          fill="#fb6e3e"
          opacity="0.04"
        />
      </svg>
    </div>
  )
}

const visuals = [Visual1, Visual2, Visual3, Visual4, Visual5, Visual6]

/* ─────────────────────────────────────────────────────────────
   UNIFIED POST CARD
   ───────────────────────────────────────────────────────────── */

function PostCard({
  post,
  index,
  inView,
}: {
  post: (typeof posts)[0]
  index: number
  inView: boolean
}) {
  const Visual = visuals[posts.indexOf(post)] ?? Visual1

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.42, delay: index * 0.08 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="w-full h-48 rounded-xl overflow-hidden mb-5">
          <Visual />
        </div>

        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-[11px] font-semibold text-[#fb6e3e] tracking-widest uppercase">
            {post.category}
          </span>
          <span className="text-[#d6d3d1] text-[10px]">—</span>
          <span className="text-[11px] text-[#b8b5b0]">{post.date}</span>
        </div>

        <h2 className="text-[17px] font-semibold text-[#1a1916] tracking-[-0.03em] leading-snug mb-2.5 group-hover:text-[#fb6e3e] transition-colors duration-150">
          {post.title}
        </h2>

        <p className="text-sm text-[#78716c] leading-relaxed mb-4 line-clamp-2">
          {post.description}
        </p>

        <span className="inline-flex items-center gap-1.5 text-sm text-[#a8a29e] group-hover:text-[#fb6e3e] transition-colors duration-150">
          Read
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────────
   BLOG LISTING
   ───────────────────────────────────────────────────────────── */

export function BlogListing() {
  const [activeCategory, setActiveCategory] = useState("All")

  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" })

  const filtered = posts.filter(
    p => activeCategory === "All" || p.category === activeCategory
  )

  return (
    <main className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="pt-32 pb-10 lg:pt-40 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 24 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-5 block">
              The Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] leading-tight mb-5 max-w-2xl">
              Insights on software, systems, and execution.
            </h1>
            <p className="text-lg text-[#6b6a67] leading-relaxed max-w-xl">
              Perspectives on engineering, delivery, systems design, and the work behind lasting software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ──────────────────────────────────── */}
      <div className="border-b border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-0 overflow-x-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative flex-shrink-0 px-4 py-4 text-sm transition-colors duration-150 ${
                  activeCategory === cat
                    ? "text-[#1a1916] font-semibold"
                    : "text-[#b8b5b0] hover:text-[#6b6a67] font-medium"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.span
                    layoutId="catLine"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#1a1916]"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── POST GRID ────────────────────────────────────────── */}
      <section className="pt-14 pb-28 lg:pt-16 lg:pb-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
              {filtered.map((post, index) => (
                <PostCard key={post.slug} post={post} index={index} inView={gridInView} />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <p className="text-sm text-[#a8a29e]">No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
