import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-linen relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className={cn("text-4xl md:text-6xl tracking-tighter leading-tight", utoBlack.className)}>
            How it works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="relative bg-white rounded-[32px] p-8 border border-black/5 shadow-sm">
            <div className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4 font-black">Step 1</div>
            <h3 className={cn("text-2xl md:text-3xl mb-4", utoBlack.className)}>
              Standard protein = tangled chains.
            </h3>
            <p className={cn("text-sm md:text-base text-black/70 leading-relaxed", utoMedium.className)}>
              Most powders land in your stomach as long, clunky molecules your gut has to wrestle with for hours.
            </p>
          </div>

          <div className="relative bg-white rounded-[32px] p-8 border border-black/5 shadow-sm md:-mt-6 md:translate-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4 font-black">Step 2</div>
            <h3 className={cn("text-2xl md:text-3xl mb-4", utoBlack.className)}>
              We pre‑break the chains.
            </h3>
            <p className={cn("text-sm md:text-base text-black/70 leading-relaxed", utoMedium.className)}>
              We use enzymes to hydrolyze the protein into smaller peptides before it ever reaches your shaker.
            </p>
          </div>

          <div className="relative bg-white rounded-[32px] p-8 border border-black/5 shadow-sm md:mt-6">
            <div className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4 font-black">Step 3</div>
            <h3 className={cn("text-2xl md:text-3xl mb-4", utoBlack.className)}>
              Your gut does less work.
            </h3>
            <p className={cn("text-sm md:text-base text-black/70 leading-relaxed", utoMedium.className)}>
              Smaller pieces plus Actazin® kiwi extract and no gums means a shake that dissolves, feels lighter, and is easier to live with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

