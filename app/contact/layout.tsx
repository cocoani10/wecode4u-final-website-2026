import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Start Your Software Project',
  description: 'Ready to hire a dedicated software development team? Contact WeCode4U to book a free discovery call. Offshore engineering partner serving US, UK and global clients.',
  openGraph: {
    title: 'Contact Us — Start Your Software Project | WeCode4U',
    description: 'Ready to hire a dedicated software development team? Contact WeCode4U to book a free discovery call. Offshore engineering partner serving US, UK and global clients.',
    url: 'https://www.wecode4u.com/contact',
    images: [{ url: 'https://www.wecode4u.com/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
