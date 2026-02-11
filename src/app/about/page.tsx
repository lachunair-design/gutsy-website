'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const yMove = useTransform(scrollYProgress, [0, 1], [-50, 250]);

  return (
    <div className="bg-[#f3eee4] min-h-screen p-4 md:p-6 lg:p-8 pt-44 pb-8 space-y-8">
      
      {/* THE POUCH */}
      <div ref={containerRef} className={`bg-[#f20028] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] min-h-screen overflow-hidden relative ${utoMedium.className}`}>
        
        {/* PARALLAX BG */}
        <motion.div style={{ y: yMove }} className="absolute inset-0 w-full h-full mix-blend-multiply opacity-30 z-0 flex items-center justify-center">
          <Image src="/images/MARATHON.png" alt="BG" fill className="object-contain scale-125" priority />
        </motion.div>

        {/* CONTENT */}
        <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-48 relative z-10">
          
          {/* HERO - Tightened spacing */}
          <div className="relative mb-40 flex flex-col items-center">
            <h2 className={`text-[#f3eee4] text-6xl md:text-9xl lowercase mb-[-2.5rem] md:mb-[-4rem] mr-[30%] ${runWild.className} rotate-[-5deg] z-20`}>
              the big fat
            </h2>
            
            {/* FIXED BLEEDING: text size reduced to 180px, tracking relaxed to tight */}
            <h1 className={`text-black text-[80px] md:text-[180px] leading-[0.8] uppercase tracking-tight text-center ${utoBlack.className} z-10`}>
              backstory
            </h1>
            
            <h2 className={`text-[#f3eee4] text-5xl md:text-7xl lowercase mt-[-1.5rem] md:mt-[-2.5rem] ml-[40%] ${runWild.className} rotate-[3deg] z-20 opacity-80`}>
              from laks
            </h2>
          </div>

          {/* STORY GRID - Pulled closer to hero */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left text-[#f3eee4]">
            <div className="space-y-4">
               <p className={`text-6xl text-black lowercase ${runWild.className}`}>it started in the kitchen...</p>
               <p className={cn("text-xl font-bold italic text-black uppercase leading-tight", utoBold.className)}>No protein powder worked for me.</p>
               <p className="text-lg opacity-90 leading-relaxed font-medium">Every brand promised the world. Every shake left me feeling heavy.</p>
            </div>

            <div className="space-y-4">
              <p className={`text-6xl text-black lowercase ${runWild.className}`}>the discovery</p>
              <p className={cn("text-xl font-bold italic text-black uppercase leading-tight", utoBold.className)}>One that feels light.</p>
              <p className="text-lg opacity-90 leading-relaxed font-medium">We break down the protein before it hits your stomach. No magic—just science.</p>
            </div>

            <div className="space-y-4">
              <p className={`text-6xl text-black lowercase ${runWild.className}`}>now in dubai</p>
              <p className={cn("text-xl font-bold italic text-black uppercase leading-tight", utoBold.className)}>Where I am.</p>
              <p className="text-lg opacity-90 leading-relaxed font-medium">Focused on people tired of protein that makes them feel like garbage.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA SECTION */}
      <section className="bg-black rounded-[40px] md:rounded-[60px] lg:rounded-[80px] py-32 border-4 border-[#f3eee4] shadow-[15px_15px_0px_0px_#ffb300]">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-10">
          <h3 className={`text-5xl md:text-9xl uppercase leading-tight text-[#f3eee4] ${utoBlack.className}`}>READY?</h3>
          <p className={`text-7xl lowercase text-[#ffb300] leading-none ${runWild.className}`}>get 10% off your first order</p>
          <div className="flex flex-col md:flex-row gap-4 pt-4 max-w-xl mx-auto">
            <input type="email" placeholder="Email" className={cn("flex-1 h-16 px-8 rounded-full border-2 border-[#f3eee4] bg-transparent text-[#f3eee4] outline-none", utoBold.className)} />
            <Button className={cn("h-16 px-12 rounded-full bg-[#f20028] text-[#f3eee4] font-bold border-2 border-[#f3eee4] hover:bg-[#ffb300] transition-all", utoBold.className)}>Sign me up</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
