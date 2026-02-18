'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Leaf, ShieldCheck, Truck, Recycle } from 'lucide-react';

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
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yMove = useTransform(scrollYProgress, [0, 1], [-50, 250]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus('sending');
    setTimeout(() => setEmailStatus('success'), 1500);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Scrawl Parallax
      gsap.to(".scrawl-top", {
        x: -30, rotate: -8,
        scrollTrigger: { trigger: heroRef.current, start: "top bottom", scrub: 1 }
      });

      gsap.to(".scrawl-bottom", {
        x: 30, rotate: 6,
        scrollTrigger: { trigger: heroRef.current, start: "top bottom", scrub: 1 }
      });

      // Story Grid Fade
      gsap.from(".story-item", {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".story-grid", start: "top 90%" }
      });

      // --- LOGO ANIMATION LOGIC ---
      gsap.fromTo(".gutsy-3d-logo",
        {
          rotationY: -20,
          rotationX: 10,
          scale: 0.9,
          filter: "drop-shadow(0px 0px 0px rgba(242,0,40,0))"
        },
        {
          rotationY: 20,
          rotationX: -10,
          scale: 1.1,
          filter: "drop-shadow(0px 20px 40px rgba(242,0,40,0.4))",
          scrollTrigger: {
            trigger: ".logo-animation-trigger",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#f3eee4] min-h-screen p-3 md:p-6 lg:p-8 pt-32 md:pt-44 pb-8 space-y-8 overflow-x-hidden selection:bg-[#ffb300]">

      {/* THE POUCH */}
      <div ref={containerRef} className={cn("bg-[#f20028] rounded-[30px] md:rounded-[60px] lg:rounded-[80px] min-h-screen overflow-hidden relative", utoMedium.className)}>

        {/* VERTICAL MARQUEE RAIL */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-black/10 z-0 flex flex-col items-center overflow-hidden py-10 pointer-events-none">
          <div className="animate-vertical-marquee flex flex-col gap-8 whitespace-nowrap">
             {[...Array(6)].map((_, i) => (
               <p key={i} className={cn("text-[#f3eee4]/20 text-xs md:text-sm uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 font-bold")}>
                 NO BLOAT — FEELS LIGHT — PRE-DIGESTED —
               </p>
             ))}
          </div>
          <div className="animate-vertical-marquee flex flex-col gap-8 whitespace-nowrap" aria-hidden="true">
             {[...Array(6)].map((_, i) => (
               <p key={i} className={cn("text-[#f3eee4]/20 text-xs md:text-sm uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 font-bold")}>
                 NO BLOAT — FEELS LIGHT — PRE-DIGESTED —
               </p>
             ))}
          </div>
        </div>

        {/* PARALLAX BG */}
        <motion.div style={{ y: yMove }} className="absolute inset-0 w-full h-full mix-blend-multiply opacity-10 z-0 flex items-center justify-center pointer-events-none">
          <Image src="/images/MARATHON.png" alt="BG" fill className="object-contain scale-150 md:scale-125" priority />
        </motion.div>

        {/* CONTENT */}
        <div className="mx-auto max-w-6xl px-6 md:px-12 pt-20 md:pt-32 pb-32 md:pb-48 relative z-10">

          <div ref={heroRef} className="relative mb-32 md:mb-40 flex flex-col items-center">
            <h2 className={cn("scrawl-top text-[#f3eee4] text-5xl md:text-9xl lowercase mb-[-1.5rem] md:mb-[-4rem] mr-[20%] md:mr-[30%] rotate-[-5deg] z-20", runWild.className)}>
              the big fat
            </h2>
            <h1 className={cn("text-black text-[60px] md:text-[180px] leading-[0.8] uppercase tracking-tighter md:tracking-tight text-center z-10", utoBlack.className)}>
              backstory
            </h1>
            <h2 className={cn("scrawl-bottom text-[#f3eee4] text-4xl md:text-7xl lowercase mt-[-1rem] md:mt-[-2.5rem] ml-[30%] md:ml-[40%] rotate-[3deg] z-20 opacity-90", runWild.className)}>
              from laks
            </h2>
          </div>

          <div className="story-grid grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left text-[#f3eee4] mb-24">
            <div className="story-item space-y-4 px-4 md:px-0">
               <p className={cn("text-5xl md:text-6xl text-black lowercase", runWild.className)}>it started in the kitchen...</p>
               <p className={cn("text-xl font-bold italic text-black uppercase leading-tight", utoBold.className)}>No protein powder worked for me.</p>
               <p className="text-lg opacity-90 leading-relaxed font-medium">Every brand promised the world. Every shake left me feeling heavy.</p>
            </div>
            <div className="story-item space-y-4 px-4 md:px-0">
              <p className={cn("text-5xl md:text-6xl text-black lowercase", runWild.className)}>the discovery</p>
              <p className={cn("text-xl font-bold italic text-black uppercase leading-tight", utoBold.className)}>One that feels light.</p>
              <p className="text-lg opacity-90 leading-relaxed font-medium">We break down the protein before it hits your stomach. No magic—just science.</p>
            </div>
            <div className="story-item space-y-4 px-4 md:px-0">
              <p className={cn("text-5xl md:text-6xl text-black lowercase", runWild.className)}>now in dubai</p>
              <p className={cn("text-xl font-bold italic text-black uppercase leading-tight", utoBold.className)}>Where I am.</p>
              <p className="text-lg opacity-90 leading-relaxed font-medium">Focused on people tired of protein that makes them feel like garbage.</p>
            </div>
          </div>

          {/* TRUST BADGES */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-black/10 pt-12">
            {[
              { icon: Leaf, text: "100% Vegan" },
              { icon: ShieldCheck, text: "No Gums/Fillers" },
              { icon: Truck, text: "UAE Shipping" },
              { icon: Recycle, text: "Sustainable" }
            ].map((badge, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-2">
                <badge.icon className="w-8 h-8 md:w-10 md:h-10 text-black" />
                <span className={cn("text-xs md:text-sm uppercase font-black tracking-widest text-black", utoBold.className)}>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- BRANDED LOGO ANIMATION SECTION --- */}


      {/* CTA SECTION */}
      <section className="bg-black rounded-[30px] md:rounded-[60px] lg:rounded-[80px] py-20 md:py-32 shadow-xl">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-8 md:space-y-10">
          <h3 className={cn("text-5xl md:text-9xl uppercase leading-tight text-[#f3eee4]", utoBlack.className)}>READY?</h3>
          {emailStatus === 'success' ? (
            <div className="space-y-4">
              <p className={cn("text-4xl md:text-6xl text-[#ffb300] lowercase", runWild.className)}>Check your inbox!</p>
              <p className="text-[#f3eee4] uppercase font-bold tracking-widest">You&apos;re officially on the list.</p>
            </div>
          ) : (
            <>
              <p className={cn("text-4xl md:text-7xl lowercase text-[#ffb300] leading-none", runWild.className)}>get 10% off your first order</p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4 pt-4 max-w-xl mx-auto">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className={cn("flex-1 h-14 md:h-16 px-8 rounded-full border-2 border-[#f3eee4] bg-transparent text-[#f3eee4] text-lg outline-none placeholder:text-[#f3eee4]/50 focus:bg-[#f3eee4]/10 transition-all", utoBold.className)}
                />
                <Button
                  disabled={emailStatus === 'sending'}
                  className={cn("h-14 md:h-16 px-12 rounded-full bg-[#f20028] text-[#f3eee4] font-bold border-2 border-[#f3eee4] hover:bg-[#ffb300] hover:text-black transition-all disabled:opacity-50", utoBold.className)}
                >
                  {emailStatus === 'sending' ? 'Sending...' : 'Sign me up'}
                </Button>
              </form>
            </>
          )}
        </div>
      </section>

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        @keyframes vertical-marquee {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
