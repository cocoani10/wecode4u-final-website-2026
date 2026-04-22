"use client"

import Link from "next/link"

// ─── Visual 1: 3-Model Summary Table ──────────────────────────────────────────

function ModelSummaryTable() {
  const rows = [
    {
      model: "Freelancer",
      bestFor: "Bounded tasks, tight budget",
      weakness: "No accountability after handoff",
    },
    {
      model: "Agency",
      bestFor: "Defined-scope projects",
      weakness: "Overhead cost, context loss at end",
    },
    {
      model: "Offshore Dedicated Team",
      bestFor: "Long-term engineering velocity",
      weakness: "Setup time, needs direct management",
    },
  ]

  return (
    <div className="my-10 overflow-x-auto rounded-2xl border border-[#e7e5e4]">
      <table className="w-full min-w-[520px] text-sm border-collapse">
        <thead>
          <tr className="bg-[#fb6e3e]">
            <th className="text-left px-5 py-3.5 text-white font-semibold text-xs tracking-wide uppercase w-[30%]">
              Model
            </th>
            <th className="text-left px-5 py-3.5 text-white font-semibold text-xs tracking-wide uppercase w-[35%]">
              Best For
            </th>
            <th className="text-left px-5 py-3.5 text-white font-semibold text-xs tracking-wide uppercase w-[35%]">
              Core Weakness
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.model}
              className={i < rows.length - 1 ? "border-b border-[#e7e5e4]" : ""}
            >
              <td className="px-5 py-4 font-semibold text-[#1a1916]">{row.model}</td>
              <td className="px-5 py-4 text-[#57534e]">{row.bestFor}</td>
              <td className="px-5 py-4 text-[#57534e]">{row.weakness}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Visual 2: Decision Matrix ─────────────────────────────────────────────────

function DecisionMatrix() {
  const criteria = [
    { label: "Cost",              freelancer: "Low – Medium",  agency: "Medium – High", offshore: "Low – Medium",  offshoreWins: true  },
    { label: "Speed to Start",    freelancer: "Fast (days)",   agency: "2–3 weeks",     offshore: "2–4 weeks",     offshoreWins: false, freelancerWins: true },
    { label: "Scalability",       freelancer: "Low",           agency: "Low – Medium",  offshore: "High",          offshoreWins: true  },
    { label: "Long-Term Fit",     freelancer: "Low",           agency: "Low",           offshore: "High",          offshoreWins: true  },
    { label: "Context Retention", freelancer: "None",          agency: "Limited",       offshore: "Full",          offshoreWins: true  },
  ]

  return (
    <div className="my-10 overflow-x-auto rounded-2xl border border-[#e7e5e4]">
      <table className="w-full min-w-[560px] text-sm border-collapse">
        <thead>
          <tr className="border-b border-[#e7e5e4] bg-[#fafaf9]">
            <th className="text-left px-5 py-3.5 text-[#1a1916] font-semibold text-xs tracking-wide uppercase w-[24%]">
              Criterion
            </th>
            <th className="text-left px-5 py-3.5 text-[#78716c] font-semibold text-xs tracking-wide uppercase w-[22%]">
              Freelancer
            </th>
            <th className="text-left px-5 py-3.5 text-[#78716c] font-semibold text-xs tracking-wide uppercase w-[22%]">
              Agency
            </th>
            <th className="text-left px-5 py-3.5 text-[#fb6e3e] font-semibold text-xs tracking-wide uppercase w-[32%]">
              Offshore Dedicated Team
            </th>
          </tr>
        </thead>
        <tbody>
          {criteria.map((row, i) => (
            <tr
              key={row.label}
              className={[
                i < criteria.length - 1 ? "border-b border-[#e7e5e4]" : "",
                i % 2 === 1 ? "bg-[#fafaf9]" : "bg-white",
              ].join(" ")}
            >
              <td className="px-5 py-4 font-semibold text-[#1a1916] text-[13px]">
                {row.label}
              </td>
              <td className={`px-5 py-4 text-[13px] ${row.freelancerWins ? "font-semibold text-[#1a1916]" : "text-[#a8a29e]"}`}>
                {row.freelancer}
              </td>
              <td className="px-5 py-4 text-[13px] text-[#a8a29e]">
                {row.agency}
              </td>
              <td className={`px-5 py-4 text-[13px] ${row.offshoreWins ? "font-semibold text-[#1a1916]" : "text-[#a8a29e]"}`}>
                {row.offshore}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ─── Visual 3: Stage Selector Cards ───────────────────────────────────────────

function StageCards() {
  const stages = [
    {
      stage: "Seed / Pre-PMF",
      recommendation: "Freelancer or small agency",
      description:
        "Moving fast, spec changes weekly. A freelancer or small agency for the initial build is defensible. Don't over-engineer the hiring decision before you have product-market fit.",
      accent: false,
    },
    {
      stage: "Series A / Building Product",
      recommendation: "Offshore dedicated team",
      description:
        "You have PMF and you're rebuilding or extending it. A freelancer won't carry this. An agency gets expensive fast. This is the inflection point where a dedicated offshore team starts making real sense.",
      accent: true,
    },
    {
      stage: "Series B+ / Scaling",
      recommendation: "Dedicated team at scale",
      description:
        "Sustained velocity. Multiple parallel workstreams. Long-term codebase ownership. At this stage, a dedicated team isn't a cost decision. It's an engineering architecture decision.",
      accent: false,
    },
  ]

  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      {stages.map((s) => (
        <div
          key={s.stage}
          className={[
            "rounded-2xl border p-6 flex flex-col gap-3 transition-all duration-200",
            s.accent
              ? "border-[#fb6e3e]/30 bg-[#fff8f5]"
              : "border-[#e7e5e4] bg-white",
          ].join(" ")}
        >
          {/* Stage label */}
          <span
            className={[
              "text-[10px] font-bold tracking-widest uppercase",
              s.accent ? "text-[#fb6e3e]" : "text-[#a8a29e]",
            ].join(" ")}
          >
            {s.stage}
          </span>

          {/* Recommendation */}
          <p className="text-[15px] font-semibold text-[#1a1916] leading-snug tracking-[-0.02em]">
            {s.recommendation}
          </p>

          {/* Description */}
          <p className="text-sm text-[#78716c] leading-relaxed">{s.description}</p>

          {/* Accent bar */}
          {s.accent && (
            <div className="mt-auto pt-3 border-t border-[#fb6e3e]/15">
              <span className="text-[11px] font-semibold text-[#fb6e3e] tracking-wide">
                Inflection point
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Visual 4: Pull-Quote Callout ──────────────────────────────────────────────

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 border-l-4 border-[#fb6e3e] bg-[#fafaf9] px-7 py-6 rounded-r-2xl">
      <p className="text-lg font-medium text-[#1a1916] leading-relaxed italic tracking-[-0.01em]">
        {children}
      </p>
    </blockquote>
  )
}

// ─── Mid-Article CTA ───────────────────────────────────────────────────────────

function MidArticleCTA() {
  return (
    <div className="my-12 rounded-2xl border border-[#e7e5e4] bg-[#fafaf9] p-7">
      <p className="text-sm text-[#57534e] leading-relaxed">
        WeCode4U works as a dedicated offshore engineering partner. Not an agency. Not a marketplace.
        If you're evaluating this model,{" "}
        <Link href="/why-us" className="text-[#fb6e3e] font-semibold hover:underline underline-offset-2">
          see how we structure our teams and delivery &rarr;
        </Link>
      </p>
    </div>
  )
}

// ─── Primary CTA ───────────────────────────────────────────────────────────────

function PrimaryCTA() {
  return (
    <div className="my-12 rounded-2xl border border-[#e7e5e4] bg-white p-8">
      <p className="text-base font-semibold text-[#1a1916] mb-1">
        Not sure which model fits your stage?
      </p>
      <p className="text-sm text-[#78716c] mb-5">
        Thirty minutes. No pitch. A straight conversation about what you're building and whether this model fits.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 bg-[#fb6e3e] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#ea5d2d] transition-colors duration-150"
      >
        Schedule a discovery call &rarr;
      </Link>
    </div>
  )
}

// ─── Article Body ──────────────────────────────────────────────────────────────

export function FreelancerArticle() {
  return (
    <div className="prose-article">

      <p className="text-xl text-[#44403c] leading-relaxed mb-8 font-[450]">
        Most engineering capacity decisions are made under pressure, based on whichever model the founder used before. That's how companies end up locked into arrangements that fit Seed but fall apart at Series A.
      </p>

      <p className="text-base text-[#57534e] leading-relaxed mb-6">
        The three models aren't interchangeable. Each one wins in a specific context. Here's the framework to make the call cleanly.
      </p>

      <ModelSummaryTable />

      {/* ── When a Freelancer Is the Right Call ── */}
      <h2>When a Freelancer Is the Right Call</h2>
      <p>
        Freelancers are the fastest way to get something specific done. US-based freelancers typically run $75–150/hr; offshore platforms like Toptal or Upwork range from $40–90/hr. For a bounded 40-hour task, that's a transaction, not a commitment.
      </p>

      <h3>When the Model Works</h3>
      <p>
        The scope has to be genuinely isolated. A specific API integration. A design audit. A one-off data migration. If you can describe the entire deliverable in one sentence, a freelancer is probably right.
      </p>
      <p>
        It also requires someone on your side to own the output. Freelancers hand off code. If no one on your team can absorb it, the code becomes a liability.
      </p>

      <h3>Where Freelancers Break Down</h3>
      <p>
        Accountability ends the moment the engagement does. No continuity, no institutional memory, no one who'll care about that codebase in six months.
      </p>
      <p>
        Companies that lean hard on freelancers between $500K and $2M ARR tend to arrive at the same place: inconsistent code quality, accumulated debt, and a system that's harder to extend than it should be. The model doesn't carry context. That's its structural limit.
      </p>

      {/* ── When an Agency Makes Sense ── */}
      <h2>When an Agency Makes Sense</h2>
      <p>
        Agencies are right when you have a defined project, a budget ceiling, and you want delivery managed for you. Typical agency rates carry a 40–60% overhead markup over raw developer cost. You're paying for project management, account coordination, and the infrastructure around execution.
      </p>

      <h3>What Agencies Do Well</h3>
      <p>
        Agencies shine on greenfield builds with a clear spec and a fixed end date. They've shipped similar products before. They have process. If you don't want to manage sprint planning or code review, agencies absorb that overhead.
      </p>
      <p>
        They're also the right call when you need a working prototype quickly and aren't planning to build an ongoing engineering function around it.
      </p>

      <h3>The Real Cost of Agency Overhead</h3>
      <p>
        The overhead that makes agencies convenient makes them expensive to scale. Every feature request goes through account management. Every scope change reopens a billing conversation.
      </p>
      <p>
        When you hit three or four developers, you're paying full agency rates for output you could get at a fraction of the cost with a different model. When the engagement ends, the context doesn't survive the handoff.
      </p>

      {/* ── When an Offshore Dedicated Team Wins ── */}
      <h2>When an Offshore Dedicated Team Wins</h2>
      <p>
        A dedicated offshore team is a different category. You're not buying a project. You're building a persistent engineering function that happens to be distributed.
      </p>

      <PullQuote>
        "Most companies choose a freelancer at Seed, regret the agency at Series A, and wish they'd started with an offshore team sooner."
      </PullQuote>

      <h3>The Economics</h3>
      <p>
        Offshore dedicated teams in India typically cost $25–60/hr per engineer fully loaded. A three-person team running full-time runs roughly $150K–$375K per year. The US equivalent for the same seniority is typically $450K–$750K. That delta compounds.
      </p>
      <p>
        More important than the rate: the team accumulates context. They learn your codebase, your architecture decisions, your product trade-offs. That knowledge doesn't reset at sprint boundaries.
      </p>

      <h3>What "Dedicated" Actually Means</h3>
      <p>
        Dedicated means exclusively yours. Not split across three client accounts. Not context-switching between industries.
      </p>
      <p>
        Your engineers know what shipped last Tuesday, what broke last Thursday, and what the next milestone requires. You manage them directly, not through an account manager. There's a learning curve if that's new to you. The companies that clear it stop thinking of it as outsourcing and start treating it as distributed engineering.{" "}
        <Link href="/how-we-work" className="text-[#fb6e3e] hover:underline underline-offset-2 font-medium">
          See how we structure that process &rarr;
        </Link>
      </p>

      {/* ── Decision Matrix ── */}
      <h2>The Decision Matrix</h2>
      <p>
        The offshore model doesn't win on speed to start. Need code in two days? Hire a freelancer. Making a 12-month decision? The matrix gives you a clear answer.
      </p>

      <DecisionMatrix />

      <MidArticleCTA />

      {/* ── Which Stage Are You At ── */}
      <h2>Which Stage Are You At?</h2>

      <StageCards />

      {/* ── Bottom Line ── */}
      <h2>The Bottom Line</h2>
      <p>
        Freelancer for isolated tasks. Agency for a defined project with a clear end. Dedicated offshore team for engineering capacity that compounds over time.
      </p>
      <p>
        The failure mode: applying a Seed-stage model to a Series A problem. By the time you notice, the technical debt is structural.
      </p>

      <PrimaryCTA />

      <p className="text-sm text-[#a8a29e] border-t border-[#e7e5e4] pt-8 mt-8">
        WeCode4U is a dedicated offshore software engineering partner with 30+ years of enterprise delivery.{" "}
        <Link href="/how-we-work" className="hover:text-[#fb6e3e] transition-colors duration-150">
          Learn how we work
        </Link>{" "}
        or{" "}
        <Link href="/services" className="hover:text-[#fb6e3e] transition-colors duration-150">
          explore our services
        </Link>
        .
      </p>

    </div>
  )
}
