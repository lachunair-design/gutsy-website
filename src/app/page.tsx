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

const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

export default async function HomePage() {
  let products: ShopifyProduct[] = [];
  try { products = await getProducts(20); } catch (e) { console.error(e); }
  const mainProduct = products[0] || null;

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen selection:bg-[#ffb300]/30", utoMedium.className)}>
      
      {/* 1. SEAMLESS HERO (No boxes, no margins) */}
      <section className="relative w-full h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/girl-on-tennis-with-cacao.png" 
            alt="GUTSY Lifestyle" 
            fill 
            className="object-cover object-center scale-105" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-8">
          <div className="max-w-4xl">
            <h2 className={cn("text-[#f3eee4] text-4xl md:text-6xl lowercase mb-2", runWild.className)}>
              finally, a protein that
            </h2>
            <h1 className={cn("text-white text-8xl md:text-[160px] leading-[0.8] uppercase tracking-tighter mb-10", utoBlack.className)}>
              FEELS LIGHT
            </h1>
            <p className="text-[#f3eee4] text-xl md:text-2xl max-w-md font-medium leading-tight mb-12 opacity-90">
              No bloat. No brick in your stomach. Just enzymatically pre-digested protein.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              {/* BUTTONS: No black shadows. Only soft ambient depth */}
              <Link href="#lineup">
                <Button className={cn("h-16 md:h-20 px-12 rounded-full bg-[#f20028] text-white text-2xl font-bold hover:bg-black transition-all duration-500 shadow-xl border-none", utoBold.className)}>
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className={cn("h-16 md:h-20 px-12 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md text-white text-2xl font-bold hover:bg-white hover:text-black transition-all", utoBold.className)}>
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FIXED SCROLLYTELLING (Passing utoBold to fix the error) */}
      <Scrollytelling utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />

      <section className="py-40 bg-white">
        <FunFactCarousel utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />
      </section>

      <MarqueeRail />

      {/* 3. LINEUP (Open Editorial Layout) */}
      <section id="lineup" className="py-40 bg-[#f3eee4]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-end gap-6 mb-24">
            <h2 className={cn("text-7xl md:text-[140px] uppercase tracking-tighter text-black leading-none", utoBlack.className)}>The Lineup</h2>
            <p className={cn("text-4xl md:text-6xl text-[#f20028] mb-2", runWild.className)}>grab yours</p>
          </div>
          {mainProduct && <ProductDetail product={mainProduct} inline />}
        </div>
      </section>

      {/* 4. COMPARISON (Minimal, no box) */}
      <section className="py-40 px-8 max-w-5xl mx-auto">
        <h2 className={cn("text-6xl md:text-[100px] uppercase text-black text-center mb-24 tracking-tighter leading-none", utoBlack.className)}>HOW WE DIFFERENT</h2>
        <div className="divide-y divide-black/5">
          <div className="grid grid-cols-2 py-8 px-4 uppercase text-[10px] tracking-[0.3em] text-black/40 font-black">
            <div>Regular Protein</div>
            <div className="text-[#f20028]">GUTSY</div>
          </div>
          {[["Massive molecules gut struggles with", "Pre-digested tiny pieces"], ["Gums and thickeners bloat", "Zero fillers"], ["15+ ingredients unknown", "5 core ingredients"]].map((row, i) => (
            <div key={i} className="grid grid-cols-2 py-16 px-4 text-2xl md:text-4xl font-medium hover:bg-black/5 transition-colors">
              <div className="opacity-20 pr-10">{row[0]}</div>
              <div className="text-black">{row[1]}</div>
            </div>
          ))}
        </div>
      </section>

      <EmailCapture />
      
      {/* 5. FOOTER CTA (Edge-to-edge color) */}
      <section className="bg-[#f20028] py-48 text-center">
        <h2 className={cn("text-8xl md:text-[200px] uppercase text-[#f3eee4] mb-16 leading-[0.75] tracking-tighter", utoBlack.className)}>
          Ready to <br /> transform?
        </h2>
        <Link href="#lineup">
          <Button className={cn("h-24 px-24 rounded-full bg-white text-[#f20028] text-3xl font-bold hover:scale-105 transition-all shadow-2xl border-none", utoBold.className)}>
            Shop Now
          </Button>
        </Link>
      </section>
    </div>
  );
}
