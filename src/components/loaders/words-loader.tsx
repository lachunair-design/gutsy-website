'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const WORDS = ['FEEL', 'LIGHT', 'GUTSY'] as const;
const SESSION_KEY = 'gutsy-words-loader-seen';

/**
 * Full-screen words entry animation shown on the very first page visit
 * (per browser session). Cycles through FEEL → LIGHT → GUTSY then wipes
 * up to reveal the page. z-[400] sits above the WelcomePopup (z-[300])
 * so the popup can render underneath while the loader is active.
 */
export function WordsLoader() {
  const [show, setShow] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof sessionStorage === 'undefined') return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    sessionStorage.setItem(SESSION_KEY, '1');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // skip instantly

    setShow(true);
  }, []);

  useEffect(() => {
    if (!show) return;

    const tl = gsap.timeline();

    // Stagger through each word: slide up in, hold, slide up out
    WORDS.forEach((_, i) => {
      const el = wordRefs.current[i];
      if (!el) return;

      tl.fromTo(
        el,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.42, ease: 'power3.out' }
      );

      if (i === WORDS.length - 1) {
        // Last word: fade in the subtext
        tl.fromTo(
          subRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
          '-=0.05'
        );
        // Then wipe the whole overlay upward
        tl.to(
          overlayRef.current,
          { yPercent: -100, duration: 0.75, delay: 0.4, ease: 'power4.inOut' }
        );
        tl.add(() => setShow(false));
      } else {
        // Non-last words: slide out upward after a short hold
        tl.to(el, { y: -70, opacity: 0, duration: 0.32, delay: 0.35, ease: 'power2.in' });
      }
    });

    return () => { tl.kill(); };
  }, [show]);

  if (!show) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      role="presentation"
      className="fixed inset-0 z-[400] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Word stages — all stacked on top of each other; GSAP controls visibility */}
      <div className="relative flex items-center justify-center" style={{ height: '1em' }}>
        {WORDS.map((word, i) => (
          <span
            key={word}
            ref={(el) => { wordRefs.current[i] = el; }}
            className="absolute text-white text-8xl md:text-[140px] font-black uppercase tracking-tighter leading-none opacity-0"
            style={{ fontFamily: 'var(--font-uto-black)', whiteSpace: 'nowrap' }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Subtext that appears under the final "GUTSY" word */}
      <span
        ref={subRef}
        className="mt-6 text-white/40 text-sm uppercase tracking-[0.35em] font-bold opacity-0"
      >
        by gutsy
      </span>
    </div>
  );
}
