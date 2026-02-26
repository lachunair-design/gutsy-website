'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

/**
 * HomeAnimations — zero-DOM-output client component.
 * Attaches GSAP ScrollTrigger animations to elements in the
 * server-rendered homepage by targeting data-animate attributes.
 *
 * Mount this at the bottom of the HomePage JSX:
 *   <HomeAnimations />
 */
export function HomeAnimations() {
  const dummyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // ── HERO — entrance sequence (runs on mount, no scroll trigger) ──────
      const heroEyebrow = document.querySelector('[data-animate="hero-eyebrow"]') as HTMLElement | null;
      const heroTitle = document.querySelector('[data-animate="hero-title"]') as HTMLElement | null;
      const heroBody = document.querySelector('[data-animate="hero-body"]');
      const heroCtaGroup = document.querySelector('[data-animate="hero-cta"]');
      const heroScroll = document.querySelector('[data-animate="hero-scroll"]');
      const heroImage = document.querySelector('[data-animate="hero-image"]');

      const tl = gsap.timeline({ delay: 0.1 });

      if (heroImage) {
        tl.from(heroImage, { scale: 1.08, duration: 1.8, ease: 'power2.out' }, 0);
      }

      if (heroEyebrow) {
        tl.from(heroEyebrow, { x: -40, opacity: 0, duration: 0.65, ease: 'power3.out' }, 0.35);
      }

      if (heroTitle) {
        const splitTitle = new SplitType(heroTitle, { types: 'chars' });
        tl.from(
          splitTitle.chars,
          { y: 80, opacity: 0, stagger: 0.025, duration: 0.75, ease: 'power4.out' },
          0.6
        );
      }

      if (heroBody) {
        tl.from(heroBody, { y: 30, opacity: 0, duration: 0.65, ease: 'power3.out' }, 1.0);
      }

      if (heroCtaGroup) {
        tl.from(
          heroCtaGroup.children,
          { y: 20, opacity: 0, stagger: 0.12, duration: 0.55, ease: 'power3.out' },
          1.2
        );
      }

      if (heroScroll) {
        tl.from(heroScroll, { opacity: 0, duration: 0.5 }, 1.65);
      }

      // ── SCIENCE SECTION ───────────────────────────────────────────────────
      const scienceSection = document.querySelector('[data-animate="science-section"]');

      if (scienceSection) {
        const scienceSvg = scienceSection.querySelector('[data-animate="science-svg"]');
        const scienceProtein = scienceSection.querySelector('[data-animate="science-protein"]');
        const scienceArrow = scienceSection.querySelector('[data-animate="science-arrow"]');
        const sciencePeptides = scienceSection.querySelectorAll('[data-animate="science-peptide"]');
        const scienceLabel = scienceSection.querySelector('[data-animate="science-label"]');
        const scienceHeading = scienceSection.querySelector('[data-animate="science-heading"]') as HTMLElement | null;
        const scienceBody = scienceSection.querySelector('[data-animate="science-body"]');

        if (scienceHeading) {
          const splitScienceHeading = new SplitType(scienceHeading, { types: 'words' });
          gsap.from(splitScienceHeading.words, {
            y: 50,
            opacity: 0,
            stagger: 0.06,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: scienceSection,
              start: 'top 78%',
              toggleActions: 'play none none none',
            },
          });
        }

        if (scienceLabel) {
          gsap.from(scienceLabel, {
            x: -30,
            opacity: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: scienceSection,
              start: 'top 78%',
              toggleActions: 'play none none none',
            },
          });
        }

        if (scienceBody) {
          gsap.from(scienceBody, {
            y: 25,
            opacity: 0,
            duration: 0.65,
            delay: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: scienceSection,
              start: 'top 78%',
              toggleActions: 'play none none none',
            },
          });
        }

        // SVG diagram draw-on sequence
        const scienceTl = gsap.timeline({
          scrollTrigger: {
            trigger: scienceSection,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });

        if (scienceProtein) {
          scienceTl.from(scienceProtein, {
            scale: 0.4,
            opacity: 0,
            duration: 0.7,
            ease: 'back.out(1.7)',
            transformOrigin: 'center center',
          });
        }

        if (scienceArrow) {
          scienceTl.from(scienceArrow, { opacity: 0, x: -20, duration: 0.5, ease: 'power2.out' }, '-=0.3');
        }

        if (sciencePeptides.length) {
          scienceTl.from(
            sciencePeptides,
            { scale: 0, opacity: 0, stagger: 0.15, duration: 0.45, ease: 'back.out(2)' },
            '-=0.1'
          );
        }
      }

      // ── INGREDIENTS SECTION ───────────────────────────────────────────────
      const ingredientsSection = document.querySelector('[data-animate="ingredients-section"]');

      if (ingredientsSection) {
        const ingredientHeading = ingredientsSection.querySelector(
          '[data-animate="ingredients-heading"]'
        ) as HTMLElement | null;
        const ingredientCards = ingredientsSection.querySelectorAll('[data-animate="ingredient-card"]');

        if (ingredientHeading) {
          const splitIngHeading = new SplitType(ingredientHeading, { types: 'words' });
          gsap.from(splitIngHeading.words, {
            y: 50,
            opacity: 0,
            stagger: 0.06,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ingredientsSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }

        if (ingredientCards.length) {
          gsap.from(ingredientCards, {
            y: 55,
            opacity: 0,
            scale: 0.95,
            stagger: 0.1,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ingredientsSection,
              start: 'top 78%',
              toggleActions: 'play none none none',
            },
          });
        }
      }

      // ── TESTIMONIALS SECTION ──────────────────────────────────────────────
      const testimonialsSection = document.querySelector('[data-animate="testimonials-section"]');

      if (testimonialsSection) {
        const testimonialsHeading = testimonialsSection.querySelector(
          '[data-animate="testimonials-heading"]'
        ) as HTMLElement | null;
        const testimonialCards = testimonialsSection.querySelectorAll('[data-animate="testimonial-card"]');

        if (testimonialsHeading) {
          const splitTestiHeading = new SplitType(testimonialsHeading, { types: 'words' });
          gsap.from(splitTestiHeading.words, {
            y: 50,
            opacity: 0,
            stagger: 0.07,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: testimonialsSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }

        if (testimonialCards.length) {
          gsap.from(testimonialCards, {
            y: 60,
            opacity: 0,
            stagger: 0.15,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: testimonialsSection,
              start: 'top 78%',
              toggleActions: 'play none none none',
            },
          });
        }
      }

      // ── COMPARISON TABLE ──────────────────────────────────────────────────
      const comparisonSection = document.querySelector('[data-animate="comparison-section"]');

      if (comparisonSection) {
        const comparisonHeading = comparisonSection.querySelector(
          '[data-animate="comparison-heading"]'
        ) as HTMLElement | null;
        const comparisonRows = comparisonSection.querySelectorAll('[data-animate="comparison-row"]');

        if (comparisonHeading) {
          gsap.from(comparisonHeading, {
            y: 40,
            opacity: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: comparisonSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }

        if (comparisonRows.length) {
          comparisonRows.forEach((row, i) => {
            const cols = row.querySelectorAll('[data-animate="comparison-col"]');
            gsap.from(cols[0] ?? row, {
              x: -30,
              opacity: 0,
              duration: 0.6,
              delay: i * 0.12,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: comparisonSection,
                start: 'top 75%',
                toggleActions: 'play none none none',
              },
            });
            if (cols[1]) {
              gsap.from(cols[1], {
                x: 30,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.12,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: comparisonSection,
                  start: 'top 75%',
                  toggleActions: 'play none none none',
                },
              });
            }
          });
        }
      }

      // ── FOOTER CTA ────────────────────────────────────────────────────────
      const ctaSection = document.querySelector('[data-animate="cta-section"]');

      if (ctaSection) {
        const ctaEyebrow = ctaSection.querySelector('[data-animate="cta-eyebrow"]');
        const ctaHeading = ctaSection.querySelector('[data-animate="cta-heading"]') as HTMLElement | null;
        const ctaButton = ctaSection.querySelector('[data-animate="cta-button"]');
        const ctaBadges = ctaSection.querySelector('[data-animate="cta-badges"]');

        const ctaTl = gsap.timeline({
          scrollTrigger: {
            trigger: ctaSection,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        });

        if (ctaEyebrow) {
          ctaTl.from(ctaEyebrow, { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' });
        }

        if (ctaHeading) {
          const splitCtaHeading = new SplitType(ctaHeading, { types: 'chars' });
          ctaTl.from(
            splitCtaHeading.chars,
            { y: 60, opacity: 0, stagger: 0.018, duration: 0.7, ease: 'power4.out' },
            '-=0.2'
          );
        }

        if (ctaButton) {
          ctaTl.from(
            ctaButton,
            { scale: 0.85, opacity: 0, duration: 0.55, ease: 'back.out(1.7)' },
            '-=0.15'
          );
        }

        if (ctaBadges) {
          ctaTl.from(ctaBadges, { opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');
        }
      }
    },
    { scope: dummyRef, dependencies: [] }
  );

  // Renders nothing visible — just a zero-height anchor for the GSAP context scope
  return <div ref={dummyRef} aria-hidden="true" style={{ display: 'none' }} />;
}
