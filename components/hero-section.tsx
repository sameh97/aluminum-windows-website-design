'use client'

import { Phone, MessageCircle, Zap, Shield, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/locale-context'

export function HeroSection() {
  const { t } = useLocale()

  const badges = [
    { icon: Zap, label: t.hero.badges.fast },
    { icon: Shield, label: t.hero.badges.fair },
    { icon: Award, label: t.hero.badges.professional },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Metallic Lines Decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent rotate-12" />
        <div className="absolute top-1/3 -right-20 w-96 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent -rotate-12" />
        <div className="absolute bottom-1/4 -left-10 w-72 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent rotate-6" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-pretty">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-6 gap-3">
              <a href="tel:+972501234567">
                <Phone className="h-5 w-5" />
                {t.hero.cta.call}
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white border-0">
              <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t.hero.cta.whatsapp}
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-full border border-border"
              >
                <badge.icon className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
