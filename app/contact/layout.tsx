import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact WeCode4U — Start Your Software Project',
  description: 'Ready to hire a dedicated software development team? Contact WeCode4U to book a free discovery call. Offshore engineering partner serving US, UK and global clients.',
  openGraph: {
    title: 'Contact WeCode4U — Start Your Software Project',
    description: 'Ready to hire a dedicated software development team? Contact WeCode4U to book a free discovery call. Offshore engineering partner serving US, UK and global clients.',
    url: 'https://www.wecode4u.com/contact',
  },
  alternates: {
    canonical: 'https://www.wecode4u.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
