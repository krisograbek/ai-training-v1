'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.getStarted': 'Get Started',
    
    // Hero
    'hero.title1': 'Automation & AI Training',
    'hero.title2': 'for Small Businesses',
    'hero.subtitle': 'Transform your business operations with cutting-edge AI solutions. Learn how to leverage automation to boost productivity and stay ahead in the digital age.',
    'hero.cta': 'Get Started',
    
    // Features
    'features.title': 'Transform Your Business with AI',
    'features.subtitle': 'Discover how our AI solutions can revolutionize your business operations',
    
    'features.1.title': 'Custom AI Solutions',
    'features.1.description': 'Develop tailored AI solutions that address your specific business challenges and opportunities.',
    
    'features.2.title': 'Process Automation',
    'features.2.description': 'Streamline your operations by automating repetitive tasks and workflows.',
    
    'features.3.title': 'Data-Driven Insights',
    'features.3.description': 'Harness the power of your data to make informed business decisions.',
    
    'features.4.title': 'Integration Expertise',
    'features.4.description': 'Seamlessly integrate AI solutions with your existing systems and workflows.',
    
    'features.5.title': 'Ongoing Support',
    'features.5.description': 'Get continuous support and guidance as you implement and scale your AI solutions.',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your Business?',
    'cta.subtitle': 'Get started with AI and automation solutions tailored for your business.',
    'cta.button': 'Contact Us',
    
    // Footer
    'footer.description': 'Empowering businesses with AI and automation solutions.',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': '© 2024 KRIS. All rights reserved.'
  },
  pl: {
    // Navigation
    'nav.features': 'Funkcje',
    'nav.getStarted': 'Rozpocznij',
    
    // Hero
    'hero.title1': 'Szkolenia z Automatyzacji i AI',
    'hero.title2': 'dla Małych i Średnich Firm',
    'hero.subtitle': 'Przekształć działanie swojej firmy dzięki nowoczesnym rozwiązaniom AI. Dowiedz się, jak wykorzystać automatyzację do zwiększenia produktywności i wyprzedzenia konkurencji.',
    'hero.cta': 'Rozpocznij',
    
    // Features
    'features.title': 'Transformacja Biznesu z AI',
    'features.subtitle': 'Zobacz, jak nasze rozwiązania AI mogą zrewolucjonizować działanie Twojej firmy',
    
    'features.1.title': 'Spersonalizowane Rozwiązania AI',
    'features.1.description': 'Tworzymy dostosowane rozwiązania AI, które odpowiadają na konkretne wyzwania i możliwości Twojej firmy.',
    
    'features.2.title': 'Automatyzacja Procesów',
    'features.2.description': 'Usprawnij działanie firmy poprzez automatyzację powtarzalnych zadań i procesów.',
    
    'features.3.title': 'Analiza Danych',
    'features.3.description': 'Wykorzystaj moc swoich danych do podejmowania świadomych decyzji biznesowych.',
    
    'features.4.title': 'Ekspertyza Integracji',
    'features.4.description': 'Bezproblemowo integrujemy rozwiązania AI z istniejącymi systemami i procesami.',
    
    'features.5.title': 'Ciągłe Wsparcie',
    'features.5.description': 'Zapewniamy stałe wsparcie i doradztwo podczas wdrażania i skalowania rozwiązań AI.',
    
    // CTA Section
    'cta.title': 'Gotowy na Transformację Swojego Biznesu?',
    'cta.subtitle': 'Rozpocznij wdrażanie rozwiązań AI i automatyzacji dostosowanych do Twojej firmy.',
    'cta.button': 'Skontaktuj się',
    
    // Footer
    'footer.description': 'Wspieramy firmy rozwiązaniami AI i automatyzacji.',
    'footer.contact': 'Kontakt',
    'footer.followUs': 'Obserwuj nas',
    'footer.rights': '© 2024 KRIS. Wszelkie prawa zastrzeżone.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 