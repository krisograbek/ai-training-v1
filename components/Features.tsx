'use client';

import Image from 'next/image';
import { useLanguage } from '@/lib/LanguageContext';

const features = [1, 2, 3, 4, 5].map((num) => ({
  titleKey: `features.${num}.title`,
  descriptionKey: `features.${num}.description`,
  image: `/${num === 1 ? 'pitch-deck' : 
          num === 2 ? 'success' :
          num === 3 ? 'ai-assistant' :
          num === 4 ? 'bull-market' : 'instant-support'}.svg`,
  alt: `Feature ${num} illustration`
}));

export const Features = () => {
  const { t } = useLanguage();

  return (
    <div id="features" className="py-12 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="mt-12 lg:mt-20 space-y-6 lg:space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg min-h-[300px] lg:h-[400px]"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 h-full">
                {/* Image Section */}
                <div
                  className={`relative h-[200px] lg:h-full ${
                    index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                  } flex items-center justify-center p-4 sm:p-6 lg:p-10`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div
                  className={`relative flex-1 lg:h-full ${
                    index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                  } flex flex-col justify-center p-4 sm:p-6 lg:p-10`}
                >
                  <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight lg:text-3xl">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-500">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 