import { HowWeWorkContent } from "@/components/how-we-work/how-we-work-content"

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.wecode4u.com' },
    { '@type': 'ListItem', position: 2, name: 'How We Work', item: 'https://www.wecode4u.com/how-we-work' },
  ],
}

export default function HowWeWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HowWeWorkContent />
    </>
  )
}
