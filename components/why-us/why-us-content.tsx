"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { Shield, Users, Clock, Award, Check, ArrowRight, GraduationCap, Zap, HeartHandshake, Lock, FileCheck } from "lucide-react"
import { CountUp } from "@/components/shared/count-up"

// ─── Data ──────────────────────────────────────────────────────────────────────

const trustStats = [
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 30,  suffix: "+", label: "Years in business"  },
  { value: 100, suffix: "%", label: "Client retention"   },
  { value: 2,   suffix: "×", label: "Certified"          },
]

const comparisonRows = [
  {
    topic: "Team Access",
    wecode: "Direct access to engineers and accountable leads — no intermediaries.",
    typical: "Layers of account managers, project coordinators, and handoff delays.",
  },
  {
    topic: "Talent Quality",
    wecode: "Senior engineers with 5+ years of production experience. No exceptions.",
    typical: "Mixed junior and mid-level staffing, with frequent knowledge handoffs.",
  },
  {
    topic: "Execution Model",
    wecode: "Stable sprint velocity, ownership mindset, and delivery accountability.",
    typical: "Missed deadlines, reactive firefighting, and scope creep as the norm.",
  },
  {
    topic: "Pricing Clarity",
    wecode: "Transparent engagement models — no hidden fees or change-order surprises.",
    typical: "Opaque contracts with unanticipated costs added throughout the project.",
  },
  {
    topic: "Knowledge Transfer",
    wecode: "Structured handover documentation and fully maintainable codebases.",
    typical: "Scattered internal knowledge, creating long-term dependency and risk.",
  },
]

const teamQualities = [
  { title: "Selective Hiring",       description: "Multi-stage technical, communication, and culture screening.",                       stat: "Top 3% accepted"         },
  { title: "Continuous Learning",    description: "Engineers continuously sharpen skills through structured development.",               stat: "10% time invested annually" },
  { title: "Cross-Industry Depth",   description: "Experience across fintech, healthcare, logistics, SaaS and more.",                   stat: "15+ industries served"   },
]

const certifications = [
  { code: "ISO 27001", title: "Information Security Management", description: "Enterprise-grade data protection and information security controls, independently verified.", icon: Lock },
  { code: "ISO 27701", title: "Privacy Information Management",  description: "GDPR-aligned privacy controls built into our delivery process — not bolted on afterward.",   icon: FileCheck },
]

// ─── Trust Infrastructure Strip ───────────────────────────────────────────────

