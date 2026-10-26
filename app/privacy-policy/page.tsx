const LAST_UPDATED = "October 26, 2026"

const sections = [
  {
    title: "Information We Collect",
    body: [
      "When you submit our contact form, we collect your name, email address, company name (optional), budget range (optional), and the project details you choose to share.",
      "When you visit the site, we automatically collect limited technical and usage data, such as your browser type, device, pages viewed, and approximate location, through analytics tools described below.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use the information you submit to respond to your enquiry, discuss potential projects, and provide proposals or services you request.",
      "We use analytics data to understand how the site is used and to improve its content, performance, and reliability.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "Analytics and Cookies",
    body: [
      "We use Google Analytics 4 and Vercel Analytics to measure site traffic and usage. Google Analytics may set cookies or similar identifiers in your browser. You can block or delete cookies in your browser settings, or opt out of Google Analytics using Google's browser add-on.",
    ],
  },
  {
    title: "Service Providers",
    body: [
      "We share information only with service providers that help us operate the site and handle enquiries: Vercel (hosting and analytics), Google (analytics), and Resend (email delivery of contact form submissions). These providers process data on our behalf and only as needed to provide their services.",
      "We may also disclose information if required by law or to protect our rights, users, or systems.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We keep enquiry details for as long as needed to respond to you and manage any resulting business relationship, and for a reasonable period afterwards for record-keeping. You can ask us to delete your information at any time.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable technical and organisational measures to protect personal information. WeCode4U maintains ISO 27001 (Information Security Management) and ISO 27701 (Privacy Information Management) certifications. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on where you live, you may have the right to access, correct, delete, or restrict the use of your personal information, and to object to or withdraw consent for its processing. To exercise any of these rights, contact us using the details below.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Our website and services are intended for businesses and are not directed at children. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "International Transfers",
    body: [
      "WeCode4U is based in India, and our service providers may process data in other countries. By using the site and submitting information, you understand that your information may be transferred to and processed in countries other than your own.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this policy from time to time. The date at the top of this page shows when it was last revised.",
    ],
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">
            Legal
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1a1916] tracking-[-0.04em] mb-5">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#6b6a67]">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-[#6b6a67] leading-relaxed mb-12">
            WeCode4U (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy explains what
            information we collect through wecode4u.com, how we use it, and the choices you have.
          </p>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-bold text-[#1a1916] tracking-[-0.03em] mb-4">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-[#6b6a67] leading-relaxed text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h2 className="text-2xl font-bold text-[#1a1916] tracking-[-0.03em] mb-4">
                Contact Us
              </h2>
              <p className="text-[#6b6a67] leading-relaxed text-base">
                For questions about this policy or to exercise your rights, email{" "}
                <a
                  href="mailto:info@wecode4u.com"
                  className="text-[#fb6e3e] hover:underline"
                >
                  info@wecode4u.com
                </a>{" "}
                or write to WeCode4U, Jaipur, India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
