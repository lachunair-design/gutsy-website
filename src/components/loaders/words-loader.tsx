'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { cn } from '@/lib/utils';
import SplitType from 'split-type';

const SESSION_KEY = 'gutsy-founder-letter-seen';

export function WordsLoader() {
  const [show, setShow] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof sessionStorage === 'undefined' || sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, '1');
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;

    const split = new SplitType('.letter-text', { types: 'lines' });
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 })
      .fromTo(imageRef.current, 
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.1 }, 
        { clipPath: 'inset(0% 0% 0% 0%)', scale: 1, duration: 1.2 }, 
        "-=0.4")
      .fromTo(split.lines, 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 }, 
        "-=0.8");

    return () => { tl.kill(); };
  }, [show]);

  const handleExit = () => {
    gsap.to(overlayRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "expo.inOut",
      onComplete: () => setShow(false)
    });
  };

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] bg-linen flex flex-col md:flex-row items-stretch overflow-hidden font-uto"
    >
      {/* PHOTO SIDE */}
      <div ref={imageRef} className="relative w-full h-[40vh] md:h-full md:w-1/2 bg-black/5 overflow-hidden">
        {/* [Placeholder for photo of Lakshmi and Sujith] */}
        <div className="absolute inset-0 flex items-center justify-center italic text-black/20 text-sm p-12 text-center">
          
        </div>
        <Image 
          src="/images/founders-placeholder.jpg" 
          alt="Lakshmi and Sujith" 
          fill 
          className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* LETTER SIDE */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-20 bg-linen">
        <div ref={textRef} className="max-w-md space-y-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-red font-black">A note from the founders</p>
          
          <div className="letter-text space-y-4 text-black/80 text-lg md:text-xl leading-relaxed">
            <p>Hello,</p>
            <p>
              We’re glad you’re here. Most protein powders are molecularly clunky—they sit in your gut and ferment because they’re too big to be absorbed. We know this because we spent 8 months and 47 failed formulas trying to fix it for ourselves.
            </p>
            <p>
              GUTSY is the result. We pre-break down the protein into peptides so your body doesn’t have to struggle. It’s not magic; it’s just better engineering.
            </p>
            <p>We hope it makes you feel as light as it does us.</p>
          </div>

          <div className="pt-4">
            <p className="font-runwild text-4xl text-black leading-none">Lakshmi & Sujith</p>
            <p className="text-[10px] uppercase tracking-widest text-black/40 mt-2">Founders, Gutsy</p>
          </div>

          <button 
            onClick={handleExit}
            className="group mt-12 flex items-center gap-4 text-black font-black uppercase tracking-[0.2em] text-xs hover:text-red transition-colors"
          >
            Enter Gutsy 
            <span className="w-12 h-px bg-black group-hover:bg-red group-hover:w-20 transition-all duration-500" />
          </button>
        </div>
      </div>
    </div>
  );
}