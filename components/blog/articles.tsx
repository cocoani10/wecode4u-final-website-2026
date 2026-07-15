import type { JSX } from "react"
import { FreelancerArticle } from "@/components/blog/freelancer-article"
import { getBlogPost } from "@/lib/blog"

/* ─────────────────────────────────────────────────────────────
   ARTICLE BODIES — one component per post slug.
   Each follows the same pattern: an intro paragraph followed
   by a .prose-article section.
   ───────────────────────────────────────────────────────────── */

function EnterpriseFailureArticle() {
  return (
    <>
      <p className="text-xl text-[#44403c] leading-relaxed mb-10 font-[450]">
        Most enterprise software projects don&apos;t fail because of bad code. They fail because of misaligned expectations, unclear ownership, and scope decisions made before anyone truly understood the problem.
      </p>

      <div className="prose-article">
        <h2>The failure mode nobody talks about</h2>
        <p>
          When a large software project collapses, the post-mortem usually points to technical causes — a poorly chosen architecture, an under-resourced team, a platform that couldn&apos;t scale. These are real. But they&apos;re almost always symptoms, not causes.
        </p>
        <p>
          The actual failure typically began months earlier, in a requirements meeting, a procurement decision, or a kickoff where the right questions weren&apos;t asked. By the time code is written, the trajectory is already set.
        </p>

        <h2>Four root causes we see consistently</h2>
        <p>
          Across hundreds of projects, the failures we&apos;ve witnessed — and the ones we&apos;ve been brought in to rescue — cluster around a small set of patterns.
        </p>

        <h3>1. Scope defined before problems are understood</h3>
        <p>
          Fixed-scope contracts feel safe to procurement teams. They&apos;re not. When scope is locked before the domain is well understood, every discovery becomes a change request, every edge case becomes a negotiation, and the team optimises for contract compliance rather than business outcomes.
        </p>

        <h3>2. Ownership gaps between business and engineering</h3>
        <p>
          Complex systems need someone who can hold both the business intent and the technical implementation in their head simultaneously. When product, engineering, and business operate in separate silos with handoff-based communication, critical context is lost at every boundary.
        </p>

        <h3>3. Delivery cadence that hides problems</h3>
        <p>
          Quarterly demos create quarterly feedback loops. By the time something is visibly wrong, months of effort have been invested in the wrong direction. High-functioning teams surface problems in days, not quarters.
        </p>

        <h3>4. Technical debt treated as future work</h3>
        <p>
          Every shortcut compounds. A codebase where debt is routinely deferred becomes progressively harder to change — and the teams working in it become slower at exactly the moment the business needs they move faster.
        </p>

        <h2>What prevention actually looks like</h2>
        <p>
          Prevention isn&apos;t a methodology. It&apos;s a set of habits applied consistently. It means requiring real discovery before scope is committed. It means embedding technical judgment into business decisions, not receiving them as downstream requirements. It means building systems that expose failures early — through automated testing, continuous deployment, and feedback loops measured in hours, not weeks.
        </p>
        <p>
          The teams that deliver reliably aren&apos;t the ones that never encounter problems. They&apos;re the ones that find problems early enough to do something about them.
        </p>

        <h2>A practical starting point</h2>
        <p>
          If you&apos;re evaluating a software engagement — whether you&apos;re a buyer or an engineering leader — the single most valuable question you can ask is: how will we know if something is going wrong, and how quickly will we know it?
        </p>
        <p>
          The answer to that question tells you almost everything about how the project will run.
        </p>
      </div>
    </>
  )
}

