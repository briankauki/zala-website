import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'ZALA Terms & Conditions.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-zala-green py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm text-white/80">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="zala-glass rounded-2xl p-8 md:p-12 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Website Usage
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  By using the ZALA website, you agree to these terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  APK Download
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  The ZALA APK is provided for use on Android devices. Only
                  download the APK from this official website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Intellectual Property
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  All ZALA branding, logos, and content are the property of
                  ZALA.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Acceptable Use
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  You agree to use the website in a lawful and appropriate
                  manner.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Third-Party Services
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  The website may rely on third-party services for hosting and
                  delivery.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Website Availability
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  The website is provided on an &quot;as is&quot; basis and
                  may not always be available.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Liability Limitations
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  ZALA is not liable for any damages arising from the use of
                  this website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Changes to Terms
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  These terms may be updated from time to time.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Contact
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  For questions about these terms, contact ZALA through the
                  official contact page.
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