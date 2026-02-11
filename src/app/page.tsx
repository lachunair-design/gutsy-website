'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { ShopifyProduct } from '@/lib/shopify/types';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

// FONT CONFIGURATION - Using direct relative paths from the file location
const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

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
  const featuredProducts = mockProducts;
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
              <h2 className={cn("text-[#f3eee4] text-5xl md:text-7xl lowercase mb-[-1rem] md:mb-[-2rem] ml-4 rotate-[-3deg]", runWild.className)}>
                finally, a protein that
              </h2>
              <h1 className={cn("text-black text-7xl md:text-[160px] leading-[0.8] uppercase tracking-tight mb-8", utoBlack.className)}>
                FEELS LIGHT
              </h1>
              <p className="text-[#f3eee4] text-xl md:text-2xl max-w-xl font-bold uppercase leading-tight italic mx-auto md:mx-0">
                No bloat. No brick in your stomach. Just enzymatically pre-digested protein.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <Link href="/products">
                  <Button className={cn("h-16 px-12 rounded-full bg-black text-[#f3eee4] text-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_#ffb300] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all", utoBold.className)}>
                    Shop Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className={cn("h-16 px-12 rounded-full border-2 border-black bg-transparent text-black text-xl font-bold hover:bg-[#f3eee4] transition-all", utoBold.className)}>
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "No Fillers", desc: "No gums, no PhD required to read our label.", color: "bg-white" },
            { title: "Pre-Digested", desc: "We break it down so your gut doesn't have to.", color: "bg-[#ffb300]" },
            { title: "UAE Shipping", desc: "Free delivery in 48h for orders over 150 AED.", color: "bg-white" }
          ].map((feature, i) => (
            <div key={i} className={cn("p-10 rounded-[2.5rem] border-4 border-black shadow-[8px_8px_0px_0px_#000000] space-y-4", feature.color)}>
              <h3 className={cn("text-3xl uppercase leading-none", utoBlack.className)}>{feature.title}</h3>
              <p className={cn("text-4xl lowercase leading-tight opacity-80", runWild.className)}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LINEUP */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
            <h2 className={cn("text-6xl md:text-8xl uppercase tracking-tight text-black", utoBlack.className)}>
              The Lineup
            </h2>
            <p className={cn("text-5xl text-[#f20028] lowercase", runWild.className)}>grab yours</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="pb-8">
        <div className="bg-black rounded-[40px] md:rounded-[80px] py-32 px-8 text-center border-4 border-[#f3eee4] shadow-[20px_20px_0px_0px_#f20028]">
          <h2 className={cn("text-5xl md:text-9xl uppercase text-[#f3eee4] leading-tight mb-8", utoBlack.className)}>
            Ready to <br /> transform?
          </h2>
          <p className={cn("text-5xl text-[#ffb300] lowercase mb-12", runWild.className)}>
            Join thousands of humans who trust their gut.
          </p>
          <Link href="/products">
            <Button className={cn("h-20 px-16 rounded-full bg-[#f20028] text-[#f3eee4] text-2xl font-bold border-2 border-[#f3eee4] hover:bg-[#ffb300] hover:text-black transition-all", utoBold.className)}>
              Shop All Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
