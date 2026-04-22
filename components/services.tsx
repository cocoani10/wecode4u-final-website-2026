"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Code2, Smartphone, Cloud, TestTube2, Database, BrainCircuit } from "lucide-react"
import Link from "next/link"

// Animated Code Editor Mockup
function CodeEditorAnimation() {
  const [lines, setLines] = useState<number[]>([])
  const codeLines = [
    { text: "const", color: "#7c3aed" },
    { text: " app", color: "#0369a1" },
    { text: " = ", color: "#57534e" },
    { text: "createApp", color: "#b45309" },
    { text: "();", color: "#57534e" },
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLines(prev => {
        if (prev.length >= 5) return [0]
        return [...prev, prev.length]
      })
    }, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-[#1e1e1e] rounded-lg p-3 w-full h-full font-mono text-xs overflow-hidden">
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#27ca3f]" />
      </div>
      <div className="space-y-1">
        <div className="flex">
          <span className="text-[#6a9955] mr-2">1</span>
          <span className="text-[#c586c0]">import</span>
          <span className="text-[#d4d4d4]">{" { "}</span>
          <span className="text-[#9cdcfe]">WeCode4U</span>
          <span className="text-[#d4d4d4]">{" } "}</span>
          <span className="text-[#c586c0]">from</span>
          <span className="text-[#ce9178]">{" '@enterprise'"}</span>
        </div>
        <div className="flex">
          <span className="text-[#6a9955] mr-2">2</span>
          <span className="text-[#d4d4d4]" />
        </div>
        <div className="flex items-center">
          <span className="text-[#6a9955] mr-2">3</span>
          {lines.map((lineIdx, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ color: codeLines[lineIdx]?.color }}
            >
              {codeLines[lineIdx]?.text}
            </motion.span>
          ))}
          <motion.span 
            className="w-0.5 h-3.5 bg-white ml-0.5"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </div>
        <div className="flex">
          <span className="text-[#6a9955] mr-2">4</span>
          <span className="text-[#d4d4d4]" />
        </div>
        <div className="flex">
          <span className="text-[#6a9955] mr-2">5</span>
          <span className="text-[#569cd6]">app</span>
          <span className="text-[#d4d4d4]">.</span>
          <span className="text-[#dcdcaa]">deploy</span>
          <span className="text-[#d4d4d4]">();</span>
        </div>
      </div>
    </div>
  )
}

