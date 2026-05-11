'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { type Locale, defaultLocale, localeDirection, getTranslations } from './i18n'

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  direction: 'rtl' | 'ltr'
  t: ReturnType<typeof getTranslations>
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLocale = localStorage.getItem('locale') as Locale | null
    if (savedLocale && ['he', 'en', 'ar'].includes(savedLocale)) {
      setLocaleState(savedLocale)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('locale', locale)
      document.documentElement.lang = locale
      document.documentElement.dir = localeDirection[locale]
    }
  }, [locale, mounted])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
  }

  const direction = localeDirection[locale]
  const t = getTranslations(locale)

  return (
    <LocaleContext.Provider value={{ locale, setLocale, direction, t }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}
