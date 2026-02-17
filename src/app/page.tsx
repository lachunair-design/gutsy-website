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

// FONT CONFIGURATION
const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

export const revalidate = 60;

export default async function HomePage() {
  let products: ShopifyProduct[] = [];
  try {
    products = await getProducts(20);
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  const mainProduct = products[0] || null;

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen selection:bg-[#ffb300] [overflow-x:clip]", utoMedium.className)}>

      {/* HERO SECTION - Parallax & Kinetic Typography */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/MARATHON.png" 
            alt="Gutsy Background" 
            fill 
            className="object-cover opacity-25 scale-110 motion-safe:animate-[pulse_8s_ease-in-out_infinite]" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f3eee4] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-6 text-center">
          <div className="overflow-hidden mb-2">
            <h2 className={cn("text-[#f20028] text-4xl md:text-7xl lowercase motion-safe:animate-[slideUp_1s_ease-out]", runWild.className)}>
              finally, a protein that
            </h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className={cn("text-black text-7xl md:text-[150px] lg:text-[190px] leading-[0.75] uppercase tracking-tighter motion-safe:animate-[slideUp_1.2s_ease-out]", utoBlack.className)}>
              FEELS LIGHT
            </h1>
          </div>
          <p className="text-black text-lg md:text-2xl max-w-2xl mx-auto font-bold uppercase italic leading-tight mb-12 opacity-0 motion-safe:animate-[fadeIn_1s_ease-out_1s_forwards]">
            No bloat. No brick in your stomach. <br/> Just enzymatically pre-digested protein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 motion-safe:animate-[fadeIn_1s_ease-out_1.2s_forwards]">
            <Link href="#lineup">
              <Button className={cn("h-16 px-16 rounded-full bg-[#f20028] text-[#f3eee4] text-xl font-bold hover:bg-black hover:scale-105 transition-all duration-300 shadow-xl shadow-red-500/20", utoBold.className)}>
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE - Interactive Hover */}
      <div className="border-y border-black/5 bg-white py-6 cursor-pointer group">
        <MarqueeRail />
      </div>

      {/* THE PROBLEM - High Contrast Storytelling */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-black text-[#f3eee4] relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            {/* Placeholder for high-quality lifestyle video/image */}
            <div className="aspect-[4/5] bg-[#1a1a1a] rounded-[40px] overflow-hidden relative border border-white/10">
               <Image 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop" 
                alt="Movement lifestyle" 
                fill 
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000"
               />
               <div className="absolute inset-0 flex items-center justify-center p-8">
                  <h2 className={cn("text-5xl md:text-8xl uppercase text-[#f20028] leading-[0.8] text-center", utoBlack.className)}>
                    WHY MOST <br /> PROTEIN SUCKS
                  </h2>
               </div>
            </div>
          </div>
          <div className="space-y-10">
            <p className={cn("text-5xl md:text-7xl text-[#ffb300] lowercase", runWild.className)}>We fixed it.</p>
            <div className="space-y-8 text-xl md:text-3xl leading-snug opacity-90 font-medium">
              <p>Regular protein powder makes you bloated. That heavy, uncomfortable feeling after every shake isn&apos;t normal.</p>
              <p>It&apos;s because your stomach is struggling to break down massive protein molecules. Most brands add gums and fillers that make it worse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCIENCE SECTION -  */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className={cn("text-7xl md:text-[120px] uppercase leading-none text-black", utoBlack.className)}>the science <br className="md:hidden" /> of light</h2>
             <p className={cn("text-4xl md:text-6xl text-[#f20028] lowercase mt-4", runWild.className)}>how pre-digestion skips the bloat</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-10 bg-[#f3eee4] rounded-[40px] space-y-6 hover:-translate-y-2 transition-transform">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white font-bold">1</span>
              <h3 className={cn("text-2xl uppercase", utoBlack.className)}>Most protein is a &quot;brick.&quot;</h3>
              <p className="opacity-70 leading-relaxed font-bold italic uppercase text-sm">Regular molecules are massive chains. Your gut works overtime to break them down.</p>
            </div>
            <div className="p-10 bg-[#f20028] text-white rounded-[40px] space-y-6 hover:-translate-y-2 transition-transform lg:translate-y-12">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#f20028] font-bold">2</span>
              <h3 className={cn("text-2xl uppercase", utoBlack.className)}>We snip them early.</h3>
              <p className="opacity-90 leading-relaxed font-bold italic uppercase text-sm">Enzymes break those chains into tiny pieces before you take a sip. Instant bioavailability.</p>
            </div>
            <div className="p-10 bg-[#ffb300] text-black rounded-[40px] space-y-6 hover:-translate-y-2 transition-transform">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-[#ffb300] font-bold">3</span>
              <h3 className={cn("text-2xl uppercase", utoBlack.className)}>Zero Gravity Gut.</h3>
              <p className="opacity-80 leading-relaxed font-bold italic uppercase text-sm">Because the work is already done, your body absorbs it effortlessly. No bloat, just fuel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE SECTION - Glossier Inspired Product Grid */}
      <section className="py-24 px-6 bg-[#f3eee4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/10 border border-black/10 rounded-[40px] overflow-hidden shadow-2xl">
            <div className="bg-white p-12 md:p-24 flex flex-col justify-center">
                <h2 className={cn("text-6xl md:text-8xl uppercase text-black leading-[0.85] mb-6", utoBlack.className)}>FIVE CORE <br/> INGREDIENTS.</h2>
                <p className={cn("text-4xl md:text-6xl text-[#f20028] lowercase mb-12", runWild.className)}>That&apos;s it.</p>
                <div className="space-y-12">
                   {[
                    { title: "Hydrolyzed Pea & Rice", desc: "Pre-broken down protein." },
                    { title: "Actazin Kiwifruit", desc: "Natural enzyme support." },
                    { title: "Functional Adaptogens", desc: "Reishi or Maca." },
                    { title: "Coconut & Monk Fruit", desc: "Clean, natural texture." }
                   ].map((ing, i) => (
                    <div key={i} className="flex items-start gap-6 group">
                      <div className="w-2 h-2 rounded-full bg-[#f20028] mt-2 group-hover:scale-150 transition-transform" />
                      <div>
                        <h4 className={cn("text-xl uppercase", utoBlack.className)}>{ing.title}</h4>
                        <p className="opacity-50 text-sm font-bold uppercase tracking-widest">{ing.desc}</p>
                      </div>
                    </div>
                   ))}
                </div>
            </div>
            <div className="relative min-h-[500px] bg-black">
              <Image 
                src="https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=1974&auto=format&fit=crop" 
                alt="Clean ingredients" 
                fill 
                className="object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LINEUP - Gisou Inspired Full Screen PDP */}
      <section id="lineup" className="py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-4">
            <div className="text-left">
               <h2 className={cn("text-7xl md:text-9xl uppercase tracking-tighter leading-none", utoBlack.className)}>The Lineup</h2>
               <p className={cn("text-4xl md:text-5xl text-[#f20028] lowercase", runWild.className)}>grab yours</p>
            </div>
            <div className="text-right hidden md:block">
               <p className="text-xs uppercase tracking-[0.3em] font-black opacity-30">SCROLL TO DISCOVER — 01 / 02</p>
            </div>
          </div>
          {mainProduct ? (
            <div className="hover:shadow-3xl transition-shadow duration-700">
              <ProductDetail product={mainProduct} inline />
            </div>
          ) : (
            <div className="text-center py-24 opacity-10">
              <p className={cn("text-5xl lowercase", runWild.className)}>products loading...</p>
            </div>
          )}
        </div>
      </section>

      {/* SOCIAL PROOF - Interactive Cards */}
      <section className="py-24 px-6 bg-[#f3eee4]">
        <div className="max-w-7xl mx-auto">
          <h2 className={cn("text-5xl md:text-[100px] uppercase text-black text-center mb-20 leading-none", utoBlack.className)}>WHAT PEOPLE SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Super light. I can finally have protein without feeling heavy.", author: "Beta Tester, Dubai" },
              { quote: "No bloating. First protein powder that doesn't make me regret it.", author: "Beta Tester, Abu Dhabi" },
              { quote: "I was skeptical but this actually works. Feels completely different.", author: "Beta Tester, Dubai" }
            ].map((t, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] border border-black/5 flex flex-col justify-between hover:bg-black group transition-colors duration-500">
                <p className={cn("text-3xl md:text-4xl lowercase leading-tight group-hover:text-[#f3eee4] transition-colors", runWild.className)}>&quot;{t.quote}&quot;</p>
                <p className={cn("text-xs md:text-sm uppercase tracking-widest font-black mt-10 group-hover:text-[#f20028] transition-colors", utoBold.className)}>— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE - Clean & Minimal */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <h2 className={cn("text-6xl md:text-9xl uppercase text-black text-center mb-16 leading-[0.8]", utoBlack.className)}>HOW WE&apos;RE <br/> DIFFERENT</h2>
        <div className="overflow-hidden bg-white border border-black/10 rounded-[40px] shadow-sm">
          <div className="grid grid-cols-2 bg-black text-[#f3eee4] py-8 px-8 md:px-12 text-xs md:text-sm uppercase tracking-[0.3em] font-black">
            <div>Regular</div>
            <div className="text-[#ffb300]">GUTSY</div>
          </div>
          {[
            ["Massive molecules", "Pre-digested pieces"],
            ["Gums and thickeners", "Zero fillers"],
            ["15+ ingredients", "5 core ingredients"],
            ["Claims with no science", "Enzymatic science"]
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-black/5 last:border-b-0 py-8 px-8 md:px-12 items-center hover:bg-[#f20028]/5 transition-colors">
              <div className="opacity-40 font-bold uppercase text-xs pr-4">{row[0]}</div>
              <div className="text-[#f20028] font-black uppercase text-sm md:text-lg">{row[1]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="py-24 px-6 flex justify-center">
        <div className="w-full max-w-2xl text-center">
           <EmailCapture />
        </div>
      </section>

      {/* FOOTER CTA - Rhode Inspired High Impact */}
      <section className="p-6">
        <div className="bg-black rounded-[60px] md:rounded-[120px] py-32 px-6 text-center border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
            <Image src="/images/MARATHON.png" alt="" fill className="object-cover scale-150 rotate-12" />
          </div>
          <div className="relative z-10">
            <h2 className={cn("text-7xl md:text-[180px] uppercase text-[#f3eee4] leading-[0.7] mb-12 tracking-tighter", utoBlack.className)}>Ready to <br /> transform?</h2>
            <p className={cn("text-4xl md:text-6xl text-[#ffb300] lowercase mb-12", runWild.className)}>Join thousands who trust their gut.</p>
            <Link href="#lineup">
              <Button className={cn("h-24 px-24 rounded-full bg-[#f20028] text-[#f3eee4] text-3xl font-bold hover:scale-110 transition-transform duration-500 shadow-2xl shadow-red-500/40", utoBold.className)}>
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
