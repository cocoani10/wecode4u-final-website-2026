"use client"

import { useRef, useEffect } from "react"
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"

interface CountUpProps {
  to: number
  suffix?: string
  duration?: number
  /** When true, formats to one decimal place (e.g. 99.9) */
  decimal?: boolean
}

export function CountUp({ to, suffix = "", duration = 1.6, decimal = false }: CountUpProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) =>
    decimal ? v.toFixed(1) + suffix : Math.round(v) + suffix
  )

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(count, to, { duration, ease: "easeOut" })
    return ctrl.stop
  }, [inView, to, count, duration])

  return <motion.span ref={ref}>{rounded}</motion.span>
}
