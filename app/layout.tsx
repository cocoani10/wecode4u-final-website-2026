import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wecode4u.com'),
  title: {
    template: '%s | WeCode4U — Custom Software Development Company',
    default: 'WeCode4U — Custom Software Development Company',
  },
  description: 'WeCode4U is a trusted custom software development company with 30+ years of experience. We build enterprise web apps, mobile solutions, and cloud infrastructure for ambitious companies in the US and globally.',
  keywords: [
    'custom software development',
    'offshore software development',
    'software development company',
    'enterprise software development',
    'software development India',
    'dedicated development team',
    'web application development',
    'mobile app development',
    'cloud infrastructure',
    'UI UX design',
    'quality engineering',
    'product development',
    'legacy system modernization',
    'software development partner',
    'ISO 27001 certified',
    'software company Jaipur',
    'offshore engineering',
    'nearshore development',
    'full stack development',
    'SaaS development',
  ],
  authors: [{ name: 'WeCode4U', url: 'https://www.wecode4u.com' }],
  creator: 'WeCode4U',
  publisher: 'WeCode4U',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.wecode4u.com',
    siteName: 'WeCode4U',
    title: 'WeCode4U — Custom Software Development Company',
    description: 'WeCode4U is a trusted custom software development company with 30+ years of experience. We build enterprise web apps, mobile solutions, and cloud infrastructure for ambitious companies in the US and globally.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WeCode4U — Custom Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeCode4U — Custom Software Development Company',
    description: 'WeCode4U is a trusted custom software development company with 30+ years of experience. Enterprise software, mobile apps, and cloud solutions.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.wecode4u.com',
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://www.wecode4u.com/#organization',
      name: 'WeCode4U',
      url: 'https://www.wecode4u.com',
      logo: 'https://www.wecode4u.com/logo.png',
      foundingDate: '1994',
      description: 'WeCode4U is a custom software development company with 30+ years of experience delivering enterprise software, mobile apps, and cloud solutions for clients in the US and globally.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shyam Nagar',
        addressLocality: 'Jaipur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN',
      },
      areaServed: ['US', 'GB', 'AU', 'CA', 'IN'],
      email: 'support@wecode4u.com',
      sameAs: ['https://linkedin.com/company/wecode4u'],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'ISO 27001 — Information Security Management',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'ISO 27701 — Privacy Information Management',
        },
      ],
      knowsAbout: [
        'Custom Software Development',
        'Web Application Development',
        'Mobile App Development',
        'Cloud Infrastructure',
        'UI/UX Design',
        'Quality Assurance',
        'Legacy System Modernization',
        'Offshore Development',
        'Enterprise Software',
        'Product Development',
      ],
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 25,
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.wecode4u.com/#website',
      url: 'https://www.wecode4u.com',
      name: 'WeCode4U',
      publisher: { '@id': 'https://www.wecode4u.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://www.wecode4u.com/blog?q={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navigation />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
