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

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus('sending');
    setTimeout(() => setEmailStatus('success'), 1500);
  };

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
    <div className="bg-linen min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 overflow-x-hidden selection:bg-yellow selection:text-black">
      
      {/* THE STORY START */}
      <div ref={containerRef} className="bg-red min-h-[85vh] overflow-hidden relative font-uto">
        <motion.div style={{ y: yMove }} className="absolute inset-0 w-full h-full mix-blend-multiply opacity-10 z-0 flex items-center justify-center pointer-events-none">
          <Image src="/images/MARATHON.png" alt="Visual Accent" fill className="object-contain scale-125" priority />
        </motion.div>

        <div className="mx-auto max-w-5xl px-6 pt-20 pb-32 relative z-10 text-center">
          <div ref={heroRef} className="relative mb-20 flex flex-col items-center">
            <h2 className="scrawl-top text-linen text-5xl md:text-9xl lowercase mb-[-1.5rem] md:mb-[-4rem] mr-[15%] rotate-[-5deg] z-20 font-runwild">
              the honest
            </h2>
            <h1 className="text-black text-[60px] md:text-[180px] leading-[0.8] uppercase tracking-tighter z-10 font-uto font-black">
              backstory
            </h1>
            <h2 className="scrawl-bottom text-linen text-4xl md:text-7xl lowercase mt-[-1rem] md:mt-[-2.5rem] ml-[25%] rotate-[3deg] z-20 opacity-90 font-runwild">
              from us
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-10 text-linen text-xl md:text-2xl leading-relaxed font-medium">
            <p className="font-uto italic text-black uppercase font-black text-2xl">
              GUTSY didn&apos;t start in a boardroom. It started because Lakshmi was tired of feeling like she&apos;d swallowed a brick every morning.
            </p>
            <p>
              Two years ago, we got serious about our health. Lakshmi was hitting her protein goals, but her gut was paying the price. We&apos;re talking constant bloating, skin breakouts, and a kitchen counter full of expensive tubs that either tasted like dust or made her feel heavy for hours.
            </p>
            <p>
              Sujith, who was tired of seeing the Amazon boxes and hearing the complaints, finally said: &quot;Let&apos;s just make it ourselves.&quot; We spent a year down a rabbit hole of lab reports and ingredient science to figure out how to keep only what actually works.
            </p>
            <p className="font-runwild italic text-black text-4xl leading-none">
              &quot;We didn&apos;t have a background in supplements. We just had a stubborn question: why is this so hard?&quot;
            </p>
            <p>
              We realized standard protein is molecularly clunky. It&apos;s too big for the gut to handle, so it ferments and causes gas. Our fix? We use enzymes to pre-break down the protein into tiny pieces so your body doesn&apos;t have to struggle. No gums, no mystery fillers, just a shake that actually feels light.
            </p>
          </div>
        </div>
      </div>

      {/* THE FOUNDERS */}
      <section className="founder-section py-32 bg-linen relative z-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* LAKSHMI */}
          <div className="founder-card flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm flex items-center justify-center text-black/20 italic">
              {/* Founder Image Placeholder */}
              [Image: Lakshmi - candid, smiling]
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-uto font-black text-4xl uppercase tracking-tighter">Lakshmi</h3>
              <p className="font-runwild text-3xl text-red mt-2">The one who was tired of the bloat</p>
            </div>
          </div>

          {/* SUJITH */}
          <div className="founder-card flex flex-col items-center md:mt-32">
            <div className="relative w-full aspect-[4/5] bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm flex items-center justify-center text-black/20 italic">
              {/* Founder Image Placeholder */}
              [Image: Sujith - candid, in the kitchen/gym]
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-uto font-black text-4xl uppercase tracking-tighter">Sujith</h3>
              <p className="font-runwild text-3xl text-red mt-2">The one who actually built it</p>
            </div>
          </div>

        </div>
      </section>

      
    </div>
  );
}