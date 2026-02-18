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
    { icon: <Brain className="w-8 h-8 text-black" />, text: "Your gut has more neurons than your spinal cord. That's why it's called your \"second brain.\" Listen to it." },
    { icon: <FlaskConical className="w-8 h-8 text-black" />, text: "Most protein powders use the same base ingredients. The difference? How broken down the molecules are before you drink them." },
    { icon: <Apple className="w-8 h-8 text-black" />, text: "Kiwifruit contains actinidin, an enzyme that breaks down protein naturally. That's why we put it in GUTSY." },
    { icon: <Droplets className="w-8 h-8 text-black" />, text: "Your stomach produces about 2 liters of hydrochloric acid daily just to digest food. We save it some work." },
    { icon: <Sword className="w-8 h-8 text-black" />, text: "Pea protein was used by Roman gladiators for strength. Rice protein was a staple for ancient warriors. We combined both." },
    { icon: <ShieldCheck className="w-8 h-8 text-black" />, text: "\"Gut-friendly\" became marketing jargon in 2019. Before that, brands just made protein that worked without the label." },
    { icon: <Clock className="w-8 h-8 text-black" />, text: "The average person tolerates digestive discomfort from protein for 6-12 months before trying a different brand. You don't have to." }
  ];

  return (
    <section className="py-20 bg-[#f3eee4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT: BRANDED TITLE & ILLUSTRATION */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative">
            <h2 className={cn("text-6xl md:text-9xl uppercase text-black leading-none mb-[-1.5rem]", utoBlack.className)}>
              FUN FACT
            </h2>
            <p className={cn("text-4xl md:text-6xl text-[#f20028] lowercase ml-6 md:ml-12 rotate-[-3deg] relative z-10", runWild.className)}>
              just for fun
            </p>
            <div className="relative w-[320px] h-[240px] md:w-[500px] md:h-[400px] mt-4">
              <Image 
                src="/images/fun-fact-illustration.png" 
                alt="GUTSY Branded Illustration" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT & BRANDED CONTROLS */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="min-h-[250px] flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="mb-8 p-5 bg-black rounded-full text-[#ffb300] shadow-[4px_4px_0px_0px_#f20028]">
              {funFacts[currentFactIndex].icon}
            </div>
            
            <p className={cn("text-2xl md:text-4xl text-black leading-tight mb-12 max-w-lg italic font-bold", utoBold.className)}>
               <span className="text-[#f20028]">&quot;</span>{funFacts[currentFactIndex].text}<span className="text-[#f20028]">&quot;</span>
            </p>
          </div>
          
          {/* BRANDED SLIM CONTROLS */}
          <div className="flex border-4 border-black rounded-full overflow-hidden w-56 bg-white shadow-[6px_6px_0px_0px_#ffb300]">
            <button 
              onClick={() => setCurrentFactIndex((prev) => (prev - 1 + funFacts.length) % funFacts.length)}
              className="flex-1 py-4 flex justify-center hover:bg-[#f3eee4] transition-all border-r-4 border-black group"
              aria-label="Previous fact"
            >
              <ArrowLeft className="w-7 h-7 text-black group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={() => setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)}
              className="flex-1 py-4 flex justify-center hover:bg-[#f3eee4] transition-all group"
              aria-label="Next fact"
            >
              <ArrowRight className="w-7 h-7 text-black group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className={cn("mt-8 text-black/40 uppercase tracking-[0.2em] text-xs font-black", utoBold.className)}>
            Deep Dive {currentFactIndex + 1} of {funFacts.length}
          </div>
        </div>
      </div>
    </section>
  );
}
