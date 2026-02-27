'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Instagram, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending to the "gut lab"
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="bg-[#f3eee4] min-h-screen text-black selection:bg-yellow/30 overflow-x-hidden">
      
      {/* 1. HERO: CUSTOMER SERVICE? per Section 5.1 */}
      <section className="bg-black text-[#f3eee4] pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className={cn("text-6xl md:text-9xl leading-[0.85] tracking-tighter mb-4 uppercase", utoBlack.className)}>
                Customer <br/> Service?
              </h1>
              <p className={cn("text-3xl md:text-4xl text-[#FFB300] lowercase italic", runWild.className)}>
                this is the page for people who could not find protein-related answers elsewhere.
              </p>
            </div>
            <div className={cn("hidden lg:block text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 font-bold", utoBold.className)}>
              Dispatching from Dubai, UAE
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: The Form & Categories per Section 5.2 */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-black/5">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-[#f20028] mx-auto" />
                  <h2 className={cn("text-4xl uppercase tracking-tighter", utoBlack.className)}>Message received.</h2>
                  <p className={cn("text-xl text-[#f20028]", runWild.className)}>Now you just have to wait for us to finish our workout and type back.</p>
                  <Button onClick={() => setStatus('idle')} className={cn("bg-black text-white rounded-full px-10 h-14 uppercase tracking-widest text-xs", utoBold.className)}>Send another one</Button>
                </div>
              ) : (
                <div className="space-y-10">
                  <div className="space-y-2">
                    <p className={cn("text-xs uppercase tracking-widest text-black/40", utoBold.className)}>Pick your channel of choice</p>
                    <p className={cn("text-xl leading-tight font-medium", utoBold.className)}>
                      Are you a bloated consumer looking for relief? A journalist who wants the real science? Or a human who wants to talk about molecular chains? 
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <input required type="text" placeholder="Your name" className={cn("w-full h-16 px-8 rounded-full bg-[#f3eee4] border border-black/5 focus:ring-2 focus:ring-[#f20028]/20 outline-none", utoBold.className)} />
                      </div>
                      <div className="space-y-2">
                        <input required type="email" placeholder="Your email" className={cn("w-full h-16 px-8 rounded-full bg-[#f3eee4] border border-black/5 focus:ring-2 focus:ring-[#f20028]/20 outline-none", utoBold.className)} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <textarea required rows={5} placeholder="Leave your question and we will get back to you as soon as we step away from the shaker." className={cn("w-full p-8 rounded-[32px] bg-[#f3eee4] border border-black/5 focus:ring-2 focus:ring-[#f20028]/20 outline-none resize-none", utoBold.className)} />
                    </div>
                    <button className={cn("w-full h-20 bg-[#f20028] text-[#f3eee4] text-xl rounded-full transition-all flex items-center justify-center gap-3 hover:bg-black uppercase tracking-widest", utoBlack.className)}>
                      {status === 'sending' ? 'Sending to the gut lab...' : 'Click to send'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right: The Fast Options (WhatsApp/Instagram) per Section 5.3 */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-[#f3eee4] p-8 rounded-[40px] border border-black/5 space-y-4">
                <p className={cn("text-[10px] uppercase tracking-widest text-black/40", utoBold.className)}>If you hate forms</p>
                <h3 className={cn("text-3xl uppercase tracking-tighter", utoBlack.className)}>Skip the queue.</h3>
                <div className="grid grid-cols-1 gap-3 pt-4">
                  {/* TODO: Replace [whatsapp-link] with live WhatsApp URL when available */}
                  <a href="[whatsapp-link]" className="flex items-center justify-between bg-white p-6 rounded-2xl border border-black/5 hover:border-[#f20028] transition-all group">
                    <div className="flex items-center gap-4">
                      <MessageCircle className="w-6 h-6 text-black" />
                      <span className={cn("font-bold", utoBold.className)}>WhatsApp</span>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                  <a href="https://instagram.com/gutsy.world" className="flex items-center justify-between bg-white p-6 rounded-2xl border border-black/5 hover:border-[#f20028] transition-all group">
                    <div className="flex items-center gap-4">
                      <Instagram className="w-6 h-6 text-black" />
                      <span className={cn("font-bold", utoBold.className)}>Instagram</span>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </div>
              </div>

              {/* Direct Email per Section 5.3 */}
              <div className="bg-black p-10 rounded-[40px] text-[#f3eee4] space-y-6">
                <div className="space-y-1">
                  <p className={cn("text-[10px] uppercase tracking-[0.3em] text-[#FFB300]", utoBold.className)}>Human Support</p>
                  <a href="mailto:support@alwaysgutsy.com" className={cn("text-2xl md:text-3xl block hover:text-[#f20028] transition-colors break-all", utoBlack.className)}>support@alwaysgutsy.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOOTER MICRO-COPY */}
      <section className="py-12 text-center">
         <p className={cn("text-[10px] uppercase tracking-[0.5em] text-black/20", utoBold.className)}>
            congratulations for reaching the bottom of a contact page. go reward yourself with a shake.
         </p>
      </section>
    </div>
  );
}