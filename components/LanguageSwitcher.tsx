'use client';

import { useLanguage } from '@/lib/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm font-medium ${
          language === 'en'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('pl')}
        className={`px-2 py-1 rounded-md text-sm font-medium ${
          language === 'pl'
            ? 'bg-indigo-600 text-white'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        PL
      </button>
    </div>
  );
};

export default LanguageSwitcher; 