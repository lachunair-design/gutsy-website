'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xMove = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    /* THE FRAME: Restored the circular top padding look */
    <div ref={containerRef} className="bg-[#f3eee4] min-h-screen p-4 md:p-6 lg:p-8 pt-8 selection:bg-[#ffb300] selection:text-black">
      
      {/* THE POUCH: Rounded container with the Gutsy Red background */}
      <div className={`bg-[#f20028] min-h-screen rounded-[40px] md:rounded-[60px] lg:rounded-[80px] overflow-hidden relative ${utoMedium.className}`}>
        
        {/* PARALLAX TICKER BACKGROUND */}
        <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none opacity-10 z-0">
          <motion.div style={{ x: xMove }} className={`whitespace-nowrap text-[200px] md:text-[300px] uppercase text-black ${utoBlack.className}`}>
            LIGHT LIGHT LIGHT LIGHT LIGHT
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-20 relative z-10">
          
          {/* EAT DIRT STYLE STAGGERED HERO */}
          <div className="relative mb-32 flex flex-col items-center">
            {/* Scrawled Style Subheader */}
            <h2 className={`text-[#f3eee4] text-4xl md:text-6xl uppercase tracking-tighter mb-[-1.5rem] mr-[15%] italic ${utoBold.className} opacity-90`}>
              The Big Fat
            </h2>
            
            {/* Main Bold Heading - Centered and Massive */}
            <h1 className={`text-[#000000] text-8xl md:text-[180px] leading-[0.8] uppercase tracking-tighter text-center ${utoBlack.className}`}>
              GUTSY
            </h1>
            
            {/* Scrawled Style Ending - Offset to the right */}
            <h2 className={`text-[#f3eee4] text-4xl md:text-6xl uppercase tracking-tighter mt-[-1rem] ml-[25%] italic ${utoBold.className} opacity-90`}>
              Backstory
            </h2>
          </div>

          {/* MELTED ILLUSTRATION */}
          <div className="relative w-full aspect-[21/9] mb-32 mix-blend-multiply pointer-events-none">
            <Image
              src="/images/MARATHON.png"
              alt="Marathon Illustration"
              fill
              className="object-contain" 
              priority
            />
          </div>

          {/* STORY GRID - Offset layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24 mb-40 text-center md:text-left text-[#f3eee4]">
            <div className="space-y-6 md:translate-y-8">
              <p className="text-xl md:text-2xl leading-tight font-bold italic text-black uppercase">
                It started when I couldn&apos;t find a single protein powder that didn&apos;t make me bloated.
              </p>
              <p className="text-lg opacity-80 leading-relaxed font-medium">
                Every brand promised the world. Every shake left me feeling heavy and uncomfortable. What&apos;s with all the gums and fillers?
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-2xl leading-tight font-bold italic text-black uppercase">
                So I went ahead and made the protein I wanted to buy: one that feels light.
              </p>
              <p className="text-lg opacity-80 leading-relaxed font-medium">
                Break down the protein before it hits your stomach and suddenly you skip the bloat entirely. No magic—just enzymatic pre-digestion.
              </p>
            </div>

            <div className="space-y-6 md:translate-y-12">
              <p className="text-xl md:text-2xl leading-tight font-bold italic text-black uppercase">
                GUTSY launched in Dubai, and we&apos;ve got grand plans cooking for the world.
              </p>
              <p className="text-lg opacity-80 leading-relaxed font-medium">
                We&apos;re focused on getting this into the hands of people who are tired of protein that makes them feel like garbage.
              </p>
            </div>
          </div>

          {/* STICKER STYLE VALUES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            <div className="bg-[#ffb300] p-10 rounded-[3rem] border-4 border-black rotate-1 shadow-[12px_12px_0px_0px_#000000]">
              <h3 className={`text-3xl mb-4 uppercase text-black ${utoBlack.className}`}>Feels Light</h3>
              <p className="text-lg leading-tight italic font-bold text-black">No bloat, no brick feeling, no regret.</p>
            </div>
            
            <div className="bg-white p-10 rounded-[3rem] border-4 border-black -rotate-2 shadow-[12px_12px_0px_0px_#000000]">
              <h3 className={`text-3xl mb-4 uppercase text-[#f20028] ${utoBlack.className}`}>Actually Works</h3>
              <p className="text-lg leading-tight italic font-bold text-black">PDCAAS score of 1.0. Your body uses all of it.</p>
            </div>

            <div className="bg-black p-10 rounded-full border-4 border-[#f3eee4] flex flex-col justify-center items-center text-center shadow-[12px_12px_0px_0px_#ffb300]">
               <h3 className={`text-2xl mb-2 uppercase text-[#f3eee4] ${utoBlack.className}`}>No Bullshit</h3>
               <p className="text-sm font-bold uppercase tracking-widest leading-none text-[#ffb300]">5 Ingredients Only</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-black border-4 border-[#f3eee4] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[15px_15px_0px_0px_#ffb300]">
            <div className="max-w-2xl mx-auto space-y-10">
              <h3 className={`text-5xl md:text-7xl uppercase leading-tight text-[#f3eee4] ${utoBlack.className}`}>Ready to feel light?</h3>
              <p className="text-xl md:text-2xl italic font-bold text-[#ffb300]">
                Sign up for our backstory updates and get 10% off your first order.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 pt-4">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 h-18 px-8 rounded-full border-2 border-[#f3eee4] bg-transparent text-xl text-[#f3eee4] outline-none placeholder:text-[#f3eee4]/40"
                />
                <Button className="h-18 px-12 rounded-full bg-[#f20028] text-[#f3eee4] text-xl font-bold border-2 border-[#f3eee4] hover:bg-[#ffb300] hover:text-black transition-all active:scale-95">
                  Sign me up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
