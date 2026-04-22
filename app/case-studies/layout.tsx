import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Development Case Studies | WeCode4U',
  description: 'Explore WeCode4U\'s portfolio of enterprise software projects — from SaaS platforms to legacy modernization. Real results for real clients across industries.',
  openGraph: {
    title: 'Software Development Case Studies | WeCode4U',
    description: 'Explore WeCode4U\'s portfolio of enterprise software projects — from SaaS platforms to legacy modernization. Real results for real clients across industries.',
    url: 'https://www.wecode4u.com/case-studies',
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/case-studies',
  },
}

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return children
}
