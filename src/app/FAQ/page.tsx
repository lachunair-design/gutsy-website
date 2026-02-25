'use client';

import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
// FIX: Added missing icons for build stability
import { Plus, Beaker, ShieldCheck } from 'lucide-react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const sections = [
  {
    title: "...OUR PRODUCTS",
    faqs: [
      { id: 'use', question: 'How to use Gutsy?', answer: 'Mix one scoop (25g) with 250-300ml of water, milk, or whatever you like. Shake it up. Drink it. Each container has 30 servings with 20g of protein per scoop.' },
      { id: 'protein-count', question: 'How much protein per serving?', answer: '20g of complete protein per scoop. PDCAAS score of 1.0, which means your body can actually use all of it. Just real, bioavailable protein.' },
      { id: 'packaging', question: 'Gutsy&apos;s packaging', answer: 'Comes in resealable pouches. Better for the planet than giant plastic tubs, easier to store in your kitchen. Each pouch contains 30 servings.' },
      { id: 'buying', question: 'Buying Gutsy', answer: 'Ships within the UAE. Subscribe and save 10% (185 AED becomes 166.50 AED per month, cancel anytime). One-time purchase is 185 AED. Free shipping over 150 AED.' }
    ]
  },
  {
    title: "...HEALTH & NUTRITION",
    faqs: [
      { id: 'ingredients', question: 'What&apos;s in Gutsy?', answer: 'Core ingredients: Hydrolyzed pea and rice protein, coconut milk powder, monk fruit extract, Actazin (kiwifruit extract for digestion), Himalayan salt.' },
      { id: 'actazin', question: 'What&apos;s Actazin?', answer: 'Kiwifruit extract that supports digestion. It&apos;s a natural enzyme that helps break down protein and keeps things moving smoothly.' },
      { id: 'science', question: 'Why does it feel lighter?', answer: 'Because the protein is enzymatically pre-digested (hydrolyzed) before it gets to you. We break down the massive protein molecules so your stomach doesn&apos;t have to work as hard.' }
    ]
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#f20028]/10", utoMedium.className)}>
      
      {/* SOFTENED HERO SECTION */}
      <section className="pt-40 pb-24 border-b border-black/10">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-4xl">
            {/* FIX: Escaped apostrophe for build */}
            <h1 className={cn("text-5xl md:text-8xl leading-[1.1] tracking-tighter uppercase", utoBlack.className)}>
              So you&apos;re <br /> wondering <br /> about...
            </h1>
            
            <div className="flex flex-wrap gap-4 mt-12">
              {sections.map((section) => (
                <button
                  key={section.title}
                  onClick={() => document.getElementById(section.title)?.scrollIntoView({ behavior: 'smooth' })}
                  className={cn("px-8 py-4 bg-black text-[#f3eee4] hover:bg-[#f20028] transition-all rounded-full uppercase text-sm tracking-widest", utoBold.className)}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFINED CONTENT SECTIONS */}
      {sections.map((section) => (
        <section key={section.title} id={section.title} className="py-24 border-b border-black/5">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              {/* Left Column: Title with fixed scale */}
              <div className="lg:col-span-5">
                <h2 className={cn("text-4xl md:text-6xl leading-[1.1] uppercase sticky top-32", utoBlack.className)}>
                  {section.title}
                </h2>
              </div>

              {/* Right Column: Clean, Breathable Accordions */}
              <div className="lg:col-span-7">
                <div className="border-t border-black/10 border-dashed">
                  {section.faqs.map((faq) => (
                    <div key={faq.id} id={faq.id} className="border-b border-black/10 border-dashed scroll-mt-40">
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="flex w-full items-center justify-between py-8 text-left group"
                      >
                        <span className={cn("text-xl md:text-2xl tracking-tight leading-tight", utoBold.className)}>
                          {faq.question}
                        </span>
                        <div className={cn("flex-shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all", openId === faq.id && "bg-[#f20028] border-[#f20028]")}>
                            <Plus className={cn("w-4 h-4 transition-transform duration-300", openId === faq.id ? "rotate-45 text-white" : "text-black")} />
                        </div>
                      </button>

                      <div className={cn("grid transition-all duration-300 ease-in-out", openId === faq.id ? "grid-rows-[1fr] pb-10 opacity-100" : "grid-rows-[0fr] opacity-0")}>
                        <div className="overflow-hidden">
                          <p className="text-lg md:text-xl leading-relaxed text-black/70 max-w-xl">
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

      {/* SOFTENED FOOTER */}
      <section className="py-32 text-center bg-black text-[#f3eee4]">
        <div className="mx-auto max-w-4xl px-8">
          <h2 className={cn("text-5xl md:text-8xl leading-[1] tracking-tighter uppercase mb-12", utoBlack.className)}>
            Still <br /> wondering <br /> about <br /> something?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <button className={cn("bg-[#f20028] text-white px-12 py-6 rounded-full text-xl uppercase hover:scale-105 transition-all", utoBold.className)}>
              &apos;Ask us anything
            </button>
            <p className="text-left max-w-xs text-sm leading-relaxed opacity-60 italic">
              *Yes we mean anything. Do you want to know what the team had for breakfast? Shoot us a message.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
