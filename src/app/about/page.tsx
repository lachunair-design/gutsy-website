'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yMove = useTransform(scrollYProgress, [0, 1], [-50, 200]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".scrawl-top", { x: -25, rotate: -6, scrollTrigger: { trigger: heroRef.current, scrub: 1 } });
      gsap.to(".scrawl-bottom", { x: 25, rotate: 5, scrollTrigger: { trigger: heroRef.current, scrub: 1 } });

      gsap.from(".founder-card", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: { trigger: ".founder-section", start: "top 80%" }
      });

      gsap.to(".founder-card", {
        y: -12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-linen min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 overflow-x-hidden selection:bg-yellow selection:text-black font-uto">
      
      {/* THE STORY START */}
      <div ref={containerRef} className="bg-red min-h-[85vh] overflow-hidden relative">
        <motion.div style={{ y: yMove }} className="absolute inset-0 w-full h-full mix-blend-multiply opacity-10 z-0 flex items-center justify-center pointer-events-none">
          <Image src="/images/MARATHON.png" alt="Visual Accent" fill className="object-contain scale-125" priority />
        </motion.div>

        <div className="mx-auto max-w-5xl px-6 pt-20 pb-32 relative z-10 text-center">
          <div ref={heroRef} className="relative mb-20 flex flex-col items-center">
            <h2 className="scrawl-top text-linen text-5xl md:text-9xl lowercase mb-[-1.5rem] md:mb-[-4rem] mr-[15%] rotate-[-5deg] z-20 font-runwild">
              the accidental
            </h2>
            <h1 className="text-black text-[60px] md:text-[180px] leading-[0.8] uppercase tracking-tighter z-10 font-black">
              backstory
            </h1>
            <h2 className="scrawl-bottom text-linen text-4xl md:text-7xl lowercase mt-[-1rem] md:mt-[-2.5rem] ml-[25%] rotate-[3deg] z-20 opacity-90 font-runwild">
              no boardroom required
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-10 text-linen text-xl md:text-2xl leading-relaxed font-medium">
            <p className="italic text-black uppercase font-black text-2xl">
              GUTSY did not start in a boardroom. It started because we were tired of feeling like we had swallowed a brick every morning.
            </p>
            <p>
              Two years ago we realized that most plant protein is just a heavy burden in a fancy tub. We were hitting our goals but our stomachs were staging a full-scale protest.
            </p>
            <p>
              We spent a year down a rabbit hole of lab reports to figure out why standard protein is so clunky. We found out the industry just assumes your gut is an industrial furnace.
            </p>
            <p className="font-runwild italic text-black text-4xl md:text-5xl leading-none">
              &quot;We just had a stubborn question: why is this so hard to digest?&quot;
            </p>
            <p>
              We used enzymes to pre-break those chains into tiny pieces before they ever hit the bag. No mystery fillers and no clunky molecules. Just a shake that actually leaves you alone.
            </p>
          </div>
        </div>
      </div>

      {/* THE FOUNDERS */}
      <section className="founder-section py-32 bg-linen relative z-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* LAKSHMI */}
          <div className="founder-card flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm flex items-center justify-center text-black/20 italic p-12 text-center">
              [Image: Lakshmi - candid, smiling]
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-black text-4xl uppercase tracking-tighter">Lakshmi</h3>
              <p className="font-runwild text-3xl text-red mt-2">The one who was tired of the bloat</p>
            </div>
          </div>

          {/* SUJITH */}
          <div className="founder-card flex flex-col items-center md:mt-32">
            <div className="relative w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm flex items-center justify-center text-black/20 italic p-12 text-center">
              [Image: Sujith - candid, in the kitchen/gym]
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-black text-4xl uppercase tracking-tighter">Sujith</h3>
              <p className="font-runwild text-3xl text-red mt-2">The one who actually built it</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE (REALLY) */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-black text-xl md:text-2xl leading-relaxed font-medium">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Who We Are (Really)
          </h2>
          <p>
            We are not legacy supplement people.
          </p>
          <p>
            We are people whose guts tapped out on standard protein, so we went looking for an option that did not wreck us.
          </p>
          <p>
            When we could not find it, we spent months annoying manufacturers, reading lab reports, and testing version after version until our stomachs finally stopped complaining.
          </p>
        </div>
      </section>

      {/* WHAT WE REFUSE TO DO */}
      <section className="py-24 md:py-32 bg-linen">
        <div className="max-w-4xl mx-auto px-6 space-y-6 text-black text-xl md:text-2xl leading-relaxed font-medium">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            What We Refuse To Do
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Add ingredients just to make a label look impressive.</li>
            <li>Use gums to fake “creaminess” and then pretend we do not know why people feel bloated.</li>
            <li>Hide behind buzzwords like “natural” and never show the numbers.</li>
          </ul>
          <p>
            If we would not drink it every day ourselves, it does not go in the bag.
          </p>
        </div>
      </section>
    </div>
  );
}