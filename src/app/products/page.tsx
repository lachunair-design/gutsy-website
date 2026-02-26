import { getProducts } from '@/lib/shopify';
import { ProductDetail } from '@/components/product/product-detail';
import { ShopifyProduct } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Beaker, Wind, Zap, ShieldCheck } from 'lucide-react';

export const revalidate = 60;

export const metadata = {
  title: 'Shop | GUTSY',
  description: 'Protein that actually feels light. No bloat, no fillers, just better engineering.',
};

export default async function ProductsPage() {
  let products: ShopifyProduct[] = [];
  try {
    products = await getProducts(20);
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  const mainProduct = products[0] || null;

  return (
    <div className="bg-linen min-h-screen text-black selection:bg-yellow/30 font-uto">
      
      {/* 1. COMPACT HERO */}
      <section className="bg-black text-linen pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-[120px] leading-[0.85] tracking-tighter mb-4 font-black uppercase">
              The lineup
            </h1>
            <p className="text-3xl md:text-5xl text-yellow lowercase italic opacity-90 font-runwild">
              protein that actually feels light.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT DETAIL */}
      <section className="py-16 md:py-24 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-8">
          {mainProduct ? (
            <ProductDetail product={mainProduct} inline />
          ) : (
            <div className="text-center py-20">
              <p className="text-5xl md:text-7xl lowercase text-black/10 mb-4 font-runwild">
                getting the bags ready...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. THE DIAGNOSTIC: Why we built this */}
      <section className="py-24 md:py-32 bg-linen overflow-hidden">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Because your gut <br />
                <span className="text-red font-runwild lowercase text-5xl md:text-7xl">shouldn&apos;t have to struggle.</span>
              </h2>
              
              <div className="space-y-6 text-xl leading-relaxed opacity-90 font-medium">
                <p>
                  Most protein powders hit your stomach like a bag of wet cement. They rely on your gut to do 100% of the heavy lifting, which usually leads to that lovely &quot;parade float&quot; feeling Lakshmi lived with for two years.
                </p>
                <p>
                  We realized the problem was molecular. Standard protein is just too clunky. So, we use enzymes to <span className="text-red font-black uppercase italic">pre-break down</span> the protein into tiny pieces before you even take a sip. 
                </p>
                <p>
                  It’s not magic—it&apos;s just better engineering so your body doesn&apos;t have to wrestle with your shake.
                </p>
              </div>

              {/* ICON GRID */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/5">
                <div className="flex items-start gap-4">
                  <Wind className="w-8 h-8 text-red shrink-0" />
                  <div>
                    <p className="font-black uppercase text-sm tracking-widest">Zero Bloat</p>
                    <p className="text-sm opacity-60">Pre-broken down for instant comfort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-red shrink-0" />
                  <div>
                    <p className="font-black uppercase text-sm tracking-widest">Fast Track</p>
                    <p className="text-sm opacity-60">Absorbs faster than standard whey.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* DIAGNOSTIC VISUAL */}
            <div className="relative aspect-square bg-white rounded-[40px] overflow-hidden border border-black/5 shadow-sm flex items-center justify-center p-12">
               <div className="text-center space-y-4">
                  <Beaker className="w-16 h-16 text-red mx-auto opacity-20" />
                  <p className="font-runwild text-3xl text-black/30">
                    [Visual: Enzymatic breakdown from clunky chains to light peptides]
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE &quot;NO-LIST&quot;: What we took out */}
      <section className="py-24 bg-black text-linen">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <p className="font-runwild text-5xl md:text-7xl text-yellow mb-4">the strictly-no-thanks list</p>
          <h2 className="font-uto font-black uppercase text-3xl md:text-5xl tracking-tighter mb-16">
            If Lakshmi couldn&apos;t pronounce it, <br /> Sujith took it out.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {['No Gums', 'No Fillers', 'No Soy', 'No Dairy'].map((item) => (
              <div key={item} className="group flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-6 group-hover:border-yellow group-hover:bg-yellow/5 transition-all">
                  <ShieldCheck className="w-10 h-10 text-yellow group-hover:scale-110 transition-transform" />
                </div>
                <p className="font-black uppercase tracking-[0.2em] text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-32 bg-linen border-t border-black/5">
        <div className="mx-auto max-w-4xl px-8 text-center space-y-10">
          <div className="space-y-2">
            <p className="font-runwild text-4xl text-red">Ready to actually feel light?</p>
            <h3 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">Grab your bag.</h3>
          </div>
          <button className="bg-red text-linen px-16 h-20 rounded-full font-black uppercase tracking-widest hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-xl">
            Shop the lineup
          </button>
        </div>
      </section>

    </div>
  );
}