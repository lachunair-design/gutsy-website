'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { cn } from '@/lib/utils';
import SplitType from 'split-type';

const SESSION_KEY = 'gutsy-diagnostic-entry-seen';

export function WordsLoader() {
  const [show, setShow] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show once per session to respect the user's time
    if (typeof sessionStorage === 'undefined' || sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, '1');
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;

    const split = new SplitType('.letter-text', { types: 'lines' });
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 })
      .fromTo(imageRef.current,
        { clipPath: 'inset(0% 100% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: "expo.inOut" })
      .fromTo(split.lines,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 1, ease: "power4.out" },
        "-=1");

    return () => { tl.kill(); };
  }, [show]);

  const handleExit = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.8,
      ease: "expo.inOut",
      onComplete: () => setShow(false)
    });
  };

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[1000] bg-black flex flex-col md:flex-row items-stretch overflow-hidden font-uto"
    >
      {/* VISUAL SIDE */}
      <div ref={imageRef} className="relative w-full h-[30vh] md:h-full md:w-1/2 bg-zinc-900 overflow-hidden border-r border-white/5">
        <Image
          src="/images/girl-on-tennis-court.png"
          alt="GUTSY Lifestyle"
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* CONTENT SIDE */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-24 bg-black">
        <div ref={textRef} className="max-w-xl space-y-10">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.5em] text-red font-black">GUTSY // The Accidental Backstory</p>
            <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
              No boardroom <br /> required.
            </h2>
          </div>

          <div className="letter-text space-y-6 text-white/60 text-lg md:text-xl leading-relaxed font-medium">
            <p>Built because we were tired of feeling heavy.</p>
            <p>We pre-break our protein down so your gut does not have to.</p>
          </div>

          <button
            onClick={handleExit}
            className="h-16 px-12 rounded-full bg-red text-white text-xs uppercase tracking-widest font-black hover:bg-white hover:text-black transition-all duration-500"
          >
            Enter
          </button>

          <p className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-black">
            Dispatching from Dubai.
          </p>
        </div>
      </div>
    </div>
  );
}
