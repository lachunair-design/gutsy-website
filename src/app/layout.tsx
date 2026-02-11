import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CartProvider } from '@/lib/shopify/cart-context';
import { CartDrawer } from '@/components/cart/cart-drawer';

// Initialize the brand fonts at the root level
const utoBlack = localFont({ 
  src: '../../public/fonts/Uto Black.otf',
  variable: '--font-uto-black'
});

const runWild = localFont({ 
  src: '../../public/fonts/RunWild.ttf',
  variable: '--font-runwild'
});

export const metadata: Metadata = {
  title: 'GUTSY | No Bloat Protein',
  description: 'Clean, pre-digested protein designed to feel light and work actually.',
  keywords: ['protein', 'supplements', 'fitness', 'dubai', 'gutsy', 'no-bloat'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${utoBlack.variable} ${runWild.variable}`}>
      {/* 1. Removed min-h-screen and flex-col to prevent layout shifting.
          2. The bg-[#f3eee4] here acts as a safety net for the brand cream.
      */}
      <body className="antialiased bg-[#f3eee4]">
        <CartProvider>
          <Header />
          {/* CRITICAL FIX: 
              Removed 'pt-16'. This allows your Red Pouch on the About page 
              to hit the top of the browser window perfectly.
          */}
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
