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
        <p className={cn('text-[10px] uppercase tracking-[0.4em] mb-3 font-black text-black/40', utoBold.className)}>
          10% off for the curious
        </p>
        {status === 'success' ? (
          <p className={cn('text-xl text-black animate-in fade-in slide-in-from-bottom-1', runWild.className)}>
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
              className="flex-1 h-12 px-5 rounded-full bg-black/5 border border-black/10 text-black placeholder:text-black/30 text-sm focus:outline-none focus:border-black transition-all"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'h-12 px-6 rounded-full bg-black text-yellow text-[10px] uppercase tracking-widest font-black hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-60 shadow-md',
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
    // Section optimized with reduced padding and the soft EDM yellow gradient
    <div className="py-16 md:py-24 px-6 text-center bg-gradient-to-b from-linen-light via-yellow to-linen-light border-y border-black/5">
      {/* Editorial Heading: Massive scale, tight leading */}
      <h2 className={cn(
        'text-[60px] md:text-[120px] lg:text-[140px] text-black leading-brand-none tracking-tighter mb-2 uppercase font-black', 
        utoBlack.className
      )}>
        The List.
      </h2>
      
      <p className={cn(
        'text-2xl md:text-5xl text-black mb-10 max-w-4xl mx-auto -rotate-1 leading-tight lowercase opacity-90', 
        runWild.className
      )}>
        we do not like spam either. join the list and we will send a code for your first bag.
      </p>

      {status === 'success' ? (
        <div className="animate-in zoom-in-95 duration-500 py-6">
          <p className={cn('text-4xl md:text-7xl text-black font-black uppercase tracking-tighter leading-none', utoBlack.className)}>
            Check your <br/> inbox.
          </p>
          <p className={cn('text-3xl text-black mt-4 font-runwild', runWild.className)}>it is already on the way.</p>
        </div>
      ) : (
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                'flex-[2] h-16 md:h-20 px-8 rounded-full bg-white border-2 border-black/5 text-lg placeholder:text-black/20 focus:outline-none focus:ring-4 focus:ring-black/5 transition-all shadow-sm',
                utoBold.className
              )}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'flex-1 h-16 md:h-20 px-10 rounded-full bg-black text-yellow text-xs uppercase tracking-widest font-black hover:bg-white hover:text-black active:scale-[0.98] transition-all duration-500 shadow-xl disabled:opacity-60',
                utoBold.className
              )}
            >
              {status === 'submitting' ? '...' : 'Join the list'}
            </button>
          </form>

          <p className={cn("text-[10px] uppercase tracking-[0.4em] text-black/40 font-black", utoBold.className)}>
            NO HUSTLE CULTURE EMAILS. EVER.
          </p>
        </div>
      )}
    </div>
  );
}