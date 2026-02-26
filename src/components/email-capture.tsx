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
        {/* Footer Variant: Low friction. Zero fluff. */}
        <p className={cn('text-[10px] uppercase tracking-[0.3em] mb-4 font-black text-white/40', utoBold.className)}>
          10% off for the curious
        </p>
        {status === 'success' ? (
          <p className={cn('text-2xl text-yellow animate-in fade-in slide-in-from-bottom-2', runWild.className)}>
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
              className="flex-1 h-14 px-6 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-red transition-all"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'h-14 px-8 rounded-full bg-white text-black text-[10px] uppercase tracking-widest font-black hover:bg-red hover:text-white transition-all duration-300 disabled:opacity-60',
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
    <div className="py-24 md:py-40 px-6 text-center bg-linen border-t border-black/5">
      {/* Editorial Heading: Massive scale anti-marketing */}
      <h2 className={cn(
        'text-[60px] md:text-[120px] lg:text-[160px] text-black leading-[0.8] tracking-tighter mb-6 uppercase font-black', 
        utoBlack.className
      )}>
        The List.
      </h2>
      
      <p className={cn(
        'text-3xl md:text-5xl text-red mb-12 max-w-3xl mx-auto -rotate-1 leading-tight', 
        runWild.className
      )}>
        we do not like spam either. join the list and we will send a code for your first bag.
      </p>

      {status === 'success' ? (
        <div className="animate-in zoom-in-95 duration-500 py-10">
          <p className={cn('text-5xl md:text-7xl text-black font-black uppercase tracking-tighter', utoBlack.className)}>
            Check your inbox.
          </p>
          <p className={cn('text-2xl text-red mt-4', runWild.className)}>it is already on the way.</p>
        </div>
      ) : (
        <div className="space-y-8">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                'flex-[2] h-18 md:h-24 px-10 rounded-full bg-white border border-black/5 text-black text-xl placeholder:text-black/20 focus:outline-none focus:border-black transition-all shadow-sm',
                utoBold.className
              )}
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'flex-1 h-18 md:h-24 px-12 rounded-full bg-red text-white text-xs uppercase tracking-widest font-black hover:bg-black active:scale-[0.98] transition-all duration-500 shadow-xl disabled:opacity-60',
                utoBold.className
              )}
            >
              {status === 'submitting' ? '...' : 'Join the list'}
            </button>
          </form>

          <p className={cn("text-[10px] uppercase tracking-[0.4em] text-black/30 font-black", utoBold.className)}>
            NO HUSTLE CULTURE EMAILS. EVER.
          </p>
        </div>
      )}
    </div>
  );
}