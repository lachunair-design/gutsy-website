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

  // On the home page, the header starts transparent over the full-bleed image
  const isHomePage = pathname === '/';
  const isDarkHeroPage = pathname === '/FAQ' || pathname === '/contact' || (isHomePage && !scrolled);

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
      scrolled ? "bg-white/80 backdrop-blur-lg py-4 shadow-sm" : "bg-transparent py-8 md:py-10"
    )}>
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO - Premium Inversion */}
        <Link
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
                isDarkHeroPage ? "brightness-0 invert" : "brightness-0"
              )}
              priority
            />
          </div>
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          {/* NAVIGATION LINKS - Minimal Editorial Style */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm uppercase tracking-[0.2em] transition-all hover:opacity-60",
                  isDarkHeroPage ? "text-white" : "text-black",
                  utoBold.className
                )}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/products"
              className={cn(
                "h-12 px-8 flex items-center justify-center rounded-full transition-all hover:scale-105 active:scale-95",
                isDarkHeroPage 
                  ? "bg-white text-black hover:bg-[#ffb300]" 
                  : "bg-[#f20028] text-white hover:bg-black",
                utoBold.className
              )}
            >
              Shop Now
            </Link>
          </div>

          {/* CART & MOBILE TOGGLE */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="group relative flex items-center justify-center transition-transform hover:scale-110"
            >
              <div className={cn(
                "relative w-10 h-10 overflow-hidden rounded-full border-2 transition-colors",
                isDarkHeroPage ? "border-white/20 bg-white/10" : "border-black/10 bg-black/5"
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
                "lg:hidden flex items-center transition-all",
                isDarkHeroPage ? "text-white" : "text-black"
              )}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
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
              <Link
                key={item.name}
                href={item.href}
                className={cn("text-5xl uppercase tracking-tighter text-black", utoBlack.className)}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/products"
              className={cn("text-6xl uppercase text-[#f20028] pt-8 border-t border-zinc-100", utoBlack.className)}
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
