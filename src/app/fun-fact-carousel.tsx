'use client';

import { useState, useEffect } from 'react';
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
    { icon: <Brain className="w-5 h-5" />, text: "Your gut has more neurons than your spinal cord. That's why it's called your second brain. Listen to it." },
    { icon: <FlaskConical className="w-5 h-5" />, text: "Most protein powders use the same base ingredients. The difference? How broken down the molecules are before you drink them." },
    { icon: <Apple className="w-5 h-5" />, text: "Kiwifruit contains actinidin, an enzyme that breaks down protein naturally. That's why we put it in Gutsy." },
    { icon: <Droplets className="w-5 h-5" />, text: "Your stomach produces about 2 liters of hydrochloric acid daily just to digest food. We save it some work." },
    { icon: <Sword className="w-5 h-5" />, text: "Pea protein was used by Roman gladiators for strength. Rice protein was a staple for ancient warriors. We combined both." },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Gut-friendly became marketing jargon in 2019. Before that, brands just made protein that worked without the label." },
    { icon: <Clock className="w-5 h-5" />, text: "The average person tolerates digestive discomfort from protein for 6-12 months before trying a different brand. You don't have to." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [funFacts.length]);

  return (
    <section className="py-20 bg-[#f3eee4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          
          {/* COMPACT TITLE AREA */}
          <div className="flex flex-col shrink-0">
            <h2 className={cn("text-5xl md:text-8xl text-black leading-none tracking-tighter", utoBlack.className)}>
              Fun Facts
            </h2>
            <p className={cn("text-2xl md:text-3xl text-[#f20028] lowercase italic mt-1", runWild.className)}>
              just for fun
            </p>
            {/* COMPACT TIMER LINE */}
            <div className="mt-6 w-32 h-[2px] bg-black/10 relative overflow-hidden">
              <div 
                key={currentFactIndex}
                className="absolute inset-0 bg-[#f20028] origin-left animate-timer-progress"
              />
            </div>
          </div>

          {/* CONTENT AREA: Reduced padding and smaller text for better density */}
          <div className="flex-1 w-full bg-white/50 backdrop-blur-xl backdrop-saturate-150 rounded-[40px] p-8 md:p-12 shadow-sm border border-white/40">
            <div className="flex flex-col gap-6">
              <div className="w-12 h-12 flex items-center justify-center bg-black rounded-full text-[#ffb300]">
                {funFacts[currentFactIndex].icon}
              </div>
              
              <p className={cn("text-2xl md:text-4xl text-black leading-tight tracking-tight", utoBold.className)}>
                 {funFacts[currentFactIndex].text}
              </p>

              {/* INTEGRATED CONTROLS: Placed inside the content area to save vertical space */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex gap-2">
                  <button 
                    onClick={() => setCurrentFactIndex((prev) => (prev - 1 + funFacts.length) % funFacts.length)}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <span className={cn("text-sm text-black/40 font-bold tracking-widest uppercase", utoBold.className)}>
                  {currentFactIndex + 1} / {funFacts.length}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
