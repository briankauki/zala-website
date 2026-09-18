'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('zala-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (value) => {
    localStorage.setItem(
      'zala-cookie-consent',
      JSON.stringify({
        essential: true,
        analytics: value === 'all',
        marketing: false,
        timestamp: Date.now(),
      })
    );
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50">
      <div className="zala-glass-dark rounded-2xl p-6 shadow-2xl text-white">
        <div className="flex items-start gap-3 mb-4">
          <Cookie className="w-6 h-6 text-zala-yellow flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold mb-2">Cookie Settings</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              We use cookies to improve your experience on this website.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mb-3">
          <button
            onClick={() => saveConsent('all')}
            className="flex-1 px-4 py-2 bg-zala-yellow text-zala-green-dark rounded-lg font-semibold hover:bg-zala-yellow-dark transition-colors text-sm"
          >
            Accept All
          </button>
          <button
            onClick={() => saveConsent('essential')}
            className="flex-1 px-4 py-2 border border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm"
          >
            Reject Non-Essential
          </button>
        </div>

        <Link
          href="/cookies"
          className="block text-center text-xs text-white/70 hover:text-white underline"
        >
          Cookie Settings
        </Link>
      </div>
    </div>
  );
}