function ArchitectureArticle() {
  return (
    <>
      <p className="text-xl text-[#44403c] leading-relaxed mb-10 font-[450]">
        Every system has a ceiling — a point beyond which change becomes slow, risky, and expensive. That ceiling isn&apos;t set when the system is five years old. It&apos;s set in the first three months, by a handful of decisions that compound quietly for years.
      </p>

      <div className="prose-article">
        <h2>Why early decisions carry so much weight</h2>
        <p>
          Architecture is the set of decisions that are expensive to reverse. Choice of data model, service boundaries, authentication strategy, how state flows through the system — these become load-bearing within weeks. Every feature built afterwards either reinforces them or fights them.
        </p>
        <p>
          This is what makes architecture different from code. Bad code is local; you can rewrite a function on a Tuesday afternoon. A bad boundary between two services touches every team that integrates with it, forever.
        </p>

        <h2>The decisions that compound</h2>

        <h3>Data model before features</h3>
        <p>
          The single most durable artifact in any system is its data model. Interfaces get redesigned, services get rewritten, but the shape of the data outlives them all. We spend disproportionate time here early — naming things after the business domain, separating what changes together, and refusing to encode today&apos;s org chart into tomorrow&apos;s schema.
        </p>

        <h3>Boundaries drawn around change, not teams</h3>
        <p>
          Good service and module boundaries isolate the parts of the system that change for different reasons. When boundaries follow the rate of change, most work stays inside one boundary and teams move independently. When they don&apos;t, every feature becomes a cross-team negotiation.
        </p>

        <h3>Boring technology, deliberately chosen</h3>
        <p>
          Novel infrastructure is a loan against future operability. We default to proven, well-documented technology and spend our innovation budget on the one or two places where the product genuinely demands it. A system built on boring foundations can afford one interesting component. A system built on five interesting components can&apos;t afford any.
        </p>

        <h3>Deployment and observability from day one</h3>
        <p>
          How a system ships and how it&apos;s observed are architectural decisions, not operational afterthoughts. Teams that can deploy safely in minutes make hundreds of small corrections a year. Teams that deploy monthly make a dozen large, risky ones. Over three years, that difference compounds into entirely different systems.
        </p>

        <h2>How to evaluate an early-stage architecture</h2>
        <p>
          You don&apos;t need to audit every diagram. Ask three questions: How long does it take to get a one-line change into production safely? If a core business rule changed tomorrow, how many places would need editing? And can a new engineer explain where a given piece of logic lives after a week?
        </p>
        <p>
          Systems that score well on those three questions at month three tend to still be healthy at year five. Systems that score poorly rarely recover without a rescue effort — and rescue is always more expensive than getting the early decisions right.
        </p>
      </div>
    </>
  )
}

function TechnicalDebtArticle() {
  return (
    <>
      <p className="text-xl text-[#44403c] leading-relaxed mb-10 font-[450]">
        Technical debt is usually discussed as a future problem — something to be paid down &quot;when things calm down.&quot; In reality it&apos;s a daily tax, charged on every feature, every estimate, and every hire, whether you acknowledge it or not.
      </p>

      <div className="prose-article">
        <h2>Where the cost actually shows up</h2>
        <p>
          Debt rarely presents itself as debt. It presents as symptoms: estimates that keep doubling, a growing fear of touching certain modules, releases that need a week of manual testing, senior engineers spending their time firefighting instead of building. Each symptom looks like a people problem or a process problem. Underneath, it&apos;s the codebase resisting change.
        </p>
        <p>
          The most expensive line item is the one nobody invoices: opportunity cost. A team that ships 30% slower doesn&apos;t just deliver features late — it loses entire product bets it never had time to place.
        </p>

        <h2>How we quantify it</h2>
        <p>
          &quot;The code is bad&quot; is not information a stakeholder can act on. Numbers are. We translate debt into three measurable signals:
        </p>

        <h3>Change lead time per module</h3>
        <p>
          How long does a comparable change take in the healthiest part of the system versus the worst? A 5x spread is common in debt-heavy codebases, and it puts a concrete price on specific modules rather than a vague feeling about the whole.
        </p>

        <h3>Defect concentration</h3>
        <p>
          In most systems, a small fraction of files produces the majority of production incidents. Mapping incidents back to modules identifies exactly where refactoring buys reliability — and where it doesn&apos;t.
        </p>

        <h3>Onboarding time</h3>
        <p>
          How long before a competent new engineer ships confidently? Debt-heavy systems routinely triple this. At real salary costs, that number belongs in any conversation about whether the debt is &quot;worth fixing.&quot;
        </p>

        <h2>Paying it down without halting delivery</h2>
        <p>
          The instinct to stop everything and rewrite is almost always wrong. Rewrites reset the debt clock while destroying accumulated domain knowledge. What works is steady, targeted repayment: fix debt in the modules you&apos;re about to change anyway, hold a quality bar on all new code so the debt stops growing, and reserve a fixed share of every cycle — we typically use 15–20% — for the highest-cost items identified by the measurements above.
        </p>
        <p>
          Handled this way, debt reduction is invisible to the roadmap in the short term and transformative to it in the long term. The teams that treat debt as a permanent engineering discipline, rather than an occasional cleanup project, are the ones whose velocity holds up over years instead of quarters.
        </p>
      </div>
    </>
  )
}

