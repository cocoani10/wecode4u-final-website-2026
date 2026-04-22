"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* CTA Card */}
          <div className="relative bg-white rounded-2xl border border-[#e7e5e4] p-8 lg:p-16 text-center overflow-hidden">
            <div className="relative z-10">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase">
                  Free Consultation
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] mb-6 text-balance"
              >
                Ready to Build Something Exceptional?
              </motion.h2>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-[#78716c] leading-relaxed max-w-xl mx-auto mb-10"
              >
                Let&apos;s discuss your project and explore how our 30+ years of experience
                can help bring your vision to life.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-[#fb6e3e] hover:bg-[#e85a2a] text-white font-semibold px-8 h-12 text-base shadow-lg shadow-[#fb6e3e]/25 hover:shadow-xl hover:shadow-[#fb6e3e]/30 transition-all group"
                >
                  <Link href="/contact">
                    Start Conversation
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-semibold px-8 h-12 text-base border-[#e7e5e4] text-[#1a1916] hover:text-[#fb6e3e] hover:bg-[#fff7f4] hover:border-[#fb6e3e]/20 transition-all"
                >
                  <a
                    href="https://calendly.com/aniruddhgupta5/discovery-call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="mr-2 w-5 h-5" />
                    Schedule Call
                  </a>
                </Button>
              </motion.div>

              {/* Trust Note */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 text-sm text-[#78716c]"
              >
                No commitment required. Response within 24 hours.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
