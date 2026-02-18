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

// FONTS
const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

export default async function HomePage() {
  let products: ShopifyProduct[] = [];
  try {
    products = await getProducts(20);
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  const mainProduct = products[0] || null;

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen pt-20 md:pt-28 pb-12 selection:bg-[#ffb300]/30", utoMedium.className)}>
      
      {/* FLOATING PREMIUM UTILITIES (Softened) */}
      <div className="fixed left-6 bottom-10 z-[100] hidden md:block">
        <Button className={cn("h-14 px-8 rounded-full bg-[#ffb300] text-black text-lg font-bold shadow-xl hover:scale-105 transition-transform duration-300 border-none", utoBold.className)}>
          10% OFF
        </Button>
      </div>

      <Link href="#" className="fixed right-6 bottom-10 z-[100] hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-lg hover:bg-white transition-all">
        <ArrowUp className="w-6 h-6 text-black" />
      </Link>

      {/* HERO SECTION: EDITORIAL STYLE */}
      <section className="px-3 md:px-6">
        <div className="bg-[#f20028] rounded-[60px] md:rounded-[100px] min-h-[85vh] relative overflow-hidden flex items-center shadow-2xl">
          {/* Subtle Background Texture/Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
             <Image src="/images/girl-on-tennis-with-cacao.png" alt="" fill className="object-cover brightness-[0.85] scale-105" priority />
          </div>
          
          <div className="mx-auto max-w-7xl px-8 md:px-16 relative z-20 w-full py-20">
            <div className="max-w-3xl">
              <h2 className={cn("text-[#f3eee4] text-4xl md:text-6xl lowercase mb-2 drop-shadow-md", runWild.className)}>
                finally, a protein that
              </h2>
              <h1 className={cn("text-[#f3eee4] text-7xl md:text-[130px] leading-[0.85] uppercase tracking-tighter mb-8 drop-shadow-xl", utoBlack.className)}>
                FEELS LIGHT
              </h1>
              <p className="text-[#f3eee4] text-xl md:text-2xl max-w-md font-medium uppercase leading-snug mb-10 opacity-90">
                No bloat. No brick in your stomach. Just enzymatically pre-digested protein.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#lineup">
                  <Button className={cn("h-16 md:h-20 px-12 rounded-full bg-white text-black text-xl font-bold hover:bg-[#ffb300] transition-colors shadow-lg", utoBold.className)}>
                    Shop Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className={cn("h-16 md:h-20 px-12 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md text-white text-xl font-bold hover:bg-white/20 transition-all", utoBold.className)}>
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCROLLYTELLING */}
      <Scrollytelling utoBlack={utoBlack} runWild={runWild} />

      {/* FUN FACT CAROUSEL (Spacing adjusted for "Premium" breathability) */}
      <div className="py-20">
        <FunFactCarousel utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />
      </div>

      <MarqueeRail />

      {/* LINEUP (Softened borders, centered editorial feel) */}
      <section id="lineup" className="py-24 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className={cn("text-6xl md:text-9xl uppercase tracking-tighter text-black", utoBlack.className)}>The Lineup</h2>
            <p className={cn("text-4xl md:text-5xl text-[#f20028] mt-[-1rem]", runWild.className)}>grab yours</p>
          </div>
          <div className="bg-white rounded-[50px] p-8 md:p-16 shadow-sm border border-black/5">
             {mainProduct ? <ProductDetail product={mainProduct} inline /> : <div className="text-center py-16 opacity-20">loading...</div>}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF: THE "POLAROID" LIFESTYLE LOOK */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#ffb300] rounded-[80px] p-12 md:p-24 shadow-2xl relative overflow-hidden">
          <h2 className={cn("text-5xl md:text-8xl uppercase text-black text-center mb-20", utoBlack.className)}>WHAT PEOPLE SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[{ quote: "Super light. I can finally have protein without feeling heavy.", author: "Beta Tester, Dubai" }, { quote: "No bloating. First protein powder that doesn't make me regret it.", author: "Beta Tester, Abu Dhabi" }, { quote: "I was skeptical but this actually works. Feels completely different.", author: "Beta Tester, Dubai" }].map((t, i) => (
              <div key={i} className="flex flex-col space-y-6">
                <p className={cn("text-3xl md:text-4xl lowercase leading-tight text-black/80", runWild.className)}>&ldquo;{t.quote}&rdquo;</p>
                <div className="h-px w-12 bg-black/20" />
                <p className={cn("text-sm uppercase tracking-[0.2em] font-black opacity-60", utoBold.className)}>{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE: REFINED & MINIMAL */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className={cn("text-5xl md:text-8xl uppercase text-black text-center mb-16", utoBlack.className)}>HOW WE&apos;RE DIFFERENT</h2>
        <div className="rounded-[40px] overflow-hidden bg-white shadow-xl border border-black/5">
          <div className="grid grid-cols-2 bg-zinc-950 py-8 px-10 uppercase text-sm tracking-widest text-zinc-400">
            <div>Regular Protein</div>
            <div className="text-[#ffb300]">GUTSY</div>
          </div>
          {[["Massive molecules gut struggles with", "Pre-digested tiny pieces"], ["Gums and thickeners bloat", "Zero fillers"], ["15+ ingredients unknown", "5 core ingredients"]].map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-zinc-100 py-10 px-10 text-lg md:text-xl font-medium">
              <div className="text-zinc-400 pr-4">{row[0]}</div>
              <div className="text-black">{row[1]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL & FOOTER: HIGH-CONTRAST PREMIUM */}
      <section className="px-6 mb-12"><EmailCapture /></section>
      
      <section className="px-6 pb-12">
        <div className="bg-zinc-950 rounded-[60px] md:rounded-[100px] py-32 px-10 text-center shadow-2xl">
          <h2 className={cn("text-6xl md:text-[150px] uppercase text-[#f3eee4] mb-12 leading-[0.85] tracking-tighter", utoBlack.className)}>
            Ready to <br /> transform?
          </h2>
          <Link href="#lineup">
            <Button className={cn("h-20 px-20 rounded-full bg-[#f20028] text-white text-2xl font-bold hover:scale-105 transition-transform shadow-xl", utoBold.className)}>
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
