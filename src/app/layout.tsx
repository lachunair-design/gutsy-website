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
  description: 'Clean, pre-digested protein designed to feel light and actually work.',
  keywords: ['protein', 'supplements', 'fitness', 'dubai', 'gutsy', 'no-bloat'],
  // FAVICON CONFIGURATION
  icons: {
    icon: '/images/Favicon 01.svg',
    shortcut: '/images/Favicon 01.svg',
    apple: '/images/Favicon 01.svg',
  },
  // SOCIAL SHARE (OPEN GRAPH) PREVIEW
  openGraph: {
    title: 'GUTSY | No Bloat Protein',
    description: 'Clean, pre-digested protein designed to feel light.',
    url: 'https://gutsy.life', // Update with your actual domain
    siteName: 'GUTSY',
    images: [
      {
        url: '/images/og-image.png', // Create this 1200x630px image later
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${utoBlack.variable} ${runWild.variable}`}>
      {/* 1. antialiased for crisp typography.
          2. bg-[#f3eee4] ensures no white flashes during transitions.
      */}
      <body className="antialiased bg-[#f3eee4]">
        <CartProvider>
          <Header />
          {/* NO TOP PADDING: Allows 'About' page pouches to sit flush 
              against the browser top.
          */}
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
