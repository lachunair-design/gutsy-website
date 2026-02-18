'use client';

import { useState } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

interface EmailCaptureProps {
  /** Compact variant for embedding in the footer */
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
        <p className={cn('text-xs uppercase tracking-[0.3em] font-bold mb-4 opacity-40 text-white', utoBold.className)}>
          Stay in the loop
        </p>
        {status === 'success' ? (
          <p className={cn('text-2xl lowercase text-[#ffb300]', runWild.className)}>you&apos;re in!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 px-6 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:bg-white/10 transition-all"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'h-12 px-8 rounded-full bg-[#ffb300] text-black text-sm font-bold transition-transform hover:scale-105 active:scale-95 disabled:opacity-60',
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
    <div className="py-24 text-center">
      {/* Editorial Heading: Sentence case, no-screaming */}
      <h2 className={cn('text-6xl md:text-[100px] text-black leading-[0.85] tracking-tighter mb-4 flex items-center justify-center gap-4 flex-wrap', utoBlack.className)}>
        Stay
        <Image src="/images/gutsy-logomark.png" alt="Gutsy" width={320} height={96} className="inline-block h-[0.8em] w-auto brightness-0 relative top-[0.02em]" />
      </h2>
      
      <p className={cn('text-3xl md:text-5xl text-[#f20028] mb-12', runWild.className)}>
        tips, drops & gut-friendly goodness — straight to your inbox.
      </p>

      {status === 'success' ? (
        <p className={cn('text-4xl md:text-5xl lowercase text-[#ffb300]', runWild.className)}>
          you&apos;re on the list!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto px-4">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              'flex-1 h-16 md:h-20 px-8 rounded-full bg-white border border-black/5 text-black text-xl placeholder:text-black/20 focus:outline-none focus:ring-2 focus:ring-[#ffb300]/20 transition-all shadow-sm',
              utoBold.className
            )}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={cn(
              'h-16 md:h-20 px-12 rounded-full bg-black text-[#f3eee4] text-xl font-bold transition-all hover:bg-[#f20028] hover:scale-105 active:scale-95 shadow-xl disabled:opacity-60',
              utoBold.className
            )}
          >
            {status === 'submitting' ? 'Joining...' : 'Sign me up'}
          </button>
        </form>
      )}
      
      <p className={cn("mt-8 text-[10px] uppercase tracking-[0.3em] text-black/20 font-black", utoBold.className)}>
        enzymatically pre-digested updates only
      </p>
    </div>
  );
}
