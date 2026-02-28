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
    <div className={cn("min-h-screen selection:bg-black selection:text-yellow", utoMedium.className)}>
      <WelcomePopup />

      {/* ═══ Hero Section (Updated to EDM Style) ═══ */}
      <section
        className="relative w-full h-[85vh] md:h-screen overflow-hidden flex items-end pb-20 justify-center text-center bg-black"
        data-animate="hero-section"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png" // Ensure this is your runner/lifestyle asset
            alt="GUTSY"
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Subtle overlay to help white text pop against sky/runner */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6" data-animate="hero-image">
          <div className="flex flex-col items-center">
            <p className={cn("text-black text-xs md:text-sm uppercase tracking-[0.4em] mb-4 font-black", utoBold.className)}>
               Sub-Headline Intro
            </p>
            <h1
              data-animate="hero-title"
              className={cn("text-white text-[60px] md:text-[140px] leading-[0.8] tracking-tighter uppercase mb-0", utoBlack.className)}
            >
              MAIN HEADLINE
            </h1>
            <p className={cn("text-white text-5xl md:text-9xl -mt-4 md:-mt-8 mb-10 lowercase", runWild.className)}>
              Sub-headline
            </p>

            <div className="flex flex-col items-center gap-6" data-animate="hero-cta">
              <Link href="/products">
                <Button className={cn("h-16 md:h-20 px-12 rounded-full bg-yellow text-black text-xl font-bold hover:bg-black hover:text-white transition-brand-out uppercase tracking-widest", utoBold.className)}>
                  Call to Action
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Main Content Gradient (The EDM Yellow Glow) ═══ */}
      <div className="bg-gradient-to-b from-linen-light via-yellow to-linen-light">
        
        {/* 1.2 Quick Benefits Strip (Blended) */}
        <div className="py-8 border-y border-black/5 bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8 text-xs md:text-sm font-bold tracking-widest text-black uppercase">
            <span>Feels light, not like a brick.</span>
            <span>Fewer, better ingredients. No gums.</span>
            <span>Built to support digestion and regularity.</span>
            <span>100% vegan, no added sugar, gluten free, dairy free.</span>
          </div>
        </div>

        {/* 1.3 How It Works (Preserved) */}
        <HowItWorksSection />

        <MarqueeRail />

        {/* 1.5 Problem / Solution Strip (Preserved) */}
        <ProblemSolutionSection />

        {/* ═══ 3.1 The Lineup (Updated background to blend) ═══ */}
        <section
          id="lineup"
          className="py-24 overflow-hidden"
          data-animate="ingredients-section"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-20">
              <h2
                data-animate="ingredients-heading"
                className={cn("text-5xl md:text-[100px] tracking-tighter leading-none uppercase", utoBlack.className)}
              >
                The lineup.
              </h2>
              <p className={cn("text-3xl md:text-5xl text-red", runWild.className)}>mostly just things that leave your gut alone</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div data-animate="ingredient-card" className="product-halo rounded-[60px] p-8 transition-transform hover:scale-[1.02] duration-700">
                <ProductCard 
                title="Vanilla Calm"
                price="185 AED"
                description="For people who like their mornings productive and their stomachs quiet. Vanilla Calm is a gut‑friendly protein shake that tastes like an actual treat, not a punishment."
                badges={["Gut-friendly", "No added sugar", "Gluten free", "Dairy free", "100% vegan"]}
                />
              </div>
              <div data-animate="ingredient-card" className="product-halo rounded-[60px] p-8 transition-transform hover:scale-[1.02] duration-700">
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

        {/* ═══ 3.7 GUTSY vs Typical Protein (Blended UI) ═══ */}
        <section className="py-24 px-4 md:px-0" data-animate="comparison-section">
          <div className="max-w-5xl mx-auto">
            <h3
              data-animate="comparison-heading"
              className={cn("text-4xl md:text-7xl mb-12 tracking-tight text-center uppercase", utoBlack.className)}
            >
              GUTSY vs Typical Protein
            </h3>
            <div className="overflow-x-auto rounded-[60px] border-4 border-black/5 bg-white shadow-2xl">
              <table className="w-full text-left text-sm md:text-lg">
                <thead>
                  <tr className="border-b-2 border-black/5">
                    <th className="p-6 md:p-10 font-bold"></th>
                    <th className="p-6 md:p-10 font-black text-red uppercase">GUTSY Protein</th>
                    <th className="p-6 md:p-10 font-bold opacity-40 uppercase">Typical Plant / Whey</th>
                  </tr>
                </thead>
                <tbody className="divide-y-2 divide-black/5">
                  <tr data-animate="comparison-row">
                    <td className="p-6 md:p-10 font-black uppercase text-xs tracking-widest">Protein format</td>
                    <td className="p-6 md:p-10 font-bold" data-animate="comparison-col">Hydrolyzed, pre‑broken down peptides</td>
                    <td className="p-6 md:p-10 opacity-60" data-animate="comparison-col">Standard long‑chain protein</td>
                  </tr>
                  {/* ... (Other rows remain logically identical) */}
                  <tr data-animate="comparison-row">
                    <td className="p-6 md:p-10 font-black uppercase text-xs tracking-widest">Gut feel</td>
                    <td className="p-6 md:p-10 font-bold" data-animate="comparison-col">Built to feel lighter and reduce bloat</td>
                    <td className="p-6 md:p-10 opacity-60" data-animate="comparison-col">Often “brick in the stomach”</td>
                  </tr>
                  <tr data-animate="comparison-row">
                    <td className="p-6 md:p-10 font-black uppercase text-xs tracking-widest">Gums & fillers</td>
                    <td className="p-6 md:p-10 font-bold" data-animate="comparison-col">No xanthan, no guar, no carrageenan</td>
                    <td className="p-6 md:p-10 opacity-60" data-animate="comparison-col">Often multiple gums and stabilizers</td>
                  </tr>
                  <tr data-animate="comparison-row">
                    <td className="p-6 md:p-10 font-black uppercase text-xs tracking-widest">Sweetener</td>
                    <td className="p-6 md:p-10 font-bold" data-animate="comparison-col">Monk fruit, no added sugar</td>
                    <td className="p-6 md:p-10 opacity-60" data-animate="comparison-col">Sugar, sugar alcohols, or heavy stevia</td>
                  </tr>
                  <tr data-animate="comparison-row">
                    <td className="p-6 md:p-10 font-black uppercase text-xs tracking-widest">Ingredient count</td>
                    <td className="p-6 md:p-10 font-bold" data-animate="comparison-col">Only 7 ingredients per flavor</td>
                    <td className="p-6 md:p-10 opacity-60" data-animate="comparison-col">Often 15–25+ ingredients</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      {/* 1.8 Who It’s For (Preserved) */}
      <WhoItsForSection />

      {/* ═══ Massive Branding Section (Added from EDM Design) ═══ */}
      <section className="py-32 bg-yellow text-center">
        <h2 className={cn("text-5xl md:text-[100px] leading-brand-none tracking-tighter uppercase", utoBlack.className)}>
          NO ADDED SUGAR <br />
          GLUTEN FREE <br />
          100% VEGAN <br />
          DAIRY FREE
        </h2>
      </section>

      {/* ═══ Proof Section ═══ */}
      <section className="py-24 md:py-40 bg-white" data-animate="testimonials-section">
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

      {/* ═══ The Logic Carousel (Updated props) ═══ */}
      <TheLogicCarousel utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />

      <RippedDivider from="white" to="yellow" />

      {/* ═══ 10.2 Quiz Teaser ═══ */}
      <section className="bg-yellow py-32 mx-4 md:mx-8 rounded-brand-xl overflow-hidden relative border-4 border-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={cn("text-4xl md:text-8xl mb-6 leading-[0.9] uppercase", utoBlack.className)}>
            Not sure where <br /> to start?
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-bold max-w-2xl mx-auto opacity-80">
            Answer a few questions about your day, your digestion, and how sweet you like things. We will match you with the GUTSY bag that makes the most sense.
          </p>
          <Link href="/quiz">
            <Button className={cn("h-20 px-16 rounded-full bg-black text-white text-xl font-bold hover:bg-red transition-brand-out uppercase tracking-widest", utoBold.className)}>
              Take the quiz
            </Button>
          </Link>
        </div>
      </section>

      {/* ═══ 1.7 Refund Guarantee Block ═══ */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-8 py-2 rounded-full border-2 border-red text-red font-black uppercase tracking-widest mb-8">
            Risk-Free
          </div>
          <h2 className={cn("text-4xl md:text-8xl mb-8 leading-brand-none uppercase", utoBlack.className)}>
            If it feels heavy, <br /> we give your <br /> money back.
          </h2>
          <p className="text-xl md:text-2xl font-bold opacity-70 mb-12">
            If GUTSY does not leave you feeling light, or if the taste is just not your thing, tell us. No awkward phone calls. No guilt‑trip scripts. Just protein that has to earn its place in your cupboard.
          </p>
        </div>
      </section>

      {/* ═══ Footer Branding (The Large GUTSY Logo) ═══ */}
      <footer className="bg-yellow pt-32 pb-12 text-center border-t border-black/5">
        <div className="flex justify-center gap-12 mb-20 font-bold uppercase tracking-[0.3em] text-sm">
          <Link href="/science">Science</Link>
          <Link href="/products">Shop Gutsy</Link>
          <Link href="/faq">FAQ</Link>
        </div>
        <h2 className={cn("text-[20vw] leading-none tracking-tighter mb-4", utoBlack.className)}>GUTSY</h2>
        <p className="text-sm font-bold opacity-60 tracking-widest uppercase">alwaysgutsy.com</p>
      </footer>

      <HomeAnimations />
    </div>
  );
}