'use client';

import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { ShopifyProduct } from '@/lib/shopify/types';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { Observer } from 'gsap/dist/Observer';

// FONT CONFIGURATION
const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

if (typeof window !== "undefined") {
  gsap.registerPlugin(Observer);
}

const mockProducts: ShopifyProduct[] = [
  {
    id: '1',
    handle: 'vanilla-calm',
    title: 'Vanilla Calm',
    description: 'Enzymatically pre-digested protein with Reishi.',
    descriptionHtml: '<p>Enzymatically pre-digested protein with Reishi.</p>',
    availableForSale: true,
    featuredImage: null,
    images: [],
    priceRange: {
      minVariantPrice: { amount: '185.00', currencyCode: 'AED' },
      maxVariantPrice: { amount: '185.00', currencyCode: 'AED' },
    },
    variants: [{ id: 'v1', title: 'Default', availableForSale: true, selectedOptions: [], price: { amount: '185.00', currencyCode: 'AED' }, compareAtPrice: null }],
    tags: ['protein'],
    productType: 'Protein',
  },
  {
    id: '2',
    handle: 'cacao-boost',
    title: 'Cacao Boost',
    description: 'Enzymatically pre-digested protein with Maca.',
    descriptionHtml: '<p>Enzymatically pre-digested protein with Maca.</p>',
    availableForSale: true,
    featuredImage: null,
    images: [],
    priceRange: {
      minVariantPrice: { amount: '185.00', currencyCode: 'AED' },
      maxVariantPrice: { amount: '185.00', currencyCode: 'AED' },
    },
    variants: [{ id: 'v2', title: 'Default', availableForSale: true, selectedOptions: [], price: { amount: '185.00', currencyCode: 'AED' }, compareAtPrice: null }],
    tags: ['protein'],
    productType: 'Protein',
  }
];

export default function HomePage() {
  const railRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollingText = gsap.utils.toArray('.rail h4') as HTMLElement[];
      if (!scrollingText.length) return;

      const tl = horizontalLoop(scrollingText, {
        repeat: -1,
        paddingRight: 50,
        speed: 1.5,
      });

      Observer.create({
        onChangeY(self) {
          let factor = 2.5;
          if (self.deltaY < 0) {
            factor *= -1;
          } 
          gsap.timeline({
            defaults: { ease: "none" }
          })
          .to(tl, { timeScale: factor * 2.5, duration: 0.2, overwrite: true })
          .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
        }
      });
    }, railRef);

    return () => ctx.revert();
  }, []);

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

      {/* SCIENCE SECTION */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl bg-white rounded-[40px] md:rounded-[60px] border-4 border-black overflow-hidden shadow-[15px_15px_0px_0px_#f20028]">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-16 space-y-8 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-[#f3eee4]">
              <h2 className={cn("text-6xl md:text-8xl uppercase leading-none text-black", utoBlack.className)}>the science <br /> of light</h2>
              <p className={cn("text-4xl text-[#f20028] lowercase leading-none", runWild.className)}>how pre-digestion skips the bloat</p>
              <div className="space-y-6">
                <p className="text-xl font-bold uppercase italic text-black">1. Most protein is a &quot;brick.&quot;</p>
                <p className="text-lg opacity-80 text-black">Regular protein molecules are massive chains. Your gut works overtime to break them down.</p>
                <p className="text-xl font-bold uppercase italic text-[#f20028]">2. We snip them early.</p>
                <p className="text-lg opacity-80 text-black">Enzymes break those chains into tiny pieces before you take a sip. Instant bioavailability.</p>
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

      {/* MARQUEE RAIL */}
      <section ref={railRef} className="py-12 bg-black -mx-4 md:-mx-8 overflow-hidden border-y-4 border-black">
        <div className="rail flex whitespace-nowrap py-4">
          {[...Array(10)].map((_, i) => (
            <h4 key={i} className={cn("text-[#f3eee4] text-6xl md:text-8xl uppercase tracking-tighter inline-block px-8", utoBlack.className)}>
              FEELS LIGHT <span className="text-[#f20028]">—</span> NO BLOAT <span className="text-[#ffb300]">—</span> PRE-DIGESTED <span className="text-[#f20028]">—</span>
            </h4>
          ))}
        </div>
      </section>

      {/* LINEUP */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16 text-black">
            <h2 className={cn("text-6xl md:text-8xl uppercase tracking-tight", utoBlack.className)}>The Lineup</h2>
            <p className={cn("text-5xl text-[#f20028] lowercase", runWild.className)}>grab yours</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
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

// TYPED GSAP HELPER FUNCTION
function horizontalLoop(items: HTMLElement[], config: any) {
  let tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      if (tl.duration()) {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      }
    }
  });
  
  let length = items.length,
    startX = items[0].offsetLeft,
    times: number[] = [],
    widths: number[] = [],
    xPercents: number[] = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1),
    totalWidth: number,
    curX: number,
    distanceToStart: number,
    distanceToLoop: number,
    item: HTMLElement,
    i: number;

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px") as string) / w * 100 + (gsap.getProperty(el, "xPercent") as number));
      return xPercents[i];
    }
  });

  gsap.set(items, { x: 0 });
  totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], "scaleX") as number) + (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
    tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
      .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  return tl;
}
