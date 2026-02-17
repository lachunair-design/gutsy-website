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
    <div className={cn("bg-[#f3eee4] min-h-screen selection:bg-[#ffb300] selection:text-black [overflow-x:clip]", utoMedium.className)}>

      {/* HERO SECTION - Rhode Inspired: Clean, High-Impact, Minimalist Overlay */}
      <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/MARATHON.png" 
            alt="Gutsy Background" 
            fill 
            className="object-cover opacity-20 scale-105" 
            priority 
          />
          {/* Subtle gradient to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f3eee4]/20 to-[#f3eee4]" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 text-center">
          <h2 className={cn("text-[#f20028] text-4xl md:text-7xl lowercase mb-2", runWild.className)}>
            finally, a protein that
          </h2>
          <h1 className={cn("text-black text-7xl md:text-[140px] lg:text-[180px] leading-[0.8] uppercase tracking-tighter mb-8", utoBlack.className)}>
            FEELS LIGHT
          </h1>
          <p className="text-black text-lg md:text-2xl max-w-2xl mx-auto font-bold uppercase italic leading-tight mb-12">
            No bloat. No brick in your stomach. <br/> Just enzymatically pre-digested protein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#lineup">
              <Button className={cn("h-16 px-14 rounded-full bg-[#f20028] text-[#f3eee4] text-xl font-bold hover:bg-black transition-all duration-500", utoBold.className)}>
                Shop the Lineup
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE - Glossier Style (Clean separator) */}
      <div className="border-y border-black/10 bg-white py-4">
        <MarqueeRail />
      </div>

      {/* THE PROBLEM - The Whole Truth Inspired (Clean, Informative, Modern) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-black text-[#f3eee4]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className={cn("text-6xl md:text-8xl uppercase text-[#f20028] leading-[0.9] mb-6", utoBlack.className)}>
              WHY MOST <br /> PROTEIN SUCKS
            </h2>
            <p className={cn("text-4xl md:text-6xl text-[#ffb300] lowercase", runWild.className)}>We fixed it.</p>
          </div>
          <div className="space-y-6 text-lg md:text-2xl leading-relaxed opacity-90 font-medium border-l border-[#f20028] pl-8">
            <p>Regular protein powder makes you bloated. That heavy, uncomfortable feeling after every shake isn&apos;t normal.</p>
            <p>It&apos;s because your stomach is struggling to break down massive protein molecules. Most brands add gums and fillers that make it worse.</p>
          </div>
        </div>
      </section>

      {/* SCIENCE SECTION - Gisou Inspired (Editorial Layout with whitespace) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-block px-4 py-1 bg-[#f20028] text-[#f3eee4] text-sm font-bold uppercase tracking-widest">
                The Gutsy Method
              </div>
              <h2 className={cn("text-6xl md:text-[100px] uppercase leading-[0.85] text-black", utoBlack.className)}>
                the science <br /> of light
              </h2>
              <p className={cn("text-4xl md:text-5xl text-[#f20028] lowercase", runWild.className)}>
                how pre-digestion skips the bloat
              </p>
              
              <div className="space-y-12">
                <div className="group">
                  <h3 className="text-xl font-bold uppercase italic text-black mb-2 flex items-center gap-3">
                    <span className="text-[#f20028]">01.</span> Most protein is a &quot;brick.&quot;
                  </h3>
                  <p className="text-lg opacity-60 font-medium leading-snug max-w-md ml-10">
                    Regular protein molecules are massive chains. Your gut works overtime to break them down.
                  </p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase italic text-[#f20028] mb-2 flex items-center gap-3">
                    <span className="text-black">02.</span> We snip them early.
                  </h3>
                  <p className="text-lg opacity-60 font-medium leading-snug max-w-md ml-10">
                    Enzymes break those chains into tiny pieces before you take a sip. Instant bioavailability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#f3eee4] rounded-[40px] p-12 md:p-20 flex flex-col justify-center space-y-12">
               <div className="space-y-4">
                  <p className={cn("text-black text-2xl lowercase opacity-40", runWild.className)}>regular protein</p>
                  <div className="h-1 w-full bg-black/10 overflow-hidden">
                    <div className="h-full bg-black w-full" />
                  </div>
               </div>
               <div className="space-y-4">
                  <p className={cn("text-[#f20028] text-3xl lowercase", runWild.className)}>gutsy pre-digested</p>
                  <div className="h-1 w-full bg-[#f20028]/20 overflow-hidden">
                    <div className="h-full bg-[#f20028] w-1/3 animate-pulse" />
                  </div>
               </div>
               <Link href="/about" className="pt-8">
                <Button variant="outline" className={cn("w-full h-16 rounded-full border-2 border-black bg-transparent text-black text-xl font-bold hover:bg-black hover:text-white transition-all", utoBold.className)}>
                  Full Backstory
                </Button>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE SECTION - Minimalist Grid (Rhode/Glossier) */}
      <section className="py-24 px-6 bg-[#f3eee4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={cn("text-6xl md:text-9xl uppercase text-black leading-[0.8] mb-4", utoBlack.className)}>CORE INGREDIENTS.</h2>
            <p className={cn("text-4xl md:text-6xl text-[#f20028] lowercase", runWild.className)}>no wellness theater.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
            {[
              { title: "Hydrolyzed Pea & Rice", desc: "Pre-broken down protein molecules. Your stomach doesn't have to work overtime." },
              { title: "Actazin Kiwifruit", desc: "Natural digestive enzyme support. Keeps things moving smoothly." },
              { title: "Functional Adaptogens", desc: "Reishi (Vanilla Calm) or Maca (Cacao Boost). High potency extracts." },
              { title: "Coconut & Monk Fruit", desc: "Natural sweetness and texture. No sugar crash, no gums, no fillers." }
            ].map((ing, i) => (
              <div key={i} className="bg-[#f3eee4] p-10 md:p-14 hover:bg-white transition-colors duration-500">
                <h3 className={cn("text-2xl uppercase mb-4", utoBlack.className)}>{ing.title}</h3>
                <p className="text-lg opacity-60 font-medium leading-relaxed">{ing.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <p className={cn("text-4xl md:text-5xl lowercase max-w-3xl mx-auto", runWild.className)}>
                No gums. No fillers. No thickeners. <br className="hidden md:block"/> No chemistry degree required.
             </p>
          </div>
        </div>
      </section>

      {/* LINEUP - Full Focus PDP */}
      <section id="lineup" className="py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className={cn("text-6xl md:text-9xl uppercase tracking-tighter", utoBlack.className)}>The Lineup</h2>
            <p className={cn("text-4xl md:text-5xl text-[#f20028] lowercase", runWild.className)}>choose your fuel</p>
          </div>
          
          {mainProduct ? (
            <div className="bg-[#f3eee4] rounded-[60px] p-8 md:p-16 border border-black/5">
              <ProductDetail product={mainProduct} inline />
            </div>
          ) : (
            <div className="text-center py-24 opacity-20">
              <p className={cn("text-4xl lowercase", runWild.className)}>restocking the shelves...</p>
            </div>
          )}
        </div>
      </section>

      {/* SOCIAL PROOF - Editorial Quotes (Rhode Style) */}
      <section className="py-24 px-6 bg-white border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { quote: "Super light. I can finally have protein without feeling heavy.", author: "Beta Tester, Dubai" },
              { quote: "No bloating. First protein powder that doesn't make me regret it.", author: "Beta Tester, Abu Dhabi" },
              { quote: "I was skeptical but this actually works. Feels completely different.", author: "Beta Tester, Dubai" }
            ].map((t, i) => (
              <div key={i} className="flex flex-col space-y-6">
                <div className="flex gap-1 text-[#f20028]">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
                </div>
                <p className={cn("text-3xl lowercase leading-tight text-black", runWild.className)}>
                  &quot;{t.quote}&quot;
                </p>
                <p className={cn("text-xs uppercase tracking-[0.2em] font-black opacity-40", utoBold.className)}>— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON - The Whole Truth Inspired (High Contrast) */}
      <section className="py-24 px-6 bg-[#f3eee4]">
        <div className="max-w-4xl mx-auto">
            <h2 className={cn("text-5xl md:text-8xl uppercase text-black text-center mb-16 leading-none", utoBlack.className)}>HOW WE&apos;RE <br/> DIFFERENT</h2>
            <div className="bg-white rounded-[40px] overflow-hidden border border-black/10">
              <div className="grid grid-cols-2 bg-black text-[#f3eee4] py-8 px-10">
                <div className={cn("text-sm uppercase tracking-widest opacity-50", utoBold.className)}>Standard</div>
                <div className={cn("text-sm uppercase tracking-widest text-[#ffb300]", utoBold.className)}>GUTSY</div>
              </div>
              {[
                ["Massive molecules", "Pre-digested tiny pieces"],
                ["Gums and thickeners", "Zero fillers"],
                ["15+ ingredients", "5 core ingredients"],
                ["Claims with no science", "Enzymatic science"]
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 border-b border-black/5 last:border-b-0 py-8 px-10 items-center">
                  <div className="text-black/40 font-bold uppercase text-xs md:text-sm pr-4">{row[0]}</div>
                  <div className="text-[#f20028] font-black uppercase text-sm md:text-base">{row[1]}</div>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* EMAIL CAPTURE - Minimalist / Glossier */}
      <section className="py-24 px-6 flex justify-center">
        <div className="w-full max-w-xl">
          <EmailCapture />
        </div>
      </section>

      {/* FOOTER CTA - Rhode Inspired High Contrast */}
      <section className="p-6">
        <div className="bg-black rounded-[60px] md:rounded-[100px] py-32 px-6 text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <Image src="/images/MARATHON.png" alt="" fill className="object-cover scale-150 rotate-12" />
          </div>
          <div className="relative z-10">
            <h2 className={cn("text-6xl md:text-[140px] uppercase text-[#f3eee4] leading-[0.8] mb-12", utoBlack.className)}>Ready to <br /> transform?</h2>
            <p className={cn("text-4xl md:text-6xl text-[#ffb300] lowercase mb-12", runWild.className)}>Join the gut health revolution.</p>
            <Link href="#lineup">
              <Button className={cn("h-20 px-20 rounded-full bg-[#f20028] text-[#f3eee4] text-2xl font-bold hover:scale-105 transition-all duration-300", utoBold.className)}>
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
