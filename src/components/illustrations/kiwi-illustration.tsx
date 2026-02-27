import { cn } from '@/lib/utils';

type KiwiSize = 'sm' | 'md' | 'lg';

interface KiwiIllustrationProps {
  size?: KiwiSize;
  className?: string;
}

const SIZE_MAP: Record<KiwiSize, number> = {
  sm: 56,
  md: 80,
  lg: 120,
};

export function KiwiIllustration({ size = 'md', className }: KiwiIllustrationProps) {
  const dim = SIZE_MAP[size];
  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 120 120"
      className={cn('text-black/50', className)}
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle
        cx="60"
        cy="60"
        r="52"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 4"
      />
      {/* Flesh ring */}
      <circle
        cx="60"
        cy="60"
        r="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 4"
        opacity="0.7"
      />
      {/* Core */}
      <circle
        cx="60"
        cy="60"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Seeds */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 26;
        const x = 60 + Math.cos(angle) * r;
        const y = 60 + Math.sin(angle) * r;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="1.6"
            fill="currentColor"
            opacity="0.8"
          />
        );
      })}
      {/* Slice highlight */}
      <path
        d="M20 44C32 24 52 16 72 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

