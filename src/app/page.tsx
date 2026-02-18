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
      
      {/* FLOATING UTILITIES - Glassmorphism for Premium Feel */}
      <Link href="#" className="fixed right-8 bottom-10 z-[100] hidden md:flex h-16 w-16 items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-2xl hover:bg-white hover:scale-110 transition-all duration-500">
        <ArrowUp className="w-6 h-6 text-[#000000]" />
      </Link>

      {/* HERO SECTION: THE "EDITORIAL" FOLD */}
      <section className="relative w-full h-screen overflow-hidden flex items-center">
        {/* Full Bleed Background */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/girl-on-tennis-with-cacao.png" 
            alt="GUTSY Lifestyle" 
            fill 
            className="object-cover object-center scale-105" // Slight scale for organic depth
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-3xl">
            <h2 className={cn("text-[#f3eee4] text-4xl md:text-6xl lowercase mb-2 drop-shadow-xl", runWild.className)}>
              finally, a protein that
            </h2>
            <h1 className={cn("text-white text-7xl md:text-[160px] leading-[0.8] uppercase tracking-tighter mb-8 drop-shadow-2xl", utoBlack.className)}>
              FEELS LIGHT
            </h1>
            <p className="text-[#f3eee4] text-xl md:text-2xl max-w-lg font-medium leading-relaxed mb-12 opacity-90">
              No bloat. No brick in your stomach. <br/> Just enzymatically pre-digested protein.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="#lineup">
                <Button className={cn("h-16 md:h-22 px-14 rounded-full bg-[#f20028] text-[#f3eee4] text-2xl font-bold hover:bg-white hover:text-black transition-all duration-500 shadow-[0_20px_50px_rgba(242,0,40,0.3)] border-none", utoBold.className)}>
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className={cn("h-16 md:h-22 px-14 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md text-[#f3eee4] text-2xl font-bold hover:bg-white hover:text-black transition-all duration-500", utoBold.className)}>
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSITION: THE "BREATHING" SPACE */}
      <div className="h-32 bg-gradient-to-b from-transparent to-[#f3eee4]" />

      {/* SCROLLYTELLING MASTER SECTION */}
      <Scrollytelling utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />

      {/* FUN FACT SECTION: INTEGRATED & MINIMAL */}
      <section className="py-40">
        <FunFactCarousel utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />
      </section>

      <div className="py-10">
        <MarqueeRail />
      </div>

      {/* LINEUP: PREMIUM PRODUCT SPOTLIGHT */}
      <section id="lineup" className="py-32 scroll-mt-28">
        <div className="mx-auto max-w-[1440px] px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="space-y-2">
              <h2 className={cn("text-7xl md:text-[140px] uppercase tracking-tighter text-[#000000] leading-none", utoBlack.className)}>
                The Lineup
              </h2>
              <p className={cn("text-5xl md:text-7xl text-[#f20028] lowercase ml-4", runWild.className)}>
                find your flavor
              </p>
            </div>
          </div>
          <div className="bg-white rounded-[80px] p-12 md:p-24 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-black/5">
             {mainProduct ? <ProductDetail product={mainProduct} inline /> : <div className="text-center py-24 opacity-20">loading...</div>}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF: THE LIFESTYLE GALLERY FEEL */}
      <section className="py-40 px-8">
        <div className="max-w-[1600px] mx-auto bg-[#000000] rounded-[100px] p-16 md:p-32 relative overflow-hidden shadow-3xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f20028]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <h2 className={cn("text-6xl md:text-[120px] uppercase text-[#f3eee4] text-center mb-32 leading-none tracking-tighter", utoBlack.className)}>
            Loved by the Gut
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-[#f3eee4]">
            {[{ quote: "Super light. I can finally have protein without feeling heavy.", author: "Beta Tester, Dubai" }, { quote: "No bloating. First protein powder that doesn't make me regret it.", author: "Beta Tester, Abu Dhabi" }, { quote: "I was skeptical but this actually works. Feels completely different.", author: "Beta Tester, Dubai" }].map((t, i) => (
              <div key={i} className="flex flex-col space-y-10 group">
                <p className={cn("text-4xl md:text-5xl lowercase leading-tight opacity-80 group-hover:opacity-100 transition-opacity duration-500", runWild.className)}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="space-y-2">
                  <div className="h-[1px] w-12 bg-[#f20028] transition-all duration-500 group-hover:w-24" />
                  <p className={cn("text-xs uppercase tracking-[0.3em] font-black opacity-40", utoBold.className)}>
                    {t.author}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON: DATA VIZ STYLE */}
      <section className="py-40 px-8 max-w-6xl mx-auto">
        <h2 className={cn("text-5xl md:text-[100px] uppercase text-[#000000] text-center mb-24 tracking-tighter leading-none", utoBlack.className)}>
          How we different
        </h2>
        <div className="rounded-[60px] overflow-hidden bg-white shadow-3xl border border-black/5">
          <div className="grid grid-cols-2 bg-[#f3eee4] py-12 px-12 uppercase text-sm tracking-[0.4em] text-black font-black">
            <div className="opacity-30">Regular Protein</div>
            <div className="text-[#f20028]">GUTSY</div>
          </div>
          {[["Massive molecules gut struggles with", "Pre-digested tiny pieces"], ["Gums and thickeners bloat", "Zero fillers"], ["15+ ingredients unknown", "5 core ingredients"]].map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-black/5 py-16 px-12 text-2xl md:text-3xl font-medium group hover:bg-[#f3eee4]/30 transition-colors">
              <div className="opacity-20 pr-10 group-hover:opacity-40 transition-opacity">{row[0]}</div>
              <div className="text-black group-hover:text-[#f20028] transition-colors">{row[1]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL & FOOTER: THE FINAL TRANSFORMATION */}
      <section className="px-8 mb-40"><EmailCapture /></section>
      
      <section className="px-8 pb-20">
        <div className="bg-[#f20028] rounded-[120px] py-48 px-10 text-center shadow-[0_50px_100px_-20px_rgba(242,0,40,0.4)]">
          <h2 className={cn("text-7xl md:text-[200px] uppercase text-[#f3eee4] mb-20 leading-[0.75] tracking-tighter", utoBlack.className)}>
            Ready to <br /> transform?
          </h2>
          <Link href="#lineup">
            <Button className={cn("h-24 px-24 rounded-full bg-white text-[#f20028] text-3xl font-bold hover:scale-105 transition-all duration-500 shadow-2xl border-none", utoBold.className)}>
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
