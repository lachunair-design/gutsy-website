'use client';

import { useState } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Mail, Instagram, Send } from 'lucide-react';
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
    // Simulate form submission
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-[#000000] selection:bg-[#ffb300]", utoMedium.className)}>
      
      {/* Hero Section */}
      <section className="bg-[#000000] text-[#f3eee4] pt-44 pb-20 border-b-[10px] border-[#f20028]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[3rem] border-4 border-black shadow-[15px_15px_0px_0px_#f20028]">
              {status === 'success' ? (
                <div className="py-20 text-center space-y-6">
                  <h2 className={cn("text-5xl uppercase text-[#f20028]", utoBlack.className)}>Got it!</h2>
                  <p className={cn("text-3xl lowercase", runWild.className)}>We&apos;ll get back to you faster than you can shake a Gutsy bottle.</p>
                  <Button onClick={() => setStatus('idle')} className={cn("mt-8 bg-black text-white rounded-full px-8", utoBold.className)}>Send another</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className={cn("text-sm uppercase font-black tracking-widest pl-4", utoBold.className)}>Name</label>
                    <input required type="text" placeholder="Your name" className="w-full h-16 px-6 rounded-2xl border-2 border-black bg-[#f3eee4] focus:bg-white outline-none transition-all" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className={cn("text-sm uppercase font-black tracking-widest pl-4", utoBold.className)}>Email</label>
                    <input required type="email" placeholder="hello@example.com" className="w-full h-16 px-6 rounded-2xl border-2 border-black bg-[#f3eee4] focus:bg-white outline-none transition-all" />
                  </div>

                  <div className="space-y-2">
                    <label className={cn("text-sm uppercase font-black tracking-widest pl-4", utoBold.className)}>Message</label>
                    <textarea required rows={5} placeholder="What&apos;s on your mind?" className="w-full p-6 rounded-2xl border-2 border-black bg-[#f3eee4] focus:bg-white outline-none transition-all resize-none" />
                  </div>

                  <button 
                    disabled={status === 'sending'}
                    className={cn(
                      "w-full h-20 bg-[#f20028] text-white border-4 border-black text-2xl uppercase rounded-full shadow-[6px_6px_0px_0px_#000000] transition-all flex items-center justify-center gap-4 hover:translate-x-1 hover:translate-y-1 hover:shadow-none disabled:opacity-50", 
                      utoBold.className
                    )}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                    <Send className="w-6 h-6" />
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Info Cards */}
            <div className="flex flex-col gap-8">
              
              {/* Instagram Card */}
              <a 
                href="https://instagram.com/gutsy.world" 
                target="_blank" 
                className="group bg-[#ffb300] p-10 rounded-[3rem] border-4 border-black shadow-[10px_10px_0px_0px_#000000] flex items-center justify-between transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                <div className="space-y-2 text-black">
                  <h3 className={cn("text-3xl uppercase leading-none", utoBlack.className)}>Instagram</h3>
                  <p className={cn("text-2xl lowercase opacity-70", runWild.className)}>@gutsy.world</p>
                </div>
                <Instagram className="w-12 h-12 text-black" />
              </a>

              {/* Direct Email Card */}
              <div className="bg-black p-10 rounded-[3rem] border-4 border-black shadow-[10px_10px_0px_0px_#f20028] text-[#f3eee4] space-y-4">
                <h3 className={cn("text-3xl uppercase leading-none text-[#ffb300]", utoBlack.className)}>Direct Email</h3>
                <p className="text-xl font-bold uppercase italic italic leading-tight">Skip the form?</p>
                <a href="mailto:hello@eatgutsy.com" className="text-2xl block hover:text-[#f20028] transition-colors">hello@eatgutsy.com</a>
              </div>

              {/* Partnering Card */}
              <div className="p-10 border-4 border-black border-dashed rounded-[3rem] flex items-center gap-6 bg-white/50">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black">
                   <Mail className="text-[#ffb300] w-8 h-8" />
                </div>
                <div>
                  <h3 className={cn("text-2xl uppercase leading-none", utoBold.className)}>Partnering</h3>
                  <p className="text-lg opacity-70">Gyms or stockists? partners@eatgutsy.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
