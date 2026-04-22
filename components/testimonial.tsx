"use client"

import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef, useState, useEffect, useCallback } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

// ─── Data ──────────────────────────────────────────────────────────────────────

const testimonials = [
  {
    quote:
      "WeCode4U transformed our vision into a world-class product. Their technical expertise, clear communication, and commitment to quality exceeded our expectations at every stage. They're not just a vendor — they're a true technology partner.",
    author: "Adam Atacan",
    role: "CEO, The Atacam Group",
    initials: "AA",
    industry: "Consumer Products",
  },
  {
    quote:
      "Thad has delivered exactly what he said he would, and to me, that means a lot. I still use the Postal Service twice every week. But for the future, I'm counting on Thad.",
    author: "Client",
    role: "eType Services",
    initials: "eT",
    industry: "Newspaper / Publishing",
  },
  {
    quote:
      "We needed a dependable long-term engineering partner that could scale with us. WeCode4U became an extension of our team from day one.",
    author: "Client",
    role: "SaaS Platform",
    initials: "SP",
    industry: "SaaS / Technology",
  },
  {
    quote:
      "They consistently delivered with transparency, ownership, and speed. Rare to find a partner that combines communication and execution this well.",
    author: "Client",
    role: "Enterprise Services",
    initials: "ES",
    industry: "Enterprise Services",
  },
]

const INTERVAL = 5500 // ms between auto-advances

// ─── Component ─────────────────────────────────────────────────────────────────

export function Testimonial() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [progress, setProgress] = useState(0)

  const n = testimonials.length

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir)
      setCurrent((c) => (c + dir + n) % n)
      setProgress(0)
    },
    [n]
  )

  // Auto-advance + progress bar
  useEffect(() => {
    if (paused) return
    const tick = 50 // ms per tick
    const steps = INTERVAL / tick
    let step = 0
    const id = setInterval(() => {
      step++
      setProgress((step / steps) * 100)
      if (step >= steps) {
        go(1)
        step = 0
      }
    }, tick)
    return () => clearInterval(id)
  }, [paused, current, go])

  const t = testimonials[current]

  return (
    <section
      className="py-20 lg:py-28 bg-[#fafaf9]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <span className="text-[11px] font-bold text-[#fb6e3e] tracking-widest uppercase mb-3 block">
              Client Stories
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1916] tracking-[-0.04em]">
              What our clients say
            </h2>
          </div>

          {/* Manual nav arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-[#e7e5e4] hover:border-[#fb6e3e]/30 bg-white hover:bg-[#fff7f4] flex items-center justify-center transition-all duration-200 group"
            >
              <ChevronLeft className="w-4 h-4 text-[#a8a29e] group-hover:text-[#fb6e3e] transition-colors" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-[#e7e5e4] hover:border-[#fb6e3e]/30 bg-white hover:bg-[#fff7f4] flex items-center justify-center transition-all duration-200 group"
            >
              <ChevronRight className="w-4 h-4 text-[#a8a29e] group-hover:text-[#fb6e3e] transition-colors" />
            </button>
          </div>
        </motion.div>

        {/* Card — fixed min-height so no height jump */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="relative"
        >
          {/* Large decorative quote mark */}
          <div
            className="absolute -top-3 -left-2 lg:-top-5 lg:-left-5 text-[5rem] lg:text-[7rem] font-serif text-[#fb6e3e]/[0.10] leading-none select-none pointer-events-none"
            aria-hidden
          >
            &ldquo;
          </div>

          <div className="relative bg-white rounded-2xl border border-[#e7e5e4] shadow-[0_4px_32px_rgba(0,0,0,0.05)] overflow-hidden">
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#f0eeec]">
              <motion.div
                className="h-full bg-[#fb6e3e] origin-left"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            <div className="p-8 lg:p-12">
              {/* Stars */}
              <div className="flex gap-1 mb-7">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              {/* Quote — AnimatePresence keeps card height stable */}
              <div className="min-h-[120px] sm:min-h-[100px] mb-8 relative overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.blockquote
                    key={current}
                    initial={{ opacity: 0, y: direction > 0 ? 14 : -14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: direction > 0 ? -14 : 14 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="text-lg lg:text-xl font-medium text-[#1a1916] leading-relaxed tracking-[-0.02em] max-w-2xl"
                  >
                    &ldquo;{t.quote}&rdquo;
                  </motion.blockquote>
                </AnimatePresence>
              </div>

              {/* Author row */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`author-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between gap-4"
                >
                  {/* Avatar + name */}
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#fb6e3e]/80 to-[#fb6e3e]/40 flex items-center justify-center text-white text-[13px] font-bold flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-[14px] font-semibold text-[#1a1916] leading-tight">{t.author}</div>
                      <div className="text-[12px] text-[#a8a29e] mt-0.5">{t.role}</div>
                    </div>
                  </div>

                  {/* Industry tag */}
                  <span className="hidden sm:inline-flex items-center text-[10.5px] font-semibold text-[#fb6e3e] bg-[#fb6e3e]/[0.07] px-3 py-1 rounded-md tracking-wide flex-shrink-0">
                    {t.industry}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1)
                setCurrent(i)
                setProgress(0)
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                i === current
                  ? "bg-[#fb6e3e] w-6"
                  : "bg-[#e7e5e4] hover:bg-[#c9c5c0] w-1.5"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
