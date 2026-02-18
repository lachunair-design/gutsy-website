"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  utoBlack: any;
  runWild: any;
}

export function HomeScrollytelling({ utoBlack, runWild }: Props) {
  const containerRef = useRef(null);
  const moleculeRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".story-beat");
    
    // Create the master timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // Scroll distance
        pin: true,
        scrub: 1,
      },
    });

    // Beat 1 -> 2: Molecule Snapping & Background Shift
    tl.to(moleculeRef.current, { 
      rotate: 180, 
      scale: 1.2, 
      borderRadius: "20%", // Becomes "sharper"
      duration: 1 
    }, 0);

    // Beat 2 -> 3: Molecule Liquidizing
    tl.to(moleculeRef.current, { 
      scale: 0.8, 
      borderRadius: "50%", 
      backgroundColor: "#ffb300", 
      duration: 1 
    }, 1.5);

    // Text transitions
    sections.forEach((section: any, i) => {
      tl.to(section, { opacity: 1, y: 0, duration: 0.5 }, i);
      if (i < sections.length - 1) {
        tl.to(section, { opacity: 0, y: -50, duration: 0.5 }, i + 0.75);
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black rounded-[40px] md:rounded-[80px] border-4 border-black">
      
      {/* THE STICKY VISUAL (The Molecule) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div ref={moleculeRef} className="w-40 h-40 md:w-64 md:h-64 border-4 border-[#f20028] bg-black/50 backdrop-blur-sm flex items-center justify-center p-8 transition-colors duration-500">
             <div className={cn("text-[#f20028] text-4xl text-center uppercase leading-none font-black", utoBlack.className)}>
                GUTSY<br/>TECH
             </div>
        </div>
      </div>

      {/* CONTENT LAYERS */}
      <div className="relative z-10 h-full w-full">
        {/* BEAT 1: THE PROBLEM */}
        <section className="story-beat absolute inset-0 flex items-center px-6 md:px-24 opacity-0 translate-y-10">
          <div className="max-w-2xl space-y-6">
            <h2 className={cn("text-5xl md:text-8xl uppercase text-[#f20028] leading-none", utoBlack.className)}>WHY MOST <br /> PROTEIN SUCKS</h2>
            <p className="text-[#f3eee4] text-xl md:text-2xl font-medium">Regular protein is a "brick." Your stomach struggles to break down massive molecules, causing that heavy bloat.</p>
          </div>
        </section>

        {/* BEAT 2: THE SCIENCE */}
        <section className="story-beat absolute inset-0 flex items-center justify-end px-6 md:px-24 opacity-0 translate-y-10 text-right">
          <div className="max-w-2xl space-y-6">
            <h2 className={cn("text-5xl md:text-8xl uppercase text-[#f3eee4] leading-none", utoBlack.className)}>THE SCIENCE <br /> OF LIGHT</h2>
            <p className={cn("text-4xl text-[#f20028] lowercase", runWild.className)}>we snip the chains early</p>
            <p className="text-[#f3eee4] text-xl md:text-2xl font-medium">Enzymes break those chains into tiny pieces before you take a sip. Instant bioavailability.</p>
          </div>
        </section>

        {/* BEAT 3: THE INGREDIENTS */}
        <section className="story-beat absolute inset-0 flex items-center px-6 md:px-24 opacity-0 translate-y-10">
          <div className="max-w-3xl space-y-8">
            <h2 className={cn("text-5xl md:text-8xl uppercase text-[#ffb300] leading-none", utoBlack.className)}>FIVE CORE <br /> ELEMENTS.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#f3eee4]">
                <div className="border-l-2 border-[#ffb300] pl-4 italic">Hydrolyzed Pea & Rice</div>
                <div className="border-l-2 border-[#ffb300] pl-4 italic">Actazin Kiwifruit</div>
                <div className="border-l-2 border-[#ffb300] pl-4 italic">Functional Adaptogens</div>
                <div className="border-l-2 border-[#ffb300] pl-4 italic">Coconut & Monk Fruit</div>
            </div>
            <p className={cn("text-3xl text-[#f3eee4] lowercase", runWild.className)}>No gums. No fillers. No nonsense.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
