'use client';

import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Mail, Instagram, MessageCircle } from 'lucide-react';

// Initialize the custom fonts with relative paths for build stability
const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

export default function ContactPage() {
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

      {/* Main Content - Contact Channels */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Left Column: Direct Message Card */}
            <div className="bg-[#f20028] p-10 md:p-16 rounded-[3rem] border-4 border-black shadow-[15px_15px_0px_0px_#000000] text-[#f3eee4] flex flex-col justify-between">
              <div className="space-y-6">
                <h2 className={cn("text-4xl md:text-6xl uppercase leading-none", utoBlack.className)}>
                  Email Us
                </h2>
                <p className={cn("text-3xl md:text-4xl lowercase leading-tight text-black", runWild.className)}>
                  we&apos;re a small team, so you&apos;ll hear back from a real human within 24-48 hours.
                </p>
              </div>
              
              <div className="mt-12 space-y-6">
                <a 
                  href="mailto:hello@eatgutsy.com"
                  className={cn("inline-flex items-center justify-center w-full py-6 bg-white text-black border-4 border-black text-2xl uppercase rounded-full shadow-[6px_6px_0px_0px_#000000] hover:bg-[#ffb300] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none", utoBold.className)}
                >
                  <Mail className="mr-4 w-8 h-8" />
                  hello@eatgutsy.com
                </a>
              </div>
            </div>

            {/* Right Column: Other Ways to Connect */}
            <div className="flex flex-col gap-8">
              
              {/* Instagram Card */}
              <a 
                href="https://instagram.com/gutsy.world" 
                target="_blank" 
                className="group bg-white p-10 rounded-[3rem] border-4 border-black shadow-[10px_10px_0px_0px_#f20028] flex items-center justify-between transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                <div className="space-y-2">
                  <h3 className={cn("text-3xl uppercase leading-none", utoBlack.className)}>Instagram</h3>
                  <p className={cn("text-2xl lowercase opacity-70", runWild.className)}>@gutsy.world</p>
                </div>
                <Instagram className="w-12 h-12 text-[#f20028]" />
              </a>

              {/* Collaboration Card */}
              <div className="bg-[#ffb300] p-10 rounded-[3rem] border-4 border-black shadow-[10px_10px_0px_0px_#000000] space-y-4">
                <h3 className={cn("text-3xl uppercase leading-none", utoBlack.className)}>Partnering</h3>
                <p className="text-xl font-bold uppercase italic italic leading-tight">Gyms, studios, or stockists?</p>
                <p className="text-lg opacity-90 leading-relaxed font-medium">If you want to stock GUTSY or collaborate on an event, reach out to us at partners@eatgutsy.com.</p>
              </div>

              {/* Location Note */}
              <div className="p-10 border-4 border-black border-dashed rounded-[3rem] flex items-center gap-6">
                <div className="w-16 h-16 bg-[#f20028] rounded-full flex items-center justify-center flex-shrink-0 border-2 border-black">
                  <span className="text-white text-2xl font-bold">DXB</span>
                </div>
                <div>
                  <h3 className={cn("text-2xl uppercase leading-none", utoBold.className)}>Dubai Based</h3>
                  <p className="text-lg opacity-70">Proudly founded and operating in the UAE.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
