'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShopifyProduct } from '@/lib/shopify/types';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/shopify/cart-context';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isLoading } = useCart();
  const firstVariant = product.variants[0];
  const price = product.priceRange.minVariantPrice;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (firstVariant) {
      await addToCart(firstVariant.id);
    }
  };

  return (
    <Link href={`/products/${product.handle}`} className="group block font-uto">
      {/* 1. DIAGNOSTIC IMAGE CONTAINER */}
      <div className="relative aspect-[4/5] overflow-hidden bg-white rounded-[32px] mb-6 shadow-sm border border-black/5 transition-all duration-500 group-hover:shadow-xl group-hover:border-black/10">
        {product.featuredImage ? (
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText || product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-linen text-black/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
        )}

        {/* 2. STATUS BADGE */}
        {!product.availableForSale && (
          <div className="absolute top-4 left-4 bg-linen/90 backdrop-blur-md text-black text-[10px] uppercase tracking-[0.2em] font-black px-4 py-2 rounded-full shadow-sm border border-black/5">
            Sold out
          </div>
        )}

        {/* 3. DIRECT ACTION BUTTON */}
        <div className="absolute inset-x-0 bottom-0 p-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <Button
            onClick={handleAddToCart}
            disabled={!product.availableForSale || isLoading}
            className="w-full h-14 rounded-full bg-black text-linen hover:bg-red border-none shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300 font-bold uppercase tracking-widest text-[10px]"
          >
            {product.availableForSale ? 'Add to cart' : 'Restocking'}
          </Button>
        </div>
      </div>

      {/* 4. CLINICAL TYPOGRAPHY */}
      <div className="px-2 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-black text-black uppercase tracking-tight leading-none group-hover:text-red transition-colors duration-300">
            {product.title}
          </h3>
          <p className="text-sm font-black text-black/30">
            {formatPrice(price.amount, price.currencyCode)}
          </p>
        </div>
        
        <div className="pt-2 flex flex-wrap gap-2">
            <span className="text-[9px] uppercase font-black text-red tracking-[0.15em] px-2.5 py-1 border border-red/20 rounded-full">
                Pre-broken down
            </span>
            <span className="text-[9px] uppercase font-black text-black/40 tracking-[0.15em] px-2.5 py-1 border border-black/10 rounded-full">
                Hydrolyzed
            </span>
        </div>
      </div>
    </Link>
  );
}