import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CartProvider } from '@/lib/shopify/cart-context';
import { CartDrawer } from '@/components/cart/cart-drawer';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import { TransitionProvider } from '@/components/transitions/transition-context';
import { PageTransitionOverlay } from '@/components/transitions/page-transition-overlay';
import { WordsLoader } from '@/components/loaders/words-loader';
import { ParticleField } from '@/components/effects/particle-field';

// FIXED FONT PATHS: Using relative paths to ensure successful Vercel builds
const utoBlack = localFont({ 
  src: '../../public/fonts/Uto Black.otf',
  variable: '--font-uto'
});

const crunold = localFont({
  src: '../../public/fonts/Crunold.otf', // Ensure this file exists in your public/fonts/
  variable: '--font-crunold'
});

const runWild = localFont({ 
  src: '../../public/fonts/RunWild.ttf',
  variable: '--font-runwild'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://eatgutsy.com'),

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
    url: 'https://eatgutsy.com', 
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
  
  // TWITTER CARD CONFIGURATION
  twitter: {
    card: 'summary_large_image',
    title: 'GUTSY | Protein Powder That Won\'t Make You Bloated',
    description: 'Stop the bloat. Enzymatically pre-digested protein designed to feel light and absorb instantly.',
    images: ['/images/og-image.png'],
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
    <html lang="en" className={`${utoBlack.variable} ${crunold.variable} ${runWild.variable}`}>
      <body className="antialiased bg-linen selection:bg-yellow selection:text-black">
        <CartProvider>
          <TransitionProvider>
            <SmoothScrollProvider>
              <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-red focus:text-white focus:px-6 focus:py-3 focus:rounded-full focus:text-sm focus:font-bold focus:uppercase focus:outline-none"
              >
                Skip to content
              </a>
              {/* Global ambient particles — fixed overlay across every page */}
              <ParticleField fixed />
              {/* Entry words animation — first visit only */}
              <WordsLoader />
              <Header />
              {/* Main content wrapper */}
              <main id="main-content">{children}</main>
              <Footer />
              <CartDrawer />
              <PageTransitionOverlay />
            </SmoothScrollProvider>
          </TransitionProvider>
        </CartProvider>
      </body>
    </html>
  );
}