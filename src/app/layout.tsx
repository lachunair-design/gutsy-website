import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CartProvider } from '@/lib/shopify/cart-context';
import { CartDrawer } from '@/components/cart/cart-drawer';

// FIXED FONT PATHS: Using relative paths to ensure successful Vercel builds
const utoBlack = localFont({ 
  src: '../public/fonts/Uto Black.otf',
  variable: '--font-uto-black'
});

const runWild = localFont({ 
  src: '../public/fonts/RunWild.ttf',
  variable: '--font-runwild'
});

export const metadata: Metadata = {
  // SEO/AEO OPTIMIZED TITLE & DESCRIPTION
  title: 'GUTSY | Protein Powder for Bloating | No Gums, Pre-Digested | Dubai',
  description: 'Finally, a protein powder that won&apos;t make you bloated. Enzymatically pre-digested pea and rice protein with kiwifruit extract. Ships across UAE. Feel light, not heavy.',
  
  // EXPANDED KEYWORDS FOR SEARCH ALGORITHMS
  keywords: [
    'protein powder bloating', 
    'easy digest protein', 
    'protein sensitive stomach', 
    'gut friendly protein Dubai', 
    'no bloating protein', 
    'pre-digested protein', 
    'enzymatic protein powder',
    'vegan protein UAE'
  ],

  // FAVICON CONFIGURATION
  icons: {
    icon: '/images/Favicon 01.svg',
    shortcut: '/images/Favicon 01.svg',
    apple: '/images/Favicon 01.svg',
  },

  // SOCIAL SHARE (OPEN GRAPH) PREVIEW
  openGraph: {
    title: 'GUTSY | Protein Powder That Won&apos;t Make You Bloated',
    description: 'Stop the bloat. Our enzymatically pre-digested protein is designed to feel light and absorb instantly.',
    url: 'https://eatgutsy.com', // Updated to your likely domain
    siteName: 'GUTSY',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GUTSY - Feels Light Protein',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // ROBOTS CONFIG FOR SEARCH ENGINES
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${utoBlack.variable} ${runWild.variable}`}>
      <body className="antialiased bg-[#f3eee4] selection:bg-[#ffb300] selection:text-black">
        <CartProvider>
          <Header />
          {/* Main content wrapper */}
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
