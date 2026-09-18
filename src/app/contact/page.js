import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { Phone, MessageCircle, Headphones } from 'lucide-react';

export const metadata = {
  title: 'Contact',
  description: 'Contact ZALA through the official phone number.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-zala-green py-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-zala-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <Headphones className="w-4 h-4 text-zala-yellow" />
              <span className="text-sm text-white font-medium">
                Official Support
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Contact ZALA
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Reach us through our official phone number for any questions or
              support.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <a
              href="tel:0724945668"
              className="zala-glass rounded-3xl p-10 text-center block hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-zala-green to-zala-green-dark rounded-2xl flex items-center justify-center shadow-lg shadow-zala-green/30 group-hover:scale-110 transition-transform">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <p className="text-sm uppercase tracking-widest text-zala-green-dark/60 font-semibold mb-3">
                Call Us
              </p>
              <p className="text-3xl md:text-4xl font-bold text-zala-green-dark mb-2">
                0724 945 668
              </p>
              <p className="text-sm text-zala-green-dark/60">
                Tap to call — available during business hours
              </p>
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="zala-glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-zala-yellow/20 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-zala-yellow-dark" />
                </div>
                <h3 className="font-bold text-zala-green-dark mb-1">
                  Support
                </h3>
                <p className="text-sm text-zala-green-dark/60">
                  For app-related questions
                </p>
              </div>

              <div className="zala-glass rounded-2xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-zala-green/10 rounded-xl flex items-center justify-center">
                  <Headphones className="w-6 h-6 text-zala-green" />
                </div>
                <h3 className="font-bold text-zala-green-dark mb-1">
                  Inquiries
                </h3>
                <p className="text-sm text-zala-green-dark/60">
                  For general information
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}