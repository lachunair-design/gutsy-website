"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
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

  // SVG refs
  const moleculeGroupRef = useRef(null);
  const coreRef = useRef(null);
  const orbitalRefs = useRef<(SVGElement | null)[]>([]);
  const bondRefs = useRef<(SVGElement | null)[]>([]);
  const peptideRefs = useRef<(SVGElement | null)[]>([]);
  const enzymeRef = useRef(null);
  const glowRef = useRef(null);
  const scribbleRef = useRef(null);

  // Progress dot refs
  const dotRefs = useRef<(HTMLElement | null)[]>([]);

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    const sections = gsap.utils.toArray(".story-beat");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
      },
    });

    // --- BEAT 1: THE PROBLEM ---
    tl.to(moleculeGroupRef.current, { scale: 1.1, duration: 0.5, yoyo: true, repeat: 1 }, 0);
    tl.fromTo(scribbleRef.current, 
      { strokeDashoffset: 400 }, 
      { strokeDashoffset: 0, duration: 0.8 }, 0.2
    );

    // --- BEAT 2: THE CUT ---
    tl.fromTo(enzymeRef.current,
      { opacity: 0, scale: 0.5, x: isMobile ? 60 : 100 },
      { opacity: 1, scale: 1.2, x: 0, duration: 0.4, ease: "back.out(2)" }, 1.0
    );

    // Zig-zag "Slicing" Animation
    tl.to(enzymeRef.current, { x: -40, rotation: -20, duration: 0.15 }, 1.3)
      .to(enzymeRef.current, { x: 40, rotation: 20, duration: 0.15 }, 1.45)
      .to(enzymeRef.current, { x: 0, rotation: 0, duration: 0.2 }, 1.6);

    // Bonds vanish as if sliced
    bondRefs.current.forEach((bond, i) => {
      if (bond) tl.to(bond, { opacity: 0, scale: 0, duration: 0.2 }, 1.4 + i * 0.05);
    });

    // Orbitals scatter like liquid droplets
    const scatterPositions = [
      { x: -100, y: -80 }, { x: 120, y: -60 }, { x: -90, y: 100 },
      { x: 110, y: 90 }, { x: 0, y: -130 }, { x: 0, y: 130 }
    ];
    orbitalRefs.current.forEach((orb, i) => {
      if (orb) {
        tl.to(orb, {
          x: scatterPositions[i].x,
          y: scatterPositions[i].y,
          scale: 0.8,
          duration: 0.8,
          ease: "expo.out",
        }, 1.5);
      }
    });

    // --- BEAT 3: THE TRANSFORMATION ---
    orbitalRefs.current.forEach((orb, i) => {
      if (orb) {
        tl.to(orb, {
          attr: { fill: "#f20028" },
          filter: "drop-shadow(0 0 20px rgba(242,0,40,0.4))",
          scale: 1.2,
          duration: 0.6,
        }, 2.1 + i * 0.05);
      }
    });

    // --- BEAT 4: THE RESOLUTION (Rhode Era) ---
    tl.to(orbitalRefs.current, { opacity: 0, y: -100, duration: 1, stagger: 0.05 }, 3.2);
    tl.fromTo(glowRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 0.4, scale: 1.5, duration: 1.5, ease: "sine.inOut" }, 3.0
    );

    // --- TEXT & BACKGROUND TRANSITIONS ---
    const bgColors = ["#000000", "#000000", "#000000", "#F9F8F6"];
    sections.forEach((section: any, i: number) => {
      tl.to(triggerRef.current, { backgroundColor: bgColors[i], duration: 0.8 }, i);
      tl.fromTo(section,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.6 }, i
      );
      if (i < sections.length - 1) {
        tl.to(section, { opacity: 0, y: -100, duration: 0.6 }, i + 0.8);
      }
    });

    // Progress Dots
    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      tl.to(dot, { backgroundColor: i === 3 ? "#000000" : "#f20028", scale: 1.5, opacity: 1, duration: 0.3 }, i);
      if (i < sections.length - 1) {
        tl.to(dot, { scale: 1, opacity: 0.2, duration: 0.3 }, i + 0.8);
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full">
      <div ref={triggerRef} className="h-screen w-full relative overflow-hidden bg-black transition-colors duration-1000">

        {/* ── NAVIGATION DOTS ── */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              ref={(el) => { dotRefs.current[i] = el; }}
              className="w-1.5 h-1.5 rounded-full bg-white opacity-20"
            />
          ))}
        </div>

        {/* ── SCIENTIFIC ILLUSTRATION ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg viewBox="0 0 400 400" className="w-[80vw] h-[80vh] md:w-[600px] md:h-[600px]">
            <circle ref={glowRef} cx="200" cy="200" r="120" fill="#f20028" opacity="0" filter="blur(60px)" />
            
            <g ref={moleculeGroupRef}>
              <circle ref={coreRef} cx="200" cy="200" r="30" fill="none" stroke="#f20028" strokeWidth="0.5" strokeDasharray="4 8" />
              
              {/* Bonds */}
              {[
                { x1: 200, y1: 170, x2: 180, y2: 130 }, { x1: 200, y1: 170, x2: 220, y2: 130 },
                { x1: 170, y1: 200, x2: 130, y2: 220 }, { x1: 230, y1: 200, x2: 270, y2: 180 },
                { x1: 200, y1: 230, x2: 180, y2: 270 }, { x1: 200, y1: 230, x2: 220, y2: 270 },
              ].map((b, i) => (
                <line key={i} ref={(el) => { bondRefs.current[i] = el; }} x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2} stroke="#f20028" strokeWidth="1" opacity="0.3" />
              ))}

              {/* Molecule Drops (Rhode Style Softness) */}
              {[
                { cx: 180, cy: 130 }, { cx: 220, cy: 130 }, { cx: 130, cy: 220 },
                { cx: 270, cy: 180 }, { cx: 180, cy: 270 }, { cx: 220, cy: 270 }
              ].map((c, i) => (
                <circle key={i} ref={(el) => { orbitalRefs.current[i] = el; }} cx={c.cx} cy={c.cy} r="14" fill="#f20028" fillOpacity="0.1" stroke="#f20028" strokeWidth="1" />
              ))}
            </g>

            {/* Enzyme - Graza Style X */}
            <g ref={enzymeRef} opacity="0" transform="translate(200, 100)">
              <path d="M-15,-15 L15,15 M-15,15 L15,-15" stroke="#f20028" strokeWidth="4" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        {/* ── STORY CONTENT ── */}
        <div className="relative z-10 h-full w-full">
          
          {/* BEAT 1 */}
          <section className="story-beat absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="space-y-4">
              <div className="relative inline-block">
                <h2 className={cn("text-7xl md:text-[160px] text-[#f20028] leading-[0.8] tracking-tighter", utoBlack.className)}>
                  Why most<br />protein sucks
                </h2>
                <svg className="absolute -bottom-6 left-0 w-full h-12 text-[#f20028] overflow-visible" viewBox="0 0 400 20">
                    <path ref={scribbleRef} d="M10 10C100 25 300 -5 390 15" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" style={{ strokeDasharray: 400 }} />
                </svg>
              </div>
              <p className="text-[#f3eee4]/60 text-xl md:text-2xl max-w-lg mx-auto pt-10">
                Large, clunky molecules that act like a brick in your gut.
              </p>
            </div>
          </section>

          {/* BEAT 2 */}
          <section className="story-beat absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="space-y-6">
               <p className={cn("text-3xl md:text-5xl text-[#f20028] -rotate-2", runWild.className)}>
                the science of light
              </p>
              <h2 className={cn("text-7xl md:text-[140px] text-white leading-[0.8] tracking-tighter", utoBlack.className)}>
                We break it<br />down first
              </h2>
            </div>
          </section>

          {/* BEAT 3 */}
          <section className="story-beat absolute inset-0 flex items-center justify-center text-center px-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <h2 className={cn("text-7xl md:text-[120px] text-white leading-[0.8] tracking-tighter text-left", utoBlack.className)}>
                    Only the<br/>essentials.
                </h2>
                <div className="flex flex-wrap gap-4 justify-start">
                    {["Pea", "Rice", "Kiwi", "Coconut", "Monk Fruit"].map(ing => (
                        <span key={ing} className={cn("px-8 py-3 rounded-full border border-white/20 text-white text-xl", utoBold.className)}>
                            {ing}
                        </span>
                    ))}
                </div>
             </div>
          </section>

          {/* BEAT 4: THE RHODE RESOLUTION */}
          <section className="story-beat absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-[#F9F8F6]">
            <h2 className={cn("text-[120px] md:text-[240px] text-black leading-[0.75] tracking-tight transition-transform duration-1000", utoBlack.className)}>
              Feels<br />light
            </h2>
            <div className="mt-12 space-y-8 animate-in fade-in slide-in-from-bottom-10 delay-500 duration-1000">
                <p className="text-black/40 text-xl md:text-2xl max-w-md mx-auto">
                    No bloat. No heaviness. Just clean, bioavailable fuel.
                </p>
                <Link href="/shop" className={cn(
                    "inline-flex h-20 px-16 items-center rounded-full bg-[#f20028] text-white text-2xl shadow-2xl hover:bg-black transition-all duration-500",
                    utoBold.className
                )}>
                    Shop Gutsy
                </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
