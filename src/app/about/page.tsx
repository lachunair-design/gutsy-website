import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

export default function AboutPage() {
  return (
    <div className={`bg-[#f3eee4] min-h-screen pt-32 pb-20 ${utoMedium.className}`}>
      
      {/* HEADER PILLS */}
      <div className="flex justify-center mb-16 px-4">
        <div className="flex -space-x-4">
          {['About', 'Contact', 'FAQs'].map((item) => (
            <div key={item} className="h-12 px-8 flex items-center justify-center rounded-full bg-white border border-black/10 text-sm font-bold shadow-sm">
              {item}
            </div>
          ))}
          <div className="h-12 px-10 flex items-center justify-center rounded-full bg-[#f20028] text-white text-sm font-bold shadow-md">
            Shop
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* HERO */}
        <div className="text-center relative mb-24">
          <h2 className={`text-[#f20028] text-3xl md:text-4xl uppercase tracking-[0.2em] mb-2 ${utoBold.className}`}>
            The Big Fat
          </h2>
          <h1 className={`text-black text-7xl md:text-[120px] leading-none uppercase tracking-tighter ${utoBlack.className}`}>
            GUTSY <br /> 
            Backstory
          </h1>
        </div>

        {/* ILLUSTRATION SECTION */}
        <div className="relative w-full aspect-[21/9] mb-32 rounded-[3rem] overflow-hidden border-2 border-black/5 shadow-xl bg-white">
          <Image
            src="/images/MARATHON.png"
            alt="Marathon Illustration"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* STORY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-40 text-center md:text-left">
          <div className="space-y-6">
            <p className="text-xl md:text-2xl leading-snug text-[#f20028] font-bold italic">
              It all started when I couldn&apos;t find a single protein powder that didn&apos;t make me bloated.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Every brand promised the world. Every shake left me feeling heavy and uncomfortable. What&apos;s with all the gums and fillers?
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-xl md:text-2xl leading-snug text-[#f20028] font-bold italic">
              So I went ahead and made the protein I wanted to buy: one that feels light.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              Break down the protein before it hits your stomach and suddenly you skip the bloat entirely. No magic—just enzymatic pre-digestion.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-xl md:text-2xl leading-snug text-[#f20028] font-bold italic">
              GUTSY launched in Dubai, and we&apos;ve got grand plans cooking for the world.
            </p>
            <p className="text-lg opacity-80 leading-relaxed">
              We&apos;re focused on getting this into the hands of people who are tired of protein that makes them feel like garbage.
            </p>
          </div>
        </div>

        {/* FEATURE BLOCKS: "STICKER" STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          <div className="bg-[#ffb300] p-10 rounded-[3rem] border-2 border-black rotate-1 shadow-[8px_8px_0px_0px_#000000]">
            <h3 className={`text-3xl mb-4 uppercase ${utoBlack.className}`}>Feels Light</h3>
            <p className="text-lg leading-tight italic font-bold">No bloat, no brick feeling, no regret.</p>
          </div>
          
          <div className="bg-[#f20028] p-10 rounded-[3rem] border-2 border-black -rotate-2 shadow-[8px_8px_0px_0px_#000000] text-white">
            <h3 className={`text-3xl mb-4 uppercase ${utoBlack.className}`}>Actually Works</h3>
            <p className="text-lg leading-tight italic font-bold">PDCAAS score of 1.0. Your body uses all of it.</p>
          </div>

          <div className="bg-white p-10 rounded-full border-2 border-black flex flex-col justify-center items-center text-center shadow-[8px_8px_0px_0px_#000000]">
             <h3 className={`text-2xl mb-2 uppercase ${utoBlack.className}`}>No Bullshit</h3>
             <p className="text-sm font-bold opacity-80 uppercase tracking-widest leading-none text-[#f20028]">5 Ingredients Only</p>
          </div>
        </div>

        {/* FOUNDER SECTION (LAKS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-40">
          <div className="space-y-8">
            <h2 className={`text-4xl md:text-6xl uppercase leading-tight ${utoBlack.className}`}>
              Laks, Founder
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed italic text-black/80">
              GUTSY is founder-led. That means the person who made this in her kitchen is the same person running the company. Based in Dubai and obsessed with pre-digestion.
            </p>
          </div>
          <div className="relative aspect-square bg-white rounded-[4rem] border-2 border-black shadow-2xl overflow-hidden">
             <Image 
                src="/images/gutsy-logomark.png" 
                alt="Founder Branding"
                fill
                className="object-contain p-20 opacity-20"
             />
             <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                <p className={`text-3xl uppercase leading-none ${utoBlack.className}`}>Born in the kitchen. <br/> Built for the road.</p>
             </div>
          </div>
        </div>

        {/* CTA / SIGNUP */}
        <div className="bg-white border-2 border-black rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[12px_12px_0px_0px_#f20028]">
          <div className="max-w-2xl mx-auto space-y-8">
            <h3 className={`text-4xl md:text-5xl uppercase leading-tight ${utoBlack.className}`}>Ready to feel light?</h3>
            <p className="text-xl italic font-bold text-[#f20028]">
              Sign up for our backstory updates and get 10% off your first order.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 pt-4">
              <input 
                type="email" 
                placeholder="Your email"
                className="flex-1 h-16 px-8 rounded-full border-2 border-black bg-white text-xl outline-none focus:ring-2 focus:ring-[#f20028]"
              />
              <Button className="h-16 px-10 rounded-full bg-[#f20028] text-white text-xl font-bold hover:bg-black transition-colors">
                Sign me up
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
