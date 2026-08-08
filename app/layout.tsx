import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ayushi Unisex Salon | Luxury Hair, Beauty & Grooming in Saket',
  description: 'Ayushi Unisex Salon offers luxury hair, beauty and grooming experiences in Saket, New Delhi. Book your appointment with our expert stylists today.',
  keywords: ['Ayushi Unisex Salon', 'salon in Saket', 'hair salon New Delhi', 'beauty salon Saket', 'hair styling'],
  openGraph: { title: 'Ayushi Unisex Salon', description: 'Luxury Hair, Beauty & Grooming Experience in Saket, New Delhi.', type: 'website' },
}

export const viewport: Viewport = { colorScheme: 'dark', themeColor: '#171311' }

const salonSchema = {
  '@context': 'https://schema.org', '@type': 'BeautySalon', name: 'Ayushi Unisex Salon', description: 'Luxury Hair, Beauty & Grooming Experience', telephone: '+91 92125 36990', priceRange: '₹₹',
  address: { '@type': 'PostalAddress', streetAddress: 'Westend Marg, Opposite Rose Cafe, Saiyad Ul Ajaib Extension, Saket', addressLocality: 'New Delhi', postalCode: '110030', addressCountry: 'IN' },
  openingHours: 'Mo-Su 10:00-20:00', aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '66' },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(salonSchema) }} />{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
