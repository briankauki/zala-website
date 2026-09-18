import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';

export const metadata = {
  title: 'Privacy Policy',
  description: 'ZALA Privacy Policy.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-zala-green py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
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
                  Website Visits
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  When you visit the ZALA website, certain technical
                  information may be processed to ensure the website functions
                  correctly.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Cookies
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  The website uses essential cookies required for it to
                  function. Non-essential cookies are only used with your
                  consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Analytics
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  Analytics are not loaded before you give the required
                  consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Contact Information
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  Any contact information you submit through the website is
                  used only to respond to your inquiry.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Download Activity
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  The website may process download activity where applicable.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Data Retention
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  Data is retained only as long as necessary for the purposes
                  described in this policy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  User Rights
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  You have rights regarding your data as provided by applicable
                  law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Third-Party Services
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  Third-party services may be used to operate the website.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Security
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  Reasonable security measures are used to protect data.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-zala-green-dark mb-3">
                  Contact
                </h2>
                <p className="text-zala-green-dark/70 leading-relaxed">
                  For privacy-related questions, contact ZALA through the
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