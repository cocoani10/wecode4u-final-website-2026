import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Enterprise Software Since 1994',
  description: 'Meet the team behind WeCode4U — an ISO-certified software engineering company founded in 1994. Delivering enterprise software to clients across 15+ countries from Jaipur, India.',
  openGraph: {
    title: 'About Us — Enterprise Software Since 1994 | WeCode4U',
    description: 'Meet the team behind WeCode4U — an ISO-certified software engineering company founded in 1994. Delivering enterprise software to clients across 15+ countries from Jaipur, India.',
    url: 'https://www.wecode4u.com/about',
    images: [{ url: 'https://www.wecode4u.com/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
