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
    { name: 'Ways to Use It (Recipes)', href: '/recipes' },
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
                <a
                  href="https://instagram.com/gutsy.world"
                  aria-label="Follow GUTSY on Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-red transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://wa.me/971500000000"
                  aria-label="Contact GUTSY on WhatsApp"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-red transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                  </svg>
                  <span className="sr-only">WhatsApp</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/alwaysgutsy"
                  aria-label="Follow GUTSY on LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-red transition-colors duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="sr-only">LinkedIn</span>
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