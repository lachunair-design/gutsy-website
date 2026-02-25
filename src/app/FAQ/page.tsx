'use client';

import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Plus, Beaker, ShieldCheck, MessageCircle } from 'lucide-react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const sections = [
  {
    title: "...OUR PRODUCTS",
    tagline: "the logistics of feeling light.",
    faqs: [
      { id: 'use', question: 'How to use Gutsy?', answer: 'Mix one scoop (25g) with 250-300ml of water, milk, or whatever you like. Shake it up. Drink it. Each container has 30 servings with 20g of protein per scoop. There\'s no magic timing.' },
      { id: 'protein-count', question: 'How much protein per serving?', answer: '20g of complete protein per scoop. PDCAAS score of 1.0, which means your body can actually use all of it. No amino acid spiking, no nitrogen spiking. Just real, bioavailable protein.' },
      { id: 'packaging', question: 'Gutsy\'s packaging', answer: 'Comes in resealable pouches. Better for the planet than giant plastic tubs, easier to store in your kitchen. Each pouch contains 30 servings.' }
    ]
  },
  {
    title: "...HEALTH & NUTRITION",
    tagline: "science-backed, not wellness theater.",
    faqs: [
      { id: 'ingredients', question: 'What\'s in Gutsy?', answer: 'Core ingredients: Hydrolyzed pea and rice protein, coconut milk powder, monk fruit extract, Actazin (kiwifruit extract for digestion), Himalayan salt. \n\nNo gums, no fillers, no ingredients that require a chemistry degree.' },
      { id: 'actazin', question: 'What\'s Actazin?', answer: 'Kiwifruit extract that supports digestion. It\'s a natural enzyme that helps break down protein and keeps things moving smoothly.' },
      { id: 'science', question: 'Why does it feel lighter?', answer: 'Because the protein is enzymatically pre-digested (hydrolyzed) before it gets to you. We break down the massive protein molecules so your stomach doesn\'t have to work as hard.' }
    ]
  },
  {
    title: "...SHIPPING & DELIVERY",
    tagline: "getting gutsy to your door.",
    faqs: [
      { id: 'delivery-areas', question: 'Where do you deliver?', answer: 'We currently ship across the UAE, including Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah. If you’re in a particularly remote area, get in touch and we’ll see what we can do.' },
      { id: 'delivery-timing', question: 'How long does it take?', answer: 'Standard delivery takes 24-48 hours within Dubai and Abu Dhabi. For other Emirates, please allow up to 72 hours. We don\'t like waiting for our protein either, so we move fast.' },
      { id: 'shipping-cost', question: 'What about shipping costs?', answer: 'Shipping is free for all orders over 150 AED. For orders below that, a flat fee of 15 AED applies.' }
    ]
  },
  {
    title: "...SUBS & RETURNS",
    tagline: "commitment on your terms.",
    faqs: [
      { id: 'subscriptions', question: 'How do subscriptions work?', answer: 'Subscribe and save 10% on every order (185 AED becomes 166.50 AED). You can choose your frequency, swap flavors, or cancel anytime through your dashboard. No "gotchas" here.' },
      { id: 'returns', question: 'What is your return policy?', answer: 'If your order arrives damaged or there’s an issue with the product, let us know within 14 days and we’ll make it right. Due to the nature of food products, we can’t accept returns of opened pouches if you just changed your mind.' },
      { id: 'modifications', question: 'Can I change my next order?', answer: 'Yes. You can delay a shipment or change your flavor up to 48 hours before your next renewal date via your account settings.' }
    ]
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#f20028]/10 pb-20", utoMedium.className)}>
      
      {/* REFINED HERO */}
      <section className="pt-48 pb-32 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-4xl">
              <h1 className={cn("text-6xl md:text-[130px] leading-[0.85] tracking-tighter uppercase mb-8", utoBlack.className)}>
                Random <br /> Answers.
              </h1>
              <p className={cn("text-3xl md:text-5xl text-[#f20028] lowercase italic", runWild.className)}>
                everything you need to know about the protein that actually feels light.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 text-right">
              <p className={cn("text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2", utoBold.className)}>Navigate by category</p>
              {sections.map((s) => (
                <button 
                  key={s.title}
                  onClick={() => document.getElementById(s.title)?.scrollIntoView({ behavior: 'smooth' })}
                  className={cn("text-xl md:text-2xl uppercase hover:text-[#f20028] transition-colors text-left md:text-right", utoBold.className)}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL CONTENT SECTIONS */}
      {sections.map((section) => (
        <section key={section.title} id={section.title} className="py-32 border-b border-black/5 last:border-0">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              
              <div className="lg:col-span-4">
                <div className="sticky top-40 space-y-4">
                  <h2 className={cn("text-5xl md:text-7xl leading-none uppercase tracking-tighter", utoBlack.className)}>
                    {section.title}
                  </h2>
                  <p className={cn("text-2xl md:text-3xl text-[#f20028] lowercase", runWild.className)}>
                    {section.tagline}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="border-t border-black/10">
                  {section.faqs.map((faq) => (
                    <div key={faq.id} id={faq.id} className="border-b border-black/10 scroll-mt-48 transition-all hover:bg-black/[0.02]">
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="flex w-full items-center justify-between py-10 text-left group"
                      >
                        <span className={cn("text-2xl md:text-4xl leading-[0.9] tracking-tight max-w-[85%]", utoBold.className)}>
                          {faq.question}
                        </span>
                        <div className={cn(
                          "flex-shrink-0 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500",
                          openId === faq.id ? "bg-black text-white" : "group-hover:border-black"
                        )}>
                          <Plus className={cn("w-6 h-6 transition-transform duration-500", openId === faq.id && "rotate-45")} />
                        </div>
                      </button>

                      <div className={cn(
                        "grid transition-all duration-500 ease-in-out",
                        openId === faq.id ? "grid-rows-[1fr] pb-12 opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <div className="overflow-hidden">
                          <p className="text-xl md:text-2xl leading-relaxed text-black/60 max-w-2xl whitespace-pre-line">
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

      {/* SIGNATURE FOOTER */}
      <section className="mt-20 py-40 bg-black text-[#f3eee4] rounded-[60px] mx-4 md:mx-8 text-center overflow-hidden relative">
        <div className="mx-auto max-w-5xl px-8 relative z-10">
          <MessageCircle className="w-12 h-12 mx-auto mb-10 text-[#f20028]" />
          <h2 className={cn("text-6xl md:text-[140px] leading-[0.8] tracking-tighter uppercase mb-16", utoBlack.className)}>
            Still <br /> wondering?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <button className={cn("h-20 px-16 bg-[#f20028] text-white rounded-full text-2xl uppercase hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#f20028]/20", utoBold.className)}>
              Ask us anything
            </button>
            <p className="text-left max-w-xs text-base leading-tight opacity-50 italic">
              *Yes, we mean anything. From protein chemistry to what we had for lunch. We&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
