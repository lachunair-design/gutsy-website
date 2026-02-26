'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/lib/shopify/cart-context';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';
import { TransitionLink } from '@/components/transitions/transition-link';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });

const navigation = [
  { name: 'Science', href: '/science' },
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

  // Header starts transparent on home, FAQ, Contact, and Science due to dark/full-bleed heroes
  const isHomePage = pathname === '/';
  const isDarkHeroPage = 
    pathname === '/FAQ' || 
    pathname === '/contact' || 
    pathname === '/science' || 
    (isHomePage && !scrolled);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      if (pathname === '/about') {
        setShowLogo(!(scrollY > 100 && scrollY < 800));
      } else {
        setShowLogo(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      scrolled ? "bg-white/70 backdrop-blur-xl backdrop-saturate-150 py-4 shadow-sm border-b border-white/30" : "bg-transparent py-8 md:py-10"
    )}>
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO - Premium Inversion */}
        <TransitionLink
          href="/"
          className={cn(
            "group relative transition-all duration-500",
            showLogo ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          )}
        >
          <div className="relative w-28 h-10 md:w-36 md:h-12">
            <Image
              src="/images/gutsy-logomark.png"
              alt="GUTSY"
              fill
              className={cn(
                "object-contain transition-all duration-300",
                isDarkHeroPage && !scrolled ? "brightness-0 invert" : "brightness-0"
              )}
              priority
            />
          </div>
        </TransitionLink>

        <div className="flex items-center gap-6 md:gap-10">
          {/* NAVIGATION LINKS - Minimal Editorial Style */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <TransitionLink
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm uppercase tracking-[0.2em] transition-all hover:opacity-60",
                  isDarkHeroPage && !scrolled ? "text-white" : "text-black",
                  utoBold.className
                )}
              >
                {item.name}
              </TransitionLink>
            ))}

            <TransitionLink
              href="/products"
              className={cn(
                "h-12 px-8 flex items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95",
                isDarkHeroPage && !scrolled
                  ? "bg-white text-black hover:bg-[#ffb300]"
                  : "bg-[#f20028] text-white hover:bg-black",
                utoBold.className
              )}
            >
              Shop Now
            </TransitionLink>
          </div>

          {/* CART & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="group relative flex items-center justify-center transition-transform hover:scale-110"
            >
              <div className={cn(
                "relative w-10 h-10 overflow-hidden rounded-full border-2 transition-colors",
                isDarkHeroPage && !scrolled ? "border-white/20 bg-white/10" : "border-black/10 bg-black/5"
              )}>
                <Image
                  src="/images/cart-image-girl-1.png"
                  alt="Cart"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f20028] text-[10px] font-bold text-white shadow-lg">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              type="button"
              className={cn(
                "lg:hidden flex items-center min-h-[44px] min-w-[44px] justify-center transition-all",
                isDarkHeroPage && !scrolled ? "text-white" : "text-black",
                utoBold.className
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <span className="text-xs uppercase tracking-[0.2em]">Menu</span>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU - Soft Overlay */}
        <div
          className={cn(
            'fixed inset-0 top-[80px] z-[90] lg:hidden bg-white px-8 py-12 transition-all duration-500 ease-in-out',
            mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          )}
        >
          <div className="flex flex-col space-y-8">
            {navigation.map((item) => (
              <TransitionLink
                key={item.name}
                href={item.href}
                className={cn("text-5xl uppercase tracking-tighter text-black", utoBlack.className)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </TransitionLink>
            ))}
            <TransitionLink
              href="/products"
              className={cn("text-6xl uppercase text-[#f20028] pt-8 border-t border-zinc-100", utoBlack.className)}
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop All
            </TransitionLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
