'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useCart } from '@/lib/shopify/cart-context';
import { formatPrice, cn } from '@/lib/utils';
import { ShopifyProduct } from '@/lib/shopify/types';

// Mock product data for development
const mockProducts: Record<string, ShopifyProduct> = {
  'whey-protein-vanilla': {
    id: '1',
    handle: 'whey-protein-vanilla',
    title: 'Whey Protein - Vanilla',
    description: 'Premium whey protein isolate with natural vanilla flavor. Each serving delivers 25g of high-quality protein to support muscle recovery and growth. Made with grass-fed whey and no artificial sweeteners.',
    descriptionHtml: '<p>Premium whey protein isolate with natural vanilla flavor. Each serving delivers 25g of high-quality protein to support muscle recovery and growth. Made with grass-fed whey and no artificial sweeteners.</p><h3>Key Benefits:</h3><ul><li>25g protein per serving</li><li>Low carb, low fat</li><li>Fast-absorbing whey isolate</li><li>No artificial sweeteners</li><li>Grass-fed whey source</li></ul>',
    availableForSale: true,
    featuredImage: null,
    images: [],
    priceRange: {
      minVariantPrice: { amount: '49.99', currencyCode: 'USD' },
      maxVariantPrice: { amount: '49.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'variant-1',
        title: 'Default',
        availableForSale: true,
        selectedOptions: [],
        price: { amount: '49.99', currencyCode: 'USD' },
        compareAtPrice: null,
      },
    ],
    tags: ['protein', 'whey', 'bestseller'],
    productType: 'Protein',
  },
  'whey-protein-chocolate': {
    id: '2',
    handle: 'whey-protein-chocolate',
    title: 'Whey Protein - Chocolate',
    description: 'Rich chocolate whey protein for optimal muscle recovery. 25g of protein per serving with a delicious taste you will love.',
    descriptionHtml: '<p>Rich chocolate whey protein for optimal muscle recovery. 25g of protein per serving with a delicious taste you will love.</p>',
    availableForSale: true,
    featuredImage: null,
    images: [],
    priceRange: {
      minVariantPrice: { amount: '49.99', currencyCode: 'USD' },
      maxVariantPrice: { amount: '49.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'variant-2',
        title: 'Default',
        availableForSale: true,
        selectedOptions: [],
        price: { amount: '49.99', currencyCode: 'USD' },
        compareAtPrice: null,
      },
    ],
    tags: ['protein', 'whey', 'bestseller'],
    productType: 'Protein',
  },
  'plant-protein-berry': {
    id: '3',
    handle: 'plant-protein-berry',
    title: 'Plant Protein - Berry Blend',
    description: 'Vegan-friendly plant protein with mixed berry flavor. Made from pea and rice protein for a complete amino acid profile.',
    descriptionHtml: '<p>Vegan-friendly plant protein with mixed berry flavor. Made from pea and rice protein for a complete amino acid profile.</p>',
    availableForSale: true,
    featuredImage: null,
    images: [],
    priceRange: {
      minVariantPrice: { amount: '54.99', currencyCode: 'USD' },
      maxVariantPrice: { amount: '54.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'variant-3',
        title: 'Default',
        availableForSale: true,
        selectedOptions: [],
        price: { amount: '54.99', currencyCode: 'USD' },
        compareAtPrice: null,
      },
    ],
    tags: ['protein', 'plant-based', 'vegan'],
    productType: 'Protein',
  },
  'creatine-monohydrate': {
    id: '4',
    handle: 'creatine-monohydrate',
    title: 'Creatine Monohydrate',
    description: 'Pure creatine monohydrate for increased strength, power, and muscle volume. 5g per serving.',
    descriptionHtml: '<p>Pure creatine monohydrate for increased strength, power, and muscle volume. 5g per serving.</p>',
    availableForSale: true,
    featuredImage: null,
    images: [],
    priceRange: {
      minVariantPrice: { amount: '29.99', currencyCode: 'USD' },
      maxVariantPrice: { amount: '29.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'variant-4',
        title: 'Default',
        availableForSale: true,
        selectedOptions: [],
        price: { amount: '29.99', currencyCode: 'USD' },
        compareAtPrice: null,
      },
    ],
    tags: ['creatine', 'performance'],
    productType: 'Performance',
  },
};

export default function ProductPage({ params }: { params: { handle: string } }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isLoading } = useCart();

  // In production, fetch from Shopify. For now, use mock data
  const product = mockProducts[params.handle];

  if (!product) {
    notFound();
  }

  const firstVariant = product.variants[0];
  const price = product.priceRange.minVariantPrice;

  const handleAddToCart = async () => {
    if (firstVariant) {
      await addToCart(firstVariant.id, quantity);
    }
  };

  return (
    <div className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gutsy-gray-100 relative">
            {product.featuredImage ? (
              <Image
                src={product.featuredImage.url}
                alt={product.featuredImage.altText || product.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gutsy-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-24 h-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="mb-4">
              <p className="text-sm text-gutsy-gray-500 uppercase tracking-wider mb-2">
                {product.productType}
              </p>
              <h1 className="text-3xl md:text-4xl font-bold text-gutsy-black">
                {product.title}
              </h1>
            </div>

            <div className="mb-6">
              <p className="text-2xl font-semibold text-gutsy-black">
                {formatPrice(price.amount, price.currencyCode)}
              </p>
            </div>

            <div className="mb-8">
              <p className="text-gutsy-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gutsy-black mb-2">
                Quantity
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-gutsy-gray-300 text-gutsy-gray-600 hover:bg-gutsy-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-12 text-center text-lg font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-gutsy-gray-300 text-gutsy-gray-600 hover:bg-gutsy-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              disabled={!product.availableForSale || isLoading}
              size="lg"
              className="w-full md:w-auto"
            >
              {isLoading
                ? 'Adding...'
                : product.availableForSale
                ? 'Add to Cart'
                : 'Sold Out'}
            </Button>

            {/* Product Features */}
            <div className="mt-8 pt-8 border-t border-gutsy-gray-200">
              <h3 className="text-sm font-semibold text-gutsy-black uppercase tracking-wider mb-4">
                Product Features
              </h3>
              <ul className="space-y-2 text-gutsy-gray-600">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 text-gutsy-accent"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Premium quality ingredients
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 text-gutsy-accent"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Third-party tested
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 text-gutsy-accent"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Free shipping on orders over $50
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 text-gutsy-accent"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  30-day satisfaction guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
