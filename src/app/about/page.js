import Image from 'next/image';
import Link from 'next/link';
import {
  Smartphone,
  Download,
  Shield,
  Car,
  CreditCard,
  Lock,
  Zap,
  CheckCircle2,
  Globe,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DownloadButton from '@/components/DownloadButton';
import CookieBanner from '@/components/CookieBanner';
import { apkConfig } from '@/lib/config';

export const metadata = {
  title: 'About',
  description:
    'Learn about ZALA, the mobile application, and how to download the official Android APK.',
};

export default function AboutPage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile Application',
      text: 'ZALA is built as an Android mobile application.',
    },
    {
      icon: Car,
      title: 'Transport Services',
      text: 'ZALA provides transport services through its mobile application.',
    },
    {
      icon: CreditCard,
      title: 'Integrated Payments',
      text: 'Payments are integrated within the ZALA mobile application.',
    },
    {
      icon: Lock,
      title: 'Official Source',
      text: 'Only download the ZALA APK from this official page.',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="relative bg-zala-green py-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-zala-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-[2rem] overflow-hidden shadow-2xl bg-white animate-float">
              <Image
                src="/icons/logo.png"
                alt="ZALA"
                width={96}
                height={96}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About ZALA
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              ZALA is a mobile application. This is the official website where
              you can learn about ZALA and download the official Android
              application.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="zala-glass rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 mx-auto mb-3 bg-zala-green/10 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-zala-green" />
                </div>
                <p className="text-xs text-zala-green-dark/60 mb-1 font-medium uppercase tracking-wide">
                  Platform
                </p>
                <p className="text-lg font-bold text-zala-green-dark">
                  Android
                </p>
              </div>

              <div className="zala-glass rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 mx-auto mb-3 bg-zala-yellow/20 rounded-xl flex items-center justify-center">
                  <Download className="w-6 h-6 text-zala-yellow-dark" />
                </div>
                <p className="text-xs text-zala-green-dark/60 mb-1 font-medium uppercase tracking-wide">
                  Version
                </p>
                <p className="text-lg font-bold text-zala-green-dark">
                  {apkConfig.version}
                </p>
              </div>

              <div className="zala-glass rounded-2xl p-6 text-center hover:-translate-y-2 transition-transform">
                <div className="w-12 h-12 mx-auto mb-3 bg-zala-green/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-zala-green" />
                </div>
                <p className="text-xs text-zala-green-dark/60 mb-1 font-medium uppercase tracking-wide">
                  APK Size
                </p>
                <p className="text-lg font-bold text-zala-green-dark">
                  {apkConfig.size}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zala-green/5 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-zala-green-dark mb-4">
                What ZALA is
              </h2>
              <p className="text-lg text-zala-green-dark/70 max-w-2xl mx-auto">
                ZALA is a mobile application available for Android devices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 border border-zala-green/10 hover:border-zala-green/30 hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 mb-4 bg-gradient-to-br from-zala-green to-zala-green-dark rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-zala-green-dark mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-zala-green-dark/70 leading-relaxed text-sm">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-zala-green-dark mb-4">
                What users can do with ZALA
              </h2>
              <p className="text-lg text-zala-green-dark/70 max-w-2xl mx-auto">
                Once installed, users can access the ZALA mobile application
                on their Android device.
              </p>
            </div>

            <div className="zala-glass rounded-3xl p-8 md:p-12">
              <ul className="space-y-4">
                {[
                  'Install the official ZALA Android application on your device.',
                  'Access transport services through the ZALA app.',
                  'Complete payments through the integrated payment system.',
                  'Use the ZALA mobile application on your Android device.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zala-green flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-zala-green-dark/80 leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-zala-green-dark py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-zala-yellow/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-zala-yellow/20 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-zala-yellow" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Official Website
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              This is the official ZALA website. Download the ZALA application
              only from this page to ensure you receive the official Android
              APK.
            </p>
            <DownloadButton variant="yellow" size="large" />
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}