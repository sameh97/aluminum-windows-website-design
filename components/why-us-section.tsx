'use client'

import { Clock, Package, Award, Sparkles, Wallet } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'

export function WhyUsSection() {
  const { t, locale } = useLocale()

  const reasons = [
    {
      icon: Clock,
      title: t.whyUs.items.fast.title,
      description: t.whyUs.items.fast.description,
    },
    {
      icon: Package,
      title: t.whyUs.items.materials.title,
      description: t.whyUs.items.materials.description,
    },
    {
      icon: Award,
      title: t.whyUs.items.experience.title,
      description: t.whyUs.items.experience.description,
    },
    {
      icon: Sparkles,
      title: t.whyUs.items.clean.title,
      description: t.whyUs.items.clean.description,
    },
    {
      icon: Wallet,
      title: t.whyUs.items.honest.title,
      description: t.whyUs.items.honest.description,
    },
  ]

  const stats = [
    { 
      value: '15+', 
      label: locale === 'he' ? 'שנות ניסיון' : locale === 'ar' ? 'سنوات خبرة' : 'Years Experience'
    },
    { 
      value: '5000+', 
      label: locale === 'he' ? 'לקוחות מרוצים' : locale === 'ar' ? 'عملاء راضون' : 'Happy Customers'
    },
    { 
      value: '24/7', 
      label: locale === 'he' ? 'שירות חירום' : locale === 'ar' ? 'خدمة الطوارئ' : 'Emergency Service'
    },
    { 
      value: '100%', 
      label: locale === 'he' ? 'אחריות מלאה' : locale === 'ar' ? 'ضمان كامل' : 'Full Warranty'
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.whyUs.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.whyUs.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto bg-background rounded-2xl flex items-center justify-center mb-4 border border-border group-hover:border-accent/50 transition-colors">
                <reason.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
