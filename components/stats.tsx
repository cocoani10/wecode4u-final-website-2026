"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"
import { Award, Clock, Users, Lock, FileCheck } from "lucide-react"

// ─── Animated counter ──────────────────────────────────────────────────────────

function CountUp({ to, suffix = "", duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v) + suffix)

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(count, to, { duration, ease: "easeOut" })
    return ctrl.stop
  }, [inView, to, count, duration])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const supporting = [
  {
    icon: Clock,
    value: 30,
    suffix: "+",
    label: "Years Experience",
    sub: "Deep enterprise expertise",
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Client Retention",
    sub: "Long-term partnerships",
  },
]

const certs = [
  {
    icon: Lock,
    code: "ISO 27001",
    label: "Information Security",
    sub: "Independently audited",
  },
  {
    icon: FileCheck,
    code: "ISO 27701",
    label: "Privacy Management",
    sub: "GDPR-aligned by design",
  },
]

// ─── Component ─────────────────────────────────────────────────────────────────

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header — left-aligned */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-[11px] font-bold text-[#fb6e3e] tracking-widest uppercase mb-3 block">
            By The Numbers
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1916] tracking-[-0.04em]">
            Trusted by Enterprise Teams
          </h2>
        </motion.div>

        {/* Bento grid — hero + supporting + certs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] gap-3">

          {/* ── HERO TILE — 500+ Projects ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="group relative sm:row-span-2 bg-[#fafaf9] hover:bg-white border border-[#e7e5e4] hover:border-[#fb6e3e]/20 rounded-2xl p-7 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient warm glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#fb6e3e]/[0.05] rounded-full blur-[50px] pointer-events-none" />
            {/* Orange top accent */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#fb6e3e] via-[#fb6e3e]/50 to-transparent" />

            <div>
              <div className="w-9 h-9 rounded-xl bg-white border border-[#e7e5e4] group-hover:border-[#fb6e3e]/20 flex items-center justify-center mb-7 shadow-[0_1px_6px_rgba(0,0,0,0.04)] transition-colors duration-300">
                <Award className="w-4 h-4 text-[#fb6e3e]" />
              </div>
              <div className="text-[3rem] lg:text-[3.5rem] font-bold text-[#1a1916] tracking-[-0.05em] leading-none mb-2">
                <CountUp to={500} suffix="+" />
              </div>
              <div className="text-[15px] font-semibold text-[#1a1916] mb-1">Projects Delivered</div>
              <div className="text-[13px] text-[#a8a29e]">Successful enterprise deployments globally</div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#f0eeec] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
              <span className="text-[11px] text-[#a8a29e] font-medium tracking-wide">Active since 1994</span>
            </div>
          </motion.div>

          {/* ── SUPPORTING METRICS ── */}
          {supporting.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group bg-white hover:bg-[#fafaf9] border border-[#e7e5e4] hover:border-[#fb6e3e]/15 rounded-2xl p-6 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-center gap-5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#fafaf9] group-hover:bg-white border border-[#e7e5e4] group-hover:border-[#fb6e3e]/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <item.icon className="w-4 h-4 text-[#a8a29e] group-hover:text-[#fb6e3e] transition-colors duration-250" />
              </div>
              <div>
                <div className="text-[1.8rem] font-bold text-[#1a1916] tracking-[-0.04em] leading-none mb-1">
                  <CountUp to={item.value} suffix={item.suffix} />
                </div>
                <div className="text-[13px] font-semibold text-[#44403c]">{item.label}</div>
                <div className="text-[11px] text-[#a8a29e] mt-0.5">{item.sub}</div>
              </div>
            </motion.div>
          ))}

          {/* ── ISO CERTIFICATION CARDS ── */}
          {certs.map((cert, i) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group bg-white hover:bg-[#fafaf9] border border-[#e7e5e4] hover:border-[#fb6e3e]/15 rounded-2xl p-6 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all duration-300 flex items-center gap-5"
            >
              <div className="w-9 h-9 rounded-xl bg-[#fafaf9] group-hover:bg-white border border-[#e7e5e4] group-hover:border-[#fb6e3e]/20 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                <cert.icon className="w-4 h-4 text-[#a8a29e] group-hover:text-[#fb6e3e] transition-colors duration-250" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[13px] font-bold text-[#1a1916] tracking-tight">{cert.code}</span>
                  <span className="inline-flex items-center gap-1 text-[8.5px] font-bold text-[#16a34a] bg-[#dcfce7] px-1.5 py-0.5 rounded-full tracking-wide uppercase">
                    <div className="w-1 h-1 rounded-full bg-[#16a34a]" />
                    Verified
                  </span>
                </div>
                <div className="text-[12px] font-medium text-[#44403c]">{cert.label}</div>
                <div className="text-[11px] text-[#a8a29e] mt-0.5">{cert.sub}</div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}
