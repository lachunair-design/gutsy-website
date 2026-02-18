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
  
  // Refs for SVG elements
  const chainRef = useRef(null);
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
        end: "+=400%", // Extra length for 4th beat
        pin: true,
        scrub: 1,
      },
    });

    // --- ANIMATION SEQUENCE ---

    // 1. BEAT 1 -> 2: SCISSORS APPEAR & SNIP
    tl.to(scissorsRef.current, { opacity: 1, x: 20, rotate: -20, duration: 0.5 }, 0.5)
      .to(bit1.current, { x: -40, y: -20, rotate: -15, duration: 0.8 }, 1)
      .to(bit2.current, { x: 0, y: 30, rotate: 10, duration: 0.8 }, 1)
      .to(bit3.current, { x: 40, y: -20, rotate: 20, duration: 0.8 }, 1)
      .to(scissorsRef.current, { opacity: 0, duration: 0.2 }, 1.2);

    // 2. BEAT 2 -> 3: BITS FLOAT & MULTIPLY (Simulated)
    tl.to([bit1.current, bit2.current, bit3.current], { 
      scale: 0.8, 
      fill: "#ffb300", 
      duration: 1 
    }, 1.5);

    // 3. BEAT 3 -> 4: BITS TRANSITION TO RADIANCE
    tl.to([bit1.current, bit2.current, bit3.current], { 
      y: "+=100", 
      opacity: 0, 
      stagger: 0.1, 
      duration: 0.5 
    }, 2.5);

    // --- TEXT & BACKGROUND TRANSITIONS ---
    sections.forEach((section: any, i) => {
      // Background Color Shifts
      const bgColors = ["#000000", "#1a1a1a", "#f20028", "#ffb300"];
      tl.to(triggerRef.current, { backgroundColor: bgColors[i], duration: 0.5 }, i);

      // Text Fade In/Out
      tl.to(section, { opacity: 1, x: 0, duration: 0.5 }, i);
      if (i < sections.length - 1) {
        tl.to(section, { opacity: 0, x: -20, duration: 0.5 }, i + 0.75);
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full">
      <div ref={triggerRef} className="h-screen w-full relative overflow-hidden rounded-[40px] md:rounded-[80px] border-4 border-black transition-colors duration-500">
        
        {/* DYNAMIC PROTEIN SVG */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg width="400" height="400" viewBox="0 0 200 200" className="w-64 h-64 md:w-[500px] md:h-[500px]">
            {/* The Chain Bits */}
            <circle ref={bit1} cx="70" cy="100" r="15" fill="#f20028" stroke="black" strokeWidth="2" />
            <circle ref={bit2} cx="100" cy="100" r="15" fill="#f20028" stroke="black" strokeWidth="2" />
            <circle ref={bit3} cx="130" cy="100" r="15" fill="#f20028" stroke="black" strokeWidth="2" />
            
            {/* The Enzyme Scissors (Simplified SVG) */}
            <g ref={scissorsRef} style={{ opacity: 0 }} transform="translate(85, 70)">
               <path d="M0,0 L20,20 M0,20 L20,0" stroke="#ffb300" strokeWidth="4" strokeLinecap="round" />
               <circle cx="0" cy="0" r="3" fill="#ffb300" />
               <circle cx="0" cy="20" r="3" fill="#ffb300" />
            </g>
          </svg>
        </div>

        {/* LEFT-ALIGNED CONTENT LAYERS */}
        <div className="relative z-10 h-full w-full">
          {/* BEAT 1: THE BRICK */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-24 opacity-0 -translate-x-10">
            <div className="max-w-2xl space-y-4">
              <h2 className={cn("text-5xl md:text-[110px] uppercase text-[#f3eee4] leading-[0.85]", utoBlack.className)}>
                 STUCK IN<br/>THE GUT.
              </h2>
              <p className="text-[#f3eee4] text-xl md:text-2xl font-medium max-w-lg">
                Regular protein molecules are massive chains. Your stomach works overtime just to move the needle.
              </p>
            </div>
          </section>

          {/* BEAT 2: THE SNIP */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-24 opacity-0 -translate-x-10">
            <div className="max-w-2xl space-y-4">
              <p className={cn("text-4xl text-[#ffb300] lowercase", runWild.className)}>we snip them early</p>
              <h2 className={cn("text-5xl md:text-[110px] uppercase text-[#f3eee4] leading-[0.85]", utoBlack.className)}>
                 ENZYMATIC<br/>SCIENCE.
              </h2>
              <p className="text-[#f3eee4] text-xl md:text-2xl font-medium max-w-lg">
                We use natural enzymes to break those chains into tiny, bioavailable pieces before you take a sip.
              </p>
            </div>
          </section>

          {/* BEAT 3: THE PURITY */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-24 opacity-0 -translate-x-10">
            <div className="max-w-2xl space-y-4">
              <h2 className={cn("text-5xl md:text-[110px] uppercase text-black leading-[0.85]", utoBlack.className)}>
                NO GUMS.<br/>NO FILLERS.
              </h2>
              <p className="text-black text-xl md:text-2xl font-medium max-w-lg">
                Because when protein is this light, you don&apos;t need chemistry to hide the bloat.
              </p>
            </div>
          </section>

          {/* BEAT 4: THE RESULT */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-24 opacity-0 -translate-x-10">
            <div className="max-w-3xl space-y-6">
              <h2 className={cn("text-5xl md:text-[120px] uppercase text-black leading-[0.8]", utoBlack.className)}>
                FEEL THE<br/>LIGHTNESS.
              </h2>
              <p className={cn("text-4xl md:text-6xl text-[#f20028] lowercase", runWild.className)}>
                energy without the anchor.
              </p>
              <button className="bg-black text-[#ffb300] px-12 py-6 rounded-full text-2xl font-bold uppercase border-2 border-black hover:bg-transparent transition-all">
                Shop GUTSY
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
