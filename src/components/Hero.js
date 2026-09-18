import Link from 'next/link';
import Image from 'next/image';
import DownloadButton from './DownloadButton';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white via-white to-zala-green/5 py-20 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-zala-yellow/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zala-green/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-24 h-24 mx-auto mb-8 rounded-3xl overflow-hidden shadow-xl shadow-zala-green/20">
          <Image
            src="/icons/logo.png"
            alt="ZALA"
            width={96}
            height={96}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-zala-green-dark mb-6 tracking-tight">
          ZALA
        </h1>

        <p className="text-lg md:text-xl text-zala-green-dark/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Official website of ZALA. Download the official ZALA Android
          application.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <DownloadButton variant="green" size="large" />
          <Link
            href="/about"
            className="px-8 py-4 border-2 border-zala-green text-zala-green rounded-xl font-semibold hover:bg-zala-green hover:text-white transition-all"
          >
            LEARN MORE
          </Link>
        </div>
      </div>
    </section>
  );
}