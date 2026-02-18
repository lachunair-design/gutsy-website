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
        
        {/* LEFT: IMAGE & BRANDED TITLE */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative">
            <h2 className={cn("text-6xl md:text-9xl uppercase text-black leading-none mb-[-1rem]", utoBlack.className)}>
              FUN FACT
            </h2>
            <p className={cn("text-4xl md:text-6xl text-[#f20028] lowercase ml-4 md:ml-8 rotate-[-3deg]", runWild.className)}>
              just for fun
            </p>
            <div className="relative w-[300px] h-[220px] md:w-[480px] md:h-[380px] mt-8">
              <Image 
                src="/images/fun-fact-illustration.png" 
                alt="GUTSY Mascot Illustration" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: BRANDED CONTENT & CONTROLS */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="min-h-[240px] flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="mb-6 p-4 bg-black rounded-full text-[#ffb300]">
              {funFacts[currentFactIndex].icon}
            </div>
            <p className={cn("text-2xl md:text-3xl text-black leading-tight mb-12 max-w-md italic", utoBold.className)}>
              {funFacts[currentFactIndex].text}
            </p>
          </div>
          
          {/* BRANDED BUTTON DESIGN */}
          <div className="flex border-4 border-black rounded-full overflow-hidden w-48 bg-white shadow-[4px_4px_0px_0px_#f20028]">
            <button 
              onClick={() => setCurrentFactIndex((prev) => (prev - 1 + funFacts.length) % funFacts.length)}
              className="flex-1 py-4 flex justify-center hover:bg-[#ffb300] transition-all border-r-4 border-black"
            >
              <ArrowLeft className="w-6 h-6 text-black" />
            </button>
            <button 
              onClick={() => setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)}
              className="flex-1 py-4 flex justify-center hover:bg-[#ffb300] transition-all"
            >
              <ArrowRight className="w-6 h-6 text-black" />
            </button>
          </div>

          <div className={cn("mt-6 text-black/40 uppercase tracking-widest text-sm font-bold", utoBold.className)}>
            Discovery {currentFactIndex + 1} / {funFacts.length}
          </div>
        </div>
      </div>
    </section>
  );
}
