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
      text: "Your gut has its own nervous system—the 'second brain.' If it feels like a parade float after a shake, it's trying to tell you something. Usually: 'I can't digest this.'" 
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      text: "Standard protein molecules are just too clunky. We use enzymes to pre-break ours down into tiny pieces so your stomach doesn't have to wrestle with them." 
    },
    { 
      icon: <EyeOff className="w-6 h-6" />, 
      text: "Gums and fillers are only there to hide a bad texture. We skipped them. Your gut will notice the difference immediately, even if the marketing world doesn't." 
    },
    { 
      icon: <ShieldCheck className="w-6 h-6" />, 
      text: "If you can't pronounce half the ingredients on the tub, your body probably doesn't know what to do with them either. We kept it to seven things. That's it." 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      text: "Most people just accept the bloat for months before they realize it's the powder. Lakshmi did it for two years. Honestly, you've suffered enough." 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 6500); // Slightly longer to let the casual tone sink in
    return () => clearInterval(timer);
  }, [funFacts.length]);

  return (
    <section className="py-24 md:py-32 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 font-uto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          
          {/* TITLE AREA */}
          <div className="flex flex-col shrink-0 lg:sticky lg:top-32 group">
            <div className="relative inline-block">
                <h2 className={cn("text-7xl md:text-[110px] text-black leading-[0.8] tracking-tighter uppercase font-black", utoBlack.className)}>
                The <br/> Truths
                </h2>
                <svg 
                    className="absolute -bottom-4 left-0 w-full h-8 text-red overflow-visible"
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
            
            <p className={cn("text-3xl md:text-5xl text-red lowercase mt-8 -rotate-2 font-runwild", runWild.className)}>
              just for us
            </p>
            
            <div className="mt-10 w-24 h-[3px] bg-black/5 relative overflow-hidden rounded-full">
              <div 
                key={currentFactIndex}
                className="absolute inset-0 bg-red origin-left animate-timer-progress"
                style={{ animationDuration: '6500ms' }}
              />
            </div>
          </div>

          {/* CONTENT CARD */}
          <div className="flex-1 w-full bg-white border border-black/5 rounded-[40px] md:rounded-[60px] p-10 md:p-16 shadow-sm relative group/card">
            
            <div className="flex flex-col gap-10 min-h-[280px] justify-between">
              <div className="space-y-8">
                <div className="w-14 h-14 flex items-center justify-center bg-red rounded-2xl text-linen rotate-3 shadow-lg shadow-red/10 group-hover/card:-rotate-3 transition-transform duration-500">
                  {funFacts[currentFactIndex].icon}
                </div>
                
                <p className={cn(
                  "text-2xl md:text-[38px] text-black leading-[1.15] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 font-bold", 
                  utoBold.className
                )}>
                   {funFacts[currentFactIndex].text}
                </p>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-black/5">
                <div className="flex gap-3">
                  <button 
                    onClick={() => setCurrentFactIndex((prev) => (prev - 1 + funFacts.length) % funFacts.length)}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-all active:scale-90"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setCurrentFactIndex((prev) => (prev + 1) % funFacts.length)}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 hover:bg-black hover:text-white transition-all active:scale-90"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                <span className="text-[10px] text-black/30 font-black tracking-[0.3em] uppercase">
                  Fact {currentFactIndex + 1} / {funFacts.length}
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