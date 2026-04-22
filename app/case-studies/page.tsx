import { CaseStudiesContent } from "@/components/case-studies/case-studies-content"

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecode4u.com' },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.wecode4u.com/case-studies' },
  ],
}

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CaseStudiesContent />
    </>
  )
}
