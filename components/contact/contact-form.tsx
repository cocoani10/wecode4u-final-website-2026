"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { submitContactForm } from "@/app/actions/contact"

const budgetRanges = [
  "Under $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+",
  "Not sure yet",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectDetails: "",
    budgetRange: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setIsSubmitted(true)
      } else {
        setSubmitError(result.error || "Failed to submit form.")
      }
    } catch {
      setSubmitError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[#e7e5e4] bg-[#fafaf9] text-[#1a1916] placeholder-[#a8a29e] focus:outline-none focus:border-[#fb6e3e] focus:ring-2 focus:ring-[#fb6e3e]/10 transition-all"

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl border border-[#e7e5e4] p-12 text-center">
        <div className="w-20 h-20 rounded-full bg-[#10b981]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#10b981]" />
        </div>
        <h2 className="text-2xl font-bold text-[#1a1916] mb-3">Message Sent!</h2>
        <p className="text-[#78716c] mb-6">
          Thank you for reaching out. We&apos;ll review your project details and get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({ name: "", email: "", company: "", projectDetails: "", budgetRange: "" })
          }}
          className="text-[#fb6e3e] font-semibold hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#e7e5e4] p-8 lg:p-10">
      <h2 className="text-2xl font-bold text-[#1a1916] mb-6">Tell Us About Your Project</h2>

      {submitError && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">{submitError}</div>
      )}

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#1a1916] mb-2">
            Name <span className="text-[#fb6e3e]">*</span>
          </label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
            className={inputClass} placeholder="Your full name" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#1a1916] mb-2">
            Email <span className="text-[#fb6e3e]">*</span>
          </label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
            className={inputClass} placeholder="you@company.com" />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-[#1a1916] mb-2">Company</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
            className={inputClass} placeholder="Your company name" />
        </div>

        <div>
          <label htmlFor="projectDetails" className="block text-sm font-semibold text-[#1a1916] mb-2">
            Project Details <span className="text-[#fb6e3e]">*</span>
          </label>
          <textarea id="projectDetails" name="projectDetails" required rows={5} value={formData.projectDetails}
            onChange={handleChange} className={`${inputClass} resize-none`}
            placeholder="Tell us about your project, goals, and timeline..." />
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-sm font-semibold text-[#1a1916] mb-2">Budget Range</label>
          <select id="budgetRange" name="budgetRange" value={formData.budgetRange} onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}>
            <option value="">Select a budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <button type="submit" disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-[#fb6e3e] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#ea5d2d] disabled:opacity-70 disabled:cursor-not-allowed transition-colors">
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </form>
  )
}
