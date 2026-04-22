import type { Metadata } from 'next'
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { LogoMarquee } from "@/components/logo-marquee"
import { Testimonial } from "@/components/testimonial"
import { CTA } from "@/components/cta"

export const metadata: Metadata = {
  title: 'Custom Software Development Company | WeCode4U',
  description: 'WeCode4U is a trusted custom software development company with 30+ years of experience. We build enterprise web apps, mobile solutions, and cloud infrastructure for ambitious companies in the US and globally.',
  openGraph: {
    title: 'Custom Software Development Company | WeCode4U',
    description: 'WeCode4U is a trusted custom software development company with 30+ years of experience. We build enterprise web apps, mobile solutions, and cloud infrastructure for ambitious companies in the US and globally.',
    url: 'https://www.wecode4u.com',
  },
  alternates: {
    canonical: 'https://www.wecode4u.com',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Stats />
      <LogoMarquee />
      <Testimonial />
      <CTA />
    </main>
  )
}
