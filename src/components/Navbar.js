'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Download } from 'lucide-react';
import { navLinks } from '@/lib/config';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 zala-glass border-b border-zala-green/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/icons/logo.png"
              alt="ZALA"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="text-xl font-bold text-zala-green-dark">ZALA</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${
                pathname === link.href
                  ? 'text-zala-green'
                  : 'text-zala-green-dark hover:text-zala-green'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/download"
            className="flex items-center gap-2 px-5 py-2 bg-zala-green text-white rounded-lg font-semibold hover:bg-zala-green-dark transition-colors"
          >
            <Download className="w-4 h-4" />
            Download
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-zala-green-dark"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-zala-green/10 px-6 py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zala-green-dark font-medium py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/download"
              className="flex items-center justify-center gap-2 px-5 py-3 bg-zala-green text-white rounded-lg font-semibold"
              onClick={() => setOpen(false)}
            >
              <Download className="w-4 h-4" />
              Download APK
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}