function PredictabilityArticle() {
  return (
    <>
      <p className="text-xl text-[#44403c] leading-relaxed mb-10 font-[450]">
        Every software vendor promises speed. Very few promise — and deliver — predictability. After three decades of client work, we&apos;re convinced the second one is what actually builds trust, and what actually ships products.
      </p>

      <div className="prose-article">
        <h2>The problem with optimising for speed</h2>
        <p>
          Speed is easy to demonstrate for a sprint and very hard to sustain for a year. Teams that optimise for visible velocity tend to borrow it from somewhere invisible: test coverage, code review, documentation, design time. The loan comes due as instability — and instability is the enemy of every schedule ever written.
        </p>
        <p>
          Worse, raw speed is unplannable. A team that ships in &quot;two to ten weeks depending&quot; forces every stakeholder around it — marketing, sales, finance, leadership — to hedge. A team that reliably ships what it committed to lets an entire company plan.
        </p>

        <h2>What predictability is made of</h2>

        <h3>Honest estimation, protected scope</h3>
        <p>
          Predictable teams estimate from evidence — their own measured throughput — not from optimism. And once a commitment is made, scope is protected: new requests are welcomed, prioritised, and scheduled, not silently absorbed into an already-full sprint.
        </p>

        <h3>Small batches, visible progress</h3>
        <p>
          The larger the batch of work, the wider the error bars. We ship in small increments that reach a demonstrable state every week or two. Progress you can click on is progress that can&apos;t quietly be 80% done for three months.
        </p>

        <h3>Problems surfaced early, by design</h3>
        <p>
          Every project hits surprises. The difference between a predictable team and an unpredictable one is when those surprises surface. Continuous integration, frequent demos, and a culture where raising a risk is rewarded rather than punished mean bad news arrives while it&apos;s still cheap.
        </p>

        <h2>What this means for clients</h2>
        <p>
          Practically, it means fewer heroics and fewer apologies. It means a roadmap that survives contact with reality, budgets that hold, and launches that marketing can actually plan a campaign around. Speed still matters — consistent teams are usually fast teams, because they aren&apos;t losing weeks to rework and firefighting. But the speed is a by-product of the consistency, never the other way around.
        </p>
        <p>
          When you evaluate an engineering partner, don&apos;t ask how fast they are. Ask them to show you the last six things they committed to and when each one actually shipped. That answer is the only speed metric that matters.
        </p>
      </div>
    </>
  )
}

function Iso27001Article() {
  return (
    <>
      <p className="text-xl text-[#44403c] leading-relaxed mb-10 font-[450]">
        ISO 27001 appears on a lot of websites as a trust badge. Having lived with the certification — the audits, the controls, the annual scrutiny — we think buyers deserve a candid explanation of what it actually guarantees, and what it doesn&apos;t.
      </p>

      <div className="prose-article">
        <h2>What the certification actually requires</h2>
        <p>
          ISO 27001 certifies an information security management system — a living set of policies, controls, and processes covering how an organisation identifies risks, protects data, controls access, responds to incidents, and verifies all of it continuously. Certification isn&apos;t a questionnaire; it&apos;s an external audit of evidence, repeated every year, with a full recertification cycle every three.
        </p>
        <p>
          In practice, that means access to client systems is granted on least-privilege terms and reviewed on a schedule. It means laptops are encrypted and centrally managed. It means there is a tested procedure for what happens in the first hour after a suspected breach — not a plan to make a plan.
        </p>

        <h2>Why it matters more for offshore work</h2>
        <p>
          When your engineering team sits inside your building, informal oversight papers over a lot. When your team is eight time zones away with access to your source code, your customer data, and your infrastructure, process is the only oversight there is. This is exactly the gap ISO 27001 (and its privacy extension, ISO 27701) exists to close — it replaces &quot;trust us&quot; with independently audited evidence.
        </p>
        <p>
          For clients in regulated industries, it also shortens procurement dramatically. Security questionnaires that once took weeks collapse when the answer to most questions is a certificate and an auditor&apos;s report.
        </p>

        <h2>What it doesn&apos;t cover</h2>
        <p>
          Honesty requires saying this clearly: ISO 27001 certifies the management system, not the code. It does not guarantee that any given application is free of vulnerabilities, that developers write secure code, or that a specific product would pass a penetration test. An organisation can be fully certified and still ship an injectable query.
        </p>
        <p>
          Secure engineering — threat modelling, dependency scanning, code review with a security lens, penetration testing — is a separate discipline that has to be practised on every project. The certification creates the environment where those practices are enforced and evidenced; it doesn&apos;t substitute for them.
        </p>

        <h2>How to use this as a buyer</h2>
        <p>
          Treat ISO 27001 as a filter, not a finish line. Its absence in a vendor handling sensitive data is a legitimate red flag. Its presence tells you the fundamentals — access control, incident response, data handling — are audited rather than aspirational. Then ask the next question: &quot;show me how security shows up in your development process.&quot; A good partner will have a concrete answer for both.
        </p>
      </div>
    </>
  )
}

