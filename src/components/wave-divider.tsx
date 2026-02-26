'use client';

import { cn } from '@/lib/utils';

export function RippedDivider({ from, to }: { from: string; to: string }) {
  return (
    <div 
      className="relative w-full h-8 md:h-12 overflow-hidden" 
      style={{ backgroundColor: from }}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute bottom-[-1px] w-full h-full"
        aria-hidden="true"
      >
        <path
          /* The "Enzyme Snip" Path: 
             A jagged, slightly irregular "torn paper" look. 
             It feels more aggressive and "unpolished" in a premium way.
          */
          d="M0,40 L120,60 L240,35 L360,70 L480,20 L600,55 L720,40 L840,80 L960,30 L1080,65 L1200,45 L1320,75 L1440,30 L1440,100 L0,100 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}