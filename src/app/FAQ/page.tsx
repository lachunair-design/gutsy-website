'use client';

import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
// FIX: Added missing icons to satisfy the build error in the science page
import { ChevronDown, Plus, Beaker, ShieldCheck } from 'lucide-react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const sections = [
  {
    title: "...OUR PRODUCTS",
    faqs: [
      { id: 'use', question: 'How to use Gutsy?', answer: 'Mix one scoop (25g) with 250-300ml of water, milk, or whatever you like. Shake it up. Drink it. Each container has 30 servings with 20g of protein per scoop. Some people use it post-workout, some use it as breakfast, some just drink it when they need protein. There\'s no magic timing.' },
      { id: 'protein-count', question: 'How much protein per serving?', answer: '20g of complete protein per scoop. PDCAAS score of 1.0, which means your body can actually use all of it. No amino acid spiking, no nitrogen spiking. Just real, bioavailable protein.' },
      { id: 'packaging', question: 'Gutsy\'s packaging', answer: 'Comes in resealable pouches. Better for the planet than giant plastic tubs, easier to store in your kitchen. Each pouch contains 30 servings.' },
      { id: 'buying', question: 'Buying Gutsy', answer: 'Ships within the UAE. Subscribe and save 10% (185 AED becomes 166.50 AED per month, cancel anytime). One-time purchase is 185 AED. Free shipping over 150 AED.' }
    ]
  },
  {
    title: "...HEALTH & NUTRITION",
    faqs: [
      { id: 'ingredients', question: 'What\'s in Gutsy?', answer: 'Core ingredients: Hydrolyzed pea and rice protein, coconut milk powder, monk fruit extract, Actazin (kiwifruit extract for digestion), Himalayan salt. \n\nWhat makes each flavor different: Vanilla Calm has vanilla flavoring and reishi mushroom extract. Cacao Boost has cacao flavoring and maca root extract. \n\nNo gums, no fillers, no ingredients that require a chemistry degree.' },
      { id: 'actazin', question: 'What\'s Actazin?', answer: 'Kiwifruit extract that supports digestion. It\'s a natural enzyme that helps break down protein and keeps things moving smoothly. Science-backed, not wellness theater.' },
      { id: 'science', question: 'Why does it feel lighter?', answer: 'Because the protein is enzymatically pre-digested (hydrolyzed) before it gets to you. We break down the massive protein molecules so your stomach doesn\'t have to work as hard. That\'s why you skip the bloat and the "brick" feeling. It\'s actual chemistry doing the work upfront.' },
      { id: 'allergens', question: 'Any allergens?', answer: 'Contains coconut. Free from: dairy, gluten, soy, nuts (except coconut), eggs. Manufactured in a facility that may process other allergens.' }
    ]
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  // ... (useEffect for hash handling remains the same)

  return (
    <div className={cn("bg-white min-h-screen text-black selection:bg-[#ffb300]/30", utoMedium.className)}>
      
      {/* HERO: Aggressive GUTSY Typography */}
      <section className="pt-32 pb-20 border-b border-black">
        <div className="mx-auto max-w-7xl px-6">
          {/* FIX: Escaped apostrophe to satisfy ESLint error */}
          <h1 className={cn("text-7xl md:text-[160px] leading-[0.8] tracking-tighter uppercase", utoBlack.className)}>
            So you&apos;re <br /> wondering <br /> about...
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-12 border-t border-black">
            {sections.map((section) => (
              <button
                key={section.title}
                onClick={() => document.getElementById(section.title)?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-black text-white p-12 text-left hover:bg-[#f20028] transition-colors duration-300"
              >
                <span className={cn("text-xl md:text-2xl uppercase tracking-tighter", utoBold.className)}>
                  {section.title}
                </span>
              </button>
            ))}
            <div className="bg-black text-white p-12 hidden md:block opacity-20">
              <span className={cn("text-2xl uppercase", utoBold.className)}>...GUTSY</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      {sections.map((section) => (
        <section key={section.title} id={section.title} className="py-20 border-b border-black">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <h2 className={cn("text-5xl md:text-8xl leading-none uppercase sticky top-32", utoBlack.className)}>
                  {section.title}
                </h2>
              </div>

              <div className="lg:col-span-7">
                <div className="border-t border-black border-dashed">
                  {section.faqs.map((faq) => (
                    <div key={faq.id} id={faq.id} className="border-b border-black border-dashed scroll-mt-40">
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="flex w-full items-center justify-between py-6 text-left group"
                      >
                        <span className={cn("text-xl md:text-2xl tracking-tighter", utoBold.className)}>
                          {faq.question}
                        </span>
                        <Plus className={cn(
                          "w-6 h-6 transition-transform duration-300",
                          openId === faq.id ? "rotate-45 text-[#f20028]" : "text-black"
                        )} />
                      </button>

                      <div className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        openId === faq.id ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <div className="overflow-hidden">
                          <p className="text-lg md:text-xl leading-relaxed max-w-xl font-mono opacity-80 whitespace-pre-line">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FOOTER */}
      <section className="py-32 bg-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className={cn("text-6xl md:text-[120px] leading-[0.85] tracking-tighter uppercase mb-12", utoBlack.className)}>
            Still <br /> wondering <br /> about <br /> something?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className={cn("bg-black text-white px-12 py-6 text-2xl uppercase hover:bg-[#f20028] transition-all", utoBold.className)}>
              &apos;Ask us anything
            </button>
            <p className="text-left max-w-xs text-sm leading-tight italic opacity-60">
              *Yes we mean anything. Do you want to know what the team had for breakfast? Shoot us a message and we promise to get back to you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
