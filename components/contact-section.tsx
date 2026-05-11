'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useLocale } from '@/lib/locale-context'

export function ContactSection() {
  const { t } = useLocale()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create WhatsApp message with form data
    const message = `שם: ${formData.name}%0Aטלפון: ${formData.phone}%0Aהודעה: ${formData.message}`
    window.open(`https://wa.me/972501234567?text=${message}`, '_blank')
  }

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: '050-123-4567',
      href: 'tel:+972501234567',
    },
    {
      icon: MessageCircle,
      label: t.contact.info.whatsapp,
      value: '050-123-4567',
      href: 'https://wa.me/972501234567',
    },
    {
      icon: Clock,
      label: t.contact.info.hours,
      value: t.contact.info.hoursValue,
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground resize-none"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="h-5 w-5" />
                  {t.contact.form.submit}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('https') ? '_blank' : undefined}
                      rel={info.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center border border-border group-hover:border-accent/50 transition-colors">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-background rounded-xl flex items-center justify-center border border-border">
                        <info.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="text-lg font-semibold text-foreground">{info.value}</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
