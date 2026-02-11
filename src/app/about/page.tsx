'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background Parallax: Full bleed background layer
  const yMove = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.8, 1.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 0.2, 0.2, 0]);

  return (
    /* OUTER FRAME: Removed pt-8 and added pt-0 to kill the top gap */
    <div className="bg-[#f3eee4] min-h-screen px-4 md:px-6 lg:px-8 pt-0 pb-8 selection:bg-[#ffb300] selection:text-black">
      
      {/* MAIN CONTENT POUCH 
          - Changed rounded corners to rounded-b-[80px] so the top is flat and flush
          - This ensures no cream/white shows above the red
      */}
      <div ref={containerRef} className={`bg-[#f20028] rounded-b-[40px] md:rounded-b-[60px] lg:rounded-b-[80px] min-h-screen overflow-hidden relative ${utoMedium.className}`}>
        
        {/* BACKGROUND ILLUSTRATION - Full Bleed Background */}
        <motion.div 
          style={{ y: yMove, scale, opacity }}
          className="absolute inset-0 w-full h-full mix-blend-multiply pointer-events-none z-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/MARATHON.png"
              alt="Marathon Background"
              fill
              className="object-cover opacity-80" 
              priority
            />
          </div>
        </motion.div>

        <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-64 pb-40 relative z-10">
          
          {/* HERO SECTION - REFINED STAGGERING */}
          <div className="relative mb-80 flex flex-col items-center">
            <h2 className={`text-[#f3eee4] text-7xl md:text-[120px] lowercase tracking-tight mb-[-4rem] mr-[35%] ${runWild.className} rotate-[-5deg] z-20`}>
              the big fat
            </h2>
            <h1 className={`text-black text-[120px] md:text-[280px] leading-[0.7] uppercase tracking-tighter text-center ${utoBlack.className} z-10`}>
              GUTSY
            </h1>
            <h2 className={`text-[#f3eee4] text-7xl md:text-[120px] lowercase tracking-tight mt-[-5rem] ml-[45%] ${runWild.className} rotate-[4deg] z-20`}>
              backstory
            </h2>
          </div>

          {/* STORY GRID - Floating over Background */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-32 text-center md:text-left text-[#f3eee4]">
            <div className="space-y-6 md:mt-16">
               <p className={`text-7xl text-black lowercase ${runWild.className}`}>it started in the kitchen...</p>
               <p className="text-2xl font-bold italic text-black uppercase leading-none">I couldn&apos;t find a single protein powder that didn&apos;t make me bloated.</p>
               <p className="text-xl opacity-90 leading-relaxed font-medium">Every brand promised the world. Every shake left me feeling heavy. What&apos;s with the fillers?</p>
            </div>

            <div className="space-y-6">
              <p className={`text-7xl text-black lowercase ${runWild.className}`}>the discovery</p>
              <p className="text-2xl font-bold italic text-black uppercase leading-none">So I made the protein I wanted: one that feels light.</p>
              <p className="text-xl opacity-90 leading-relaxed font-medium">Break down the protein before it hits your stomach. No magic—just enzymatic pre-digestion.</p>
            </div>

            <div className="space-y-6 md:mt-32">
              <p className={`text-7xl text-black lowercase ${runWild.className}`}>now in dubai</p>
              <p className="text-2xl font-bold italic text-black uppercase leading-none">GUTSY launched here because that&apos;s where I am.</p>
              <p className="text-xl opacity-90 leading-relaxed font-medium">Focused on getting this into the hands of people tired of protein that makes them feel like garbage.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION - Independent Pouch */}
      <section className="bg-black rounded-[40px] md:rounded-[60px] lg:rounded-[80px] mt-8 overflow-hidden relative py-32 border-4 border-[#f3eee4] shadow-[15px_15px_0px_0px_#ffb300]">
        <div className="mx-auto max-w-3xl px-6 text-center relative z-10 space-y-10">
          <h3 className={`text-5xl md:text-9xl uppercase leading-tight text-[#f3eee4] ${utoBlack.className}`}>READY TO FEEL LIGHT?</h3>
          <p className={`text-7xl lowercase text-[#ffb300] leading-none ${runWild.className}`}>get 10% off your first order</p>
          <div className="flex flex-col md:flex-row gap-4 pt-4 max-w-xl mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 h-18 px-8 rounded-full border-2 border-[#f3eee4] bg-transparent text-xl text-[#f3eee4] outline-none placeholder:text-[#f3eee4]/40" />
            <Button className="h-18 px-12 rounded-full bg-[#f20028] text-[#f3eee4] text-xl font-bold border-2 border-[#f3eee4] hover:bg-[#ffb300] hover:text-black transition-all">Sign me up</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
