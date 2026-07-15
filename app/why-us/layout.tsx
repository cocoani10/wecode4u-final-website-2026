import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Choose Us — Dedicated Engineering Teams',
  description: '30+ years of enterprise software delivery. Senior engineers only. ISO 27001 and ISO 27701 certified. 100% client retention. See why leading companies choose WeCode4U as their engineering partner.',
  openGraph: {
    title: 'Why Choose Us — Dedicated Engineering Teams | WeCode4U',
    description: '30+ years of enterprise software delivery. Senior engineers only. ISO 27001 and ISO 27701 certified. 100% client retention. See why leading companies choose WeCode4U as their engineering partner.',
    url: 'https://www.wecode4u.com/why-us',
    images: [{ url: 'https://www.wecode4u.com/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/why-us',
  },
}

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return children
}
