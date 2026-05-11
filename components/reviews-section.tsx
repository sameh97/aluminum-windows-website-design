'use client'

import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLocale } from '@/lib/locale-context'

const reviews = {
  he: [
    {
      name: 'יוסי כהן',
      location: 'חיפה',
      text: 'שירות מעולה! הגיעו תוך שעה ותיקנו את התריס החשמלי במהירות. מאוד מרוצה.',
      rating: 5,
    },
    {
      name: 'רחל לוי',
      location: 'קריית אתא',
      text: 'החלפנו את כל החלונות בבית. עבודה מקצועית, מחיר הוגן ושירות אדיב.',
      rating: 5,
    },
    {
      name: 'אחמד חסן',
      location: 'שפרעם',
      text: 'התקינו לנו רשתות בכל הבית. עבודה נקייה ומסודרת. ממליץ בחום!',
      rating: 5,
    },
  ],
  en: [
    {
      name: 'Yossi Cohen',
      location: 'Haifa',
      text: 'Excellent service! They arrived within an hour and fixed the electric shutter quickly. Very satisfied.',
      rating: 5,
    },
    {
      name: 'Rachel Levy',
      location: 'Kiryat Ata',
      text: 'We replaced all the windows in our home. Professional work, fair price, and friendly service.',
      rating: 5,
    },
    {
      name: 'Ahmed Hassan',
      location: 'Shfaram',
      text: 'They installed screens throughout our house. Clean and organized work. Highly recommend!',
      rating: 5,
    },
  ],
  ar: [
    {
      name: 'يوسي كوهين',
      location: 'حيفا',
      text: 'خدمة ممتازة! وصلوا خلال ساعة وأصلحوا المصراع الكهربائي بسرعة. راضٍ جداً.',
      rating: 5,
    },
    {
      name: 'راحيل ليفي',
      location: 'كريات آتا',
      text: 'استبدلنا جميع النوافذ في المنزل. عمل احترافي، سعر عادل، وخدمة ودودة.',
      rating: 5,
    },
    {
      name: 'أحمد حسن',
      location: 'شفاعمرو',
      text: 'قاموا بتركيب شبكات في جميع أنحاء المنزل. عمل نظيف ومنظم. أوصي بشدة!',
      rating: 5,
    },
  ],
}

export function ReviewsSection() {
  const { t, locale } = useLocale()
  const currentReviews = reviews[locale]

  return (
    <section id="reviews" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.reviews.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.reviews.subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentReviews.map((review, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6 md:p-8">
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-accent/20 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground leading-relaxed mb-6">
                  {review.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-accent">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
