import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Development Services — Web, Mobile & Cloud | WeCode4U',
  description: 'Explore WeCode4U\'s full-stack software development services: custom web apps, enterprise mobility, cloud infrastructure, QA engineering, product development, and UI/UX design.',
  openGraph: {
    title: 'Software Development Services — Web, Mobile & Cloud | WeCode4U',
    description: 'Explore WeCode4U\'s full-stack software development services: custom web apps, enterprise mobility, cloud infrastructure, QA engineering, product development, and UI/UX design.',
    url: 'https://www.wecode4u.com/services',
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
