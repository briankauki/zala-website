import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-24 h-24 mx-auto mb-8 bg-zala-yellow/20 rounded-3xl flex items-center justify-center">
            <span className="text-zala-yellow-dark font-bold text-5xl">
              404
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-zala-green-dark mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-zala-green-dark/70 mb-8">
            The page you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-zala-green text-white rounded-xl font-bold hover:bg-zala-green-dark transition-colors"
          >
            BACK TO HOME
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}