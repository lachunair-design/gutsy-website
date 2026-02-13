'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/shopify/cart-context';
import { formatPrice, cn } from '@/lib/utils';
import { ShopifyProduct } from '@/lib/shopify/types';
import localFont from 'next/font/local';

const utoBlack = localFont({ src: '../../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../../public/fonts/RunWild.ttf' });

interface ProductDetailsProps {
  product: ShopifyProduct;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { addToCart, isLoading } = useCart();

  const firstVariant = product.variants[0];
  const price = product.priceRange.minVariantPrice;
  const images = product.images.length > 0 ? product.images : product.featuredImage ? [product.featuredImage] : [];

  const handleAddToCart = async () => {
    if (firstVariant) {
      await addToCart(firstVariant.id, quantity);
    }
  };

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#ffb300]", utoMedium.className)}>
      {/* Breadcrumb */}
      <div className="pt-36 pb-4 px-6 lg:px-8 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold opacity-60">
          <Link href="/" className="hover:text-[#f20028] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#f20028] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#f20028]">{product.title}</span>
        </nav>
      </div>

      {/* Product Section */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square bg-white rounded-[2rem] border-4 border-black shadow-[10px_10px_0px_0px_#000000] overflow-hidden">
                {images.length > 0 ? (
                  <Image
                    src={images[selectedImageIndex].url}
                    alt={images[selectedImageIndex].altText || product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#f3eee4]">
                    <p className={cn("text-4xl lowercase text-black/20", runWild.className)}>coming soon</p>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-3">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImageIndex(i)}
                      className={cn(
                        "relative w-20 h-20 rounded-xl border-2 overflow-hidden transition-all",
                        selectedImageIndex === i
                          ? "border-[#f20028] shadow-[3px_3px_0px_0px_#f20028]"
                          : "border-black/20 hover:border-black"
                      )}
                    >
                      <Image src={img.url} alt={img.altText || ''} fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <p className={cn("text-sm uppercase tracking-[0.2em] font-bold text-[#f20028] mb-2", utoBold.className)}>
                {product.productType}
              </p>
              <h1 className={cn("text-5xl md:text-7xl uppercase leading-none mb-4", utoBlack.className)}>
                {product.title}
              </h1>
              <p className={cn("text-3xl lowercase text-[#f20028] mb-8", runWild.className)}>
                {formatPrice(price.amount, price.currencyCode)}
              </p>

              <p className="text-lg opacity-80 font-medium leading-relaxed mb-10">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className={cn("block text-xs uppercase tracking-[0.2em] font-bold mb-3", utoBold.className)}>
                  Quantity
                </label>
                <div className="inline-flex items-center bg-white border-2 border-black rounded-full p-1 shadow-[4px_4px_0px_0px_#000000]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:text-[#f20028] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className={cn("w-10 text-center text-lg", utoBold.className)}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:text-[#f20028] transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={!product.availableForSale || isLoading}
                className={cn(
                  "w-full md:w-auto h-16 px-16 rounded-full text-xl uppercase font-bold border-2 border-black transition-all",
                  product.availableForSale
                    ? "bg-[#f20028] text-[#f3eee4] shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#000000]"
                    : "bg-black/20 text-black/40 cursor-not-allowed",
                  utoBold.className
                )}
              >
                {isLoading ? 'Adding...' : product.availableForSale ? 'Add to Cart' : 'Sold Out'}
              </button>

              {/* Trust Badges */}
              <div className="mt-10 pt-8 border-t-2 border-black/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: '100% Vegan', icon: '🌱' },
                    { label: 'No Gums or Fillers', icon: '✓' },
                    { label: 'Free Shipping 150+ AED', icon: '📦' },
                    { label: '30-Day Guarantee', icon: '🛡' },
                  ].map((badge) => (
                    <div key={badge.label} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
                      <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full border-2 border-black text-xs">
                        {badge.icon}
                      </span>
                      {badge.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
