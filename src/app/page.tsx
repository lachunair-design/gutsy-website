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
    <div className={cn("bg-[#FCFAF7] min-h-screen text-[#1a1a1a] selection:bg-[#f20028] selection:text-white", utoMedium.className)}>
      
      {/* HERO SECTION - Rhode/Gisou Inspired (Full Bleed Editorial) */}
      <section className="relative h-[92vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Subtle gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent z-10" />
          <Image 
            src="/images/MARATHON.png" 
            alt="Hero Background" 
            fill 
            className="object-cover opacity-20"
            priority 
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <h2 className={cn("text-[#f20028] text-3xl md:text-5xl lowercase mb-2", runWild.className)}>
            finally, a protein that
          </h2>
          <h1 className={cn("text-black text-7xl md:text-[160px] leading-[0.8] uppercase tracking-tighter mb-8", utoBlack.className)}>
            FEELS LIGHT
          </h1>
          <div className="flex flex-col items-center space-y-8">
            <p className="max-w-md text-sm md:text-lg font-bold uppercase tracking-widest leading-tight italic">
              Enzymatically pre-digested protein. <br/> No bloat. No compromise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#lineup">
                <Button className={cn("h-14 px-12 rounded-full bg-black text-white hover:bg-[#f20028] transition-colors duration-500", utoBold.className)}>
                  Shop the Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE - Glossier Style (Minimalist) */}
      <div className="border-y border-black/5 py-4 bg-white">
        <MarqueeRail />
      </div>

      {/* THE PROBLEM - The Whole Truth Inspired (Clean Info-Grid) */}
      <section className="py-24 px-6 md:px-12 bg-[#1a1a1a] text-[#FCFAF7]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className={cn("text-5xl md:text-7xl uppercase text-[#f20028] leading-[0.9]", utoBlack.className)}>
              WHY MOST <br /> PROTEIN SUCKS
            </h2>
            <p className={cn("text-4xl text-[#ffb300] lowercase", runWild.className)}>We fixed it.</p>
          </div>
          <div className="space-y-6 text-lg md:text-xl opacity-90 leading-relaxed font-light">
            <p>Regular protein powder is essentially a "brick." Your stomach struggles to break down massive chains, leading to that heavy, uncomfortable bloat.</p>
            <p>We use enzymes to "pre-digest" those chains into tiny pieces before you take a sip. It's instant bioavailability with zero effort from your gut.</p>
          </div>
        </div>
      </section>

      {/* SCIENCE SECTION - Modern Editorial Split */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto bg-white border border-black/10 rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
          <div className="flex-1 p-12 md:p-20 space-y-10">
            <h2 className={cn("text-5xl md:text-8xl uppercase leading-[0.8]", utoBlack.className)}>the science <br/> of light</h2>
            <div className="space-y-8">
              <div className="group">
                <p className="text-xs uppercase tracking-widest text-[#f20028] mb-2 font-bold">Step 01</p>
                <h3 className="text-2xl uppercase mb-2">The Molecule Problem</h3>
                <p className="opacity-60">Standard proteins are long chains. Your body spends hours—and a lot of energy—trying to unzip them.</p>
              </div>
              <div className="group">
                <p className="text-xs uppercase tracking-widest text-[#f20028] mb-2 font-bold">Step 02</p>
                <h3 className="text-2xl uppercase mb-2">The Gutsy Solution</h3>
                <p className="opacity-60">We "snip" the chains early. Tiny pieces = tiny effort. You get the fuel without the fatigue.</p>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-[#F3F3F3] relative min-h-[400px] flex items-center justify-center p-12">
             <div className="w-full max-w-sm space-y-12">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className={cn("text-2xl lowercase", runWild.className)}>Regular</span>
                    <span className="text-[10px] uppercase tracking-tighter opacity-40 italic">Heavy Load</span>
                  </div>
                  <div className="h-[2px] w-full bg-black/10"><div className="h-full bg-black w-full" /></div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className={cn("text-3xl lowercase text-[#f20028]", runWild.className)}>Gutsy</span>
                    <span className="text-[10px] uppercase tracking-tighter text-[#f20028] font-bold">Weightless</span>
                  </div>
                  <div className="h-[2px] w-full bg-[#f20028]/10"><div className="h-full bg-[#f20028] w-1/3" /></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS - Glossier/Rhode Grid (Minimalist & Clean) */}
      <section className="py-24 px-6 bg-[#FCFAF7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className={cn("text-6xl md:text-9xl uppercase mb-4", utoBlack.className)}>Clean Label</h2>
            <p className={cn("text-4xl md:text-6xl text-[#f20028] lowercase", runWild.className)}>just five things.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {[
              { title: "Hydrolyzed Protein", desc: "Pre-broken down for instant absorption." },
              { title: "Kiwifruit Extract", desc: "Actazin enzymes for smooth digestion." },
              { title: "Adaptogens", desc: "Pure Reishi or Maca. No fillers." },
              { title: "Coconut & Monk Fruit", desc: "Clean sweetness. Zero sugar crash." }
            ].map((ing, i) => (
              <div key={i} className="bg-[#FCFAF7] p-10 hover:bg-white transition-colors cursor-default">
                <h3 className={cn("text-xl uppercase mb-4 h-12 flex items-center", utoBlack.className)}>{ing.title}</h3>
                <p className="text-sm opacity-60 leading-relaxed uppercase tracking-tight font-bold italic">{ing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT LINEUP - Premium PDP integration */}
      <section id="lineup" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className={cn("text-6xl md:text-8xl uppercase tracking-tighter", utoBlack.className)}>The Lineup</h2>
            <p className={cn("text-4xl text-[#f20028] lowercase", runWild.className)}>grab yours</p>
          </div>
          {mainProduct ? (
            <div className="rounded-[40px] border border-black/5 p-4 md:p-12 shadow-sm">
              <ProductDetail product={mainProduct} inline />
            </div>
          ) : (
            <div className="text-center py-20 opacity-20">
              <p className={cn("text-5xl lowercase mb-4", runWild.className)}>Coming Soon</p>
            </div>
          )}
        </div>
      </section>

      {/* SOCIAL PROOF - Editorial Quotes */}
      <section className="py-24 px-6 bg-[#F3F3F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { quote: "Super light. I can finally have protein without feeling heavy.", author: "Beta Tester, Dubai" },
              { quote: "No bloating. First protein powder that doesn't make me regret it.", author: "Beta Tester, Abu Dhabi" },
              { quote: "I was skeptical but this actually works. Feels completely different.", author: "Beta Tester, Dubai" }
            ].map((t, i) => (
              <div key={i} className="space-y-6">
                <div className="flex gap-1 text-[#f20028]">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className={cn("text-3xl lowercase leading-tight", runWild.className)}>&quot;{t.quote}&quot;</p>
                <p className="text-[10px] uppercase tracking-[0.2em] font-black opacity-40">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE - Minimalist Center */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <EmailCapture />
        </div>
      </section>

      {/* FOOTER CTA - Rhode Inspired (Bold but Clean) */}
      <section className="p-6">
        <div className="bg-black rounded-[50px] py-32 px-6 text-center text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className={cn("text-6xl md:text-[120px] uppercase leading-none mb-8", utoBlack.className)}>
              TRUST <br /> YOUR GUT.
            </h2>
            <Link href="#lineup">
              <Button className={cn("h-16 px-16 rounded-full bg-white text-black hover:bg-[#f20028] hover:text-white transition-all duration-500 text-lg uppercase", utoBold.className)}>
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
