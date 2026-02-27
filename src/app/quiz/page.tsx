'use client';

import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { GutQuiz } from '@/components/quiz/gut-quiz';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

export default function QuizPage() {
  return (
    <div className="bg-linen min-h-screen pt-32 pb-24">
      <section className="max-w-5xl mx-auto px-6">
        <div className="mb-10 md:mb-14">
          <p className={cn("text-[10px] uppercase tracking-[0.4em] text-black/40 font-black mb-3", utoMedium.className)}>
            Find your gut-friendly shake
          </p>
          <h1 className={cn("text-4xl md:text-6xl leading-tight mb-4", utoBlack.className)}>
            Let’s find your gut’s favorite shake.
          </h1>
          <p className={cn("text-lg md:text-xl text-black/75 leading-relaxed max-w-2xl", utoMedium.className)}>
            6 quick questions about your routine, your gut, and your flavor mood. No wrong answers,
            just better protein logic.
          </p>
        </div>

        <GutQuiz />
      </section>
    </div>
  );
}

