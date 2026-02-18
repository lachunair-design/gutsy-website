'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

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
      const timer = setTimeout(() => setIsOpen(true), 2000);
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
      setTimeout(handleClose, 3000);
    }, 1000);
  };

  const prefersReducedMotion = typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] transition-opacity duration-500",
          prefersReducedMotion ? 'opacity-100' : 'animate-fade-in'
        )}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Welcome to GUTSY"
        className={cn(
          "fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-8",
          prefersReducedMotion ? '' : 'animate-fade-in-up'
        )}
      >
        <div className="bg-[#f3eee4]/90 backdrop-blur-xl backdrop-saturate-150 border border-white/30 rounded-3xl md:rounded-[40px] shadow-2xl w-full max-w-lg relative overflow-hidden">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
            aria-label="Close popup"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 5L15 15M5 15L15 5" />
            </svg>
          </button>

          <div className="p-8 md:p-10">
            {step === 'quiz' && (
              <div className="space-y-6">
                {/* Gut character illustration */}
                <div className="flex justify-center">
                  <svg viewBox="0 0 120 120" className="w-20 h-20" aria-hidden="true">
                    <path d="M60 15c-18 0-33 12-36 29-2 11 1 21 7 29 5 6 5 15 2 23-2 6 0 13 6 17 5 3 11 3 15-1 6-6 15-9 21-6 9 5 18-3 18-13 0-7-3-13-5-19-3-11 0-23 6-30 5-6 7-15 5-24-3-11-15-18-29-18z"
                      fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="50" cy="52" r="3" fill="black"/>
                    <circle cx="70" cy="52" r="3" fill="black"/>
                    <path d="M52 68 Q60 75 68 68" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M45 38 Q42 32 48 30" fill="none" stroke="#f20028" strokeWidth="1" strokeLinecap="round"/>
                    <path d="M75 38 Q78 32 72 30" fill="none" stroke="#f20028" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                </div>

                <div className="text-center">
                  <h2 className={cn("text-4xl md:text-5xl text-black tracking-tighter mb-2 flex items-center justify-center gap-3 flex-wrap", utoBlack.className)}>
                    Welcome to
                    <Image src="/images/gutsy-logomark.png" alt="GUTSY" width={160} height={48} className="inline-block h-[1em] w-auto brightness-0 relative top-[0.05em]" />
                  </h2>
                  <p className={cn("text-2xl text-[#f20028]", runWild.className)}>
                    Get 10% off your first order
                  </p>
                </div>

                <div className="space-y-2">
                  <p className={cn("text-xs uppercase tracking-[0.2em] text-black/40 text-center mb-3", utoBold.className)}>
                    What do you use protein for?
                  </p>
                  {QUIZ_OPTIONS.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleQuizSelect(option)}
                      className={cn(
                        "w-full min-h-[48px] px-6 py-3 rounded-full border border-black/10 bg-white text-black text-base text-left transition-all duration-300 hover:border-[#f20028] hover:shadow-md active:scale-[0.98]",
                        selectedOption === option && 'border-[#f20028] bg-[#f20028]/5 shadow-md',
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
              <div className="space-y-6">
                <div className="text-center">
                  <p className={cn("text-lg text-[#f20028] mb-2", runWild.className)}>
                    {selectedOption}
                  </p>
                  <h2 className={cn("text-3xl md:text-4xl text-black tracking-tighter mb-2", utoBlack.className)}>
                    Great choice.
                  </h2>
                  <p className="text-black/60 text-base">
                    Enter your email to unlock 10% off your first order.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cn(
                      "w-full h-14 px-6 rounded-full bg-white border border-black/10 text-black text-base placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#f20028]/20 focus:border-[#f20028] transition-all",
                      utoBold.className
                    )}
                    autoFocus
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={cn(
                      "w-full h-14 rounded-full bg-[#f20028] text-white text-lg font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-60",
                      utoBold.className
                    )}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Get My Discount'}
                  </button>
                </form>

                <p className="text-center text-xs text-black/30">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            )}

            {step === 'success' && (
              <div className="space-y-6 text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#f20028]/10 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f20028" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className={cn("text-3xl text-black tracking-tighter", utoBlack.className)}>
                  You&apos;re in!
                </h2>
                <p className={cn("text-xl text-[#f20028]", runWild.className)}>
                  Check your inbox for your discount code.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
