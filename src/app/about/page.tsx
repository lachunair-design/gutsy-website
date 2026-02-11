'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// GUTSY Core Fonts
const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

// New RunWild Scrawl Font
const runWild = localFont({ 
  src: '../../../public/fonts/RunWild.ttf',
  variable: '--font-runwild'
});

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Background Ticker move
  const xMove = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  
  // Illustration vertical parallax
  const yMove = useTransform(scrollYProgress, [0, 1], [-50, 150]);

  return (
    <div className="bg-[#f3eee4] min-h-screen p-4 md:p-6 lg:p-8 pt-8 space-y-8 selection:bg-[#ffb300] selection:text-black">
      
      {/* MAIN CONTENT POUCH */}
      <div ref={containerRef} className={`bg-[#f20028] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] overflow-hidden relative ${utoMedium.className}`}>
        
        {/* PARALLAX TICKER BACKGROUND */}
        <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none opacity-10 z-0">
          <motion.div style={{ x: xMove }} className={`whitespace-nowrap text-[200px] md:text-[300px] uppercase text-black ${utoBlack.className}`}>
            LIGHT LIGHT LIGHT LIGHT LIGHT
          </motion.div>
        </div>

        {/* ENLARGED BACKGROUND ILLUSTRATION */}
        <motion.div 
          style={{ y: yMove }}
          className="absolute inset-0 w-full h-full opacity-40 mix-blend-multiply pointer-events-none z-0"
        >
          <div className="relative w-full h-[120%] -top-[10%]">
            <Image
              src="/images/MARATHON.png"
              alt="Marathon Illustration"
              fill
              className="object-contain scale-150 md:scale-125 origin-center" 
              priority
            />
          </div>
        </motion.div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-40 relative z-10">
          
          {/* STAGGERED HERO with RunWild Font */}
          <div className="relative mb-48 flex flex-col items-center">
            <h2 className={`text-[#f3eee4] text-5xl md:text-7xl lowercase tracking-tight mb-[-1.5rem] mr-[20%] ${runWild.className} rotate-[-3deg]`}>
              the big fat
            </h2>
            <h1 className={`text-[#000000] text-8xl md:text-[200px] leading-[0.75] uppercase tracking-tighter text-center ${utoBlack.className}`}>
              GUTSY
            </h1>
            <h2 className={`text-[#f3eee4] text-5xl md:text-7xl lowercase tracking-tight mt-[-2.5rem] ml-[30%] ${runWild.className} rotate-[2deg]`}>
              backstory
            </h2>
          </div>

          {/* STORY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24 text-center md:text-left text-[#f3eee4]">
            <div className="space-y-6 md:mt-12 bg-[#f20028]/40 backdrop-blur-sm md:backdrop-blur-none p-4 rounded-3xl md:p-0">
               <p className={`text-5xl leading-none text-black lowercase mb-1 ${runWild.className}`}>
                it started in the kitchen...
              </p>
              <p className="text-xl leading-tight font-bold italic text-black uppercase">
                I couldn&apos;t find a single protein powder that didn&apos;t make me bloated.
              </p>
              <p className="text-lg opacity-90 leading-relaxed font-medium">
                Every brand promised the world. Every shake left me feeling heavy and uncomfortable. 
              </p>
            </div>

            <div className="space-y-6 bg-[#f20028]/40 backdrop-blur-sm md:backdrop-blur-none p-4 rounded-3xl md:p-0">
              <p className={`text-5xl leading-none text-black lowercase mb-1 ${runWild.className}`}>
                the discovery
              </p>
              <p className="text-xl leading-tight font-bold italic text-black uppercase">
                So I made the protein I wanted to buy: one that feels light.
              </p>
              <p className="text-lg opacity-90 leading-relaxed font-medium">
                Break down the protein before it hits your stomach and suddenly you skip the bloat entirely. 
              </p>
            </div>

            <div className="space-y-6 md:mt-24 bg-[#f20028]/40 backdrop-blur-sm md:backdrop-blur-none p-4 rounded-3xl md:p-0">
              <p className={`text-5xl leading-none text-black lowercase mb-1 ${runWild.className}`}>
                now in dubai
              </p>
              <p className="text-xl leading-tight font-bold italic text-black uppercase">
                GUTSY launched here because that&apos;s where I am.
              </p>
              <p className="text-lg opacity-90 leading-relaxed font-medium">
                Focused on getting this into the hands of people who are tired of protein that makes them feel like garbage.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BREAKOUT CTA SECTION with RunWild Font */}
      <section className="bg-black rounded-[40px] md:rounded-[60px] lg:rounded-[80px] overflow-hidden relative py-32 border-4 border-[#f3eee4] shadow-[15px_15px_0px_0px_#ffb300]">
        <div className="mx-auto max-w-3xl px-6 text-center relative z-10 space-y-10">
          <h3 className={`text-5xl md:text-8xl uppercase leading-tight text-[#f3eee4] ${utoBlack.className}`}>
            READY TO FEEL LIGHT?
          </h3>
          <p className={`text-5xl lowercase text-[#ffb300] leading-none ${runWild.className}`}>
            get 10% off your first order when you sign up
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 pt-4 max-w-xl mx-auto">
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
      </section>
    </div>
  );
}
