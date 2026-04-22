import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About WeCode4U — 30 Years of Enterprise Software Engineering',
  description: 'Meet the team behind WeCode4U — an ISO-certified software engineering company founded in 1994. Delivering enterprise software to clients across 15+ countries from Jaipur, India.',
  openGraph: {
    title: 'About WeCode4U — 30 Years of Enterprise Software Engineering',
    description: 'Meet the team behind WeCode4U — an ISO-certified software engineering company founded in 1994. Delivering enterprise software to clients across 15+ countries from Jaipur, India.',
    url: 'https://www.wecode4u.com/about',
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
