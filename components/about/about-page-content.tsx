"use client"

import { motion, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import Image from "next/image"
import { Users, Heart, Target, Lightbulb, Shield, ArrowRight, Lock, FileCheck } from "lucide-react"
import { CountUp } from "@/components/shared/count-up"

// ─── Data ──────────────────────────────────────────────────────────────────────

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We don't settle for good enough. Every line of code, every design decision, every interaction is held to the highest standard.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description: "We're not just vendors — we're partners invested in your success. Your wins are our wins.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of technology, continuously learning and adopting best practices to deliver cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Transparent communication, honest estimates, and ethical practices are non-negotiable in everything we do.",
  },
]

const teamStats = [
  { value: 25,  suffix: "+", label: "Team Members",        sub: "Senior engineers & specialists" },
  { value: 10,  suffix: "+", label: "Years Avg Experience", sub: "Per engineer, production-grade" },
  { value: 3,   suffix: "+", label: "Countries Served",    sub: "Global enterprise clients"      },
  { value: 12,  suffix: "",  label: "Technology Stacks",   sub: "End-to-end capability"          },
]

const certifications = [
  { code: "ISO 27001", label: "Information Security Management", icon: Lock },
  { code: "ISO 27701", label: "Privacy Information Management",  icon: FileCheck },
]

const leadership = [
  {
    name: "Alind Gupta",
    role: "CEO",
    image: "/team/alind-gupta.png",
    bio: "With over three decades of experience in the IT industry and custom software development, Alind Gupta leads WeCode4U with a strong reputation for delivering large-scale, business-critical, tailor-made technology solutions. He has successfully guided projects for national and international clients across multiple industries, combining technical depth with disciplined execution.\n\nHis expertise spans enterprise architecture, application development, database systems, project delivery, and scalable solution design. Under his leadership, WeCode4U has built long-term client partnerships through dependable delivery, innovation, and measurable business outcomes.",
  },
  {
    name: "Shashwat Gupta",
    role: "Head of Technology",
    image: "/team/shashwat-gupta.jpeg",
    bio: "Shashwat Gupta leads technology at WeCode4U with a strong focus on building reliable, scalable, and future-ready software systems. An alumnus of the Indian Institute of Technology (IIT) with additional training at Brown University, he brings a high-performance engineering mindset to every engagement.\n\nHis expertise spans software architecture, system scalability, performance optimization, and product engineering. He plays a central role in ensuring every solution delivered by WeCode4U is robust, efficient, and aligned with long-term business goals.",
  },
  {
    name: "Utkarsh Paul",
    role: "Vice President\nMarketing & Business Development",
    image: "/team/utkarsh-paul.jpeg",
    bio: "Utkarsh Paul brings a strong blend of strategic thinking, market execution, and cross-sector leadership to WeCode4U. His professional experience includes growth and expansion initiatives at organizations such as Mahindra Automotive Australia, Bain Capital, and as State Head at HDFC ERGO General Insurance.\n\nHe leads marketing, partnerships, and business development with a focus on expanding market presence, building high-value relationships, and driving measurable commercial growth. His multidisciplinary background enables him to connect strategy with execution effectively.",
  },
]

// ─── Hero Signal Visual ────────────────────────────────────────────────────────

