'use client'

import { MapPin } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'

export function AreasSection() {
  const { t } = useLocale()

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.areas.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.areas.subtitle}
          </p>
        </div>

        {/* Cities Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {t.areas.cities.map((city, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-background px-6 py-3 rounded-full border border-border hover:border-accent/50 transition-colors"
            >
              <MapPin className="h-5 w-5 text-accent" />
              <span className="font-medium text-foreground">{city}</span>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-border h-80 bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214745.40234455513!2d34.8513046!3d32.7940463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba4bf1731e4d%3A0xc758c5c1999c6878!2sHaifa!5e0!3m2!1sen!2sil!4v1679900000000!5m2!1sen!2sil"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Area Map"
          />
        </div>
      </div>
    </section>
  )
}
