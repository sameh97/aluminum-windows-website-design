'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function StickyCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-lg border-t border-border md:hidden">
      <div className="flex gap-3">
        <Button asChild className="flex-1 gap-2">
          <a href="tel:+972501234567">
            <Phone className="h-5 w-5" />
            <span>התקשרו</span>
          </a>
        </Button>
        <Button asChild variant="secondary" className="flex-1 gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-0">
          <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-5 w-5" />
            <span>וואטסאפ</span>
          </a>
        </Button>
      </div>
    </div>
  )
}
