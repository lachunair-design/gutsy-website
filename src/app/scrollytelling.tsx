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
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    
    const scrollTween = gsap.to(panels, {
      x: () => -(sliderRef.current!.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + (sliderRef.current?.scrollWidth || 3000),
        invalidateOnRefresh: true,
      }
    });

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
          toggleActions: "play none none reverse",
        }
      });
    });

    // Animate the Lottie container as it enters the view
    const lotties = gsap.utils.toArray('.lottie-container');
    lotties.forEach((lottie: any) => {
      gsap.from(lottie, {
        scale: 0.7,
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: lottie,
          containerAnimation: scrollTween,
          start: "left right",
          end: "center center",
          scrub: true
        }
      });
    });

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
      <div ref={sliderRef} className="flex w-[400vw] h-screen">
        
        {/* PANEL 1: BLACK BG */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24">
          <div className="flex w-full items-center justify-between gap-8">
            <div className="w-[60%] space-y-8 text-left">
              <h2 className={cn("reveal-text text-7xl md:text-[110px] xl:text-[130px] text-[#f20028] leading-[0.9] tracking-tighter whitespace-nowrap", utoBlack.className)}>
                Why most<br />protein sucks
              </h2>
              <p className="text-[#f3eee4]/70 text-xl md:text-2xl max-w-md">
                Standard molecules are tangled and clunky. They sit in your gut like a brick.
              </p>
            </div>
            <div className="lottie-container w-[35%] flex justify-center">
              <div className="w-full max-w-md aspect-square">
                <DotLottieReact src="https://lottie.host/804d096d-3e51-4043-9836-8c459f0868f1/9Yj1K7U3U9.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 2: BONE BG */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24">
          <div className="flex w-full items-center justify-between gap-8">
            <div className="w-[60%] space-y-6 text-left">
              <p className={cn("text-2xl md:text-4xl text-[#f20028]", runWild.className)}>the science of light</p>
              <h2 className={cn("reveal-text text-7xl md:text-[100px] xl:text-[110px] text-black leading-[0.9] tracking-tighter", utoBlack.className)}>
                We break it<br />down first
              </h2>
              <p className="text-black/60 text-xl md:text-2xl max-w-md">
                Enzymes split massive molecules into tiny, bioavailable peptides.
              </p>
            </div>
            <div className="lottie-container w-[35%] flex justify-center">
              <div className="w-full max-w-md aspect-square">
                <DotLottieReact src="https://lottie.host/505373a0-8a4e-4f3b-85d7-8d8a7c1e57c6/XGq6WfS1Ue.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 3: RED BG */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24">
          <div className="flex w-full items-center justify-between gap-8">
            <div className="w-[60%] space-y-8 text-left">
              <h2 className={cn("reveal-text text-7xl md:text-[100px] xl:text-[110px] text-white leading-[0.9] tracking-tighter", utoBlack.className)}>
                Only five<br />ingredients.
              </h2>
              <div className="flex flex-wrap gap-3">
                {["Pea", "Rice", "Kiwi", "Coconut", "Monk Fruit"].map(ing => (
                  <span key={ing} className={cn("px-6 py-2 rounded-full border border-white/40 text-white text-lg md:text-xl", utoBold.className)}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>
            <div className="lottie-container w-[35%] flex justify-center">
              <div className="w-full max-w-md aspect-square opacity-90">
                <DotLottieReact src="https://lottie.host/a8b54e3f-671e-436f-876e-5d25902095f3/Ym0f4qO7Zp.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 4: BONE BG */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24">
          <div className="flex w-full items-center justify-between gap-8">
            <div className="w-[60%] space-y-12 text-left">
              <h2 className={cn("reveal-text text-9xl md:text-[150px] xl:text-[180px] text-black leading-[0.8] tracking-tighter", utoBlack.className)}>
                Feels<br />light
              </h2>
              <Link href="/shop" className={cn(
                "inline-flex h-16 md:h-20 px-10 md:px-16 items-center rounded-full bg-[#f20028] text-white text-xl md:text-2xl shadow-2xl hover:bg-black transition-all duration-500",
                utoBold.className
              )}>
                Shop Gutsy
              </Link>
            </div>
            <div className="lottie-container w-[35%] flex justify-center">
              <div className="w-full max-w-lg aspect-square">
                <DotLottieReact src="https://lottie.host/f7e43d41-382b-450e-9270-e69e32a6797a/4N7X7zK4Xp.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
