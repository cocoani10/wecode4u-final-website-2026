"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const clients = [
  { name: "Etype", logo: "/logos/etype.png" },
  { name: "Peppyprints", logo: "/logos/peppyprints.png" },
  { name: "RC-Air", logo: "/logos/rc-air.png" },
  { name: "Mercolocal", logo: "/logos/mercolocal.png" },
  { name: "Kusava", logo: "/logos/kusava.png" },
]

function ClientLogo({ client }: { client: { name: string; logo: string } }) {
  return (
    <div className="flex items-center justify-center px-10 lg:px-14">
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="h-8 lg:h-10 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
      />
    </div>
  )
}

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 lg:py-24 bg-[#fafaf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-[#78716c] tracking-wide uppercase">
            Trusted by innovative companies
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafaf9] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafaf9] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Content */}
        <div className="flex animate-marquee">
          {/* First Set */}
          <div className="flex shrink-0">
            {clients.map((client) => (
              <ClientLogo key={client.name} client={client} />
            ))}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0">
            {clients.map((client) => (
              <ClientLogo key={`${client.name}-dup`} client={client} />
            ))}
          </div>
          {/* Third set for wider screens */}
          <div className="flex shrink-0">
            {clients.map((client) => (
              <ClientLogo key={`${client.name}-dup2`} client={client} />
            ))}
          </div>
          <div className="flex shrink-0">
            {clients.map((client) => (
              <ClientLogo key={`${client.name}-dup3`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
