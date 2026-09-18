import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zala-green-dark text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/icons/logo.png"
                  alt="ZALA"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold">ZALA</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Official website of ZALA.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-zala-yellow">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-white/70 hover:text-white transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-zala-yellow">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:0724945668"
                  className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  0724 945 668
                </a>
              </li>
            </ul>

            <h3 className="font-semibold mb-4 text-zala-yellow mt-6">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-white/70 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/70 hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-white/70 hover:text-white transition-colors">
                  Cookie Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {year} ZALA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}