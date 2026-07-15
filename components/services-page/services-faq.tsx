export const servicesFaq = [
  {
    question: "How much does custom software development cost?",
    answer:
      "Most custom software projects at WeCode4U range from $15,000 for a focused MVP to $150,000+ for complex enterprise platforms. The main cost drivers are scope, integrations, and team size. A dedicated offshore team typically costs 40–60% less than equivalent US-based development without compromising on senior engineering talent.",
  },
  {
    question: "How long does it take to build custom software?",
    answer:
      "A well-scoped MVP typically ships in 8–14 weeks. Mid-size business applications take 3–6 months, and large enterprise platforms 6–12 months or more. We work in 1–2 week sprints with demos at every cycle, so you see working software within the first month, not at the end.",
  },
  {
    question: "How does working with an offshore development team work?",
    answer:
      "You get a dedicated team of senior engineers who work as an extension of your company — shared tools, daily communication, and overlapping hours with US and UK time zones. WeCode4U has delivered offshore projects from Jaipur, India since 1994, with process maturity certified under ISO 27001 and ISO 27701.",
  },
  {
    question: "What technologies does WeCode4U work with?",
    answer:
      "Our core stacks include React, Next.js, and TypeScript on the frontend; Node.js, .NET, Python, and Java on the backend; React Native and Flutter for mobile; and AWS, Azure, and Google Cloud for infrastructure. We also build data pipelines, AI-assisted features, and integrations with enterprise systems.",
  },
  {
    question: "How is client data and IP protected?",
    answer:
      "Every engagement includes NDA and full IP transfer — you own all code we write. Operationally we are ISO 27001 (information security) and ISO 27701 (privacy) certified, which means access controls, encrypted devices, and audited incident-response procedures are independently verified every year.",
  },
  {
    question: "What engagement models do you offer?",
    answer:
      "Three models: a dedicated development team on a monthly basis (most popular for ongoing product work), fixed-scope project delivery for well-defined builds, and staff augmentation to extend your existing engineering team with specific skills. Most clients start with a 2-week paid discovery to de-risk the engagement.",
  },
]

export function ServicesFAQ() {
  return (
    <section className="py-24 lg:py-32 bg-[#fafaf9] border-t border-[#e7e5e4]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-5 block">
          FAQ
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1916] tracking-[-0.04em] mb-12 text-balance">
          Common questions about working with us
        </h2>

        <div className="space-y-10">
          {servicesFaq.map(item => (
            <div key={item.question}>
              <h3 className="text-lg font-semibold text-[#1a1916] tracking-[-0.02em] mb-3">
                {item.question}
              </h3>
              <p className="text-base text-[#57534e] leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
