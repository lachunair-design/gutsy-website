'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import { useCart } from '@/lib/shopify/cart-context';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function CartDrawer() {
  const { cart, isOpen, closeCart, updateItemQuantity, removeItem, isLoading } =
    useCart();

  const lines = cart?.lines || [];
  const totalAmount = cart?.cost.totalAmount;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 z-50 transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gutsy-gray-200">
            <h2 className="text-lg font-semibold text-gutsy-black">
              Your Cart ({cart?.totalQuantity || 0})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 text-gutsy-gray-500 hover:text-gutsy-black transition-colors"
              aria-label="Close cart"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {lines.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-gutsy-gray-300 mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <p className="text-gutsy-gray-600 mb-4">Your cart is empty</p>
                <Button onClick={closeCart} variant="outline">
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <ul className="space-y-6">
                {lines.map((item) => (
                  <li key={item.id} className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 flex-shrink-0 bg-gutsy-gray-100">
                      {item.merchandise.product.featuredImage ? (
                        <Image
                          src={item.merchandise.product.featuredImage.url}
                          alt={
                            item.merchandise.product.featuredImage.altText ||
                            item.merchandise.product.title
                          }
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gutsy-gray-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8"
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
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gutsy-black truncate">
                        {item.merchandise.product.title}
                      </h3>
                      {item.merchandise.title !== 'Default Title' && (
                        <p className="text-sm text-gutsy-gray-500 mt-0.5">
                          {item.merchandise.title}
                        </p>
                      )}
                      <p className="text-sm font-medium text-gutsy-black mt-1">
                        {formatPrice(
                          item.merchandise.price.amount,
                          item.merchandise.price.currencyCode
                        )}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateItemQuantity(
                              item.id,
                              item.merchandise.id,
                              item.quantity - 1
                            )
                          }
                          disabled={isLoading}
                          className="w-8 h-8 flex items-center justify-center border border-gutsy-gray-300 text-gutsy-gray-600 hover:bg-gutsy-gray-100 transition-colors disabled:opacity-50"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateItemQuantity(
                              item.id,
                              item.merchandise.id,
                              item.quantity + 1
                            )
                          }
                          disabled={isLoading}
                          className="w-8 h-8 flex items-center justify-center border border-gutsy-gray-300 text-gutsy-gray-600 hover:bg-gutsy-gray-100 transition-colors disabled:opacity-50"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          disabled={isLoading}
                          className="ml-2 text-gutsy-gray-400 hover:text-gutsy-black transition-colors disabled:opacity-50"
                          aria-label="Remove item"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {lines.length > 0 && (
            <div className="border-t border-gutsy-gray-200 px-6 py-4 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-base font-medium text-gutsy-black">
                  Subtotal
                </span>
                <span className="text-base font-semibold text-gutsy-black">
                  {totalAmount
                    ? formatPrice(totalAmount.amount, totalAmount.currencyCode)
                    : '-'}
                </span>
              </div>
              <p className="text-sm text-gutsy-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <a
                href={cart?.checkoutUrl}
                className="block w-full bg-gutsy-black text-white text-center font-medium py-3 hover:bg-gutsy-gray-800 transition-colors"
              >
                Checkout
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
