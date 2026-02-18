'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { 
  ArrowLeft, 
  ArrowRight, 
  Brain, 
  FlaskConical, 
  Apple, 
  Droplets, 
  Sword, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

export function FunFactCarousel({ utoBlack, utoBold, runWild }: { utoBlack: any, utoBold: any, runWild: any }) {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const funFacts = [
    { icon: <Brain className="w-6 h-6" />, text: "Your gut has more neurons than your spinal cord. That's why it's called your \"second brain.\" Listen to it." },
    { icon: <FlaskConical className="w-6 h-6" />, text: "Most protein powders use the same base ingredients. The difference? How broken down the molecules are before you drink them." },
    { icon: <Apple className="w-6 h-6" />, text: "Kiwifruit contains actinidin, an enzyme that breaks down protein naturally. That's why we put it in GUTSY." },
    { icon: <Droplets className="w-6 h-6" />, text: "Your stomach produces about 2 liters of hydrochloric acid daily just to digest food. We save it some work." },
    { icon: <Sword className="w-6 h-6" />, text: "Pea protein was used by Roman gladiators for strength. Rice protein was a staple for ancient warriors. We combined both." },
    { icon: <ShieldCheck className="w-6 h-6" />, text: "\"Gut-friendly\" became marketing jargon in 2019. Before that, brands just made protein that worked without the label." },
    { icon: <Clock className="w-6 h-6" />, text: "The average person tolerates digestive discomfort from protein for 6-12 months before trying a different brand. You don't have to." }
  ];

  return (
    <section className="py-32 bg-[#f3eee4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* LEFT: EDITORIAL TITLE & IMAGE */}
        <div className="relative w-full md:w-5/12">
          <div className="relative z-10">
            <h2 className={cn("text-7xl md:text-[140px] uppercase text-[#000000] leading-[0.8] tracking-tighter mb-4", utoBlack.className)}>
              FUN<br/>FACTS
            </h2>
            <p className={cn("text-4xl md:text-6xl text-[#f20028] lowercase italic mt-[-1rem] ml-4", runWild.className)}>
              just for fun
            </p>
          </div>
          
          <div className="relative w-full aspect-[4/5] mt-12 overflow-hidden rounded-[40px] shadow-2xl">
            <Image 
              src="/images/JUMPING.png" 
              alt="GUTSY Lifestyle" 
              fill 
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* RIGHT: CONTENT & MINIMAL CONTROLS */}
        <div className="w-full md:w-7/12 flex flex-col">
          <div className="min-h-[350px] flex flex-col justify-center">
            <div className="mb-10 w-16 h-16 flex items-center justify-center bg-[#000000] rounded-full text-[#ffb300] shadow-xl">
              {funFacts[currentFactIndex].icon}
            </div>
            
            <p className={cn("text-3xl md:text-5xl text-[#000000] leading-tight mb-12 tracking-tight", utoBold.className)}>
               {funFacts[currentFactIndex].text}
            </p>
          </div>
          
          {/* MINIMAL PREMIUM CONTROLS */}
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              <button 
                onClick={() => setCurrentFactIndex((prev) => (prev - 1 + funFacts.length) % funFacts.length)}
                className="w-16 h-16 flex items-center justify-center rounded-full border border-[#000000]/10 hover:bg-[#000000] hover:text-[#f3eee4] transition-all group"
                aria-label="Previous fact"
              >
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)}
                className="w-16 h-16 flex items-center justify-center rounded-full border border-[#000000]/10 hover:bg-[#000000] hover:text-[#f3eee4] transition-all group"
                aria-label="Next fact"
              >
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex flex-col">
              <span className={cn("text-[10px] uppercase tracking-[0.3em] text-[#000000]/40 font-black", utoBold.className)}>
                Deep Dive
              </span>
              <span className={cn("text-xl text-[#000000]", utoBold.className)}>
                {currentFactIndex + 1} <span className="text-[#000000]/20 mx-1">/</span> {funFacts.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
