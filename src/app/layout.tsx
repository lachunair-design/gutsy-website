import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CartProvider } from '@/lib/shopify/cart-context';
import { CartDrawer } from '@/components/cart/cart-drawer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});


export const metadata: Metadata = {
  title: 'Gutsy | Premium Protein Supplements',
  description:
    'Fuel your ambition with Gutsy premium protein supplements. Clean ingredients, maximum results.',
  keywords: ['protein', 'supplements', 'fitness', 'nutrition', 'gutsy'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
