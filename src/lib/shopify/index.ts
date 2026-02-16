import {
  ShopifyProduct,
  ShopifyCollection,
  ShopifyCart,
  ShopifyCartItem,
} from './types';
import {
  getProductsQuery,
  getProductByHandleQuery,
  getCollectionByHandleQuery,
  getCollectionsQuery,
  createCartMutation,
  addToCartMutation,
  updateCartMutation,
  removeFromCartMutation,
  getCartQuery,
} from './queries';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

const endpoint = `https://${domain}/api/2024-01/graphql.json`;

type ShopifyResponse<T> = {
  data: T;
  errors?: { message: string }[];
};

async function shopifyFetch<T>({
  query,
  variables,
}: {
  query: string;
  variables?: Record<string, unknown>;
}): Promise<T> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  const json: ShopifyResponse<T> = await response.json();

  if (json.errors) {
    throw new Error(json.errors.map((e) => e.message).join('\n'));
  }

  return json.data;
}

function reshapeProduct(product: any): ShopifyProduct {
  return {
    ...product,
    images: product.images.edges.map((edge: any) => edge.node),
    variants: product.variants.edges.map((edge: any) => edge.node),
  };
}

function reshapeProducts(products: any[]): ShopifyProduct[] {
  return products.map((product) => reshapeProduct(product));
}

function reshapeCart(cart: any): ShopifyCart {
  return {
    ...cart,
    lines: cart.lines.edges.map((edge: any) => edge.node as ShopifyCartItem),
  };
}

// Products
export async function getProducts(first: number = 20): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{
    products: { edges: { node: any }[] };
  }>({
    query: getProductsQuery,
    variables: { first },
  });

  return reshapeProducts(data.products.edges.map((edge) => edge.node));
}

export async function getProductByHandle(
  handle: string
): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ product: any | null }>({
    query: getProductByHandleQuery,
    variables: { handle },
  });

  return data.product ? reshapeProduct(data.product) : null;
}

// Collections
export async function getCollections(first: number = 20) {
  const data = await shopifyFetch<{
    collections: { edges: { node: any }[] };
  }>({
    query: getCollectionsQuery,
    variables: { first },
  });

  return data.collections.edges.map((edge) => edge.node);
}

export async function getCollectionByHandle(
  handle: string,
  first: number = 20
): Promise<ShopifyCollection | null> {
  const data = await shopifyFetch<{ collection: any | null }>({
    query: getCollectionByHandleQuery,
    variables: { handle, first },
  });

  if (!data.collection) return null;

  return {
    ...data.collection,
    products: reshapeProducts(
      data.collection.products.edges.map((edge: any) => edge.node)
    ),
  };
}

// Cart
export async function createCart(
  lines?: { merchandiseId: string; quantity: number }[]
): Promise<ShopifyCart> {
  const data = await shopifyFetch<{ cartCreate: { cart: any } }>({
    query: createCartMutation,
    variables: { lineItems: lines },
  });

  return reshapeCart(data.cartCreate.cart);
}

export async function getCart(cartId: string): Promise<ShopifyCart | null> {
  const data = await shopifyFetch<{ cart: any | null }>({
    query: getCartQuery,
    variables: { cartId },
  });

  return data.cart ? reshapeCart(data.cart) : null;
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<ShopifyCart> {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: any } }>({
    query: addToCartMutation,
    variables: { cartId, lines },
  });

  return reshapeCart(data.cartLinesAdd.cart);
}

export async function updateCart(
  cartId: string,
  lines: { id: string; merchandiseId: string; quantity: number }[]
): Promise<ShopifyCart> {
  const data = await shopifyFetch<{ cartLinesUpdate: { cart: any } }>({
    query: updateCartMutation,
    variables: { cartId, lines },
  });

  return reshapeCart(data.cartLinesUpdate.cart);
}

export async function removeFromCart(
  cartId: string,
  lineIds: string[]
): Promise<ShopifyCart> {
  const data = await shopifyFetch<{ cartLinesRemove: { cart: any } }>({
    query: removeFromCartMutation,
    variables: { cartId, lineIds },
  });

  return reshapeCart(data.cartLinesRemove.cart);
}
