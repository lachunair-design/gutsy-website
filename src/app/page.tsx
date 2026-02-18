import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductDetail } from '@/components/product/product-detail';
import { MarqueeRail } from '@/components/marquee-rail';
import { EmailCapture } from '@/components/email-capture';
import { getProducts } from '@/lib/shopify';
import { ShopifyProduct } from '@/lib/shopify/types';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { FunFactCarousel } from './fun-fact-carousel';
import { ArrowUp } from 'lucide-react';
import { HomeScrollytelling as Scrollytelling } from './scrollytelling';

// FONT CONFIGURATION
const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

export const revalidate = 60;

export default async function HomePage() {
  let products: ShopifyProduct[] = [];
  try {
    products = await getProducts(20);
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  const mainProduct = products[0] || null;

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen selection:bg-[#ffb300]/30", utoMedium.className)}>
      
      {/* FLOATING UTILITIES - Minimalist, no brutalist shadows */}
      <Link href="#" className="fixed right-8 bottom-10 z-[100] hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur-md shadow-2xl hover:bg-white transition-all">
        <ArrowUp className="w-6 h-6 text-black" />
      </Link>

      {/* HERO SECTION: FULL BLEED EDGE-TO-EDGE */}
      {/* No more rounded boxes or margins. Header seams into this. */}
      <section className="relative w-full h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/girl-on-tennis-with-cacao.png" 
            alt="GUTSY Lifestyle" 
            fill 
            className="object-cover object-center" 
            priority 
          />
          {/* Subtle editorial gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 className={cn("text-[#f3eee4] text-4xl md:text-6xl lowercase mb-0 drop-shadow-md", runWild.className)}>
              finally, a protein that
            </h2>
            <h1 className={cn("text-white text-7xl md:text-[150px] leading-[0.8] uppercase tracking-tighter mb-10 drop-shadow-2xl", utoBlack.className)}>
              FEELS LIGHT
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-lg font-medium uppercase leading-tight mb-12 opacity-90">
              No bloat. No brick in your stomach. <br/> Just enzymatically pre-digested protein.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="#lineup">
                <Button className={cn("h-16 md:h-22 px-14 rounded-full bg-[#f20028] text-white text-2xl font-bold hover:bg-[#ffb300] hover:text-black transition-all duration-500 shadow-xl border-none", utoBold.className)}>
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className={cn("h-16 md:h-22 px-14 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-md text-white text-2xl font-bold hover:bg-white/20 transition-all", utoBold.className)}>
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* BREATHING SPACE - Replaces scrollytelling rounded boxes */}
      <Scrollytelling utoBlack={utoBlack} runWild={runWild} />

      {/* FUN FACT - Now part of the page flow, not a box */}
      <section className="py-40 bg-white">
        <FunFactCarousel utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />
      </section>

      <MarqueeRail />

      {/* LINEUP - Open, clean editorial layout */}
      <section id="lineup" className="py-32 scroll-mt-28 bg-[#f3eee4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end gap-4 mb-24">
            <h2 className={cn("text-7xl md:text-[140px] uppercase tracking-tighter text-black leading-none", utoBlack.className)}>The Lineup</h2>
            <p className={cn("text-5xl md:text-6xl text-[#f20028] mb-2", runWild.className)}>grab yours</p>
          </div>
          {/* No white box container here. The product detail should stand alone on the cream. */}
          {mainProduct && <ProductDetail product={mainProduct} inline />}
        </div>
      </section>

      {/* SOCIAL PROOF - Editorial Scale */}
      <section className="py-40 px-6 bg-black text-[#f3eee4]">
        <div className="max-w-7xl mx-auto">
          <h2 className={cn("text-6xl md:text-[120px] uppercase text-center mb-32 tracking-tighter leading-none", utoBlack.className)}>WHAT PEOPLE SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {[{ quote: "Super light. I can finally have protein without feeling heavy.", author: "Beta Tester, Dubai" }, { quote: "No bloating. First protein powder that doesn't make me regret it.", author: "Beta Tester, Abu Dhabi" }, { quote: "I was skeptical but this actually works. Feels completely different.", author: "Beta Tester, Dubai" }].map((t, i) => (
              <div key={i} className="flex flex-col space-y-8">
                <p className={cn("text-4xl md:text-5xl lowercase leading-tight opacity-80", runWild.className)}>&ldquo;{t.quote}&rdquo;</p>
                <div className="h-[1px] w-16 bg-[#f20028]" />
                <p className={cn("text-sm uppercase tracking-[0.3em] font-black opacity-40", utoBold.className)}>{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON - Minimal, no outer box, just clean typography */}
      <section className="py-40 px-6 max-w-5xl mx-auto">
        <h2 className={cn("text-5xl md:text-[100px] uppercase text-black text-center mb-24 tracking-tighter leading-none", utoBlack.className)}>HOW WE&apos;RE DIFFERENT</h2>
        <div className="space-y-0">
          <div className="grid grid-cols-2 border-b-2 border-black/10 py-8 px-4 uppercase text-xs tracking-widest text-black/40 font-bold">
            <div>Regular Protein</div>
            <div className="text-[#f20028]">GUTSY</div>
          </div>
          {[["Massive molecules gut struggles with", "Pre-digested tiny pieces"], ["Gums and thickeners bloat", "Zero fillers"], ["15+ ingredients unknown", "5 core ingredients"]].map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-black/5 py-16 px-4 text-2xl md:text-3xl font-medium">
              <div className="opacity-20 pr-10">{row[0]}</div>
              <div className="text-black">{row[1]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA - Full Bleed Transformation */}
      <section className="pt-20">
        <div className="bg-[#f20028] py-48 px-6 text-center shadow-inner">
          <h2 className={cn("text-8xl md:text-[200px] uppercase text-[#f3eee4] mb-16 leading-[0.75] tracking-tighter", utoBlack.className)}>
            Ready to <br /> transform?
          </h2>
          <Link href="#lineup">
            <Button className={cn("h-24 px-20 rounded-full bg-white text-[#f20028] text-3xl font-bold hover:scale-105 transition-all shadow-2xl border-none", utoBold.className)}>
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
