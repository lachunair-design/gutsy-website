"use client";
import { useRef } from "react";
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
  const blobRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".story-beat");
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1.5, // Slower scrub for a "viscous" feel
      },
    });

    // Visual Story: From Rigid Brick to Flowing Liquid
    tl.to(blobRef.current, { 
      rotate: 15, 
      scale: 1.1, 
      borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%", // Organic "blob" shape
      duration: 1 
    }, 0);

    tl.to(blobRef.current, { 
      scale: 0.9, 
      borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", // Teardrop/Drip shape
      backgroundColor: "#ffb300", 
      duration: 1 
    }, 1.5);

    sections.forEach((section: any, i) => {
      tl.to(section, { opacity: 1, y: 0, duration: 0.5 }, i);
      if (i < sections.length - 1) {
        tl.to(section, { opacity: 0, y: -40, duration: 0.5 }, i + 0.75);
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#111] rounded-[40px] md:rounded-[80px] border-4 border-black">
      
      {/* THE MORPHING "GUTSY" DROP */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div 
          ref={blobRef} 
          className="w-56 h-56 md:w-80 md:h-80 border-2 border-[#f20028]/30 bg-[#f20028] flex items-center justify-center p-12 transition-colors duration-700 shadow-[0_0_80px_rgba(242,0,40,0.2)]"
        >
             <div className={cn("text-black text-4xl md:text-6xl text-center uppercase leading-none font-black tracking-tighter", utoBlack.className)}>
                GUTSY<br/>DRIP
             </div>
        </div>
      </div>

      <div className="relative z-10 h-full w-full">
        {/* BEAT 1: THE VIBE */}
        <section className="story-beat absolute inset-0 flex items-center px-8 md:px-24 opacity-0 translate-y-10">
          <div className="max-w-2xl space-y-4">
            <h2 className={cn("text-5xl md:text-[120px] uppercase text-[#f3eee4] leading-[0.85]", utoBlack.className)}>
               PROTEIN<br/>WITHOUT<br/>THE PUNCH
            </h2>
            <p className="text-[#f3eee4] text-xl md:text-2xl font-medium opacity-90 max-w-lg">
              Most protein feels like a &quot;brick&quot; in your gut. We think you deserve to feel light, not loaded.
            </p>
          </div>
        </section>

        {/* BEAT 2: THE MAGIC */}
        <section className="story-beat absolute inset-0 flex items-center justify-end px-8 md:px-24 opacity-0 translate-y-10 text-right">
          <div className="max-w-2xl space-y-6">
             <p className={cn("text-4xl md:text-7xl text-[#ffb300] lowercase", runWild.className)}>
              we snip the chains early
            </p>
            <h2 className={cn("text-4xl md:text-[90px] uppercase text-[#f3eee4] leading-[0.85]", utoBlack.className)}>
               PRE-DIGESTED<br/>FOR THE PEOPLE
            </h2>
            <p className="text-[#f3eee4] text-lg md:text-xl font-medium opacity-80 max-w-sm ml-auto leading-tight">
              Our enzymes do the heavy lifting before you even take a sip. It&apos;s simple science, for a happy gut.
            </p>
          </div>
        </section>

        {/* BEAT 3: THE GOODS */}
        <section className="story-beat absolute inset-0 flex items-center px-8 md:px-24 opacity-0 translate-y-10">
          <div className="max-w-4xl space-y-8">
            <h2 className={cn("text-5xl md:text-[100px] uppercase text-[#f20028] leading-[0.8]", utoBlack.className)}>
              ONLY THE<br/>GOOD STUFF.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#f3eee4] font-bold uppercase tracking-widest text-sm md:text-base">
                <div className="bg-white/5 backdrop-blur-sm border-l-4 border-[#f20028] p-4">Hydrolyzed Pea & Rice</div>
                <div className="bg-white/5 backdrop-blur-sm border-l-4 border-[#f20028] p-4">Actazin Kiwifruit</div>
                <div className="bg-white/5 backdrop-blur-sm border-l-4 border-[#f20028] p-4">Functional Adaptogens</div>
                <div className="bg-white/5 backdrop-blur-sm border-l-4 border-[#f20028] p-4">Coconut & Monk Fruit</div>
            </div>
            <p className={cn("text-4xl text-[#ffb300] lowercase", runWild.className)}>Zero gums. Zero fillers. Just fuel.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
