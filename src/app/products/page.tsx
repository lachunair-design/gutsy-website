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
      
      {/* 1. THE HONEST HERO */}
      <section className="bg-black text-linen pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-[120px] leading-[0.85] tracking-tighter mb-4 font-black uppercase">
              The lineup
            </h1>
            <p className="text-3xl md:text-5xl text-yellow lowercase italic opacity-90 font-runwild">
              mostly just things that leave your gut alone.
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
              <p className="text-5xl md:text-7xl lowercase text-black/10 mb-4 font-runwild font-black">
                loading the bags...
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 3. THE AMAZING VS LESS AMAZING SECTION */}
      <section className="py-24 bg-white border-b border-black/5">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 rounded-[40px] overflow-hidden border border-black/10">
            <div className="bg-white p-10 md:p-16 space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter">What is amazing</h2>
              <ul className="space-y-6 text-lg font-medium">
                <li className="flex gap-4">
                  <span className="text-red font-black">01</span>
                  <p>It actually dissolves. We pre-break the molecules into tiny peptides so they don&apos;t clump into sad, dry flour-balls.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-red font-black">02</span>
                  <p>Zero Bloat. No parade float feelings. No bricks in your stomach. Just protein that goes to work and leaves you alone.</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-red font-black">03</span>
                  <p>Seven Ingredients. If we couldn&apos;t pronounce it we didn&apos;t put it in. That is a promise.</p>
                </li>
              </ul>
            </div>
            <div className="bg-linen p-10 md:p-16 space-y-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter opacity-40">What is less amazing</h2>
              <ul className="space-y-6 text-lg font-medium opacity-60">
                <li className="flex gap-4">
                  <span className="font-black italic">01</span>
                  <p>The price. We use clinical doses of Actazin instead of cheap mystery fillers. It costs more than that giant tub of dust on Amazon.</p>
                </li>
                <li className="flex gap-4">
                  <span className="font-black italic">02</span>
                  <p>It isn&apos;t magic. It is just enzymatic hydrolysis. We didn&apos;t discover a new planet. We just applied logic to a shaker bottle.</p>
                </li>
                <li className="flex gap-4">
                  <span className="font-black italic">03</span>
                  <p>You still have to train. This won&apos;t do the squats for you. We checked and there are still no shortcuts for that.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE NO-LIST */}
      <section className="py-24 bg-black text-linen">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <p className="font-runwild text-5xl md:text-7xl text-yellow mb-4">the strictly-no-thanks list</p>
          <h2 className="font-uto font-black uppercase text-3xl md:text-5xl tracking-tighter mb-16 leading-tight">
            If it didn&apos;t have a specific job to do, <br /> we took it out.
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

      {/* 5. THE SCIENCE (THE BORING PART) */}
      <section className="py-24 md:py-32 bg-linen">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                We did the work <br />
                <span className="text-red font-runwild lowercase text-5xl md:text-7xl">so your gut doesn&apos;t have to.</span>
              </h2>
              
              <div className="space-y-6 text-xl leading-relaxed font-medium">
                <p>
                  Most protein powders hit your stomach like a bag of wet cement. They expect your body to do 100% of the heavy lifting. That usually leads to gas and bloating.
                </p>
                <p>
                  We decided that was a terrible user experience. So we use enzymes to pre-break the protein chains into tiny pieces before they ever reach the bag. It is called being pre-broken down. It is just common sense.
                </p>
              </div>
            </div>

            <div className="relative aspect-square bg-white rounded-[40px] border border-black/5 shadow-sm flex items-center justify-center p-12 overflow-hidden">
               <div className="text-center space-y-4">
                  <Beaker className="w-16 h-16 text-red mx-auto opacity-10" />
                  <p className="font-runwild text-3xl text-black/20">
                    [Visual: A protein chain being snipped by an enzyme]
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-32 bg-black text-linen">
        <div className="mx-auto max-w-4xl px-8 text-center space-y-10">
          <div className="space-y-2">
            <p className="font-runwild text-4xl text-yellow">Ready to feel human again?</p>
            <h3 className="text-6xl md:text-[100px] font-black uppercase tracking-tighter leading-[0.85]">Grab a bag. Or two.</h3>
          </div>
          <button className="bg-red text-linen px-16 h-20 rounded-full font-black uppercase tracking-widest hover:bg-yellow hover:text-black transition-all hover:scale-105 active:scale-95 shadow-xl">
            Go to checkout
          </button>
        </div>
      </section>

    </div>
  );
}