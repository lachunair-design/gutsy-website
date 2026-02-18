'use client';

import { useState } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Mail, Instagram, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// FONT CONFIGURATION
const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-[#000000] selection:bg-[#ffb300]/30 overflow-x-hidden", utoMedium.className)}>
      
      {/* 1. COMPACT HERO: Reduced height and integrated layout */}
      <section className="bg-black text-[#f3eee4] pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className={cn("text-6xl md:text-9xl leading-[0.85] tracking-tighter mb-4", utoBlack.className)}>
                Say hello
              </h1>
              <p className={cn("text-3xl md:text-4xl text-[#ffb300] lowercase italic", runWild.className)}>
                questions, feedback, or just want to talk gut health?
              </p>
            </div>
            {/* Trust Signal moved into Hero to save space below */}
            <div className={cn("hidden lg:block text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2", utoBold.className)}>
              Based in Dubai, UAE
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT: Tightened spacing and grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Refined Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-black/5">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-[#f20028] mx-auto" />
                  <h2 className={cn("text-4xl text-[#f20028]", utoBlack.className)}>Got it!</h2>
                  <p className={cn("text-xl lowercase", runWild.className)}>We&apos;ll get back to you soon.</p>
                  <Button onClick={() => setStatus('idle')} className={cn("bg-black text-white rounded-full px-10 h-14 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300", utoBold.className)}>Send another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={cn("text-[10px] uppercase tracking-widest font-black opacity-30 ml-4", utoBold.className)}>Name</label>
                      <input required type="text" placeholder="Your name" className="w-full h-14 px-6 rounded-full bg-[#f3eee4] border border-black/5 focus:ring-2 focus:ring-[#f20028]/20 focus:border-[#f20028] outline-none text-base transition-all duration-300" />
                    </div>
                    <div className="space-y-2">
                      <label className={cn("text-[10px] uppercase tracking-widest font-black opacity-30 ml-4", utoBold.className)}>Email</label>
                      <input required type="email" placeholder="hello@example.com" className="w-full h-14 px-6 rounded-full bg-[#f3eee4] border border-black/5 focus:ring-2 focus:ring-[#f20028]/20 focus:border-[#f20028] outline-none text-base transition-all duration-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className={cn("text-[10px] uppercase tracking-widest font-black opacity-30 ml-4", utoBold.className)}>Message</label>
                    <textarea required rows={4} placeholder="What&apos;s on your mind?" className="w-full p-6 rounded-[24px] bg-[#f3eee4] border border-black/5 focus:ring-2 focus:ring-[#f20028]/20 focus:border-[#f20028] outline-none resize-none text-base transition-all duration-300" />
                  </div>
                  <button className={cn("w-full h-16 bg-[#f20028] text-white text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 hover:bg-black hover:scale-[1.02] active:scale-[0.98]", utoBold.className)}>
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Compact Sidecards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <a href="https://wa.me/971500000000" className="bg-[#25D366] p-6 rounded-[30px] shadow-lg flex flex-col justify-between aspect-square md:aspect-auto md:h-32 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <MessageCircle className="w-6 h-6 text-black" />
                  <h3 className={cn("text-xl md:text-2xl leading-none", utoBlack.className)}>WhatsApp</h3>
                </a>
                <a href="https://instagram.com/gutsy.world" className="bg-[#ffb300] p-6 rounded-[30px] shadow-lg flex flex-col justify-between aspect-square md:aspect-auto md:h-32 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Instagram className="w-6 h-6 text-black" />
                  <h3 className={cn("text-xl md:text-2xl leading-none", utoBlack.className)}>Instagram</h3>
                </a>
              </div>

              <div className="bg-black p-8 rounded-[40px] shadow-xl text-[#f3eee4] space-y-4">
                <h3 className={cn("text-2xl text-[#ffb300]", utoBlack.className)}>Direct email</h3>
                <a href="mailto:hello@eatgutsy.com" className="text-xl md:text-2xl block hover:text-[#f20028] transition-colors break-all border-b border-white/10 pb-2">hello@eatgutsy.com</a>
                <p className="text-xs opacity-60 font-medium">Partners? partners@eatgutsy.com</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