function HeroSignalVisual() {
  return (
    <div className="relative w-full h-[340px] lg:h-[400px] flex items-center justify-center">
      {/* Ambient warm bloom */}
      <motion.div
        className="absolute rounded-full bg-[#fb6e3e]/[0.06] blur-[80px]"
        style={{ width: "60%", height: "60%" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      />

      {/* Background rail SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
        <circle cx="200" cy="200" r="140" fill="none" stroke="#e7e5e4" strokeWidth="1" />
        <circle cx="200" cy="200" r="86" fill="none" stroke="#eeeceb" strokeWidth="1" />
        <line x1="200" y1="60" x2="200" y2="340" stroke="#eeeceb" strokeWidth="0.8" strokeDasharray="4 6" />
        <line x1="60" y1="200" x2="340" y2="200" stroke="#eeeceb" strokeWidth="0.8" strokeDasharray="4 6" />
        <motion.circle
          cx="200" cy="200" r="140"
          fill="none" stroke="#fb6e3e" strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="100 780"
          animate={{ strokeDashoffset: [0, -880] }}
          transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          opacity={0.4}
        />
      </svg>

      {/* Panel 1 — top right */}
      <motion.div
        className="absolute top-[10%] right-[8%] bg-white border border-[#e7e5e4] rounded-2xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse flex-shrink-0" />
        <div>
          <div className="text-[11px] font-bold text-[#1a1916] leading-none">30+ Years</div>
          <div className="text-[9px] text-[#a8a29e] mt-0.5 tracking-wide">Enterprise Delivery</div>
        </div>
      </motion.div>

      {/* Panel 2 — left */}
      <motion.div
        className="absolute left-[4%] top-[40%] -translate-y-1/2 bg-white border border-[#e7e5e4] rounded-2xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-3"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <Lock className="w-3.5 h-3.5 text-[#fb6e3e] flex-shrink-0" />
        <div>
          <div className="text-[11px] font-bold text-[#1a1916] leading-none">ISO Certified</div>
          <div className="text-[9px] text-[#a8a29e] mt-0.5 tracking-wide">27001 · 27701</div>
        </div>
      </motion.div>

      {/* Panel 3 — bottom */}
      <motion.div
        className="absolute bottom-[8%] left-[20%] bg-white border border-[#e7e5e4] rounded-2xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex items-center gap-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#fb6e3e] flex-shrink-0" />
        <div>
          <div className="text-[11px] font-bold text-[#1a1916] leading-none">100% Retention</div>
          <div className="text-[9px] text-[#a8a29e] mt-0.5 tracking-wide">Long-term clients</div>
        </div>
      </motion.div>

      {/* Center hub */}
      <motion.div
        className="relative z-10 w-[90px] h-[90px] rounded-full bg-white border border-[#e0dedd] flex flex-col items-center justify-center text-center"
        style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-[#fb6e3e]/20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
        />
        <div className="text-[9px] font-bold text-[#1a1916] leading-snug px-2">WeCode4U</div>
        <div className="w-4 h-px bg-[#e7e5e4] my-1" />
        <div className="text-[7px] text-[#a8a29e] tracking-widest uppercase">Est. 1994</div>
      </motion.div>
    </div>
  )
}

// ─── Page Content ──────────────────────────────────────────────────────────────

export function AboutPageContent() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const leadershipRef = useRef(null)
  const leadershipInView = useInView(leadershipRef, { once: true, margin: "-100px" })
  const valuesRef = useRef(null)
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  const teamRef = useRef(null)
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" })
  const certRef = useRef(null)
  const certInView = useInView(certRef, { once: true, margin: "-100px" })

  return (
    <main className="bg-white">
      {/* ── HERO ── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fb6e3e]/[0.04] rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-5 block">
                About Us
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-[#1a1916] tracking-[-0.04em] mb-7 leading-[1.05] text-balance">
                Three decades of building software that lasts.
              </h1>
              <p className="text-xl lg:text-2xl text-[#6b6a67] leading-relaxed mb-8 max-w-lg">
                We partner with companies globally to design, build, and scale systems that drive real business outcomes.
              </p>
              <div className="flex items-center gap-3 text-sm text-[#a8a29e]">
                <span className="font-medium text-[#78716c]">Jaipur, India</span>
                <span className="text-[#d6d3d1]">·</span>
                <span>30+ years</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="hidden lg:block"
            >
              <HeroSignalVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="py-20 lg:py-28 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={leadershipRef}
            initial={{ opacity: 0, y: 20 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">
              LEADERSHIP
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] mb-5">
              The people behind the work.
            </h2>
            <p className="text-lg lg:text-xl text-[#6b6a67] max-w-2xl leading-relaxed">
              Experienced operators building dependable software for global businesses.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                animate={leadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group bg-white rounded-3xl border border-[#e7e5e4] hover:border-[#fb6e3e]/30 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 w-full ${
                  index === 2 ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0" : ""
                }`}
              >
                <div className="relative w-full aspect-[4/5] bg-[#fafaf9] overflow-hidden border-b border-[#e7e5e4]/50">
                  <Image
                    src={person.image}
                    alt={`${person.name} — ${person.role} at WeCode4U`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    priority={index === 0}
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col flex-1 bg-white">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#1a1916] tracking-[-0.03em] mb-2">
                    {person.name}
                  </h3>
                  <span className="text-[13px] font-bold text-[#fb6e3e] tracking-widest uppercase mb-4 block whitespace-pre-line">
                    {person.role}
                  </span>
                  <p className="text-[#6b6a67] leading-relaxed text-[15px] lg:text-base whitespace-pre-line">
                    {person.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={valuesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em]">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group relative bg-[#fafaf9] hover:bg-white rounded-3xl border border-[#e7e5e4] hover:border-[#fb6e3e]/20 p-8 hover:-translate-y-1 hover:shadow-[0_6px_28px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#fb6e3e]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-[#fb6e3e]/8 border border-[#fb6e3e]/10 flex items-center justify-center mb-6 relative z-10"
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ duration: 0.25 }}
                >
                  <value.icon className="w-5 h-5 text-[#fb6e3e]" />
                </motion.div>
                <h3 className="text-[17px] font-bold text-[#1a1916] mb-3 tracking-tight relative z-10 group-hover:text-[#111] transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-[14px] text-[#78716c] leading-relaxed relative z-10">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM STATS ── */}
      <section className="py-20 lg:py-28 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div ref={teamRef} className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">
                Our Team
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] mb-6 leading-tight">
                The People<br />Behind the Code
              </h2>
              <p className="text-lg text-[#78716c] leading-relaxed mb-8 max-w-md">
                Our team is our greatest asset. We&apos;ve assembled a group of passionate,
                skilled professionals who are dedicated to delivering exceptional results
                for our clients.
              </p>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#fb6e3e]" />
                <span className="text-[#57534e] text-[15px]">
                  Engineers, Designers, QA Specialists, and Project Managers
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="group bg-white rounded-2xl border border-[#e7e5e4] hover:border-[#fb6e3e]/20 p-6 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
                >
                  <div className="text-[2rem] lg:text-[2.25rem] font-semibold text-[#1a1916] tracking-[-0.03em] leading-none mb-1.5">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[13px] font-semibold text-[#44403c] mb-1">{stat.label}</div>
                  <div className="text-[11px] text-[#a8a29e] tracking-wide">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-10 bg-white border-t border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={certRef}
            initial={{ opacity: 0 }}
            animate={certInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-x-10 gap-y-4"
          >
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {certifications.map((cert) => (
                <div key={cert.code} className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-[#fafaf9] border border-[#e7e5e4] flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-3 h-3 text-[#fb6e3e]" />
                  </div>
                  <div>
                    <span className="text-[12px] font-semibold text-[#1a1916]">{cert.code}</span>
                    <span className="text-[11px] text-[#b8b5b0] ml-2">{cert.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 lg:py-32 bg-[#fafaf9]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1916] tracking-[-0.04em] mb-7 text-balance">
              Want to Learn More?
            </h2>
            <p className="text-xl text-[#6b6a67] mb-10 max-w-xl mx-auto leading-relaxed">
              We&apos;d love to tell you more about how we work and how we can help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-[#fb6e3e] text-white px-10 py-4 rounded-full font-semibold text-[15px] hover:bg-[#ea5d2d] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#fb6e3e]/25 transition-all duration-250"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
