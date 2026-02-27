'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
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
    <div className="bg-[#f3eee4] min-h-screen text-black selection:bg-red/10 pb-20">
      
      {/* THE OATLY-STYLE HERO */}
      <section className="pt-48 pb-32 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-4xl">
              <h1 className={cn("text-6xl md:text-[130px] leading-[0.85] tracking-tighter uppercase mb-8", utoBlack.className)}>
                Boring <br /> Answers.
              </h1>
              <p className={cn("text-3xl md:text-5xl text-[#f20028] lowercase italic", runWild.className)}>
                everything you probably wanted to ask but were too tired to type.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 text-right">
              <p className={cn("text-[10px] uppercase tracking-[0.3em] font-black opacity-30 mb-2", utoBold.className)}>Jump to a category</p>
              {sections.map((s) => (
                <button 
                  key={s.title}
                  onClick={() => document.getElementById(s.title)?.scrollIntoView({ behavior: 'smooth' })}
                  className={cn("text-lg md:text-xl uppercase hover:text-[#f20028] transition-colors text-left md:text-right font-bold", utoBold.className)}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      {sections.map((section) => (
        <section key={section.title} id={section.title} className="py-24 border-b border-black/5 last:border-0">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              
              <div className="lg:col-span-4">
                <div className="sticky top-40 space-y-4">
                  <h2 className={cn("text-5xl md:text-6xl leading-none uppercase tracking-tighter", utoBlack.className)}>
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
                    <div key={faq.id} className="border-b border-black/10 scroll-mt-48 transition-all hover:bg-black/[0.01]">
                      <button
                        onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                        className="flex w-full items-center justify-between py-10 text-left group"
                      >
                        <span className={cn("text-2xl md:text-3xl leading-tight tracking-tight max-w-[85%] font-bold uppercase", utoBold.className)}>
                          {faq.question}
                        </span>
                        <div className={cn(
                          "flex-shrink-0 w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500",
                          openId === faq.id ? "bg-black text-[#f3eee4]" : "group-hover:border-black"
                        )}>
                          <Plus className={cn("w-5 h-5 transition-transform duration-500", openId === faq.id && "rotate-45")} />
                        </div>
                      </button>

                      <div className={cn(
                        "grid transition-all duration-500 ease-in-out",
                        openId === faq.id ? "grid-rows-[1fr] pb-12 opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <div className="overflow-hidden">
                          <p className="text-xl md:text-2xl leading-relaxed text-black/60 max-w-2xl">
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

      {/* THE "STILL CONFUSED" SECTION */}
      <section className="mt-20 py-32 bg-black text-[#f3eee4] rounded-[60px] mx-4 md:mx-8 text-center relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-8 relative z-10">
          <h2 className={cn("text-6xl md:text-[120px] leading-[0.8] tracking-tighter uppercase mb-12", utoBlack.className)}>
            Still <br /> Need Help?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className={cn("h-20 px-16 bg-[#f20028] text-[#f3eee4] rounded-full text-xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all", utoBold.className)}>
              Talk to a human
            </button>
            <p className="text-left max-w-xs text-sm opacity-40 italic">
              Did not find your answer? Send us a message via WhatsApp or email and a human will get back to you between shakes.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL OATLY FOOTER REWARD */}
      <div className="py-12 text-center">
        <p className={cn("text-[10px] uppercase tracking-[0.5em] font-black text-black/20", utoBold.className)}>
          You reached the bottom of the page. Go reward yourself with a shake.
        </p>
      </div>
    </div>
  );
}