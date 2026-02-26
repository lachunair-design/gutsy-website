'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/dist/Observer';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });

if (typeof window !== "undefined") {
  gsap.registerPlugin(Observer);
}

const MARQUEE_ITEMS = [
  'Pre-broken down for humans',
  '600mg Actazin clinical dose',
  'Zero Gums',
  'Hydrolyzed Peptides',
  'Seven Ingredients only',
  'No Wellness Theatre',
  'Third-party tested results',
  'Dairy-free logic',
];

export function MarqueeRail() {
  const railRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollingText = gsap.utils.toArray('.rail-item') as HTMLElement[];
      if (!scrollingText.length) return;

      const tl = horizontalLoop(scrollingText, {
        repeat: -1,
        speed: 1.5, // Slightly faster for a more energetic feel
      });

      Observer.create({
        target: window,
        type: "wheel,touch,scroll",
        onChangeY(self) {
          let factor = 2.5;
          if (self.deltaY < 0) factor *= -1;
          
          gsap.timeline({ defaults: { ease: "none" } })
            .to(tl, { timeScale: factor * 2, duration: 0.2, overwrite: true })
            .to(tl, { timeScale: factor / 2.5, duration: 1.2 }, "+=0.3");
        }
      });
    }, railRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={railRef} 
      className="py-10 bg-black border-y border-white/10 overflow-hidden group/rail cursor-default"
    >
      <div className="rail flex whitespace-nowrap">
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="rail-item flex items-center">
            {MARQUEE_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center px-12 group/item">
                
                {/* Technical Diagnostic Indicator */}
                <div className="mr-8 flex items-center justify-center">
                    <div className="w-2 h-2 bg-yellow transition-all duration-300 group-hover/item:bg-red group-hover/item:scale-125" />
                </div>
                
                {/* Blunt Claim Text */}
                <span className={cn(
                  "text-white text-[10px] md:text-xs uppercase tracking-[0.5em] font-black transition-colors duration-300 group-hover/item:text-yellow",
                  utoBold.className
                )}>
                  {item}
                </span>

                {/* The "Enzyme Snip" Divider */}
                <div className="ml-16 h-8 w-[1px] bg-white/20 -rotate-[30deg] origin-center" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

// GSAP horizontalLoop remains the same for performance
function horizontalLoop(items: HTMLElement[], config: any) {
  let tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      if (tl.duration()) tl.totalTime(tl.rawTime() + tl.duration() * 100);
    }
  });

  let length = items.length,
    startX = items[0].offsetLeft,
    widths: number[] = [],
    xPercents: number[] = [],
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1),
    totalWidth: number;

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px") as string) / w * 100 + (gsap.getProperty(el, "xPercent") as number));
      return xPercents[i];
    }
  });

  gsap.set(items, { x: 0 });
  
  totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], "scaleX") as number) + (parseFloat(config.paddingRight) || 0);

  for (let i = 0; i < length; i++) {
    let item = items[i];
    let curX = xPercents[i] / 100 * widths[i];
    let distanceToStart = item.offsetLeft + curX - startX;
    let distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
    
    tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
      .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond);
  }

  return tl;
}