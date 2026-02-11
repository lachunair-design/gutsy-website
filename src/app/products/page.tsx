import { getProducts } from '@/lib/shopify';
import { ProductCard } from '@/components/product/product-card';
import { ShopifyProduct } from '@/lib/shopify/types';

// Mock products for development
const mockProducts: ShopifyProduct[] = [
  {
    id: '1',
    handle: 'whey-protein-vanilla',
    title: 'Whey Protein - Vanilla',
    description: 'Premium whey protein with natural vanilla flavor. 25g protein per serving.',
    descriptionHtml: '<p>Premium whey protein with natural vanilla flavor. 25g protein per serving.</p>',
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
  {
    id: '2',
    handle: 'whey-protein-chocolate',
    title: 'Whey Protein - Chocolate',
    description: 'Rich chocolate whey protein for muscle recovery. 25g protein per serving.',
    descriptionHtml: '<p>Rich chocolate whey protein for muscle recovery. 25g protein per serving.</p>',
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
  {
    id: '3',
    handle: 'plant-protein-berry',
    title: 'Plant Protein - Berry Blend',
    description: 'Vegan-friendly plant protein with mixed berry flavor. 22g protein per serving.',
    descriptionHtml: '<p>Vegan-friendly plant protein with mixed berry flavor. 22g protein per serving.</p>',
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
    description: 'Pure creatine monohydrate for strength and power. 5g per serving.',
    descriptionHtml: '<p>Pure creatine monohydrate for strength and power. 5g per serving.</p>',
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
  {
    id: '5',
    handle: 'pre-workout-citrus',
    title: 'Pre-Workout - Citrus Blast',
    description: 'Energy-boosting pre-workout formula with natural caffeine.',
    descriptionHtml: '<p>Energy-boosting pre-workout formula with natural caffeine.</p>',
    availableForSale: true,
    featuredImage: null,
    images: [],
    priceRange: {
      minVariantPrice: { amount: '39.99', currencyCode: 'USD' },
      maxVariantPrice: { amount: '39.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'variant-5',
        title: 'Default',
        availableForSale: true,
        selectedOptions: [],
        price: { amount: '39.99', currencyCode: 'USD' },
        compareAtPrice: null,
      },
    ],
    tags: ['pre-workout', 'energy'],
    productType: 'Performance',
  },
  {
    id: '6',
    handle: 'bcaa-tropical',
    title: 'BCAA - Tropical Mix',
    description: 'Branch chain amino acids for muscle recovery and endurance.',
    descriptionHtml: '<p>Branch chain amino acids for muscle recovery and endurance.</p>',
    availableForSale: true,
    featuredImage: null,
    images: [],
    priceRange: {
      minVariantPrice: { amount: '34.99', currencyCode: 'USD' },
      maxVariantPrice: { amount: '34.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'variant-6',
        title: 'Default',
        availableForSale: true,
        selectedOptions: [],
        price: { amount: '34.99', currencyCode: 'USD' },
        compareAtPrice: null,
      },
    ],
    tags: ['bcaa', 'recovery'],
    productType: 'Recovery',
  },
  {
    id: '7',
    handle: 'casein-protein-vanilla',
    title: 'Casein Protein - Vanilla',
    description: 'Slow-release casein protein for overnight muscle recovery.',
    descriptionHtml: '<p>Slow-release casein protein for overnight muscle recovery.</p>',
    availableForSale: true,
    featuredImage: null,
    images: [],
    priceRange: {
      minVariantPrice: { amount: '54.99', currencyCode: 'USD' },
      maxVariantPrice: { amount: '54.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'variant-7',
        title: 'Default',
        availableForSale: true,
        selectedOptions: [],
        price: { amount: '54.99', currencyCode: 'USD' },
        compareAtPrice: null,
      },
    ],
    tags: ['protein', 'casein'],
    productType: 'Protein',
  },
  {
    id: '8',
    handle: 'mass-gainer-chocolate',
    title: 'Mass Gainer - Chocolate',
    description: 'High-calorie mass gainer for serious muscle building. 50g protein per serving.',
    descriptionHtml: '<p>High-calorie mass gainer for serious muscle building. 50g protein per serving.</p>',
    availableForSale: false,
    featuredImage: null,
    images: [],
    priceRange: {
      minVariantPrice: { amount: '64.99', currencyCode: 'USD' },
      maxVariantPrice: { amount: '64.99', currencyCode: 'USD' },
    },
    variants: [
      {
        id: 'variant-8',
        title: 'Default',
        availableForSale: false,
        selectedOptions: [],
        price: { amount: '64.99', currencyCode: 'USD' },
        compareAtPrice: null,
      },
    ],
    tags: ['protein', 'mass-gainer'],
    productType: 'Protein',
  },
];

export const metadata = {
  title: 'Products | Gutsy',
  description: 'Browse our collection of premium protein supplements and fitness nutrition.',
};

async function getAllProducts(): Promise<ShopifyProduct[]> {
  try {
    const products = await getProducts(20);
    return products.length > 0 ? products : mockProducts;
  } catch (error) {
    return mockProducts;
  }
}

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gutsy-black">
            All Products
          </h1>
          <p className="mt-2 text-gutsy-gray-600">
            Premium supplements for peak performance
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gutsy-gray-600">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
