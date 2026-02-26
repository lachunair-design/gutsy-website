'use client';

import { usePageTransition } from './transition-context';

export function PageTransitionOverlay() {
  const { overlayRef } = usePageTransition();

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      role="presentation"
      className="hidden pointer-events-none select-none"
      style={{ visibility: 'hidden', transform: 'translateY(100%)' }}
    >
      {/* Branded GUTSY wordmark shown during the transition curtain */}
      <span
        className="text-white/20 text-[80px] md:text-[140px] uppercase tracking-tighter leading-none font-black"
        style={{ fontFamily: 'var(--font-uto-black)' }}
      >
        GUTSY
      </span>
    </div>
  );
}
