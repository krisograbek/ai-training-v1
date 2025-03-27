'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <div id="cta" className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t('cta.subtitle')}
          </p>
          <div className="mt-8">
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              {t('cta.button')}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
