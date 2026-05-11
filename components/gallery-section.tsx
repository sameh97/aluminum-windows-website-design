'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/locale-context'

const galleryItems = [
  {
    before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
  },
  {
    before: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop',
  },
  {
    before: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop',
  },
]

export function GallerySection() {
  const { t, direction } = useLocale()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length)
    setSliderPosition(50)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length)
    setSliderPosition(50)
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
            {/* Before Image */}
            <div className="absolute inset-0">
              <img
                src={galleryItems[currentIndex].before}
                alt="Before"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                {t.gallery.before}
              </div>
            </div>

            {/* After Image with Clip */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={galleryItems[currentIndex].after}
                alt="After"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-accent-foreground">
                {t.gallery.after}
              </div>
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-accent cursor-ew-resize"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <ChevronLeft className="h-4 w-4 text-accent-foreground -ml-1" />
                <ChevronRight className="h-4 w-4 text-accent-foreground -mr-1" />
              </div>
            </div>

            {/* Slider Input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={direction === 'rtl' ? nextSlide : prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setSliderPosition(50)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-accent w-6' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={direction === 'rtl' ? prevSlide : nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
