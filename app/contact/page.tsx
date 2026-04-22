import { ContactPageContent } from "@/components/contact/contact-page-content"

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecode4u.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.wecode4u.com/contact' },
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.wecode4u.com/#localbusiness',
  name: 'WeCode4U',
  url: 'https://www.wecode4u.com',
  email: 'support@wecode4u.com',
  description: 'Custom software development company with 30+ years of experience delivering enterprise software, mobile apps, and cloud solutions.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shyam Nagar',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '26.9124', longitude: '75.7873' },
  areaServed: [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Australia' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'India' },
  ],
  priceRange: '$$$',
  sameAs: ['https://linkedin.com/company/wecode4u'],
  parentOrganization: { '@id': 'https://www.wecode4u.com/#organization' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How quickly can you start on my project?', acceptedAnswer: { '@type': 'Answer', text: "We typically begin new projects within 1-2 weeks of signing, depending on our current capacity and your project's requirements." } },
    { '@type': 'Question', name: 'Do you work with clients outside of India?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely! We serve clients globally, with significant experience working with teams in North America, Europe, and Asia-Pacific regions.' } },
    { '@type': 'Question', name: "What's your typical project timeline?", acceptedAnswer: { '@type': 'Answer', text: 'Timelines vary based on project scope. MVPs typically take 8-12 weeks, while larger enterprise projects may span 4-6 months or more.' } },
    { '@type': 'Question', name: 'Do you offer ongoing support after launch?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer flexible support and maintenance packages to ensure your application continues to perform optimally after launch.' } },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ContactPageContent />
    </>
  )
}
