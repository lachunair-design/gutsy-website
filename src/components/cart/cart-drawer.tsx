'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/shopify/cart-context';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

export function CartDrawer() {
  const { cart, isOpen, closeCart, updateItemQuantity, removeItem, isLoading } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  const lines = cart?.lines || [];
  const totalAmount = cart?.cost.totalAmount;

  // ESC key handler
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeCart]);

  // Focus trap
  const handleFocusTrap = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !drawerRef.current) return;
    const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener('keydown', handleFocusTrap);
    // Focus the close button when drawer opens
    const timer = setTimeout(() => {
      const closeBtn = drawerRef.current?.querySelector<HTMLElement>('[aria-label="Close cart"]');
      closeBtn?.focus();
    }, 100);
    return () => {
      document.removeEventListener('keydown', handleFocusTrap);
      clearTimeout(timer);
    };
  }, [isOpen, handleFocusTrap]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-500',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer - The "Cart Pouch" */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-[#f3eee4] z-[70] shadow-2xl transition-transform duration-500 ease-in-out',
          'rounded-l-[30px] md:rounded-l-[40px]',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full p-4 md:p-6">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-black/10">
            <div className="flex flex-col">
              <h2 className={cn("text-4xl lowercase leading-none text-[#f20028]", runWild.className)}>
                your bag
              </h2>
              <span className={cn("text-xs uppercase tracking-widest font-bold opacity-60", utoBold.className)}>
                {cart?.totalQuantity || 0} items
              </span>
            </div>
            <button
              onClick={closeCart}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-[#f20028] transition-all duration-300 shadow-md"
              aria-label="Close cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-8 scrollbar-hide">
            {lines.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <p className={cn("text-5xl lowercase text-black/20", runWild.className)}>it&apos;s empty here</p>
                <Button 
                  onClick={closeCart} 
                  className={cn("bg-black text-[#f3eee4] rounded-full px-8 py-6 uppercase font-bold", utoBold.className)}
                >
                  Go Shop
                </Button>
              </div>
            ) : (
              <ul className="space-y-8">
                {lines.map((item) => (
                  <li key={item.id} className="flex gap-4 group">
                    {/* Product Image - Sticker Style */}
                    <div className="relative w-24 h-24 flex-shrink-0 bg-white rounded-2xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
                      {item.merchandise.product.featuredImage ? (
                        <Image
                          src={item.merchandise.product.featuredImage.url}
                          alt={item.merchandise.product.title}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#ffb300]" />
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <h3 className={cn("text-xl uppercase leading-none truncate mb-1", utoBlack.className)}>
                        {item.merchandise.product.title}
                      </h3>
                      <p className={cn("text-lg lowercase leading-none text-[#f20028] mb-2", runWild.className)}>
                        {item.merchandise.title !== 'Default Title' ? item.merchandise.title : 'protein power'}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center bg-white border border-black/10 rounded-full p-1 shadow-sm">
                          <button
                            onClick={() => updateItemQuantity(item.id, item.merchandise.id, item.quantity - 1)}
                            disabled={isLoading}
                            aria-label={`Decrease quantity of ${item.merchandise.product.title}`}
                            className="w-10 h-10 flex items-center justify-center font-bold hover:text-[#f20028]"
                          >
                            -
                          </button>
                          <span className={cn("w-6 text-center text-sm font-bold", utoBold.className)} aria-label={`Quantity: ${item.quantity}`}>
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateItemQuantity(item.id, item.merchandise.id, item.quantity + 1)}
                            disabled={isLoading}
                            aria-label={`Increase quantity of ${item.merchandise.product.title}`}
                            className="w-10 h-10 flex items-center justify-center font-bold hover:text-[#f20028]"
                          >
                            +
                          </button>
                        </div>
                        <span className={cn("text-lg font-bold", utoBold.className)}>
                          {formatPrice(item.merchandise.price.amount, item.merchandise.price.currencyCode)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer - Checkout Sticker */}
          {lines.length > 0 && (
            <div className="bg-white rounded-3xl p-6 shadow-xl space-y-4 mt-auto">
              <div className="flex items-center justify-between">
                <span className={cn("text-4xl lowercase", runWild.className)}>subtotal</span>
                <span className={cn("text-2xl font-black uppercase", utoBlack.className)}>
                  {totalAmount ? formatPrice(totalAmount.amount, totalAmount.currencyCode) : '-'}
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-40 leading-tight">
                Tax and shipping calculated at the next step.
              </p>
              <a
                href={cart?.checkoutUrl}
                className={cn(
                  "block w-full bg-[#f20028] text-white text-center text-xl uppercase font-bold py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
                  utoBold.className
                )}
              >
                Checkout Now
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
