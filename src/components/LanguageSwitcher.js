'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState('en');

  const changeLang = (code) => {
    setLang(code);
    if (typeof window !== 'undefined') {
      localStorage.setItem('zala-lang', code);
    }
  };

  return (
    <div className="flex items-center gap-1 px-2 py-1 border border-zala-green/20 rounded-lg">
      <Globe className="w-4 h-4 text-zala-green-dark" />
      <button
        onClick={() => changeLang('en')}
        className={`px-2 py-1 text-sm font-semibold rounded ${
          lang === 'en'
            ? 'bg-zala-green text-white'
            : 'text-zala-green-dark hover:text-zala-green'
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => changeLang('sw')}
        className={`px-2 py-1 text-sm font-semibold rounded ${
          lang === 'sw'
            ? 'bg-zala-green text-white'
            : 'text-zala-green-dark hover:text-zala-green'
        }`}
        aria-label="Kiswahili"
      >
        SW
      </button>
    </div>
  );
}