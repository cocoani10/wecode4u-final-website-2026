"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Linkedin, Mail } from "lucide-react"
import { ContactForm } from "./contact-form"

export function ContactPageContent() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: "-100px" })

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div ref={heroRef} initial={{ opacity: 0, y: 30 }} animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="text-sm font-semibold text-[#fb6e3e] tracking-wide uppercase mb-4 block">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1916] tracking-[-0.04em] mb-6 text-balance">
              Let&apos;s Build Something Great
            </h1>
            <p className="text-xl text-[#78716c] leading-relaxed">
              Ready to start your project? Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 lg:py-28 bg-[#fafaf9]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div ref={formRef} initial={{ opacity: 0, x: -30 }} animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }} className="lg:col-span-3">
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-2">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl border border-[#e7e5e4] p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#fb6e3e]/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#fb6e3e]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1916] mb-2">Our Headquarters</h3>
                  <p className="text-[#78716c] leading-relaxed">
                    Shyam Nagar, Jaipur<br />Rajasthan, India
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-[#e7e5e4] p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#fb6e3e]/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-[#fb6e3e]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1916] mb-2">Email Us</h3>
                  <a href="mailto:support@wecode4u.com" className="text-[#fb6e3e] hover:underline">
                    support@wecode4u.com
                  </a>
                </div>

                <div className="bg-white rounded-2xl border border-[#e7e5e4] p-8">
                  <div className="w-12 h-12 rounded-xl bg-[#fb6e3e]/10 flex items-center justify-center mb-4">
                    <Linkedin className="w-6 h-6 text-[#fb6e3e]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1916] mb-2">Connect on LinkedIn</h3>
                  <a href="https://linkedin.com/company/wecode4u" target="_blank" rel="noopener noreferrer" className="text-[#fb6e3e] hover:underline">
                    linkedin.com/company/wecode4u
                  </a>
                </div>

                <div className="bg-[#fb6e3e]/5 rounded-2xl border border-[#fb6e3e]/20 p-6 text-center">
                  <p className="text-sm text-[#fb6e3e] font-medium">
                    Average response time: <span className="font-bold">24 hours</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1a1916] tracking-[-0.04em]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {[
              { q: "How quickly can you start on my project?", a: "We typically begin new projects within 1-2 weeks of signing, depending on our current capacity and your project's requirements." },
              { q: "Do you work with clients outside of India?", a: "Absolutely! We serve clients globally, with significant experience working with teams in North America, Europe, and Asia-Pacific regions." },
              { q: "What's your typical project timeline?", a: "Timelines vary based on project scope. MVPs typically take 8-12 weeks, while larger enterprise projects may span 4-6 months or more." },
              { q: "Do you offer ongoing support after launch?", a: "Yes, we offer flexible support and maintenance packages to ensure your application continues to perform optimally after launch." },
            ].map((faq, index) => (
              <div key={index} className="bg-[#fafaf9] rounded-2xl border border-[#e7e5e4] p-6">
                <h3 className="font-bold text-[#1a1916] mb-2">{faq.q}</h3>
                <p className="text-[#78716c]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
