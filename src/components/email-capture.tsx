'use client';

import { useState } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

interface EmailCaptureProps {
  compact?: boolean;
}

export function EmailCapture({ compact = false }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 800);
  };

  if (compact) {
    return (
      <div className="w-full">
        {/* Footer Variant: Clean, low-friction, premium */}
        <p className={cn('text-[10px] uppercase tracking-[0.25em] mb-4 opacity-50 text-white', utoBold.className)}>
          Join the gut club
        </p>
        {status === 'success' ? (
          <p className={cn('text-2xl text-[#f20028] animate-in fade-in slide-in-from-bottom-2', runWild.className)}>
            you&apos;re in!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-[#f20028] transition-all"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'h-12 px-6 rounded-full bg-white text-black text-xs uppercase tracking-widest hover:bg-[#f20028] hover:text-white transition-all duration-300 disabled:opacity-60',
                utoBold.className
              )}
            >
              {status === 'submitting' ? '...' : 'Join'}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="py-24 md:py-32 px-6 text-center bg-[#F9F8F6]">
      {/* Editorial Heading: Super-scale Graza energy */}
      <h2 className={cn(
        'text-[64px] md:text-[120px] lg:text-[140px] text-black leading-[0.8] tracking-[-0.04em] mb-6', 
        utoBlack.className
      )}>
        Stay Gutsy
      </h2>
      
      <p className={cn(
        'text-3xl md:text-5xl text-[#f20028] mb-12 max-w-2xl mx-auto -rotate-1', 
        runWild.className
      )}>
        tips, drops & gut-friendly goodness.
      </p>

      {status === 'success' ? (
        <div className="animate-in zoom-in-95 duration-500">
          <p className={cn('text-4xl md:text-5xl text-black', runWild.className)}>
            you&apos;re on the list!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              'flex-[2] h-16 md:h-20 px-8 rounded-full bg-white border border-black/5 text-black text-xl placeholder:text-black/20 focus:outline-none focus:border-black transition-all shadow-[0_4px_20px_rgba(0,0,0,0.03)]',
              utoBold.className
            )}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={cn(
              'flex-1 h-16 md:h-20 px-10 rounded-full bg-black text-white text-lg tracking-tight hover:bg-[#f20028] active:scale-[0.98] transition-all duration-500 shadow-xl disabled:opacity-60',
              utoBold.className
            )}
          >
            {status === 'submitting' ? 'Saving...' : 'Sign me up'}
          </button>
        </form>
      )}
      
      {/* Playful Fine Print */}
      <div className="mt-12 flex items-center justify-center gap-4 opacity-20">
        <div className="h-[1px] w-12 bg-black" />
        <p className={cn("text-[9px] uppercase tracking-[0.4em] text-black font-black", utoBold.className)}>
          NO SPAM. JUST GOOD GUTS.
        </p>
        <div className="h-[1px] w-12 bg-black" />
      </div>
    </div>
  );
}
