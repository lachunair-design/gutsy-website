export function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div 
      className="relative w-full h-12 md:h-20 overflow-hidden" 
      style={{ backgroundColor: from }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute bottom-[-1px] w-full h-full" // -1px prevents tiny gaps between sections
        aria-hidden="true"
      >
        <path
          /* Updated Path: 
             A more sophisticated, asymmetrical 'liquid' curve. 
             Moves away from the generic 'S' wave for a custom premium feel.
          */
          d="M0,60 C320,130 540,10 880,80 C1120,130 1340,40 1440,20 L1440,120 L0,120 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
