"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Zap, TrendingUp, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

function FloatingCard({
  title,
  value,
  icon: Icon,
  color,
  delay,
  className,
}: {
  title: string
  value: string
  icon: React.ElementType
  color: string
  delay: number
  className?: string
}) {
  return (
    <motion.div
      custom={delay}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className={`absolute bg-white rounded-xl border border-[#e7e5e4] p-4 shadow-xl ${className}`}
      style={{
        animation: `float ${3 + delay * 0.5}s ease-in-out infinite`,
        animationDelay: `${delay * 0.3}s`,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div>
          <p className="text-xs text-[#78716c] font-medium">{title}</p>
          <p className="text-lg font-bold text-[#1a1916] tracking-[-0.04em]">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}

function DashboardPreview() {
  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px]">
      {/* Main Dashboard Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] lg:w-[320px] bg-white rounded-2xl border border-[#e7e5e4] shadow-2xl overflow-hidden"
      >
        <div className="p-4 border-b border-[#e7e5e4]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#fb6e3e]" />
            <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
            <div className="w-3 h-3 rounded-full bg-[#10b981]" />
          </div>
        </div>
        <div className="p-5">
          <p className="text-xs font-medium text-[#78716c] mb-1">Delivery Console</p>
          <p className="text-2xl font-bold text-[#1a1916] tracking-[-0.04em] mb-4">Project Status</p>
          
          {/* Progress Bars */}
          <div className="space-y-3">
            {[
              { label: "Sprint Progress", value: 87, color: "#fb6e3e" },
              { label: "Code Coverage", value: 94, color: "#10b981" },
              { label: "Tests Passing", value: 98, color: "#3b82f6" },
            ].map((item, i) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[#78716c]">{item.label}</span>
                  <span className="font-medium text-[#1a1916]">{item.value}%</span>
                </div>
                <div className="h-2 bg-[#f5f5f4] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ delay: 0.8 + i * 0.2, duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating Cards */}
      <FloatingCard
        title="Deploy Success"
        value="99.9%"
        icon={Zap}
        color="#10b981"
        delay={0}
        className="top-[5%] left-[5%] lg:top-[10%] lg:left-[0%]"
      />
      <FloatingCard
        title="Code Quality"
        value="A+"
        icon={Shield}
        color="#3b82f6"
        delay={1}
        className="top-[15%] right-[0%] lg:top-[5%] lg:right-[5%]"
      />
      <FloatingCard
        title="Sprint Velocity"
        value="+24%"
        icon={TrendingUp}
        color="#fb6e3e"
        delay={2}
        className="bottom-[15%] left-[0%] lg:bottom-[10%] lg:left-[5%]"
      />
      <FloatingCard
        title="Quality Score"
        value="98/100"
        icon={CheckCircle2}
        color="#8b5cf6"
        delay={3}
        className="bottom-[5%] right-[5%] lg:bottom-[15%] lg:right-[0%]"
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen bg-white pt-24 lg:pt-32 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fafaf9] via-white to-white" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-[#1a1916] leading-[1.1] text-balance"
            >
              Trusted <span className="text-[#fb6e3e]">Software Development Partner</span>{" "}
              for Ambitious Companies
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg text-[#78716c] leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              For 30+ years, WeCode4U has helped businesses build custom software, 
              modernize systems, and scale with confidence. Trusted by clients in the US 
              and beyond.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-[#fb6e3e] hover:bg-[#e85a2a] text-white font-semibold px-8 h-12 shadow-lg shadow-[#fb6e3e]/25 hover:shadow-xl hover:shadow-[#fb6e3e]/30 transition-all group"
              >
                <Link href="https://calendly.com/aniruddhgupta5/discovery-call">
                  Book a Strategy Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-semibold px-8 h-12 border-[#e7e5e4] text-[#1a1916] hover:bg-[#fafaf9] hover:border-[#d6d3d1]"
              >
                <Link href="/case-studies">
                  See Case Studies
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {[
                { value: "500+", label: "Projects" },
                { value: "30+", label: "Years" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold text-[#1a1916] tracking-[-0.04em]">{stat.value}</p>
                  <p className="text-sm text-[#78716c]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
