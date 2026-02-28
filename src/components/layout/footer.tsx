'use client';

import Link from 'next/link';
import { useState } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const footerLinks = {
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
    <footer className={cn("bg-linen text-black selection:bg-yellow border-t border-black/5", utoMedium.className)}>
      {/* ═══ 1. Newsletter Section ═══ */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-b border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <h3 className={cn("text-6xl md:text-8xl tracking-tighter leading-none uppercase mb-6", utoBlack.className)}>
              10% for the <br/> curious.
            </h3>
            <p className={cn("text-2xl md:text-4xl text-red lowercase mb-4", runWild.className)}>
              We do not like spam either. But we do like 10% off.
            </p>
            <p className="opacity-60 text-lg leading-snug max-w-sm">
              No hustle‑culture emails. We only send stuff when we actually have something to say.
            </p>
          </div>

          <div className="w-full max-w-md">
            {status === 'success' ? (
              <div className="p-8 rounded-[40px] bg-yellow/20 border-2 border-yellow animate-in zoom-in-95">
                <p className={cn("text-2xl text-black font-black uppercase tracking-tight", utoBold.className)}>
                  Check your inbox. <br/> it is already on the way.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative group">
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={cn(
                    "w-full h-20 px-8 rounded-full bg-white border-2 border-black/5 text-xl outline-none focus:border-yellow transition-all shadow-sm",
                    utoBold.className
                  )}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="absolute right-2 top-2 bottom-2 px-8 rounded-full bg-black text-yellow uppercase font-black text-xs tracking-widest hover:bg-red hover:text-white transition-all active:scale-95 disabled:opacity-50"
                >
                  {status === 'submitting' ? '...' : 'Join'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ═══ 2. Navigation Columns ═══ */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="col-span-2 lg:col-span-2 space-y-8">
            <h2 className={cn("text-5xl tracking-tighter uppercase font-black", utoBlack.className)}>GUTSY</h2>
            <p className="text-xl font-bold leading-tight max-w-[240px]">
              Built because we were tired of feeling heavy.
            </p>
            {/* Socials - Fixed overlapping text by using Lucide Icons */}
            <div className="flex items-center gap-4">
              <SocialCircle href="https://instagram.com/gutsy.world" icon={<Instagram size={20}/>} />
              <SocialCircle href="https://wa.me/971500000000" icon={<MessageCircle size={20}/>} />
              <SocialCircle href="https://linkedin.com/company/alwaysgutsy" icon={<Linkedin size={20}/>} />
            </div>
          </div>

          {/* Links: The Goods */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] mb-8 opacity-40 font-black">The Goods</h4>
            <ul className="space-y-4">
              {footerLinks.goods.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-black uppercase tracking-widest hover:text-red transition-colors">
                    {link.name}
                  </li>
                ))}
            </ul>
          </div>

          {/* Links: The Logic */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] mb-8 opacity-40 font-black">The Logic</h4>
            <ul className="space-y-4">
              {footerLinks.logic.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-black uppercase tracking-widest hover:text-red transition-colors">
                    {link.name}
                  </li>
                ))}
            </ul>
          </div>

          {/* Links: Legal */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] mb-8 opacity-40 font-black">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-black uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-red transition-all">
                    {link.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ═══ 3. Bottom Bar ═══ */}
      <div className="border-t border-black/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-30">
            &copy; 2026 GUTSY. Dispatching from Dubai.
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-20 text-center md:text-right">
            You reached the bottom of the page. <br className="md:hidden"/> Go reward yourself with a shake.
          </p>
        </div>
      </div>
    </footer>
  );
}

{/* Fixed Social Circle Component */}
function SocialCircle({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white hover:bg-yellow hover:text-black transition-all duration-500 active:scale-90 shadow-lg"
    >
      {icon}
    </a>
  );
}