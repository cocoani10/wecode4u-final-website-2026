import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How WeCode4U collects, uses, and protects personal information submitted through wecode4u.com.',
  openGraph: {
    title: 'Privacy Policy | WeCode4U',
    description: 'How WeCode4U collects, uses, and protects personal information submitted through wecode4u.com.',
    url: 'https://www.wecode4u.com/privacy-policy',
    images: [{ url: 'https://www.wecode4u.com/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/privacy-policy',
  },
}

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children
}
