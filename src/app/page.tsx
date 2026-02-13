import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { MarqueeRail } from '@/components/marquee-rail';
import { getProducts } from '@/lib/shopify';
import { ShopifyProduct } from '@/lib/shopify/types';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

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

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen p-4 md:p-6 lg:p-8 pt-32 pb-8 space-y-8 selection:bg-[#ffb300]", utoMedium.className)}>

      {/* HERO SECTION */}
      <section className="relative">
        <div className="bg-[#f20028] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] min-h-[80vh] relative overflow-hidden flex items-center">
          <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none">
             <Image src="/images/MARATHON.png" alt="" fill className="object-contain scale-125 translate-x-1/4" priority />
          </div>
          <div className="mx-auto max-w-7xl px-8 md:px-12 relative z-10 w-full py-24 text-center md:text-left">
            <div className="max-w-4xl">
              <h2 className={cn("text-[#f3eee4] text-5xl md:text-7xl lowercase mb-[-1rem] md:mb-[-2rem] ml-4 rotate-[-3deg]", runWild.className)}>finally, a protein that</h2>
              <h1 className={cn("text-black text-7xl md:text-[160px] leading-[0.8] uppercase tracking-tight mb-8", utoBlack.className)}>FEELS LIGHT</h1>
              <p className="text-[#f3eee4] text-xl md:text-2xl max-w-xl font-bold uppercase leading-tight italic mx-auto md:mx-0">No bloat. No brick in your stomach. Just enzymatically pre-digested protein.</p>
              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <Link href="/products"><Button className={cn("h-16 px-12 rounded-full bg-black text-[#f3eee4] text-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_#ffb300] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all", utoBold.className)}>Shop Now</Button></Link>
                <Link href="/about"><Button variant="outline" className={cn("h-16 px-12 rounded-full border-2 border-black bg-transparent text-black text-xl font-bold hover:bg-[#f3eee4] transition-all", utoBold.className)}>Our Story</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM SECTION */}
      <section className="py-24 px-6 md:px-12 bg-black rounded-[40px] md:rounded-[60px] text-[#f3eee4] border-4 border-black">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className={cn("text-6xl md:text-8xl uppercase text-[#f20028] leading-none", utoBlack.className)}>WHY MOST <br /> PROTEIN SUCKS</h2>
          <div className="space-y-6 text-xl md:text-2xl leading-relaxed opacity-90 font-medium">
            <p>Regular protein powder makes you bloated. That heavy, uncomfortable feeling after every shake isn&apos;t normal.</p>
            <p>It&apos;s because your stomach is struggling to break down massive protein molecules. Most brands add gums and fillers that make it worse. Then they slap &quot;gut-friendly&quot; on the label and hope you don&apos;t notice it still makes you feel terrible.</p>
            <p className={cn("text-4xl md:text-6xl text-[#ffb300] lowercase pt-4", runWild.className)}>We fixed it.</p>
          </div>
        </div>
      </section>

      {/* SCIENCE SECTION */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl bg-white rounded-[40px] md:rounded-[60px] border-4 border-black overflow-hidden shadow-[15px_15px_0px_0px_#f20028]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 space-y-8 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-[#f3eee4]">
              <h2 className={cn("text-6xl md:text-8xl uppercase leading-none text-black", utoBlack.className)}>the science <br /> of light</h2>
              <p className={cn("text-4xl text-[#f20028] lowercase leading-none", runWild.className)}>how pre-digestion skips the bloat</p>
              <div className="space-y-6">
                <p className="text-xl font-bold uppercase italic text-black">1. Most protein is a &quot;brick.&quot;</p>
                <p className="text-lg opacity-80 text-black font-medium">Regular protein molecules are massive chains. Your gut works overtime to break them down.</p>
                <p className="text-xl font-bold uppercase italic text-[#f20028]">2. We snip them early.</p>
                <p className="text-lg opacity-80 text-black font-medium">Enzymes break those chains into tiny pieces before you take a sip. Instant bioavailability.</p>
              </div>
            </div>
            <div className="bg-black p-8 md:p-16 flex flex-col justify-center items-center text-center space-y-12">
               <div className="w-full">
                  <p className={cn("text-[#f3eee4] text-3xl lowercase opacity-60 mb-4", runWild.className)}>regular protein</p>
                  <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden"><div className="h-full bg-white w-full animate-pulse" /></div>
               </div>
               <div className="w-full">
                  <p className={cn("text-[#f20028] text-4xl lowercase mb-4", runWild.className)}>gutsy pre-digested</p>
                  <div className="h-4 w-full bg-[#f20028]/20 rounded-full overflow-hidden"><div className="h-full bg-[#f20028] w-1/4 animate-bounce" /></div>
               </div>
               <Link href="/about"><Button className={cn("bg-[#f20028] text-white rounded-full px-10 py-6 uppercase font-bold text-lg hover:bg-[#ffb300] hover:text-black transition-all", utoBold.className)}>Full Backstory</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white rounded-[40px] md:rounded-[60px] border-4 border-black shadow-[15px_15px_0px_0px_#ffb300]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className={cn("text-6xl md:text-8xl uppercase text-black leading-none", utoBlack.className)}>FIVE CORE INGREDIENTS.</h2>
            <p className={cn("text-4xl md:text-6xl text-[#f20028] lowercase", runWild.className)}>That&apos;s it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-black">
            {[
              { title: "Hydrolyzed Pea & Rice Protein", desc: "Pre-broken down protein molecules. Your stomach doesn't have to work overtime." },
              { title: "Actazin Kiwifruit Extract", desc: "Natural digestive enzyme support. Keeps things moving smoothly." },
              { title: "Functional Adaptogens", desc: "Reishi (Vanilla Calm) for calm or Maca (Cacao Boost) for energy. No wellness theater." },
              { title: "Monk Fruit & Coconut Milk", desc: "Natural sweetness and texture. No weird aftertaste, no sugar crash, no gums." }
            ].map((ing, i) => (
              <div key={i} className="space-y-2 border-l-4 border-black pl-6">
                <h3 className={cn("text-2xl uppercase", utoBlack.className)}>{ing.title}</h3>
                <p className="text-lg opacity-80 font-medium">{ing.desc}</p>
              </div>
            ))}
          </div>
          <p className={cn("mt-16 text-3xl md:text-5xl text-center max-w-3xl lowercase", runWild.className)}>No gums. No fillers. No thickeners. No chemistry degree required.</p>
        </div>
      </section>

      {/* MARQUEE RAIL */}
      <MarqueeRail />

      {/* LINEUP */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16 text-black">
            <h2 className={cn("text-6xl md:text-8xl uppercase tracking-tight", utoBlack.className)}>The Lineup</h2>
            <p className={cn("text-5xl text-[#f20028] lowercase", runWild.className)}>grab yours</p>
          </div>
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className={cn("text-5xl lowercase text-black/20 mb-8", runWild.className)}>
                products loading soon
              </p>
              <p className="text-lg opacity-60 font-medium">
                Check back shortly — we&apos;re stocking the shelves.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-[#ffb300] rounded-[40px] md:rounded-[60px] p-12 border-4 border-black shadow-[15px_15px_0px_0px_#000000]">
          <h2 className={cn("text-5xl md:text-7xl uppercase text-black text-center mb-16", utoBlack.className)}>WHAT PEOPLE ACTUALLY SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-black">
            {[
              { quote: "Super light. I can finally have protein without feeling heavy.", author: "Beta Tester, Dubai" },
              { quote: "No bloating. First protein powder that doesn't make me regret drinking it.", author: "Beta Tester, Abu Dhabi" },
              { quote: "I was skeptical but this actually works. Feels completely different.", author: "Beta Tester, Dubai" }
            ].map((t, i) => (
              <div key={i} className="flex flex-col space-y-4 text-center md:text-left">
                <p className={cn("text-4xl lowercase leading-tight", runWild.className)}>&quot;{t.quote}&quot;</p>
                <p className={cn("text-sm uppercase tracking-widest font-black", utoBold.className)}>— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className={cn("text-5xl md:text-8xl uppercase text-black text-center mb-16 leading-none", utoBlack.className)}>HOW WE&apos;RE DIFFERENT</h2>
        <div className="border-4 border-black rounded-[2rem] overflow-hidden bg-white text-black font-bold">
          <div className="grid grid-cols-2 border-b-4 border-black text-xl uppercase tracking-widest bg-black text-[#f3eee4] py-6 px-4 md:px-8">
            <div>Regular Protein</div>
            <div className="text-[#ffb300]">GUTSY</div>
          </div>
          {[
            ["Massive molecules your gut struggles with", "Pre-digested into tiny pieces"],
            ["Gums and thickeners that cause bloating", "Zero fillers"],
            ["15+ ingredients you can't pronounce", "5 core ingredients"],
            ["\"Gut-friendly\" claims with no science", "Actual enzymatic pre-digestion"]
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b-2 border-black/10 last:border-b-0 py-8 px-4 md:px-8 text-lg">
              <div className="opacity-50 pr-4">{row[0]}</div>
              <div className="text-[#f20028]">{row[1]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="pb-8">
        <div className="bg-black rounded-[40px] md:rounded-[80px] py-32 px-8 text-center border-4 border-[#f3eee4] shadow-[20px_20px_0px_0px_#f20028]">
          <h2 className={cn("text-5xl md:text-9xl uppercase text-[#f3eee4] leading-tight mb-8", utoBlack.className)}>Ready to <br /> transform?</h2>
          <p className={cn("text-5xl text-[#ffb300] lowercase mb-12", runWild.className)}>Join thousands of humans who trust their gut.</p>
          <Link href="/products"><Button className={cn("h-20 px-16 rounded-full bg-[#f20028] text-[#f3eee4] text-2xl font-bold border-2 border-[#f3eee4] hover:bg-[#ffb300] hover:text-black transition-all", utoBold.className)}>Shop All Products</Button></Link>
        </div>
      </section>
    </div>
  );
}
