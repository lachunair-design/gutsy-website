'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Instagram, ArrowUpRight } from 'lucide-react';

// BRANDED FONT CONFIGURATION
const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

const footerLinks = {
  column1: [
    { name: 'Shop All', href: '/products' },
    { name: 'The Duo Bundle', href: '/products' },
    { name: 'Gutsy Starter Kit', href: '/products' },
    { name: 'Gift Cards', href: '/products' },
    { name: 'Wholesale', href: '/contact' },
  ],
  column2: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQs', href: '/FAQ' },
    { name: 'Shipping & Returns', href: '/FAQ#shipping' },
    { name: 'Terms of Service', href: '/FAQ#legal' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com/gutsy.world' },
    { name: 'TikTok', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Facebook', href: '#' },
  ]
};

export function Footer() {
  return (
    <footer className="bg-[#f3eee4] text-[#121417] pt-16 md:pt-24 pb-8 md:pb-12 border-t border-black/10 selection:bg-[#ffb300]">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Top Section: Newsletter and Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16 md:mb-24">
          
          {/* Left: Newsletter Sign-up */}
          <div className="md:col-span-5 space-y-8">
            <p className={cn("text-xl md:text-2xl leading-relaxed max-w-sm font-medium", utoMedium.className)}>
              Friends let friends know about fresh products and content.
            </p>
            
            <form className="relative max-w-md group">
              <input 
                type="email" 
                placeholder="Your Email" 
                className={cn("w-full bg-transparent border-2 border-black/20 rounded-xl px-6 py-4 focus:outline-none focus:border-black transition-all uppercase text-sm tracking-widest", utoBold.className)}
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ffb300] hover:bg-black hover:text-white text-black p-2 px-4 rounded-lg border-2 border-black flex items-center gap-2 transition-all active:scale-95"
              >
                <span className={cn("text-xs font-black uppercase", utoBold.className)}>Submit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right: Link Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:border-l border-black/10 md:pl-12">
            <div>
              <h4 className={cn("text-sm uppercase tracking-widest mb-6 opacity-40", utoBold.className)}>Shop</h4>
              <ul className="space-y-3">
                {footerLinks.column1.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={cn("text-sm md:text-base hover:underline", utoMedium.className)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className={cn("text-sm uppercase tracking-widest mb-6 opacity-40", utoBold.className)}>About Us</h4>
              <ul className="space-y-3">
                {footerLinks.column2.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={cn("text-sm md:text-base hover:underline", utoMedium.className)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className={cn("text-sm uppercase tracking-widest mb-6 opacity-40", utoBold.className)}>Social</h4>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={cn("text-sm md:text-base hover:underline", utoMedium.className)}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section: Bottom Links */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-black/10 gap-4">
          <div className="flex gap-8">
            <Link href="/privacy" className={cn("text-sm uppercase tracking-widest hover:underline opacity-60", utoBold.className)}>Privacy Policy</Link>
            <Link href="/terms" className={cn("text-sm uppercase tracking-widest hover:underline opacity-60", utoBold.className)}>Terms of Service</Link>
          </div>
          <p className={cn("text-sm uppercase tracking-widest opacity-60", utoBold.className)}>
            © GUTSY 2026
          </p>
        </div>

        {/* Massive Logomark Bottom Section (Reference: Graza Style) */}
        <div className="relative pt-8 pb-4 flex justify-center items-end overflow-hidden">
          <div className="relative w-full h-[25vw] md:h-[35vw] pointer-events-none select-none opacity-[0.95]">
            <Image
              src="/images/gutsy-logomark.png"
              alt="GUTSY"
              fill
              className="object-contain object-bottom brightness-0"
              priority
            />
          </div>
        </div>

      </div>
    </footer>
  );
}
