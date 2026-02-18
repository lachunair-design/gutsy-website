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
      willChange: "transform, opacity, filter" 
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=500%", // Extended for smoother flow
        pin: true,
        scrub: 1.2, 
        anticipatePin: 1,
      },
    });

    const xDist = isMobile ? 40 : 100;

    // --- 1. THE CUT (BEAT 2 VISUAL) ---
    tl.to(scissorsRef.current, { opacity: 1, scale: 1.2, duration: 0.3 }, 0.5)
      // Scissors move to first gap
      .to(scissorsRef.current, { x: isMobile ? -15 : -30, duration: 0.2 }, 0.7)
      .to(scissorsRef.current, { rotate: -20, duration: 0.1, repeat: 1, yoyo: true }, 0.8)
      // Scissors move to second gap
      .to(scissorsRef.current, { x: isMobile ? 15 : 30, duration: 0.2 }, 0.9)
      .to(scissorsRef.current, { rotate: 20, duration: 0.1, repeat: 1, yoyo: true }, 1.0)
      
      // The Separation (Breaking it down)
      .to(bit1.current, { x: -xDist, rotate: -15, filter: "blur(0px)", duration: 0.8 }, 1.1)
      .to(bit3.current, { x: xDist, rotate: 15, filter: "blur(0px)", duration: 0.8 }, 1.1)
      .to(scissorsRef.current, { opacity: 0, scale: 0.5, duration: 0.3 }, 1.2);

    // --- 2. THE GLOW (BIOAVAILABLE STATE) ---
    tl.to([bit1.current, bit2.current, bit3.current], { 
      fill: "#ffb300", 
      filter: "drop-shadow(0 0 15px #ffb300)",
      scale: 1.1,
      duration: 1 
    }, 1.8);

    // --- 3. TEXT & BG FLOW (GUTSY Palette with Smooth Gradient Step) ---
    sections.forEach((section: any, i) => {
      // Added an intermediate dark-cream to prevent the harsh black-to-light jump
      const bgColors = ["#000000", "#000000", "#f20028", "#f3eee4"];
      tl.to(triggerRef.current, { backgroundColor: bgColors[i], duration: 0.6 }, i);

      // Mobile Headlines: Optimized for impact (text-7xl)
      tl.fromTo(section, 
        { opacity: 0, y: 40, filter: "blur(10px)" }, 
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5 }, 
        i
      );

      if (i < sections.length - 1) {
        tl.to(section, { opacity: 0, y: -40, filter: "blur(10px)", duration: 0.5 }, i + 0.8);
      }
    });

    // --- 4. FINAL PULSE & CTA ENTRANCE ---
    tl.fromTo(".cta-btn", 
      { scale: 0.8, opacity: 0, y: 20 }, 
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }, 
      3.5
    );

    gsap.to(".feels-light-text", {
      scale: 1.03,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full">
      <div ref={triggerRef} className="h-screen w-full relative overflow-hidden transition-colors duration-700">
        
        {/* SVG CONTAINER - Increased visibility to 80% */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg viewBox="0 0 200 200" className="w-full h-[60vh] md:h-full max-w-[800px] opacity-80">
            <circle ref={bit1} cx="70" cy="100" r="12" fill="#f20028" />
            <circle ref={bit2} cx="100" cy="100" r="12" fill="#f20028" />
            <circle ref={bit3} cx="130" cy="100" r="12" fill="#f20028" />
            <g ref={scissorsRef} style={{ opacity: 0 }} transform="translate(100, 100)">
                <path d="M-10,-10 L10,10 M-10,10 L10,-10" stroke="#ffb300" strokeWidth="3" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        <div className="relative z-10 h-full w-full">
          
          {/* BEAT 1 */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-32 opacity-0">
            <div className="max-w-4xl space-y-6">
              <h2 className={cn("text-7xl md:text-[160px] text-[#f20028] leading-[0.8] tracking-tighter", utoBlack.className)}>
                  Why most<br/>protein sucks
              </h2>
              <p className="text-[#f3eee4] text-2xl md:text-4xl font-medium leading-tight max-w-xl opacity-90">
                Massive protein molecules. Your stomach struggles to break them down.
              </p>
            </div>
          </section>

          {/* BEAT 2 */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-32 opacity-0">
            <div className="max-w-4xl space-y-4">
              <p className={cn("text-4xl md:text-7xl text-[#ffb300] lowercase", runWild.className)}>the science of light</p>
              <h2 className={cn("text-7xl md:text-[140px] text-[#f3eee4] leading-[0.8] tracking-tighter", utoBlack.className)}>
                  We break it<br/>down first
              </h2>
            </div>
          </section>

          {/* BEAT 3 */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-32 opacity-0">
            <div className="max-w-5xl space-y-10">
              <h2 className={cn("text-7xl md:text-[140px] text-[#000000] leading-[0.8] tracking-tighter", utoBlack.className)}>
                Five core<br/>ingredients.
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#000000] font-bold uppercase tracking-[0.2em] text-sm md:text-xl">
                {["Pea & Rice", "Kiwifruit", "Adaptogens", "Coconut Milk", "Monk Fruit"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-[2px] bg-[#000000]/20" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BEAT 4 */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-32 opacity-0">
            <div className="max-w-4xl space-y-12">
              <h2 className={cn("feels-light-text text-8xl md:text-[220px] text-[#000000] leading-[0.75] tracking-tighter", utoBlack.className)}>
                Feels<br/>light
              </h2>
              <button className={cn("cta-btn bg-[#f20028] text-[#f3eee4] px-14 py-6 md:px-20 md:py-8 rounded-full text-2xl md:text-3xl font-bold transition-all hover:bg-black shadow-2xl", utoBold.className)}>
                Shop Gutsy
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
