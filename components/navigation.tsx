"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Why Us", href: "/why-us" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#e7e5e4]">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/logos/wecode4u.png" 
              alt="WeCode4U — Custom Software Development Company"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-[#fb6e3e]" : "text-[#78716c] hover:text-[#1a1916]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="/case-studies">
              <Button
                variant="ghost"
                className="text-sm font-medium text-[#1a1916] border border-transparent hover:text-[#fb6e3e] hover:bg-[#fff7f4] hover:border-[#fb6e3e]/20 transition-all"
              >
                View Our Work
              </Button>
            </a>
            <a href="/contact">
              <Button
                className="bg-[#fb6e3e] hover:bg-[#e85a2a] text-white text-sm font-medium px-5 shadow-lg shadow-[#fb6e3e]/20 hover:shadow-xl hover:shadow-[#fb6e3e]/30 transition-all"
              >
                Book Discovery Call
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#fafaf9] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#1a1916]" />
            ) : (
              <Menu className="w-5 h-5 text-[#1a1916]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#e7e5e4]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium py-2 transition-colors ${
                      isActive ? "text-[#fb6e3e]" : "text-[#78716c] hover:text-[#1a1916]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="flex flex-col gap-2 pt-4 border-t border-[#e7e5e4]">
                <a href="/case-studies" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full text-sm font-medium border border-transparent hover:text-[#fb6e3e] hover:bg-[#fff7f4] hover:border-[#fb6e3e]/20 transition-all"
                  >
                    View Our Work
                  </Button>
                </a>
                <a href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-[#fb6e3e] hover:bg-[#e85a2a] text-white text-sm font-medium"
                  >
                    Book Discovery Call
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
