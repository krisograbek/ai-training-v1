'use client';

import { useLanguage } from '@/lib/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl space-y-2">
            <span className="block">{t('hero.title1')}</span>
            <span className="block text-indigo-600">{t('hero.title2')}</span>
          </h1>

          <p className="mt-6 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
            {t('hero.subtitle')}
          </p>

          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="rounded-md shadow">
              <button
                onClick={() => scrollToSection('cta')}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                {t('hero.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