function TrustInfrastructureStrip() {
  return (
    <div className="relative w-full h-[120px] sm:h-[140px] lg:h-[160px] mt-14 rounded-2xl lg:rounded-[1.75rem] border border-[#eeeceb] bg-white overflow-hidden flex items-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[200%] bg-[#fffaf8] rounded-full blur-[70px]" />
        <motion.div animate={{ x: ["-3%", "3%", "-3%"] }} transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
          className="absolute inset-x-1/4 inset-y-0 bg-[#fb6e3e]/[0.04] blur-[50px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_120%_at_50%_50%,transparent_40%,rgba(255,255,255,0.7)_100%)]" />
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[1]" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <line x1="0" y1="50" x2="1000" y2="50" stroke="#e7e5e4" strokeWidth="0.8" />
        <motion.line x1="0" y1="50" x2="1000" y2="50" stroke="#fb6e3e" strokeWidth="1.2" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: [0, 1, 1], opacity: [0, 0.35, 0] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }} />
      </svg>

      <motion.div className="absolute w-1.5 h-1.5 bg-[#fb6e3e] rounded-full z-10 shadow-[0_0_8px_rgba(251,110,62,0.5)] -translate-y-1/2" style={{ top: "50%" }}
        animate={{ left: ["-2%", "102%"], opacity: [0, 0.9, 0.9, 0] }} transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }} />
      <motion.div className="absolute w-1.5 h-1.5 bg-[#fb6e3e] rounded-full z-10 shadow-[0_0_8px_rgba(251,110,62,0.5)] -translate-y-1/2" style={{ top: "50%" }}
        animate={{ left: ["-2%", "102%"], opacity: [0, 0.9, 0.9, 0] }} transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, repeatDelay: 2, delay: 4 }} />

      <div className="relative z-10 w-full h-full flex items-center justify-between px-8 sm:px-14 lg:px-20 pointer-events-none">
        <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}
          className="flex items-center gap-2.5 bg-white border border-[#eeeceb] rounded-xl px-3.5 py-2.5 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="w-6 h-6 rounded-lg bg-[#f9f9f8] border border-[#e7e5e4] flex items-center justify-center flex-shrink-0">
            <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-[#1a1916] tracking-tight leading-none">ISO Certified</div>
            <div className="text-[9px] text-[#a8a29e] tracking-wide mt-0.5 leading-none">27001 · 27701</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} viewport={{ once: true }}
          className="flex items-center gap-2.5 bg-white border border-[#e2e0de] rounded-xl px-3.5 py-2.5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
          <div className="w-6 h-6 rounded-lg bg-[#fdf8f6] border border-[#f0e9e5] flex items-center justify-center flex-shrink-0">
            <Lock className="w-3 h-3 text-[#fb6e3e]" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-[#1a1916] tracking-tight leading-none">Security Layer</div>
            <div className="text-[9px] text-[#a8a29e] tracking-wide mt-0.5 leading-none">End-to-end</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}
          className="hidden sm:flex items-center gap-2.5 bg-white border border-[#eeeceb] rounded-xl px-3.5 py-2.5 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
          <div className="w-6 h-6 rounded-lg bg-[#f9f9f8] border border-[#e7e5e4] flex items-center justify-center flex-shrink-0">
            <motion.div className="w-1.5 h-1.5 rounded-full bg-[#fb6e3e]"
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-[#1a1916] tracking-tight leading-none">Delivery Live</div>
            <div className="text-[9px] text-[#a8a29e] tracking-wide mt-0.5 leading-none">Monitored</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// ─── Page Content ──────────────────────────────────────────────────────────────

export function WhyUsContent() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const diffRef = useRef(null)
  const diffInView = useInView(diffRef, { once: true, margin: "-100px" })
  const compRef = useRef(null)
  const compInView = useInView(compRef, { once: true, margin: "-100px" })
  const certRef = useRef(null)
  const certInView = useInView(certRef, { once: true, margin: "-100px" })
  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" })

  return (
    <main className="bg-white">

      {/* SECTION 1 — HERO */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-[#fb6e3e]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div ref={heroRef} initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.7, ease: "easeOut" }} className="max-w-3xl">
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-6 block">Why WeCode4U</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1a1916] tracking-[-0.04em] mb-8 text-balance">
              The partner that stays.
            </h1>
            <p className="text-xl lg:text-2xl text-[#6b6a67] leading-relaxed max-w-2xl">
              We build enterprise-grade software with dedicated teams of senior engineers. Organizations choose us for rigorous quality, flawless delivery, and long-term trust.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <TrustInfrastructureStrip />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 mt-16 border-t border-[#e7e5e4] pt-12">
            {trustStats.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                whileHover={{ y: -2, transition: { duration: 0.2, ease: "easeOut" } }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className={"group cursor-default " + (i === 0 ? "pr-6 lg:pr-10" : i === 1 ? "pl-6 lg:px-10 border-l border-[#e7e5e4]" : i === 2 ? "pr-6 lg:px-10 lg:border-l lg:border-[#e7e5e4]" : "pl-6 lg:pl-10 border-l border-[#e7e5e4]")}
              >
                <div className="text-4xl lg:text-[2.75rem] font-semibold text-[#1a1916] tracking-[-0.03em] mb-1.5 transition-colors duration-200 group-hover:text-[#1a1916]">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[14px] font-medium text-[#78716c] leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — BENTO */}
      <section className="py-24 lg:py-32 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div ref={diffRef} initial={{ opacity: 0, y: 30 }} animate={diffInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="mb-16 max-w-2xl">
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">Our Differentiators</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em]">Built for serious teams.</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4">
            {/* Hero card */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={diffInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.6, delay: 0.05 }}
              className="group relative bg-white border border-[#e7e5e4] hover:border-[#fb6e3e]/25 rounded-2xl p-8 lg:p-10 hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.07)] transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#fb6e3e]/[0.06] rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#fb6e3e] via-[#fb6e3e]/50 to-transparent" />
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#fb6e3e]/10 border border-[#fb6e3e]/15 flex items-center justify-center mb-10">
                  <Clock className="w-5 h-5 text-[#fb6e3e]" strokeWidth={1.5} />
                </div>
                <div className="text-[3.5rem] lg:text-[4rem] font-bold text-[#1a1916] tracking-[-0.05em] leading-none mb-3">30+</div>
                <h3 className="text-xl font-bold text-[#1a1916] tracking-tight mb-4">Years Proven Delivery</h3>
                <p className="text-[15px] text-[#6b6a67] leading-relaxed max-w-xs">Deep organizational experience navigating complex architecture and platform shifts.</p>
              </div>
              <div className="mt-10 pt-6 border-t border-[#f0eeec] flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fb6e3e]/50" />
                <span className="text-[11px] font-medium text-[#a8a29e] tracking-wide">100% Client Retention</span>
              </div>
            </motion.div>

            {/* 2×2 grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { delay: 0.12, icon: Shield, title: "2× Certified", body: "ISO 27001 and ISO 27701 — independently audited security and privacy standards.", badge: ["ISO 27001", "ISO 27701"] },
                { delay: 0.18, icon: GraduationCap, title: "Senior Engineers Only", body: "Every developer brings 5+ years of production experience. No billing for learning time.", tag: "5+ yrs minimum" },
                { delay: 0.24, icon: Users, title: "Dedicated Long-Term Teams", body: "Your own cohesive pod of engineers integrated deeply into your culture and goals.", bg: true },
                { delay: 0.30, icon: Zap, title: "End-to-End Ownership", body: "Product, design, engineering, and QA under one roof. No vendor fragmentation.", bg: true },
              ].map((card) => (
                <motion.div key={card.title} initial={{ opacity: 0, y: 24 }} animate={diffInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.55, delay: card.delay }}
                  className={`group relative ${card.bg ? "bg-[#fafaf9] hover:bg-white" : "bg-white"} border border-[#e7e5e4] hover:border-[#fb6e3e]/20 rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col`}>
                  <div className="w-9 h-9 rounded-xl bg-[#fafaf9] border border-[#e7e5e4] flex items-center justify-center mb-5 group-hover:border-[#fb6e3e]/20 transition-colors duration-300">
                    <card.icon className="w-4 h-4 text-[#a8a29e] group-hover:text-[#fb6e3e] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#1a1916] tracking-tight mb-2">{card.title}</h3>
                  <p className="text-[13.5px] text-[#6b6a67] leading-relaxed flex-1">{card.body}</p>
                  {card.badge && (
                    <div className="mt-4 flex gap-1.5">
                      {card.badge.map(b => <span key={b} className="text-[9.5px] font-bold text-[#fb6e3e] bg-[#fb6e3e]/[0.07] px-2 py-1 rounded-md tracking-wide">{b}</span>)}
                    </div>
                  )}
                  {card.tag && <div className="mt-4 text-[10px] font-bold text-[#a8a29e] tracking-widest uppercase">{card.tag}</div>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — TALENT */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24 items-start mb-20">
            <motion.div ref={teamRef} initial={{ opacity: 0, y: 24 }} animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.6 }}>
              <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">The Talent</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] leading-tight">Seniors only.<br />No exceptions.</h2>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xl text-[#6b6a67] leading-relaxed lg:pt-14">
              We don&apos;t hire juniors. You won&apos;t pay for someone learning on the job.
              Every engineer on your project has already solved hard problems in production.
            </motion.p>
          </div>

          <div className="border-t border-[#e7e5e4]">
            {teamQualities.map((quality, i) => (
              <motion.div key={quality.title} initial={{ opacity: 0, y: 16 }} animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.12, ease: "easeOut" }}
                className="group grid grid-cols-1 md:grid-cols-[180px_1fr_auto] lg:grid-cols-[220px_1fr_200px] items-center gap-6 lg:gap-16 py-8 border-b border-[#f0eeec] hover:bg-[#fafaf9] px-4 -mx-4 rounded-2xl transition-all duration-250">
                <div className="flex items-center gap-4">
                  <span className="text-[11px] font-bold text-[#c9c5c0] tabular-nums w-5">0{i + 1}</span>
                  <h3 className="text-[17px] font-bold text-[#1a1916] tracking-tight group-hover:text-black transition-colors duration-200">{quality.title}</h3>
                </div>
                <p className="text-[15px] text-[#6b6a67] leading-relaxed max-w-lg">{quality.description}</p>
                <div className="flex items-center gap-3 md:justify-end">
                  <div className="h-6 w-px bg-[#e7e5e4] hidden md:block" />
                  <span className="text-[12px] font-bold text-[#fb6e3e] tracking-widest uppercase whitespace-nowrap">{quality.stat}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMPARISON */}
      <section className="py-24 lg:py-32 bg-[#fafaf9]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div ref={compRef} initial={{ opacity: 0, y: 30 }} animate={compInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6 }} className="mb-16 max-w-xl">
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">Side by side</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] mb-5 text-balance">WeCode4U vs. the typical agency</h2>
            <p className="text-lg text-[#6b6a67] leading-relaxed">The difference isn&apos;t promises. It&apos;s how delivery actually feels.</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 mb-3 px-1">
            <div className="text-[11px] font-bold text-[#fb6e3e] tracking-widest uppercase px-5">WeCode4U</div>
            <div className="text-[11px] font-bold text-[#b5b0ab] tracking-widest uppercase px-5">Typical Agency</div>
          </div>

          <div className="flex flex-col gap-2">
            {comparisonRows.map((row, i) => (
              <motion.div key={row.topic} initial={{ opacity: 0, y: 18 }} animate={compInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: "easeOut" }} className="group">
                <div className="text-[10px] font-bold text-[#c9c5c0] tracking-widest uppercase mb-1.5 px-1">{row.topic}</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative bg-white border border-[#e7e5e4] group-hover:border-[#fb6e3e]/20 rounded-2xl px-5 py-4 overflow-hidden group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300">
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#fb6e3e] rounded-l-2xl" />
                    <p className="text-[13.5px] text-[#1a1916] leading-relaxed font-medium">{row.wecode}</p>
                  </div>
                  <div className="bg-white border border-[#eeeceb] rounded-2xl px-5 py-4 transition-all duration-300">
                    <p className="text-[13.5px] text-[#9c9792] leading-relaxed">{row.typical}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — CERTIFICATIONS */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#f0eeec]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
            <motion.div ref={certRef} initial={{ opacity: 0, y: 24 }} animate={certInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.6 }} className="lg:sticky lg:top-32">
              <span className="text-[11px] font-bold text-[#fb6e3e] tracking-widest uppercase mb-4 block">Compliance</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1916] tracking-[-0.04em] mb-4 leading-tight">Two certifications.<br />One high bar.</h2>
              <p className="text-[15px] text-[#6b6a67] leading-relaxed mb-8 max-w-xs">Internationally recognized standards — independently audited, not self-assessed.</p>
              <div className="space-y-0 border-t border-[#f0eeec]">
                {["Independently audited and externally verified", "Documented processes across every delivery stage", "Risk management built into every project", "GDPR-aligned data handling by default"].map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, x: -8 }} animate={certInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }} transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3.5 py-3.5 border-b border-[#f5f4f2]">
                    <div className="w-5 h-5 rounded-lg bg-[#fb6e3e]/8 border border-[#fb6e3e]/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#fb6e3e]" strokeWidth={3} />
                    </div>
                    <span className="text-[13.5px] text-[#44403c] font-medium leading-snug">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div key={cert.code} initial={{ opacity: 0, y: 20 }} animate={certInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.55, delay: 0.25 + i * 0.14 }}
                  className="group relative bg-[#fafaf9] hover:bg-white border border-[#e7e5e4] hover:border-[#fb6e3e]/20 rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] transition-all duration-300">
                  <div className="h-[2px] w-full bg-gradient-to-r from-[#fb6e3e]/80 via-[#fb6e3e]/30 to-transparent" />
                  <div className="p-6 flex items-start gap-5">
                    <motion.div className="w-11 h-11 rounded-xl bg-white border border-[#e7e5e4] group-hover:border-[#fb6e3e]/20 flex items-center justify-center flex-shrink-0 shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-colors duration-300"
                      initial={{ scale: 0.85 }} animate={certInView ? { scale: 1 } : { scale: 0.85 }}
                      transition={{ duration: 0.4, delay: 0.35 + i * 0.14, type: "spring", stiffness: 200 }}>
                      <cert.icon className="w-5 h-5 text-[#fb6e3e]" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-[11px] font-bold text-[#fb6e3e] tracking-widest uppercase">{cert.code}</span>
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#16a34a] bg-[#dcfce7] px-1.5 py-0.5 rounded-full tracking-wide uppercase">
                          <div className="w-1 h-1 rounded-full bg-[#16a34a]" />
                          Verified
                        </span>
                      </div>
                      <h3 className="text-[16px] font-bold text-[#1a1916] mb-1.5 tracking-tight">{cert.title}</h3>
                      <p className="text-[13px] text-[#6b6a67] leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={certInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-2.5 pt-1 pl-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#a8a29e]" />
                <span className="text-[11.5px] text-[#a8a29e] leading-snug">Certifications maintained through annual independent third-party audits.</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#fafaf9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1916] tracking-[-0.04em] mb-8 text-balance">
              Let&apos;s talk about your next build.
            </h2>
            <p className="text-xl text-[#6b6a67] mb-10 max-w-2xl mx-auto leading-relaxed">
              No sales pitch. A direct conversation about what you&apos;re building and whether we&apos;re the right fit for your team.
            </p>
            <a href="/contact" className="inline-flex items-center gap-3 bg-[#fb6e3e] text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-[#ea5d2d] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#fb6e3e]/20 transition-all duration-300">
              Start a conversation
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
