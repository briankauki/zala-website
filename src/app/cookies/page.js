'use client';

import { useState, useEffect } from 'react';
import { Cookie, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CookieSettingsPage() {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('zala-cookie-consent');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPreferences({
          essential: true,
          analytics: parsed.analytics || false,
          marketing: parsed.marketing || false,
        });
      } catch (e) {}
    }
  }, []);

  const save = () => {
    localStorage.setItem(
      'zala-cookie-consent',
      JSON.stringify({
        essential: true,
        analytics: preferences.analytics,
        marketing: preferences.marketing,
        timestamp: Date.now(),
      })
    );
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const acceptAll = () => {
    setPreferences({ essential: true, analytics: true, marketing: true });
  };

  const rejectNonEssential = () => {
    setPreferences({ essential: true, analytics: false, marketing: false });
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-zala-green py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center">
              <Cookie className="w-8 h-8 text-zala-yellow" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie Settings
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Manage your cookie preferences for the ZALA website.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="space-y-4">
              <div className="zala-glass rounded-2xl p-6 md:p-8 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-zala-green-dark mb-2">
                    Essential Cookies
                  </h2>
                  <p className="text-sm text-zala-green-dark/70 leading-relaxed">
                    Required for the website to function. These cannot be
                    disabled.
                  </p>
                </div>
                <div className="flex-shrink-0 px-4 py-2 bg-zala-green/10 rounded-lg">
                  <span className="text-xs font-bold text-zala-green-dark">
                    Always On
                  </span>
                </div>
              </div>

              <div className="zala-glass rounded-2xl p-6 md:p-8 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-zala-green-dark mb-2">
                    Analytics Cookies
                  </h2>
                  <p className="text-sm text-zala-green-dark/70 leading-relaxed">
                    Help us understand how the website is used.
                  </p>
                </div>
                <button
                  onClick={() =>
                    setPreferences((p) => ({ ...p, analytics: !p.analytics }))
                  }
                  className={`flex-shrink-0 w-14 h-8 rounded-full transition-colors relative ${
                    preferences.analytics ? 'bg-zala-green' : 'bg-gray-300'
                  }`}
                  aria-label="Toggle analytics cookies"
                >
                  <span
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                      preferences.analytics ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="zala-glass rounded-2xl p-6 md:p-8 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-zala-green-dark mb-2">
                    Marketing Cookies
                  </h2>
                  <p className="text-sm text-zala-green-dark/70 leading-relaxed">
                    Used to show relevant content.
                  </p>
                </div>
                <button
                  onClick={() =>
                    setPreferences((p) => ({ ...p, marketing: !p.marketing }))
                  }
                  className={`flex-shrink-0 w-14 h-8 rounded-full transition-colors relative ${
                    preferences.marketing ? 'bg-zala-green' : 'bg-gray-300'
                  }`}
                  aria-label="Toggle marketing cookies"
                >
                  <span
                    className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                      preferences.marketing ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={acceptAll}
                className="flex-1 px-6 py-3 border-2 border-zala-green text-zala-green rounded-xl font-semibold hover:bg-zala-green/5 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={rejectNonEssential}
                className="flex-1 px-6 py-3 border-2 border-zala-green/30 text-zala-green-dark rounded-xl font-semibold hover:bg-zala-green/5 transition-colors"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={save}
                className="flex-1 px-6 py-3 bg-zala-green text-white rounded-xl font-semibold hover:bg-zala-green-dark transition-colors flex items-center justify-center gap-2"
              >
                {saved ? (
                  <>
                    <Check className="w-5 h-5" />
                    Saved
                  </>
                ) : (
                  'Save Preferences'
                )}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}