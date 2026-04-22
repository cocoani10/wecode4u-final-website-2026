import { AboutPageContent } from "@/components/about/about-page-content"

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecode4u.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.wecode4u.com/about' },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutPageContent />
    </>
  )
}
