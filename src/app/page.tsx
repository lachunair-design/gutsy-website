'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProductDetail } from '@/components/product/product-detail';
import { MarqueeRail } from '@/components/marquee-rail';
import { EmailCapture } from '@/components/email-capture';
import { getProducts } from '@/lib/shopify';
import { ShopifyProduct } from '@/lib/shopify/types';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { TheLogicCarousel } from './the-logic-carousel';
import { HomeScrollytelling as Scrollytelling } from './scrollytelling';
import { WelcomePopup } from '@/components/welcome-popup';
import { RippedDivider } from '@/components/wave-divider';
import { HomeAnimations } from '@/components/animations/home-animations';
import { RadialMarquee } from '@/components/effects/radial-marquee';
import { Tooltip } from '@/components/ui/tooltip';
import { ProofSlider } from '@/components/reviews/proof-slider';

const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

const PROOF = [
  { quote: "Finally a protein that doesn't make me feel like I swallowed a brick. Game changer.", name: "Sarah K.", location: "Dubai" },
  { quote: "I've tried everything. This is the first protein powder that doesn't bloat me. Period.", name: "Ahmed R.", location: "Abu Dhabi" },
  { quote: "The taste is incredible and my stomach actually thanks me. Will never go back.", name: "Maya L.", location: "Dubai" },
  { quote: "Two weeks in and my digestion has completely changed. Light, clean energy all day.", name: "Tariq M.", location: "Dubai" },
  { quote: "Skeptical at first, but the science makes sense. No gum ingredients, no bloat. Love it.", name: "Priya S.", location: "Abu Dhabi" },
];

export default async function HomePage() {
  let products: ShopifyProduct[] = [];
  try { products = await getProducts(20); } catch (e) { console.error(e); }
  const mainProduct = products[0] || null;

  return (
    <div className={cn("bg-linen min-h-screen selection:bg-yellow/30", utoMedium.className)}>
      <WelcomePopup />

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center bg-black">
        <div className="absolute inset-0 z-0" data-animate="hero-image">
          <Image
            src="/images/girl-on-tennis-with-cacao.png"
            alt="GUTSY Lifestyle"
            fill
            className="object-cover object-center opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-5xl">
            <h2
              data-animate="hero-eyebrow"
              className={cn("text-yellow text-4xl md:text-6xl lowercase mb-4", runWild.className)}
            >
              finally, a protein that
            </h2>
            <h1
              data-animate="hero-title"
              className={cn("text-white text-[80px] md:text-[180px] leading-[0.75] uppercase tracking-tighter mb-12", utoBlack.className)}
            >
              FEELS LIGHT.
            </h1>
            <p
              data-animate="hero-body"
              className="text-white text-xl md:text-3xl max-w-xl font-bold leading-tight mb-14 opacity-90"
            >
              Most protein is clunky. We pre-break down our molecules so your gut doesn&apos;t have to. No bloat. No brick.
            </p>

            <div data-animate="hero-cta" className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="#lineup">
                <Button className={cn("h-16 md:h-20 px-12 rounded-full bg-red text-white text-xl md:text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-2xl", utoBold.className)}>
                  The Goods
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className={cn("h-16 md:h-20 px-12 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md text-white text-xl md:text-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500", utoBold.className)}>
                  The Backstory
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Diagnostic badge */}
        <div className="absolute bottom-12 right-12 z-20 hidden md:block" aria-hidden="true">
          <RadialMarquee radius={110} fontSize={10} speed={20} />
        </div>
      </section>

      <MarqueeRail />

      {/* ═══ SCIENCE: WE BREAK IT DOWN FIRST ═══ */}
      <section data-animate="science-section" className="py-24 md:py-48 bg-linen">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            <div className="lg:col-span-7 space-y-12">
              <p className={cn("text-5xl md:text-7xl text-red lowercase leading-none", runWild.className)}>
                the science of light
              </p>
              <h2 className={cn("text-6xl md:text-[110px] text-black leading-[0.85] tracking-tighter uppercase font-black", utoBlack.className)}>
                We break it <br /> down first.
              </h2>
              <div className="space-y-6 max-w-xl">
                <p className="text-xl md:text-2xl text-black/70 leading-relaxed font-bold">
                  Your gut is not an industrial furnace. Standard protein molecules are long, tangled chains that cause fermentation and gas.
                </p>
                <p className="text-xl md:text-2xl text-black/70 leading-relaxed font-bold">
                  We use enzymatic hydrolysis to snip those chains into tiny peptides before they reach the bag. It is called being pre-broken down. It is not magic. It is just better engineering.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5" data-animate="science-svg">
              <div className="bg-white p-12 rounded-[60px] border border-black/5 shadow-sm">
                 
              </div>
            </div>
          </div>
        </div>
      </section>

      <RippedDivider from="linen" to="white" />

      {/* ═══ THE LINEUP ═══ */}
      <section id="lineup" className="py-24 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20 justify-center md:justify-start">
            <h2 className={cn("text-7xl md:text-[160px] uppercase tracking-tighter text-black leading-none font-black", utoBlack.className)}>The Lineup.</h2>
            <p className={cn("text-4xl md:text-6xl text-red mb-2", runWild.className)}>grab yours</p>
          </div>
          {mainProduct && <ProductDetail product={mainProduct} inline />}
        </div>
      </section>

      {/* ═══ PROOF SECTION ═══ */}
      <section data-animate="testimonials-section" className="py-24 md:py-40 bg-yellow">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mb-20">
            <p className={cn("text-sm uppercase tracking-[0.4em] text-black/40 font-black mb-4", utoBold.className)}>
              Human Proof
            </p>
            <h2 className={cn("text-6xl md:text-[100px] text-black leading-[0.85] tracking-tighter uppercase font-black", utoBlack.className)}>
              Real people. <br /> Real guts.
            </h2>
          </div>
          <ProofSlider testimonials={PROOF} nameClassName={utoBold.className} />
        </div>
      </section>

      {/* ═══ THE LOGIC CAROUSEL (Replaging Fun Facts) ═══ */}
      <TheLogicCarousel utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />

      <RippedDivider from="linen" to="black" />

      {/* ═══ FINAL CTA ═══ */}
      <section data-animate="cta-section" className="py-32 md:py-56 bg-black px-6 overflow-hidden relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className={cn("text-3xl md:text-5xl text-red lowercase mb-8", runWild.className)}>
            fuel that actually feels good
          </p>

          <h2 className={cn("text-7xl md:text-[160px] text-white leading-[0.8] tracking-tighter mb-16 uppercase font-black", utoBlack.className)}>
            Ready to <br /> transform?
          </h2>

          <div className="flex flex-col items-center gap-12">
            <Link href="#lineup">
              <Button className={cn("h-20 md:h-28 px-20 rounded-full bg-red text-white text-2xl md:text-4xl font-black uppercase tracking-widest hover:scale-105 transition-all duration-500 shadow-2xl", utoBold.className)}>
                Shop Gutsy
              </Button>
            </Link>

            <div className={cn("flex flex-wrap justify-center gap-x-10 gap-y-4 text-[10px] uppercase tracking-[0.5em] text-white/20 font-black", utoBold.className)}>
              <span>Enzymatically Pre-broken down</span>
              <span className="hidden md:inline">/</span>
              <span>Zero Bloat</span>
              <span className="hidden md:inline">/</span>
              <span>23g Complete Protein</span>
            </div>
          </div>
        </div>
      </section>

      <HomeAnimations />
    </div>
  );
}
