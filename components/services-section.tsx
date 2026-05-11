'use client'

import { Cog, Grid3X3, Bug, PlusCircle, AlertTriangle, Square } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLocale } from '@/lib/locale-context'

export function ServicesSection() {
  const { t } = useLocale()

  const services = [
    {
      icon: Cog,
      title: t.services.items.electric.title,
      description: t.services.items.electric.description,
    },
    {
      icon: Grid3X3,
      title: t.services.items.windows.title,
      description: t.services.items.windows.description,
    },
    {
      icon: Bug,
      title: t.services.items.mosquito.title,
      description: t.services.items.mosquito.description,
    },
    {
      icon: PlusCircle,
      title: t.services.items.installation.title,
      description: t.services.items.installation.description,
    },
    {
      icon: AlertTriangle,
      title: t.services.items.emergency.title,
      description: t.services.items.emergency.description,
    },
    {
      icon: Square,
      title: t.services.items.balcony.title,
      description: t.services.items.balcony.description,
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-background border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
