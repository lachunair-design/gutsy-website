'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  ArrowLeft, 
  ArrowRight, 
  Brain, 
  FlaskConical, 
  Zap, 
  Droplets, 
  EyeOff, 
  ShieldCheck, 
  Clock 
} from 'lucide-react';

export function TheLogicCarousel({ utoBlack, utoBold, runWild }: { utoBlack: any, utoBold: any, runWild: any }) {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const funFacts = [
    {
      icon: <Brain className="w-6 h-6" />,
      text: 'Big protein molecules = more work for your gut.',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: 'Hydrolyzed protein means smaller pieces, less wrestling.',
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      text: 'Actazin® from kiwi helps your gut keep things moving.',
    },
    {
      icon: <EyeOff className="w-6 h-6" />,
      text: 'No gums, no dairy, no soy – fewer usual suspects.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      text: '23g of protein, about 133–137 calories per serving.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      text: 'Under 1g of sugar. Monk fruit sweetened.',
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      text: 'Made in a GMP‑certified facility in Latvia and third‑party tested.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 6500); 
    return () => clearInterval(timer);
  }, [funFacts.length]);

  return (
    // Updated background to have the "Yellow Glow" effect
    <section className="py-24 md:py-40 bg-gradient-to-b from-linen to-yellow overflow-hidden relative">
      {/* Decorative Glow Orb behind the title */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-yellow/30 blur-[120px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 font-uto relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          
          {/* TITLE AREA */}
          <div className="flex flex-col shrink-0 lg:sticky lg:top-32 group">
            <div className="relative inline-block">
                <h2 className={cn("text-7xl md:text-[120px] text-black leading-brand-none tracking-tighter uppercase font-black", utoBlack.className)}>
                The <br/> Truths
                </h2>
                {/* SVG Underline adjusted to Black for the EDM aesthetic */}
                <svg 
                    className="absolute -bottom-4 left-0 w-full h-8 text-black overflow-visible"
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
            
            {/* Swapped text-red to italic/bold black or subtle red if you want a pop */}
            <p className={cn("text-3xl md:text-6xl text-black lowercase mt-10 -rotate-2 font-runwild", runWild.className)}>
              just for us
            </p>
            
            {/* Progress Bar adjusted to Black on Yellow background */}
            <div className="mt-12 w-32 h-[4px] bg-black/10 relative overflow-hidden rounded-full">
              <div 
                key={currentFactIndex}
                className="absolute inset-0 bg-black origin-left animate-timer-progress"
                style={{ animationDuration: '6500ms' }}
              />
            </div>
          </div>

          {/* CONTENT CARD (Updated to rounded-brand-xl and shadow-2xl) */}
          <div className="flex-1 w-full bg-white border-4 border-black/5 rounded-brand-xl p-10 md:p-20 shadow-2xl relative group/card">
            
            <div className="flex flex-col gap-12 min-h-[320px] justify-between">
              <div className="space-y-10">
                {/* Icon box changed to Black/Yellow combo */}
                <div className="w-16 h-16 flex items-center justify-center bg-black rounded-2xl text-yellow rotate-3 shadow-xl transition-transform duration-500 group-hover/card:-rotate-3">
                  {funFacts[currentFactIndex].icon}
                </div>
                
                <p className={cn(
                  "text-2xl md:text-[44px] text-black leading-brand-tight tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 font-bold", 
                  utoBold.className
                )}>
                   {funFacts[currentFactIndex].text}
                </p>
              </div>

              <div className="flex items-center justify-between pt-10 border-t-2 border-black/5">
                <div className="flex gap-4">
                  <button 
                    onClick={() => setCurrentFactIndex((prev) => (prev - 1 + funFacts.length) % funFacts.length)}
                    className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black/10 hover:bg-black hover:text-yellow transition-all active:scale-90"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)}
                    className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black/10 hover:bg-black hover:text-yellow transition-all active:scale-90"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                
                <span className="text-[12px] text-black/40 font-black tracking-[0.4em] uppercase">
                  {currentFactIndex + 1} / {funFacts.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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