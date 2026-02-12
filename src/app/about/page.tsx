'use client';

import { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

export default function AboutPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const yMove = useTransform(scrollYProgress, [0, 1], [-50, 250]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for the "the big fat" scrawl
      gsap.to(".scrawl-top", {
        x: -60,
        rotate: -10,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          scrub: 1,
        }
      });

      // Parallax for the "from laks" scrawl
      gsap.to(".scrawl-bottom", {
        x: 60,
        rotate: 8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          scrub: 1,
        }
      });

      // Fade in effect for story grid items
      gsap.from(".story-item", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".story-grid",
          start: "top 85%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#f3eee4] min-h-screen p-4 md:p-6 lg:p-8 pt-44 pb-8 space-y-8">
      
      {/* THE POUCH */}
      <div ref={containerRef} className={`bg-[#f20028] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] min-h-screen overflow-hidden relative ${utoMedium.className}`}>
        
        {/* PARALLAX BG */}
        <motion.div style={{ y: yMove }} className="absolute inset-0 w-full h-full mix-blend-multiply opacity-10 z-0 flex items-center justify-center">
          <Image src="/images/MARATHON.png" alt="BG" fill className="object-contain scale-125" priority />
        </motion.div>

        {/* CONTENT */}
        <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-48 relative z-10">
          
          {/* HERO */}
          <div ref={heroRef} className="relative mb-40 flex flex-col items-center">
            <h2 className={cn(
              "scrawl-top text-[#f3eee4] text-6xl md:text-9xl lowercase mb-[-2.5rem] md:mb-[-4rem] mr-[30%] rotate-[-5deg] z-20",
              runWild.className
            )}>
              the big fat
            </h2>
            
            <h1 className={cn(
              "text-black text-[80px] md:text-[180px] leading-[0.8] uppercase tracking-tight text-center z-10",
              utoBlack.className
            )}>
              backstory
            </h1>
            
            <h2 className={cn(
              "scrawl-bottom text-[#f3eee4] text-5xl md:text-7xl lowercase mt-[-1.5rem] md:mt-[-2.5rem] ml-[40%] rotate-[3deg] z-20 opacity-80",
              runWild.className
            )}>
              from laks
            </h2>
          </div>

          {/* STORY GRID */}
          <div className="story-grid grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left text-[#f3eee4]">
            <div className="story-item space-y-4">
               <p className={cn("text-6xl text-black lowercase", runWild.className)}>it started in the kitchen...</p>
               <p className={cn("text-xl font-bold italic text-black uppercase leading-tight", utoBold.className)}>No protein powder worked for me.</p>
               <p className="text-lg opacity-90 leading-relaxed font-medium">Every brand promised the world. Every shake left me feeling heavy.</p>
            </div>

            <div className="story-item space-y-4">
              <p className={cn("text-6xl text-black lowercase", runWild.className)}>the discovery</p>
              <p className={cn("text-xl font-bold italic text-black uppercase leading-tight", utoBold.className)}>One that feels light.</p>
              <p className="text-lg opacity-90 leading-relaxed font-medium">We break down the protein before it hits your stomach. No magic—just science.</p>
            </div>

            <div className="story-item space-y-4">
              <p className={cn("text-6xl text-black lowercase", runWild.className)}>now in dubai</p>
              <p className={cn("text-xl font-bold italic text-black uppercase leading-tight", utoBold.className)}>Where I am.</p>
              <p className="text-lg opacity-90 leading-relaxed font-medium">Focused on people tired of protein that makes them feel like garbage.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA SECTION */}
      <section className="bg-black rounded-[40px] md:rounded-[60px] lg:rounded-[80px] py-32 border-4 border-[#f3eee4] shadow-[15px_15px_0px_0px_#ffb300]">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-10">
          <h3 className={cn("text-5xl md:text-9xl uppercase leading-tight text-[#f3eee4]", utoBlack.className)}>READY?</h3>
          <p className={cn("text-7xl lowercase text-[#ffb300] leading-none", runWild.className)}>get 10% off your first order</p>
          <div className="flex flex-col md:flex-row gap-4 pt-4 max-w-xl mx-auto">
            <input type="email" placeholder="Email" className={cn("flex-1 h-16 px-8 rounded-full border-2 border-[#f3eee4] bg-transparent text-[#f3eee4] outline-none", utoBold.className)} />
            <Button className={cn("h-16 px-12 rounded-full bg-[#f20028] text-[#f3eee4] font-bold border-2 border-[#f3eee4] hover:bg-[#ffb300] transition-all", utoBold.className)}>Sign me up</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
