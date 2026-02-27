'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShopifyProduct } from '@/lib/shopify/types';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/shopify/cart-context';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product?: ShopifyProduct; // Optional to support manual copy injection
  title?: string;
  price?: string;
  description?: string;
  badges?: string[];
}

export function ProductCard({ 
  product, 
  title, 
  price, 
  description, 
  badges 
}: ProductCardProps) {
  const { addToCart, isLoading } = useCart();
  
  // Use Shopify data if product is provided, otherwise use manual props
  const displayTitle = title || product?.title;
  const displayPrice = price || (product ? formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode) : '');
  const firstVariant = product?.variants[0];

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (firstVariant) {
      await addToCart(firstVariant.id);
    }
  };

  return (
    <div className="group block font-uto bg-white p-8 md:p-10 rounded-[40px] border border-black/5 transition-all duration-500 hover:shadow-xl hover:border-black/10 h-full flex flex-col">
      {/* 1. STATUS BADGES */}
      <div className="flex flex-wrap gap-2 mb-6">
        {badges ? (
          badges.map((badge) => (
            <span key={badge} className="text-[9px] uppercase font-black text-black/40 tracking-[0.15em] px-2.5 py-1 border border-black/10 rounded-full">
              {badge}
            </span>
          ))
        ) : (
          <>
            <span className="text-[9px] uppercase font-black text-red tracking-[0.15em] px-2.5 py-1 border border-red/20 rounded-full">
                Gut-friendly
            </span>
            <span className="text-[9px] uppercase font-black text-black/40 tracking-[0.15em] px-2.5 py-1 border border-black/10 rounded-full">
                100% Vegan
            </span>
          </>
        )}
      </div>

      {/* 2. CLINICAL TYPOGRAPHY & PRICE */}
      <div className="space-y-2 mb-4">
        <h3 className="text-3xl font-black text-black tracking-tight leading-none group-hover:text-red transition-colors duration-300">
          {displayTitle}
        </h3>
        <p className="text-xl font-bold text-red">
          {displayPrice}
        </p>
      </div>

      {/* 3. DECK DESCRIPTION */}
      <p className="text-black/70 text-base leading-relaxed mb-8 flex-grow">
        {description}
      </p>

      {/* 4. DIRECT ACTION BUTTON */}
      <div className="pt-4">
        <Button
          onClick={handleAddToCart}
          disabled={product && !product.availableForSale || isLoading}
          className="w-full h-14 rounded-full bg-black text-linen hover:bg-red border-none shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300 font-bold uppercase tracking-widest text-[10px]"
        >
          {product?.availableForSale === false ? 'Restocking' : 'Add to stash'}
        </Button>
      </div>
    </div>
  );
}