import { getProducts } from '@/lib/shopify';
import { ProductDetail } from '@/components/product/product-detail';
import { ShopifyProduct } from '@/lib/shopify/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Beaker, Wind, Zap, ShieldCheck } from 'lucide-react';

// Using your established brand tokens from tailwind.config.ts
export const revalidate = 60;

export const metadata = {
  title: 'Shop | GUTSY',
  description: 'Enzymatically pre-digested protein that actually feels light. Shop Vanilla Calm and Cacao Boost.',
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
                products loading soon
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. THE SCIENCE OF MANNERS: Conversational Science Section */}
      <section className="py-24 md:py-32 bg-linen overflow-hidden">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Because your gut <br />
                <span className="text-red font-runwild lowercase text-5xl md:text-7xl">has enough to do.</span>
              </h2>
              
              <div className="space-y-6 text-xl leading-relaxed opacity-90">
                <p>
                  Most protein powders hit your stomach like a bag of wet cement. They rely on your gut to do 100% of the heavy lifting, which usually leads to that lovely &quot;parade float&quot; feeling Lakshmi knows all too well.
                </p>
                <p className="font-crunold italic text-2xl text-black">
                  We decided to give the protein some manners.
                </p>
                <p>
                  By using enzymes to enzymatically pre-digest our pea and rice protein, we break down the complex chains before you even take a sip. It’s not a &quot;hack&quot;—it&apos;s just science doing the work so you don&apos;t have to.
                </p>
              </div>

              {/* ICON GRID */}
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="flex items-start gap-4">
                  <Wind className="w-8 h-8 text-red shrink-0" />
                  <div>
                    <p className="font-black uppercase text-sm tracking-widest">Zero Bloat</p>
                    <p className="text-sm opacity-60">Pre-digested for instant comfort.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-8 h-8 text-red shrink-0" />
                  <div>
                    <p className="font-black uppercase text-sm tracking-widest">Instant Labs</p>
                    <p className="text-sm opacity-60">Absorbs faster than standard whey.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ANIMATED IMAGE PLACEHOLDER */}
            <div className="relative aspect-square bg-gutsy-gray-100 rounded-3xl overflow-hidden border-2 border-black/5 group">
               <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-runwild text-3xl text-black/20 group-hover:scale-110 transition-transform duration-500">
                    Science Visual Placeholder
                  </p>
               </div>
               {/* When you have the asset:
                  <Image src="/images/science-molecule.png" fill className="object-cover" alt="Molecular breakdown" /> 
               */}
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE &quot;NO-LIST&quot;: Clinical Integrity Section */}
      <section className="py-24 bg-black text-linen">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <h2 className="font-runwild text-5xl md:text-7xl text-yellow mb-4">the strictly-no-thanks list</h2>
          <p className="font-uto font-black uppercase text-3xl md:text-5xl tracking-tighter mb-16">
            If Lakshmi couldn&apos;t pronounce it, <br /> Sujith took it out.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {['No Gums', 'No Fillers', 'No Soy', 'No Dairy'].map((item) => (
              <div key={item} className="group">
                <ShieldCheck className="w-12 h-12 text-yellow mx-auto mb-4 group-hover:rotate-12 transition-transform" />
                <p className="font-black uppercase tracking-widest">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 bg-linen">
        <div className="mx-auto max-w-4xl px-8 text-center space-y-8">
          <p className="font-runwild text-4xl text-red">Ready to feel light?</p>
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">Start your recovery.</h3>
          <button className="bg-red text-linen px-12 py-6 rounded-full font-black uppercase tracking-widest hover:bg-yellow hover:text-black transition-all transform hover:scale-105 active:scale-95">
            Shop the lineup
          </button>
        </div>
      </section>

    </div>
  );
}