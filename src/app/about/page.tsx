'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';
import { Covered_By_Your_Grace } from 'next/font/google';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const handwritten = Covered_By_Your_Grace({ weight: '400', subsets: ['latin'] });

export default function AboutPage() {
  const containerRef = useRef(null);
  
  // Track scroll specifically for the overlapping effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scale and Fade effects for the main pouch as it gets overlapped
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.5]);
  const xMove = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <div ref={containerRef} className="bg-[#f3eee4] relative selection:bg-[#ffb300] selection:text-black">
      
      {/* 1. MAIN CONTENT POUCH (STORES HERO & STORY) */}
      <motion.div 
        style={{ scale, opacity }}
        className="sticky top-0 h-screen p-4 md:p-6 lg:p-8 pt-8"
      >
        <div className={`bg-[#f20028] h-full w-full rounded-[40px] md:rounded-[60px] lg:rounded-[80px] overflow-y-auto overflow-x-hidden relative scrollbar-hide ${utoMedium.className}`}>
          
          {/* PARALLAX TICKER */}
          <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none opacity-10 z-0">
            <motion.div style={{ x: xMove }} className={`whitespace-nowrap text-[150px] md:text-[300px] uppercase text-black ${utoBlack.className}`}>
              LIGHT LIGHT LIGHT LIGHT LIGHT
            </motion.div>
          </div>

          <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-40 relative z-10">
            {/* STAGGERED HERO */}
            <div className="relative mb-32 flex flex-col items-center">
              <h2 className={`text-[#f3eee4] text-4xl md:text-6xl lowercase mb-[-1rem] mr-[20%] ${handwritten.className} rotate-[-3deg]`}>
                the big fat
              </h2>
              <h1 className={`text-black text-8xl md:text-[180px] leading-[0.75] uppercase tracking-tighter text-center ${utoBlack.className}`}>
                GUTSY
              </h1>
              <h2 className={`text-[#f3eee4] text-4xl md:text-6xl lowercase mt-[-1.5rem] ml-[30%] ${handwritten.className} rotate-[2deg]`}>
                backstory
              </h2>
            </div>

            {/* MELTED ILLUSTRATION */}
            <div className="relative w-full aspect-[21/9] mb-40 mix-blend-multiply pointer-events-none">
              <Image src="/images/MARATHON.png" alt="Marathon" fill className="object-contain" priority />
            </div>

            {/* STORY GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24 mb-48 text-center md:text-left text-[#f3eee4]">
              <div className="space-y-6 md:mt-12">
                <p className={`text-4xl text-black lowercase ${handwritten.className}`}>it started in the kitchen...</p>
                <p className="text-xl font-bold italic text-black uppercase">No bloat, no heavy feeling.</p>
                <p className="text-lg opacity-80 leading-relaxed">Every shake left me feeling heavy. What&apos;s with the fillers?</p>
              </div>
              <div className="space-y-6">
                <p className={`text-4xl text-black lowercase ${handwritten.className}`}>the discovery</p>
                <p className="text-xl font-bold italic text-black uppercase">Enzymatic pre-digestion.</p>
                <p className="text-lg opacity-80 leading-relaxed">We break down the protein molecules so your stomach doesn&apos;t have to.</p>
              </div>
              <div className="space-y-6 md:mt-24">
                <p className={`text-4xl text-black lowercase ${handwritten.className}`}>the mission</p>
                <p className="text-xl font-bold italic text-black uppercase">No guts, no glory.</p>
                <p className="text-lg opacity-80 leading-relaxed">Focused on people tired of protein that makes them feel like garbage.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 2. BREAKOUT CTA (OVERLAPS THE MAIN POUCH) */}
      <section className="relative z-20 bg-black min-h-screen flex items-center justify-center rounded-t-[40px] md:rounded-t-[80px] border-t-4 border-[#f3eee4] shadow-[0px_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-10 py-20">
          <h3 className={`text-5xl md:text-8xl uppercase leading-tight text-[#f3eee4] ${utoBlack.className}`}>
            READY TO FEEL LIGHT?
          </h3>
          <p className={`text-4xl lowercase text-[#ffb300] ${handwritten.className}`}>
            get 10% off your first order when you sign up
          </p>
          <div className="flex flex-col md:flex-row gap-4 pt-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your email"
              className="flex-1 h-18 px-8 rounded-full border-2 border-[#f3eee4] bg-transparent text-xl text-[#f3eee4] outline-none placeholder:text-[#f3eee4]/40"
            />
            <Button className="h-18 px-12 rounded-full bg-[#f20028] text-[#f3eee4] text-xl font-bold border-2 border-[#f3eee4] hover:bg-[#ffb300] transition-all">
              Sign me up
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
