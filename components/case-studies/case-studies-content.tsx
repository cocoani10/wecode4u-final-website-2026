"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, ArrowUpRight, Zap, Layers, TrendingUp } from "lucide-react"
import { CountUp } from "@/components/shared/count-up"

// ─── Data ──────────────────────────────────────────────────────────────────────

const caseStudies = [
  {
    id: "etype",
    client: "eType Services",
    industry: "Digital Publishing",
    title: "Modernizing Digital Publishing Infrastructure",
    description: "WeCode4U partnered with eType Services to build and scale technology solutions that help community newspapers thrive in the digital era.",
    challenge: "eType needed a dependable long-term technology partner to modernize legacy publishing systems, support multiple newspaper clients, improve performance, and continuously evolve products without service disruption.",
    solution: "WeCode4U provided full-stack development, UI modernization, infrastructure support, payment integrations, subscriber workflows, and scalable publishing tools tailored to the newspaper industry.",
    result: "A stable, scalable publishing platform now serves hundreds of newspaper clients across the US — continuously evolving without service disruption over a decade-long partnership.",
    results: [
      { metric: "400",  suffix: "+", label: "Publishing Clients Supported", numeric: true },
      { metric: "30",   suffix: "+", label: "US States Served",             numeric: true },
      { metric: "10",   suffix: "+", label: "Years Partnership",             numeric: true },
      { metric: "99.9", suffix: "%", label: "Platform Reliability",          numeric: true },
    ],
    techStack: [".NET", "SQL Server", "Azure", "JavaScript", "Payment Integrations", "API Systems"],
    sidebar: {
      snapshot: [
        { label: "Industry",       value: "Digital Publishing"    },
        { label: "Engagement",     value: "Long-Term Partnership" },
        { label: "Duration",       value: "10+ Years"             },
        { label: "Delivery Model", value: "Dedicated Team"        },
      ],
      outcomes: ["Fully modernized legacy publishing stack", "Multi-newspaper client infrastructure", "Zero-disruption continuous evolution", "US-wide subscriber & payment systems"],
    },
    testimonial: { quote: "WeCode4U has been a trusted long-term technology partner that consistently delivers.", author: "Client", company: "eType Services" },
  },
  {
    id: "rc-air",
    client: "RC-Air",
    industry: "Aviation",
    title: "Building a Community-Driven Aviation Platform",
    description: "WeCode4U helped RC-Air create a digital ecosystem for aviation enthusiasts through scalable community and membership platforms.",
    challenge: "RC-Air required a modern community portal where members could connect, engage, access content, and grow a niche enthusiast ecosystem with reliable performance.",
    solution: "WeCode4U developed a responsive platform with member workflows, content systems, performance optimization, and scalable backend architecture.",
    result: "A high-performance aviation community platform launched with multi-device support, 24/7 availability, and strong user retention driving ongoing membership growth.",
    results: [
      { metric: "10K",    suffix: "+",  label: "Community Interactions", numeric: true  },
      { metric: "Multi",  suffix: "",   label: "Platform Web Experience", numeric: false },
      { metric: "24/7",   suffix: "",   label: "Uptime Availability",     numeric: false },
      { metric: "High",   suffix: "",   label: "User Retention Rate",     numeric: false },
    ],
    techStack: ["React", "Node.js", "Cloud Hosting", "APIs", "Database Systems"],
    sidebar: {
      snapshot: [
        { label: "Industry",       value: "Aviation / Community" },
        { label: "Engagement",     value: "Product Build"        },
        { label: "Availability",   value: "24/7 Uptime"          },
        { label: "Delivery Model", value: "Full-Stack Team"      },
      ],
      outcomes: ["Scalable member community portal", "Multi-device responsive experience", "Reliable 24/7 platform availability", "Content & membership workflow systems"],
    },
    testimonial: { quote: "A strong digital foundation helped us serve and grow our enthusiast community.", author: "Client", company: "RC-Air" },
  },
  {
    id: "peppyprints",
    client: "Peppy Prints",
    industry: "E-commerce",
    title: "Scaling Personalized Gifting Through Digital Commerce",
    description: "WeCode4U supported Peppy Prints with technology solutions for personalized photo products, gifting workflows, and online growth.",
    challenge: "Peppy Prints needed a reliable ecommerce experience for customized photobooks, photo walls, and personalized gifts while maintaining smooth ordering flows.",
    solution: "WeCode4U helped improve storefront experience, order workflows, responsiveness, customer journeys, and backend processes supporting personalized commerce.",
    result: "A faster, mobile-optimized storefront with streamlined checkout enabled over 500 custom orders and growing repeat customer rates for Peppy Prints.",
    results: [
      { metric: "500",     suffix: "+", label: "Custom Orders Enabled",  numeric: true  },
      { metric: "Fast",    suffix: "",  label: "Checkout Experience",    numeric: false },
      { metric: "Mobile",  suffix: "",  label: "Optimized Storefront",   numeric: false },
      { metric: "Growing", suffix: "",  label: "Repeat Customer Rate",   numeric: false },
    ],
    techStack: ["Shopify / Ecommerce Systems", "Frontend Development", "Order Workflow Systems", "Integrations"],
    sidebar: {
      snapshot: [
        { label: "Industry",       value: "E-commerce / Gifting"  },
        { label: "Engagement",     value: "Platform Enhancement"  },
        { label: "Focus",          value: "Mobile-First Commerce" },
        { label: "Delivery Model", value: "Embedded Engineering"  },
      ],
      outcomes: ["500+ personalized orders enabled", "Streamlined checkout & order flow", "Mobile-optimized storefront", "Growing repeat customer base"],
    },
    testimonial: { quote: "We needed a smooth digital buying experience, and WeCode4U helped deliver it.", author: "Client", company: "Peppy Prints" },
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function MetricCard({ result, delay, inView }: { result: typeof caseStudies[0]["results"][0]; delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="group bg-white border border-[#e7e5e4] hover:border-[#fb6e3e]/20 rounded-2xl p-6 hover:shadow-[0_6px_28px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
      <div className="text-[2rem] lg:text-[2.4rem] font-semibold text-[#1a1916] tracking-[-0.03em] leading-none mb-2">
        {result.numeric && typeof result.metric === "string" && !isNaN(Number(result.metric))
          ? <CountUp to={Number(result.metric)} suffix={result.suffix} decimal={!Number.isInteger(Number(result.metric))} />
          : <>{result.metric}{result.suffix}</>
        }
      </div>
      <div className="text-[13px] font-medium text-[#44403c] leading-snug">{result.label}</div>
      <div className="w-5 h-px bg-[#fb6e3e]/30 mt-3 group-hover:w-8 transition-all duration-300" />
    </motion.div>
  )
}

function NarrativeBlock({ label, icon: Icon, text, delay, inView }: { label: string; icon: React.ElementType; text: string; delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className="flex gap-5"
    >
      <div className="flex-shrink-0 mt-0.5">
        <div className="w-8 h-8 rounded-xl bg-[#fb6e3e]/8 border border-[#fb6e3e]/12 flex items-center justify-center">
          <Icon className="w-3.5 h-3.5 text-[#fb6e3e]" />
        </div>
      </div>
      <div>
        <span className="text-[10px] font-bold text-[#a8a29e] tracking-widest uppercase mb-2 block">{label}</span>
        <p className="text-[15px] text-[#44403c] leading-relaxed">{text}</p>
      </div>
    </motion.div>
  )
}

function ExecutiveSidebar({ study, inView }: { study: typeof caseStudies[0]; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
      transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
      className="lg:sticky lg:top-32 space-y-4"
    >
      <div className="bg-white border border-[#e7e5e4] rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
        <div className="px-5 py-4 border-b border-[#f0eeec] flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#fb6e3e]" />
          <span className="text-[10px] font-bold text-[#a8a29e] tracking-widest uppercase">Project Snapshot</span>
        </div>
        <div className="divide-y divide-[#f5f4f2]">
          {study.sidebar.snapshot.map((item, i) => (
            <motion.div key={item.label} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
              className="px-5 py-3.5 flex items-baseline justify-between gap-4">
              <span className="text-[11.5px] text-[#a8a29e] font-medium flex-shrink-0">{item.label}</span>
              <span className="text-[12.5px] font-semibold text-[#1a1916] text-right">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[#fafaf9] border border-[#e7e5e4] rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.03)]">
        <div className="px-5 py-4 border-b border-[#f0eeec] flex items-center gap-2.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#fb6e3e]/50" />
          <span className="text-[10px] font-bold text-[#a8a29e] tracking-widest uppercase">Key Outcomes</span>
        </div>
        <div className="p-5 space-y-3">
          {study.sidebar.outcomes.map((outcome, i) => (
            <motion.div key={outcome} initial={{ opacity: 0, x: 8 }} animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }} className="flex items-start gap-3">
              <div className="w-4 h-4 rounded-full border border-[#e7e5e4] flex items-center justify-center flex-shrink-0 mt-0.5 bg-white">
                <div className="w-1.5 h-1.5 rounded-full bg-[#fb6e3e]/60" />
              </div>
              <span className="text-[12.5px] text-[#57534e] leading-relaxed">{outcome}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="px-5 py-3.5 rounded-2xl border border-[#e7e5e4] bg-white flex items-center justify-between shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div>
          <div className="text-[10px] font-bold text-[#a8a29e] tracking-widest uppercase mb-0.5">Client</div>
          <div className="text-[13px] font-semibold text-[#1a1916]">{study.client}</div>
        </div>
        <span className="text-[10.5px] font-semibold text-[#fb6e3e] bg-[#fb6e3e]/[0.07] px-2.5 py-1 rounded-full">{study.industry}</span>
      </div>
    </motion.div>
  )
}

function CaseStudyCard({ study, index }: { study: typeof caseStudies[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const isEven = index % 2 === 0

  return (
    <section id={study.id} className={`py-20 lg:py-28 ${isEven ? "bg-white" : "bg-[#fafaf9]"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={ref}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.65, ease: "easeOut" }} className="mb-12">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#fb6e3e] tracking-widest uppercase bg-[#fb6e3e]/[0.07] px-2.5 py-1 rounded-full">{study.industry}</span>
              <span className="text-[#d6d3d1] text-xs">·</span>
              <span className="text-[12px] text-[#a8a29e] font-medium">{study.client}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] mb-5 max-w-3xl leading-[1.08] text-balance">{study.title}</h2>
            <p className="text-lg text-[#6b6a67] leading-relaxed max-w-2xl">{study.description}</p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-14">
            {study.results.map((result, i) => (
              <MetricCard key={result.label} result={result} delay={0.1 + i * 0.08} inView={inView} />
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-10 lg:gap-14 items-start">
            <div>
              <div className="border-t border-[#e7e5e4] pt-10 mb-12 flex flex-col gap-8">
                <NarrativeBlock label="Challenge" icon={Zap}        text={study.challenge} delay={0.2}  inView={inView} />
                <div className="ml-[52px] h-px bg-[#f0eeec]" />
                <NarrativeBlock label="Solution"  icon={Layers}     text={study.solution}  delay={0.32} inView={inView} />
                <div className="ml-[52px] h-px bg-[#f0eeec]" />
                <NarrativeBlock label="Result"    icon={TrendingUp} text={study.result}    delay={0.44} inView={inView} />
              </div>

              <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="mb-12">
                <span className="text-[10px] font-bold text-[#a8a29e] tracking-widest uppercase mb-4 block">Technology Stack</span>
                <div className="flex flex-wrap gap-2">
                  {study.techStack.map((tech) => (
                    <span key={tech} className="inline-flex items-center text-[12.5px] font-medium px-3.5 py-1.5 bg-white border border-[#e7e5e4] hover:border-[#fb6e3e]/25 hover:bg-[#fffaf8] text-[#44403c] rounded-lg transition-all duration-200 cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.55, delay: 0.6 }} className="border-l-[3px] border-[#fb6e3e]/25 pl-6">
                <blockquote className="text-xl lg:text-2xl text-[#1a1916] font-medium leading-relaxed mb-4 tracking-[-0.02em] max-w-xl">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-[#1a1916]">{study.testimonial.author}</span>
                  <span className="text-[#c4bfb8] text-xs">·</span>
                  <span className="text-[13px] text-[#78716c]">{study.testimonial.company}</span>
                </div>
              </motion.div>
            </div>

            <ExecutiveSidebar study={study} inView={inView} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page Content ──────────────────────────────────────────────────────────────

export function CaseStudiesContent() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-[#fb6e3e]/[0.03] rounded-full blur-[120px] pointer-events-none -mr-48 -mt-20" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div ref={heroRef} initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, ease: "easeOut" }} className="max-w-3xl">
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-5 block">Selected Work</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1a1916] tracking-[-0.04em] mb-7 text-balance leading-[1.04]">
              Real work.<br />Measured outcomes.
            </h1>
            <p className="text-xl lg:text-2xl text-[#6b6a67] leading-relaxed max-w-2xl">
              Digital publishing, e-commerce, and aviation platforms — three industries, three hard problems. Results that held up in production.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, delay: 0.25 }} className="mt-12 flex flex-wrap items-center gap-2.5 border-t border-[#e7e5e4] pt-8">
            {caseStudies.map((study) => (
              <a key={study.id} href={`#${study.id}`}
                className="group flex items-center gap-2 text-[13px] text-[#6b6a67] hover:text-[#fb6e3e] px-4 py-2 rounded-full border border-[#e7e5e4] hover:border-[#fb6e3e]/30 hover:bg-[#fff7f3] transition-all duration-250">
                <span className="font-semibold">{study.client}</span>
                <span className="text-[#c4bfb8] text-xs">—</span>
                <span className="text-[11px] text-[#a8a29e] group-hover:text-[#fb6e3e]/80 transition-colors duration-250">{study.industry}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 group-hover:-translate-y-0.5 transition-all duration-250" />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((study, index) => (
        <CaseStudyCard key={study.id} study={study} index={index} />
      ))}

      {/* Closing CTA */}
      <section className="py-24 lg:py-32 bg-[#fafaf9] border-t border-[#e7e5e4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} viewport={{ once: true }} className="max-w-2xl">
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-5 block">Work With Us</span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1916] tracking-[-0.04em] mb-6 text-balance leading-[1.06]">
              Need a similar transformation?
            </h2>
            <p className="text-xl text-[#6b6a67] mb-10 max-w-lg leading-relaxed">
              We build scalable software systems that solve real operational problems — predictably, on time, at enterprise quality.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center gap-2.5 bg-[#fb6e3e] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#ea5d2d] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#fb6e3e]/25 transition-all duration-250">
                Book Discovery Call
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#etype" className="inline-flex items-center gap-2 text-[#44403c] px-8 py-4 rounded-full font-semibold border border-[#e7e5e4] hover:border-[#fb6e3e]/30 hover:bg-white hover:text-[#1a1916] transition-all duration-250">
                View More Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
