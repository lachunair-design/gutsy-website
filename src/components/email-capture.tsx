'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

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
        {/* Footer Variant: High contrast EDM style */}
        <p className={cn('text-[10px] uppercase tracking-[0.4em] mb-4 font-black text-black/40', utoBold.className)}>
          10% off for the curious
        </p>
        {status === 'success' ? (
          <p className={cn('text-2xl text-black animate-in fade-in slide-in-from-bottom-2', runWild.className)}>
            check your inbox.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              required
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-14 px-6 rounded-full bg-black/5 border border-black/10 text-black placeholder:text-black/30 text-sm focus:outline-none focus:border-black transition-all"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'h-14 px-8 rounded-full bg-black text-yellow text-[10px] uppercase tracking-widest font-black hover:bg-white hover:text-black transition-brand-out duration-300 disabled:opacity-60 shadow-lg',
                utoBold.className
              )}
            >
              {status === 'submitting' ? '...' : 'Get it'}
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className="py-24 md:py-40 px-6 text-center bg-gradient-to-b from-linen via-yellow to-linen border-y border-black/5">
      {/* Editorial Heading: Massive scale, tight leading */}
      <h2 className={cn(
        'text-[70px] md:text-[140px] lg:text-[180px] text-black leading-brand-none tracking-tighter mb-4 uppercase font-black', 
        utoBlack.className
      )}>
        The List.
      </h2>
      
      <p className={cn(
        'text-3xl md:text-6xl text-black mb-16 max-w-4xl mx-auto -rotate-1 leading-tight lowercase', 
        runWild.className
      )}>
        we do not like spam either. join the list and we will send a code for your first bag.
      </p>

      {status === 'success' ? (
        <div className="animate-in zoom-in-95 duration-500 py-10">
          <p className={cn('text-5xl md:text-8xl text-black font-black uppercase tracking-tighter leading-none', utoBlack.className)}>
            Check your <br/> inbox.
          </p>
          <p className={cn('text-4xl text-black mt-6 font-runwild', runWild.className)}>it is already on the way.</p>
        </div>
      ) : (
        <div className="space-y-10">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                'flex-[2] h-20 md:h-24 px-10 rounded-full bg-white border-2 border-black/5 text-black text-xl placeholder:text-black/20 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all shadow-sm',
                utoBold.className
              )}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'flex-1 h-20 md:h-24 px-12 rounded-full bg-black text-yellow text-sm uppercase tracking-widest font-black hover:bg-white hover:text-black active:scale-[0.98] transition-brand-out duration-500 shadow-2xl disabled:opacity-60',
                utoBold.className
              )}
            >
              {status === 'submitting' ? '...' : 'Join the list'}
            </button>
          </form>

          <p className={cn("text-[11px] uppercase tracking-[0.5em] text-black/40 font-black", utoBold.className)}>
            NO HUSTLE CULTURE EMAILS. EVER.
          </p>
        </div>
      )}
    </div>
  );
}