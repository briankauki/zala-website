export const siteConfig = {
  name: 'ZALA',
  url: 'https://zala.co.tz',
  domain: 'zala.co.tz',
  description:
    'Official website of ZALA. Download the official ZALA Android application.',
  contact: {
    email: '',
    phone: '',
  },
};

export const apkConfig = {
  version: process.env.APK_VERSION || '1.0.0',
  filename: process.env.APK_FILENAME || 'ZALA-1.0.0.apk',
  size: process.env.APK_SIZE || '182 MB',
  downloadUrl: process.env.APK_DOWNLOAD_URL || '',
  androidMin: 'Android 8.0+',
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/download', label: 'Download' },
  { href: '/contact', label: 'Contact' },
];