function PartnershipsArticle() {
  return (
    <>
      <p className="text-xl text-[#44403c] leading-relaxed mb-10 font-[450]">
        Some of our client relationships are older than most software companies. That longevity isn&apos;t the product of account management or loyalty discounts. It comes from a small number of unglamorous behaviours, applied for years.
      </p>

      <div className="prose-article">
        <h2>Why most vendor relationships decay</h2>
        <p>
          The typical engagement starts warm and cools predictably: the senior people who sold the work rotate off, knowledge concentrates in individuals who eventually leave, small frustrations go unspoken until they become large ones, and the vendor slowly shifts from solving problems to defending scope. Nothing dramatic happens — the relationship just erodes until a procurement cycle finishes it.
        </p>
        <p>
          None of those failure modes are about talent. They&apos;re about accountability structures, which means they can be designed against.
        </p>

        <h2>What actually sustains a decade-long partnership</h2>

        <h3>Accountability for outcomes, not tickets</h3>
        <p>
          A ticket-taker asks &quot;what do you want built?&quot; A partner asks &quot;what are you trying to achieve?&quot; — and is willing to say when the requested feature won&apos;t achieve it. Clients keep the teams that occasionally talk them out of spending money.
        </p>

        <h3>Institutional memory, deliberately maintained</h3>
        <p>
          Long relationships accumulate context: why the system is shaped the way it is, which approaches were tried and abandoned, what the business tolerates and what it can&apos;t. We treat that context as an asset to be documented and shared across the team, so the partnership survives any individual&apos;s departure — on either side.
        </p>

        <h3>Bad news, delivered early and plainly</h3>
        <p>
          Every long engagement includes failures: a missed estimate, a bad release, a wrong technical bet. Relationships don&apos;t end because of failures. They end because of surprises. The discipline of surfacing problems while they&apos;re still small — with a plan attached — is worth more than any contract clause.
        </p>

        <h3>Solving the right problem at the right time</h3>
        <p>
          A partner who understands the business knows when to push for the strategic rebuild and when the business needs the quick tactical fix, even if it offends engineering sensibilities. Judgment about timing — not just technical correctness — is what separates a partner from a very good contractor.
        </p>

        <h2>The compounding return</h2>
        <p>
          A team with five years of context ships in days what a new vendor would need months to even scope. Discovery phases shrink, estimates sharpen, and risk drops with every year of accumulated understanding. That compounding is the real economic argument for partnership — and it&apos;s only available to clients and vendors willing to invest in the behaviours above.
        </p>
      </div>
    </>
  )
}

