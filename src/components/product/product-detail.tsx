'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/shopify/cart-context';
import { formatPrice, cn } from '@/lib/utils';
import { ShopifyProduct, ShopifyProductVariant, ShopifyImage } from '@/lib/shopify/types';
import localFont from 'next/font/local';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const SUBSCRIBE_DISCOUNT = 0.10;

const FLAVOR_META: Record<string, { ingredient: string }> = {
  'Vanilla Calm': { ingredient: 'with Reishi Extract' },
  'Cacao Boost': { ingredient: 'with Maca Extract' },
};

/* ── Nutritional data per flavor (from supplement facts labels) ── */

interface NutrientRow {
  name: string;
  amount: string;
  dv?: string;
  indent?: boolean;
  bold?: boolean;
}

interface NutritionInfo {
  servingSize: string;
  servingsPerContainer: string;
  nutrients: NutrientRow[];
  functionalIngredients: { name: string; amount: string }[];
  otherIngredients: string;
}

const NUTRITION_DATA: Record<string, NutritionInfo> = {
  'Vanilla Calm': {
    servingSize: '1 Scoop (35g)',
    servingsPerContainer: 'About 14',
    nutrients: [
      { name: 'Calories', amount: '120', bold: true },
      { name: 'Total Fat', amount: '3g', dv: '4%', bold: true },
      { name: 'Saturated Fat', amount: '2.5g', dv: '13%', indent: true },
      { name: 'Trans Fat', amount: '0g', indent: true },
      { name: 'Cholesterol', amount: '0mg', dv: '0%', bold: true },
      { name: 'Sodium', amount: '150mg', dv: '7%', bold: true },
      { name: 'Total Carbohydrate', amount: '6g', dv: '2%', bold: true },
      { name: 'Dietary Fiber', amount: '1g', dv: '4%', indent: true },
      { name: 'Total Sugars', amount: '1g', indent: true },
      { name: 'Incl. 0g Added Sugars', amount: '', dv: '0%', indent: true },
      { name: 'Protein', amount: '20g', dv: '40%', bold: true },
    ],
    functionalIngredients: [
      { name: 'Actazin\u00AE Kiwifruit Powder', amount: '300mg' },
      { name: 'Organic Reishi Mushroom Extract', amount: '500mg' },
    ],
    otherIngredients:
      'Hydrolyzed Pea Protein, Hydrolyzed Brown Rice Protein, Coconut Milk Powder, Natural Vanilla Flavor, Actazin\u00AE Kiwifruit Powder, Organic Reishi Mushroom Extract, Monk Fruit Extract.',
  },
  'Cacao Boost': {
    servingSize: '1 Scoop (35g)',
    servingsPerContainer: 'About 14',
    nutrients: [
      { name: 'Calories', amount: '125', bold: true },
      { name: 'Total Fat', amount: '3.5g', dv: '4%', bold: true },
      { name: 'Saturated Fat', amount: '2.5g', dv: '13%', indent: true },
      { name: 'Trans Fat', amount: '0g', indent: true },
      { name: 'Cholesterol', amount: '0mg', dv: '0%', bold: true },
      { name: 'Sodium', amount: '140mg', dv: '6%', bold: true },
      { name: 'Total Carbohydrate', amount: '7g', dv: '3%', bold: true },
      { name: 'Dietary Fiber', amount: '2g', dv: '7%', indent: true },
      { name: 'Total Sugars', amount: '1g', indent: true },
      { name: 'Incl. 0g Added Sugars', amount: '', dv: '0%', indent: true },
      { name: 'Protein', amount: '20g', dv: '40%', bold: true },
    ],
    functionalIngredients: [
      { name: 'Actazin\u00AE Kiwifruit Powder', amount: '300mg' },
      { name: 'Organic Maca Root Extract', amount: '500mg' },
    ],
    otherIngredients:
      'Hydrolyzed Pea Protein, Hydrolyzed Brown Rice Protein, Coconut Milk Powder, Organic Cacao Powder, Actazin\u00AE Kiwifruit Powder, Organic Maca Root Extract, Monk Fruit Extract.',
  },
};

interface ProductDetailProps {
  product: ShopifyProduct;
  /** When true, removes breadcrumb and outer wrapper — for embedding inside another page */
  inline?: boolean;
}

