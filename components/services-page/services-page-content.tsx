"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Code2, Smartphone, Cloud, TestTube2, Database, BrainCircuit, ArrowRight, Check } from "lucide-react"

// ─── Service animations ────────────────────────────────────────────────────────

function CodeEditorAnimation() {
  const [lines, setLines] = useState<number[]>([])
  const codeLines = [
    { text: "const", color: "#c586c0" },
    { text: " app", color: "#9cdcfe" },
    { text: " = ", color: "#d4d4d4" },
    { text: "createApp", color: "#dcdcaa" },
    { text: "();", color: "#d4d4d4" },
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
    <div className="bg-[#1e1e1e] rounded-xl p-4 h-full min-h-[200px] font-mono text-sm overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#27ca3f]" />
      </div>
      <div className="space-y-1.5">
        <div className="flex">
          <span className="text-[#6a9955] mr-3 w-4">1</span>
          <span className="text-[#c586c0]">import</span>
          <span className="text-[#d4d4d4]">{" { "}</span>
          <span className="text-[#9cdcfe]">WeCode4U</span>
          <span className="text-[#d4d4d4]">{" } "}</span>
          <span className="text-[#c586c0]">from</span>
          <span className="text-[#ce9178]">{" '@enterprise'"}</span>
        </div>
        <div className="flex">
          <span className="text-[#6a9955] mr-3 w-4">2</span>
        </div>
        <div className="flex items-center">
          <span className="text-[#6a9955] mr-3 w-4">3</span>
          {lines.map((lineIdx, i) => (
            <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: codeLines[lineIdx]?.color }}>
              {codeLines[lineIdx]?.text}
            </motion.span>
          ))}
          <motion.span className="w-0.5 h-4 bg-white ml-0.5" animate={{ opacity: [1, 0] }} transition={{ duration: 0.5, repeat: Infinity }} />
        </div>
        <div className="flex">
          <span className="text-[#6a9955] mr-3 w-4">4</span>
        </div>
        <div className="flex">
          <span className="text-[#6a9955] mr-3 w-4">5</span>
          <span className="text-[#569cd6]">app</span>
          <span className="text-[#d4d4d4]">.</span>
          <span className="text-[#dcdcaa]">deploy</span>
          <span className="text-[#d4d4d4]">();</span>
        </div>
      </div>
    </div>
  )
}

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
    <div className="flex items-center justify-center h-full min-h-[200px]">
      <div className="relative w-28 h-52 bg-[#1a1916] rounded-3xl p-1.5 shadow-xl">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-2 bg-[#2a2a2a] rounded-full" />
        <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
          {screens.map((screen, i) => (
            <motion.div
              key={i}
              initial={{ x: "100%" }}
              animate={{ x: currentScreen === i ? 0 : currentScreen > i ? "-100%" : "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-1.5 rounded-xl flex items-center justify-center"
              style={{ background: screen.bg }}
            >
              <div className="text-white text-sm font-bold">{screen.icon}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CloudAnimation() {
  return (
    <div className="relative h-full min-h-[200px] flex items-center justify-center">
      <svg viewBox="0 0 160 100" className="w-full h-auto max-w-[200px]">
        <motion.line x1="40" y1="50" x2="80" y2="50" stroke="#fb6e3e" strokeWidth="2" strokeDasharray="4 2"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.line x1="80" y1="50" x2="120" y2="50" stroke="#fb6e3e" strokeWidth="2" strokeDasharray="4 2"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
        <motion.line x1="80" y1="50" x2="80" y2="25" stroke="#fb6e3e" strokeWidth="2" strokeDasharray="4 2"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
        <motion.line x1="80" y1="50" x2="80" y2="75" stroke="#fb6e3e" strokeWidth="2" strokeDasharray="4 2"
          initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity, delay: 0.9 }} />
        {[
          { cx: 40, cy: 50, delay: 0 },
          { cx: 120, cy: 50, delay: 0.2 },
          { cx: 80, cy: 25, delay: 0.4 },
          { cx: 80, cy: 75, delay: 0.6 },
          { cx: 80, cy: 50, delay: 0, main: true },
        ].map((node, i) => (
          <motion.g key={i}>
            <motion.circle cx={node.cx} cy={node.cy} r={node.main ? 14 : 10}
              fill={node.main ? "#fb6e3e" : "#fafaf9"} stroke="#fb6e3e" strokeWidth="2"
              animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: node.delay }} />
            {node.main && (
              <motion.circle cx={node.cx} cy={node.cy} r="20" fill="none" stroke="#fb6e3e" strokeWidth="1" opacity="0.3"
                animate={{ scale: [1, 1.5], opacity: [0.3, 0] }} transition={{ duration: 2, repeat: Infinity }} />
            )}
          </motion.g>
        ))}
      </svg>
    </div>
  )
}

function TestRunnerAnimation() {
  const [tests, setTests] = useState<boolean[]>([])

  useEffect(() => {
    const runTests = () => {
      setTests([])
      let i = 0
      const interval = setInterval(() => {
        if (i < 4) { setTests(prev => [...prev, true]); i++ }
        else { clearInterval(interval); setTimeout(runTests, 2000) }
      }, 500)
      return () => clearInterval(interval)
    }
    const cleanup = runTests()
    return cleanup
  }, [])

  const testNames = ["Unit Tests", "Integration", "E2E Tests", "Performance"]

  return (
    <div className="bg-[#1a1916] rounded-xl p-4 h-full min-h-[200px] font-mono text-sm">
      <div className="flex items-center gap-2 mb-4 text-[#78716c]">
        <TestTube2 className="w-4 h-4" />
        <span>Test Suite Running</span>
      </div>
      <div className="space-y-3">
        {testNames.map((name, i) => (
          <div key={name} className="flex items-center gap-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: tests[i] ? 1 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-5 h-5 rounded-full bg-[#10b981] flex items-center justify-center"
            >
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

function DataAnimation() {
  const [states, setStates] = useState<('pending' | 'active' | 'complete')[]>(['pending', 'pending', 'pending', 'pending'])
  const [loopKey, setLoopKey] = useState(0)

  useEffect(() => {
    let timers: NodeJS.Timeout[] = []
    const runSequence = () => {
      setStates(['active', 'pending', 'pending', 'pending'])
      timers.push(setTimeout(() => setStates(['complete', 'active', 'pending', 'pending']), 900))
      timers.push(setTimeout(() => setStates(['complete', 'complete', 'active', 'pending']), 1800))
      timers.push(setTimeout(() => setStates(['complete', 'complete', 'complete', 'active']), 2700))
      timers.push(setTimeout(() => setStates(['complete', 'complete', 'complete', 'complete']), 3600))
      timers.push(setTimeout(() => setStates(['pending', 'pending', 'pending', 'pending']), 5500))
      timers.push(setTimeout(() => { setLoopKey(k => k + 1); runSequence() }, 5600))
    }
    runSequence()
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="h-full min-h-[200px] flex items-center justify-center p-4">
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
            const state = states[i]
            const isNotLast = i < 3
            return (
              <div key={i} className={`flex items-center h-[48px] ${isNotLast ? 'border-b border-[#ede9e3]' : ''}`}>
                <div className="mr-[12px] w-[20px] h-[20px] rounded-full flex-shrink-0 relative overflow-hidden flex items-center justify-center" style={{
                  background: state === 'complete' ? '#16a34a' : state === 'active' ? '#fb6e3e' : '#f0ede8',
                  border: `2px solid ${state === 'complete' ? '#16a34a' : state === 'active' ? '#fb6e3e' : '#e2ddd6'}`
                }}>
                  {state === 'complete' && <div className="w-[5px] h-[9px] border-b-2 border-r-2 border-white rotate-45 mb-[2px]" />}
                  {state === 'active' && (
                    <motion.div initial={false} animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}
                      className="absolute inset-0 bg-[#fb6e3e] rounded-full" />
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
                          animate={{ scale: [0.5, 1.2, 0.5] }} transition={{ repeat: Infinity, duration: 0.7, delay: dot * 0.18 }} />
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
          <motion.div key={loopKey} className="h-full bg-[#fb6e3e] rounded-[2px]"
            initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 3.6, ease: "linear" }} />
        </div>
      </div>
    </div>
  )
}

function AIAnimation() {
  const [line1Visible, setLine1Visible] = useState(false)
  const [line2Visible, setLine2Visible] = useState(false)
  const [line3Visible, setLine3Visible] = useState(false)
  const [typingDone, setTypingDone] = useState(false)
  const [loopKey, setLoopKey] = useState(0)

  useEffect(() => {
    let timers: NodeJS.Timeout[] = []
    const runSequence = () => {
      setLine1Visible(false); setLine2Visible(false); setLine3Visible(false); setTypingDone(false)
      timers.push(setTimeout(() => setLine1Visible(true), 400))
      timers.push(setTimeout(() => setLine2Visible(true), 1300))
      timers.push(setTimeout(() => setLine3Visible(true), 2000))
      timers.push(setTimeout(() => setTypingDone(true), 2500))
      timers.push(setTimeout(() => { setLine1Visible(false); setLine2Visible(false); setLine3Visible(false); setTypingDone(false) }, 4500))
      timers.push(setTimeout(() => { setLoopKey(k => k + 1); runSequence() }, 5000))
    }
    runSequence()
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div className="h-full min-h-[200px] flex items-center justify-center p-4 bg-transparent">
      <div className="w-full max-w-[300px] bg-[#ffffff] border border-[#e8e3db] rounded-[12px] p-[16px] flex flex-col gap-[10px] mx-auto"
        style={{ boxShadow: 'rgba(0,0,0,0.06) 0px 4px 16px' }}>
        <div className="bg-[#fb6e3e] flex items-center gap-[6px] self-end max-w-[75%]" style={{ borderRadius: '12px 12px 3px 12px', padding: '8px 14px' }}>
          <div className="h-[7px] w-[90px] rounded-[4px]" style={{ backgroundColor: 'rgba(255,255,255,0.85)' }} />
        </div>
        <div className="w-full bg-[#f5f3ef] flex flex-col gap-[6px] self-start min-h-[80px] relative" style={{ borderRadius: '3px 12px 12px 12px', padding: '10px 14px' }} key={loopKey}>
          <div className="flex items-center gap-[6px] w-full min-h-[14px]">
            {line1Visible && <div className="w-[6px] h-[6px] rounded-full bg-[#fb6e3e] flex-shrink-0" />}
            <motion.div className="h-[7px] rounded-[4px]" style={{ backgroundColor: 'rgba(61,58,53,0.7)' }}
              initial={{ width: "0%" }} animate={{ width: line1Visible ? "85%" : "0%" }} transition={{ duration: 0.8, ease: "easeInOut" }} />
            {line1Visible && !line2Visible && (
              <motion.div className="w-[4px] h-[14px] bg-[#fb6e3e] rounded-[2px]" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
            )}
          </div>
          <div className="flex items-center gap-[6px] w-full min-h-[14px]">
            {line2Visible && <div className="w-[6px] h-[6px] rounded-full flex-shrink-0" style={{ backgroundColor: 'rgba(251,110,62,0.6)' }} />}
            <motion.div className="h-[7px] rounded-[4px]" style={{ backgroundColor: 'rgba(61,58,53,0.55)' }}
              initial={{ width: "0%" }} animate={{ width: line2Visible ? "65%" : "0%" }} transition={{ duration: 0.6, ease: "easeInOut" }} />
            {line2Visible && !line3Visible && (
              <motion.div className="w-[4px] h-[14px] bg-[#fb6e3e] rounded-[2px]" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
            )}
          </div>
          <div className="flex items-center gap-[6px] w-full min-h-[14px]">
            {line3Visible && (
              <div className="bg-[#dcfce7] rounded-[10px] flex items-center flex-shrink-0" style={{ border: '1px solid rgba(22,163,74,0.4)', padding: '1px 8px' }}>
                <div className="w-[24px] h-[5px] bg-[#16a34a] rounded-[3px]" />
              </div>
            )}
            <motion.div className="h-[7px] rounded-[4px]" style={{ backgroundColor: 'rgba(61,58,53,0.4)' }}
              initial={{ width: "0%" }} animate={{ width: line3Visible ? "45%" : "0%" }} transition={{ duration: 0.4, ease: "easeInOut" }} />
            {line3Visible && !typingDone && (
              <motion.div className="w-[4px] h-[14px] bg-[#fb6e3e] rounded-[2px]" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />
            )}
          </div>
        </div>
        <div className="flex items-center justify-between mt-[4px]">
          <div className="flex items-center gap-[4px]">
            {!typingDone && [0, 1, 2].map((i) => (
              <motion.div key={i} className="w-[4px] h-[4px] rounded-full" style={{ backgroundColor: 'rgba(251,110,62,0.5)' }}
                animate={{ y: [0, -3, 0] }} transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }} />
            ))}
          </div>
          <div className="bg-[#f5f3ef] border border-[#e8e3db] rounded-[8px]" style={{ padding: '2px 8px' }}>
            <div className="w-[28px] h-[5px] rounded-[3px] bg-[#c8c4bc]" />
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "custom-app-dev",
    title: "Custom App & Product Development",
    shortTitle: "Custom App & Product Dev",
    description: "Enterprise software and digital products built to launch, scale, and evolve.",
    icon: Code2,
    animation: CodeEditorAnimation,
    deliverables: ["Full-stack web applications", "API design and development", "Database architecture", "Third-party integrations", "Legacy system modernization", "Performance optimization"],
    techStack: [
      { category: "Frontend", tools: ["React", "Angular", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript"] },
      { category: "Backend", tools: [".NET", "Node.js", "Python"] },
      { category: "Cloud & Data", tools: ["Azure", "GCP", "AWS", "Vercel"] },
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    shortTitle: "Data Engineering",
    description: "Modern data pipelines, warehousing, analytics systems, ETL automation, and decision-ready reporting.",
    icon: Database,
    animation: DataAnimation,
    deliverables: ["ETL / ELT pipelines", "Data warehouse design", "Reporting pipelines", "Data modeling", "Dashboard-ready data layers", "Workflow orchestration", "Data quality monitoring"],
    techStack: [
      { category: "Data Warehouse", tools: ["Synapse", "SQL Server", "BigQuery"] },
      { category: "Pipelines", tools: ["Azure Data Factory", "SSIS", "ETL Automation"] },
      { category: "Analytics", tools: ["Power BI", "Reporting Layers"] },
    ],
  },
  {
    id: "ai-intelligent-development",
    title: "AI & Intelligent Development",
    shortTitle: "AI Development",
    description: "AI-powered products, copilots, automation systems, workflow intelligence, and modern LLM integrations.",
    icon: BrainCircuit,
    animation: AIAnimation,
    deliverables: ["AI copilots", "Workflow automation", "Retrieval-powered experiences", "LLM integrations", "Document intelligence", "Internal AI tools", "Decision support systems"],
    techStack: [
      { category: "Core AI", tools: ["OpenAI", "Azure OpenAI", "Claude", "Gemini", "LangChain"] },
      { category: "Automation", tools: ["AI Copilots", "RAG Systems", "Workflow AI"] },
      { category: "Backend / Integration", tools: ["Python", ".NET", "APIs"] },
    ],
  },
  {
    id: "enterprise-mobility",
    title: "Enterprise Mobility",
    shortTitle: "Enterprise Mobility",
    description: "Secure mobile apps built for field teams, operations, and customers.",
    icon: Smartphone,
    animation: PhoneAnimation,
    deliverables: ["Native iOS applications", "Native Android applications", "Cross-platform solutions", "Mobile backend services", "Push notification systems", "App Store optimization"],
    techStack: [
      { category: "Frontend", tools: ["React Native", "Flutter", ".NET MAUI"] },
      { category: "Backend", tools: [".NET APIs", "Firebase", "REST APIs", "GraphQL"] },
    ],
  },
  {
    id: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    shortTitle: "Cloud Infrastructure",
    description: "Scalable Azure and cloud systems engineered for performance and uptime.",
    icon: Cloud,
    animation: CloudAnimation,
    deliverables: ["Cloud migration strategy", "Infrastructure as Code", "CI/CD pipelines", "Container orchestration", "Monitoring and alerting", "Cost optimization"],
    techStack: [
      { category: "Cloud", tools: ["Azure", "AWS", "GCP"] },
      { category: "Containers", tools: ["Kubernetes", "Docker"] },
      { category: "DevOps", tools: ["CI/CD", "Terraform", "GitHub Actions"] },
      { category: "Monitoring", tools: ["Prometheus", "Grafana", "Azure Monitor"] },
    ],
  },
  {
    id: "quality-engineering",
    title: "Quality Engineering",
    shortTitle: "Quality Engineering",
    description: "Testing systems that improve release speed, quality, and reliability.",
    icon: TestTube2,
    animation: TestRunnerAnimation,
    deliverables: ["Automated testing", "Regression coverage", "Integration testing", "Performance validation", "Release readiness checks", "QA workflows", "Test strategy"],
    techStack: [
      { category: "QA / Automation", tools: ["Playwright", "Selenium", "Cypress", "Postman", "JMeter", "xUnit", "Jest"] },
    ],
  },
]

// ─── Sub-components ────────────────────────────────────────────────────────────

function ServicePreviewGrid() {
  const previews = [
    { title: "Custom App & Product Development", icon: Code2, Preview: CodeEditorAnimation },
    { title: "Data Engineering", icon: Database, Preview: DataAnimation },
    { title: "AI & Intelligent Development", icon: BrainCircuit, Preview: AIAnimation },
    { title: "Enterprise Mobility", icon: Smartphone, Preview: PhoneAnimation },
    { title: "Cloud Infrastructure", icon: Cloud, Preview: CloudAnimation },
    { title: "Quality Engineering", icon: TestTube2, Preview: TestRunnerAnimation },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
      {previews.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
          className="group bg-white rounded-2xl border border-[#e7e5e4] p-4 lg:p-5 hover:border-[#fb6e3e]/30 hover:shadow-lg hover:shadow-[#fb6e3e]/5 transition-all duration-300 flex flex-col"
        >
          <div className="h-[120px] lg:h-[132px] mb-4 relative overflow-hidden rounded-xl bg-[#fafaf9] border border-[#e7e5e4] flex items-center justify-center pointer-events-none">
            <div className="transform scale-[0.55] lg:scale-[0.6] origin-center w-[300px] h-[250px] flex items-center justify-center">
              <item.Preview />
            </div>
          </div>
          <div className="flex items-start gap-2 mt-auto">
            <div className="w-6 h-6 rounded-md bg-[#fafaf9] flex items-center justify-center shrink-0">
              <item.icon className="w-3.5 h-3.5 text-[#fb6e3e]" />
            </div>
            <span className="text-sm font-medium text-[#1a1916] leading-tight pt-[2px]">{item.title}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function ServiceSection({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0
  const AnimationComponent = service.animation

  return (
    <section id={service.id} className={`py-20 lg:py-28 ${isEven ? 'bg-white' : 'bg-[#fafaf9]'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
        >
          <div className={!isEven ? 'lg:col-start-2' : ''}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#fb6e3e]/10 flex items-center justify-center">
                <service.icon className="w-6 h-6 text-[#fb6e3e]" />
              </div>
              <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase">
                Service {String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1a1916] tracking-[-0.04em] mb-4">
              {service.title}
            </h2>
            <p className="text-lg text-[#78716c] leading-relaxed mb-8">{service.description}</p>
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-[#1a1916] uppercase tracking-wide mb-4">What We Deliver</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#fb6e3e] flex-shrink-0 mt-0.5" />
                    <span className="text-[#57534e]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a1916] uppercase tracking-wide mb-4">Tech Stack</h3>
              <div className="flex flex-col gap-4">
                {(service.techStack as any[]).map((categoryGroup) => (
                  <div key={categoryGroup.category}>
                    <div className="text-[11px] font-semibold text-[#a8a29e] tracking-widest uppercase mb-2">{categoryGroup.category}</div>
                    <div className="flex flex-wrap gap-2">
                      {categoryGroup.tools.map((tech: string) => (
                        <span key={tech} className="px-3 py-1.5 bg-white border border-[#e7e5e4] rounded-lg text-sm text-[#57534e] hover:border-[#fb6e3e]/30 hover:text-[#fb6e3e] transition-colors">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <div className="bg-white rounded-2xl border border-[#e7e5e4] p-6 shadow-lg shadow-black/5">
              <AnimationComponent />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Page Content ──────────────────────────────────────────────────────────────

export function ServicesPageContent() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1916] tracking-[-0.04em] mb-6 text-balance">
              Six Specialisms. One Partner.
            </h1>
            <p className="text-xl text-[#78716c] leading-relaxed">
              Comprehensive software development capabilities to bring your vision to life.
              From concept to deployment, we handle every aspect of your digital product.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="group flex items-center gap-2 px-4 py-2 bg-[#fafaf9] border border-[#e7e5e4] rounded-lg text-sm font-medium text-[#57534e] hover:border-[#fb6e3e]/30 hover:text-[#fb6e3e] transition-colors"
              >
                <service.icon className="w-4 h-4" />
                {service.shortTitle}
                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </motion.div>

          {/* Preview grid */}
          <div className="mt-16 lg:mt-20 max-w-5xl mx-auto">
            <ServicePreviewGrid />
          </div>
        </div>
      </section>

      {/* Service sections */}
      {services.map((service, index) => (
        <ServiceSection key={service.id} service={service} index={index} />
      ))}

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1916] tracking-[-0.04em] mb-6 text-balance">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-[#78716c] mb-8">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#fb6e3e] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ea5d2d] transition-colors">
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </main>
  )
}
