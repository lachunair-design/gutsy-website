import { cn } from '@/lib/utils';

type MoleculeVariant = 'short' | 'long' | 'broken';

interface MoleculeIllustrationProps {
  variant?: MoleculeVariant;
  className?: string;
}

export function MoleculeIllustration({ variant = 'short', className }: MoleculeIllustrationProps) {
  const nodes =
    variant === 'short'
      ? [10, 40, 70, 100]
      : variant === 'long'
      ? [6, 28, 50, 72, 94, 116]
      : [10, 40, 70, 100];

  return (
    <svg
      viewBox="0 0 130 40"
      className={cn('text-black/10', className)}
      aria-hidden="true"
    >
      {/* Bonds */}
      {nodes.slice(0, -1).map((x, idx) => {
        const nextX = nodes[idx + 1];
        const isBroken = variant === 'broken' && idx === 1;
        if (isBroken) {
          return (
            <path
              key={x}
              d={`M${x + 4} 20 C ${(x + nextX) / 2} 8, ${(x + nextX) / 2} 32, ${nextX - 4} 20`}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 4"
              fill="none"
            />
          );
        }
        return (
          <path
            key={x}
            d={`M${x + 4} 20 C ${(x + nextX) / 2} 8, ${(x + nextX) / 2} 32, ${nextX - 4} 20`}
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        );
      })}
      {/* Nodes */}
      {nodes.map((x, idx) => (
        <circle
          key={x}
          cx={x}
          cy={idx % 2 === 0 ? 16 : 24}
          r={idx === 0 || idx === nodes.length - 1 ? 4 : 3}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}