export function ProductDetail({ product, inline = false }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState<ShopifyProductVariant>(
    product.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState<'onetime' | 'subscribe'>('onetime');
  const [showNutrition, setShowNutrition] = useState(false);
  const [showIngredients, setShowIngredients] = useState(false);
  const { addToCart, isAdding } = useCart();

  const price = parseFloat(selectedVariant.price.amount);
  const currency = selectedVariant.price.currencyCode;
  const subscribePrice = price * (1 - SUBSCRIBE_DISCOUNT);

  // Resolve the image to show based on selected variant
  const variantImage = selectedVariant.image;
  const currentImage: ShopifyImage | null =
    variantImage || product.featuredImage || (product.images.length > 0 ? product.images[0] : null);

  const allImages = product.images.length > 0
    ? product.images
    : (product.featuredImage ? [product.featuredImage] : []);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleVariantSelect = (variant: ShopifyProductVariant) => {
    setSelectedVariant(variant);
    if (variant.image) {
      const idx = allImages.findIndex((img) => img.url === variant.image?.url);
      if (idx !== -1) setSelectedImageIndex(idx);
      else setSelectedImageIndex(0);
    } else {
      setSelectedImageIndex(0);
    }
  };

  const displayImage = allImages[selectedImageIndex] || currentImage;

  const handleAddToCart = async () => {
    await addToCart(selectedVariant.id, quantity);
  };

  const handleSubscribe = async () => {
    // Loop Subscriptions: selling plan ID would be passed here once set up.
    // For now, add to cart — Loop handles subscription upsell at checkout.
    await addToCart(selectedVariant.id, quantity);
  };

  const getFlavorName = (variant: ShopifyProductVariant) => {
    const flavorOption = variant.selectedOptions.find(
      (opt) => opt.name.toLowerCase() === 'flavor' || opt.name.toLowerCase() === 'title'
    );
    return flavorOption?.value || variant.title;
  };

  const selectedFlavorName = getFlavorName(selectedVariant);
  const nutrition = NUTRITION_DATA[selectedFlavorName] || Object.values(NUTRITION_DATA)[0] || null;

  return (
    <div className={cn('text-black', utoMedium.className)}>
      {/* Breadcrumb — only on standalone PDP */}
      {!inline && (
        <div className="pb-6 px-6 lg:px-8 max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold opacity-60">
            <Link href="/" className="hover:text-[#f20028] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#f20028] transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-[#f20028]">{product.title}</span>
          </nav>
        </div>
      )}

      {/* Product Section */}
      <section className={inline ? '' : 'px-6 lg:px-8 pb-20'}>
        <div className={inline ? '' : 'mx-auto max-w-7xl'}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* LEFT — Image (sticky on desktop) */}
            <div className="space-y-4 lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-square bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {displayImage ? (
                  <Image
                    src={displayImage.url}
                    alt={displayImage.altText || product.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#f3eee4]">
                    <p className={cn('text-4xl lowercase text-black/20', runWild.className)}>
                      coming soon
                    </p>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {allImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImageIndex(i)}
                      className={cn(
                        'relative w-20 h-20 rounded-xl border-2 overflow-hidden transition-all shrink-0',
                        selectedImageIndex === i
                          ? 'border-[#f20028] shadow-md'
                          : 'border-black/10 hover:border-black/30'
                      )}
                    >
                      <Image src={img.url} alt={img.altText || ''} fill className="object-cover" sizes="80px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT — Product Info (scrolls naturally) */}
            <div className="flex flex-col">
              {/* Tagline */}
              <p className={cn('text-sm uppercase tracking-[0.2em] font-bold text-[#f20028] mb-2', utoBold.className)}>
                Gut-Friendly Protein Mix
              </p>

              {/* Title */}
              <h2 className={cn('text-4xl md:text-6xl uppercase leading-none mb-2', utoBlack.className)}>
                {product.title}
              </h2>

              {/* Price */}
              <p className={cn('text-3xl lowercase text-[#f20028] mb-6', runWild.className)}>
                {formatPrice(price.toFixed(2), currency)}
              </p>

              {/* Description */}
              <p className="text-base md:text-lg opacity-80 font-medium leading-relaxed mb-8">
                Hydrolyzed pea &amp; rice protein, enzymatically pre-digested for zero bloat and
                maximum absorption. Five clean ingredients. Nothing else.
              </p>

              {/* ── Flavor Selector ── */}
              {product.variants.length > 1 && (
                <div className="mb-6">
                  <label className={cn('block text-xs uppercase tracking-[0.2em] font-bold mb-3', utoBold.className)}>
                    Flavor
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.variants.map((variant) => {
                      const name = getFlavorName(variant);
                      const meta = FLAVOR_META[name];
                      const isSelected = variant.id === selectedVariant.id;
                      return (
                        <button
                          key={variant.id}
                          onClick={() => handleVariantSelect(variant)}
                          disabled={!variant.availableForSale}
                          aria-label={`Select flavor: ${name}${!variant.availableForSale ? ' (sold out)' : ''}${isSelected ? ' (selected)' : ''}`}
                          aria-pressed={isSelected}
                          className={cn(
                            'relative flex flex-col items-start text-left px-5 py-4 rounded-2xl border-2 transition-all',
                            isSelected
                              ? 'border-[#f20028] bg-white shadow-md'
                              : 'border-black/10 bg-white hover:border-black/30',
                            !variant.availableForSale && 'opacity-40 cursor-not-allowed'
                          )}
                        >
                          <span className={cn('text-lg uppercase leading-tight', utoBold.className)}>
                            {name}
                          </span>
                          {meta && (
                            <span className="text-sm opacity-60 mt-0.5">{meta.ingredient}</span>
                          )}
                          {!variant.availableForSale && (
                            <span className="text-xs text-[#f20028] mt-1 uppercase tracking-wider font-bold">
                              Sold Out
                            </span>
                          )}
                          {isSelected && (
                            <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#f20028] flex items-center justify-center">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white">
                                <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── Quantity Selector ── */}
              <div className="mb-6">
                <label className={cn('block text-xs uppercase tracking-[0.2em] font-bold mb-3', utoBold.className)}>
                  Quantity
                </label>
                <div className="inline-flex items-center bg-white border border-black/10 rounded-full p-1 shadow-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-xl font-bold hover:text-[#f20028] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    &minus;
                  </button>
                  <span className={cn('w-10 text-center text-lg', utoBold.className)}>
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

              {/* ── Purchase Options ── */}
              <div className="space-y-3 mb-6" role="radiogroup" aria-label="Purchase type">
                {/* One-time purchase */}
                <button
                  onClick={() => setPurchaseType('onetime')}
                  role="radio"
                  aria-checked={purchaseType === 'onetime'}
                  className={cn(
                    'w-full flex items-center justify-between px-5 py-4 rounded-2xl border-2 transition-all text-left',
                    purchaseType === 'onetime'
                      ? 'border-black bg-white shadow-md'
                      : 'border-black/10 bg-white hover:border-black/30'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn('w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0', purchaseType === 'onetime' ? 'border-[#f20028]' : 'border-black/30')} aria-hidden="true">
                      {purchaseType === 'onetime' && <span className="w-2.5 h-2.5 rounded-full bg-[#f20028]" />}
                    </span>
                    <span className={cn('uppercase text-sm', utoBold.className)}>One-time purchase</span>
                  </div>
                  <span className={cn('text-lg', utoBold.className)}>
                    {formatPrice(price.toFixed(2), currency)}
                  </span>
                </button>

                {/* Subscribe & Save */}
                <button
                  onClick={() => setPurchaseType('subscribe')}
                  role="radio"
                  aria-checked={purchaseType === 'subscribe'}
                  className={cn(
                    'w-full flex items-center justify-between px-5 py-4 rounded-2xl border-2 transition-all text-left',
                    purchaseType === 'subscribe'
                      ? 'border-[#ffb300] bg-[#ffb300]/10 shadow-md'
                      : 'border-black/10 bg-white hover:border-[#ffb300]'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn('w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0', purchaseType === 'subscribe' ? 'border-[#ffb300]' : 'border-black/30')} aria-hidden="true">
                      {purchaseType === 'subscribe' && <span className="w-2.5 h-2.5 rounded-full bg-[#ffb300]" />}
                    </span>
                    <div>
                      <span className={cn('uppercase text-sm block', utoBold.className)}>
                        Subscribe &amp; Save 10%
                      </span>
                      <span className="text-xs opacity-60">Delivered monthly &middot; cancel anytime</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={cn('text-lg block', utoBold.className)}>
                      {formatPrice(subscribePrice.toFixed(2), currency)}
                    </span>
                    <span className="text-xs text-[#f20028] font-bold">
                      Save {formatPrice((price - subscribePrice).toFixed(2), currency)}/mo
                    </span>
                  </div>
                </button>
              </div>

              {/* ── CTA Button ── */}
              <button
                onClick={purchaseType === 'subscribe' ? handleSubscribe : handleAddToCart}
                disabled={!selectedVariant.availableForSale || isAdding}
                className={cn(
                  'w-full h-16 rounded-full text-xl uppercase font-bold transition-all duration-300',
                  selectedVariant.availableForSale
                    ? 'bg-[#f20028] text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]'
                    : 'bg-black/20 text-black/40 cursor-not-allowed',
                  utoBold.className
                )}
              >
                {isAdding
                  ? 'Adding...'
                  : !selectedVariant.availableForSale
                    ? 'Sold Out'
                    : purchaseType === 'subscribe'
                      ? `Subscribe — ${formatPrice(subscribePrice.toFixed(2), currency)}/mo`
                      : `Add to Bag — ${formatPrice((price * quantity).toFixed(2), currency)}`}
              </button>

              {/* ── Trust Badges ── */}
              <div className="mt-8 pt-6 border-t border-black/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: '100% Plant-Based', icon: PlantIcon },
                    { label: 'No Gums or Fillers', icon: CheckIcon },
                    { label: 'Free Shipping 150+ AED', icon: ShippingIcon },
                    { label: '30-Day Guarantee', icon: ShieldIcon },
                  ].map((badge) => (
                    <div key={badge.label} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
                      <span className="w-8 h-8 flex items-center justify-center bg-[#f3eee4] rounded-full border border-black/10 shrink-0">
                        <badge.icon />
                      </span>
                      {badge.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Supplement Facts Accordion ── */}
              {nutrition && (
                <div className="mt-6 border border-black/10 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setShowNutrition(!showNutrition)}
                    aria-expanded={showNutrition}
                    aria-label="Supplement Facts"
                    className={cn(
                      'w-full flex items-center justify-between px-5 py-4 bg-black text-[#f3eee4] text-left',
                      utoBold.className
                    )}
                  >
                    <span className="uppercase text-sm tracking-wider">Supplement Facts</span>
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className={cn('transition-transform', showNutrition && 'rotate-180')}
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {showNutrition && (
                    <div className="bg-white px-5 py-4">
                      {/* Serving info */}
                      <div className="border-b-[8px] border-black pb-2 mb-1">
                        <p className={cn('text-2xl uppercase', utoBlack.className)}>Supplement Facts</p>
                        <p className="text-sm font-bold">Serving Size {nutrition.servingSize}</p>
                        <p className="text-sm font-bold">Servings Per Container: {nutrition.servingsPerContainer}</p>
                      </div>

                      {/* Header row */}
                      <div className="flex justify-between border-b border-black py-1 text-xs font-bold">
                        <span>Amount Per Serving</span>
                        <span>% Daily Value*</span>
                      </div>

                      {/* Nutrient rows */}
                      {nutrition.nutrients.map((row, i) => (
                        <div
                          key={i}
                          className={cn(
                            'flex justify-between py-1 text-sm',
                            i < nutrition.nutrients.length - 1 ? 'border-b border-black/20' : 'border-b-[4px] border-black',
                            row.indent && 'pl-4'
                          )}
                        >
                          <span className={row.bold ? 'font-bold' : ''}>
                            {row.name} {row.amount && <span className="font-normal">{row.amount}</span>}
                          </span>
                          {row.dv && <span className="font-bold">{row.dv}</span>}
                        </div>
                      ))}

                      {/* Functional ingredients */}
                      {nutrition.functionalIngredients.map((ing, i) => (
                        <div
                          key={i}
                          className={cn(
                            'flex justify-between py-1 text-sm',
                            i < nutrition.functionalIngredients.length - 1
                              ? 'border-b border-black/20'
                              : 'border-b-[4px] border-black'
                          )}
                        >
                          <span className="font-bold">{ing.name}</span>
                          <span>{ing.amount} <span className="text-xs opacity-60">&dagger;</span></span>
                        </div>
                      ))}

                      {/* Footnotes */}
                      <p className="text-xs opacity-60 mt-2">
                        * Percent Daily Values are based on a 2,000 calorie diet.
                      </p>
                      <p className="text-xs opacity-60">
                        &dagger; Daily Value not established.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* ── Ingredients Accordion ── */}
              {nutrition && (
                <div className="mt-3 border border-black/10 rounded-2xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setShowIngredients(!showIngredients)}
                    aria-expanded={showIngredients}
                    aria-label="Ingredients"
                    className={cn(
                      'w-full flex items-center justify-between px-5 py-4 bg-black text-[#f3eee4] text-left',
                      utoBold.className
                    )}
                  >
                    <span className="uppercase text-sm tracking-wider">Ingredients</span>
                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className={cn('transition-transform', showIngredients && 'rotate-180')}
                    >
                      <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {showIngredients && (
                    <div className="bg-white px-5 py-4">
                      <p className={cn('text-xs uppercase tracking-wider font-bold mb-2 text-[#f20028]', utoBold.className)}>
                        {selectedFlavorName}
                      </p>
                      <p className="text-sm leading-relaxed">
                        {nutrition.otherIngredients}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── SVG Icons ── */

function PlantIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10" /><path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ShippingIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}
