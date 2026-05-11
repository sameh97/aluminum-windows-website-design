'use client'

import { MessageCircle, Camera } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/locale-context'

export function WhatsAppCtaSection() {
  const { t } = useLocale()

  return (
    <section className="py-20 md:py-32 bg-[#25D366] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Camera className="h-10 w-10 text-white" />
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            {t.whatsappCta.title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/90 mb-10 max-w-xl mx-auto text-pretty">
            {t.whatsappCta.subtitle}
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-white text-[#25D366] hover:bg-white/90 text-lg px-10 py-6 gap-3 shadow-2xl"
          >
            <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-6 w-6" />
              {t.whatsappCta.button}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
