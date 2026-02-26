'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating?: number;
}

interface ReviewSliderProps {
  testimonials: Testimonial[];
  /** Font class to apply on author name */
  nameClassName?: string;
}

export function ReviewSlider({ testimonials, nameClassName }: ReviewSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track active card via IntersectionObserver
  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
            const idx = cards.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIndex(idx);
          }
        }
      },
      { root: trackRef.current, threshold: 0.55 }
    );

    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const scrollToCard = useCallback((idx: number) => {
    const card = cardRefs.current[idx];
    if (!card || !trackRef.current) return;
    trackRef.current.scrollTo({
      left: card.offsetLeft - 24, // 24px = left padding
      behavior: 'smooth',
    });
  }, []);

  const prev = () => scrollToCard(Math.max(0, activeIndex - 1));
  const next = () => scrollToCard(Math.min(testimonials.length - 1, activeIndex + 1));

  return (
    <div className="relative">
      {/* Scroll track */}
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-scroll scrollbar-hide px-6 md:px-8 pb-2"
        style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {/* Leading spacer so first card doesn't hug the left edge */}
        <div className="shrink-0 w-0 md:w-8" aria-hidden="true" />

        {testimonials.map((t, i) => (
          <div
            key={i}
            ref={(el) => { cardRefs.current[i] = el; }}
            style={{ scrollSnapAlign: 'center', minWidth: 'min(85vw, 420px)' }}
            className={cn(
              'shrink-0 bg-white/80 backdrop-blur-xl backdrop-saturate-150',
              'border border-white/40 rounded-3xl p-8 shadow-lg',
              'transition-all duration-300',
              activeIndex === i ? 'scale-100 shadow-2xl' : 'scale-[0.96] opacity-80'
            )}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5" aria-label={`${t.rating ?? 5} out of 5 stars`}>
              {Array.from({ length: t.rating ?? 5 }).map((_, j) => (
                <svg key={j} className="w-5 h-5 text-[#ffb300]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg text-black leading-relaxed mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div>
              <p className={cn('text-sm uppercase tracking-wide text-black', nameClassName)}>
                {t.name}
              </p>
              <p className="text-xs text-black/50 mt-0.5">{t.location}</p>
            </div>
          </div>
        ))}

        {/* Trailing spacer */}
        <div className="shrink-0 w-0 md:w-8" aria-hidden="true" />
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6 mt-8">
        {/* Prev */}
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          aria-label="Previous review"
          className="w-11 h-11 rounded-full border-2 border-black/20 flex items-center justify-center transition-all hover:border-black/60 hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2" role="tablist" aria-label="Review navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => scrollToCard(i)}
              className={cn(
                'transition-all duration-300 rounded-full',
                i === activeIndex
                  ? 'w-6 h-2.5 bg-black'
                  : 'w-2.5 h-2.5 bg-black/25 hover:bg-black/50'
              )}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          disabled={activeIndex === testimonials.length - 1}
          aria-label="Next review"
          className="w-11 h-11 rounded-full border-2 border-black/20 flex items-center justify-center transition-all hover:border-black/60 hover:bg-black hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
