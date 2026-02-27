'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/product/product-card';
import { MarqueeRail } from '@/components/marquee-rail';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { TheLogicCarousel } from './the-logic-carousel';
import { WelcomePopup } from '@/components/welcome-popup';
import { RippedDivider } from '@/components/wave-divider';
import { HomeAnimations } from '@/components/animations/home-animations';
import { ProofSlider } from '@/components/reviews/proof-slider';
import { HowItWorksSection } from '@/components/sections/how-it-works';
import { ProblemSolutionSection } from '@/components/sections/problem-solution';
import { WhoItsForSection } from '@/components/sections/who-its-for';
import { useEffect, useState } from 'react';

const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

const PROOF = [
  { quote: "Finally a protein that doesn't make me feel like I swallowed a brick. Game changer.", name: "Sarah K.", location: "Dubai" },
  { quote: "I've tried everything. This is the first protein powder that doesn't bloat me. Period.", name: "Ahmed R.", location: "Abu Dhabi" },
  { quote: "The taste is incredible and my stomach actually thanks me. Will never go back.", name: "Maya L.", location: "Dubai" },
];

export default function HomePage() {
  const [isReturning, setIsReturning] = useState(false);

  useEffect(() => {
    const hasVisited = document.cookie.includes('gutsy_visited=true');
    setIsReturning(hasVisited);
    if (!hasVisited) {
      document.cookie = "gutsy_visited=true; max-age=31536000; path=/";
    }
  }, []);

  return (
    <div className={cn("bg-linen min-h-screen selection:bg-yellow/30", utoMedium.className)}>
      <WelcomePopup />

      {/* ═══ Hero Section ═══ */}
      <section
        className="relative w-full h-[90vh] md:h-screen overflow-hidden flex items-center bg-black"
        data-animate="hero-section"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="GUTSY"
            fill
            className="object-cover opacity-60 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6" data-animate="hero-image">
          <div className="max-w-4xl">
            <h1
              data-animate="hero-title"
              className={cn("text-white text-[56px] md:text-[110px] leading-[0.9] tracking-tighter mb-8", utoBlack.className)}
            >
              Most protein is clunky.
            </h1>
            <p
              data-animate="hero-body"
              className="text-white text-lg md:text-2xl max-w-xl mb-10 opacity-90 leading-tight"
            >
              Standard plant molecules are too large for your gut to handle all at once. They sit there and ferment. This is why you feel like a parade float. We pre‑break ours down so you actually feel light.
            </p>

            <div className="flex flex-col items-start gap-6" data-animate="hero-cta">
              <Link href="/products">
                <Button className={cn("h-16 md:h-20 px-12 rounded-full bg-red text-white text-xl font-bold hover:bg-white hover:text-black transition-all", utoBold.className)}>
                  Grab a bag (if you want)
                </Button>
              </Link>
              <p className={cn("text-white/60 text-sm md:text-base italic max-w-sm leading-snug", utoMedium.className)}>
                If it feels heavy or you hate the taste, we refund your first bag. No awkward phone calls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 1.2 Quick Benefits Strip ═══ */}
      <div className="bg-white py-8 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8 text-xs md:text-sm font-bold tracking-widest text-black/60 uppercase">
          <span>Feels light, not like a brick.</span>
          <span>Fewer, better ingredients. No gums.</span>
          <span>Built to support digestion and regularity.</span>
          <span>100% vegan, no added sugar, gluten free, dairy free.</span>
        </div>
      </div>

      {/* 1.3 How It Works (3 Steps) */}
      <HowItWorksSection />

      <MarqueeRail />

      {/* 1.5 Problem / Solution Strip */}
      <ProblemSolutionSection />

      {/* ═══ 3.1 The Lineup ═══ */}
      <section
        id="lineup"
        className="py-24 bg-white overflow-hidden"
        data-animate="ingredients-section"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-20">
            <h2
              data-animate="ingredients-heading"
              className={cn("text-5xl md:text-[100px] tracking-tighter leading-none", utoBlack.className)}
            >
              The lineup.
            </h2>
            <p className={cn("text-3xl md:text-5xl text-red", runWild.className)}>mostly just things that leave your gut alone</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div data-animate="ingredient-card">
              <ProductCard 
              title="Vanilla Calm"
              price="185 AED"
              description="For people who like their mornings productive and their stomachs quiet. Vanilla Calm is a gut‑friendly protein shake that tastes like an actual treat, not a punishment."
              badges={["Gut-friendly", "No added sugar", "Gluten free", "Dairy free", "100% vegan"]}
              />
            </div>
            <div data-animate="ingredient-card">
              <ProductCard 
              title="Cacao Boost"
              price="185 AED"
              description="For days when your brain and your gut both need a favor. Cacao Boost is a chocolatey, gut‑friendly protein shake that skips the jitters and the bloat."
              badges={["Gut-friendly", "No added sugar", "Gluten free", "Dairy free", "100% vegan"]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3.7 GUTSY vs Typical Protein ═══ */}
      <section className="py-24 bg-linen" data-animate="comparison-section">
        <div className="max-w-5xl mx-auto px-6">
          <h3
            data-animate="comparison-heading"
            className={cn("text-4xl md:text-6xl mb-12 tracking-tight text-center", utoBlack.className)}
          >
            GUTSY vs Typical Protein
          </h3>
          <div className="overflow-x-auto rounded-[40px] border border-black/5 bg-white">
            <table className="w-full text-left text-sm md:text-lg">
              <thead>
                <tr className="border-b border-black/5">
                  <th className="p-6 md:p-8 font-bold"></th>
                  <th className="p-6 md:p-8 font-black text-red">GUTSY Protein</th>
                  <th className="p-6 md:p-8 font-bold opacity-40">Typical Plant / Whey</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                <tr data-animate="comparison-row">
                  <td className="p-6 md:p-8 font-bold">Protein format</td>
                  <td className="p-6 md:p-8" data-animate="comparison-col">Hydrolyzed, pre‑broken down peptides</td>
                  <td className="p-6 md:p-8 opacity-60" data-animate="comparison-col">Standard long‑chain protein</td>
                </tr>
                <tr data-animate="comparison-row">
                  <td className="p-6 md:p-8 font-bold">Gut feel</td>
                  <td className="p-6 md:p-8" data-animate="comparison-col">Built to feel lighter and reduce bloat</td>
                  <td className="p-6 md:p-8 opacity-60" data-animate="comparison-col">Often “brick in the stomach”</td>
                </tr>
                <tr data-animate="comparison-row">
                  <td className="p-6 md:p-8 font-bold">Gums & fillers</td>
                  <td className="p-6 md:p-8" data-animate="comparison-col">No xanthan, no guar, no carrageenan</td>
                  <td className="p-6 md:p-8 opacity-60" data-animate="comparison-col">Often multiple gums and stabilizers</td>
                </tr>
                <tr data-animate="comparison-row">
                  <td className="p-6 md:p-8 font-bold">Sweetener</td>
                  <td className="p-6 md:p-8" data-animate="comparison-col">Monk fruit, no added sugar</td>
                  <td className="p-6 md:p-8 opacity-60" data-animate="comparison-col">Sugar, sugar alcohols, or heavy stevia</td>
                </tr>
                <tr data-animate="comparison-row">
                  <td className="p-6 md:p-8 font-bold">Ingredient count</td>
                  <td className="p-6 md:p-8" data-animate="comparison-col">Only 7 ingredients per flavor</td>
                  <td className="p-6 md:p-8 opacity-60" data-animate="comparison-col">Often 15–25+ ingredients</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 1.8 Who It’s For */}
      <WhoItsForSection />

      {/* ═══ Proof Section ═══ */}
      <section className="py-24 md:py-40 bg-yellow" data-animate="testimonials-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center md:text-left">
            <p
              data-animate="testimonials-heading"
              className={cn("text-sm uppercase tracking-[0.4em] text-black/40 font-black mb-4", utoBold.className)}
            >
              Human Proof
            </p>
            <h2 className={cn("text-5xl md:text-[100px] text-black leading-[0.85] tracking-tighter font-black", utoBlack.className)}>
              Real people. <br /> Real guts.
            </h2>
          </div>
          <div data-animate="testimonial-card">
            <ProofSlider testimonials={PROOF} nameClassName={utoBold.className} />
          </div>
        </div>
      </section>

      {/* ═══ The Logic Carousel ═══ */}
      <TheLogicCarousel />

      <RippedDivider from="linen" to="yellow" />

      {/* ═══ 10.2 Quiz Teaser ═══ */}
      <section className="bg-yellow py-24 mx-4 md:mx-8 rounded-[60px] overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={cn("text-4xl md:text-7xl mb-6 leading-[0.9]", utoBlack.className)}>
            Not sure where to start?
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-bold max-w-2xl mx-auto opacity-80">
            Answer a few questions about your day, your digestion, and how sweet you like things. We will match you with the GUTSY bag that makes the most sense for your gut (and your calendar).
          </p>
          <Link href="/quiz">
            <Button className={cn("h-20 px-16 rounded-full bg-black text-white text-xl font-bold hover:bg-red transition-colors", utoBold.className)}>
              Take the quiz
            </Button>
          </Link>
          <p className="mt-6 text-sm uppercase tracking-widest font-bold opacity-40">
            Takes less than a minute. No star signs. No personality type.
          </p>
        </div>
      </section>

      {/* ═══ 1.7 Refund Guarantee Block ═══ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-8 py-2 rounded-full border-2 border-red text-red font-black uppercase tracking-widest mb-8">
            Risk-Free
          </div>
          <h2 className={cn("text-4xl md:text-7xl mb-8 leading-tight", utoBlack.className)}>
            If it feels heavy, we give your money back.
          </h2>
          <p className="text-xl md:text-2xl font-bold opacity-70 mb-12">
            If GUTSY does not leave you feeling light, or if the taste is just not your thing, tell us. We will refund your first bag. No awkward phone calls. No guilt‑trip scripts. Just protein that has to earn its place in your cupboard.
          </p>
        </div>
      </section>

      <HomeAnimations />
    </div>
  );
}