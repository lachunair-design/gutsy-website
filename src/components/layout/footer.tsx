'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const footerLinks = {
  shop: [
    { name: 'Vanilla Calm', href: '/products/vanilla-calm' },
    { name: 'Cacao Boost', href: '/products/cacao-boost' },
    { name: 'Subscribe & Save', href: '/products' },
    { name: 'Shop All', href: '/products' },
  ],
  learn: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Story', href: '/about' },
    { name: 'FAQs', href: '/FAQ' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Shipping Policy', href: '/shipping' },
    { name: 'Returns & Refunds', href: '/FAQ#buying' },
  ],
};

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 800);
  };

  return (
    <footer className={cn("bg-[#f3eee4] text-black selection:bg-[#ffb300]", utoMedium.className)}>
      {/* Newsletter signup - Full width above columns */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className={cn("text-4xl md:text-5xl text-black tracking-tighter mb-3", utoBlack.className)}>
              Join the Inner Circle
            </h3>
            <p className={cn("text-xl md:text-2xl text-[#f20028] lowercase mb-8", runWild.className)}>
              tips, drops & gut-friendly goodness
            </p>

            {status === 'success' ? (
              <p className={cn("text-2xl text-[#ffb300]", runWild.className)}>
                you&apos;re on the list!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "flex-1 h-14 px-6 rounded-full bg-white border border-black/10 text-black text-base placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#f20028]/20 focus:border-[#f20028] transition-all shadow-sm",
                    utoBold.className
                  )}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={cn(
                    "h-14 px-8 rounded-full bg-[#f20028] text-white text-base font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-60",
                    utoBold.className
                  )}
                >
                  {status === 'submitting' ? '...' : 'Subscribe'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {/* Column 1 - Brand */}
            <div className="col-span-2 md:col-span-1 space-y-4">
              <div className="relative w-28 h-10">
                <Image
                  src="/images/gutsy-logomark.png"
                  alt="GUTSY"
                  fill
                  className="object-contain object-left brightness-0"
                />
              </div>
              <p className={cn("text-sm text-black/60", utoMedium.className)}>
                Gut-Friendly Protein
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com/gutsy.world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-[#f20028] transition-colors duration-300"
                  aria-label="Follow GUTSY on Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/971500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-[#f20028] transition-colors duration-300"
                  aria-label="Contact GUTSY on WhatsApp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 - Shop */}
            <div>
              <h4 className={cn("text-xs uppercase tracking-[0.2em] mb-4 text-black/40", utoBold.className)}>Shop</h4>
              <ul className="space-y-3">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-black/70 hover:text-[#f20028] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Learn */}
            <div>
              <h4 className={cn("text-xs uppercase tracking-[0.2em] mb-4 text-black/40", utoBold.className)}>Learn</h4>
              <ul className="space-y-3">
                {footerLinks.learn.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-black/70 hover:text-[#f20028] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Legal */}
            <div>
              <h4 className={cn("text-xs uppercase tracking-[0.2em] mb-4 text-black/40", utoBold.className)}>Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-black/70 hover:text-[#f20028] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className={cn("text-xs text-black/40", utoBold.className)}>
            &copy; 2025 GUTSY Wellness Co LLC FZ
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-black/40 hover:text-[#f20028] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-black/40 hover:text-[#f20028] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Logomark */}
      <div className="relative flex justify-center items-end overflow-hidden pb-4">
        <div className="relative w-full h-[10vw] md:h-[14vw] pointer-events-none select-none opacity-[0.06]">
          <Image
            src="/images/gutsy-logomark.png"
            alt=""
            fill
            className="object-contain object-bottom brightness-0"
            aria-hidden="true"
          />
        </div>
      </div>
    </footer>
  );
}
