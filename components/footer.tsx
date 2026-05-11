'use client'

import { Facebook, Instagram, Phone, MessageCircle } from 'lucide-react'
import { useLocale } from '@/lib/locale-context'

export function Footer() {
  const { t, locale } = useLocale()

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#about', label: t.nav.about },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/972501234567', label: 'WhatsApp' },
  ]

  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">א</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                {locale === 'he' ? 'אלומיניום פרו' : locale === 'ar' ? 'ألمنيوم برو' : 'Aluminum Pro'}
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Phone className="h-5 w-5 text-accent" />
              <a href="tel:+972501234567" className="text-foreground hover:text-accent transition-colors font-medium">
                050-123-4567
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t.footer.followUs}</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent/50 hover:bg-muted transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {locale === 'he' ? 'אלומיניום פרו' : locale === 'ar' ? 'ألمنيوم برو' : 'Aluminum Pro'}. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  )
}