// Animated Phone Mockup
function PhoneAnimation() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const screens = [
    { bg: "linear-gradient(135deg, #fb6e3e 0%, #f59e0b 100%)", icon: "Dashboard" },
    { bg: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)", icon: "Analytics" },
    { bg: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)", icon: "Settings" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen(prev => (prev + 1) % screens.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [screens.length])

  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="relative w-20 h-36 bg-[#1a1916] rounded-2xl p-1 shadow-xl">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-[#2a2a2a] rounded-full" />
        <div className="relative w-full h-full bg-white rounded-xl overflow-hidden">
          {screens.map((screen, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%" }}
              animate={{ x: currentScreen === i ? 0 : currentScreen > i ? "-100%" : "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-1 rounded-lg flex items-center justify-center"
              style={{ background: screen.bg }}
            >
              <div className="text-white text-[8px] font-bold">{screen.icon}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Animated Cloud Nodes
function CloudAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 120 80" className="w-full h-auto max-w-[140px]">
        {/* Connection Lines */}
        <motion.line
          x1="30" y1="40" x2="60" y2="40"
          stroke="#fb6e3e"
          strokeWidth="2"
          strokeDasharray="4 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.line
          x1="60" y1="40" x2="90" y2="40"
          stroke="#fb6e3e"
          strokeWidth="2"
          strokeDasharray="4 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.line
          x1="60" y1="40" x2="60" y2="20"
          stroke="#fb6e3e"
          strokeWidth="2"
          strokeDasharray="4 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
        <motion.line
          x1="60" y1="40" x2="60" y2="60"
          stroke="#fb6e3e"
          strokeWidth="2"
          strokeDasharray="4 2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
        />
        
        {/* Nodes */}
        {[
          { cx: 30, cy: 40, delay: 0 },
          { cx: 90, cy: 40, delay: 0.2 },
          { cx: 60, cy: 20, delay: 0.4 },
          { cx: 60, cy: 60, delay: 0.6 },
          { cx: 60, cy: 40, delay: 0, main: true },
        ].map((node, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r={node.main ? 12 : 8}
              fill={node.main ? "#fb6e3e" : "#fafaf9"}
              stroke="#fb6e3e"
              strokeWidth="2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: node.delay }}
            />
            {node.main && (
              <motion.circle
                cx={node.cx}
                cy={node.cy}
                r="16"
                fill="none"
                stroke="#fb6e3e"
                strokeWidth="1"
                opacity="0.3"
                animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

// Animated Test Runner
function TestRunnerAnimation() {
  const [tests, setTests] = useState<boolean[]>([])
  
  useEffect(() => {
    const runTests = () => {
      setTests([])
      let i = 0
      const interval = setInterval(() => {
        if (i < 4) {
          setTests(prev => [...prev, true])
          i++
        } else {
          clearInterval(interval)
          setTimeout(runTests, 2000)
        }
      }, 500)
      return () => clearInterval(interval)
    }
    const cleanup = runTests()
    return cleanup
  }, [])

  const testNames = ["Unit Tests", "Integration", "E2E Tests", "Performance"]

  return (
    <div className="bg-[#1a1916] rounded-lg p-3 w-full h-full font-mono text-xs">
      <div className="flex items-center gap-2 mb-3 text-[#78716c]">
        <TestTube2 className="w-3 h-3" />
        <span>Test Suite</span>
      </div>
      <div className="space-y-2">
        {testNames.map((name, i) => (
          <div key={name} className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: tests[i] ? 1 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-4 h-4 rounded-full bg-[#10b981] flex items-center justify-center"
            >
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>
            <span className={tests[i] ? "text-[#10b981]" : "text-[#78716c]"}>{name}</span>
            {tests[i] && <span className="text-[#78716c] ml-auto">passed</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

// Data Engineering — Pipeline Completing
function DataAnimation() {
  const [states, setStates] = useState<('pending' | 'active' | 'complete')[]>(['pending', 'pending', 'pending', 'pending']);
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];
    
    const runSequence = () => {
      setStates(['active', 'pending', 'pending', 'pending']);
      
      timers.push(setTimeout(() => setStates(['complete', 'active', 'pending', 'pending']), 900));
      timers.push(setTimeout(() => setStates(['complete', 'complete', 'active', 'pending']), 1800));
      timers.push(setTimeout(() => setStates(['complete', 'complete', 'complete', 'active']), 2700));
      timers.push(setTimeout(() => setStates(['complete', 'complete', 'complete', 'complete']), 3600));
      timers.push(setTimeout(() => setStates(['pending', 'pending', 'pending', 'pending']), 5500));
      timers.push(setTimeout(() => {
        setLoopKey(k => k + 1);
        runSequence();
      }, 5600));
    };
    
    runSequence();
    
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="bg-white rounded-xl border border-[#e8e3db] p-4 w-full max-w-[300px]" style={{ boxShadow: 'rgba(0,0,0,0.08) 0px 4px 20px', margin: 'auto' }}>
        
        <div className="flex items-center mb-[12px]">
          <motion.div 
            className={`w-2 h-2 rounded-full ${states[3] === 'complete' ? 'bg-[#16a34a]' : 'bg-[#fb6e3e]'}`}
            animate={states[3] === 'complete' ? { scale: 1 } : { scale: [1, 1.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
          <div className="h-2 w-[80px] bg-[#b8b4aa] rounded-[4px] ml-2" />
        </div>

        <div className="flex flex-col">
          {[0, 1, 2, 3].map((i) => {
            const state = states[i];
            const isNotLast = i < 3;
            return (
              <div key={i} className={`flex items-center h-[48px] ${isNotLast ? 'border-b border-[#ede9e3]' : ''}`}>
                 
                 <div className="mr-[12px] w-[20px] h-[20px] rounded-full flex-shrink-0 relative overflow-hidden flex items-center justify-center" style={{
                    background: state === 'complete' ? '#16a34a' : state === 'active' ? '#fb6e3e' : '#f0ede8',
                    border: `2px solid ${state === 'complete' ? '#16a34a' : state === 'active' ? '#fb6e3e' : '#e2ddd6'}`
                 }}>
                    {state === 'complete' && (
                      <div className="w-[5px] h-[9px] border-b-2 border-r-2 border-white rotate-45 mb-[2px]" />
                    )}
                    {state === 'active' && (
                      <motion.div 
                        initial={false}
                        animate={{ scale: [1, 1.15, 1] }} 
                        transition={{ repeat: Infinity, duration: 0.8 }} 
                        className="absolute inset-0 bg-[#fb6e3e] rounded-full"
                      />
                    )}
                 </div>

                 <div className="flex-1 flex flex-col gap-[5px]">
                   <div className="h-[9px] rounded-[4px] transition-all duration-300 ease-in-out" style={{
                     background: state === 'complete' ? 'rgba(251,110,62,0.9)' : state === 'active' ? 'rgba(251,110,62,0.6)' : '#e2ddd6',
                     width: state === 'pending' ? '100px' : '110px'
                   }} />
                   <div className="h-[7px] rounded-[4px] transition-all duration-300 ease-in-out" style={{
                     background: state === 'complete' ? 'rgba(251,110,62,0.5)' : state === 'active' ? 'rgba(251,110,62,0.3)' : '#ede9e3',
                     width: state === 'pending' ? '60px' : '65px'
                   }} />
                 </div>

                 <div className="ml-auto flex items-center">
                   {state === 'active' && (
                     <div className="flex gap-[4px]">
                       {[0, 1, 2].map(dot => (
                         <motion.div key={dot} className="w-[5px] h-[5px] bg-[#fb6e3e] rounded-full"
                           animate={{ scale: [0.5, 1.2, 0.5] }}
                           transition={{ repeat: Infinity, duration: 0.7, delay: dot * 0.18 }}
                         />
                       ))}
                     </div>
                   )}
                   {state === 'complete' && (
                     <div className="bg-[#dcfce7] rounded-[20px] px-[10px] py-[3px] flex items-center" style={{ border: '1px solid rgba(22,163,74,0.4)' }}>
                        <div className="h-[6px] w-[36px] bg-[#16a34a] rounded-[3px]" />
                     </div>
                   )}
                 </div>
              </div>
            )
          })}
        </div>

        <div className="w-full h-[3px] bg-[#f0ede8] rounded-[2px] mt-4 overflow-hidden relative">
          <motion.div 
            key={loopKey}
            className="h-full bg-[#fb6e3e] rounded-[2px]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 3.6, ease: "linear" }}
          />
        </div>

      </div>
    </div>
  )
}

// AI & Intelligent Development — Token Stream
function AIAnimation() {
  const [line1Visible, setLine1Visible] = useState(false);
  const [line2Visible, setLine2Visible] = useState(false);
  const [line3Visible, setLine3Visible] = useState(false);
  const [typingDone, setTypingDone] = useState(false);
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];
    const runSequence = () => {
      setLine1Visible(false);
      setLine2Visible(false);
      setLine3Visible(false);
      setTypingDone(false);

      timers.push(setTimeout(() => setLine1Visible(true), 400));
      timers.push(setTimeout(() => setLine2Visible(true), 1300));
      timers.push(setTimeout(() => setLine3Visible(true), 2000));
      timers.push(setTimeout(() => setTypingDone(true), 2500));
      
      timers.push(setTimeout(() => {
        setLine1Visible(false);
        setLine2Visible(false);
        setLine3Visible(false);
        setTypingDone(false);
      }, 4500));

      timers.push(setTimeout(() => {
        setLoopKey(k => k + 1);
        runSequence();
      }, 5000));
    };

    runSequence();
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-4 bg-transparent">
      <div 
        className="w-full max-w-[300px] bg-[#ffffff] border border-[#e8e3db] rounded-[12px] p-[16px] flex flex-col gap-[10px] mx-auto"
        style={{ boxShadow: 'rgba(0,0,0,0.06) 0px 4px 16px' }}
      >
        
        {/* USER MESSAGE BUBBLE */}
        <div className="bg-[#fb6e3e] flex items-center gap-[6px] self-end max-w-[75%]" style={{ borderRadius: '12px 12px 3px 12px', padding: '8px 14px' }}>
          <div className="h-[7px] w-[90px] rounded-[4px]" style={{ backgroundColor: 'rgba(255,255,255,0.85)' }} />
        </div>

        {/* AI RESPONSE AREA */}
        <div className="w-full bg-[#f5f3ef] flex flex-col gap-[6px] self-start min-h-[80px] relative" style={{ borderRadius: '3px 12px 12px 12px', padding: '10px 14px' }} key={loopKey}>
          
          {/* Line 1 */}
          <div className="flex items-center gap-[6px] w-full min-h-[14px]">
            {line1Visible && <div className="w-[6px] h-[6px] rounded-full bg-[#fb6e3e] flex-shrink-0" />}
            <motion.div 
              className="h-[7px] rounded-[4px]"
              style={{ backgroundColor: 'rgba(61,58,53,0.7)' }}
              initial={{ width: "0%" }}
              animate={{ width: line1Visible ? "85%" : "0%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            {line1Visible && !line2Visible && (
              <motion.div 
                className="w-[4px] h-[14px] bg-[#fb6e3e] rounded-[2px]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </div>

          {/* Line 2 */}
          <div className="flex items-center gap-[6px] w-full min-h-[14px]">
            {line2Visible && <div className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(251,110,62,0.6)' }} />}
            <motion.div 
              className="h-[7px] rounded-[4px]"
              style={{ backgroundColor: 'rgba(61,58,53,0.55)' }}
              initial={{ width: "0%" }}
              animate={{ width: line2Visible ? "65%" : "0%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            {line2Visible && !line3Visible && (
              <motion.div 
                className="w-[4px] h-[14px] bg-[#fb6e3e] rounded-[2px]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </div>

          {/* Line 3 */}
          <div className="flex items-center gap-[6px] w-full min-h-[14px]">
            {line3Visible && (
              <div className="bg-[#dcfce7] rounded-[10px] flex items-center flex-shrink-0" style={{ border: '1px solid rgba(22,163,74,0.4)', padding: '1px 8px' }}>
                <div className="w-[24px] h-[5px] bg-[#16a34a] rounded-[3px]" />
              </div>
            )}
            <motion.div 
              className="h-[7px] rounded-[4px]"
              style={{ backgroundColor: 'rgba(61,58,53,0.4)' }}
              initial={{ width: "0%" }}
              animate={{ width: line3Visible ? "45%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            {line3Visible && !typingDone && (
              <motion.div 
                className="w-[4px] h-[14px] bg-[#fb6e3e] rounded-[2px]"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            )}
          </div>

        </div>

        {/* STATUS BAR */}
        <div className="flex items-center justify-between mt-[4px]">
          <div className="flex items-center gap-[4px]">
            {!typingDone && (
              [0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-[4px] h-[4px] rounded-full"
                  style={{ backgroundColor: 'rgba(251,110,62,0.5)' }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
                />
              ))
            )}
          </div>
          <div className="bg-[#f5f3ef] border border-[#e8e3db] rounded-[8px]" style={{ padding: '2px 8px' }}>
            <div className="w-[28px] h-[5px] rounded-[3px] bg-[#c8c4bc]" />
          </div>
        </div>

      </div>
    </div>
  )
}

const services = [
  {
    title: "Custom App & Product Development",
    description: "Enterprise software and digital products built to launch, scale, and evolve.",
    icon: Code2,
    animation: CodeEditorAnimation,
    href: "/services#custom-app-dev"
  },
  {
    title: "Data Engineering",
    description: "Modern data pipelines, warehousing, analytics systems, ETL automation, and decision-ready reporting.",
    icon: Database,
    animation: DataAnimation,
    href: "/services#data-engineering"
  },
  {
    title: "AI & Intelligent Development",
    description: "AI-powered products, copilots, automation systems, workflow intelligence, and modern LLM integrations.",
    icon: BrainCircuit,
    animation: AIAnimation,
    href: "/services#ai-intelligent-development"
  },
  {
    title: "Enterprise Mobility",
    description: "Secure mobile apps built for field teams, operations, and customers.",
    icon: Smartphone,
    animation: PhoneAnimation,
    href: "/services#enterprise-mobility"
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable Azure and cloud systems engineered for performance and uptime.",
    icon: Cloud,
    animation: CloudAnimation,
    href: "/services#cloud-infrastructure"
  },
  {
    title: "Quality Engineering",
    description: "Testing systems that improve release speed, quality, and reliability.",
    icon: TestTube2,
    animation: TestRunnerAnimation,
    href: "/services#quality-engineering"
  },
]

function ServiceCard({ 
  service, 
  index 
}: { 
  service: typeof services[0]
  index: number 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const AnimationComponent = service.animation

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Link 
        href={service.href}
        className="group block relative w-full h-full bg-white rounded-2xl border border-[#e7e5e4] p-6 hover:shadow-xl hover:shadow-[#fb6e3e]/5 hover:border-[#fb6e3e]/20 transition-all duration-300"
      >
        {/* Animation Area */}
        <div className="mb-4 h-[172px] rounded-xl overflow-hidden bg-[#fafaf9] border border-[#e7e5e4] flex items-center justify-center p-4">
          <AnimationComponent />
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <div className="w-10 h-10 rounded-xl bg-[#fb6e3e]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#fb6e3e]/20 transition-colors mb-3">
            <service.icon className="w-5 h-5 text-[#fb6e3e]" />
          </div>
          <h3 className="font-semibold text-[#1a1916] tracking-[-0.04em] mb-2 group-hover:text-[#fb6e3e] transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="text-sm text-[#6b6a67] leading-relaxed">
            {service.description}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] text-balance">
            Six Specialisms. One Partner.
          </h2>
          <p className="mt-4 text-lg text-[#78716c] leading-relaxed">
            Comprehensive software development capabilities to bring your vision to life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
