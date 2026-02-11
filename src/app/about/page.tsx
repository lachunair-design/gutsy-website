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

  // Moves the text horizontally from -20% to 20% based on scroll
  const xMove = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const xMoveReverse = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <div ref={containerRef} className="bg-[#f3eee4] min-h-screen p-4 md:p-6 lg:p-8 pt-8 selection:bg-[#ffb300] selection:text-black">
      
      <div className={`bg-[#f20028] min-h-screen rounded-[40px] md:rounded-[60px] lg:rounded-[80px] overflow-hidden relative ${utoMedium.className}`}>
        
        {/* HORIZONTAL PARALLAX TICKER */}
        <div className="absolute top-1/4 left-0 w-full overflow-hidden pointer-events-none opacity-20 z-0">
          <motion.div 
            style={{ x: xMove }}
            className={`whitespace-nowrap text-[200px] md:text-[300px] leading-none uppercase text-black ${utoBlack.className}`}
          >
            LIGHT LIGHT LIGHT LIGHT LIGHT LIGHT
          </motion.div>
        </div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-20 relative z-10">
          
          {/* HERO SECTION */}
          <div className="text-center relative mb-16">
            <h2 className={`text-[#f3eee4] text-3xl md:text-4xl uppercase tracking-[0.2em] mb-2 opacity-90 ${utoBold.className}`}>
              The Big Fat
            </h2>
            <h1 className={`text-[#000000] text-7xl md:text-[140px] leading-none uppercase tracking-tighter ${utoBlack.className}`}>
              GUTSY <br /> 
              Backstory
            </h1>
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

          {/* STORY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40 text-center md:text-left text-[#f3eee4]">
            <div className="space-y-6">
              <p className="text-xl md:text-3xl leading-none font-bold italic text-black uppercase">
                It all started when I couldn&apos;t find a single protein powder that didn&apos;t make me bloated.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                Every brand promised the world. Every shake left me feeling heavy and uncomfortable. What&apos;s with all the gums and fillers?
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-3xl leading-none font-bold italic text-black uppercase">
                So I went ahead and made the protein I wanted to buy: one that feels light.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                Break down the protein before it hits your stomach and suddenly you skip the bloat entirely. No magic—just enzymatic pre-digestion.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-3xl leading-none font-bold italic text-black uppercase">
                GUTSY launched in Dubai, and we&apos;ve got grand plans cooking for the world.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                We&apos;re focused on getting this into the hands of people who are tired of protein that makes them feel like garbage.
              </p>
            </div>
          </div>

          {/* REVERSE PARALLAX TICKER */}
          <div className="w-full overflow-hidden pointer-events-none opacity-10 my-20">
            <motion.div 
              style={{ x: xMoveReverse }}
              className={`whitespace-nowrap text-[100px] md:text-[150px] leading-none uppercase text-black ${utoBlack.className}`}
            >
              NO GUTS NO GLORY NO GUTS NO GLORY
            </motion.div>
          </div>

          {/* STICKER BRAND VALUES */}
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

          {/* CALL TO ACTION */}
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
