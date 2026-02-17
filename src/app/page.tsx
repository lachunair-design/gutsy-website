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
    <div className={cn("bg-[#f3eee4] min-h-screen selection:bg-[#ffb300] [overflow-x:clip]", utoMedium.className)}>

      {/* HERO SECTION - Rhode Inspired: Wide Tracking & Airy Layout */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/MARATHON.png" 
            alt="Gutsy Background" 
            fill 
            className="object-cover opacity-[0.15] scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]" 
            priority 
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 text-center">
          <div className="mb-4">
            <h2 className={cn("text-[#f20028] text-4xl md:text-6xl lowercase tracking-tight motion-safe:animate-fade-in", runWild.className)}>
              finally, a protein that
            </h2>
          </div>
          <div className="mb-10">
            <h1 className={cn("text-black text-7xl md:text-[140px] lg:text-[170px] leading-[0.8] uppercase tracking-[-0.05em] motion-safe:animate-slide-up", utoBlack.className)}>
              FEELS LIGHT
            </h1>
          </div>
          <p className="text-black/80 text-sm md:text-lg max-w-lg mx-auto font-bold uppercase tracking-[0.2em] leading-relaxed mb-12 opacity-0 motion-safe:animate-[fadeIn_1s_ease-out_1s_forwards] italic">
            Enzymatically pre-digested. <br/> Zero bloat. Pure Bioavailability.
          </p>
          <div className="opacity-0 motion-safe:animate-[fadeIn_1s_ease-out_1.2s_forwards]">
            <Link href="#lineup">
              <Button className={cn("h-14 px-14 rounded-full bg-black text-[#f3eee4] text-sm uppercase tracking-widest font-black hover:bg-[#f20028] transition-all duration-500", utoBold.className)}>
                Shop Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE - Soft Tonal Separator */}
      <div className="border-y border-black/5 bg-white/50 backdrop-blur-sm py-4 group">
        <MarqueeRail />
      </div>

      {/* THE PROBLEM - Tonal Layering (Rhode signature) */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-[#0a0a0a] text-[#f3eee4] relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="aspect-[3/4] bg-neutral-900 rounded-[60px] overflow-hidden relative shadow-2xl">
               <Image 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
                alt="Movement lifestyle" 
                fill 
                className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2s]"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-12">
            <h2 className={cn("text-6xl md:text-9xl uppercase text-[#f20028] leading-[0.85] tracking-tighter", utoBlack.className)}>
              WHY MOST <br /> PROTEIN SUCKS
            </h2>
            <div className="h-px w-24 bg-[#ffb300]" />
            <div className="space-y-8 text-xl md:text-3xl leading-snug opacity-90 font-medium max-w-2xl">
              <p>Regular protein powder makes you bloated. That heavy, uncomfortable feeling after every shake isn&apos;t normal.</p>
              <p className={cn("text-5xl md:text-7xl text-[#ffb300] lowercase", runWild.className)}>We fixed it.</p>
              <p className="text-base md:text-lg opacity-60 uppercase tracking-widest leading-relaxed italic">
                It&apos;s because your stomach is struggling to break down massive protein molecules. Most brands add gums and fillers that make it worse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCIENCE SECTION - Interactive Fluid Cards */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 border-b border-black/5 pb-10">
             <h2 className={cn("text-6xl md:text-[100px] uppercase leading-none text-black tracking-tighter", utoBlack.className)}>the science</h2>
             <p className={cn("text-4xl md:text-6xl text-[#f20028] lowercase", runWild.className)}>of light</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="p-12 bg-[#f3eee4] rounded-[60px] space-y-8 group hover:bg-black hover:text-white transition-all duration-700 shadow-sm hover:shadow-2xl">
              <p className="text-xs uppercase tracking-[0.3em] font-black opacity-40">Phase 01</p>
              <h3 className={cn("text-3xl uppercase leading-none", utoBlack.className)}>The Brick</h3>
              <p className="opacity-70 leading-relaxed font-bold italic uppercase text-sm">Regular molecules are massive chains. Your gut works overtime to break them down.</p>
            </div>
            <div className="p-12 bg-[#f20028] text-white rounded-[60px] space-y-8 group hover:scale-[1.02] transition-all duration-700 shadow-xl shadow-red-500/20 lg:-translate-y-6">
              <p className="text-xs uppercase tracking-[0.3em] font-black opacity-60">Phase 02</p>
              <h3 className={cn("text-3xl uppercase leading-none", utoBlack.className)}>The Snip</h3>
              <p className="opacity-90 leading-relaxed font-bold italic uppercase text-sm">Enzymes break those chains into tiny pieces before you take a sip. Instant bioavailability.</p>
            </div>
            <div className="p-12 bg-[#ffb300] text-black rounded-[60px] space-y-8 group hover:bg-black hover:text-[#ffb300] transition-all duration-700 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] font-black opacity-40">Phase 03</p>
              <h3 className={cn("text-3xl uppercase leading-none", utoBlack.className)}>Lightness</h3>
              <p className="opacity-80 leading-relaxed font-bold italic uppercase text-sm">Because the work is already done, your body absorbs it effortlessly. No bloat, just fuel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE SECTION - Rhode Editorial Layout */}
      <section className="py-24 px-6 bg-[#f3eee4]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[80px] overflow-hidden shadow-sm border border-black/5 flex flex-col lg:flex-row min-h-[700px]">
            <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
                <div className="mb-12">
                  <h2 className={cn("text-6xl md:text-8xl uppercase text-black leading-[0.8] mb-4 tracking-tighter", utoBlack.className)}>CORE <br/> ELEMENTS.</h2>
                  <p className={cn("text-4xl md:text-5xl text-[#f20028] lowercase", runWild.className)}>just five.</p>
                </div>
                <div className="space-y-10">
                   {[
                    { title: "Hydrolyzed Protein", desc: "Pre-broken down molecules." },
                    { title: "Actazin Kiwifruit", desc: "Natural enzyme support." },
                    { title: "Functional Adaptogens", desc: "Reishi or Maca root." },
                    { title: "Clean Sweeteners", desc: "Coconut milk & Monk fruit." }
                   ].map((ing, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-black/5 pb-4 group cursor-default">
                      <h4 className={cn("text-lg md:text-xl uppercase tracking-tight group-hover:text-[#f20028] transition-colors", utoBlack.className)}>{ing.title}</h4>
                      <p className="opacity-40 text-[10px] md:text-xs font-black uppercase tracking-widest">{ing.desc}</p>
                    </div>
                   ))}
                </div>
            </div>
            <div className="lg:w-1/2 relative bg-black">
              <Image 
                src="https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=1974&auto=format&fit=crop" 
                alt="Clean ingredients" 
                fill 
                className="object-cover opacity-90 transition-all duration-[3s] hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LINEUP - High-End Product Grid */}
      <section id="lineup" className="py-32 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-24 gap-4">
               <h2 className={cn("text-7xl md:text-9xl uppercase tracking-tighter leading-none", utoBlack.className)}>The Lineup</h2>
               <p className={cn("text-4xl md:text-5xl text-[#f20028] lowercase", runWild.className)}>grab yours</p>
          </div>
          {mainProduct ? (
            <div className="rounded-[80px] bg-[#f3eee4]/50 p-6 md:p-20 hover:bg-[#f3eee4] transition-colors duration-700">
              <ProductDetail product={mainProduct} inline />
            </div>
          ) : (
            <div className="text-center py-24 opacity-10 uppercase tracking-widest font-black text-xs">
              <p>Restocking shelves</p>
            </div>
          )}
        </div>
      </section>

      {/* SOCIAL PROOF - Tonal Minimalist Quotes */}
      <section className="py-32 px-6 bg-[#f3eee4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { quote: "Super light. I can finally have protein without feeling heavy.", author: "Beta Tester, Dubai" },
              { quote: "No bloating. First protein powder that doesn't make me regret it.", author: "Beta Tester, Abu Dhabi" },
              { quote: "I was skeptical but this actually works. Feels completely different.", author: "Beta Tester, Dubai" }
            ].map((t, i) => (
              <div key={i} className="flex flex-col space-y-8">
                <div className="flex gap-1 text-[#f20028]">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-sm">★</span>)}
                </div>
                <p className={cn("text-3xl md:text-4xl lowercase leading-tight text-black", runWild.className)}>&quot;{t.quote}&quot;</p>
                <p className="text-[10px] uppercase tracking-[0.4em] font-black opacity-30">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON - Rhode Style Clean Comparison */}
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <h2 className={cn("text-6xl md:text-9xl uppercase text-black text-center mb-24 leading-[0.8] tracking-tighter", utoBlack.className)}>HOW WE&apos;RE <br/> DIFFERENT</h2>
        <div className="bg-white rounded-[60px] overflow-hidden shadow-2xl shadow-black/5 border border-black/5">
          <div className="grid grid-cols-2 bg-black text-[#f3eee4] py-10 px-12 text-[10px] uppercase tracking-[0.5em] font-black">
            <div className="opacity-40">Industry Standard</div>
            <div className="text-[#ffb300]">GUTSY CORE</div>
          </div>
          {[
            ["Massive molecules", "Pre-digested pieces"],
            ["Gums and thickeners", "Zero fillers"],
            ["15+ ingredients", "5 core ingredients"],
            ["Claims with no science", "Enzymatic science"]
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-black/5 last:border-b-0 py-10 px-12 items-center group hover:bg-[#f3eee4]/50 transition-colors">
              <div className="opacity-30 font-bold uppercase text-[10px] md:text-xs tracking-widest pr-4">{row[0]}</div>
              <div className="text-[#f20028] font-black uppercase text-sm md:text-lg tracking-tight">{row[1]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL CAPTURE - Minimalist Centered */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
           <EmailCapture />
        </div>
      </section>

      {/* FOOTER CTA - Rhode High Impact Typography */}
      <section className="p-6">
        <div className="bg-black rounded-[80px] md:rounded-[150px] py-40 px-6 text-center relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 pointer-events-none transition-transform duration-[10s] group-hover:scale-110">
            <Image src="/images/MARATHON.png" alt="" fill className="object-cover scale-150 rotate-12" />
          </div>
          <div className="relative z-10">
            <h2 className={cn("text-7xl md:text-[160px] lg:text-[220px] uppercase text-[#f3eee4] leading-[0.7] mb-12 tracking-[-0.07em]", utoBlack.className)}>Ready to <br /> transform?</h2>
            <p className={cn("text-5xl md:text-7xl text-[#ffb300] lowercase mb-16", runWild.className)}>Join the gut revolution.</p>
            <Link href="#lineup">
              <Button className={cn("h-20 px-24 rounded-full bg-[#f20028] text-[#f3eee4] text-xl font-black hover:scale-105 transition-all duration-700 shadow-2xl shadow-red-500/30", utoBold.className)}>
                Shop Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
