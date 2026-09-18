'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

export default function DownloadButton({
  variant = 'green',
  size = 'medium',
  label = 'DOWNLOAD APK',
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const base =
    'inline-flex items-center justify-center gap-3 font-bold rounded-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    green:
      'bg-zala-green text-white hover:bg-zala-green-dark shadow-lg shadow-zala-green/20 hover:shadow-xl hover:shadow-zala-green/30',
    yellow:
      'bg-zala-yellow text-zala-green-dark hover:bg-zala-yellow-dark shadow-lg shadow-zala-yellow/20 hover:shadow-xl hover:shadow-zala-yellow/30',
  };

  const sizes = {
    small: 'px-5 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-10 py-5 text-lg',
  };

  const handleDownload = () => {
    setLoading(true);
    setError(false);
    try {
      window.location.href = '/api/download';
      setTimeout(() => setLoading(false), 2000);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`${base} ${variants[variant]} ${sizes[size]}`}
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Starting download...
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            {label}
          </>
        )}
      </button>
      {error && (
        <p className="text-sm text-red-600">
          Unable to start the download. Please try again.
        </p>
      )}
    </div>
  );
}