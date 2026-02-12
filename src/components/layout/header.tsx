'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/shopify/cart-context';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });

// Updated navigation to match the src/app/FAQ/page.tsx folder structure
const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQs', href: '/FAQ' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const pathname = usePathname();
  const { cart, openCart } = useCart();
  const totalItems = cart?.totalQuantity || 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // On the About page, hide logo between 100px and 800px scroll
      // to let the big hero text breathe.
      if (pathname === '/about') {
        if (scrollY > 100 && scrollY < 800) {
          setShowLogo(false);
        } else {
          setShowLogo(true);
        }
      } else {
        setShowLogo(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO WITH CONDITIONAL VISIBILITY */}
          <Link 
            href="/" 
            className={cn(
              "group relative transition-all duration-500 ease-in-out",
              showLogo ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            )}
          >
            <div className="relative w-32 h-16 md:w-48 md:h-20 mix-blend-multiply transition-transform hover:scale-105 active:scale-95">
              <Image
                src="/images/gutsy-logomark.png"
                alt="GUTSY"
                fill
                className="object-contain brightness-0" 
                priority
              />
            </div>
          </Link>

          <div className="flex items-center">
            {/* Desktop Navigation Pills */}
            <div className="hidden md:flex items-center -space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "h-14 px-10 flex items-center justify-center rounded-full bg-[#f3eee4] border-2 border-[#000000] text-[#000000] text-lg font-bold transition-all hover:z-10 hover:scale-105 hover:bg-[#ffb300]",
                    utoBold.className
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                href="/products"
                className={cn(
                  "h-14 px-12 flex items-center justify-center rounded-full bg-[#f20028] text-[#f3eee4] text-lg font-bold border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] transition-all hover:z-10 hover:scale-110 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#000000]",
                  utoBold.className
                )}
              >
                Shop Now
              </Link>
            </div>

            {/* Cart & Mobile UI */}
            <div className="flex items-center ml-8 space-x-4">
              <button
                onClick={openCart}
                className="group relative h-14 w-14 flex items-center justify-center rounded-full bg-[#f3eee4] border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                aria-label="Open cart"
              >
                <div className="relative w-11 h-11 overflow-hidden rounded-full border border-[#000000] bg-white">
                  <Image
                    src="/images/cart-image-girl-1.png"
                    alt="Cart"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#ffb300] text-xs font-black text-[#000000] border-2 border-[#000000]">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                type="button"
                className="md:hidden h-14 w-14 flex items-center justify-center rounded-full bg-[#ffb300] border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-8 h-8 text-[#000000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'md:hidden mt-8 overflow-hidden rounded-[2.5rem] bg-[#f3eee4] border-4 border-[#000000] shadow-[12px_12px_0px_0px_#000000] transition-all duration-500',
            mobileMenuOpen ? 'max-h-[35rem] opacity-100 p-10' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col space-y-8 text-left">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn("text-4xl uppercase text-[#000000] hover:text-[#f20028]", utoBlack.className)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/products"
              className={cn("text-5xl uppercase text-[#f20028] pt-8 border-t-4 border-[#000000]", utoBlack.className)}
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
