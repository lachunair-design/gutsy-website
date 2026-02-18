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
    { icon: <Brain className="w-6 h-6" />, text: "Your gut has more neurons than your spinal cord. That's why it's called your second brain. Listen to it." },
    { icon: <FlaskConical className="w-6 h-6" />, text: "Most protein powders use the same base ingredients. The difference? How broken down the molecules are before you drink." },
    { icon: <Apple className="w-6 h-6" />, text: "Kiwifruit contains actinidin, an enzyme that breaks down protein naturally. That's why we put it in Gutsy." },
    { icon: <Droplets className="w-6 h-6" />, text: "Your stomach produces about 2 liters of hydrochloric acid daily just to digest food. We save it some work." },
    { icon: <Sword className="w-6 h-6" />, text: "Pea protein was used by Roman gladiators for strength. Rice protein was a staple for ancient warriors. We combined both." },
    { icon: <ShieldCheck className="w-6 h-6" />, text: "Gut-friendly became marketing jargon in 2019. Before that, brands just made protein that worked without the label." },
    { icon: <Clock className="w-6 h-6" />, text: "The average person tolerates digestive discomfort from protein for 6-12 months. You don't have to." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [funFacts.length]);

  return (
    <section className="py-24 md:py-32 bg-[#F9F8F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          
          {/* TITLE AREA WITH ANIMATED SCRIBBLE */}
          <div className="flex flex-col shrink-0 lg:sticky lg:top-32 group">
            <div className="relative inline-block">
                <h2 className={cn("text-7xl md:text-[110px] text-black leading-[0.8] tracking-tighter", utoBlack.className)}>
                Fun <br/> Facts
                </h2>
                {/* Graza-style Scribble Underline */}
                <svg 
                    className="absolute -bottom-4 left-0 w-full h-8 text-[#f20028] overflow-visible"
                    viewBox="0 0 300 20" 
                    fill="none" 
                >
                    <path 
                        d="M5 15C50 5 150 25 295 10" 
                        stroke="currentColor" 
                        strokeWidth="4" 
                        strokeLinecap="round"
                        className="animate-[draw_1.5s_ease-in-out_infinite_alternate]"
                        style={{
                            strokeDasharray: 300,
                            strokeDashoffset: 300,
                        }}
                    />
                </svg>
            </div>
            
            <p className={cn("text-3xl md:text-5xl text-[#f20028] lowercase mt-8 -rotate-2", runWild.className)}>
              just for fun
            </p>
            
            <div className="mt-10 w-24 h-[3px] bg-black/5 relative overflow-hidden rounded-full">
              <div 
                key={currentFactIndex}
                className="absolute inset-0 bg-[#f20028] origin-left animate-timer-progress"
                style={{ animationDuration: '5500ms' }}
              />
            </div>
          </div>

          {/* CONTENT CARD (RHODE AESTHETIC) */}
          <div className="flex-1 w-full bg-white border border-black/5 rounded-[50px] md:rounded-[80px] p-10 md:p-20 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)] relative group/card">
            
            {/* Background Texture */}
            <div className="absolute top-10 right-10 opacity-5 hidden md:block group-hover/card:rotate-90 transition-transform duration-1000">
               <svg width="100" height="100" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="black" strokeWidth="0.5" strokeDasharray="6 6" />
               </svg>
            </div>

            <div className="flex flex-col gap-10 min-h-[300px] justify-between">
              <div className="space-y-8">
                <div className="w-16 h-16 flex items-center justify-center bg-[#f20028] rounded-3xl text-white rotate-3 shadow-lg shadow-[#f20028]/20 group-hover/card:-rotate-3 transition-transform">
                  {funFacts[currentFactIndex].icon}
                </div>
                
                <p className={cn(
                  "text-3xl md:text-[44px] text-black leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-500", 
                  utoBold.className
                )}>
                   {funFacts[currentFactIndex].text}
                </p>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-black/5">
                <div className="flex gap-3">
                  <button 
                    onClick={() => setCurrentFactIndex((prev) => (prev - 1 + funFacts.length) % funFacts.length)}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-all active:scale-90"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)}
                    className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-all active:scale-90"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                
                <span className={cn("text-xs text-black/30 font-black tracking-[0.3em] uppercase", utoBold.className)}>
                  {currentFactIndex + 1} / {funFacts.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Required CSS for the draw animation */}
      <style jsx>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
