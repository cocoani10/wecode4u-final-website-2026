import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Engineering Blog — Insights for CTOs & Founders | WeCode4U',
  description: 'Practical guides on offshore development, product engineering, legacy modernization, and scaling tech teams. Written by senior engineers at WeCode4U.',
  openGraph: {
    title: 'Software Engineering Blog — Insights for CTOs & Founders | WeCode4U',
    description: 'Practical guides on offshore development, product engineering, legacy modernization, and scaling tech teams. Written by senior engineers at WeCode4U.',
    url: 'https://www.wecode4u.com/blog',
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
