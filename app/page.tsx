'use client'

import { LocaleProvider } from '@/lib/locale-context'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { GallerySection } from '@/components/gallery-section'
import { WhyUsSection } from '@/components/why-us-section'
import { ReviewsSection } from '@/components/reviews-section'
import { WhatsAppCtaSection } from '@/components/whatsapp-cta-section'
import { AreasSection } from '@/components/areas-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { StickyCta } from '@/components/sticky-cta'

export default function Home() {
  return (
    <LocaleProvider>
      <div className="min-h-screen bg-background pb-20 md:pb-0">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesSection />
          <GallerySection />
          <WhyUsSection />
          <ReviewsSection />
          <WhatsAppCtaSection />
          <AreasSection />
          <ContactSection />
        </main>
        <Footer />
        <StickyCta />
      </div>
    </LocaleProvider>
  )
}
