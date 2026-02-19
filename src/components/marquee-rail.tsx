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
  'No Gluten',
  'No Heavy Metals',
  'Vegan',
  'Allergen-Free',
  'No Unnecessary Fillers',
  'Dairy-Free',
  'Third-Party Tested',
];

export function MarqueeRail() {
  const railRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollingText = gsap.utils.toArray('.rail-item') as HTMLElement[];
      if (!scrollingText.length) return;

      const tl = horizontalLoop(scrollingText, {
        repeat: -1,
        paddingRight: 0, 
        speed: 1.2, // Slightly slower for "softer" feel
      });

      Observer.create({
        onChangeY(self) {
          let factor = 2.0;
          if (self.deltaY < 0) factor *= -1;
          
          gsap.timeline({ defaults: { ease: "none" } })
            .to(tl, { timeScale: factor * 2, duration: 0.3, overwrite: true })
            .to(tl, { timeScale: factor / 2, duration: 1.2 }, "+=0.3");
        }
      });
    }, railRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={railRef} 
      className="py-10 bg-[#F9F8F6] border-y border-black/5 overflow-hidden"
    >
      <div className="rail flex whitespace-nowrap">
        {/* Render multiple sets to ensure the loop is seamless */}
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="rail-item flex items-center">
            {MARQUEE_ITEMS.map((item, i) => (
              <div key={i} className="flex items-center px-6">
                {/* Graza-style Hand-drawn Bullet */}
                <svg width="12" height="12" viewBox="0 0 100 100" className="mr-6 text-[#f20028]">
                  <circle cx="50" cy="50" r="40" fill="currentColor" opacity="0.8" />
                </svg>
                
                <span className={cn(
                  "text-black text-sm md:text-base uppercase tracking-[0.3em] font-black",
                  utoBold.className
                )}>
                  {item}
                </span>

                {/* Rhode-style Asymmetrical Divider (only between text) */}
                <div className="ml-12 h-8 w-[1px] bg-black/10 rotate-[20deg]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

// GSAP HELPER (Keep your existing function, just ensure items passed are the .rail-item divs)
function horizontalLoop(items: HTMLElement[], config: any) {
  let tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" },
    onReverseComplete: () => {
      if (tl.duration()) {
        tl.totalTime(tl.rawTime() + tl.duration() * 100);
      }
    }
  });

  let length = items.length,
    startX = items[0].offsetLeft,
    times: number[] = [],
    widths: number[] = [],
    xPercents: number[] = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap || 1),
    totalWidth: number,
    curX: number,
    distanceToStart: number,
    distanceToLoop: number,
    item: HTMLElement,
    i: number;

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px") as string) / w * 100 + (gsap.getProperty(el, "xPercent") as number));
      return xPercents[i];
    }
  });

  gsap.set(items, { x: 0 });
  totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], "scaleX") as number) + (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);
    tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
      .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }

  return tl;
}
