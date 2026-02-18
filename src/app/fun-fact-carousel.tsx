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

export function FunFactCarousel({ utoBlack, utoBold }: { utoBlack: any, utoBold: any }) {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const funFacts = [
    { icon: <Brain className="w-8 h-8 text-[#3a4128]" />, text: "Your gut has more neurons than your spinal cord. That's why it's called your \"second brain.\" Listen to it." },
    { icon: <FlaskConical className="w-8 h-8 text-[#3a4128]" />, text: "Most protein powders use the same base ingredients. The difference? How broken down the molecules are before you drink them." },
    { icon: <Apple className="w-8 h-8 text-[#3a4128]" />, text: "Kiwifruit contains actinidin, an enzyme that breaks down protein naturally. That's why we put it in GUTSY." },
    { icon: <Droplets className="w-8 h-8 text-[#3a4128]" />, text: "Your stomach produces about 2 liters of hydrochloric acid daily just to digest food. We save it some work." },
    { icon: <Sword className="w-8 h-8 text-[#3a4128]" />, text: "Pea protein was used by Roman gladiators for strength. Rice protein was a staple for ancient warriors. We combined both." },
    { icon: <ShieldCheck className="w-8 h-8 text-[#3a4128]" />, text: "\"Gut-friendly\" became marketing jargon in 2019. Before that, brands just made protein that worked without the label." },
    { icon: <Clock className="w-8 h-8 text-[#3a4128]" />, text: "The average person tolerates digestive discomfort from protein for 6-12 months before trying a different brand. You don't have to." }
  ];

  return (
    <section className="py-20 bg-[#f3eee4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* LEFT: IMAGE & TITLE */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="relative">
            <h2 className={cn("text-5xl md:text-8xl uppercase text-[#3a4128] tracking-tight mb-4", utoBlack.className)}>
              FUN FACT
            </h2>
            <div className="relative w-[280px] h-[200px] md:w-[450px] md:h-[350px]">
              <Image 
                src="/images/fun-fact-illustration.png" 
                alt="GUTSY Mascot Illustration" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: CONTENT & CONTROLS */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="min-h-[220px] flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <div className="mb-6 opacity-60">
              {funFacts[currentFactIndex].icon}
            </div>
            <p className="text-xl md:text-2xl text-[#3a4128] font-mono leading-tight mb-12 max-w-md">
              {funFacts[currentFactIndex].text}
            </p>
          </div>
          
          {/* SLIM BUTTON DESIGN FROM SCREENSHOT */}
          <div className="flex border border-[#3a4128]/30 rounded-full overflow-hidden w-48 bg-transparent">
            <button 
              onClick={() => setCurrentFactIndex((prev) => (prev - 1 + funFacts.length) % funFacts.length)}
              className="flex-1 py-3 flex justify-center hover:bg-[#3a4128]/5 transition-all border-r border-[#3a4128]/30"
            >
              <ArrowLeft className="w-5 h-5 text-[#3a4128]" />
            </button>
            <button 
              onClick={() => setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)}
              className="flex-1 py-3 flex justify-center hover:bg-[#3a4128]/5 transition-all"
            >
              <ArrowRight className="w-5 h-5 text-[#3a4128]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
