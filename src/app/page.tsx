import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { getProducts } from '@/lib/shopify';
import { ShopifyProduct } from '@/lib/shopify/types';

// Mock products for development (remove when Shopify is connected)
const mockProducts: ShopifyProduct[] = [
  {
    id: '1',
    handle: 'whey-protein-vanilla',
    title: 'Whey Protein - Vanilla',
    description: 'Premium whey protein with natural vanilla flavor',
    descriptionHtml: '<p>Premium whey protein with natural vanilla flavor</p>',
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
    tags: ['protein', 'whey'],
    productType: 'Protein',
  },
  {
    id: '2',
    handle: 'whey-protein-chocolate',
    title: 'Whey Protein - Chocolate',
    description: 'Rich chocolate whey protein for muscle recovery',
    descriptionHtml: '<p>Rich chocolate whey protein for muscle recovery</p>',
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
    tags: ['protein', 'whey'],
    productType: 'Protein',
  },
  {
    id: '3',
    handle: 'plant-protein-berry',
    title: 'Plant Protein - Berry Blend',
    description: 'Vegan-friendly plant protein with mixed berry flavor',
    descriptionHtml: '<p>Vegan-friendly plant protein with mixed berry flavor</p>',
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
  {
    id: '4',
    handle: 'creatine-monohydrate',
    title: 'Creatine Monohydrate',
    description: 'Pure creatine monohydrate for strength and power',
    descriptionHtml: '<p>Pure creatine monohydrate for strength and power</p>',
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
];

async function getFeaturedProducts(): Promise<ShopifyProduct[]> {
  try {
    const products = await getProducts(4);
    return products.length > 0 ? products : mockProducts;
  } catch (error) {
    // Return mock products if Shopify is not configured
    return mockProducts;
  }
}

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gutsy-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-24 md:py-32 lg:py-40">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Fuel Your
                <br />
                <span className="text-gutsy-accent">Ambition</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gutsy-gray-300 max-w-xl">
                Premium protein supplements crafted for those who dare to push their
                limits. Clean ingredients, maximum results.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="bg-white text-gutsy-black hover:bg-gutsy-gray-100 w-full sm:w-auto"
                  >
                    Shop Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-gutsy-black w-full sm:w-auto"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-gutsy-black via-gutsy-black to-gutsy-gray-900 -z-10" />
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gutsy-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gutsy-black text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gutsy-black mb-2">
                Clean Ingredients
              </h3>
              <p className="text-gutsy-gray-600">
                No fillers, no artificial additives. Just pure, effective nutrition.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gutsy-black text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gutsy-black mb-2">
                Maximum Performance
              </h3>
              <p className="text-gutsy-gray-600">
                Scientifically formulated for optimal muscle recovery and growth.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gutsy-black text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gutsy-black mb-2">
                Fast Shipping
              </h3>
              <p className="text-gutsy-gray-600">
                Free shipping on orders over $50. Get your supplements delivered fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gutsy-black">
              Featured Products
            </h2>
            <Link
              href="/products"
              className="text-sm font-medium text-gutsy-gray-600 hover:text-gutsy-black transition-colors"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gutsy-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Training?
          </h2>
          <p className="text-lg text-gutsy-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of athletes who trust Gutsy for their nutrition needs.
            Start your journey today.
          </p>
          <Link href="/products">
            <Button
              size="lg"
              className="bg-white text-gutsy-black hover:bg-gutsy-gray-100"
            >
              Shop All Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
