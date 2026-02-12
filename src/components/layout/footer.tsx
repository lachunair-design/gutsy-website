'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import localFont from 'next/font/local';

// Corrected paths for src/components/layout/footer.tsx
const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

const footerLinks = {
  column1: [
    { name: 'About Us', href: '/about' },
    { name: 'FAQs', href: '/FAQ' },
    { name: 'Contact', href: '/contact' },
    { name: 'Shop', href: '/products' },
  ],
  column2: [
    { name: 'Shipping', href: '/FAQ#shipping' },
    { name: 'Returns', href: '/FAQ#returns' },
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
    <footer className="bg-[#121417] text-white pt-24 pb-12 rounded-t-[40px] relative overflow-hidden">
      {/* 10% Off Tab - Interactive Copy Button */}
      <button 
        onClick={handleCopy}
        className="absolute left-0 top-1/3 bg-white text-[#121417] py-8 px-3 rounded-r-2xl border border-gray-200 shadow-lg flex items-center justify-center transition-transform active:scale-95 hover:bg-[#f3eee4] z-20"
      >
        <span className={`vertical-text text-xl font-bold rotate-180 [writing-mode:vertical-lr] ${utoBold.className}`}>
          {copied ? 'Copied!' : '10% Off'}
        </span>
      </button>

      <div className="mx-auto max-w-7xl px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
          
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link href="/" className="relative w-40 h-10">
              <Image
                src="/images/gutsy-logomark.png"
                alt="GUTSY"
                fill
                className="object-contain brightness-0 invert" 
                priority
              />
            </Link>
            <div className="h-10 w-[1px] bg-white/30 hidden md:block" /> 
            
            <span className={`text-xl lowercase tracking-tight opacity-90 ${utoBold.className}`}>
              no guts. no glory.
            </span>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-x-24 gap-y-4">
            <ul className="space-y-3">
              {footerLinks.column1.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className={`text-2xl md:text-3xl hover:line-through transition-all ${utoBlack.className}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {footerLinks.column2.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className={`text-2xl md:text-3xl hover:line-through transition-all ${utoBlack.className}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Metadata */}
        <div className={`flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[15px] tracking-[0.2em] ${utoMedium.className}`}>
          <p className="opacity-60">
            © 2026. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3 mt-6 md:mt-0 group cursor-pointer">
            <span className="opacity-60 group-hover:opacity-100 transition-opacity lowercase font-mono">
              @gutsy.world
            </span>
            <div className="p-2 border border-white/20 rounded-full group-hover:bg-white group-hover:text-black transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
