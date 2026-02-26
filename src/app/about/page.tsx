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
      // Scrawl Parallax
      gsap.to(".scrawl-top", { x: -25, rotate: -6, scrollTrigger: { trigger: heroRef.current, scrub: 1 } });
      gsap.to(".scrawl-bottom", { x: 25, rotate: 5, scrollTrigger: { trigger: heroRef.current, scrub: 1 } });

      // Image Animations
      gsap.from(".founder-card", {
        y: 80,
        opacity: 0,
        stagger: 0.2,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: { trigger: ".founder-section", start: "top 80%" }
      });

      // Floating effect to mimic "lightness"
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
              GUTSY didn&apos;t start in a boardroom. It started because Lakshmi was tired of Amazon deliveries and unpronounceable labels.
            </p>
            <p>
              Two years ago, we got serious about our health. Lakshmi hit her protein goals, but her gut didn&apos;t thank her for it. The result? Terrible bloating, horrible acne, and a kitchen counter cluttered with brands that either tasted like cardboard or felt like bricks in the stomach.
            </p>
            <p>
              Sujith, tired of the constant deliveries and even more constant complaining, suggested a radical alternative: we make it ourselves. We spent a year down a rabbit hole of additives and fillers to figure out how to keep only what we actually need.
            </p>
            <p className="font-crunold italic text-black text-3xl">
              &quot;We have no experience in supplements or marketing. But we&apos;re doing this anyway.&quot;
            </p>
            <p>
              We don&apos;t care for the loud, neon-lit hustle. We just want a supplement that has some manners. So we pre-digest the protein with enzymes so your stomach doesn&apos;t have to. It&apos;s simple, it&apos;s personal, and it actually works.
            </p>
          </div>
        </div>
      </div>

      {/* THE FOUNDERS */}
      <section className="founder-section py-32 bg-linen relative z-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* LAKSHMI */}
          <div className="founder-card flex flex-col items-center">
            <div className="relative w-full aspect-[4/5] bg-gutsy-gray-100 rounded-3xl overflow-hidden border-2 border-black/5 shadow-inner flex items-center justify-center text-black/20 italic">
              {/* Founder Image Placeholder */}
              Lakshmi Placeholder
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-uto font-black text-4xl uppercase tracking-tighter">Lakshmi</h3>
              <p className="font-runwild text-3xl text-red mt-2">The one who complained</p>
            </div>
          </div>

          {/* SUJITH */}
          <div className="founder-card flex flex-col items-center md:mt-32">
            <div className="relative w-full aspect-[4/5] bg-gutsy-gray-100 rounded-3xl overflow-hidden border-2 border-black/5 shadow-inner flex items-center justify-center text-black/20 italic">
              {/* Founder Image Placeholder */}
              Sujith Placeholder
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-uto font-black text-4xl uppercase tracking-tighter">Sujith</h3>
              <p className="font-runwild text-3xl text-red mt-2">The one who fixed it</p>
            </div>
          </div>

        </div>
      </section>

      {/* CONSOLIDATED CTA */}
      <section className="bg-black py-24 md:py-40">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-12">
          <h3 className="text-6xl md:text-[140px] uppercase leading-none text-linen font-uto font-black tracking-tighter">LET&apos;S BE FRIENDS.</h3>
          
          {emailStatus === 'success' ? (
            <div className="animate-fade-in-up">
              <p className="text-4xl md:text-6xl text-yellow lowercase font-runwild">Welcome to the inner circle.</p>
              <p className="text-linen uppercase font-bold tracking-[0.2em] font-uto text-sm mt-4">Check your inbox for 10% off your first order.</p>
            </div>
          ) : (
            <div className="space-y-8">
              <p className="text-3xl md:text-5xl lowercase text-yellow font-runwild opacity-90 max-w-xl mx-auto">
                no loud marketing, just the good stuff. join the list for 10% off.
              </p>
              <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto pt-6">
                <input
                  required
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 h-20 px-10 rounded-full border border-white/10 bg-white/5 text-linen text-xl outline-none placeholder:text-linen/30 focus:bg-white/10 focus:ring-2 focus:ring-yellow/40 transition-all font-uto font-bold"
                />
                <Button
                  disabled={emailStatus === 'sending'}
                  className="h-20 px-14 rounded-full bg-red text-linen font-black text-lg hover:bg-yellow hover:text-black hover:scale-105 active:scale-95 transition-all font-uto uppercase tracking-widest"
                >
                  {emailStatus === 'sending' ? 'Sending...' : 'Sign Up'}
                </Button>
              </form>
            </div>
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