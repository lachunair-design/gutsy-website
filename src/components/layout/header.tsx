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

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQs', href: '/FAQ' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { cart, openCart } = useCart();
  const totalItems = cart?.totalQuantity || 0;

  const isDarkHeroPage = pathname === '/FAQ' || pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20); // Faster trigger for the delivery bar fade

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
    <header className="fixed top-0 left-0 right-0 z-[100] pointer-events-none">
      {/* 1. DISAPPEARING FREE DELIVERY BAR */}
      <div 
        className={cn(
          "bg-[#f20028] text-[#f3eee4] py-2 text-center border-b-2 border-black transition-all duration-500 ease-in-out pointer-events-auto",
          scrolled ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        )}
      >
        <p className={cn("text-[10px] md:text-xs uppercase font-black tracking-widest px-4", utoBold.className)}>
          Free shipping across UAE over 150 AED — NO BLOAT. NO GUMS.
        </p>
      </div>

      <nav className={cn(
        "mx-auto transition-all duration-300 pointer-events-auto",
        scrolled ? "bg-[#f3eee4]/90 backdrop-blur-md py-4 shadow-sm" : "py-6 md:py-10"
      )}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          
          {/* LOGO VISIBILITY */}
          <Link 
            href="/" 
            className={cn(
              "group relative transition-all duration-500",
              showLogo ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            )}
          >
            <div className="relative w-28 h-10 md:w-40 md:h-14">
              <Image
                src="/images/gutsy-logomark.png"
                alt="GUTSY"
                fill
                className={cn(
                  "object-contain transition-all duration-300",
                  // Logo is white on dark pages, but turns black once we scroll onto the cream body
                  isDarkHeroPage && !scrolled ? "brightness-0 invert" : "brightness-0"
                )} 
                priority
              />
            </div>
          </Link>

          <div className="flex items-center gap-3 md:gap-6">
            {/* 2. VISIBLE NAVIGATION PILLS */}
            <div className="hidden lg:flex items-center -space-x-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "h-12 px-8 flex items-center justify-center rounded-full border-2 transition-all hover:z-10 hover:scale-105",
                    scrolled 
                      ? "bg-white border-black text-black hover:bg-[#ffb300]" 
                      : isDarkHeroPage 
                        ? "bg-transparent border-[#f3eee4] text-[#f3eee4] hover:bg-[#f3eee4] hover:text-black" 
                        : "bg-[#f3eee4] border-black text-black hover:bg-[#ffb300]",
                    utoBold.className
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                href="/products"
                className={cn(
                  "h-12 px-10 flex items-center justify-center rounded-full bg-[#f20028] text-[#f3eee4] font-bold border-2 transition-all hover:z-10 hover:scale-110 ml-4",
                  scrolled || !isDarkHeroPage 
                    ? "border-black shadow-[4px_4px_0px_0px_#000000]" 
                    : "border-[#f3eee4] shadow-[4px_4px_0px_0px_#f3eee4]",
                  utoBold.className
                )}
              >
                Shop Now
              </Link>
            </div>

            {/* CART & MOBILE TOGGLE */}
            <div className="flex items-center gap-3">
              <button
                onClick={openCart}
                className={cn(
                  "group relative h-12 w-12 flex items-center justify-center rounded-full border-2 transition-all",
                  scrolled 
                    ? "bg-white border-black shadow-[4px_4px_0px_0px_#000000]" 
                    : isDarkHeroPage 
                      ? "bg-transparent border-[#f3eee4] shadow-[4px_4px_0px_0px_#f3eee4]" 
                      : "bg-[#f3eee4] border-black shadow-[4px_4px_0px_0px_#000000]"
                )}
              >
                <div className="relative w-8 h-8 overflow-hidden rounded-full border border-black bg-white">
                  <Image
                    src="/images/cart-image-girl-1.png"
                    alt="Cart"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0"
                  />
                </div>
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#ffb300] text-[10px] font-black text-black border-2 border-black">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                type="button"
                className={cn(
                  "lg:hidden h-12 w-12 flex items-center justify-center rounded-full border-2 shadow-[4px_4px_0px_0px_#000000] bg-[#ffb300] active:translate-y-1 active:shadow-none transition-all",
                  isDarkHeroPage && !scrolled ? "border-[#f3eee4] shadow-[4px_4px_0px_0px_#f3eee4]" : "border-black"
                )}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

        {/* MOBILE MENU */}
        <div
          className={cn(
            'lg:hidden mt-4 mx-4 overflow-hidden rounded-[2rem] bg-[#f3eee4] border-4 border-black shadow-[8px_8px_0px_0px_#000000] transition-all duration-500',
            mobileMenuOpen ? 'max-h-[30rem] opacity-100 p-8' : 'max-h-0 opacity-0'
          )}
        >
          <div className="flex flex-col space-y-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn("text-3xl uppercase text-black hover:text-[#f20028]", utoBlack.className)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/products"
              className={cn("text-4xl uppercase text-[#f20028] pt-6 border-t-2 border-black/10", utoBlack.className)}
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
