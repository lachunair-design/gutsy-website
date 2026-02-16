'use client';

import { useState } from 'react';
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
    // TODO: wire up to email service (Klaviyo, Mailchimp, etc.)
    setTimeout(() => setStatus('success'), 800);
  };

  if (compact) {
    return (
      <div className="w-full">
        <p className={cn('text-sm uppercase tracking-[0.2em] font-bold mb-3 opacity-60', utoBold.className)}>
          Stay in the loop
        </p>
        {status === 'success' ? (
          <p className={cn('text-2xl lowercase text-[#ffb300]', runWild.className)}>you&apos;re in!</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              className="flex-1 h-12 px-4 rounded-full bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 text-sm font-medium focus:outline-none focus:border-[#ffb300] transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'h-12 px-6 rounded-full bg-[#ffb300] text-black border-2 border-black text-sm uppercase font-bold transition-all hover:bg-white disabled:opacity-60',
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
    <div className="bg-[#f20028] rounded-[30px] md:rounded-[60px] p-8 md:p-16 border-4 border-black shadow-[6px_6px_0px_0px_#000] sm:shadow-[10px_10px_0px_0px_#000] lg:shadow-[15px_15px_0px_0px_#000] text-center">
      <h2 className={cn('text-4xl md:text-7xl uppercase text-black leading-[0.9] mb-4', utoBlack.className)}>
        Stay Gutsy
      </h2>
      <p className={cn('text-3xl md:text-4xl lowercase text-[#f3eee4] mb-8', runWild.className)}>
        tips, drops &amp; gut-friendly goodness — straight to your inbox.
      </p>
      {status === 'success' ? (
        <p className={cn('text-4xl md:text-5xl lowercase text-[#ffb300]', runWild.className)}>
          you&apos;re on the list!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            className={cn(
              'flex-1 h-14 md:h-16 px-6 rounded-full bg-white border-2 border-black text-black text-lg font-bold placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#ffb300] transition-all',
              utoBold.className
            )}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={cn(
              'h-14 md:h-16 px-10 rounded-full bg-black text-[#f3eee4] border-2 border-black text-lg uppercase font-bold shadow-[4px_4px_0px_0px_#ffb300] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-60',
              utoBold.className
            )}
          >
            {status === 'submitting' ? 'Joining...' : 'Sign Me Up'}
          </button>
        </form>
      )}
    </div>
  );
}
