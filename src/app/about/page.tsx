import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import localFont from 'next/font/local';

// Initialize the custom fonts
const utoBlack = localFont({ src: '../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../public/fonts/Uto Medium.otf' });

export const metadata = {
  title: 'THE MANIFESTO | GUTSY',
  description: 'Built for the ambitious, the lactose-intolerant, and the unapologetic.',
};

const values = [
  {
    title: 'NO SECRETS',
    description: 'Proprietary blends are for brands with something to hide. We don’t. Every ingredient is listed, lab-tested, and accounted for.',
    color: 'bg-[#f20028]', // Gutsy Red
  },
  {
    title: 'GUT-FIRST',
    description: 'No bloating. No synthetic fillers. Just Latvian-sourced, plant-based protein designed to keep your gut happy while you train.',
    color: 'bg-[#000000]', // Black
  },
  {
    title: 'DUBAI BORN',
    description: 'Global standards, local soul. Formulated to withstand the heat of the desert and the demands of high-performance athletes.',
    color: 'bg-[#f20028]',
  },
  {
    title: 'PURE SCIENCE',
    description: 'Our formulas are based on peer-reviewed research. We only include ingredients proven to deliver results, not hype.',
    color: 'bg-[#000000]',
  },
];

export default function AboutPage() {
  return (
    <div className={`bg-[#f3eee4] text-[#000000] selection:bg-[#ffb300] selection:text-[#000000] ${utoMedium.className}`}>
      
      {/* Hero Section - Maximalist Disruption */}
      <section className="bg-[#000000] text-[#f3eee4] pt-40 pb-24 border-b-[12px] border-[#f20028] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className={`text-6xl md:text-[150px] uppercase leading-[0.75] tracking-tighter mb-12 ${utoBlack.className}`}>
              BUILT FOR <br />
              <span className="text-[#f20028] italic underline decoration-[10px]">ATHLETES</span> <br />
              BY ATHLETES
            </h1>
            <p className={`text-2xl md:text-4xl uppercase tracking-tight max-w-3xl leading-tight border-l-8 border-[#f20028] pl-6 ${utoBold.className}`}>
              GUTSY was founded on a simple truth: you shouldn&apos;t have to choose between your gains and your gut health.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Brutalist Layout */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-[10px] border-[#000000] bg-white shadow-[30px_30px_0px_0px_#000000]">
            <div className="lg:col-span-7 p-10 md:p-20 border-b-[10px] lg:border-b-0 lg:border-r-[10px] border-[#000000]">
              <h2 className={`text-6xl md:text-8xl mb-10 uppercase italic leading-none ${utoBlack.className}`}>
                Our Story
              </h2>
              <div className={`space-y-8 text-xl md:text-2xl font-bold leading-snug ${utoBold.className}`}>
                <p>
                  GUTSY started when our founder, an operator and athlete in Dubai, grew frustrated with the "trash" inside supplement bottles. Most powders are filled with junk that ruins your digestion while promising to fix your muscles.
                </p>
                <p className="bg-[#f20028] text-[#f3eee4] p-4 inline-block transform -rotate-1">
                  We set out to disrupt the clean protein lie.
                </p>
                <p>
                  We created a gut-friendly protein that actually works. Born in Dubai and formulated with Latvian precision, every batch of Vanilla Calm and Cacao Boost is built for those who treat their body like a high-performance machine.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 bg-[#ffb300] relative min-h-[400px] flex items-center justify-center overflow-hidden group">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                 <div className={`text-[180px] text-black absolute top-0 left-0 -rotate-90 origin-top-left ${utoBlack.className}`}>GUTSY</div>
              </div>
              <div className="relative z-10 w-48 h-48 md:w-72 md:h-72 bg-[#f3eee4] border-[10px] border-[#000000] flex items-center justify-center rotate-6 group-hover:rotate-0 transition-all duration-500 shadow-[20px_20px_0px_0px_#f20028]">
                <div className="relative w-32 h-32 md:w-56 md:h-56">
                  <Image
                    src="/images/gutsy-logomark.png"
                    alt="GUTSY Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Ticker Tape Style */}
      <section className="py-24 bg-[#000000] text-[#f3eee4]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className={`text-7xl md:text-[120px] uppercase leading-[0.8] tracking-tighter ${utoBlack.className}`}>
              GUTSY <br /> VALUES
            </h2>
            <div className="h-4 w-full md:w-1/3 bg-[#ffb300]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className={`${value.color} p-10 border-4 border-[#f3eee4] flex flex-col h-full shadow-[10px_10px_0px_0px_#f3eee4] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all cursor-crosshair`}>
                <h3 className={`text-3xl uppercase italic mb-8 leading-none border-b-2 border-[#f3eee4] pb-2 ${utoBlack.className}`}>
                  {value.title}
                </h3>
                <p className={`text-lg uppercase leading-tight italic ${utoBold.className}`}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Disruption */}
      <section className="py-32 md:py-48 bg-[#f20028] text-[#f3eee4] border-t-[12px] border-[#000000] relative overflow-hidden">
        {/* Background Decorative Scroll */}
        <div className={`absolute top-0 left-0 w-full h-full flex flex-col justify-around opacity-10 pointer-events-none whitespace-nowrap overflow-hidden select-none ${utoBlack.className}`}>
           <div className="text-[150px] italic">GUTSY GUTSY GUTSY GUTSY</div>
           <div className="text-[150px] italic ml-48">VANILLA CALM CACAO BOOST</div>
           <div className="text-[150px] italic -ml-24">GUTSY GUTSY GUTSY GUTSY</div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className={`text-6xl md:text-[130px] uppercase leading-[0.8] mb-16 drop-shadow-[10px_10px_0px_#000000] ${utoBlack.className}`}>
            JOIN THE <br /> MOVEMENT.
          </h2>
          <Link href="/products">
            <Button
              className={`h-28 px-20 text-4xl uppercase bg-[#000000] text-[#f3eee4] border-[6px] border-[#f3eee4] rounded-none hover:bg-[#ffb300] hover:text-[#000000] transition-all shadow-[15px_15px_0px_0px_#f3eee4] active:translate-x-2 active:translate-y-2 active:shadow-none ${utoBlack.className}`}
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
