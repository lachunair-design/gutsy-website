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
    <div className={cn("bg-[#f3eee4] min-h-screen selection:bg-[#ffb300]", utoMedium.className)}>
      
      {/* FLOATING PREMIUM UTILITIES */}
      <div className="fixed left-6 bottom-10 z-[100] hidden md:block">
        <div className="bg-[#000000] text-[#f3eee4] px-6 py-3 rounded-full text-sm font-bold tracking-widest shadow-2xl">
          10% OFF
        </div>
      </div>

      <Link href="#" className="fixed right-6 bottom-10 z-[100] hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-[#f3eee4] shadow-lg hover:bg-white transition-all">
        <ArrowUp className="w-6 h-6 text-[#000000]" />
      </Link>

      {/* SEAMLESS HERO: FULL BLEED EDGE-TO-EDGE */}
      <section className="relative w-full h-[90vh] md:h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/girl-on-tennis-with-cacao.png" 
            alt="GUTSY Lifestyle" 
            fill 
            className="object-cover object-center" 
            priority 
          />
          {/* Tone-matching overlay for text legibility */}
          <div className="absolute inset-0 bg-[#000000]/10 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 className={cn("text-[#f3eee4] text-4xl md:text-6xl lowercase mb-0 drop-shadow-md", runWild.className)}>
              finally, a protein that
            </h2>
            <h1 className={cn("text-[#f3eee4] text-7xl md:text-[140px] leading-[0.8] uppercase tracking-tighter mb-10 drop-shadow-2xl", utoBlack.className)}>
              FEELS LIGHT
            </h1>
            <p className="text-[#f3eee4] text-xl md:text-2xl max-w-lg font-medium uppercase leading-tight mb-12 drop-shadow-sm">
              No bloat. No brick in your stomach. Just enzymatically pre-digested protein.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="#lineup">
                <Button className={cn("h-16 md:h-20 px-12 rounded-full bg-[#f20028] text-[#f3eee4] text-2xl font-bold hover:bg-[#ffb300] hover:text-[#000000] transition-all duration-300 shadow-xl border-none", utoBold.className)}>
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className={cn("h-16 md:h-20 px-12 rounded-full border-2 border-[#f3eee4]/50 bg-[#f3eee4]/10 backdrop-blur-sm text-[#f3eee4] text-2xl font-bold hover:bg-[#f3eee4] hover:text-[#000000] transition-all", utoBold.className)}>
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* THE SCROLLYTELLING MASTER SECTION */}
      <Scrollytelling utoBlack={utoBlack} runWild={runWild} />

      {/* FUN FACT SECTION */}
      <div className="py-32 bg-[#f3eee4]">
        <FunFactCarousel utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />
      </div>

      <div className="bg-[#f3eee4] py-4">
        <MarqueeRail />
      </div>

      {/* LINEUP - EDITORIAL CENTERING */}
      <section id="lineup" className="py-24 md:py-32 bg-[#f3eee4] scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className={cn("text-7xl md:text-[120px] uppercase tracking-tighter text-[#000000] leading-[0.9]", utoBlack.className)}>The Lineup</h2>
            <p className={cn("text-5xl md:text-6xl text-[#f20028] mt-[-1rem]", runWild.className)}>grab yours</p>
          </div>
          <div className="bg-[#f3eee4] rounded-[60px] p-8 md:p-20 shadow-sm border border-[#000000]/5 transition-all hover:shadow-2xl">
             {mainProduct ? <ProductDetail product={mainProduct} inline /> : <div className="text-center py-24 opacity-20">loading...</div>}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF: PREMIUM SCALE */}
      <section className="py-32 px-6 bg-[#f3eee4]">
        <div className="max-w-7xl mx-auto bg-[#ffb300] rounded-[80px] p-12 md:p-24 shadow-2xl relative overflow-hidden">
          <h2 className={cn("text-6xl md:text-9xl uppercase text-[#000000] text-center mb-24 leading-none tracking-tighter", utoBlack.className)}>WHAT PEOPLE SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-[#000000]">
            {[{ quote: "Super light. I can finally have protein without feeling heavy.", author: "Beta Tester, Dubai" }, { quote: "No bloating. First protein powder that doesn't make me regret it.", author: "Beta Tester, Abu Dhabi" }, { quote: "I was skeptical but this actually works. Feels completely different.", author: "Beta Tester, Dubai" }].map((t, i) => (
              <div key={i} className="flex flex-col space-y-8">
                <p className={cn("text-3xl md:text-4xl lowercase leading-tight opacity-90", runWild.className)}>&ldquo;{t.quote}&rdquo;</p>
                <div className="h-[2px] w-16 bg-[#000000]/10" />
                <p className={cn("text-sm uppercase tracking-[0.25em] font-black opacity-60", utoBold.className)}>{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE: REFINED MINIMALISM */}
      <section className="py-32 px-6 max-w-5xl mx-auto bg-[#f3eee4]">
        <h2 className={cn("text-6xl md:text-9xl uppercase text-[#000000] text-center mb-20 tracking-tighter", utoBlack.className)}>HOW WE&apos;RE DIFFERENT</h2>
        <div className="rounded-[40px] overflow-hidden bg-[#f3eee4] shadow-2xl border border-[#000000]/5">
          <div className="grid grid-cols-2 bg-[#000000] py-10 px-10 uppercase text-xs tracking-[0.4em] text-[#f3eee4]/50 font-bold">
            <div>Regular Protein</div>
            <div className="text-[#ffb300]">GUTSY</div>
          </div>
          {[["Massive molecules gut struggles with", "Pre-digested tiny pieces"], ["Gums and thickeners bloat", "Zero fillers"], ["15+ ingredients unknown", "5 core ingredients"]].map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-[#000000]/5 py-12 px-10 text-xl md:text-2xl font-medium transition-colors hover:bg-[#000000]/5">
              <div className="text-[#000000]/40 pr-10">{row[0]}</div>
              <div className="text-[#000000]">{row[1]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="px-6 mb-20 bg-[#f3eee4]"><EmailCapture /></section>
      
      {/* FINAL CALL TO ACTION */}
      <section className="px-6 pb-16 bg-[#f3eee4]">
        <div className="bg-[#000000] rounded-[80px] md:rounded-[120px] py-40 px-10 text-center shadow-2xl">
          <h2 className={cn("text-7xl md:text-[180px] uppercase text-[#f3eee4] mb-16 leading-[0.8] tracking-[-0.05em]", utoBlack.className)}>
            Ready to <br /> transform?
          </h2>
          <Link href="#lineup">
            <Button className={cn("h-20 px-20 rounded-full bg-[#f20028] text-[#f3eee4] text-2xl font-bold hover:bg-[#ffb300] hover:text-[#000000] hover:scale-105 transition-all shadow-2xl border-none", utoBold.className)}>
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
