import './globals.css';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/lib/config';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'ZALA - Official Website',
    template: '%s | ZALA',
  },
  description: siteConfig.description,
  keywords: [
    'ZALA',
    'ZALA Tanzania',
    'ZALA app',
    'ZALA APK',
    'Download ZALA',
    'ZALA official website',
  ],
  verification: {
    google: 'G04JFg-bx_r3o4hqd4kaGBPZXcc8Y5vXiDRP5dI7I9k',
  },
  authors: [{ name: 'ZALA' }],
  creator: 'ZALA',
  publisher: 'ZALA',
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: 'ZALA - Official Website',
    description: siteConfig.description,
    siteName: 'ZALA',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ZALA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZALA - Official Website',
    description: siteConfig.description,
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-zala-green-dark">
        {children}
      </body>
    </html>
  );
}