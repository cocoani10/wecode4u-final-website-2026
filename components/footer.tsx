"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Mail, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  navigation: {
    title: "Navigation",
    links: [
      { label: "Services", href: "/services" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Why Us", href: "/why-us" },
      { label: "Contact", href: "/contact" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
    ],
  },
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer className="bg-[#fafaf9] border-t border-[#e7e5e4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Section */}
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center mb-6">
                <img
                  src="/logos/wecode4u.png"
                  alt="WeCode4U — Custom Software Development Company"
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <p className="text-[#78716c] leading-relaxed mb-6 max-w-sm">
                Building enterprise-grade software solutions for ambitious companies worldwide.
                For 30+ years.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-[#78716c]">
                  <MapPin className="w-4 h-4 text-[#fb6e3e]" />
                  <span>Jaipur, India</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#78716c]">
                  <Mail className="w-4 h-4 text-[#fb6e3e]" />
                  <a href="mailto:info@wecode4u.com" className="hover:text-[#1a1916] transition-colors">
                    info@wecode4u.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#78716c]">
                  <Phone className="w-4 h-4 text-[#fb6e3e]" />
                  <a href="tel:+919828012274" className="hover:text-[#1a1916] transition-colors">
                    +91 9828012274
                  </a>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h4 className="font-semibold text-[#1a1916] mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#78716c] hover:text-[#fb6e3e] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-[#e7e5e4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#78716c]">
              &copy; {new Date().getFullYear()} WeCode4U. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com/company/wecode4u/?originalSubdomain=in", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white border border-[#e7e5e4] flex items-center justify-center text-[#78716c] hover:text-[#fb6e3e] hover:border-[#fb6e3e]/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
