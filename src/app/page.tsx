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
      
      {/* FLOATING UTILITIES - Softened & Modern */}
      <div className="fixed left-6 bottom-10 z-[100] hidden md:block">
        <Button className={cn("h-12 px-6 rounded-full bg-black text-white text-sm font-bold tracking-widest shadow-2xl hover:scale-105 transition-all border-none", utoBold.className)}>
          10% OFF
        </Button>
      </div>

      <Link href="#" className="fixed right-6 bottom-10 z-[100] hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:bg-white transition-all">
        <ArrowUp className="w-6 h-6 text-black" />
      </Link>

      {/* SEAMLESS HERO SECTION: FULL BLEED */}
      <section className="relative w-full h-[90vh] md:h-screen flex items-center overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/girl-on-tennis-with-cacao.png" 
            alt="GUTSY Lifestyle" 
            fill 
            className="object-cover object-center" 
            priority 
          />
          {/* Subtle overlay to ensure the "seamless" header text is readable */}
          <div className="absolute inset-0 bg-black/10 z-10" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 className={cn("text-white text-4xl md:text-6xl lowercase mb-0 drop-shadow-md", runWild.className)}>
              finally, a protein that
            </h2>
            <h1 className={cn("text-white text-7xl md:text-[140px] leading-[0.8] uppercase tracking-tighter mb-10 drop-shadow-2xl", utoBlack.className)}>
              FEELS LIGHT
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-lg font-medium uppercase leading-tight mb-12 opacity-90">
              No bloat. No brick in your stomach. Just enzymatically pre-digested protein.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="#lineup">
                <Button className={cn("h-16 md:h-20 px-12 rounded-full bg-[#f20028] text-white text-2xl font-bold hover:bg-[#ffb300] hover:text-black transition-all duration-300 shadow-xl border-none", utoBold.className)}>
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className={cn("h-16 md:h-20 px-12 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-md text-white text-2xl font-bold hover:bg-white/20 transition-all", utoBold.className)}>
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLLYTELLING MASTER SECTION */}
      <Scrollytelling utoBlack={utoBlack} runWild={runWild} />

      {/* FUN FACT SECTION - Added padding for 'Premium' breathability */}
      <div className="py-24 bg-white">
        <FunFactCarousel utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />
      </div>

      {/* MARQUEE RAIL */}
      <div className="py-4 overflow-hidden bg-[#f3eee4]">
        <MarqueeRail />
      </div>

      {/* LINEUP - Clean & Editorial */}
      <section id="lineup" className="py-24 md:py-32 scroll-mt-28 bg-[#f3eee4]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center md:items-baseline gap-4 mb-20 text-black">
            <h2 className={cn("text-6xl md:text-9xl uppercase tracking-tighter", utoBlack.className)}>The Lineup</h2>
            <p className={cn("text-4xl md:text-5xl text-[#f20028] lowercase", runWild.className)}>grab yours</p>
          </div>
          <div className="bg-white rounded-[60px] p-8 md:p-20 shadow-sm border border-black/5">
            {mainProduct ? <ProductDetail product={mainProduct} inline /> : <div className="text-center py-24 opacity-20">products loading soon</div>}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF: THE LIFESTYLE GRID */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto bg-[#ffb300] rounded-[60px] md:rounded-[100px] p-12 md:p-24 shadow-2xl relative overflow-hidden">
          <h2 className={cn("text-5xl md:text-8xl uppercase text-black text-center mb-20 leading-none", utoBlack.className)}>WHAT PEOPLE SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-black">
            {[{ quote: "Super light. I can finally have protein without feeling heavy.", author: "Beta Tester, Dubai" }, { quote: "No bloating. First protein powder that doesn't make me regret it.", author: "Beta Tester, Abu Dhabi" }, { quote: "I was skeptical but this actually works. Feels completely different.", author: "Beta Tester, Dubai" }].map((t, i) => (
              <div key={i} className="flex flex-col space-y-6">
                <p className={cn("text-3xl md:text-4xl lowercase leading-tight opacity-90", runWild.className)}>&ldquo;{t.quote}&rdquo;</p>
                <div className="h-px w-12 bg-black/20" />
                <p className={cn("text-xs md:text-sm uppercase tracking-widest font-black opacity-60", utoBold.className)}>{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE: REFINED & MINIMAL */}
      <section className="py-32 px-6 max-w-5xl mx-auto bg-[#f3eee4]">
        <h2 className={cn("text-5xl md:text-8xl uppercase text-black text-center mb-16 leading-none", utoBlack.className)}>HOW WE&apos;RE DIFFERENT</h2>
        <div className="rounded-[40px] overflow-hidden bg-white shadow-2xl border border-black/5">
          <div className="grid grid-cols-2 bg-zinc-950 py-8 px-10 uppercase text-xs tracking-[0.3em] text-zinc-500 font-bold">
            <div>Regular Protein</div>
            <div className="text-[#ffb300]">GUTSY</div>
          </div>
          {[["Massive molecules gut struggles with", "Pre-digested tiny pieces"], ["Gums and thickeners bloat", "Zero fillers"], ["15+ ingredients unknown", "5 core ingredients"]].map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-zinc-50 py-10 px-10 text-lg md:text-xl font-medium">
              <div className="text-zinc-400 pr-6">{row[0]}</div>
              <div className="text-black">{row[1]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL & FOOTER */}
      <section className="px-6 mb-16 bg-[#f3eee4]"><EmailCapture /></section>
      
      <section className="px-6 pb-12 bg-[#f3eee4]">
        <div className="bg-zinc-950 rounded-[60px] md:rounded-[120px] py-32 px-10 text-center shadow-2xl">
          <h2 className={cn("text-6xl md:text-[160px] uppercase text-[#f3eee4] mb-12 leading-[0.8] tracking-tighter", utoBlack.className)}>
            Ready to <br /> transform?
          </h2>
          <Link href="#lineup">
            <Button className={cn("h-20 px-20 rounded-full bg-[#f20028] text-white text-2xl font-bold hover:bg-[#ffb300] hover:text-black hover:scale-105 transition-all shadow-xl", utoBold.className)}>
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
