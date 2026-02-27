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
  // Navigation columns updated per brand-copy.md Section 0
  goods: [
    { name: 'The Goods (Shop All)', href: '/products' },
    { name: 'Vanilla Calm', href: '/products/vanilla-calm' },
    { name: 'Cacao Boost', href: '/products/cacao-boost' },
  ],
  logic: [
    { name: 'The Logic (Science)', href: '/science' },
    { name: 'The Accidental Backstory (About)', href: '/about' },
    { name: 'Boring Answers (FAQ)', href: '/FAQ' },
    { name: 'Human Support (Contact)', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Shipping Policy', href: '/shipping' },
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
    <footer className={cn("bg-[#f3eee4] text-black selection:bg-yellow", utoMedium.className)}>
      {/* Newsletter signup - Updated with "Annoying but Useful" Copy */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className={cn("text-5xl md:text-7xl text-black tracking-tighter mb-4 uppercase", utoBlack.className)}>
              10% off for the curious
            </h3>
            <div className="space-y-2 mb-10">
              <p className={cn("text-xl md:text-3xl text-red lowercase leading-tight", runWild.className)}>
                We do not like spam either. But we do like 10% off.
              </p>
              <p className={cn("text-sm md:text-base text-black/60 max-w-md mx-auto leading-snug", utoMedium.className)}>
                No hustle‑culture emails. We only send stuff when we actually have something to say.
              </p>
            </div>

            {status === 'success' ? (
              <p className={cn("text-2xl text-red font-black uppercase tracking-widest", utoBold.className)}>
                Check your inbox for the code.
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
                    "flex-1 h-16 px-8 rounded-full bg-white border border-black/10 text-black text-base placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-red/20 focus:border-red transition-all shadow-sm",
                    utoBold.className
                  )}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={cn(
                    "h-16 px-10 rounded-full bg-red text-white text-xs uppercase tracking-widest font-black shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-60",
                    utoBold.className
                  )}
                >
                  {status === 'submitting' ? '...' : 'Send me the code'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer columns */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {/* Column 1 - Manifesto per Section 0 Footer */}
            <div className="col-span-2 md:col-span-1 space-y-6">
              <div className="relative w-32 h-10">
                <Image
                  src="/images/gutsy-logomark.png"
                  alt="GUTSY"
                  fill
                  className="object-contain object-left brightness-0"
                />
              </div>
              <p className={cn("text-sm text-black leading-snug font-bold", utoMedium.className)}>
                GUTSY. Built because we were tired of feeling heavy.
              </p>
              {/* Socials per brand-copy.md Section 0 */}
              <div className="flex items-center gap-3 pt-2">
                <a href="https://instagram.com/gutsy.world" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-red transition-colors duration-300">
                   Instagram
                </a>
                <a href="https://wa.me/971500000000" className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-red transition-colors duration-300">
                   WhatsApp
                </a>
              </div>
            </div>

            {/* Column 2 - The Goods */}
            <div>
              <h4 className={cn("text-[10px] uppercase tracking-[0.2em] mb-6 text-black/40 font-black", utoBold.className)}>The Goods</h4>
              <ul className="space-y-4">
                {footerLinks.goods.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-black hover:text-red transition-colors font-bold uppercase tracking-widest">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - The Logic */}
            <div>
              <h4 className={cn("text-[10px] uppercase tracking-[0.2em] mb-6 text-black/40 font-black", utoBold.className)}>The Logic</h4>
              <ul className="space-y-4">
                {footerLinks.logic.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-black hover:text-red transition-colors font-bold uppercase tracking-widest">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Legal */}
            <div>
              <h4 className={cn("text-[10px] uppercase tracking-[0.2em] mb-6 text-black/40 font-black", utoBold.className)}>Legal</h4>
              <ul className="space-y-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-black/40 hover:text-red transition-colors font-bold uppercase tracking-widest">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Reward line & Bottom bar per brand-copy.md Section 0 */}
      <div className="border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className={cn("text-[10px] uppercase tracking-widest font-black text-black/30", utoBold.className)}>
            &copy; 2026 GUTSY. Dispatching from Dubai.
          </p>
          <div className="flex items-center gap-6">
            <p className={cn("text-[10px] uppercase tracking-widest font-black text-black/20", utoBold.className)}>
              You reached the bottom of the page. Go reward yourself with a shake.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}