import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TooltipProps {
  /** Content shown inside the tooltip bubble */
  content: ReactNode;
  /** The trigger element — tooltip wraps around this */
  children: ReactNode;
  /** Which side the bubble appears on (default: top) */
  position?: 'top' | 'bottom';
  className?: string;
}

/**
 * Pure-CSS tooltip — zero JavaScript, works in Server Components.
 * Uses Tailwind's named-group variant: `group/tooltip` + `group-hover/tooltip:`.
 */
export function Tooltip({ content, children, position = 'top', className }: TooltipProps) {
  const isTop = position === 'top';

  return (
    <span className={cn('group/tooltip relative inline-flex items-center', className)}>
      {children}

      {/* Bubble */}
      <span
        role="tooltip"
        className={cn(
          // Layout
          'pointer-events-none absolute left-1/2 -translate-x-1/2 z-50 w-max max-w-[200px]',
          // Position
          isTop ? 'bottom-full mb-2' : 'top-full mt-2',
          // Appearance
          'rounded-xl bg-black/90 px-3 py-2 text-xs leading-snug text-white shadow-xl backdrop-blur-sm',
          // Animation: invisible → visible on hover
          'opacity-0 scale-95 transition-all duration-200 ease-out',
          'group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100',
          // Focus-within so keyboard users can access
          'group-focus-within/tooltip:opacity-100 group-focus-within/tooltip:scale-100'
        )}
      >
        {content}

        {/* Arrow */}
        <span
          aria-hidden="true"
          className={cn(
            'absolute left-1/2 -translate-x-1/2 h-0 w-0 border-x-4 border-x-transparent',
            isTop
              ? 'top-full border-t-4 border-t-black/90'
              : 'bottom-full border-b-4 border-b-black/90'
          )}
        />
      </span>
    </span>
  );
}
