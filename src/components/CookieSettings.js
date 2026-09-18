'use client';

import { useState, useEffect } from 'react';
import { Cookie, Check, X } from 'lucide-react';

export default function CookieSettings({ isOpen, onClose }) {
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
      } catch (e) {
        // ignore
      }
    }
  }, [isOpen]);

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
    setTimeout(() => {
      setSaved(false);
      if (onClose) onClose();
    }, 1500);
  };

  const acceptAll = () => {
    setPreferences({ essential: true, analytics: true, marketing: true });
  };

  const rejectNonEssential = () => {
    setPreferences({ essential: true, analytics: false, marketing: false });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-zala-green-dark/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg zala-glass rounded-3xl p-6 md:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-zala-yellow/20 rounded-xl flex items-center justify-center">
              <Cookie className="w-6 h-6 text-zala-yellow-dark" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-zala-green-dark">
                Cookie Settings
              </h2>
              <p className="text-xs text-zala-green-dark/60">
                Manage your preferences
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zala-green-dark/60 hover:text-zala-green-dark rounded-lg hover:bg-zala-green/5 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 mb-6">
          <div className="bg-white/60 rounded-2xl p-5 flex items-start justify-between gap-4 border border-zala-green/10">
            <div className="flex-1">
              <h3 className="text-base font-bold text-zala-green-dark mb-1">
                Essential
              </h3>
              <p className="text-sm text-zala-green-dark/70 leading-relaxed">
                Required for the website to function. These cannot be disabled.
              </p>
            </div>
            <div className="flex-shrink-0 px-3 py-1.5 bg-zala-green/10 rounded-lg">
              <span className="text-xs font-bold text-zala-green-dark">
                Always On
              </span>
            </div>
          </div>

          <div className="bg-white/60 rounded-2xl p-5 flex items-start justify-between gap-4 border border-zala-green/10">
            <div className="flex-1">
              <h3 className="text-base font-bold text-zala-green-dark mb-1">
                Analytics
              </h3>
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
              aria-pressed={preferences.analytics}
            >
              <span
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                  preferences.analytics ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="bg-white/60 rounded-2xl p-5 flex items-start justify-between gap-4 border border-zala-green/10">
            <div className="flex-1">
              <h3 className="text-base font-bold text-zala-green-dark mb-1">
                Marketing
              </h3>
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
              aria-pressed={preferences.marketing}
            >
              <span
                className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow transition-transform ${
                  preferences.marketing ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={acceptAll}
            className="flex-1 px-4 py-3 border-2 border-zala-green text-zala-green rounded-xl font-semibold hover:bg-zala-green/5 transition-colors text-sm"
          >
            Accept All
          </button>
          <button
            onClick={rejectNonEssential}
            className="flex-1 px-4 py-3 border-2 border-zala-green/30 text-zala-green-dark rounded-xl font-semibold hover:bg-zala-green/5 transition-colors text-sm"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={save}
            className="flex-1 px-4 py-3 bg-zala-green text-white rounded-xl font-semibold hover:bg-zala-green-dark transition-colors flex items-center justify-center gap-2 text-sm"
          >
            {saved ? (
              <>
                <Check className="w-4 h-4" />
                Saved
              </>
            ) : (
              'Save'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}