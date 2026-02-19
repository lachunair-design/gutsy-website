'use client';

import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const faqs = [
  { id: 'use', question: 'How to use Gutsy?', answer: 'Mix one scoop (25g) with 250-300ml of water, milk, or whatever you like. Shake it up. Drink it. Each container has 30 servings with 20g of protein per scoop. Some people use it post-workout, some use it as breakfast, some just drink it when they need protein. There\'s no magic timing.' },
  { id: 'protein-count', question: 'How much protein per serving?', answer: '20g of complete protein per scoop. PDCAAS score of 1.0, which means your body can actually use all of it. No amino acid spiking, no nitrogen spiking. Just real, bioavailable protein.' },
  { id: 'ingredients', question: 'What\'s in Gutsy?', answer: 'Core ingredients: Hydrolyzed pea and rice protein, coconut milk powder, monk fruit extract, Actazin (kiwifruit extract for digestion), Himalayan salt. \n\nWhat makes each flavor different: Vanilla Calm has vanilla flavoring and reishi mushroom extract. Cacao Boost has cacao flavoring and maca root extract. \n\nNo gums, no fillers, no ingredients that require a chemistry degree.' },
  { id: 'actazin', question: 'What\'s Actazin?', answer: 'Kiwifruit extract that supports digestion. It\'s a natural enzyme that helps break down protein and keeps things moving smoothly. Science-backed, not wellness theater.' },
  { id: 'science', question: 'Why does it feel lighter?', answer: 'Because the protein is enzymatically pre-digested (hydrolyzed) before it gets to you. We break down the massive protein molecules so your stomach doesn\'t have to work as hard. That\'s why you skip the bloat and the "brick" feeling. It\'s actual chemistry doing the work upfront.' },
  { id: 'allergens', question: 'Any allergens?', answer: 'Contains coconut. Free from: dairy, gluten, soy, nuts (except coconut), eggs. Manufactured in a facility that may process other allergens.' },
  { id: 'packaging', question: 'Gutsy\'s packaging', answer: 'Comes in resealable pouches. Better for the planet than giant plastic tubs, easier to store in your kitchen. Each pouch contains 30 servings.' },
  { id: 'buying', question: 'Buying Gutsy', answer: 'Ships within the UAE. Subscribe and save 10% (185 AED becomes 166.50 AED per month, cancel anytime). One-time purchase is 185 AED. Free shipping over 150 AED.' }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const index = faqs.findIndex(f => f.id === hash);
      if (index !== -1) {
        setOpenIndex(index);
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#ffb300]/30 overflow-x-hidden", utoMedium.className)}>

      {/* COMPACT HERO: Seamless transition */}
      <section className="bg-black text-[#f3eee4] pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-4xl">
            <h1 className={cn("text-6xl md:text-[120px] leading-[0.85] tracking-tighter mb-4", utoBlack.className)}>
              Got <br /> questions?
            </h1>
            <p className={cn("text-3xl md:text-5xl text-[#ffb300] lowercase italic opacity-90", runWild.className)}>
              everything you need to know about the protein that actually feels light.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: Editorial list layout */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            <div className="lg:col-span-8">
              <div className="divide-y divide-black/5">
                {faqs.map((faq, index) => (
                  <div key={index} id={faq.id} className="py-8 scroll-mt-32 group">
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="flex w-full items-center justify-between text-left transition-all duration-300"
                    >
                      <span className={cn(
                        "text-2xl md:text-4xl leading-none tracking-tight transition-colors",
                        utoBold.className,
                        openIndex === index ? "text-[#f20028]" : "text-black group-hover:text-[#f20028]"
                      )}>
                        {faq.question}
                      </span>
                      <ChevronDown className={cn(
                        "w-6 h-6 md:w-8 md:h-8 transition-transform duration-500",
                        openIndex === index ? "rotate-180 text-[#f20028]" : "text-black/20"
                      )} />
                    </button>

                    <div className={cn(
                      "grid transition-all duration-500 ease-in-out",
                      openIndex === index ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}>
                      <div className="overflow-hidden">
                        <div className="text-lg md:text-xl leading-relaxed text-black/70 max-w-2xl">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SIDEBAR: Compacted and clean */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl border border-black/5">
                  <h2 className={cn("text-3xl text-black mb-4 leading-none", utoBlack.className)}>
                    Contact us
                  </h2>
                  <p className={cn("text-2xl text-[#f20028] lowercase mb-8", runWild.className)}>
                    real humans, real answers. we&apos;ll get back within 24-48 hours.
                  </p>
                  <a
                    href="mailto:hello@eatgutsy.com"
                    className={cn("inline-flex items-center justify-center w-full h-14 bg-black text-[#f3eee4] rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:bg-[#f20028] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300", utoBold.className)}
                  >
                    Email us
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
