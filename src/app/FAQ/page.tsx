'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import localFont from 'next/font/local';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const sections = [
  {
    title: "THE GOODS",
    tagline: "how to actually consume this stuff.",
    faqs: [
      { 
        id: 'protein-enough', 
        question: 'Is 20–23g of protein actually enough?', 
        answer: 'Yes. It is a complete protein with a PDCAAS score of 1.0. That means your body can actually use every gram. We do not do amino acid spiking or any of the other industry tricks used to inflate numbers on a label. If you are a 120kg bodybuilder you might need two scoops. For the rest of us, one is plenty.' 
      },
      { 
        id: 'taste', 
        question: 'Does it taste like "plants"?', 
        answer: 'Most plant proteins taste like a dusty field. We used real cacao and natural vanilla and then we hydrolyzed the base. Pre‑breaking the protein does not just help your gut. It also removes the beany aftertaste that usually requires a mountain of stevia to hide. It tastes clean.' 
      },
      { 
        id: 'storage', 
        question: 'How do I store this?', 
        answer: 'In the pouch. Zip it shut. Keep it in a cool, dry place below 25°C, away from direct sunlight. Best used within 2 months after opening. Do not leave it in a hot car in Dubai unless you want to find out what happens to monk fruit at 50°C.' 
      }
    ]
  },
  {
    title: "THE LOGIC",
    tagline: "the part where we explain why it does not hurt.",
    faqs: [
      { 
        id: 'bloat', 
        question: 'Why do I feel bloated with other brands?', 
        answer: 'Because their molecules are clunky. Standard protein lands in your stomach in long, tangled chains. Your gut has to wrestle with them to break them apart. While it is wrestling, the protein ferments. Fermentation causes gas. Gas causes the parade float feeling. We do the work first so your stomach does not have to.' 
      },
      { 
        id: 'kiwifruit', 
        question: 'What is the deal with the Kiwifruit?', 
        answer: 'We use 600mg of Actazin in every serving. It is a clinical dose of New Zealand green kiwifruit. It contains an enzyme called actinidin. Think of it as a secondary digestive system that helps break down the protein and keeps your bathroom schedule more predictable. It is a tool, not a garnish.' 
      },
      { 
        id: 'ibs', 
        question: 'Is it safe for people with IBS?', 
        answer: 'We built this specifically because we could not find anything that did not wreck our own digestion. We removed the gums, the dairy, and the soy. Those are the big three triggers. However, everyone is different. If you have a specific medical condition you should talk to a doctor who knows your history.' 
      }
    ]
  },
  {
    title: "LOGISTICS & DELIVERY",
    tagline: "getting it from us to you.",
    faqs: [
      { 
        id: 'delivery-speed', 
        question: 'How fast is "fast" in Dubai?', 
        answer: 'If you order before noon, we usually try to get it to you by the next day. If you are in Abu Dhabi or the other Emirates, give us 48 to 72 hours. We move as fast as the couriers and the traffic allow.' 
      },
      { 
        id: 'international', 
        question: 'Do you ship internationally?', 
        answer: 'Right now we are focusing on the GCC. If you are in London or New York and you really want a bag, reach out to us. We will see if we can make it happen without the shipping cost exceeding the price of the protein.' 
      },
      { 
        id: 'subscription-swap', 
        question: 'Can I change my subscription flavor?', 
        answer: 'Yes. You can swap between Cacao Boost and Vanilla Calm every month. You can also pause or cancel without having to talk to a customer service rep who is trained to make you feel guilty.' 
      }
    ]
  },
  {
    title: "THE NO-LIST",
    tagline: "for the skeptics and the label-readers.",
    faqs: [
      { 
        id: 'xanthan', 
        question: 'Why no xanthan gum?', 
        answer: 'Gums make shakes feel thick and creamy. They are also basically industrial glue for your intestines. They cause bloating in a lot of people. We decided a slightly lighter texture was a fair trade for not feeling like you swallowed a balloon.' 
      },
      { 
        id: 'natural', 
        question: 'Is it really "natural"?', 
        answer: 'That word is legally meaningless. We prefer the word Transparent. We show you our lab tests for heavy metals and we tell you exactly what every ingredient does. If you find something in the bag that should not be there, tell us. We will be just as surprised as you.' 
      },
      { 
        id: 'hate-it', 
        question: 'What if I hate it?', 
        answer: 'If it does not leave you feeling light, or if the taste is not for you, tell us. We will give you your money back on your first bag. We are not interested in keeping your money if you are not into the product.' 
      }
    ]
  },
  {
    title: "THE ACCIDENTAL STUFF",
    tagline: "the origin story questions.",
    faqs: [
      { 
        id: 'formulas', 
        question: 'Why 47 formulas?', 
        answer: 'Because the first 46 were not good enough. Some tasted like chalk. Some still caused bloat. Some did not dissolve. We stayed in the lab until we found the one that actually worked. It was a long 8 months.' 
      },
      { 
        id: 'more-products', 
        question: 'Are you guys going to launch more products?', 
        answer: 'Maybe. But only if we find another category that is as clunky and broken as the protein industry. We are not interested in making me‑too supplements just to fill a shelf.' 
      }
    ]
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-b from-linen-light via-yellow to-linen-light min-h-screen text-black selection:bg-black selection:text-yellow pb-20">
      
      {/* ═══ HERO SECTION ═══ */}
      <section className="pt-40 pb-20 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-4xl">
              <h1 className={cn("text-7xl md:text-[140px] leading-brand-none tracking-tighter uppercase mb-6", utoBlack.className)}>
                Boring <br /> Answers.
              </h1>
              <p className={cn("text-3xl md:text-6xl text-black lowercase italic", runWild.className)}>
                everything you probably wanted to ask but were too tired to type.
              </p>
            </div>
            
            {/* Navigation Jump-links */}
            <div className="flex flex-col gap-2 text-right">
              <p className={cn("text-[10px] uppercase tracking-[0.4em] font-black opacity-30 mb-2", utoBold.className)}>Jump to a category</p>
              {sections.map((s) => (
                <button 
                  key={s.title}
                  onClick={() => document.getElementById(s.title)?.scrollIntoView({ behavior: 'smooth' })}
                  className={cn("text-sm md:text-lg uppercase hover:text-white transition-all text-left md:text-right font-black tracking-widest", utoBold.className)}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ SECTIONS ═══ */}
      {sections.map((section) => (
        <section key={section.title} id={section.title} className="py-16 md:py-20 border-b border-black/5 last:border-0 scroll-mt-32">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Sticky Sidebar */}
              <div className="lg:col-span-4">
                <div className="lg:sticky lg:top-40 space-y-4">
                  <h2 className={cn("text-4xl md:text-6xl leading-brand-none uppercase tracking-tighter", utoBlack.className)}>
                    {section.title}
                  </h2>
                  <p className={cn("text-xl md:text-3xl text-black/60 lowercase", runWild.className)}>
                    {section.tagline}
                  </p>
                </div>
              </div>

              {/* Accordion List */}
              <div className="lg:col-span-8">
                <div className="border-t border-black/10">
                  {section.faqs.map((faq) => (
                    <div key={faq.id} className="border-b border-black/10 transition-all hover:bg-white/10">
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="flex w-full items-center justify-between py-8 text-left group"
                      >
                        <span className={cn("text-xl md:text-3xl leading-tight tracking-tight max-w-[85%] font-bold uppercase", utoBold.className)}>
                          {faq.question}
                        </span>
                        <div className={cn(
                          "flex-shrink-0 w-12 h-12 rounded-full border-2 border-black flex items-center justify-center transition-all duration-500",
                          openId === faq.id ? "bg-black text-yellow" : "group-hover:bg-black group-hover:text-yellow"
                        )}>
                          <Plus className={cn("w-6 h-6 transition-transform duration-500", openId === faq.id && "rotate-45")} />
                        </div>
                      </button>

                      <div className={cn(
                        "grid transition-all duration-500 ease-in-out",
                        openId === faq.id ? "grid-rows-[1fr] pb-10 opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <div className="overflow-hidden">
                          <p className="text-lg md:text-2xl leading-relaxed text-black font-medium max-w-2xl opacity-80">
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

      {/* ═══ CTA SECTION ═══ */}
      <section className="mt-20 py-24 bg-black text-yellow rounded-brand-xl mx-4 md:mx-8 text-center relative overflow-hidden shadow-2xl">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-yellow/5 blur-3xl pointer-events-none" />
        
        <div className="mx-auto max-w-5xl px-8 relative z-10">
          <h2 className={cn("text-6xl md:text-[140px] leading-brand-none tracking-tighter uppercase mb-12", utoBlack.className)}>
            Still <br /> Need Help?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <Link href="/contact">
              <button className={cn("h-20 px-16 bg-yellow text-black rounded-full text-xl font-black uppercase tracking-widest hover:bg-white transition-brand-out shadow-xl", utoBold.className)}>
                Talk to a human
              </button>
            </Link>
            <p className="text-left max-w-xs text-sm font-bold opacity-60 leading-tight">
              Did not find your answer? Send us a message via WhatsApp or email and a human will get back to you between shakes.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER REWARD ═══ */}
      <div className="py-16 text-center">
        <p className={cn("text-[10px] uppercase tracking-[0.5em] font-black text-black/20", utoBold.className)}>
          You reached the bottom of the page. Go reward yourself with a shake.
        </p>
      </div>
    </div>
  );
}