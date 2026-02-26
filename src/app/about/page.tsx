'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Leaf, ShieldCheck, Truck, Recycle } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const pouchSectionRef = useRef(null);
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

      // THE EXHALE: Pouch animation representing "deflating the bloat"
      gsap.fromTo(".gutsy-pouch-animation",
        { scale: 1.1, filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.2))" },
        {
          scale: 0.95,
          rotate: -5,
          filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.1))",
          scrollTrigger: {
            trigger: pouchSectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-linen min-h-screen pt-28 md:pt-36 pb-16 md:pb-24 overflow-x-hidden selection:bg-yellow">

      {/* THE BACKSTORY SECTION */}
      <div ref={containerRef} className="bg-red min-h-screen overflow-hidden relative font-uto font-medium">

        {/* VERTICAL MARQUEE RAIL */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-black/10 z-0 flex flex-col items-center overflow-hidden py-10 pointer-events-none">
          <div className="animate-vertical-marquee flex flex-col gap-8 whitespace-nowrap">
             {[...Array(6)].map((_, i) => (
               <p key={i} className="text-linen/20 text-xs md:text-sm uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 font-bold">
                 NO BLOAT — FEELS LIGHT — PRE-DIGESTED —
               </p>
             ))}
          </div>
        </div>

        {/* PARALLAX BG */}
        <motion.div style={{ y: yMove }} className="absolute inset-0 w-full h-full mix-blend-multiply opacity-10 z-0 flex items-center justify-center pointer-events-none">
          <Image src="/images/MARATHON.png" alt="Visual Accent" fill className="object-contain scale-150 md:scale-125" priority />
        </motion.div>

        {/* CONTENT */}
        <div className="mx-auto max-w-6xl px-6 md:px-12 pt-20 md:pt-32 pb-32 md:pb-48 relative z-10">

          <div ref={heroRef} className="relative mb-32 md:mb-40 flex flex-col items-center">
            <h2 className="scrawl-top text-linen text-5xl md:text-9xl lowercase mb-[-1.5rem] md:mb-[-4rem] mr-[20%] md:mr-[30%] rotate-[-5deg] z-20 font-runwild">
              the heavy
            </h2>
            <h1 className="text-black text-[60px] md:text-[180px] leading-[0.8] uppercase tracking-tighter md:tracking-tight text-center z-10 font-uto font-black">
              history
            </h1>
            <h2 className="scrawl-bottom text-linen text-4xl md:text-7xl lowercase mt-[-1rem] md:mt-[-2.5rem] ml-[30%] md:ml-[40%] rotate-[3deg] z-20 opacity-90 font-runwild">
              by laks
            </h2>
          </div>

          <div className="story-grid grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-left text-linen mb-24">
            <div className="story-item space-y-4 px-4 md:px-0">
               <p className="text-5xl md:text-6xl text-black lowercase font-runwild">the kitchen sink drama</p>
               <p className="text-xl font-bold italic text-black uppercase leading-tight font-uto">A decade of corporate strategy couldn't solve a bloated stomach.</p>
               <p className="text-lg opacity-90 leading-relaxed font-medium">I spent years at companies like Talabat and Deliveroo, but my real full-time job was managing the inevitable swell that followed every "clean" protein shake. The industry seemed content to sell us neon-coloured sand and call it wellness.</p>
            </div>
            <div className="story-item space-y-4 px-4 md:px-0">
              <p className="text-5xl md:text-6xl text-black lowercase font-runwild">the scientific apology</p>
              <p className="text-xl font-bold italic text-black uppercase leading-tight font-uto">We pre-digest it, so your gut doesn't have to.</p>
              <p className="text-lg opacity-90 leading-relaxed font-medium">GUTSY wasn't born from a desire to be "loud." It was born because I wanted a supplement that behaved with some decorum. We use enzymes to break down protein before it ever touches your lips. It’s not magic; it’s just manners.</p>
            </div>
            <div className="story-item space-y-4 px-4 md:px-0">
              <p className="text-5xl md:text-6xl text-black lowercase font-runwild">the dubai standard</p>
              <p className="text-xl font-bold italic text-black uppercase leading-tight font-uto">Built for the disciplined, not the loud.</p>
              <p className="text-lg opacity-90 leading-relaxed font-medium">Launching in the GCC meant rejecting the viral aesthetic. We aren't here for the hustle culture or the "soft life" influencers. We’re here for the people who appreciate clinical integrity and a protein that actually lets them finish their day without feeling like a parade float.</p>
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
              <div key={i} className="flex flex-col items-center text-center space-y-2 group">
                <badge.icon className="w-8 h-8 md:w-10 md:h-10 text-black transition-transform group-hover:scale-110" />
                <span className="text-xs md:text-sm uppercase font-black tracking-widest text-black font-uto">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- THE EXHALE ANIMATION SECTION --- */}
      <section ref={pouchSectionRef} className="py-24 md:py-48 flex flex-col items-center justify-center bg-linen overflow-hidden">
        <div className="relative w-64 h-80 md:w-96 md:h-[500px] gutsy-pouch-animation">
          <Image 
            src="/images/GUTSY_POUCH_RENDER.png" 
            alt="The GUTSY Pouch" 
            fill 
            className="object-contain"
          />
        </div>
        <div className="mt-12 text-center px-6">
          <p className="font-runwild text-4xl md:text-6xl text-red">breathe out.</p>
          <p className="font-uto font-black uppercase tracking-tighter text-2xl md:text-4xl">the bloat stops here.</p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-black py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center space-y-8 md:space-y-10">
          <h3 className="text-5xl md:text-9xl uppercase leading-tight text-linen font-uto font-black">READY?</h3>
          {emailStatus === 'success' ? (
            <div className="space-y-4">
              <p className="text-4xl md:text-6xl text-yellow lowercase font-runwild">Check your inbox!</p>
              <p className="text-linen uppercase font-bold tracking-widest font-uto">You&apos;re officially on the list.</p>
            </div>
          ) : (
            <>
              <p className="text-4xl md:text-7xl lowercase text-yellow leading-none font-runwild">get 10% off your first order</p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4 pt-4 max-w-xl mx-auto">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="flex-1 h-14 md:h-16 px-8 rounded-full border border-white/20 bg-transparent text-linen text-lg outline-none placeholder:text-linen/50 focus:bg-linen/10 focus:ring-2 focus:ring-yellow/30 transition-all duration-300 font-uto font-bold"
                />
                <Button
                  disabled={emailStatus === 'sending'}
                  className="h-14 md:h-16 px-12 rounded-full bg-red text-linen font-bold shadow-lg hover:shadow-xl hover:bg-yellow hover:text-black hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 font-uto"
                >
                  {emailStatus === 'sending' ? 'Sending...' : 'Sign me up'}
                </Button>
              </form>
            </>
          )}
        </div>
      </section>

      <style jsx global>{`
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