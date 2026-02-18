export function WaveDivider({ from, to }: { from: string; to: string }) {
  return (
    <div className="relative w-full h-16 md:h-24 overflow-hidden" style={{ backgroundColor: from }}>
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
        aria-hidden="true"
      >
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,100 L0,100 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
