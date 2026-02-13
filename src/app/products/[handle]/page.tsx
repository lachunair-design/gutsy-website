import { getProductByHandle } from '@/lib/shopify';
import { notFound } from 'next/navigation';
import { ProductDetails } from './product-details';

export async function generateMetadata({ params }: { params: { handle: string } }) {
  const product = await getProductByHandle(params.handle);
  if (!product) return { title: 'Product Not Found | Gutsy' };
  return {
    title: `${product.title} | Gutsy`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProductByHandle(params.handle);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
