import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DownloadButton from '@/components/DownloadButton';
import CookieBanner from '@/components/CookieBanner';
import { apkConfig } from '@/lib/config';

export const metadata = {
  title: 'Download',
  description: 'Download the official ZALA Android application.',
};

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center">
        <section className="w-full py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="zala-glass rounded-3xl p-8 md:p-12 text-center shadow-xl">
              <div className="w-28 h-28 mx-auto mb-6 rounded-3xl overflow-hidden shadow-lg shadow-zala-green/20">
                <Image
                  src="/icons/logo.png"
                  alt="ZALA"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-zala-green-dark mb-4">
                Download ZALA
              </h1>

              <p className="text-lg text-zala-green-dark/70 mb-10">
                Download the official ZALA Android application.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-zala-green/5 rounded-xl p-4">
                  <p className="text-xs text-zala-green-dark/60 mb-1 font-medium">
                    Version
                  </p>
                  <p className="text-base font-bold text-zala-green-dark">
                    {apkConfig.version}
                  </p>
                </div>
                <div className="bg-zala-yellow/10 rounded-xl p-4">
                  <p className="text-xs text-zala-green-dark/60 mb-1 font-medium">
                    Size
                  </p>
                  <p className="text-base font-bold text-zala-green-dark">
                    {apkConfig.size}
                  </p>
                </div>
                <div className="bg-zala-green/5 rounded-xl p-4">
                  <p className="text-xs text-zala-green-dark/60 mb-1 font-medium">
                    Android
                  </p>
                  <p className="text-base font-bold text-zala-green-dark">
                    {apkConfig.androidMin}
                  </p>
                </div>
              </div>

              <DownloadButton variant="green" size="large" />

              <p className="text-sm text-zala-green-dark/50 mt-6">
                Click DOWNLOAD APK to start the download.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}