"use client"

import { ArrowRight, Check } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

// ─── Delivery Journey Visual ───────────────────────────────────────────────────

const milestones = [
  { id: 0, label: "Discover",  sub: "Understand deeply",   pct: 10 },
  { id: 1, label: "Architect", sub: "Design precisely",    pct: 36 },
  { id: 2, label: "Build",     sub: "Execute rigorously",  pct: 63 },
  { id: 3, label: "Launch",    sub: "Deliver confidently", pct: 90 },
]

function DeliveryJourneyVisual() {
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  useEffect(() => {
    if (!inView) return
    const t = setInterval(() => setActive(p => (p + 1) % milestones.length), 2600)
    return () => clearInterval(t)
  }, [inView])

  return (
    <div ref={ref} className="relative w-full h-[260px] sm:h-[300px] lg:h-[340px] flex items-center">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: ["-10%", "10%", "-10%"], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-0 right-0 h-32 bg-[#fb6e3e]/10 blur-[100px] rounded-full"
        />
      </div>

      {/* Rail */}
      <div className="absolute w-full h-px bg-[#e7e5e4] top-1/2 -translate-y-1/2" />
      <motion.div
        className="absolute h-px bg-[#fb6e3e] top-1/2 -translate-y-1/2"
        initial={{ width: "0%" }}
        animate={{ width: `${milestones[active].pct}%` }}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      {/* Milestones */}
      {milestones.map((m, i) => {
        const isActive = i === active
        const isPast = i < active
        const isAbove = i % 2 === 0
        return (
          <div key={m.id} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${m.pct}%`, top: "50%" }}>
            <motion.div
              className={`w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 ${isActive || isPast ? "bg-[#fb6e3e]" : "bg-[#d6d3d1]"}`}
              animate={{ scale: isActive ? 1.4 : 1 }}
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-40"
              style={isAbove ? { bottom: "24px" } : { top: "24px" }}
              animate={{ opacity: isActive ? 1 : 0.4, y: isActive ? 0 : (isAbove ? 5 : -5) }}
            >
              <div className={`p-3 rounded-2xl border transition-all duration-500 ${isActive ? "bg-white border-[#fb6e3e]/20 shadow-[0_8px_30px_rgba(251,110,62,0.15)]" : "bg-white/80 border-transparent"}`}>
                <div className={`text-xs font-bold ${isActive ? "text-[#1a1916]" : "text-[#a8a29e]"}`}>{m.label}</div>
                <div className="text-[10px] text-[#78716c] mt-0.5">{m.sub}</div>
              </div>
            </motion.div>
          </div>
        )
      })}

      {/* Signal Dot */}
      <motion.div
        className="absolute w-3 h-3 rounded-full bg-[#fb6e3e] shadow-[0_0_20px_rgba(251,110,62,0.6)] z-20 -translate-x-1/2 -translate-y-1/2"
        style={{ top: "50%" }}
        animate={{ left: `${milestones[active].pct}%` }}
        transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  )
}

// ─── Quality Engine Visual ─────────────────────────────────────────────────────

const qualityNodes = [
  { label: "On-Time Delivery",    value: "96%",  pulseDelay: 0   },
  { label: "Client Satisfaction", value: "100%", pulseDelay: 0.7 },
  { label: "CI/CD Ready",         value: "✓",    pulseDelay: 1.4 },
  { label: "QA Automated",        value: "85%+", pulseDelay: 2.1 },
]

function NodeCard({ node }: { node: typeof qualityNodes[0] }) {
  return (
    <div className="w-[100px] bg-white border border-[#ebe9e7] rounded-2xl p-3 text-center shadow-[0_2px_14px_rgba(0,0,0,0.05)]">
      <div className="text-[16px] font-semibold text-[#1a1916] tracking-tight leading-none">{node.value}</div>
      <div className="text-[8px] text-[#a8a29e] tracking-wide mt-1.5 leading-tight">{node.label}</div>
      <motion.div
        className="w-1 h-1 rounded-full bg-[#fb6e3e] mx-auto mt-2"
        animate={{ scale: [1, 1.7, 1], opacity: [0.35, 1, 0.35] }}
        transition={{ duration: 3, repeat: Infinity, delay: node.pulseDelay, ease: "easeInOut" }}
      />
    </div>
  )
}

function QualityEngineVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="w-full flex items-center justify-center py-4">
      <div className="relative grid place-items-center" style={{ gridTemplateColumns: "100px 100px 100px", gridTemplateRows: "auto 100px auto", gap: "32px", width: "fit-content" }}>
        {/* Row 1 */}
        <motion.div initial={{ opacity: 0, y: 6 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }}>
          <NodeCard node={qualityNodes[0]} />
        </motion.div>
        <div />
        <motion.div initial={{ opacity: 0, y: 6 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 }}>
          <NodeCard node={qualityNodes[1]} />
        </motion.div>

        {/* Row 2 */}
        <div />
        <motion.div
          className="relative flex flex-col items-center justify-center text-center rounded-full bg-white border border-[#e0dedd] z-10"
          style={{ width: "100px", height: "100px", boxShadow: "0 4px 28px rgba(0,0,0,0.06)" }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <motion.div className="absolute inset-0 rounded-full border border-[#fb6e3e]/25"
            animate={{ scale: [1, 1.22, 1], opacity: [0.65, 0, 0.65] }}
            transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }} />
          <div className="text-[9.5px] font-bold text-[#1a1916] leading-snug px-2">Quality<br />by Design</div>
          <div className="w-4 h-px bg-[#e7e5e4] my-1" />
          <div className="text-[7.5px] text-[#b5b0ab] tracking-widest uppercase">Core Engine</div>
        </motion.div>
        <div />

        {/* Row 3 */}
        <motion.div initial={{ opacity: 0, y: -6 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.35 }}>
          <NodeCard node={qualityNodes[2]} />
        </motion.div>
        <div />
        <motion.div initial={{ opacity: 0, y: -6 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.45 }}>
          <NodeCard node={qualityNodes[3]} />
        </motion.div>

        {/* Connector lines */}
        {inView && (
          <svg className="pointer-events-none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible", zIndex: 0 }}>
            <motion.line x1="13.7%" y1="15%" x2="50%" y2="50%" stroke="#e7e5e4" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }} />
            <motion.line x1="86.3%" y1="15%" x2="50%" y2="50%" stroke="#e7e5e4" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }} />
            <motion.line x1="13.7%" y1="85%" x2="50%" y2="50%" stroke="#e7e5e4" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.5 }} />
            <motion.line x1="86.3%" y1="85%" x2="50%" y2="50%" stroke="#e7e5e4" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }} />
          </svg>
        )}
      </div>
    </div>
  )
}

// ─── Page Content ──────────────────────────────────────────────────────────────

export function HowWeWorkContent() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="pt-32 pb-10 lg:pt-40 lg:pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-5 block">
              How We Work
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] mb-5 text-balance">
              A Proven Delivery System
            </h1>
            <p className="text-xl lg:text-2xl text-[#6b6a67] leading-relaxed max-w-2xl">
              Structured processes, senior engineers, and a delivery culture built around your outcomes.
            </p>
          </div>
          <DeliveryJourneyVisual />
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 lg:py-28 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">
                Our Methodology
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1916] tracking-[-0.04em] mb-6">
                Agile at Scale, Quality by Design
              </h2>
              <p className="text-lg text-[#78716c] leading-relaxed mb-8">
                We combine the flexibility of agile methodologies with the rigor of enterprise software development.
                Our certified processes ensure consistent quality across every project.
              </p>
              <div className="space-y-4">
                {[
                  "Two-week sprint cycles with regular demos",
                  "Continuous integration and automated testing",
                  "Daily standups and transparent communication",
                  "Regular retrospectives for continuous improvement",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#fb6e3e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#57534e]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <QualityEngineVisual />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] mb-6 text-balance">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-[#78716c] mb-8">
            Let&apos;s begin with a discovery session to understand your unique needs.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#fb6e3e] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ea5d2d] transition-colors">
            Schedule a Call
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  )
}
