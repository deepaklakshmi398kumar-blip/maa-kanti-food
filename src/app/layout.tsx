import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Providers from './providers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Maa Kanti Food - Fresh Indian Groceries',
  description: 'Premium Indian grocery products delivered to your doorstep. Fresh spices, grains, pulses, oils and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster position="bottom-right" />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
