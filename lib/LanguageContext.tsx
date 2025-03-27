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
    'hero.title1': 'Have Your First AI Automation Live in 3 Days',
    'hero.title2': 'Even If You’re Not Technical',
    'hero.subtitle': 'In our hands-on workshop, your team builds real AI tools that reduce busywork, personalize outreach, and help you scale faster.',
    'hero.cta': 'Get Started',
    
    // Features
    'features.title': 'Transform Your Business with AI',
    'features.subtitle': 'Discover how our AI solutions can revolutionize your business operations',
    
    'features.1.title': 'AI Training That Doesn’t Require Tech Skills or Extra Hires',
    'features.1.description': 'Most SMBs think AI means hiring developers or data scientists. It doesn’t. We show your sales, marketing, or ops team how to use simple tools like ChatGPT, n8n, and Copilot to automate real workflows—with zero coding required',
    
    'features.2.title': 'Build Your First AI Workflow in 3 days',
    'features.2.description': 'Most AI courses leave you with theory. Ours gives you results. Within 2 days, your team will automate at least one task inside your business—like lead research, CRM updates, or follow-up emails.',
    
    'features.3.title': 'AI for the People Who Actually Drive Revenue',
    'features.3.description': 'Most AI training is made by engineers, for engineers. Ours is built for the people who run the business. We train teams in sales, marketing, customer success, and leadership to actually use AI tools in their daily workflows.',
    
    'features.4.title': 'Finally Understand How AI Fits Into Your Business',
    'features.4.description': 'AI isn’t magic—and it’s not something you can fake your way through. We break it down in business terms, show you what matters (and what doesn’t), and help your team focus on real problems—not chasing tools or trends.',
    
    'features.5.title': 'You’ll Leave With a Custom AI Blueprint for Your Business',
    'features.5.description': 'AI isn’t one-size-fits-all. We help you create a strategy that works for your unique business—and offer support to make sure it actually gets implemented, not forgotten.',
    
    // CTA Section
    'cta.title': 'Ready to Transform Your Business?',
    'cta.subtitle': 'Get started with AI and automation solutions tailored for your business.',
    'cta.button': 'Contact Us',
    
    // Footer
    'footer.description': 'Empowering businesses with AI and automation solutions.',
    'footer.contact': 'Contact',
    'footer.followUs': 'Follow Us',
    'footer.rights': '© 2025 KRIS. All rights reserved.'
  },
  pl: {
    // Navigation
    'nav.features': 'Funkcje',
    'nav.getStarted': 'Rozpocznij',
    
    // Hero
    'hero.title1': 'Uruchom swoją pierwszą automatyzację AI w 3 dni',
    'hero.title2': 'Nawet jeśli nie masz wiedzy technicznej',
    'hero.subtitle': 'Podczas naszego warsztatu Twój zespół zbuduje prawdziwe narzędzia AI, które zredukują żmudne zadania, spersonalizują komunikację i pomogą szybciej się skalować.',
    'hero.cta': 'Zacznij teraz',
    
    // Features
    'features.title': 'Zmień swój biznes dzięki AI',
    'features.subtitle': 'Zobacz, jak nasze rozwiązania AI mogą zrewolucjonizować działanie Twojej firmy',
    
    'features.1.title': 'Szkolenie z AI bez umiejętności technicznych i zatrudniania specjalistów',
    'features.1.description': 'Większość MŚP myśli, że AI to konieczność zatrudniania programistów lub data scientistów. Nieprawda. Pokazujemy Twojemu zespołowi sprzedaży, marketingu lub operacji, jak używać prostych narzędzi jak ChatGPT, n8n czy Copilot do automatyzacji prawdziwych procesów—bez kodowania.',
  
    'features.2.title': 'Zbuduj pierwszy workflow AI w 3 dni',
    'features.2.description': 'Większość kursów AI kończy się na teorii. Nasz daje wyniki. W ciągu 2 dni Twój zespół zautomatyzuje przynajmniej jedno zadanie w firmie—np. research leadów, aktualizację CRM lub maile follow-up.',
  
    'features.3.title': 'AI dla ludzi, którzy naprawdę generują przychody',
    'features.3.description': 'Większość szkoleń z AI tworzą inżynierowie dla inżynierów. My tworzymy je dla osób, które naprawdę napędzają biznes. Szkolimy zespoły sprzedaży, marketingu, obsługi klienta i liderów, by używali AI w codziennej pracy.',
  
    'features.4.title': 'Zrozum w końcu, jak AI pasuje do Twojego biznesu',
    'features.4.description': 'AI to nie magia—i nie da się tego udawać. Tłumaczymy wszystko w języku biznesu, pokazujemy, co naprawdę ma znaczenie (a co nie), i pomagamy zespołowi skupić się na realnych problemach, a nie gonieniu za trendami.',
  
    'features.5.title': 'Otrzymasz indywidualną mapę wdrożenia AI dla Twojej firmy',
    'features.5.description': 'AI to nie uniwersalne rozwiązanie. Pomagamy stworzyć strategię dopasowaną do Twojego biznesu—i wspieramy Cię, by faktycznie została wdrożona, a nie zapomniana.',
  
    // CTA Section
    'cta.title': 'Gotowy na Transformację Swojego Biznesu?',
    'cta.subtitle': 'Rozpocznij wdrażanie rozwiązań AI i automatyzacji dostosowanych do Twojej firmy.',
    'cta.button': 'Skontaktuj się',
    
    // Footer
    'footer.description': 'Wspieramy firmy rozwiązaniami AI i automatyzacji.',
    'footer.contact': 'Kontakt',
    'footer.followUs': 'Obserwuj nas',
    'footer.rights': '© 2025 KRIS. Wszelkie prawa zastrzeżone.'
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