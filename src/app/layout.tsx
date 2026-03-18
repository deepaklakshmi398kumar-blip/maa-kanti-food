import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Maa Kanti Foods | Premium Organic Spices & Grains',
  description:
    'Discover premium organic spices, flours, and grains. Fresh, authentic flavors for your kitchen. Fast delivery across India.',
  keywords:
    'spices, organic, grains, flour, premium, authentic, Indian food, online shopping',
  openGraph: {
    type: 'website',
    url: 'https://maakantifood.com',
    title: 'Maa Kanti Foods | Premium Organic Spices & Grains',
    description:
      'Discover premium organic spices, flours, and grains. Fresh, authentic flavors for your kitchen.',
    images: [
      {
        url: 'https://maakantifood.com/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Maa Kanti Foods Logo',
      },
    ],
    siteName: 'Maa Kanti Foods',
  },
  twitterData: {
    card: 'summary_large_image',
    title: 'Maa Kanti Foods | Premium Organic Spices & Grains',
    description:
      'Discover premium organic spices, flours, and grains. Fresh, authentic flavors for your kitchen.',
    images: ['https://maakantifood.com/images/logo.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://maakantifood.com" />
        <link rel="icon" href="/images/logo.svg" />
      </head>
      <body className="flex min-h-screen flex-col bg-cream dark:bg-dark transition-colors duration-300">
        <ThemeProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
