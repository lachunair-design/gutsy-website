"use client";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export function HomeScrollytelling({ utoBlack, utoBold, runWild }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".story-panel");
    if (!sliderRef.current || !containerRef.current) return;

    const scrollTween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => `+=${sliderRef.current?.offsetWidth}`,
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
          start: "left 80%",
          toggleActions: "play none none reverse",
        }
      });
    });

    const lotties = gsap.utils.toArray('.lottie-container');
    lotties.forEach((lottie: any) => {
      gsap.from(lottie, {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: lottie,
          containerAnimation: scrollTween,
          start: "left 90%",
          end: "left 50%",
          scrub: true
        }
      });
    });

    const bgColors = ["#000000", "#F3EEE4", "#F20028", "#F3EEE4"];
    panels.forEach((panel: any, i: number) => {
      ScrollTrigger.create({
        trigger: panel,
        containerAnimation: scrollTween,
        start: "left center",
        onEnter: () => gsap.to(containerRef.current, { backgroundColor: bgColors[i], duration: 0.6 }),
        onEnterBack: () => gsap.to(containerRef.current, { backgroundColor: bgColors[i], duration: 0.6 }),
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full overflow-hidden bg-black transition-colors duration-700">
      <div ref={sliderRef} className="flex w-[400vw] h-screen">
        
        {/* PANEL 1: MOLECULE SIZE */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24">
          <div className="flex w-full items-center justify-between gap-8">
            <div className="w-[60%] space-y-8 text-left">
              <h2 className={cn("reveal-text text-7xl md:text-[110px] xl:text-[130px] text-red leading-[0.9] tracking-tighter uppercase font-black", utoBlack.className)}>
                A tangled<br />molecular mess.
              </h2>
              <p className="text-linen/70 text-xl md:text-2xl max-w-md font-medium">
                Standard protein is sold in long, tangled chains. Your gut has to wrestle with them for hours. That is where the bloat comes from.
              </p>
            </div>
            <div className="lottie-container w-[35%] flex justify-center">
              <div className="w-full max-w-md aspect-square">
                <DotLottieReact src="https://lottie.host/804d096d-3e51-4043-9836-8c459f0868f1/9Yj1K7U3U9.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 2: PRE-DIGESTION */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24">
          <div className="flex w-full items-center justify-between gap-8">
            <div className="w-[60%] space-y-6 text-left">
              <p className={cn("text-2xl md:text-4xl text-red lowercase", runWild.className)}>we do the work first</p>
              <h2 className={cn("reveal-text text-7xl md:text-[100px] xl:text-[110px] text-black leading-[0.9] tracking-tighter uppercase font-black", utoBlack.className)}>
                Broken down<br />into pieces
              </h2>
              <p className="text-black/60 text-xl md:text-2xl max-w-md font-medium">
                We use enzymes to snip those chains into tiny peptides first. Your body absorbs them instantly with zero effort.
              </p>
            </div>
            <div className="lottie-container w-[35%] flex justify-center">
              <div className="w-full max-w-md aspect-square">
                <DotLottieReact src="https://lottie.host/505373a0-8a4e-4f3b-85d7-8d8a7c1e57c6/XGq6WfS1Ue.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 3: KIWIFRUIT ASSIST */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24">
          <div className="flex w-full items-center justify-between gap-8">
            <div className="w-[60%] space-y-8 text-left">
              <h2 className={cn("reveal-text text-7xl md:text-[100px] xl:text-[110px] text-linen leading-[0.9] tracking-tighter uppercase font-black", utoBlack.className)}>
                Natural<br />Assist.
              </h2>
              <div className="flex flex-wrap gap-3">
                {["Hydrolyzed Pea", "Rice", "Kiwifruit", "Coconut", "Monk Fruit"].map(ing => (
                  <span key={ing} className="px-6 py-2 rounded-full border border-linen/40 text-linen text-lg md:text-xl font-bold uppercase tracking-widest">
                    {ing}
                  </span>
                ))}
              </div>
              <p className="text-linen/80 text-xl font-medium">We added kiwifruit powder because it contains a natural enzyme that helps your stomach finish the job even faster.</p>
            </div>
            <div className="lottie-container w-[35%] flex justify-center">
              <div className="w-full max-w-md aspect-square opacity-90">
                <DotLottieReact src="https://lottie.host/a8b54e3f-671e-436f-876e-5d25902095f3/Ym0f4qO7Zp.lottie" loop autoplay />
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 4: THE RESULT */}
        <section className="story-panel w-screen h-full flex items-center px-10 md:px-24">
          <div className="flex w-full items-center justify-between gap-8">
            <div className="w-[60%] space-y-12 text-left">
              <h2 className={cn("reveal-text text-9xl md:text-[150px] xl:text-[180px] text-black leading-[0.8] tracking-tighter uppercase font-black", utoBlack.className)}>
                It feels<br />light.
              </h2>
              <p className="text-black/50 text-xl md:text-2xl max-w-md font-medium">
                It is not magic. It is just better engineering.
              </p>
              <Link href="/products" className="inline-flex h-16 md:h-20 px-10 md:px-16 items-center rounded-full bg-red text-linen text-xl md:text-2xl shadow-xl hover:bg-black transition-all duration-500 font-bold uppercase tracking-widest">
                Grab a bag
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