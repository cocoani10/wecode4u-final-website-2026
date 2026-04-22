import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Choose WeCode4U — Dedicated Engineering Teams | WeCode4U',
  description: '30+ years of enterprise software delivery. Senior engineers only. ISO 27001 and ISO 27701 certified. 100% client retention. See why leading companies choose WeCode4U as their engineering partner.',
  openGraph: {
    title: 'Why Choose WeCode4U — Dedicated Engineering Teams | WeCode4U',
    description: '30+ years of enterprise software delivery. Senior engineers only. ISO 27001 and ISO 27701 certified. 100% client retention. See why leading companies choose WeCode4U as their engineering partner.',
    url: 'https://www.wecode4u.com/why-us',
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/why-us',
  },
}

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return children
}