function CostGuideArticle() {
  const faq = getBlogPost("custom-software-development-cost-guide")?.faq ?? []

  return (
    <>
      <p className="text-xl text-[#44403c] leading-relaxed mb-10 font-[450]">
        Custom software development costs between <strong>$15,000 and $150,000+</strong>, depending on scope and team model. A simple MVP averages $15,000–$40,000, a mid-size business application $40,000–$100,000, and a complex enterprise platform $100,000–$500,000 or more. The single biggest lever on that range is whether you hire locally or work with a dedicated offshore team — which typically cuts cost by 40–60% at the same seniority level.
      </p>

      <div className="prose-article">
        <h2>Cost by project type (2026)</h2>
        <p>
          The table below reflects typical ranges for projects delivered by mid-size development partners in 2026. Highly regulated industries (healthcare, fintech) and projects requiring novel AI features trend toward the top of each range.
        </p>

        <table>
          <thead>
            <tr>
              <th>Project type</th>
              <th>Typical cost</th>
              <th>Typical timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MVP / proof of concept</td>
              <td>$15,000 – $40,000</td>
              <td>8–14 weeks</td>
            </tr>
            <tr>
              <td>Mid-size business application</td>
              <td>$40,000 – $100,000</td>
              <td>3–6 months</td>
            </tr>
            <tr>
              <td>Enterprise platform</td>
              <td>$100,000 – $500,000+</td>
              <td>6–12+ months</td>
            </tr>
            <tr>
              <td>Ongoing product development (dedicated team)</td>
              <td>$8,000 – $25,000 / month</td>
              <td>Continuous</td>
            </tr>
          </tbody>
        </table>

        <h2>Offshore vs. onshore hourly rates</h2>
        <p>
          Rates vary by region and seniority, but the pattern is consistent across the industry: offshore engineering delivers comparable seniority at a fraction of the fully-loaded cost of hiring locally.
        </p>

        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th>Senior engineer (hourly)</th>
              <th>Senior engineer (annual, fully loaded)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>United States</td>
              <td>$80 – $150</td>
              <td>$120,000 – $160,000</td>
            </tr>
            <tr>
              <td>Western Europe / UK</td>
              <td>$70 – $130</td>
              <td>$100,000 – $140,000</td>
            </tr>
            <tr>
              <td>India (offshore, dedicated team)</td>
              <td>$25 – $45</td>
              <td>$35,000 – $55,000</td>
            </tr>
          </tbody>
        </table>

        <h2>What actually drives cost up</h2>
        <p>
          Two projects with the same feature list on paper can differ in price by 2–3x. In order of impact, the factors that most reliably increase cost are:
        </p>

        <ol>
          <li><strong>Third-party integrations.</strong> Each external system (payment processors, CRMs, ERPs, legacy APIs) adds discovery, error handling, and testing surface area — usually 1–3 weeks per integration.</li>
          <li><strong>Compliance requirements.</strong> HIPAA, SOC 2, and PCI-DSS all require specific architecture patterns, audit logging, and often a compliance review pass before launch — typically adding 15–25% to project cost.</li>
          <li><strong>Real-time or offline functionality.</strong> Live collaboration, offline-first sync, or real-time dashboards require materially more engineering than standard CRUD applications.</li>
          <li><strong>Number of user roles.</strong> Every additional permission level multiplies the testing matrix and often reshapes the data model.</li>
          <li><strong>Custom UI/UX vs. component libraries.</strong> A fully bespoke design system costs meaningfully more than building on shadcn/ui, Material, or a similar library — with no guarantee of a better outcome for internal tools.</li>
        </ol>

        <h2>How to reduce cost without cutting quality</h2>
        <p>
          The reliable way to control cost is sequencing, not corner-cutting. Start with a paid discovery phase (typically 1–2 weeks) to nail down scope before committing to a fixed price — this alone prevents the change-request spiral that inflates most software budgets. Ship an MVP with the smallest feature set that tests your core hypothesis, then expand based on real usage rather than upfront guesses. And favor a dedicated offshore team over a fixed-price contract for anything beyond three months: fixed-price agreements on long timelines usually carry a 15–30% risk premium the vendor prices in to cover scope uncertainty.
        </p>

        <h2>Frequently asked questions</h2>
        {faq.map(item => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </>
  )
}

const articles: Record<string, () => JSX.Element> = {
  "custom-software-development-cost-guide": CostGuideArticle,
  "freelancer-vs-agency-vs-offshore-team": FreelancerArticle,
  "why-enterprise-software-projects-fail": EnterpriseFailureArticle,
  "architecture-decisions-that-compound": ArchitectureArticle,
  "the-real-cost-of-technical-debt": TechnicalDebtArticle,
  "predictability-over-speed": PredictabilityArticle,
  "iso-27001-in-practice": Iso27001Article,
  "building-long-term-client-partnerships": PartnershipsArticle,
}

export function ArticleBody({ slug }: { slug: string }) {
  const Article = articles[slug] ?? EnterpriseFailureArticle
  return <Article />
}
