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
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#ffb300]", utoMedium.className)}>
      {/* Hero */}
      <section className="bg-black text-[#f3eee4] pt-44 pb-20 border-b-[10px] border-[#f20028]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className={cn("text-6xl md:text-8xl uppercase leading-none tracking-tighter mb-4", utoBlack.className)}>
              The <br /> Lineup
            </h1>
            <p className={cn("text-4xl lowercase leading-none text-[#ffb300]", runWild.className)}>
              protein that actually feels light.
            </p>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {mainProduct ? (
            <ProductDetail product={mainProduct} inline />
          ) : (
            <div className="text-center py-16">
              <p className={cn("text-5xl lowercase text-black/20 mb-8", runWild.className)}>
                products loading soon
              </p>
              <p className="text-lg opacity-60 font-medium">
                Check back shortly — we&apos;re stocking the shelves.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
