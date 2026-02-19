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
import { FunFactCarousel } from './fun-fact-carousel';
import { HomeScrollytelling as Scrollytelling } from './scrollytelling';
import { WelcomePopup } from '@/components/welcome-popup';
import { WaveDivider } from '@/components/wave-divider';

const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

export default async function HomePage() {
  let products: ShopifyProduct[] = [];
  try { products = await getProducts(20); } catch (e) { console.error(e); }
  const mainProduct = products[0] || null;

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen selection:bg-[#ffb300]/30", utoMedium.className)}>
      <WelcomePopup />

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative w-full h-screen overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/girl-on-tennis-with-cacao.png"
            alt="GUTSY Lifestyle - Woman enjoying an active lifestyle with GUTSY protein"
            fill
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent z-10" />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-4xl">
            <h2 className={cn("text-[#f3eee4] text-4xl md:text-6xl lowercase mb-2", runWild.className)}>
              finally, a protein that
            </h2>
            <h1 className={cn("text-white text-8xl md:text-[160px] leading-[0.8] uppercase tracking-tighter mb-10 relative inline-block", utoBlack.className)}>
              FEELS LIGHT
              {/* Hand-drawn circle accent on "LIGHT" */}
              {/*<svg className="absolute -right-4 top-1/2 w-[55%] h-[120%] -translate-y-1/2 pointer-events-none" viewBox="0 0 200 100" fill="none" aria-hidden="true">
                <ellipse cx="100" cy="50" rx="90" ry="40" stroke="#f20028" strokeWidth="2" strokeLinecap="round" className="animate-draw-circle" opacity="0.5" />
              </svg>*/}
            </h1>
            <p className="text-[#f3eee4] text-xl md:text-2xl max-w-md font-medium leading-tight mb-12 opacity-90">
              No bloat. No brick in your stomach. Just enzymatically pre-digested protein.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link href="#lineup">
                <Button className={cn("h-14 md:h-16 px-10 rounded-full bg-black text-white text-lg md:text-xl font-bold hover:shadow-xl transition-all duration-300 shadow-lg hover-bounce", utoBold.className)}>
                  Shop Now
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className={cn("h-14 md:h-16 px-10 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md text-white text-lg md:text-xl font-bold hover:bg-white hover:text-black transition-all duration-300", utoBold.className)}>
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Subtle scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-fade-in-up">
          <p className={cn("text-white/40 text-xs uppercase tracking-[0.3em]", utoBold.className)}>
            Scroll to explore
          </p>
        </div>
      </section>

      {/* ═══ PROBLEM SECTION — White Background ═══ */}
      {/*<section className="py-20 md:py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8">
              <p className={cn("text-sm uppercase tracking-[0.2em] text-[#f20028] font-bold", utoBold.className)}>
                The Problem
              </p>
              <h2 className={cn("text-5xl md:text-7xl text-black leading-[0.85] tracking-tighter", utoBlack.className)}>
                Most protein makes you feel like{' '}
                <span className="relative inline-block">
                  garbage.*/}
                  {/* Hand-drawn underline accent */}
                  {/*<svg className="absolute -bottom-2 left-0 w-full h-3 pointer-events-none" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2 8 Q50 2 100 7 Q150 12 198 4" stroke="#f20028" strokeWidth="3" strokeLinecap="round" className="animate-draw-underline" opacity="0.6" />
                  </svg>
                </span>
              </h2>
              <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-lg">
                Massive protein molecules your gut can&apos;t break down. Gums and thickeners that bloat.
                15+ ingredients you can&apos;t pronounce. Sound familiar?
              </p>
            </div> */}
            {/* Illustrated gut character - sad/bloated */}
            {/*<div className="flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-64 h-64 md:w-80 md:h-80" aria-hidden="true">
                <path d="M100 30c-30 0-55 20-60 48-3 18 2 35 12 48 8 10 8 25 3 38-4 10 0 22 10 28 8 5 18 5 25-2 10-10 25-15 35-10 15 8 30-5 30-22 0-12-5-22-8-32-5-18 0-38 10-50 8-10 12-25 8-40-5-18-25-30-48-30z"
                  fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2"/>
                <circle cx="80" cy="85" r="4" fill="black"/>
                <circle cx="120" cy="85" r="4" fill="black"/>
                <path d="M85 110 Q100 100 115 110" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                <path d="M60 60 Q55 50 65 48" fill="none" stroke="#f20028" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M140 60 Q145 50 135 48" fill="none" stroke="#f20028" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="70" cy="130" r="6" fill="#f20028" opacity="0.15"/>
                <circle cx="130" cy="125" r="5" fill="#f20028" opacity="0.15"/>
                <circle cx="100" cy="145" r="4" fill="#f20028" opacity="0.15"/>
              </svg>
            </div>
          </div>
        </div>
      </section>*/}

      {/* ═══ WAVE DIVIDER ═══ */}
      {/*<WaveDivider from="#FDFBF7" to="#f3eee4" />*/}

       <MarqueeRail />

      {/* ═══ SCROLLYTELLING — Keep current (black with transitions) ═══ */}
      {/*<Scrollytelling utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} /> */}

      {/* ═══ SCIENCE SECTION — Cream Background ═══ */}
      <section className="py-20 md:py-32 bg-[#f3eee4]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Illustrated protein breakdown diagram */}
            <div className="flex items-center justify-center order-2 lg:order-1">
              <svg viewBox="0 0 300 200" className="w-full max-w-md" aria-label="Diagram showing protein breakdown process" role="img">
                {/* Large protein molecule */}
                <circle cx="60" cy="100" r="35" fill="#f20028" opacity="0.2" stroke="#f20028" strokeWidth="1.5" strokeDasharray="4 3"/>
                <text x="60" y="105" textAnchor="middle" className="text-[10px] fill-[#f20028] font-bold">PROTEIN</text>

                {/* Arrow */}
                <line x1="105" y1="100" x2="145" y2="100" stroke="#ffb300" strokeWidth="2" strokeDasharray="6 3"/>
                <polygon points="145,94 157,100 145,106" fill="#ffb300"/>
                <text x="130" y="85" textAnchor="middle" className="text-[8px] fill-[#ffb300] font-bold">ENZYMES</text>

                {/* Broken down pieces */}
                <circle cx="190" cy="75" r="14" fill="#ffb300" opacity="0.3" stroke="#ffb300" strokeWidth="1.5"/>
                <circle cx="220" cy="100" r="14" fill="#ffb300" opacity="0.3" stroke="#ffb300" strokeWidth="1.5"/>
                <circle cx="190" cy="125" r="14" fill="#ffb300" opacity="0.3" stroke="#ffb300" strokeWidth="1.5"/>

                {/* Glow effect on small pieces */}
                <circle cx="190" cy="75" r="20" fill="#ffb300" opacity="0.05"/>
                <circle cx="220" cy="100" r="20" fill="#ffb300" opacity="0.05"/>
                <circle cx="190" cy="125" r="20" fill="#ffb300" opacity="0.05"/>

                {/* Label */}
                <text x="255" y="100" textAnchor="middle" className="text-[8px] fill-black/40 font-bold">EASY TO</text>
                <text x="255" y="112" textAnchor="middle" className="text-[8px] fill-black/40 font-bold">ABSORB</text>
              </svg>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <p className={cn("text-4xl md:text-5xl text-[#f20028] lowercase", runWild.className)}>
                the science of light
              </p>
              <h2 className={cn("text-5xl md:text-7xl text-black leading-[0.85] tracking-tighter", utoBlack.className)}>
                We break it down first.
              </h2>
              <p className="text-lg md:text-xl text-black/70 leading-relaxed max-w-lg">
                Enzymatic pre-digestion breaks massive protein molecules into tiny, bioavailable
                peptides before they reach your stomach. Your gut does less work. You feel light.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FunFactCarousel utoBlack={utoBlack} utoBold={utoBold} runWild={runWild} />

     

      {/* ═══ INGREDIENTS SECTION — White Background ═══ */}
      <section className="py-20 md:py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <p className={cn("text-sm uppercase tracking-[0.2em] text-[#f20028] font-bold mb-4", utoBold.className)}>
              What&apos;s Inside
            </p>
            <h2 className={cn("text-5xl md:text-7xl text-black leading-[0.85] tracking-tighter mb-4", utoBlack.className)}>
              <span className="relative inline-block">
                Five
                {/* Hand-drawn circle accent */}
                <svg className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none" viewBox="0 0 120 80" fill="none" aria-hidden="true">
                  <ellipse cx="60" cy="40" rx="52" ry="32" stroke="#ffb300" strokeWidth="2.5" strokeLinecap="round" className="animate-draw-circle" opacity="0.5" />
                </svg>
              </span>{' '}
              core ingredients.
            </h2>
            <p className={cn("text-2xl md:text-3xl text-[#f20028] lowercase", runWild.className)}>
              nothing else.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: 'Pea & Rice Protein', benefit: 'Complete amino acid profile with 20g per serve', icon: 'pea' },
              { name: 'Kiwifruit Extract', benefit: 'Natural enzymes that support digestion', icon: 'kiwi' },
              { name: 'Coconut Milk', benefit: 'Creamy texture without dairy or gums', icon: 'coconut' },
              { name: 'Adaptogens', benefit: 'Reishi or Maca for calm energy and balance', icon: 'adaptogen' },
              { name: 'Monk Fruit', benefit: 'Natural sweetness with zero sugar impact', icon: 'monk' },
            ].map((ingredient) => (
              <div key={ingredient.name} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <IngredientIcon type={ingredient.icon} />
                </div>
                <h3 className={cn("text-lg uppercase tracking-wide mb-2", utoBold.className)}>
                  {ingredient.name}
                </h3>
                <p className="text-sm text-black/60 leading-relaxed">
                  {ingredient.benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DOTTED DIVIDER ═══ */}
      <div className="w-full flex justify-center py-2 bg-[#FDFBF7]">
        <div className="w-24 h-[2px] bg-black/10 rounded-full" />
      </div>

      {/* ═══ LINEUP (Product Section) — White Background ═══ */}
      <section id="lineup" className="py-20 md:py-32 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-end gap-6 mb-12">
            <h2 className={cn("text-7xl md:text-[140px] uppercase tracking-tighter text-black leading-none", utoBlack.className)}>The Lineup</h2>
            <p className={cn("text-4xl md:text-6xl text-[#f20028] mb-2", runWild.className)}>grab yours</p>
          </div>
          {mainProduct && <ProductDetail product={mainProduct} inline />}
        </div>
      </section>

      {/* ═══ SOCIAL PROOF — Yellow Background ═══ */}
      <section className="py-20 md:py-32 bg-[#ffb300]">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <p className={cn("text-sm uppercase tracking-[0.2em] text-black/50 font-bold mb-4", utoBold.className)}>
              What People Say
            </p>
            <h2 className={cn("text-5xl md:text-7xl text-black leading-[0.85] tracking-tighter", utoBlack.className)}>
              Real people. Real guts.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "Finally a protein that doesn't make me feel like I swallowed a brick. Game changer.", name: "Sarah K.", location: "Dubai" },
              { quote: "I've tried everything. This is the first protein powder that doesn't bloat me. Period.", name: "Ahmed R.", location: "Abu Dhabi" },
              { quote: "The taste is incredible and my stomach actually thanks me. Will never go back.", name: "Maya L.", location: "Dubai" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-white/40 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-5 h-5 text-[#ffb300]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-black leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className={cn("text-sm uppercase tracking-wide", utoBold.className)}>{testimonial.name}</p>
                  <p className="text-xs text-black/50">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON — Cream Background ═══ */}
      <section className="py-20 md:py-32 bg-[#f3eee4]">
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className={cn("text-5xl md:text-7xl uppercase text-black tracking-tighter leading-none mb-4", utoBlack.className)}>
              How We&apos;re Different
            </h2>
          </div>
          <div className="bg-white rounded-3xl shadow-md overflow-hidden">
            <div className="grid grid-cols-2 py-4 px-6 uppercase text-[10px] tracking-[0.3em] text-black/40 font-black border-b border-black/5">
              <div>Regular Protein</div>
              <div className="text-[#f20028]">GUTSY</div>
            </div>
            {[
              ["Massive molecules gut struggles with", "Pre-digested tiny peptides"],
              ["Gums and thickeners that bloat", "Zero fillers or gums"],
              ["15+ mystery ingredients", "5 core ingredients"],
            ].map((row, i) => (
              <div key={i} className={cn(
                "grid grid-cols-2 py-6 md:py-8 px-6 text-lg md:text-2xl font-medium hover:bg-[#f3eee4]/50 transition-colors duration-300",
                i < 2 && "border-b border-black/5"
              )}>
                <div className="opacity-30 pr-6">{row[0]}</div>
                <div className="text-black">{row[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EMAIL CAPTURE — White Background ═══ */}
      {/*<section className="bg-[#FDFBF7]">
        <EmailCapture />
      </section>*/}

      {/* ═══ WAVE DIVIDER ═══ */}
      <WaveDivider from="#FDFBF7" to="black" />

      {/* ═══ FOOTER CTA — Black Background ═══ */}
      <section className="py-20 md:py-32 bg-black px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className={cn("text-2xl md:text-3xl text-[#f20028] lowercase italic mb-4", runWild.className)}>
            fuel that actually feels good
          </p>

          <h2 className={cn("text-6xl md:text-[120px] text-[#f3eee4] leading-[0.9] tracking-tighter mb-10", utoBlack.className)}>
            Ready to transform?
          </h2>

          <div className="flex flex-col items-center gap-8">
            <Link href="#lineup">
              <Button className={cn("h-14 md:h-16 px-16 rounded-full bg-[#f20028] text-white text-xl md:text-2xl font-bold transition-all duration-300 shadow-xl hover-bounce", utoBold.className)}>
                Shop Gutsy
              </Button>
            </Link>

            <div className={cn("flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-white/30 font-black", utoBold.className)}>
              <span>Enzymatically Pre-Digested</span>
              <span className="hidden md:inline">•</span>
              <span>Zero Bloat</span>
              <span className="hidden md:inline">•</span>
              <span>20g Plant Protein</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Ingredient Illustration Icons ── */
function IngredientIcon({ type }: { type: string }) {
  switch (type) {
    case 'pea':
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          <ellipse cx="24" cy="24" rx="18" ry="12" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
          <circle cx="16" cy="24" r="5" fill="#f20028" opacity="0.15" stroke="#f20028" strokeWidth="1"/>
          <circle cx="24" cy="24" r="5" fill="#f20028" opacity="0.15" stroke="#f20028" strokeWidth="1"/>
          <circle cx="32" cy="24" r="5" fill="#f20028" opacity="0.15" stroke="#f20028" strokeWidth="1"/>
          <path d="M24 12 Q28 6 30 8" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      );
    case 'kiwi':
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          <circle cx="24" cy="24" r="16" fill="none" stroke="black" strokeWidth="1.5"/>
          <circle cx="24" cy="24" r="10" fill="#f20028" opacity="0.08"/>
          <circle cx="20" cy="20" r="1.5" fill="black" opacity="0.4"/>
          <circle cx="28" cy="20" r="1.5" fill="black" opacity="0.4"/>
          <circle cx="24" cy="28" r="1.5" fill="black" opacity="0.4"/>
          <circle cx="18" cy="26" r="1.5" fill="black" opacity="0.4"/>
          <circle cx="30" cy="26" r="1.5" fill="black" opacity="0.4"/>
          <line x1="24" y1="14" x2="24" y2="34" stroke="black" strokeWidth="0.5" opacity="0.3"/>
          <line x1="14" y1="24" x2="34" y2="24" stroke="black" strokeWidth="0.5" opacity="0.3"/>
        </svg>
      );
    case 'coconut':
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          <path d="M12 28 Q12 40 24 40 Q36 40 36 28" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 28 Q24 22 36 28" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
          <circle cx="20" cy="32" r="2" fill="black" opacity="0.3"/>
          <circle cx="28" cy="32" r="2" fill="black" opacity="0.3"/>
          <circle cx="24" cy="36" r="2" fill="black" opacity="0.3"/>
          <path d="M22 12 Q18 8 24 8 Q30 8 26 12" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      );
    case 'adaptogen':
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          <circle cx="24" cy="28" r="12" fill="none" stroke="black" strokeWidth="1.5"/>
          <circle cx="24" cy="28" r="6" fill="#ffb300" opacity="0.15"/>
          <path d="M24 16 L24 8" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M18 10 Q24 14 30 10" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round"/>
          <circle cx="24" cy="28" r="2" fill="#ffb300" opacity="0.3"/>
        </svg>
      );
    case 'monk':
      return (
        <svg viewBox="0 0 48 48" className="w-12 h-12" aria-hidden="true">
          <circle cx="24" cy="26" r="14" fill="none" stroke="black" strokeWidth="1.5" strokeDasharray="3 2"/>
          <circle cx="24" cy="26" r="8" fill="#ffb300" opacity="0.1"/>
          <path d="M18 24 Q21 20 24 24 Q27 20 30 24" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round"/>
          <path d="M24 12 L24 8" stroke="black" strokeWidth="1" strokeLinecap="round"/>
          <path d="M20 10 L24 8 L28 10" fill="none" stroke="black" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
}
