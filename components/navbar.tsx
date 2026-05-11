'use client'

import { useState } from 'react'
import { Menu, X, Phone, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLocale } from '@/lib/locale-context'
import { locales, localeNames, type Locale } from '@/lib/i18n'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { locale, setLocale, t, direction } = useLocale()

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#about', label: t.nav.about },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">א</span>
            </div>
            <span className="font-bold text-lg md:text-xl text-foreground">
              {locale === 'he' ? 'אלומיניום פרו' : locale === 'ar' ? 'ألمنيوم برو' : 'Aluminum Pro'}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">{localeNames[locale]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align={direction === 'rtl' ? 'start' : 'end'}>
                {locales.map((loc) => (
                  <DropdownMenuItem
                    key={loc}
                    onClick={() => setLocale(loc)}
                    className={locale === loc ? 'bg-muted' : ''}
                  >
                    {localeNames[loc]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <a href="tel:+972501234567" className="gap-2">
                <Phone className="h-4 w-4" />
                {t.hero.cta.call}
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2">
                <a href="tel:+972501234567" className="gap-2">
                  <Phone className="h-4 w-4" />
                  {t.hero.cta.call}
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
