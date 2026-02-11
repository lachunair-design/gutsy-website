'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '@/lib/shopify/cart-context';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

// Initialize the custom fonts
const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQs', href: '/faq' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart, openCart } = useCart();
  const totalItems = cart?.totalQuantity || 0;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-6">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* GUTSY Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 border-2 border-black bg-white rounded-sm overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
              <Image
                src="/images/gutsy-logomark.png"
                alt="GUTSY Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <span className={cn("text-4xl md:text-5xl tracking-tighter uppercase leading-none text-black", utoBlack.className)}>
              GUTSY
            </span>
          </Link>

          {/* Navigation Container - Overlapping Pills */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center -space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "h-12 px-8 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm text-black text-sm font-bold transition-all hover:z-10 hover:scale-105 hover:bg-[#F3EEE4]",
                    utoBold.className
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Primary Action - Gutsy Red Pill */}
              <Link
                href="/products"
                className={cn(
                  "h-12 px-10 flex items-center justify-center rounded-full bg-[#B1412D] text-white text-sm font-bold shadow-lg transition-all hover:z-10 hover:scale-105 hover:brightness-110",
                  utoBold.className
                )}
              >
                Shop Now
              </Link>
            </div>

            {/* Cart & Mobile UI */}
            <div className="flex items-center ml-6 space-x-3">
              <button
                onClick={openCart}
                className="group relative h-12 w-12 flex items-center justify-center rounded-full bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                aria-label="Open cart"
              >
                <div className="relative w-9 h-9 overflow-hidden rounded-full border border-gray-100">
                  <Image
                    src="/images/cart-image-girl-1.png"
                    alt="Cart"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-black text-[10px] font-black text-white border-2 border-white">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                className="md:hidden h-12 w-12 flex items-center justify-center rounded-full bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={cn(
            'md:hidden mt-4 overflow-hidden rounded-[2rem] bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500',
            mobileMenuOpen ? 'max-h-[32rem] opacity-100 p-8' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col space-y-6 text-left">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn("text-3xl uppercase text-black hover:italic", utoBlack.className)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/products"
              className={cn("text-4xl uppercase text-[#B1412D] pt-6 border-t-4 border-black", utoBlack.className)}
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop All
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
