import { getProducts } from '@/lib/shopify';
import { ProductDetail } from '@/components/product/product-detail';
import { ShopifyProduct } from '@/lib/shopify/types';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

export const revalidate = 60;

export const metadata = {
  title: 'Shop | Gutsy',
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
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#ffb300]/30", utoMedium.className)}>
      
      {/* 1. COMPACT HERO: Seamless & Editorial */}
      <section className="bg-black text-[#f3eee4] pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-3xl">
            {/* Sentence case for a softer, premium tone */}
            <h1 className={cn("text-6xl md:text-[120px] leading-[0.85] tracking-tighter mb-4", utoBlack.className)}>
              The lineup
            </h1>
            <p className={cn("text-3xl md:text-5xl text-[#ffb300] lowercase italic opacity-90", runWild.className)}>
              protein that actually feels light.
            </p>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT DETAIL: Clean Spacing */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-8">
          {mainProduct ? (
            /* Ensure ProductDetail itself has been stripped of brutalist borders and shadows */
            <ProductDetail product={mainProduct} inline />
          ) : (
            <div className="text-center py-20">
              <p className={cn("text-5xl md:text-7xl lowercase text-black/10 mb-4", runWild.className)}>
                products loading soon
              </p>
              <p className="text-lg opacity-40 font-medium tracking-tight">
                check back shortly — we&apos;re stocking the shelves.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
