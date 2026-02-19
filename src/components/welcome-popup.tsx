'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

// Brand Fonts
const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

const QUIZ_OPTIONS = [
  'Post-workout recovery',
  'Daily nutrition',
  'Energy boost',
  'All of the above',
];

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'quiz' | 'email' | 'success'>('quiz');
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

  useEffect(() => {
    const dismissed = sessionStorage.getItem('gutsy-popup-dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('gutsy-popup-dismissed', 'true');
  };

  const handleQuizSelect = (option: string) => {
    setSelectedOption(option);
    setTimeout(() => setStep('email'), 400);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStep('success');
      setStatus('idle');
      setTimeout(handleClose, 2500);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-[#F9F8F6] animate-in fade-in slide-in-from-bottom-full duration-700 ease-in-out">
      
      {/* Minimalist Close Icon - Moved to corner with higher prominence */}
      <button
        onClick={handleClose}
        className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-all active:scale-90"
        aria-label="Close"
      >
        <svg width="20" height="20" viewBox="0 0 14 14" fill="none" stroke="black" strokeWidth="1.5">
          <path d="M1 1L13 13M1 13L13 1" />
        </svg>
      </button>

      <div className="w-full max-w-2xl px-6 py-12 flex flex-col items-center justify-center min-h-screen">
        
        {step === 'quiz' && (
          <div className="w-full space-y-12 animate-in fade-in zoom-in-95 duration-700">
            <div className="text-center space-y-4">
              <h2 className={cn(
                "text-[50px] md:text-[80px] leading-[0.8] text-black tracking-tighter", 
                utoBlack.className
              )}>
                Welcome to <br/>
                <span className="inline-block mt-4 h-[0.9em]">
                  <Image src="/images/gutsy-logomark.png" alt="GUTSY" width={180} height={80} className="h-full w-auto brightness-0" />
                </span>
              </h2>
              <p className={cn("text-3xl md:text-5xl text-[#f20028] -rotate-2", runWild.className)}>
                Get 10% off your first order
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <p className={cn("col-span-full text-[10px] uppercase tracking-[0.4em] text-black/40 text-center mb-4", utoBold.className)}>
                Select your goal to unlock
              </p>
              {QUIZ_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => handleQuizSelect(option)}
                  className={cn(
                    "w-full py-6 px-8 rounded-full border border-black/10 bg-white text-black text-lg transition-all duration-300 hover:border-black hover:scale-[1.02] active:scale-[0.98] text-center shadow-sm hover:shadow-xl",
                    utoBold.className
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'email' && (
          <div className="w-full max-w-md space-y-10 animate-in fade-in slide-in-from-right-12 duration-500">
            <div className="text-center space-y-3">
              <p className={cn("text-3xl text-[#f20028]", runWild.className)}>
                {selectedOption}
              </p>
              <h2 className={cn("text-[50px] md:text-[60px] leading-none text-black tracking-tighter", utoBlack.className)}>
                Great choice.
              </h2>
              <p className="text-black/50 text-lg leading-relaxed">
                Unlock your discount by joining the club.
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                required
                autoFocus
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  "w-full h-20 px-10 rounded-full bg-white border border-black/10 text-black text-xl focus:outline-none focus:border-black transition-all placeholder:text-black/15 shadow-sm",
                  utoBold.className
                )}
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={cn(
                  "w-full h-20 rounded-full bg-[#f20028] text-white text-xl tracking-wide shadow-2xl hover:bg-black hover:shadow-black/20 transition-all duration-500 disabled:opacity-60",
                  utoBold.className
                )}
              >
                {status === 'submitting' ? 'Saving...' : 'Reveal My Code'}
              </button>
            </form>
            <p className="text-center text-[10px] text-black/30 tracking-[0.3em] font-black">
              NO SPAM. JUST GOOD GUTS.
            </p>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center space-y-8 animate-in zoom-in-95 duration-500">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#f20028] text-white shadow-2xl animate-bounce">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <h2 className={cn("text-[60px] md:text-[80px] leading-none text-black tracking-tighter mb-4", utoBlack.className)}>
                You&apos;re in!
              </h2>
              <p className={cn("text-4xl text-[#f20028] -rotate-1", runWild.className)}>
                Check your inbox, friend.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
