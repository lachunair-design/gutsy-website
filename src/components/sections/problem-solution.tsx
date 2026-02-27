import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

export function ProblemSolutionSection() {
  return (
    <section className="py-24 bg-black text-linen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-black border border-linen/10 rounded-[40px] p-8 md:p-10">
            <h3 className={cn("text-xs uppercase tracking-[0.3em] text-linen/50 mb-4 font-black", utoMedium.className)}>
              The Problem
            </h3>
            <p className={cn("text-2xl md:text-3xl leading-relaxed", utoBlack.className)}>
              Most protein shakes hit your stomach like wet concrete. Too many ingredients, clunky molecules, mystery gums, and a side of “why am I so bloated.”
            </p>
          </div>
          <div className="bg-linen text-black rounded-[40px] p-8 md:p-10 border border-black/10">
            <h3 className={cn("text-xs uppercase tracking-[0.3em] text-black/40 mb-4 font-black", utoMedium.className)}>
              Our Fix
            </h3>
            <p className={cn("text-2xl md:text-3xl leading-relaxed", utoBlack.className)}>
              GUTSY is gut‑friendly, pre‑broken down plant protein with Actazin® kiwi extract and no gums. Fewer, smarter ingredients built to feel light, dissolve easily, and leave your gut alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

