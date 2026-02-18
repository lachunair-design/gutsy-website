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
  
  // Refs for the Protein Animation
  const scissorsRef = useRef(null);
  const bit1 = useRef(null);
  const bit2 = useRef(null);
  const bit3 = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".story-beat");
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=400%", 
        pin: true,
        scrub: 1.2,
      },
    });

    // --- PROTEIN ANIMATION SEQUENCE ---
    // Beat 1 to 2: Scissors appear and "Snip" the chain apart
    tl.to(scissorsRef.current, { opacity: 1, x: 10, rotate: -20, duration: 0.4 }, 0.6)
      .to(bit1.current, { x: -60, y: -30, rotate: -25, duration: 0.8, ease: "power2.out" }, 1)
      .to(bit2.current, { x: 0, y: 50, rotate: 15, duration: 0.8, ease: "power2.out" }, 1)
      .to(bit3.current, { x: 60, y: -30, rotate: 30, duration: 0.8, ease: "power2.out" }, 1)
      .to(scissorsRef.current, { opacity: 0, scale: 0.5, duration: 0.2 }, 1.2);

    // Beat 2 to 3: The pieces float and turn "Gutsy Gold"
    tl.to([bit1.current, bit2.current, bit3.current], { 
      fill: "#ffb300", 
      scale: 0.8,
      duration: 1 
    }, 1.8);

    // Beat 3 to 4: The pieces dissolve into a "glow"
    tl.to([bit1.current, bit2.current, bit3.current], { 
      opacity: 0,
      y: "+=50",
      stagger: 0.1,
      duration: 0.5 
    }, 3);

    // --- TEXT & BACKGROUND FLOW ---
    sections.forEach((section: any, i) => {
      // Background shifts from Dark to Light
      const bgColors = ["#000000", "#111111", "#f20028", "#f3eee4"];
      tl.to(triggerRef.current, { backgroundColor: bgColors[i], duration: 0.5 }, i);

      // Left-aligned Text Transitions
      tl.to(section, { opacity: 1, x: 0, duration: 0.5 }, i);
      if (i < sections.length - 1) {
        tl.to(section, { opacity: 0, x: -30, duration: 0.5 }, i + 0.75);
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full">
      <div ref={triggerRef} className="h-screen w-full relative overflow-hidden rounded-[40px] md:rounded-[80px] border-4 border-black transition-colors duration-700">
        
        {/* VISUAL DEMONSTRATION: THE PROTEIN SNIP */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg width="400" height="400" viewBox="0 0 200 200" className="w-64 h-64 md:w-[600px] md:h-[600px]">
            {/* Protein Chain Bits */}
            <circle ref={bit1} cx="70" cy="100" r="12" fill="#f20028" stroke="currentColor" className="text-black/20" strokeWidth="1" />
            <circle ref={bit2} cx="100" cy="100" r="12" fill="#f20028" stroke="currentColor" className="text-black/20" strokeWidth="1" />
            <circle ref={bit3} cx="130" cy="100" r="12" fill="#f20028" stroke="currentColor" className="text-black/20" strokeWidth="1" />
            
            {/* The Enzyme "Scissors" */}
            <g ref={scissorsRef} style={{ opacity: 0 }} transform="translate(90, 80)">
               <path d="M-10,-10 L10,10 M-10,10 L10,-10" stroke="#ffb300" strokeWidth="3" strokeLinecap="round" />
               <circle cx="-10" cy="-10" r="2" fill="#ffb300" />
               <circle cx="-10" cy="10" r="2" fill="#ffb300" />
            </g>
          </svg>
        </div>

        {/* CONTENT LAYERS */}
        <div className="relative z-10 h-full w-full">
          
          {/* BEAT 1: THE PROBLEM */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-24 opacity-0 -translate-x-10">
            <div className="max-w-2xl space-y-6">
              <h2 className={cn("text-6xl md:text-[130px] uppercase text-[#f20028] leading-[0.8]", utoBlack.className)}>
                 WHY MOST<br/>PROTEIN SUCKS
              </h2>
              <p className="text-[#f3eee4] text-xl md:text-3xl font-medium leading-tight">
                Regular protein molecules are massive chains. Your stomach works overtime trying to break them down. That&apos;s why you feel heavy, bloated, and uncomfortable after every shake.
              </p>
            </div>
          </section>

          {/* BEAT 2: THE BREAKTHROUGH */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-24 opacity-0 -translate-x-10">
            <div className="max-w-2xl space-y-6">
              <p className={cn("text-4xl md:text-6xl text-[#ffb300] lowercase", runWild.className)}>the science of light</p>
              <h2 className={cn("text-6xl md:text-[110px] uppercase text-[#f3eee4] leading-[0.8]", utoBlack.className)}>
                 WE BREAK IT<br/>DOWN FIRST
              </h2>
              <p className="text-[#f3eee4] text-xl md:text-3xl font-medium leading-tight">
                Enzymes snip those massive chains into tiny pieces before the protein even hits your stomach. No grinding, no bloating. Just instant bioavailability.
              </p>
            </div>
          </section>

          {/* BEAT 3: WHAT'S INSIDE */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-24 opacity-0 -translate-x-10">
            <div className="max-w-4xl space-y-8">
              <h2 className={cn("text-6xl md:text-[110px] uppercase text-black leading-[0.8]", utoBlack.className)}>
                FIVE CORE<br/>INGREDIENTS.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black font-bold uppercase tracking-tight text-lg">
                {[
                  "Hydrolyzed Pea & Rice Protein",
                  "Actazin Kiwifruit Extract",
                  "Reishi or Maca (adaptogens)",
                  "Monk Fruit & Coconut Milk"
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-black pl-6 py-2 bg-white/10">{item}</div>
                ))}
              </div>
              <p className={cn("text-3xl md:text-5xl text-white lowercase", runWild.className)}>
                No gums. No fillers. No chemistry degree required.
              </p>
            </div>
          </section>

          {/* BEAT 4: THE RESULT */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-24 opacity-0 -translate-x-10">
            <div className="max-w-3xl space-y-6">
              <h2 className={cn("text-8xl md:text-[180px] uppercase text-black leading-[0.75] tracking-tighter", utoBlack.className)}>
                FEELS<br/>LIGHT
              </h2>
              <p className="text-black text-xl md:text-3xl font-medium leading-tight max-w-xl">
                Your stomach doesn&apos;t have to work overtime. No bloat, no brick feeling, no avoiding protein before important events. Just protein that actually works.
              </p>
              <button className="bg-[#f20028] text-white px-12 py-6 rounded-full text-2xl font-bold uppercase shadow-[6px_6px_0px_0px_#000000] hover:translate-y-1 hover:shadow-none transition-all">
                Experience Gutsy
              </button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
