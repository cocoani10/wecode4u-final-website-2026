"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Search, PenTool, Code2, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding goals, scope, and technical priorities that shape success.",
    icon: Search,
  },
  {
    number: "02",
    title: "Architecture",
    description: "System planning, UX flows, and establishing a solid technical foundation.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Development",
    description: "Agile execution, rigorous QA, and tight continuous feedback loops.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch",
    description: "Zero-downtime deployment, scaling support, and continuous iteration.",
    icon: Rocket,
  },
]

function EnterpriseGraphic() {
  return (
    <div className="relative w-full max-w-6xl mx-auto h-[320px] sm:h-[380px] lg:h-[420px] rounded-[2rem] lg:rounded-[2.5rem] border border-[#e7e5e4] bg-[#fafaf9] overflow-hidden flex items-center justify-center shadow-sm -mt-4 lg:-mt-8">
      
      {/* Premium Ambient Atmosphere Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft centered bloom */}
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-white rounded-full blur-[100px] opacity-80" />
        
        {/* Subtle drifted orange/warm haze */}
        <motion.div 
          animate={{ x: ["-5%", "5%", "-5%"], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
          className="absolute left-[30%] top-[30%] right-[30%] bottom-[30%] bg-[#fb6e3e]/[0.08] blur-[120px] rounded-[100%]"
        />

        {/* Floating edge light streaks */}
        <motion.div
           animate={{ left: ["-50%", "150%"] }}
           transition={{ duration: 15, ease: "linear", repeat: Infinity }}
           className="absolute top-[45%] w-[400px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] opacity-80"
        />
        <motion.div
           animate={{ right: ["-50%", "150%"] }}
           transition={{ duration: 18, ease: "linear", repeat: Infinity }}
           className="absolute top-[55%] w-[500px] h-px bg-gradient-to-r from-transparent via-[#fb6e3e]/20 to-transparent blur-[2px] opacity-60"
        />
        
        {/* Soft edge masking */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(250,250,249,0.9)_100%)]" />
      </div>

      {/* Moving Signal Lines Layer */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Track 1: Discovery to Engine */}
        <path d="M 0 50 L 50 50" fill="none" stroke="#e7e5e4" strokeWidth="0.3" />
        <motion.path 
          d="M 0 50 L 50 50" 
          fill="none" 
          stroke="#fb6e3e" 
          strokeWidth="0.4"
          className="opacity-70"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity }}
        />

        {/* Track 2: Engine to Launch */}
        <path d="M 50 50 L 100 50" fill="none" stroke="#e7e5e4" strokeWidth="0.3" />
        <motion.path 
          d="M 50 50 L 100 50" 
          fill="none" 
          stroke="#fb6e3e" 
          strokeWidth="0.4"
          className="opacity-70"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity, delay: 1.5 }}
        />
        
        {/* Vertical processing structural lines */}
        <path d="M 50 20 L 50 80" fill="none" stroke="#e7e5e4" strokeWidth="0.2" strokeDasharray="1 1" />
      </svg>

      {/* Moving Signal Pulses (Synced with SVG paths) */}
      <motion.div 
        className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-white border-2 border-[#fb6e3e] shadow-[0_0_15px_rgba(251,110,62,0.6)] rounded-full z-20 -ml-1 -mt-1 lg:-ml-1.5 lg:-mt-1.5"
        animate={{
          left: ["0%", "25%", "50%", "50%"],
          top: ["50%", "50%", "50%", "50%"],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div 
        className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-white border-2 border-[#fb6e3e] shadow-[0_0_15px_rgba(251,110,62,0.6)] rounded-full z-20 -ml-1 -mt-1 lg:-ml-1.5 lg:-mt-1.5"
        animate={{
          left: ["50%", "75%", "100%", "100%"],
          top: ["50%", "50%", "50%", "50%"],
          opacity: [0, 1, 1, 0]
        }}
        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, delay: 1.5 }}
      />

      {/* Translucent Architectural Nodes */}
      <div className="relative z-10 w-full h-full max-w-5xl mx-auto">
        {/* Node 1: Discovery (Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-[5%] lg:left-[10%] top-[50%] -translate-y-1/2 w-[140px] lg:w-44 bg-white/95 backdrop-blur-xl border border-[#e7e5e4] rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#78716c]">Discovery</div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse" />
          </div>
          <div className="space-y-2">
            <div className="h-[3px] w-full bg-[#f5f5f4] rounded-full overflow-hidden">
               <motion.div className="h-full bg-[#fb6e3e]/40" animate={{ width: ["0%", "100%", "0%"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
            </div>
            <div className="h-[3px] w-2/3 bg-[#f5f5f4] rounded-full" />
          </div>
        </motion.div>

        {/* Node 2: Core Engine (Center) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[240px] lg:w-[280px] bg-white backdrop-blur-xl border border-[#e7e5e4] rounded-[1.5rem] p-5 lg:p-7 shadow-[0_20px_40px_-15px_rgba(26,25,22,0.12)] z-30"
        >
          <div className="flex items-center gap-4 mb-5 lg:mb-6">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#fafaf9] flex items-center justify-center border border-[#e7e5e4] flex-shrink-0 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-[#fb6e3e]/5" />
              <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border-[2.5px] border-[#fb6e3e]/40 border-t-[#fb6e3e] animate-spin relative z-10" />
            </div>
            <div>
              <div className="text-[14px] lg:text-[15px] font-bold text-[#1a1916] tracking-tight">Delivery Engine</div>
              <div className="text-[9px] lg:text-[10px] text-[#fb6e3e] font-semibold uppercase tracking-widest mt-0.5">Processing</div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            {[
              { duration: 1.8, delay: 0 },
              { duration: 2.2, delay: 0.4 },
              { duration: 1.5, delay: 0.1 }
            ].map((timing, i) => (
              <div key={i} className="relative h-1.5 w-full bg-[#f5f5f4] rounded-full">
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 rounded-full bg-gradient-to-r from-[#fb6e3e]/40 to-[#fb6e3e] shadow-[2px_0_8px_rgba(251,110,62,0.8)]" 
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: timing.duration * 2, delay: timing.delay, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Node 3: Output */}
        <motion.div 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute right-[5%] lg:right-[10%] top-[50%] -translate-y-1/2 w-[140px] lg:w-44 bg-white/95 backdrop-blur-xl border border-[#e7e5e4] rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#78716c]">Launch</div>
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-[#fb6e3e]" 
              animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
              transition={{ duration: 3, delay: 2.8, repeat: Infinity }}
            />
          </div>
          <div className="flex items-end gap-[3px] h-[22px]">
            {[18, 12, 16, 22, 14].map((h, i) => (
               <motion.div key={i} className="w-1.5 bg-[#e7e5e4] rounded-sm origin-bottom" animate={{ height: [h, Math.max(h*0.3, 4), h] }} transition={{ duration: 1.5 + i*0.2, repeat: Infinity, ease: "easeInOut" }} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function Process({ isHero = false }: { isHero?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)

  const sectionClass = isHero 
    ? "pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white" 
    : "py-24 lg:py-32 bg-white"
  
  const headerClass = isHero
    ? "max-w-3xl mb-16 lg:mb-20"
    : "text-center max-w-3xl mx-auto mb-16 lg:mb-20"

  const overline = isHero ? "Our Process" : "How We Work"
  const titleClass = isHero 
    ? "text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1916] tracking-[-0.04em] mb-6 text-balance"
    : "text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] text-balance mb-6"
  const descClass = isHero 
    ? "text-xl text-[#78716c] leading-relaxed"
    : "text-lg text-[#78716c] leading-relaxed"

  return (
    <section id="process" className={sectionClass}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
           transition={{ duration: 0.6 }}
           className={headerClass}
        >
          <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">
            {overline}
          </span>
          {isHero ? (
            <h1 className={titleClass}>A Proven Delivery System</h1>
          ) : (
            <h2 className={titleClass}>A Proven Delivery System</h2>
          )}
          <p className={descClass}>
            Our battle-tested methodology ensures predictable outcomes and exceptional quality.
          </p>
        </motion.div>

        {isHero ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <EnterpriseGraphic />
          </motion.div>
        ) : (
          <>
            {/* Global Progress Line Bar */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : { opacity: 0 }}
               transition={{ duration: 0.8 }}
               className="hidden lg:block relative max-w-6xl mx-auto mb-10 h-1.5 bg-[#f5f5f4] rounded-full overflow-hidden"
            >
               <motion.div 
                 className="absolute top-0 left-0 bottom-0 bg-[#fb6e3e] rounded-full"
                 animate={{ width: `${(activeStep + 1) * 25}%` }}
                 transition={{ duration: 0.5, ease: "easeInOut" }}
               />
            </motion.div>

            {/* Accordion Container */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-6 h-[750px] sm:h-[600px] lg:h-[480px]"
            >
              {steps.map((step, index) => {
                const isActive = activeStep === index;
                
                return (
                  <motion.div
                    key={step.number}
                    initial={false}
                    animate={{
                      flex: isActive ? 5 : 1,
                      backgroundColor: isActive ? "#fb6e3e" : "#ffffff",
                      borderColor: isActive ? "rgba(251, 110, 62, 1)" : "rgba(231, 229, 228, 1)",
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onMouseEnter={() => setActiveStep(index)}
                    className={`group relative overflow-hidden rounded-[2rem] border p-6 lg:p-8 cursor-pointer flex flex-col justify-between
                      ${isActive ? 'shadow-2xl shadow-[#fb6e3e]/30' : 'shadow-none hover:bg-[#fafaf9]'}`}
                  >
                    {/* Top Section: Icon & Number */}
                    <div className="flex justify-between items-start z-20 w-full relative">
                      <motion.div 
                        animate={{ 
                          color: isActive ? "#fb6e3e" : "#1a1916",
                          backgroundColor: isActive ? "#ffffff" : "#f5f5f4"
                        }}
                        className="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl flex items-center justify-center font-black text-lg lg:text-xl shadow-sm border border-transparent transition-colors"
                      >
                        {step.number}
                      </motion.div>
                      
                      <motion.div animate={{ opacity: isActive ? 1 : 0.4 }}>
                        <step.icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-[#78716c]'}`} />
                      </motion.div>
                    </div>

                    {/* Bottom Section: Text Content */}
                    <div className="relative z-20 flex-1 flex items-end w-full mt-4">
                      
                      {/* Expanded Active Content */}
                      <motion.div
                        animate={{ 
                          opacity: isActive ? 1 : 0,
                          y: isActive ? 0 : 20
                        }}
                        transition={{ duration: 0.3, delay: isActive ? 0.2 : 0 }}
                        className="w-full absolute bottom-0 left-0 right-0 origin-bottom-left"
                        style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                      >
                        <h3 className="text-3xl lg:text-4xl font-bold tracking-[-0.02em] mb-4 text-white">
                          {step.title}
                        </h3>
                        <p className="text-white/90 leading-relaxed text-base lg:text-lg max-w-sm">
                          {step.description}
                        </p>
                      </motion.div>

                      {/* Rotated Inactive Tab (Desktop) */}
                      <motion.div
                        animate={{ opacity: !isActive ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="hidden lg:flex w-full absolute inset-0 items-end justify-center pointer-events-none pb-6"
                      >
                        <h3 className="text-2xl font-bold text-[#1a1916] whitespace-nowrap [writing-mode:vertical-rl] rotate-180 opacity-30 uppercase tracking-widest">
                          {step.title}
                        </h3>
                      </motion.div>

                      {/* Horizontal Inactive Tab (Mobile) */}
                      <motion.div
                        animate={{ opacity: !isActive ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden absolute bottom-2 left-0 right-0 pointer-events-none"
                      >
                        <h3 className="text-xl font-bold text-[#1a1916]">
                          {step.title}
                        </h3>
                      </motion.div>
                    </div>

                    {/* Decorative Background Glow */}
                    <motion.div
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white/20 to-transparent rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none z-10 blur-xl"
                    />
                  </motion.div>
                )
              })}
            </motion.div>
          </>
        )}
      </div>
    </section>
  )
}
