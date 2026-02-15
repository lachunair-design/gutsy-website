import { getProductByHandle, getProducts } from '@/lib/shopify';
import { notFound } from 'next/navigation';
import { ProductDetails } from './product-details';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const utoMedium = localFont({ src: '../../../../public/fonts/Uto Medium.otf' });

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const products = await getProducts(20);
    return products.map((product) => ({ handle: product.handle }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: { params: { handle: string } }) {
  try {
    const product = await getProductByHandle(params.handle);
    if (!product) return { title: 'Product Not Found | Gutsy' };
    return {
      title: `${product.title} | Gutsy`,
      description: product.description,
    };
  } catch {
    return { title: 'Product | Gutsy' };
  }
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  let product;
  try {
    product = await getProductByHandle(params.handle);
  } catch (error) {
    console.error('Error fetching product:', error);
  }

  if (!product) {
    notFound();
  }

  return (
    <div className={cn('bg-[#f3eee4] min-h-screen pt-28 pb-16 selection:bg-[#ffb300]', utoMedium.className)}>
      <ProductDetails product={product} />
    </div>
  );
}
