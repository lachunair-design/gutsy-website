'use client';

import { createContext, useContext, useRef, useState, useCallback, RefObject } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';

interface TransitionContextType {
  isTransitioning: boolean;
  navigateTo: (href: string) => void;
  overlayRef: RefObject<HTMLDivElement>;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const navigateTo = useCallback(
    (href: string) => {
      if (isTransitioning) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (prefersReducedMotion) {
        router.push(href);
        return;
      }

      setIsTransitioning(true);

      // Phase 1: Curtain sweeps UP from bottom to cover viewport
      gsap.fromTo(
        overlayRef.current,
        { yPercent: 100, visibility: 'visible' },
        {
          yPercent: 0,
          duration: 0.65,
          ease: 'power4.inOut',
          onComplete: () => {
            // Phase 2: Navigate while screen is covered
            router.push(href);

            // Phase 3: Curtain sweeps UP and off the top, revealing new page
            gsap.to(overlayRef.current, {
              yPercent: -100,
              duration: 0.55,
              delay: 0.2,
              ease: 'power4.inOut',
              onComplete: () => {
                gsap.set(overlayRef.current, { visibility: 'hidden', yPercent: 100 });
                setIsTransitioning(false);
              },
            });
          },
        }
      );
    },
    [isTransitioning, router]
  );

  return (
    <TransitionContext.Provider value={{ isTransitioning, navigateTo, overlayRef }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error('usePageTransition must be used within TransitionProvider');
  return ctx;
}
