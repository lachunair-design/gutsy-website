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
    { 
      icon: <Brain className="w-6 h-6" />, 
      text: "Your gut has its own nervous system—the second brain. If it feels like a parade float, it's trying to tell you something. Listen to it." 
    },
    { 
      icon: <FlaskConical className="w-6 h-6" />, 
      text: "Most 'clean' proteins are still just big, heavy molecules. We pre-digest ours with enzymes so your stomach doesn't have to do the heavy lifting." 
    },
    { 
      icon: <Apple className="w-6 h-6" />, 
      text: "Kiwifruit contains actinidin, a natural enzyme that behaves with real decorum—it breaks down protein so it actually absorbs." 
    },
    { 
      icon: <ShieldCheck className="w-6 h-6" />, 
      text: "If you can't pronounce half the ingredients on the label, your gut probably can't process them either. We kept only what we actually need." 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      text: "The average person tolerates digestive discomfort from protein for months before switching. Lakshmi did it for two years. You don't have to." 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [funFacts.length]);

  return (
    <section className="py-24 md:py-32 bg-linen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          
          {/* TITLE AREA WITH BRANDED RED ACCENT */}
          <div className="flex flex-col shrink-0 lg:sticky lg:top-32 group">
            <div className="relative inline-block">
                <h2 className={cn("text-7xl md:text-[110px] text-black leading-[0.8] tracking-tighter uppercase", utoBlack.className)}>
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
            
            <p className={cn("text-3xl md:text-5xl text-red lowercase mt-8 -rotate-2", runWild.className)}>
              just for us
            </p>
            
            <div className="mt-10 w-24 h-[3px] bg-black/5 relative overflow-hidden rounded-full">
              <div 
                key={currentFactIndex}
                className="absolute inset-0 bg-red origin-left animate-timer-progress"
                style={{ animationDuration: '5500ms' }}
              />
            </div>
          </div>

          {/* CONTENT CARD */}
          <div className="flex-1 w-full bg-white border border-black/5 rounded-[50px] md:rounded-[80px] p-10 md:p-20 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.05)] relative group/card">
            
            <div className="flex flex-col gap-10 min-h-[300px] justify-between">
              <div className="space-y-8">
                <div className="w-16 h-16 flex items-center justify-center bg-red rounded-3xl text-white rotate-3 shadow-lg shadow-red/20 group-hover/card:-rotate-3 transition-transform">
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