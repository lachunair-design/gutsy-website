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
      <div className="relative w-full max-w-lg bg-linen rounded-[40px] p-8 md:p-14 shadow-2xl border border-black/5 text-center">
        
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black text-black hover:text-linen transition-all group"
        >
          <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
        </button>

        {step === 'intro' ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] font-black text-black/40">
                The annoying but useful popup.
              </p>
              <h2 className="text-black text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                10% for the <br />
                <span className="text-red font-runwild text-4xl md:text-6xl lowercase -rotate-2 inline-block mt-2">curious.</span>
              </h2>
              <p className="text-black/80 text-lg md:text-xl font-bold pt-4 leading-snug">
                We do not like spam either. But we do like 10% off. Join the list and we will send a code for your first bag.
              </p>
            </div>

            <form onSubmit={handleEmailSubmit} className="relative max-w-sm mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-18 px-8 rounded-full bg-white border border-black/10 text-black text-lg outline-none focus:ring-2 focus:ring-red/20 transition-all font-bold placeholder:text-black/20"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="absolute right-2 top-2 bottom-2 aspect-square rounded-full bg-red text-linen flex items-center justify-center hover:bg-black transition-all disabled:opacity-50"
              >
                {status === 'submitting' ? (
                  <div className="w-5 h-5 border-2 border-linen/30 border-t-linen rounded-full animate-spin" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </button>
            </form>

            <p className="text-[10px] uppercase tracking-widest font-black text-black/30">
              No hustle-culture emails. We only send stuff when we actually have something to say.
            </p>
          </div>
        ) : (
          <div className="py-8 space-y-6 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-yellow rounded-full flex items-center justify-center mx-auto">
              <Check className="w-10 h-10 text-black stroke-[3]" />
            </div>
            <div className="space-y-2">
              <h2 className="text-black text-5xl font-black uppercase tracking-tighter">
                Check your inbox.
              </h2>
              <p className="font-runwild text-3xl text-red">it is already on the way.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}