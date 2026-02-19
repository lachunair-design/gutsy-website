"use client";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

gsap.registerPlugin(ScrollTrigger);

interface Props {
  utoBlack: any;
  utoBold: any;
  runWild: any;
}

export function HomeScrollytelling({ utoBlack, utoBold, runWild }: Props) {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".story-panel");
    
    // Horizontal Slider Animation
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + sliderRef.current?.offsetWidth,
      }
    });

    // Background Color Sync
    const bgColors = ["#000000", "#0a0a0a", "#f20028", "#F9F8F6"];
    bgColors.forEach((color, i) => {
      ScrollTrigger.create({
        trigger: sections[i] as HTMLElement,
        containerAnimation: gsap.to(sections, { xPercent: -100 * (sections.length - 1) }),
        start: "left center",
        onEnter: () => gsap.to(containerRef.current, { backgroundColor: color, duration: 0.6 }),
        onEnterBack: () => gsap.to(containerRef.current, { backgroundColor: color, duration: 0.6 }),
      });
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-black transition-colors duration-1000">
      <div ref={sliderRef} className="flex w-[400%] h-screen">
        
        {/* PANEL 1: THE PROBLEM */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-10">
            <div className="space-y-6 text-left order-2 md:order-1">
              <p className={cn("text-sm uppercase tracking-[0.3em] text-[#f20028] font-black", utoBold.className)}>01. The Weight</p>
              <h2 className={cn("text-6xl md:text-[120px] text-[#f20028] leading-[0.8] tracking-tighter", utoBlack.className)}>
                Why most<br />protein sucks
              </h2>
              <p className="text-[#f3eee4]/60 text-xl md:text-2xl max-w-md">
                Standard protein is clunky. It sits in your gut like a brick, causing bloat and discomfort.
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="w-full max-w-md aspect-square opacity-80">
                {/* Lottie for 'Heaviness/Bloat' */}
                <DotLottieReact src="https://lottie.host/804d096d-3e51-4043-9836-8c459f0868f1/9Yj1K7U3U9.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 2: THE SCIENCE */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-10">
            <div className="space-y-6 text-left order-2 md:order-1">
              <p className={cn("text-3xl md:text-5xl text-[#ffb300]", runWild.className)}>the science of light</p>
              <h2 className={cn("text-6xl md:text-[100px] text-white leading-[0.8] tracking-tighter", utoBlack.className)}>
                Pre-digested<br />for you
              </h2>
              <p className="text-white/60 text-xl md:text-2xl max-w-md">
                We use enzymes to break down protein into tiny peptides <i>before</i> you drink it.
              </p>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="w-full max-w-md aspect-square">
                {/* Lottie for 'Molecular Breakdown/Science' */}
                <DotLottieReact src="https://lottie.host/505373a0-8a4e-4f3b-85d7-8d8a7c1e57c6/XGq6WfS1Ue.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 3: THE INGREDIENTS */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-10">
            <div className="space-y-8 text-left order-2 md:order-1">
              <h2 className={cn("text-6xl md:text-[100px] text-white leading-[0.8] tracking-tighter", utoBlack.className)}>
                Only the<br />essentials.
              </h2>
              <div className="flex flex-wrap gap-3">
                {["Pea", "Rice", "Kiwi", "Coconut", "Monk Fruit"].map(ing => (
                  <span key={ing} className={cn("px-6 py-2 rounded-full border border-white/30 text-white text-lg", utoBold.className)}>
                    {ing}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="w-full max-w-md aspect-square">
                {/* Lottie for 'Natural/Plant-based' */}
                <DotLottieReact src="https://lottie.host/a8b54e3f-671e-436f-876e-5d25902095f3/Ym0f4qO7Zp.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 4: THE RESOLUTION */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24 bg-[#F9F8F6]">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-10">
            <div className="space-y-10 text-left order-2 md:order-1">
              <h2 className={cn("text-8xl md:text-[180px] text-black leading-[0.75] tracking-tight", utoBlack.className)}>
                Feels<br />light
              </h2>
              <p className="text-black/40 text-xl md:text-2xl max-w-xs">
                Just clean, bioavailable fuel. No bloat. Period.
              </p>
              <Link href="/shop" className={cn(
                "inline-flex h-20 px-16 items-center rounded-full bg-[#f20028] text-white text-2xl shadow-xl hover:scale-105 transition-transform",
                utoBold.className
              )}>
                Shop Gutsy
              </Link>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="w-full max-w-lg aspect-square">
                {/* Lottie for 'Feather/Lightness' */}
                <DotLottieReact src="https://lottie.host/f7e43d41-382b-450e-9270-e69e32a6797a/4N7X7zK4Xp.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
