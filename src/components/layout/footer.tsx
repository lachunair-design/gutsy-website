'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Instagram } from 'lucide-react';

// Corrected paths for src/components/layout/footer.tsx
const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

const footerLinks = {
  column1: [
    { name: 'About Us', href: '/about' },
    { name: 'FAQs', href: '/FAQ' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shop All', href: '/products' },
  ],
  column2: [
    { name: 'Shipping', href: '/FAQ#shipping' },
    { name: 'Returns', href: '/FAQ#shipping' },
    { name: 'Legal & Privacy', href: '/FAQ#legal' },
  ],
};

export function Footer() {
  const [copied, setCopied] = useState(false);
  const DISCOUNT_CODE = 'GUTSY10';

  const handleCopy = () => {
    navigator.clipboard.writeText(DISCOUNT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#121417] text-white pt-16 md:pt-24 pb-8 md:pb-12 rounded-t-[30px] md:rounded-t-[40px] relative overflow-hidden selection:bg-[#ffb300]">
      {/* 10% Off Tab - Interactive Copy Button */}
      <button 
        onClick={handleCopy}
        className="absolute left-0 top-1/4 md:top-1/3 bg-white text-[#121417] py-6 md:py-8 px-2 md:px-3 rounded-r-xl md:rounded-r-2xl border border-gray-200 shadow-lg flex items-center justify-center transition-transform active:scale-95 hover:bg-[#f3eee4] z-20"
      >
        <span className={cn("vertical-text text-lg md:text-xl font-bold rotate-180 [writing-mode:vertical-lr]", utoBold.className)}>
          {copied ? 'Copied!' : '10% Off'}
        </span>
      </button>

      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-24 mb-20 md:mb-32">
          
          {/* Logo Section */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link href="/" className="relative w-32 h-8 md:w-40 md:h-10">
              <Image
                src="/images/gutsy-logomark.png"
                alt="GUTSY"
                fill
                className="object-contain brightness-0 invert" 
                priority
              />
            </Link>
            <div className="h-8 w-[1px] bg-white/30 hidden md:block" /> 
            <span className={cn("text-lg md:text-xl lowercase tracking-tight opacity-90 text-center md:text-left", utoBold.className)}>
              no guts. no glory.
            </span>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-x-12 md:gap-x-24 gap-y-10 w-full md:w-auto text-center md:text-left">
            <ul className="space-y-4 md:space-y-3">
              {footerLinks.column1.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className={cn("text-xl md:text-3xl hover:line-through transition-all block md:inline", utoBlack.className)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-4 md:space-y-3">
              {footerLinks.column2.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className={cn("text-xl md:text-3xl hover:line-through transition-all block md:inline", utoBlack.className)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Metadata */}
        <div className={cn("flex flex-col md:flex-row justify-between items-center pt-8 md:pt-10 border-t border-white/5 text-[12px] md:text-[14px] tracking-[0.2em] text-center md:text-left uppercase", utoMedium.className)}>
          <p className="opacity-60 mb-6 md:mb-0">
            © 2026. GUTSY LIFE. ALL RIGHTS RESERVED.
          </p>
          
          <a 
            href="https://instagram.com/gutsy.world" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <span className="opacity-60 group-hover:opacity-100 transition-opacity lowercase font-mono tracking-normal">
              @gutsy.world
            </span>
            <div className="p-2 border border-white/20 rounded-full group-hover:bg-[#ffb300] group-hover:text-black group-hover:border-black transition-all">
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </div>
          </a>
        </div>

      </div>
    </footer>
  );
}
