"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Lenis from 'lenis';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function HomeScrollytelling({ utoBlack, utoBold, runWild }: any) {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".story-panel");
    
    // Master Horizontal Scroll Tween
    const scrollTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + (sliderRef.current?.offsetWidth || "3000"),
      }
    });

    // High-Contrast Text Reveal
    const revealTexts = gsap.utils.toArray('.reveal-text');
    revealTexts.forEach((text: any) => {
      const split = new SplitType(text, { types: 'chars' });
      gsap.from(split.chars, {
        opacity: 0,
        y: 40,
        stagger: 0.02,
        duration: 0.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: text,
          containerAnimation: scrollTween,
          start: "left center",
        }
      });
    });

    // Color Sync: Ensuring high contrast text on light backgrounds
    const bgColors = ["#000000", "#F9F8F6", "#f20028", "#F9F8F6"];
    panels.forEach((panel: any, i: number) => {
      ScrollTrigger.create({
        trigger: panel,
        containerAnimation: scrollTween,
        start: "left center",
        onEnter: () => gsap.to(containerRef.current, { backgroundColor: bgColors[i], duration: 0.8 }),
        onEnterBack: () => gsap.to(containerRef.current, { backgroundColor: bgColors[i], duration: 0.8 }),
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full overflow-hidden transition-colors duration-1000">
      <div ref={sliderRef} className="flex w-[400%] h-screen">
        
        {/* PANEL 1: DARK (Contrast Red/White) */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-32 bg-black">
          <div className="flex flex-col md:flex-row w-full items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-8 text-left">
              <h2 className={cn("reveal-text text-7xl md:text-[140px] text-[#f20028] leading-[0.8] tracking-tighter", utoBlack.className)}>
                Why most<br />protein sucks
              </h2>
              <p className="text-[#f3eee4]/60 text-xl md:text-2xl max-w-md">
                Standard molecules are tangled and clunky. They sit in your gut like a brick.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <div className="w-full max-w-lg aspect-square">
                <DotLottieReact src="https://lottie.host/804d096d-3e51-4043-9836-8c459f0868f1/9Yj1K7U3U9.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 2: LIGHT (Contrast Black/Red) */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-32 bg-[#F9F8F6]">
          <div className="flex flex-col md:flex-row w-full items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-8 text-left">
              <p className={cn("text-3xl md:text-5xl text-[#f20028]", runWild.className)}>the science of light</p>
              <h2 className={cn("reveal-text text-7xl md:text-[120px] text-black leading-[0.8] tracking-tighter", utoBlack.className)}>
                We break it<br />down first
              </h2>
              <p className="text-black/50 text-xl md:text-2xl max-w-md">
                Enzymes split massive molecules into tiny, bioavailable peptides.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <div className="w-full max-w-lg aspect-square">
                <DotLottieReact src="https://lottie.host/505373a0-8a4e-4f3b-85d7-8d8a7c1e57c6/XGq6WfS1Ue.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 3: RED (Contrast White) */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-32 bg-[#f20028]">
          <div className="flex flex-col md:flex-row w-full items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-8 text-left">
              <h2 className={cn("reveal-text text-7xl md:text-[120px] text-white leading-[0.8] tracking-tighter", utoBlack.className)}>
                Only five<br />ingredients.
              </h2>
              <div className="flex flex-wrap gap-4">
                {["Pea", "Rice", "Kiwi", "Coconut", "Monk Fruit"].map(ing => (
                  <span key={ing} className={cn("px-8 py-3 rounded-full border border-white/40 text-white text-xl", utoBold.className)}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <div className="w-full max-w-lg aspect-square opacity-90">
                <DotLottieReact src="https://lottie.host/a8b54e3f-671e-436f-876e-5d25902095f3/Ym0f4qO7Zp.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 4: LIGHT (Contrast Black) */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-32 bg-[#F9F8F6]">
          <div className="flex flex-col md:flex-row w-full items-center justify-between gap-12">
            <div className="w-full md:w-1/2 space-y-12 text-left">
              <h2 className={cn("reveal-text text-9xl md:text-[200px] text-black leading-[0.75] tracking-tighter", utoBlack.className)}>
                Feels<br />light
              </h2>
              <Link href="/shop" className={cn(
                "inline-flex h-20 px-16 items-center rounded-full bg-[#f20028] text-white text-2xl shadow-2xl hover:bg-black transition-all duration-500",
                utoBold.className
              )}>
                Shop Gutsy
              </Link>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <div className="w-full max-w-xl aspect-square">
                <DotLottieReact src="https://lottie.host/f7e43d41-382b-450e-9270-e69e32a6797a/4N7X7zK4Xp.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
