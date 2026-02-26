'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

const WORDS = ['FEEL', 'LIGHT', 'GUTSY'] as const;
const SESSION_KEY = 'gutsy-words-loader-seen';

export function WordsLoader() {
  const [show, setShow] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof sessionStorage === 'undefined' || sessionStorage.getItem(SESSION_KEY)) return;
    
    // Check for reduced motion for accessibility
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    sessionStorage.setItem(SESSION_KEY, '1');
    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;

    const tl = gsap.timeline({
      defaults: { ease: "expo.out" }
    });

    // Cycle through words with a sharper, more editorial rhythm
    WORDS.forEach((_, i) => {
      const el = wordRefs.current[i];
      if (!el) return;

      tl.fromTo(
        el,
        { y: 100, opacity: 0, scale: 0.9, filter: 'blur(10px)' },
        { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.6 },
        i === 0 ? 0 : "-=0.4"
      );

      if (i === WORDS.length - 1) {
        // Final word reveal
        tl.fromTo(
          subRef.current,
          { opacity: 0, y: 10 },
          { opacity: 0.4, y: 0, duration: 0.4 },
          "-=0.2"
        );

        // A "snap" exit: Wipe the overlay with a slight delay
        tl.to(overlayRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut",
          delay: 0.5
        });

        tl.add(() => setShow(false));
      } else {
        // Quick exit for non-final words
        tl.to(el, {
          y: -100,
          opacity: 0,
          scale: 1.1,
          filter: 'blur(10px)',
          duration: 0.4,
          delay: 0.2
        });
      }
    });

    return () => { tl.kill(); };
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative flex items-center justify-center h-32 md:h-48">
        {WORDS.map((word, i) => (
          <span
            key={word}
            ref={(el) => { wordRefs.current[i] = el; }}
            className={cn(
              "absolute text-linen text-7xl md:text-[160px] font-black uppercase tracking-tighter leading-none opacity-0",
              word === 'GUTSY' ? 'text-red' : 'text-linen'
            )}
            style={{ fontFamily: 'var(--font-uto-black)', whiteSpace: 'nowrap' }}
          >
            {word}
          </span>
        ))}
      </div>

      <span
        ref={subRef}
        className="mt-8 text-linen/40 text-[10px] uppercase tracking-[0.5em] font-black opacity-0"
      >
        Built by us
      </span>
    </div>
  );
}