import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Software Development Services',
  description: 'Explore WeCode4U\'s full-stack software development services: custom web apps, enterprise mobility, cloud infrastructure, QA engineering, product development, and UI/UX design.',
  openGraph: {
    title: 'Custom Software Development Services | WeCode4U',
    description: 'Explore WeCode4U\'s full-stack software development services: custom web apps, enterprise mobility, cloud infrastructure, QA engineering, product development, and UI/UX design.',
    url: 'https://www.wecode4u.com/services',
    images: [{ url: 'https://www.wecode4u.com/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
