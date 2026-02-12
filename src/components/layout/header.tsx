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

  // Detect dark hero pages (FAQ and Contact use black heros)
  const isDarkHeroPage = pathname === '/FAQ' || pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

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
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* AUDIT ITEM #10: ANNOUNCEMENT BAR */}
      <div className="bg-[#f20028] text-[#f3eee4] py-2 text-center overflow-hidden border-b-2 border-black">
        <p className={cn("text-xs md:text-sm uppercase font-black tracking-widest animate-pulse", utoBold.className)}>
          Free shipping across UAE over 150 AED — NO BLOAT. NO GUMS.
        </p>
      </div>

      <nav className={cn(
        "mx-auto transition-all duration-300",
        // AUDIT ITEM #17: Readability backdrop blur
        scrolled ? "bg-[#f3eee4]/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* LOGO WITH CONTEXTUAL INVERSION */}
          <Link 
            href="/" 
            className={cn(
              "group relative transition-all duration-500 ease-in-out",
              showLogo ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            )}
          >
            <div className="relative w-32 h-16 md:w-48 md:h-20 transition-transform hover:scale-105 active:scale-95">
              <Image
                src="/images/gutsy-logomark.png"
                alt="GUTSY"
                fill
                className={cn(
                  "object-contain transition-all duration-300",
                  // If we are on a dark hero and HAVEN'T scrolled yet, show white logo
                  isDarkHeroPage && !scrolled ? "brightness-0 invert" : "brightness-0"
                )} 
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
                    "h-14 px-10 flex items-center justify-center rounded-full border-2 border-[#000000] text-lg font-bold transition-all hover:z-10 hover:scale-105 hover:bg-[#ffb300]",
                    // AUDIT ITEM #17: Pivot colors based on scroll state
                    scrolled ? "bg-white text-black" : "bg-[#f3eee4] text-black",
                    isDarkHeroPage && !scrolled && "border-[#f3eee4] bg-transparent text-[#f3eee4] hover:text-black",
                    utoBold.className
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                href="/products"
                className={cn(
                  "h-14 px-12 flex items-center justify-center rounded-full bg-[#f20028] text-[#f3eee4] text-lg font-bold border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] transition-all hover:z-10 hover:scale-110 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#000000] ml-4",
                  isDarkHeroPage && !scrolled && "border-[#f3eee4]",
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
                className={cn(
                  "group relative h-14 w-14 flex items-center justify-center rounded-full border-2 border-[#000000] shadow-[4px_4px_0px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all",
                  scrolled ? "bg-white" : "bg-[#f3eee4]",
                  isDarkHeroPage && !scrolled && "border-[#f3eee4] bg-transparent shadow-[4px_4px_0px_0px_#f3eee4]"
                )}
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
            'md:hidden mt-8 mx-4 overflow-hidden rounded-[2.5rem] bg-[#f3eee4] border-4 border-[#000000] shadow-[12px_12px_0px_0px_#000000] transition-all duration-500',
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
