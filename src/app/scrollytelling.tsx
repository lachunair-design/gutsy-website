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
  const triggerRef = useRef(null);
  const scissorsRef = useRef(null);
  const bit1 = useRef(null);
  const bit2 = useRef(null);
  const bit3 = useRef(null);

  useGSAP(() => {
    // 1. Check if we're on mobile
    const isMobile = window.innerWidth < 768;
    const sections = gsap.utils.toArray(".story-beat");
    
    // Performance: Use will-change to prep the GPU
    gsap.set([bit1.current, bit2.current, bit3.current, scissorsRef.current], { 
      willChange: "transform, opacity" 
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=400%", 
        pin: true,
        scrub: 0.8, // Reduced scrub for less "lag" feel
        anticipatePin: 1, // Fixes jitter during the pin transition
      },
    });

    // Mobile vs Desktop Animation Paths
    const xDist = isMobile ? 0 : 70;
    const yDist = isMobile ? 80 : 0;

    // --- PROTEIN ANIMATION ---
    tl.to(scissorsRef.current, { opacity: 1, x: 10, rotate: -20, duration: 0.4 }, 0.6)
      .to(bit1.current, { 
        x: isMobile ? -30 : -xDist, 
        y: isMobile ? -yDist : -30, 
        rotate: -25, 
        duration: 0.8 
      }, 1)
      .to(bit2.current, { 
        x: 0, 
        y: isMobile ? 0 : 50, 
        rotate: 15, 
        duration: 0.8 
      }, 1)
      .to(bit3.current, { 
        x: isMobile ? 30 : xDist, 
        y: isMobile ? yDist : -30, 
        rotate: 30, 
        duration: 0.8 
      }, 1)
      .to(scissorsRef.current, { opacity: 0, scale: 0.5, duration: 0.2 }, 1.2);

    tl.to([bit1.current, bit2.current, bit3.current], { 
      fill: "#ffb300", 
      scale: isMobile ? 0.6 : 0.8, 
      duration: 1 
    }, 1.8);

    // --- TEXT & BG FLOW ---
    sections.forEach((section: any, i) => {
      const bgColors = ["#000000", "#111111", "#f20028", "#f3eee4"];
      tl.to(triggerRef.current, { backgroundColor: bgColors[i], duration: 0.4 }, i);

      tl.to(section, { opacity: 1, x: 0, duration: 0.4 }, i);
      if (i < sections.length - 1) {
        tl.to(section, { opacity: 0, x: -20, duration: 0.4 }, i + 0.75);
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full">
      <div ref={triggerRef} className="h-screen w-full relative overflow-hidden rounded-[30px] md:rounded-[80px] border-4 border-black">
        
        {/* SVG CONTAINER - Responsive Sizing */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg viewBox="0 0 200 200" className="w-full h-[50vh] md:h-full max-w-[600px]">
            <circle ref={bit1} cx="70" cy="100" r="12" fill="#f20028" stroke="currentColor" className="text-black/10" strokeWidth="1" />
            <circle ref={bit2} cx="100" cy="100" r="12" fill="#f20028" stroke="currentColor" className="text-black/10" strokeWidth="1" />
            <circle ref={bit3} cx="130" cy="100" r="12" fill="#f20028" stroke="currentColor" className="text-black/10" strokeWidth="1" />
            <g ref={scissorsRef} style={{ opacity: 0 }} transform="translate(90, 85)">
               <path d="M-8,-8 L8,8 M-8,8 L8,-8" stroke="#ffb300" strokeWidth="3" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        {/* CONTENT - Responsive Padding & Sizing */}
        <div className="relative z-10 h-full w-full">
          
          {/* BEAT 1 */}
          <section className="story-beat absolute inset-0 flex items-end md:items-center px-6 md:px-24 pb-20 md:pb-0 opacity-0 -translate-x-5">
            <div className="max-w-2xl space-y-4">
              <h2 className={cn("text-5xl md:text-[130px] uppercase text-[#f20028] leading-[0.8]", utoBlack.className)}>
                 WHY MOST<br/>PROTEIN SUCKS
              </h2>
              <p className="text-[#f3eee4] text-lg md:text-3xl font-medium leading-tight">
                Regular protein molecules are massive chains. Your stomach works overtime trying to break them down.
              </p>
            </div>
          </section>

          {/* BEAT 2 */}
          <section className="story-beat absolute inset-0 flex items-end md:items-center px-6 md:px-24 pb-20 md:pb-0 opacity-0 -translate-x-5">
            <div className="max-w-2xl space-y-4">
              <p className={cn("text-3xl md:text-6xl text-[#ffb300] lowercase", runWild.className)}>the science of light</p>
              <h2 className={cn("text-5xl md:text-[110px] uppercase text-[#f3eee4] leading-[0.8]", utoBlack.className)}>
                 WE BREAK IT<br/>DOWN FIRST
              </h2>
            </div>
          </section>

          {/* BEAT 3 */}
          <section className="story-beat absolute inset-0 flex items-end md:items-center px-6 md:px-24 pb-20 md:pb-0 opacity-0 -translate-x-5">
            <div className="max-w-4xl space-y-6">
              <h2 className={cn("text-5xl md:text-[110px] uppercase text-black leading-[0.8]", utoBlack.className)}>
                FIVE CORE<br/>INGREDIENTS.
              </h2>
              <div className="grid grid-cols-2 gap-3 text-black font-bold uppercase text-[10px] md:text-lg">
                {["Pea & Rice", "Kiwifruit", "Adaptogens", "Coconut Milk"].map((item, i) => (
                  <div key={i} className="border-l-2 md:border-l-4 border-black pl-3 py-1 bg-white/5">{item}</div>
                ))}
              </div>
            </div>
          </section>

          {/* BEAT 4 */}
          <section className="story-beat absolute inset-0 flex items-end md:items-center px-6 md:px-24 pb-20 md:pb-0 opacity-0 -translate-x-5">
            <div className="max-w-3xl space-y-4">
              <h2 className={cn("text-7xl md:text-[180px] uppercase text-black leading-[0.75]", utoBlack.className)}>
                FEELS<br/>LIGHT
              </h2>
              <button className="bg-[#f20028] text-white px-8 py-4 md:px-12 md:py-6 rounded-full text-lg md:text-2xl font-bold uppercase shadow-[4px_4px_0px_0px_#000000]">
                Shop Gutsy
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
