"use client";
import { useRef } from "react";
import Link from "next/link";
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

  // SVG refs for protein molecule animation
  const moleculeGroupRef = useRef(null);
  const coreRef = useRef(null);
  const orbitalRefs = useRef<(SVGElement | null)[]>([]);
  const bondRefs = useRef<(SVGElement | null)[]>([]);
  const peptideRefs = useRef<(SVGElement | null)[]>([]);
  const enzymeRef = useRef(null);
  const glowRef = useRef(null);

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

    // --- BEAT 1: THE PROBLEM — Show complex tangled molecule ---
    // Molecule pulses ominously
    tl.to(moleculeGroupRef.current, { scale: 1.05, duration: 0.3, yoyo: true, repeat: 1 }, 0.2);

    // --- BEAT 2: THE CUT — Enzyme arrives and breaks bonds ---
    // Enzyme appears
    tl.fromTo(enzymeRef.current,
      { opacity: 0, scale: 0.5, x: isMobile ? 60 : 80 },
      { opacity: 1, scale: 1, x: 0, duration: 0.4, ease: "back.out(1.7)" },
      1.0
    );

    // Enzyme snips across (zigzag motion)
    tl.to(enzymeRef.current, { x: isMobile ? -20 : -30, rotation: -15, duration: 0.15 }, 1.4)
      .to(enzymeRef.current, { x: isMobile ? 20 : 30, rotation: 15, duration: 0.15 }, 1.55)
      .to(enzymeRef.current, { x: 0, rotation: 0, duration: 0.1 }, 1.7);

    // Bonds break (fade out)
    bondRefs.current.forEach((bond, i) => {
      if (bond) {
        tl.to(bond, { opacity: 0, duration: 0.2 }, 1.5 + i * 0.08);
      }
    });

    // Orbitals scatter outward
    const scatterAngles = [
      { x: -40, y: -30, rotate: -20 },
      { x: 35, y: -35, rotate: 15 },
      { x: -30, y: 35, rotate: 10 },
      { x: 45, y: 25, rotate: -15 },
      { x: -15, y: -45, rotate: 25 },
      { x: 20, y: 40, rotate: -10 },
    ];
    orbitalRefs.current.forEach((orb, i) => {
      if (orb) {
        const scatter = scatterAngles[i % scatterAngles.length];
        tl.to(orb, {
          x: scatter.x * (isMobile ? 0.6 : 1),
          y: scatter.y * (isMobile ? 0.6 : 1),
          rotation: scatter.rotate,
          duration: 0.6,
          ease: "power2.out",
        }, 1.6);
      }
    });

    // Core fades out
    tl.to(coreRef.current, { opacity: 0, scale: 0.5, duration: 0.4 }, 1.7);

    // Enzyme exits
    tl.to(enzymeRef.current, { opacity: 0, scale: 0.6, y: -30, duration: 0.3 }, 1.9);

    // --- BEAT 3: THE GLOW — Peptides become bioavailable ---
    // Scattered orbitals transform into golden glowing peptides
    orbitalRefs.current.forEach((orb, i) => {
      if (orb) {
        tl.to(orb, {
          attr: { fill: "#ffb300", stroke: "#ffb300" },
          filter: "drop-shadow(0 0 12px rgba(255,179,0,0.6))",
          scale: 1.15,
          duration: 0.5,
        }, 2.2 + i * 0.06);
      }
    });

    // Peptide labels appear
    peptideRefs.current.forEach((p, i) => {
      if (p) {
        tl.fromTo(p, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.3 }, 2.5 + i * 0.1);
      }
    });

    // --- BEAT 4: FEELS LIGHT — Everything fades into resolution ---
    // Peptides gently float upward and fade
    orbitalRefs.current.forEach((orb, i) => {
      if (orb) {
        tl.to(orb, { y: "-=20", opacity: 0.4, duration: 0.8 }, 3.2 + i * 0.05);
      }
    });
    peptideRefs.current.forEach((p) => {
      if (p) tl.to(p, { opacity: 0, duration: 0.4 }, 3.2);
    });

    // Glow orb appears behind the text
    tl.fromTo(glowRef.current,
      { opacity: 0, scale: 0.3 },
      { opacity: 0.15, scale: 1, duration: 0.8, ease: "power2.out" },
      3.3
    );

    // --- TEXT BEATS & BACKGROUND ---
    const bgColors = ["#000000", "#0a0a0a", "#f20028", "#f3eee4"];
    sections.forEach((section: any, i: number) => {
      tl.to(triggerRef.current, { backgroundColor: bgColors[i], duration: 0.6 }, i);
      tl.fromTo(section,
        { opacity: 0, y: 50, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.5 },
        i
      );
      if (i < sections.length - 1) {
        tl.to(section, { opacity: 0, y: -40, filter: "blur(8px)", duration: 0.5 }, i + 0.8);
      }
    });

    // --- PROGRESS DOTS ---
    dotRefs.current.forEach((dot, i) => {
      if (!dot) return;
      tl.to(dot, { scale: 1.5, opacity: 1, duration: 0.2 }, i);
      if (i < sections.length - 1) {
        tl.to(dot, { scale: 1, opacity: 0.3, duration: 0.2 }, i + 0.8);
      }
    });

    // --- CTA BUTTON ---
    tl.fromTo(".scrolly-cta",
      { scale: 0.85, opacity: 0, y: 20 },
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
      3.5
    );

    // "Feels light" gentle pulse
    gsap.to(".feels-light-text", {
      scale: 1.02,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full">
      <div ref={triggerRef} className="h-screen w-full relative overflow-hidden bg-black">

        {/* ── PROGRESS DOTS (right side) ── */}
        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              ref={(el) => { dotRefs.current[i] = el; }}
              className={cn(
                "w-2 h-2 rounded-full transition-colors duration-500",
                i === 0 ? "bg-white opacity-100" : "bg-white/60 opacity-30"
              )}
            />
          ))}
        </div>

        {/* ── SVG ILLUSTRATION — Protein molecule breakdown ── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <svg viewBox="0 0 300 300" className="w-[55vw] h-[55vh] md:w-[500px] md:h-[500px] max-w-[600px] opacity-70">

            {/* Soft glow orb (appears in beat 4) */}
            <circle ref={glowRef} cx="150" cy="150" r="100" fill="#ffb300" opacity="0" />

            {/* Protein molecule group */}
            <g ref={moleculeGroupRef}>
              {/* Central core */}
              <circle ref={coreRef} cx="150" cy="150" r="22" fill="none" stroke="#f20028" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

              {/* Bonds (connecting lines) */}
              {[
                { x1: 150, y1: 128, x2: 130, y2: 108 },
                { x1: 150, y1: 128, x2: 170, y2: 105 },
                { x1: 128, y1: 150, x2: 108, y2: 165 },
                { x1: 172, y1: 150, x2: 192, y2: 145 },
                { x1: 150, y1: 172, x2: 135, y2: 195 },
                { x1: 150, y1: 172, x2: 168, y2: 192 },
              ].map((bond, i) => (
                <line
                  key={`bond-${i}`}
                  ref={(el) => { bondRefs.current[i] = el; }}
                  x1={bond.x1} y1={bond.y1} x2={bond.x2} y2={bond.y2}
                  stroke="#f20028" strokeWidth="1" opacity="0.3" strokeDasharray="3 2"
                />
              ))}

              {/* Orbital nodes (become scattered peptides) */}
              {[
                { cx: 125, cy: 105, r: 10 },
                { cx: 175, cy: 100, r: 12 },
                { cx: 103, cy: 168, r: 11 },
                { cx: 195, cy: 142, r: 10 },
                { cx: 130, cy: 198, r: 12 },
                { cx: 172, cy: 195, r: 11 },
              ].map((node, i) => (
                <circle
                  key={`orb-${i}`}
                  ref={(el) => { orbitalRefs.current[i] = el; }}
                  cx={node.cx} cy={node.cy} r={node.r}
                  fill="#f20028" fillOpacity="0.15"
                  stroke="#f20028" strokeWidth="1.5"
                />
              ))}
            </g>

            {/* Enzyme (scissors icon) */}
            <g ref={enzymeRef} opacity="0" transform="translate(150, 80)">
              <circle cx="0" cy="0" r="14" fill="#ffb300" fillOpacity="0.2" stroke="#ffb300" strokeWidth="1.5" />
              <path d="M-6,-6 L6,6 M-6,6 L6,-6" stroke="#ffb300" strokeWidth="2.5" strokeLinecap="round" />
            </g>

            {/* Peptide labels (appear in beat 3) */}
            {[
              { x: 80, y: 75 },
              { x: 210, y: 65 },
              { x: 70, y: 200 },
              { x: 235, y: 170 },
            ].map((pos, i) => (
              <text
                key={`peptide-${i}`}
                ref={(el) => { peptideRefs.current[i] = el; }}
                x={pos.x} y={pos.y}
                textAnchor="middle"
                className="text-[7px] fill-[#ffb300] font-bold uppercase tracking-widest"
                opacity="0"
              >
                peptide
              </text>
            ))}
          </svg>
        </div>

        {/* ── TEXT CONTENT ── */}
        <div className="relative z-10 h-full w-full">

          {/* BEAT 1: The Problem */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-20 lg:px-32 opacity-0">
            <div className="max-w-3xl space-y-6">
              <p className={cn("text-sm uppercase tracking-[0.25em] text-[#f20028] font-bold", utoBold.className)}>
                The Problem
              </p>
              <h2 className={cn("text-6xl md:text-[140px] text-[#f20028] leading-[0.8] tracking-tighter", utoBlack.className)}>
                Why most<br />protein sucks
              </h2>
              <p className="text-[#f3eee4]/80 text-xl md:text-3xl font-medium leading-tight max-w-xl">
                Massive protein molecules your stomach struggles to break down. The result? Bloat, heaviness, discomfort.
              </p>
            </div>
          </section>

          {/* BEAT 2: The Science */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-20 lg:px-32 opacity-0">
            <div className="max-w-3xl space-y-6">
              <p className={cn("text-3xl md:text-5xl text-[#ffb300] lowercase", runWild.className)}>
                the science of light
              </p>
              <h2 className={cn("text-6xl md:text-[120px] text-[#f3eee4] leading-[0.8] tracking-tighter", utoBlack.className)}>
                We break it<br />down first
              </h2>
              <p className="text-[#f3eee4]/60 text-lg md:text-2xl font-medium leading-tight max-w-lg">
                Enzymatic pre-digestion splits large molecules into tiny, bioavailable peptides — before they ever reach your gut.
              </p>
            </div>
          </section>

          {/* BEAT 3: The Ingredients */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-20 lg:px-32 opacity-0">
            <div className="max-w-4xl space-y-8">
              <h2 className={cn("text-6xl md:text-[120px] text-[#f3eee4] leading-[0.8] tracking-tighter", utoBlack.className)}>
                Five core<br />ingredients.
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {["Pea & Rice", "Kiwifruit", "Adaptogens", "Coconut Milk", "Monk Fruit"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#ffb300]" />
                    <span className={cn("text-[#f3eee4] font-bold uppercase tracking-[0.15em] text-sm md:text-lg", utoBold.className)}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <p className={cn("text-xl md:text-2xl text-[#f3eee4]/50 lowercase italic", runWild.className)}>
                nothing else.
              </p>
            </div>
          </section>

          {/* BEAT 4: The Resolution */}
          <section className="story-beat absolute inset-0 flex items-center px-8 md:px-20 lg:px-32 opacity-0">
            <div className="max-w-4xl space-y-10">
              <h2 className={cn("feels-light-text text-7xl md:text-[200px] text-black leading-[0.75] tracking-tighter", utoBlack.className)}>
                Feels<br />light
              </h2>
              <p className="text-black/50 text-lg md:text-xl max-w-md font-medium leading-relaxed">
                No bloat. No brick in your stomach. Just protein that works with your body, not against it.
              </p>
              <Link href="/products" className={cn(
                "scrolly-cta inline-flex items-center h-16 md:h-20 px-14 md:px-20 rounded-full bg-[#f20028] text-[#f3eee4] text-xl md:text-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300",
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
