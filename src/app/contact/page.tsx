'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Instagram, Send, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="bg-linen min-h-screen text-black selection:bg-yellow/30 overflow-x-hidden font-uto">
      
      {/* 1. HERO: THE OATLY APPROACH */}
      <section className="bg-black text-linen pt-32 md:pt-40 pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-9xl leading-[0.85] tracking-tighter mb-4 font-black uppercase">
                Customer <br/> Service?
              </h1>
              <p className="text-3xl md:text-4xl text-yellow lowercase italic font-runwild">
                this is the page for people who couldn&apos;t find oat-related answers. or protein ones.
              </p>
            </div>
            <div className="hidden lg:block text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 font-bold">
              Dispatching from Dubai, UAE
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: The Form for "Disappointed Consumers" or "Secret Admirers" */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-black/5">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-6">
                  <CheckCircle2 className="w-16 h-16 text-red mx-auto" />
                  <h2 className="text-4xl font-black uppercase tracking-tighter">You did it.</h2>
                  <p className="text-xl font-runwild text-red">Now you just have to wait for us to type back.</p>
                  <Button onClick={() => setStatus('idle')} className="bg-black text-white rounded-full px-10 h-14 font-bold uppercase tracking-widest text-xs">Send another one</Button>
                </div>
              ) : (
                <div className="space-y-10">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest font-black text-black/40">Choose your path</p>
                    <p className="text-xl font-medium leading-tight">
                      Are you a disappointed consumer, a straight-shooting journalist, or just someone who wants to talk about molecular peptides at 2am? 
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <input required type="text" placeholder="Your name" className="w-full h-16 px-8 rounded-full bg-linen border border-black/5 focus:ring-2 focus:ring-red/20 outline-none font-bold" />
                      </div>
                      <div className="space-y-2">
                        <input required type="email" placeholder="Your email" className="w-full h-16 px-8 rounded-full bg-linen border border-black/5 focus:ring-2 focus:ring-red/20 outline-none font-bold" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <textarea required rows={5} placeholder="Type your message here. Be as weirdly specific as you like." className="w-full p-8 rounded-[32px] bg-linen border border-black/5 focus:ring-2 focus:ring-red/20 outline-none resize-none font-bold" />
                    </div>
                    <button className="w-full h-20 bg-red text-linen text-xl rounded-full transition-all flex items-center justify-center gap-3 hover:bg-black font-black uppercase tracking-widest">
                      {status === 'sending' ? 'Sending into the void...' : 'Click this to send'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Right: The "Actually Fast" Options */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="bg-linen p-8 rounded-[40px] border border-black/5 space-y-4">
                <p className="text-[10px] uppercase tracking-widest font-black text-black/40">If you hate forms</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter">Skip the queue.</h3>
                <div className="grid grid-cols-1 gap-3 pt-4">
                  <a href="https://wa.me/971500000000" className="flex items-center justify-between bg-white p-6 rounded-2xl border border-black/5 hover:border-red transition-all group">
                    <div className="flex items-center gap-4">
                      <MessageCircle className="w-6 h-6 text-black" />
                      <span className="font-bold">WhatsApp us</span>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                  <a href="https://instagram.com/gutsy.world" className="flex items-center justify-between bg-white p-6 rounded-2xl border border-black/5 hover:border-red transition-all group">
                    <div className="flex items-center gap-4">
                      <Instagram className="w-6 h-6 text-black" />
                      <span className="font-bold">Instagram DMs</span>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </div>
              </div>

              <div className="bg-black p-10 rounded-[40px] text-linen space-y-6">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-yellow">Direct Email</p>
                  <a href="mailto:hello@eatgutsy.com" className="text-2xl md:text-3xl font-black block hover:text-red transition-colors break-all">hello@eatgutsy.com</a>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/40 mb-2">Want to work with us?</p>
                  <a href="mailto:partners@eatgutsy.com" className="font-bold hover:text-yellow transition-colors">partners@eatgutsy.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOOTER SNARK */}
      <section className="py-12 text-center">
         <p className="text-[10px] uppercase tracking-[0.5em] font-black text-black/20">
            congratulations for reaching the bottom of a contact page. pour yourself a shake to celebrate.
         </p>
      </section>
    </div>
  );
}