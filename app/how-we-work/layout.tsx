import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Agile Software Delivery Process | WeCode4U',
  description: 'Discover how WeCode4U delivers custom software projects — from discovery and architecture through agile build sprints to confident launch. Proven delivery for enterprise clients.',
  openGraph: {
    title: 'Our Agile Software Delivery Process | WeCode4U',
    description: 'Discover how WeCode4U delivers custom software projects — from discovery and architecture through agile build sprints to confident launch. Proven delivery for enterprise clients.',
    url: 'https://www.wecode4u.com/how-we-work',
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/how-we-work',
  },
}

export default function HowWeWorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
