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

// BRANDED FONT CONFIGURATION
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
    /* ADJUSTED pt-24 md:pt-32 to pt-32 md:pt-44 to clear the header */
    <div className={cn("bg-[#f3eee4] min-h-screen p-3 md:p-6 lg:p-8 pt-32 md:pt-44 pb-8 space-y-8 selection:bg-[#ffb300] relative [overflow-x:clip]", utoMedium.className)}>

      {/* STICKY DISCOUNTS & UTILITIES */}
      <div className="fixed left-6 bottom-10 z-[100] hidden md:block">
        <Button className={cn("h-14 px-6 rounded-full bg-[#ffb300] text-black text-xl font-black border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-y-1 hover:shadow-none transition-all", utoBold.className)}>
          10% OFF
        </Button>
      </div>

      <Link href="#" className="fixed right-6 bottom-10 z-[100] hidden md:flex h-14 w-14 items-center justify-center rounded-full bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-y-1 hover:shadow-none transition-all">
        <ArrowUp className="w-8 h-8 text-black stroke-[3px]" />
      </Link>

      {/* SEAMLESS HERO SECTION */}
      <section className="relative">
        <div className="bg-[#f20028] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] min-h-[85vh] md:min-h-[90vh] relative overflow-hidden flex items-center border-4 border-black">
          <div className="absolute inset-0 opacity-20 mix-blend-soft-light pointer-events-none z-0">
             <Image src="/images/MARATHON.png" alt="" fill className="object-contain scale-150 md:scale-110 translate-x-1/4" priority />
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 hidden lg:block z-10">
            <Image src="/images/girl-on-tennis-with-cacao.png" alt="GUTSY Lifestyle" fill className="object-cover object-center" priority />
          </div>
          <div className="mx-auto max-w-7xl px-6 md:px-12 relative z-20 w-full py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <h2 className={cn("text-[#f3eee4] text-5xl md:text-8xl lowercase mb-[-1.5rem] md:mb-[-2.5rem] ml-2 md:ml-4 rotate-[-4deg] relative z-30 drop-shadow-sm", runWild.className)}>finally, a protein that</h2>
                <h1 className={cn("text-black text-7xl md:text-[120px] lg:text-[140px] leading-[0.8] uppercase tracking-tighter mb-8 drop-shadow-md", utoBlack.className)}>FEELS LIGHT</h1>
                <p className="text-[#f3eee4] text-xl md:text-2xl max-w-lg font-bold uppercase leading-tight italic mx-auto lg:mx-0 mb-10">No bloat. No brick in your stomach. Just enzymatically pre-digested protein.</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                  <Link href="#lineup" className="w-full sm:w-auto"><Button className={cn("w-full h-16 md:h-20 px-12 rounded-full bg-black text-[#f3eee4] text-2xl font-bold border-4 border-black shadow-[6px_6px_0px_0px_#ffb300] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all", utoBold.className)}>Shop Now</Button></Link>
                  <Link href="/about" className="w-full sm:w-auto"><Button variant="outline" className={cn("w-full h-16 md:h-20 px-12 rounded-full border-4 border-black bg-transparent text-black text-2xl font-bold hover:bg-[#f3eee4] transition-all", utoBold.className)}>Our Story</Button></Link>
                </div>
              </div>
              <div className="lg:hidden w-full aspect-square relative rounded-[20px] overflow-hidden border-4 border-black z-10">
                <Image src="/images/girl-on-tennis-with-cacao.png" alt="GUTSY Lifestyle" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SCROLLYTELLING MASTER SECTION (Replaces Problem, Science, & Inside sections) */}
      <Scrollytelling utoBlack={utoBlack} runWild={runWild} />

      {/* FUN FACT SECTION */}
      <FunFactCarousel utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />

      {/* SLIM MARQUEE RAIL */}
      <div className="-mx-3 md:-mx-6 lg:-mx-4 py-2 md:py-4 overflow-hidden">
        <MarqueeRail />
      </div>

      {/* LINEUP */}
      <section id="lineup" className="py-12 md:py-16 scroll-mt-28">
        <div className="mx-auto max-w-7xl px-2">
          <div className="flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-4 mb-10 md:mb-16 text-black text-center md:text-left">
            <h2 className={cn("text-5xl md:text-8xl uppercase tracking-tight", utoBlack.className)}>The Lineup</h2>
            <p className={cn("text-4xl md:text-5xl text-[#f20028] lowercase", runWild.className)}>grab yours</p>
          </div>
          {mainProduct ? <ProductDetail product={mainProduct} inline /> : <div className="text-center py-12 md:py-16 text-black/20 font-medium">products loading soon</div>}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto bg-[#ffb300] rounded-[30px] md:rounded-[60px] p-8 md:p-12 border-4 border-black shadow-[15px_15px_0px_0px_#000000]">
          <h2 className={cn("text-4xl md:text-7xl uppercase text-black text-center mb-10 md:mb-16", utoBlack.className)}>WHAT PEOPLE SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-black">
            {[{ quote: "Super light. I can finally have protein without feeling heavy.", author: "Beta Tester, Dubai" }, { quote: "No bloating. First protein powder that doesn't make me regret it.", author: "Beta Tester, Abu Dhabi" }, { quote: "I was skeptical but this actually works. Feels completely different.", author: "Beta Tester, Dubai" }].map((t, i) => (
              <div key={i} className="flex flex-col space-y-3 text-center md:text-left">
                <p className={cn("text-3xl md:text-4xl lowercase leading-tight", runWild.className)}>&ldquo;{t.quote}&rdquo;</p>
                <p className={cn("text-xs md:text-sm uppercase tracking-widest font-black", utoBold.className)}>— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 md:py-24 px-4 max-w-5xl mx-auto">
        <h2 className={cn("text-4xl md:text-8xl uppercase text-black text-center mb-10 leading-none", utoBlack.className)}>HOW WE&apos;RE DIFFERENT</h2>
        <div className="border-4 border-black rounded-[20px] overflow-hidden bg-white text-black font-bold">
          <div className="grid grid-cols-2 bg-black text-[#f3eee4] py-6 px-8 uppercase text-xl">
            <div>Regular Protein</div>
            <div className="text-[#ffb300]">GUTSY</div>
          </div>
          {[["Massive molecules gut struggles with", "Pre-digested tiny pieces"], ["Gums and thickeners bloat", "Zero fillers"], ["15+ ingredients unknown", "5 core ingredients"]].map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b-2 border-black/10 py-8 px-8">
              <div className="opacity-50">{row[0]}</div>
              <div className="text-[#f20028]">{row[1]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL & FOOTER */}
      <section className="px-4 md:px-6 max-w-5xl mx-auto"><EmailCapture /></section>
      <section className="pb-8 px-4">
        <div className="bg-black rounded-[30px] md:rounded-[80px] py-20 px-6 text-center border-4 border-[#f3eee4] shadow-[20px_20px_0px_0px_#f20028]">
          <h2 className={cn("text-4xl md:text-9xl uppercase text-[#f3eee4] mb-8", utoBlack.className)}>Ready to <br /> transform?</h2>
          <Link href="#lineup"><Button className={cn("h-16 md:h-20 px-16 rounded-full bg-[#f20028] text-white text-2xl font-bold border-2 border-[#f3eee4] hover:bg-[#ffb300] transition-all", utoBold.className)}>Shop Now</Button></Link>
        </div>
      </section>
    </div>
  );
}
