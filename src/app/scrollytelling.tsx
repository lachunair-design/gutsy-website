"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  utoBlack: any;
  utoBold: any;
  runWild: any;
}

export function HomeScrollytelling({ utoBlack, utoBold, runWild }: Props) {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const scissorsRef = useRef(null);
  const bit1 = useRef(null);
  const bit2 = useRef(null);
  const bit3 = useRef(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    const sections = gsap.utils.toArray(".story-beat");
    
    gsap.set([bit1.current, bit2.current, bit3.current, scissorsRef.current], { 
      willChange: "transform, opacity" 
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=400%", 
        pin: true,
        scrub: 1, 
        anticipatePin: 1,
      },
    });

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

    // --- TEXT & BG FLOW (Using GUTSY Palette) ---
    sections.forEach((section: any, i) => {
      // Transitioning through the GUTSY core colors
      const bgColors = ["#000000", "#000000", "#f20028", "#f3eee4"];
      tl.to(triggerRef.current, { backgroundColor: bgColors[i], duration: 0.4 }, i);

      tl.to(section, { opacity: 1, y: 0, duration: 0.4 }, i);
      if (i < sections.length - 1) {
        tl.to(section, { opacity: 0, y: -30, duration: 0.4 }, i + 0.75);
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full">
      {/* Container overhaul: Removed border-4 and added expansive rounded corners */}
      <div ref={triggerRef} className="h-screen w-full relative overflow-hidden md:rounded-[120px] transition-colors duration-500">
        
        {/* SVG CONTAINER - Premium Minimalist Visuals */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg viewBox="0 0 200 200" className="w-full h-[50vh] md:h-full max-w-[700px] opacity-40">
            <circle ref={bit1} cx="70" cy="100" r="10" fill="#f20028" />
            <circle ref={bit2} cx="100" cy="100" r="10" fill="#f20028" />
            <circle ref={bit3} cx="130" cy="100" r="10" fill="#f20028" />
            <g ref={scissorsRef} style={{ opacity: 0 }} transform="translate(90, 85)">
                <path d="M-8,-8 L8,8 M-8,8 L8,-8" stroke="#ffb300" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        {/* CONTENT */}
        <div className="relative z-10 h-full w-full">
          
          {/* BEAT 1: WHY MOST PROTEIN SUCKS */}
          <section className="story-beat absolute inset-0 flex items-center px-6 md:px-32 opacity-0 translate-y-10">
            <div className="max-w-4xl space-y-8">
              <h2 className={cn("text-6xl md:text-[160px] uppercase text-[#f20028] leading-[0.8] tracking-tighter", utoBlack.className)}>
                  WHY MOST<br/>PROTEIN SUCKS
              </h2>
              <p className="text-[#f3eee4] text-xl md:text-4xl font-medium leading-tight max-w-2xl opacity-80">
                Regular protein molecules are massive chains. Your stomach works overtime trying to break them down.
              </p>
            </div>
          </section>

          {/* BEAT 2: THE SCIENCE */}
          <section className="story-beat absolute inset-0 flex items-center px-6 md:px-32 opacity-0 translate-y-10">
            <div className="max-w-4xl space-y-6">
              <p className={cn("text-4xl md:text-7xl text-[#ffb300] lowercase mb-[-1rem]", runWild.className)}>the science of light</p>
              <h2 className={cn("text-6xl md:text-[140px] uppercase text-[#f3eee4] leading-[0.8] tracking-tighter", utoBlack.className)}>
                  WE BREAK IT<br/>DOWN FIRST
              </h2>
            </div>
          </section>

          {/* BEAT 3: FIVE CORE INGREDIENTS */}
          <section className="story-beat absolute inset-0 flex items-center px-6 md:px-32 opacity-0 translate-y-10">
            <div className="max-w-5xl space-y-10">
              <h2 className={cn("text-6xl md:text-[140px] uppercase text-[#000000] leading-[0.8] tracking-tighter", utoBlack.className)}>
                FIVE CORE<br/>INGREDIENTS.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#000000] font-bold uppercase tracking-[0.2em] text-sm md:text-2xl">
                {["Pea & Rice", "Kiwifruit", "Adaptogens", "Coconut Milk"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-[2px] bg-[#000000]/20" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BEAT 4: FEELS LIGHT */}
          <section className="story-beat absolute inset-0 flex items-center px-6 md:px-32 opacity-0 translate-y-10">
            <div className="max-w-4xl space-y-12">
              <h2 className={cn("text-8xl md:text-[220px] uppercase text-[#000000] leading-[0.75] tracking-tighter", utoBlack.className)}>
                FEELS<br/>LIGHT
              </h2>
              <button className={cn("bg-[#f20028] text-[#f3eee4] px-12 py-6 md:px-20 md:py-8 rounded-full text-xl md:text-3xl font-bold uppercase transition-transform hover:scale-105 shadow-2xl active:scale-95", utoBold.className)}>
                Shop Gutsy
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
