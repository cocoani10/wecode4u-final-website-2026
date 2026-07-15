import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Software Engineering Blog for CTOs & Founders',
  description: 'Practical guides on offshore development, product engineering, legacy modernization, and scaling tech teams. Written by senior engineers at WeCode4U.',
  openGraph: {
    title: 'Software Engineering Blog for CTOs & Founders | WeCode4U',
    description: 'Practical guides on offshore development, product engineering, legacy modernization, and scaling tech teams. Written by senior engineers at WeCode4U.',
    url: 'https://www.wecode4u.com/blog',
    images: [{ url: 'https://www.wecode4u.com/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
