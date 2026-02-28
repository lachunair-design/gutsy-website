'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X, ArrowRight, Check } from 'lucide-react';

const SESSION_KEY = 'gutsy-popup-dismissed';

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<'intro' | 'success'>('intro');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');

  useEffect(() => {
    if (typeof sessionStorage === 'undefined') return;
    const dismissed = sessionStorage.getItem(SESSION_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 4000); 
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem(SESSION_KEY, 'true');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStep('success');
      setStatus('idle');
      setTimeout(handleClose, 3000);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-700 font-uto">
      {/* Container with the EDM Yellow Gradient Palette */}
      <div className="relative w-full max-w-lg bg-gradient-to-br from-linen via-yellow to-linen rounded-brand-xl p-8 md:p-14 shadow-2xl border-4 border-white/20 text-center overflow-hidden">
        
        {/* Decorative subtle glow in the background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 blur-3xl rounded-full -mr-10 -mt-10" />

        <button
          onClick={handleClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black text-black hover:text-yellow transition-all group z-10"
        >
          <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
        </button>

        {step === 'intro' ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative z-10">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-black/50">
                The annoying but useful popup.
              </p>
              <h2 className="text-black text-5xl md:text-8xl font-black uppercase tracking-tighter leading-brand-none">
                10% for the <br />
                <span className="text-black font-runwild text-4xl md:text-7xl lowercase -rotate-2 inline-block mt-2">curious.</span>
              </h2>
              <p className="text-black/80 text-lg md:text-xl font-bold pt-4 leading-snug">
                We do not like spam either. But we do like 10% off. Join the list and we will send you a code for your first bag.
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="relative max-w-sm mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-16 px-8 rounded-full bg-white border-2 border-black/5 text-black text-lg outline-none focus:ring-4 focus:ring-black/5 transition-all font-bold placeholder:text-black/20"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="absolute right-2 top-2 bottom-2 aspect-square rounded-full bg-black text-yellow flex items-center justify-center hover:bg-red hover:text-white transition-brand-out disabled:opacity-50 shadow-lg"
              >
                {status === 'submitting' ? (
                  <div className="w-5 h-5 border-2 border-yellow/30 border-t-yellow rounded-full animate-spin" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </button>
            </form>

            <p className="text-[10px] uppercase tracking-widest font-black text-black/30">
              No awkward phone calls. No guilt-trip scripts.
            </p>
          </div>
        ) : (
          <div className="py-8 space-y-6 animate-in zoom-in-95 duration-500 relative z-10">
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mx-auto shadow-xl">
              <Check className="w-12 h-12 text-yellow stroke-[4]" />
            </div>
            <div className="space-y-2">
              <h2 className="text-black text-5xl font-black uppercase tracking-tighter leading-none">
                Check your <br /> inbox.
              </h2>
              <p className="font-runwild text-4xl text-black mt-4">it is already on the way.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}