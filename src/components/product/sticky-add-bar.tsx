import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });

interface StickyAddBarProps {
  title: string;
  priceLabel: string;
  disabled?: boolean;
  onClick: () => void;
}

export function StickyAddBar({ title, priceLabel, disabled, onClick }: StickyAddBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 md:pb-6 pointer-events-none">
      <div className="max-w-4xl mx-auto bg-black text-white rounded-3xl py-3 px-4 md:px-6 shadow-2xl pointer-events-auto flex items-center justify-between gap-4">
        <div className="flex flex-col overflow-hidden">
          <span className={cn("text-[10px] uppercase tracking-[0.3em] text-white/50", utoBold.className)}>
            Your stash
          </span>
          <p className="text-sm md:text-base font-semibold truncate">{title}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline text-sm font-semibold">{priceLabel}</span>
          <button
            disabled={disabled}
            onClick={onClick}
            className={cn(
              "h-10 md:h-11 px-4 md:px-6 rounded-full bg-white text-black text-[10px] md:text-xs uppercase tracking-[0.25em] font-black hover:bg-yellow transition-colors disabled:opacity-60",
              utoBold.className
            )}
          >
            Add to Stash
          </button>
        </div>
      </div>
    </div>
  );
}

