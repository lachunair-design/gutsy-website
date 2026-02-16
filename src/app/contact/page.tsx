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
    // Prepare for Resend/Formspree integration here
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-[#000000] selection:bg-[#ffb300] overflow-x-hidden", utoMedium.className)}>
      
      {/* Hero Section */}
      <section className="bg-[#000000] text-[#f3eee4] pt-40 md:pt-44 pb-16 md:pb-20 border-b-[8px] md:border-b-[10px] border-[#f20028]">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <h1 className={cn("text-6xl md:text-9xl uppercase leading-none tracking-tighter mb-4", utoBlack.className)}>
              Say <br /> Hello
            </h1>
            <p className={cn("text-4xl md:text-5xl lowercase leading-none text-[#ffb300]", runWild.className)}>
              questions, feedback, or just want to talk gut health?
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: Contact Form */}
            <div className="bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3rem] border-4 border-black shadow-[10px_10px_0px_0px_#f20028] md:shadow-[15px_15px_0px_0px_#f20028]">
              {status === 'success' ? (
                <div className="py-16 md:py-24 text-center space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-[#f20028] mx-auto" />
                  <h2 className={cn("text-5xl uppercase text-[#f20028]", utoBlack.className)}>Got it!</h2>
                  <p className={cn("text-3xl lowercase", runWild.className)}>We&apos;ll get back to you faster than you can shake a Gutsy bottle.</p>
                  <Button onClick={() => setStatus('idle')} className={cn("mt-8 bg-black text-white rounded-full px-8 h-14", utoBold.className)}>Send another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  <div className="space-y-2">
                    <label className={cn("text-xs md:text-sm uppercase font-black tracking-widest pl-4", utoBold.className)}>Name</label>
                    <input required type="text" placeholder="Your name" className="w-full h-14 md:h-16 px-6 rounded-2xl border-2 border-black bg-[#f3eee4] focus:bg-white outline-none transition-all text-base" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className={cn("text-xs md:text-sm uppercase font-black tracking-widest pl-4", utoBold.className)}>Email</label>
                    <input required type="email" placeholder="hello@example.com" className="w-full h-14 md:h-16 px-6 rounded-2xl border-2 border-black bg-[#f3eee4] focus:bg-white outline-none transition-all text-base" />
                  </div>

                  <div className="space-y-2">
                    <label className={cn("text-xs md:text-sm uppercase font-black tracking-widest pl-4", utoBold.className)}>Message</label>
                    <textarea required rows={4} placeholder="What&apos;s on your mind?" className="w-full p-6 rounded-2xl border-2 border-black bg-[#f3eee4] focus:bg-white outline-none transition-all resize-none text-base" />
                  </div>

                  <button 
                    disabled={status === 'sending'}
                    className={cn(
                      "w-full h-16 md:h-20 bg-[#f20028] text-white border-4 border-black text-xl md:text-2xl uppercase rounded-full shadow-[6px_6px_0px_0px_#000000] transition-all flex items-center justify-center gap-4 hover:translate-x-1 hover:translate-y-1 hover:shadow-none disabled:opacity-50", 
                      utoBold.className
                    )}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                    <Send className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Info Cards */}
            <div className="flex flex-col gap-6 md:gap-8">
              
              {/* WhatsApp Card (High Priority for UAE) */}
              <a 
                href="https://wa.me/971500000000" 
                target="_blank" 
                className="group bg-[#25D366] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-black shadow-[10px_10px_0px_0px_#000000] flex items-center justify-between transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                <div className="space-y-1 text-black">
                  <h3 className={cn("text-2xl md:text-3xl uppercase leading-none", utoBlack.className)}>WhatsApp</h3>
                  <p className={cn("text-xl md:text-2xl lowercase opacity-90", runWild.className)}>Chat with us instantly</p>
                </div>
                <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-black" />
              </a>

              {/* Instagram Card */}
              <a 
                href="https://instagram.com/gutsy.world" 
                target="_blank" 
                className="group bg-[#ffb300] p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-black shadow-[10px_10px_0px_0px_#000000] flex items-center justify-between transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                <div className="space-y-1 text-black">
                  <h3 className={cn("text-2xl md:text-3xl uppercase leading-none", utoBlack.className)}>Instagram</h3>
                  <p className={cn("text-xl md:text-2xl lowercase opacity-70", runWild.className)}>@gutsy.world</p>
                </div>
                <Instagram className="w-10 h-10 md:w-12 md:h-12 text-black" />
              </a>

              {/* Direct Email Card */}
              <div className="bg-black p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-4 border-black shadow-[10px_10px_0px_0px_#f20028] text-[#f3eee4] space-y-4">
                <h3 className={cn("text-2xl md:text-3xl uppercase leading-none text-[#ffb300]", utoBlack.className)}>Direct Email</h3>
                <p className="text-lg md:text-xl font-bold uppercase italic leading-tight">real humans, real answers. we&apos;ll get back within 24-48 hours, usually faster.</p>
                <a href="mailto:hello@eatgutsy.com" className="text-xl md:text-2xl block hover:text-[#f20028] transition-colors break-all">hello@eatgutsy.com</a>
              </div>

              {/* Partnering Card */}
              <div className="p-8 md:p-10 border-4 border-black border-dashed rounded-[2.5rem] md:rounded-[3rem] bg-white/50 flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black">
                   <Mail className="text-[#ffb300] w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                  <h3 className={cn("text-xl md:text-2xl uppercase leading-none", utoBold.className)}>Partnering</h3>
                  <p className="text-sm md:text-lg opacity-70">Gyms or stockists? partners@eatgutsy.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
