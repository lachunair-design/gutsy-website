import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';

// Paths are set for src/app/about/page.tsx to reach root public folder
const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

export default function AboutPage() {
  return (
    /* The outer wrapper provides the 'Cream' frame color seen in your reference */
    <div className="bg-[#f3eee4] min-h-screen p-4 md:p-6 lg:p-8">
      
      {/* This is the main 'Pill' container. 
        It uses the Gutsy Red background and heavy rounding to create the inset vibe. 
      */}
      <div className={`bg-[#f20028] min-h-[calc(100vh-4rem)] rounded-[40px] md:rounded-[60px] lg:rounded-[80px] overflow-hidden selection:bg-[#ffb300] selection:text-black ${utoMedium.className}`}>
        
        <div className="mx-auto max-w-6xl px-6 lg:px-8 pt-32 pb-20">
          
          {/* HERO SECTION */}
          <div className="text-center relative mb-16 z-10">
            <h2 className={`text-[#f3eee4] text-3xl md:text-4xl uppercase tracking-[0.2em] mb-2 opacity-90 ${utoBold.className}`}>
              The Big Fat
            </h2>
            <h1 className={`text-[#000000] text-7xl md:text-[140px] leading-none uppercase tracking-tighter ${utoBlack.className}`}>
              GUTSY <br /> 
              Backstory
            </h1>
          </div>

          {/* MELTED ILLUSTRATION - Blends into the Red container background */}
          <div className="relative w-full aspect-[21/9] mb-32 mix-blend-multiply pointer-events-none">
            <Image
              src="/images/MARATHON.png"
              alt="Marathon Illustration"
              fill
              className="object-contain" 
              priority
            />
          </div>

          {/* STORY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40 text-center md:text-left text-[#f3eee4] relative z-10">
            <div className="space-y-6">
              <p className="text-xl md:text-3xl leading-none font-bold italic text-black uppercase">
                It all started when I couldn&apos;t find a single protein powder that didn&apos;t make me bloated.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                Every brand promised the world. Every shake left me feeling heavy and uncomfortable. What&apos;s with all the gums and fillers?
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-3xl leading-none font-bold italic text-black uppercase">
                So I went ahead and made the protein I wanted to buy: one that feels light.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                Break down the protein before it hits your stomach and suddenly you skip the bloat entirely. No magic—just enzymatic pre-digestion.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl md:text-3xl leading-none font-bold italic text-black uppercase">
                GUTSY launched in Dubai, and we&apos;ve got grand plans cooking for the world.
              </p>
              <p className="text-lg leading-relaxed font-medium">
                We&apos;re focused on getting this into the hands of people who are tired of protein that makes them feel like garbage.
              </p>
            </div>
          </div>

          {/* STICKER BRAND VALUES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            <div className="bg-[#ffb300] p-10 rounded-[3rem] border-4 border-black rotate-1 shadow-[12px_12px_0px_0px_#000000]">
              <h3 className={`text-3xl mb-4 uppercase text-black ${utoBlack.className}`}>Feels Light</h3>
              <p className="text-lg leading-tight italic font-bold text-black">No bloat, no brick feeling, no regret.</p>
            </div>
            
            <div className="bg-[#f3eee4] p-10 rounded-[3rem] border-4 border-black -rotate-2 shadow-[12px_12px_0px_0px_#000000]">
              <h3 className={`text-3xl mb-4 uppercase text-[#f20028] ${utoBlack.className}`}>Actually Works</h3>
              <p className="text-lg leading-tight italic font-bold text-black">PDCAAS score of 1.0. Your body uses all of it.</p>
            </div>

            <div className="bg-black p-10 rounded-full border-4 border-[#f3eee4] flex flex-col justify-center items-center text-center shadow-[12px_12px_0px_0px_#ffb300]">
               <h3 className={`text-2xl mb-2 uppercase text-[#f3eee4] ${utoBlack.className}`}>No Bullshit</h3>
               <p className="text-sm font-bold uppercase tracking-widest leading-none text-[#ffb300]">5 Ingredients Only</p>
            </div>
          </div>

          {/* FOUNDER BLOCK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-40">
            <div className="space-y-8 text-[#f3eee4]">
              <h2 className={`text-5xl md:text-8xl uppercase leading-none text-black ${utoBlack.className}`}>
                Laks, <br/> Founder
              </h2>
              <p className="text-xl md:text-3xl leading-tight italic font-bold">
                GUTSY is founder-led. The person who made this in her kitchen is the same person running the company. Based in Dubai and obsessed with pre-digestion.
              </p>
            </div>
            <div className="relative aspect-square bg-[#f3eee4] rounded-[4rem] border-4 border-black shadow-[20px_20px_0px_0px_#000000] overflow-hidden">
               <Image 
                  src="/images/gutsy-logomark.png" 
                  alt="Gutsy Logomark"
                  fill
                  className="object-contain p-24 opacity-10 mix-blend-multiply"
               />
               <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <p className={`text-4xl uppercase leading-none text-black ${utoBlack.className}`}>Born in the kitchen. <br/> Built for the road.</p>
               </div>
            </div>
          </div>

          {/* CALL TO ACTION */}
          <div className="bg-black border-4 border-[#f3eee4] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[15px_15px_0px_0px_#ffb300]">
            <div className="max-w-2xl mx-auto space-y-10">
              <h3 className={`text-5xl md:text-7xl uppercase leading-tight text-[#f3eee4] ${utoBlack.className}`}>Ready to feel light?</h3>
              <p className="text-xl md:text-2xl italic font-bold text-[#ffb300]">
                Sign up for our backstory updates and get 10% off your first order.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 pt-4">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 h-18 px-8 rounded-full border-2 border-[#f3eee4] bg-transparent text-xl text-[#f3eee4] outline-none placeholder:text-[#f3eee4]/40"
                />
                <Button className="h-18 px-12 rounded-full bg-[#f20028] text-[#f3eee4] text-xl font-bold border-2 border-[#f3eee4] hover:bg-[#ffb300] hover:text-black transition-all active:scale-95">
                  Sign me up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
