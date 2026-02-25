'use client';

import { useState } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ChevronRight, FlaskConical, Beaker, ShieldCheck } from 'lucide-react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const facts = [
  { 
    num: "01", 
    title: "Your old protein powder wasn't the problem. Its formula was.", 
    content: "Most people who switched to GUTSY tell us the same thing: they thought bloating was just what protein powders do. Some lived with it for years. Some tried switching brands. Some gave up entirely and started eating sad, protein-free salads. What they didn't know is that the bloating isn't a side effect of protein. It's a side effect of large, intact protein molecules landing in your gut before your digestive system is ready for them." 
  },
  { 
    num: "02", 
    title: "What 'hydrolyzed' means. (It's simpler than it sounds.)", 
    content: "Think of a protein molecule like a very long necklace of beads. Standard protein gives your gut the whole necklace and says 'good luck.' Hydrolyzed protein gives your gut a handful of short chains, already broken apart. Your digestive system barely has to work. It's basically getting a cheat code." 
  },
  // ... [Additional facts would be mapped here from the provided copy]
];

const funFacts = [
  { category: "The Science", title: "Borrowing from Babies", text: "Hydrolyzed protein was actually developed for premature infants with sensitive tummies. We just stole the science for your post-workout. You're welcome." },
  { category: "The Gut", title: "Smart Guts", text: "Your gut has about 500 million neurons. That’s more than your spinal cord. It’s basically a second brain that’s much pickier about what it drinks." },
  { category: "The Body", title: "The Red Factory", text: "Your body builds 2 million red blood cells every single second. Every one of them is made of protein. No pressure, though." },
];

export default function SciencePage() {
  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#f20028]/10", utoMedium.className)}>
      
      {/* HERO SECTION */}
      <section className="bg-black text-[#f3eee4] pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className={cn("text-6xl md:text-[140px] leading-[0.8] tracking-tighter mb-6", utoBlack.className)}>
              Actual <br /> Chemistry.
            </h1>
            <p className={cn("text-3xl md:text-5xl text-[#ffb300] lowercase italic opacity-90", runWild.className)}>
              16 facts about gutsy and nutrition—minus the wellness theater.
            </p>
          </div>
        </div>
        {/* Subtle grid overlay for that "scientific" feel */}
        <div className="absolute inset-0 opacity-10 pointer-events-none border-[0.5px] border-[#f3eee4]/20 grid grid-cols-6 lg:grid-cols-12" />
      </section>

      {/* INTRO COPY */}
      <section className="py-20 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl leading-relaxed text-black/80">
              Everything on this page is backed by third-party lab testing, supplier clinical data, and ingredient science. We wrote it so you don&apos;t have to wade through a 60-page COA to find out what&apos;s actually in your scoop. <span className="text-[#f20028]">You&apos;re welcome.</span>
            </p>
          </div>
        </div>
      </section>

      {/* THE 16 FACTS: EDITORIAL LIST */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="space-y-32">
            {/* Fact 01 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <span className={cn("lg:col-span-2 text-6xl md:text-8xl text-[#f20028] opacity-20", utoBlack.className)}>01</span>
              <div className="lg:col-span-6">
                <h2 className={cn("text-3xl md:text-5xl mb-8 leading-tight", utoBold.className)}>
                  Your old protein powder wasn&apos;t the problem. Its formula was.
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-black/70 leading-relaxed">
                  <p>Most people who switched to GUTSY tell us the same thing: they thought bloating was just what protein powders do. Some lived with it for years. Some tried switching brands. Some gave up entirely and started eating sad, protein-free salads.</p>
                  <p>What they didn&apos;t know is that the bloating isn&apos;t a side effect of protein. It&apos;s a side effect of large, intact protein molecules landing in your gut before your digestive system is ready for them.</p>
                </div>
              </div>
            </div>

            {/* Heavy Metals Table Section (Fact 08) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-20 bg-white rounded-[40px] px-8 md:px-16 shadow-sm border border-black/5">
                <div className="lg:col-span-12">
                     <h2 className={cn("text-3xl md:text-5xl mb-12", utoBold.className)}>08. The actual numbers.</h2>
                     <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b-2 border-black uppercase text-sm tracking-widest">
                                    <th className="py-4">Metal</th>
                                    <th className="py-4">Cacao Boost</th>
                                    <th className="py-4">Vanilla Calm</th>
                                </tr>
                            </thead>
                            <tbody className={cn("text-xl md:text-2xl", utoMedium.className)}>
                                <tr className="border-b border-black/5"><td className="py-6">Lead (Pb)</td><td className="py-6">0.020 mg/kg</td><td className="py-6 text-[#f20028]">0.028 mg/kg</td></tr>
                                <tr className="border-b border-black/5"><td className="py-6">Arsenic (As)</td><td className="py-6">0.029 mg/kg</td><td className="py-6">0.035 mg/kg</td></tr>
                                <tr className="border-b border-black/5"><td className="py-6">Cadmium (Cd)</td><td className="py-6">0.068 mg/kg</td><td className="py-6">0.064 mg/kg</td></tr>
                            </tbody>
                        </table>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUN FACTS CAROUSEL STYLE SECTION */}
      <section className="py-24 bg-black text-[#f3eee4]">
        <div className="mx-auto max-w-7xl px-8">
            <h2 className={cn("text-5xl md:text-7xl mb-16 tracking-tighter", utoBlack.className)}>The Science <span className={cn("text-3xl md:text-4xl text-[#ffb300] block", runWild.className)}>(but make it fashion)</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {funFacts.map((fact, i) => (
                    <div key={i} className="border border-[#f3eee4]/20 p-8 rounded-3xl hover:bg-[#f20028] transition-colors duration-500 group">
                        <p className="text-[#ffb300] uppercase text-xs tracking-widest mb-4 group-hover:text-white">{fact.category}</p>
                        <h3 className={cn("text-2xl mb-4", utoBold.className)}>{fact.title}</h3>
                        <p className="opacity-70 group-hover:opacity-100">{fact.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* FOOTER REFERENCES */}
      <section className="py-20 opacity-50">
        <div className="mx-auto max-w-7xl px-8 text-sm">
            <h4 className={cn("text-lg mb-4 uppercase tracking-widest", utoBold.className)}>Sources & References</h4>
            <ul className="space-y-2">
                <li>Actazin® clinical data: Anagenix Limited, actazin.com</li>
                <li>Third-party laboratory testing: J.S. Hamilton Baltic SIA, Dec 2025</li>
                <li>FSANZ Actazin® health claim notification</li>
            </ul>
        </div>
      </section>
    </div>
  );
}
