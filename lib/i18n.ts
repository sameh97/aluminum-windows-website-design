export type Locale = 'he' | 'en' | 'ar'

export const locales: Locale[] = ['he', 'en', 'ar']

export const defaultLocale: Locale = 'he'

export const localeNames: Record<Locale, string> = {
  he: 'עברית',
  en: 'English',
  ar: 'العربية'
}

export const localeDirection: Record<Locale, 'rtl' | 'ltr'> = {
  he: 'rtl',
  en: 'ltr',
  ar: 'rtl'
}

export const translations = {
  he: {
    nav: {
      services: 'שירותים',
      gallery: 'גלריה',
      about: 'אודות',
      reviews: 'חוות דעת',
      contact: 'צור קשר'
    },
    hero: {
      title: 'תיקון תריסים וחלונות אלומיניום',
      subtitle: 'מומחים בתיקון והתקנת תריסים חשמליים, חלונות אלומיניום ורשתות נגד יתושים',
      cta: {
        call: 'התקשרו עכשיו',
        whatsapp: 'שלחו וואטסאפ'
      },
      badges: {
        fast: 'שירות מהיר',
        fair: 'מחירים הוגנים',
        professional: 'עבודה מקצועית'
      }
    },
    services: {
      title: 'השירותים שלנו',
      subtitle: 'פתרונות מקצועיים לכל צרכי האלומיניום שלכם',
      items: {
        electric: {
          title: 'תיקון תריסים חשמליים',
          description: 'תיקון מנועים, החלפת רצועות ותיקון תקלות חשמליות'
        },
        windows: {
          title: 'חלונות אלומיניום',
          description: 'התקנה והחלפת חלונות אלומיניום באיכות גבוהה'
        },
        mosquito: {
          title: 'רשתות נגד יתושים',
          description: 'התקנת רשתות איכותיות לחלונות ודלתות'
        },
        installation: {
          title: 'התקנות חדשות',
          description: 'התקנת תריסים וחלונות חדשים מהמותגים המובילים'
        },
        emergency: {
          title: 'שירות חירום',
          description: 'זמינים 24/7 לתקלות דחופות'
        },
        balcony: {
          title: 'סגירת מרפסות',
          description: 'סגירת מרפסות באלומיניום וזכוכית'
        }
      }
    },
    gallery: {
      title: 'לפני ואחרי',
      subtitle: 'צפו בתוצאות העבודה שלנו',
      before: 'לפני',
      after: 'אחרי'
    },
    whyUs: {
      title: 'למה לבחור בנו?',
      subtitle: 'אנחנו מחויבים למצוינות בכל פרויקט',
      items: {
        fast: {
          title: 'הגעה מהירה',
          description: 'מגיעים תוך שעות ספורות'
        },
        materials: {
          title: 'חומרים מקצועיים',
          description: 'עובדים רק עם חומרים איכותיים'
        },
        experience: {
          title: 'שנות ניסיון',
          description: 'מעל 15 שנות ניסיון בתחום'
        },
        clean: {
          title: 'עבודה נקייה',
          description: 'משאירים את המקום נקי ומסודר'
        },
        honest: {
          title: 'תמחור הוגן',
          description: 'מחירים שקופים ללא הפתעות'
        }
      }
    },
    reviews: {
      title: 'מה הלקוחות אומרים',
      subtitle: 'אלפי לקוחות מרוצים ברחבי הצפון'
    },
    whatsappCta: {
      title: 'רוצים הצעת מחיר מהירה?',
      subtitle: 'שלחו תמונה של התקלה בוואטסאפ וקבלו הצעת מחיר תוך דקות',
      button: 'שלחו תמונה בוואטסאפ'
    },
    areas: {
      title: 'אזורי שירות',
      subtitle: 'מעניקים שירות בכל רחבי הצפון',
      cities: ['חיפה', 'קריית אתא', 'שפרעם', 'נצרת', 'עכו', 'קריות', 'נהריה', 'כרמיאל']
    },
    contact: {
      title: 'צור קשר',
      subtitle: 'נשמח לעמוד לשירותכם',
      form: {
        name: 'שם מלא',
        phone: 'טלפון',
        message: 'תיאור הבעיה',
        submit: 'שלח פנייה'
      },
      info: {
        phone: 'טלפון',
        whatsapp: 'וואטסאפ',
        hours: 'שעות פעילות',
        hoursValue: 'א׳-ה׳ 7:00-19:00, ו׳ 7:00-14:00'
      }
    },
    footer: {
      description: 'מומחים בתיקון והתקנת תריסים וחלונות אלומיניום בצפון הארץ',
      quickLinks: 'קישורים מהירים',
      followUs: 'עקבו אחרינו',
      rights: 'כל הזכויות שמורות'
    }
  },
  en: {
    nav: {
      services: 'Services',
      gallery: 'Gallery',
      about: 'About',
      reviews: 'Reviews',
      contact: 'Contact'
    },
    hero: {
      title: 'Aluminum Windows & Shutter Repair',
      subtitle: 'Expert repair and installation of electric shutters, aluminum windows, and mosquito screens',
      cta: {
        call: 'Call Now',
        whatsapp: 'Send WhatsApp'
      },
      badges: {
        fast: 'Fast Service',
        fair: 'Fair Pricing',
        professional: 'Professional Work'
      }
    },
    services: {
      title: 'Our Services',
      subtitle: 'Professional solutions for all your aluminum needs',
      items: {
        electric: {
          title: 'Electric Shutter Repair',
          description: 'Motor repair, belt replacement, and electrical fault fixing'
        },
        windows: {
          title: 'Aluminum Windows',
          description: 'High-quality aluminum window installation and replacement'
        },
        mosquito: {
          title: 'Mosquito Screens',
          description: 'Quality screen installation for windows and doors'
        },
        installation: {
          title: 'New Installations',
          description: 'Installation of new shutters and windows from leading brands'
        },
        emergency: {
          title: 'Emergency Service',
          description: 'Available 24/7 for urgent repairs'
        },
        balcony: {
          title: 'Balcony Enclosures',
          description: 'Aluminum and glass balcony enclosures'
        }
      }
    },
    gallery: {
      title: 'Before & After',
      subtitle: 'See the results of our work',
      before: 'Before',
      after: 'After'
    },
    whyUs: {
      title: 'Why Choose Us?',
      subtitle: 'We are committed to excellence in every project',
      items: {
        fast: {
          title: 'Fast Arrival',
          description: 'We arrive within hours'
        },
        materials: {
          title: 'Professional Materials',
          description: 'We only use quality materials'
        },
        experience: {
          title: 'Years of Experience',
          description: 'Over 15 years in the industry'
        },
        clean: {
          title: 'Clean Work',
          description: 'We leave the place clean and tidy'
        },
        honest: {
          title: 'Honest Pricing',
          description: 'Transparent prices with no surprises'
        }
      }
    },
    reviews: {
      title: 'What Customers Say',
      subtitle: 'Thousands of satisfied customers across the North'
    },
    whatsappCta: {
      title: 'Want a Quick Quote?',
      subtitle: 'Send a photo of the issue on WhatsApp and get a quote within minutes',
      button: 'Send Photo on WhatsApp'
    },
    areas: {
      title: 'Service Areas',
      subtitle: 'Providing service throughout Northern Israel',
      cities: ['Haifa', 'Kiryat Ata', 'Shfaram', 'Nazareth', 'Akko', 'Krayot', 'Nahariya', 'Karmiel']
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We would be happy to assist you',
      form: {
        name: 'Full Name',
        phone: 'Phone',
        message: 'Describe the Issue',
        submit: 'Send Message'
      },
      info: {
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        hours: 'Working Hours',
        hoursValue: 'Sun-Thu 7:00-19:00, Fri 7:00-14:00'
      }
    },
    footer: {
      description: 'Experts in repair and installation of shutters and aluminum windows in Northern Israel',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
      rights: 'All rights reserved'
    }
  },
  ar: {
    nav: {
      services: 'الخدمات',
      gallery: 'المعرض',
      about: 'من نحن',
      reviews: 'آراء العملاء',
      contact: 'اتصل بنا'
    },
    hero: {
      title: 'إصلاح نوافذ الألمنيوم والمصاريع',
      subtitle: 'خبراء في إصلاح وتركيب المصاريع الكهربائية ونوافذ الألمنيوم وشبكات الناموس',
      cta: {
        call: 'اتصل الآن',
        whatsapp: 'أرسل واتساب'
      },
      badges: {
        fast: 'خدمة سريعة',
        fair: 'أسعار عادلة',
        professional: 'عمل احترافي'
      }
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'حلول احترافية لجميع احتياجاتك من الألمنيوم',
      items: {
        electric: {
          title: 'إصلاح المصاريع الكهربائية',
          description: 'إصلاح المحركات واستبدال الأحزمة وإصلاح الأعطال الكهربائية'
        },
        windows: {
          title: 'نوافذ الألمنيوم',
          description: 'تركيب واستبدال نوافذ ألمنيوم عالية الجودة'
        },
        mosquito: {
          title: 'شبكات الناموس',
          description: 'تركيب شبكات عالية الجودة للنوافذ والأبواب'
        },
        installation: {
          title: 'تركيبات جديدة',
          description: 'تركيب مصاريع ونوافذ جديدة من العلامات التجارية الرائدة'
        },
        emergency: {
          title: 'خدمة الطوارئ',
          description: 'متاحون على مدار الساعة للإصلاحات العاجلة'
        },
        balcony: {
          title: 'إغلاق الشرفات',
          description: 'إغلاق الشرفات بالألمنيوم والزجاج'
        }
      }
    },
    gallery: {
      title: 'قبل وبعد',
      subtitle: 'شاهد نتائج عملنا',
      before: 'قبل',
      after: 'بعد'
    },
    whyUs: {
      title: 'لماذا تختارنا؟',
      subtitle: 'نحن ملتزمون بالتميز في كل مشروع',
      items: {
        fast: {
          title: 'وصول سريع',
          description: 'نصل خلال ساعات'
        },
        materials: {
          title: 'مواد احترافية',
          description: 'نستخدم فقط مواد عالية الجودة'
        },
        experience: {
          title: 'سنوات من الخبرة',
          description: 'أكثر من 15 عامًا في المجال'
        },
        clean: {
          title: 'عمل نظيف',
          description: 'نترك المكان نظيفًا ومرتبًا'
        },
        honest: {
          title: 'تسعير صادق',
          description: 'أسعار شفافة بدون مفاجآت'
        }
      }
    },
    reviews: {
      title: 'ماذا يقول العملاء',
      subtitle: 'آلاف العملاء الراضين في جميع أنحاء الشمال'
    },
    whatsappCta: {
      title: 'تريد عرض سعر سريع؟',
      subtitle: 'أرسل صورة للمشكلة عبر الواتساب واحصل على عرض سعر خلال دقائق',
      button: 'أرسل صورة عبر الواتساب'
    },
    areas: {
      title: 'مناطق الخدمة',
      subtitle: 'نقدم الخدمة في جميع أنحاء شمال إسرائيل',
      cities: ['حيفا', 'كريات آتا', 'شفاعمرو', 'الناصرة', 'عكا', 'الكريات', 'نهاريا', 'كرميئيل']
    },
    contact: {
      title: 'اتصل بنا',
      subtitle: 'يسعدنا خدمتكم',
      form: {
        name: 'الاسم الكامل',
        phone: 'الهاتف',
        message: 'وصف المشكلة',
        submit: 'إرسال'
      },
      info: {
        phone: 'الهاتف',
        whatsapp: 'واتساب',
        hours: 'ساعات العمل',
        hoursValue: 'الأحد-الخميس 7:00-19:00، الجمعة 7:00-14:00'
      }
    },
    footer: {
      description: 'خبراء في إصلاح وتركيب المصاريع ونوافذ الألمنيوم في شمال إسرائيل',
      quickLinks: 'روابط سريعة',
      followUs: 'تابعنا',
      rights: 'جميع الحقوق محفوظة'
    }
  }
}

export function getTranslations(locale: Locale) {
  return translations[locale]
}
