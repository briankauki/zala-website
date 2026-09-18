import Link from 'next/link';
import Image from 'next/image';
import {
  Download,
  Shield,
  Smartphone,
  ShoppingBag,
  Truck,
  CreditCard,
  Store,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Zap,
  Lock,
  Users,
  Globe,
  TrendingUp,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DownloadButton from '@/components/DownloadButton';
import CookieBanner from '@/components/CookieBanner';
import { apkConfig } from '@/lib/config';

export const metadata = {
  title: 'ZALA - Official Website',
  description:
    'Official website of ZALA. A marketplace and logistics platform. Download the official ZALA Android application.',
};

export default function HomePage() {
  const mainFeatures = [
    {
      icon: ShoppingBag,
      title: 'Marketplace',
      text: 'Explore a marketplace with products and stores through the ZALA mobile application.',
    },
    {
      icon: Truck,
      title: 'Delivery & Logistics',
      text: 'ZALA integrates delivery and logistics for orders placed through the application.',
    },
    {
      icon: CreditCard,
      title: 'Integrated Payments',
      text: 'Payments are integrated within the ZALA mobile application.',
    },
    {
      icon: Store,
      title: 'Merchant Hub',
      text: 'Merchants can manage stores and products through the ZALA application.',
    },
  ];

  const userActions = [
    'Browse products and stores from the marketplace',
    'Place orders through the ZALA application',
    'Track delivery of orders',
    'Complete payments through the app',
    'Merchants can open and manage stores',
  ];

  const trustPoints = [
    {
      icon: Shield,
      title: 'Official Source',
      text: 'Only from zala.co.tz',
    },
    {
      icon: Lock,
      title: 'Secure',
      text: 'HTTPS encrypted',
    },
    {
      icon: Smartphone,
      title: 'Android',
      text: 'Built for Android',
    },
    {
      icon: Globe,
      title: 'Available',
      text: 'For all users',
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* HERO — DOWNLOAD APK MARA 1 TU */}
        <section className="relative bg-zala-green py-24 md:py-32 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zala-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse-slow" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
              <Sparkles className="w-4 h-4 text-zala-yellow" />
              <span className="text-sm text-white font-medium tracking-wide">
                OFFICIAL WEBSITE
              </span>
            </div>

            <div className="w-32 h-32 mx-auto mb-8 rounded-[2rem] overflow-hidden shadow-2xl bg-white animate-float">
              <Image
                src="/icons/logo.png"
                alt="ZALA"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              ZALA
            </h1>

            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Official website of ZALA. A marketplace and logistics platform.
              Download the official ZALA Android application.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <DownloadButton variant="yellow" size="large" />
              <Link
                href="/about"
                className="group px-8 py-5 border-2 border-white/40 text-white rounded-xl font-semibold hover:bg-white hover:text-zala-green transition-all inline-flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST POINTS */}
        <section className="bg-white py-16 border-b border-zala-green/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {trustPoints.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="zala-glass rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-zala-green to-zala-green-dark rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-bold text-zala-green-dark text-sm">
                      {item.title}
                    </p>
                    <p className="text-xs text-zala-green-dark/60 mt-1">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* APPLICATION INFORMATION */}
        <section className="bg-zala-green/5 py-20 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-zala-yellow/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-zala-green/10 text-zala-green text-xs font-bold rounded-full mb-4 tracking-widest">
                APPLICATION
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-zala-green-dark mb-4">
                Application Information
              </h2>
              <p className="text-zala-green-dark/60 max-w-2xl mx-auto">
                Details about the ZALA Android application.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="zala-glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zala-green to-zala-green-dark rounded-2xl flex items-center justify-center shadow-lg">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs uppercase tracking-widest text-zala-green-dark/60 font-semibold mb-2">
                  Application
                </p>
                <p className="text-xl font-bold text-zala-green-dark">
                  ZALA Android
                </p>
              </div>

              <div className="zala-glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zala-yellow to-zala-yellow-dark rounded-2xl flex items-center justify-center shadow-lg">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs uppercase tracking-widest text-zala-green-dark/60 font-semibold mb-2">
                  Version
                </p>
                <p className="text-xl font-bold text-zala-green-dark">
                  {apkConfig.version}
                </p>
              </div>

              <div className="zala-glass rounded-3xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zala-green to-zala-green-dark rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs uppercase tracking-widest text-zala-green-dark/60 font-semibold mb-2">
                  Size
                </p>
                <p className="text-xl font-bold text-zala-green-dark">
                  {apkConfig.size}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PLATFORM FEATURES */}
        <section className="bg-white py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-zala-yellow/20 text-zala-yellow-dark text-xs font-bold rounded-full mb-4 tracking-widest">
                PLATFORM
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-zala-green-dark mb-4">
                What ZALA Offers
              </h2>
              <p className="text-lg text-zala-green-dark/70 max-w-2xl mx-auto">
                ZALA is a mobile platform with the following features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {mainFeatures.map((feature, i) => {
                const Icon = feature.icon;
                const isGreen = i % 2 === 0;
                return (
                  <div
                    key={i}
                    className="relative rounded-3xl p-8 border border-zala-green/10 hover:border-zala-green/30 hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    <div
                      className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${
                        isGreen ? 'bg-zala-green' : 'bg-zala-yellow'
                      }`}
                    />

                    <div className="relative">
                      <div
                        className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center shadow-lg ${
                          isGreen
                            ? 'bg-gradient-to-br from-zala-green to-zala-green-dark'
                            : 'bg-gradient-to-br from-zala-yellow to-zala-yellow-dark'
                        }`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-zala-green-dark mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-zala-green-dark/70 leading-relaxed">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* USER ACTIONS */}
        <section className="bg-zala-green-dark py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-zala-yellow/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-1 bg-zala-yellow/20 text-zala-yellow text-xs font-bold rounded-full mb-4 tracking-widest">
                  USER ACTIONS
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  What users can do with ZALA
                </h2>
                <p className="text-white/80 text-lg mb-8 leading-relaxed">
                  Once installed, users can use the ZALA Android application.
                </p>

                <ul className="space-y-4">
                  {userActions.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-zala-yellow flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-zala-green-dark" />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="zala-glass-dark rounded-3xl p-10 backdrop-blur-xl border border-white/20 text-center">
                  <div className="w-28 h-28 mx-auto rounded-2xl overflow-hidden bg-white shadow-2xl mb-6">
                    <Image
                      src="/icons/logo.png"
                      alt="ZALA"
                      width={112}
                      height={112}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white font-bold text-3xl mb-2">ZALA</p>
                  <p className="text-white/70 text-sm mb-6">
                    Official Android Application
                  </p>
                  <div className="flex items-center justify-center gap-2 text-zala-yellow">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">For all users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISION / MISSION */}
        <section className="bg-white py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-4 py-1 bg-zala-green/10 text-zala-green text-xs font-bold rounded-full mb-4 tracking-widest">
              OUR PURPOSE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-zala-green-dark mb-6">
              Built for Tanzania
            </h2>
            <p className="text-lg md:text-xl text-zala-green-dark/70 leading-relaxed mb-8">
              ZALA is a mobile platform designed for users and merchants. The
              application provides access to a marketplace, delivery, and
              integrated payments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="zala-glass rounded-2xl p-6">
                <TrendingUp className="w-8 h-8 text-zala-green mx-auto mb-3" />
                <p className="font-bold text-zala-green-dark">Marketplace</p>
              </div>
              <div className="zala-glass rounded-2xl p-6">
                <Truck className="w-8 h-8 text-zala-green mx-auto mb-3" />
                <p className="font-bold text-zala-green-dark">Delivery</p>
              </div>
              <div className="zala-glass rounded-2xl p-6">
                <CreditCard className="w-8 h-8 text-zala-green mx-auto mb-3" />
                <p className="font-bold text-zala-green-dark">Payments</p>
              </div>
            </div>
          </div>
        </section>

        {/* OFFICIAL WEBSITE */}
        <section className="bg-zala-green py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-zala-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <Shield className="w-12 h-12 text-zala-yellow mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Official Website
            </h2>
            <p className="text-white/90 text-lg leading-relaxed">
              This is the official ZALA website. Download the ZALA application
              only from this page to ensure you receive the official Android
              APK.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}