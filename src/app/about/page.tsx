import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';

// Using @ to start from the src directory for cleaner pathing
const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

export const metadata = {
  title: 'THE BACKSTORY | GUTSY',
  description: 'Protein that feels light. Built because we were tired of feeling like we swallowed a brick.',
};

const differentiators = [
  {
    title: 'Feels Light',
    description: 'Enzymatically pre-digested protein that your stomach can actually handle. No bloat, no brick feeling, no lying on the couch regretting your life choices.',
  },
  {
    title: 'Actually Works',
    description: 'PDCAAS score of 1.0. That means your body can use all the protein we give it. No fillers, no gums, no mystery ingredients.',
  },
  {
    title: 'No Bullshit',
    description: 'Five ingredients you can pronounce. No proprietary blends hiding mystery powders. If you want to know what something does, we&apos;ll tell you straight.',
  },
  {
    title: 'Real Ingredients',
    description: 'Enzymatically optimized pea and rice protein. Actazin kiwifruit extract for digestion. Reishi or maca for functional benefits.',
  },
];

export default function AboutPage() {
  return (
    <div className={`bg-[#f3eee4] text-[#000000] min-h-screen ${utoMedium.className}`}>
      
      {/* HERO SECTION */}
      <section className="pt-48 pb-20 md:pt-64 md:pb-32 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className={`text-6xl md:text-[110px] leading-[0.85] uppercase tracking-tighter mb-10 ${utoBlack.className}`}>
              Protein That <br />
              <span className="text-[#f20028] italic">Feels Light</span>
            </h1>
            <p className={`text-xl md:text-3xl max-w-2xl text-black/80 leading-snug ${utoBold.className}`}>
              Started because one person got tired of protein powders that made her feel like she swallowed a brick. Now it&apos;s a real product that actually works.
            </p>
          </div>
        </div>
      </section>

      {/* THE BACKSTORY */}
      <section className="py-24 md:py-40 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className={`text-3xl uppercase tracking-widest text-[#f20028] ${utoBlack.className}`}>
                The Backstory
              </h2>
            </div>
            <div className={`lg:col-span-8 space-y-10 text-xl md:text-2xl leading-relaxed text-black/90 ${utoMedium.className}`}>
              <p>
                It started when I couldn&apos;t find a single protein powder that didn&apos;t make me bloated. Every brand promised the world. Every shake left me feeling heavy and uncomfortable. What&apos;s with all the gums and fillers? Why does &quot;gut-friendly&quot; usually mean garbage protein that doesn&apos;t actually work?
              </p>
              <p>
                So I spent months in my kitchen testing formulations. Turns out the solution isn&apos;t magic. It&apos;s <span className="underline decoration-[#f20028] decoration-4 underline-offset-4">enzymatic pre-digestion</span>. Break down the protein before it hits your stomach and suddenly you skip the bloat entirely. Add kiwifruit extract for extra digestive support. Keep the formula clean with five ingredients you can pronounce.
              </p>
              <p>
                Beta testers kept using the same word without prompting: <span className="italic uppercase font-bold text-[#f20028]">light</span>. That&apos;s when I knew we had something real. GUTSY launched in Dubai because that&apos;s where I am. We&apos;ve got big plans coming, but first we&apos;re focused on getting this into the hands of people who are tired of protein that makes them feel like garbage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-24 md:py-40 border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20">
            <h2 className={`text-4xl md:text-6xl uppercase leading-none ${utoBlack.className}`}>
              What makes <br /> gutsy different
            </h2>
            <p className={`mt-4 text-xl opacity-60 uppercase tracking-widest ${utoBold.className}`}>Four things that actually matter</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {differentiators.map((item) => (
              <div key={item.title} className="group border-t border-black pt-8">
                <h3 className={`text-2xl md:text-3xl uppercase mb-4 transition-colors group-hover:text-[#f20028] ${utoBold.className}`}>
                  {item.title}
                </h3>
                <p className="text-lg md:text-xl text-black/70 leading-relaxed italic">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS BEHIND THIS */}
      <section className="py-24 md:py-40 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] bg-[#f3eee4] overflow-hidden rounded-2xl border border-black/5">
              <Image
                src="/images/gutsy-logomark.png" 
                alt="Founder"
                fill
                className="object-contain p-20 grayscale"
              />
            </div>
            <div className="space-y-8">
              <h2 className={`text-4xl md:text-6xl uppercase leading-tight ${utoBlack.className}`}>
                Who&apos;s behind this
              </h2>
              <p className={`text-xl md:text-2xl text-black/70 ${utoMedium.className}`}>
                GUTSY is founder-led. That means the person who made this in her kitchen is the same person running the company.
              </p>
              <div className="pt-8 border-t border-black">
                <h3 className={`text-3xl uppercase ${utoBold.className}`}>Laks, Founder</h3>
                <p className="mt-4 text-lg md:text-xl text-black/80 leading-relaxed italic">
                  Built GUTSY because every protein powder made her feel terrible. Spent months testing formulations. Found the solution in enzymatic pre-digestion. Now based in Dubai launching the brand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 md:py-56 bg-[#f20028] text-white text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className={`text-5xl md:text-[100px] uppercase leading-none tracking-tighter mb-12 ${utoBlack.className}`}>
            Ready to <br /> Feel Light?
          </h2>
          <p className={`text-2xl md:text-3xl mb-12 opacity-90 ${utoBold.className}`}>
            Try protein that actually feels good.
          </p>
          <Link href="/products">
            <Button className={`bg-[#000000] text-white rounded-full px-16 py-10 text-2xl uppercase tracking-tight hover:bg-[#f3eee4] hover:text-[#000000] transition-all shadow-xl active:scale-95 ${utoBold.className}`}>
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
