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
      // 1.5s delay for that "premium" intentional entry
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
    // Simulating API call
    setTimeout(() => {
      setStep('success');
      setStatus('idle');
      setTimeout(handleClose, 2500);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop: 
          Uses a heavier blur (backdrop-blur-md) for the Rhode aesthetic 
      */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-md z-[200] transition-opacity duration-700 animate-in fade-in"
        onClick={handleClose}
      />

      <div className="fixed inset-0 z-[201] flex items-center justify-center p-4">
        {/* Modal: 
            #F9F8F6 (Bone) background, heavy pill-rounding (60px), 
            and deep diffused shadow for that "floating" look.
        */}
        <div className="bg-[#F9F8F6] border-[1.5px] border-black/5 rounded-[40px] md:rounded-[60px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)] w-full max-w-lg relative overflow-hidden transition-all duration-500 animate-in zoom-in-95 slide-in-from-bottom-12">
          
          {/* Minimalist Close Icon */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-all"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="black" strokeWidth="1.5">
              <path d="M1 1L13 13M1 13L13 1" />
            </svg>
          </button>

          <div className="p-8 md:p-14 lg:p-16">
            {step === 'quiz' && (
              <div className="space-y-8 animate-in fade-in duration-700">
                <div className="text-center space-y-3">
                  <h2 className={cn(
                    "text-[38px] md:text-[52px] leading-[0.85] text-black tracking-tighter", 
                    utoBlack.className
                  )}>
                    Welcome to <br/>
                    <span className="inline-block mt-3 h-[0.9em]">
                      <Image src="/images/gutsy-logomark.png" alt="GUTSY" width={140} height={40} className="h-full w-auto brightness-0" />
                    </span>
                  </h2>
                  <p className={cn("text-2xl md:text-3xl text-[#f20028] -rotate-1", runWild.className)}>
                    Get 10% off your first order
                  </p>
                </div>

                <div className="space-y-3">
                  <p className={cn("text-[9px] uppercase tracking-[0.3em] text-black/40 text-center mb-5", utoBold.className)}>
                    What is your goal?
                  </p>
                  {QUIZ_OPTIONS.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleQuizSelect(option)}
                      className={cn(
                        "w-full py-4 px-6 rounded-full border border-black/5 bg-white text-black text-[15px] transition-all duration-300 hover:border-black/20 hover:scale-[1.01] active:scale-[0.97] text-center shadow-sm",
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
              <div className="space-y-8 animate-in fade-in slide-in-from-right-6 duration-500">
                <div className="text-center space-y-2">
                  <p className={cn("text-2xl text-[#f20028] mb-1", runWild.className)}>
                    {selectedOption}
                  </p>
                  <h2 className={cn("text-[40px] leading-none text-black tracking-tight", utoBlack.className)}>
                    Great choice.
                  </h2>
                  <p className="text-black/50 text-[15px] max-w-[240px] mx-auto leading-relaxed">
                    Unlock your discount by joining the club.
                  </p>
                </div>

                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={cn(
                      "w-full h-16 px-8 rounded-full bg-white border border-black/10 text-black text-lg focus:outline-none focus:border-black transition-all placeholder:text-black/15",
                      utoBold.className
                    )}
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={cn(
                      "w-full h-16 rounded-full bg-[#f20028] text-white text-[17px] tracking-wide shadow-lg hover:bg-black hover:shadow-xl transition-all duration-500 disabled:opacity-60",
                      utoBold.className
                    )}
                  >
                    {status === 'submitting' ? 'Saving...' : 'Reveal My Code'}
                  </button>
                </form>
                <p className="text-center text-[10px] text-black/30 tracking-wider">
                  NO SPAM. JUST GOOD GUTS.
                </p>
              </div>
            )}

            {step === 'success' && (
              <div className="text-center py-10 animate-in zoom-in-95 duration-500">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className={cn("text-[52px] leading-[0.9] text-black tracking-tight mb-4", utoBlack.className)}>
                  You&apos;re in!
                </h2>
                <p className={cn("text-3xl text-[#f20028] -rotate-1", runWild.className)}>
                  Check your inbox, friend.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
