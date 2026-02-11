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
          
          {/* Logo Section - Left Aligned */}
          <Link href="/" className="flex items-center">
            <span className={cn("text-4xl md:text-5xl tracking-tighter uppercase leading-none text-black", utoBlack.className)}>
              EAT DIRT
            </span>
          </Link>

          {/* Nav Container - Right Aligned Pill Design */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center -space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "h-12 px-8 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm text-[#B1412D] text-sm font-bold transition-transform hover:z-10 hover:scale-105",
                    utoBold.className
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Primary Shop Action - Red Pill */}
              <Link
                href="/products"
                className={cn(
                  "h-12 px-10 flex items-center justify-center rounded-full bg-[#B1412D] text-white text-sm font-bold shadow-md transition-transform hover:z-10 hover:scale-105",
                  utoBold.className
                )}
              >
                Shop
              </Link>
            </div>

            {/* Cart & Mobile Toggle */}
            <div className="flex items-center ml-4 space-x-3">
              <button
                onClick={openCart}
                className="group relative h-12 w-12 flex items-center justify-center rounded-full bg-white border border-gray-100 shadow-sm hover:scale-105 transition-transform"
                aria-label="Open cart"
              >
                <Image
                  src="/images/cart-image-girl-1.png"
                  alt="Cart"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#B1412D] text-[10px] font-bold text-white">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                type="button"
                className="md:hidden h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            'md:hidden mt-4 overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-2xl transition-all duration-300',
            mobileMenuOpen ? 'max-h-96 opacity-100 p-6' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col space-y-4 text-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn("text-xl uppercase text-[#B1412D]", utoBlack.className)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/products"
              className={cn("text-xl uppercase text-[#B1412D] border-t pt-4 border-gray-100", utoBlack.className)}
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
