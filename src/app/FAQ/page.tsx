'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Plus, MessageCircle, ArrowRight } from 'lucide-react';

const sections = [
  {
    title: "...THE GOODS",
    tagline: "how to actually consume this stuff.",
    faqs: [
      { id: 'use', question: 'How do I use it?', answer: 'Mix one scoop with 300ml of water or whatever liquid you prefer. Shake it until it disappears. Drink it. There is no magical window of time where it works better, so just drink it whenever you remember you need protein.' },
      { id: 'protein-count', question: 'Is 20g actually enough?', answer: 'Yes. It is a complete protein with a PDCAAS score of 1.0. That means your body can actually use every gram. We don’t do amino acid spiking or any of that other weird stuff the industry uses to inflate numbers.' },
      { id: 'packaging', question: 'Why a pouch instead of a giant tub?', answer: 'Because giant plastic tubs are essentially empty space and bad for the planet. Our pouches are easier to store and don’t look like you’re trying to build a fortress of supplements in your kitchen.' }
    ]
  },
  {
    title: "...THE SCIENCE",
    tagline: "the part where we explain why it doesn’t hurt.",
    faqs: [
      { id: 'ingredients', question: 'What is actually inside?', answer: 'Seven things. Hydrolyzed pea and rice protein, coconut milk powder, monk fruit, Actazin kiwifruit extract, Himalayan salt. That is it. If we couldn’t pronounce it, we didn’t put it in.' },
      { id: 'actazin', question: 'What is Actazin?', answer: 'It is a premium kiwifruit extract from New Zealand. It contains a natural enzyme called actinidin that helps your stomach break down protein faster. It is basically the assist your gut needs to stay light.' },
      { id: 'science', question: 'Why is it pre-broken down?', answer: 'Because your stomach shouldn’t have to do 100% of the work. We use enzymes to snip the protein chains into tiny pieces before they hit the bag. It means less fermentation in your gut and zero bloat.' }
    ]
  },
  {
    title: "...THE ARRIVAL",
    tagline: "getting it from us to you.",
    faqs: [
      { id: 'delivery-areas', question: 'Where do you deliver?', answer: 'We ship across the UAE. Dubai, Abu Dhabi, Sharjah, the whole lot. If you live in the middle of a desert dunes reach out and we will see if we can find a camel that delivers.' },
      { id: 'delivery-timing', question: 'When will it get here?', answer: 'Usually 24 to 48 hours for Dubai and Abu Dhabi. Give us 72 hours for the other Emirates. We move as fast as the couriers allow.' },
      { id: 'shipping-cost', question: 'Is shipping free?', answer: 'It is free for all orders over 150 AED. If you spend less than that we charge a flat fee of 15 AED to cover the fuel.' }
    ]
  },
  {
    title: "...THE COMMITMENT",
    tagline: "subscriptions and changing your mind.",
    faqs: [
      { id: 'subscriptions', question: 'How do I cancel a subscription?', answer: 'You can cancel anytime through your dashboard. We don’t hide the cancel button behind a maze of phone calls. We want you to stay because you like the protein, not because you’re trapped.' },
      { id: 'returns', question: 'Can I return an open bag?', answer: 'We can’t take back food products once they are opened for obvious hygiene reasons. But if your bag arrives damaged or the courier sat on it, let us know and we will fix it immediately.' }
    ]
  }
];

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="bg-linen min-h-screen text-black selection:bg-red/10 pb-20 font-uto">
      
      {/* THE OATLY-STYLE HERO */}
      <section className="pt-48 pb-32 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-[130px] leading-[0.85] tracking-tighter uppercase mb-8 font-black">
                Boring <br /> Answers.
              </h1>
              <p className="text-3xl md:text-5xl text-red lowercase italic font-runwild">
                everything you probably wanted to ask but were too tired to type.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 text-right">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black opacity-30 mb-2">Jump to a category</p>
              {sections.map((s) => (
                <button 
                  key={s.title}
                  onClick={() => document.getElementById(s.title)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-lg md:text-xl uppercase hover:text-red transition-colors text-left md:text-right font-bold"
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
                  <h2 className="text-5xl md:text-6xl leading-none uppercase tracking-tighter font-black">
                    {section.title}
                  </h2>
                  <p className="text-2xl md:text-3xl text-red lowercase font-runwild">
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
                        <span className="text-2xl md:text-3xl leading-tight tracking-tight max-w-[85%] font-bold uppercase">
                          {faq.question}
                        </span>
                        <div className={cn(
                          "flex-shrink-0 w-10 h-10 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500",
                          openId === faq.id ? "bg-black text-linen" : "group-hover:border-black"
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
      <section className="mt-20 py-32 bg-black text-linen rounded-[60px] mx-4 md:mx-8 text-center relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-8 relative z-10">
          <h2 className="text-6xl md:text-[120px] leading-[0.8] tracking-tighter uppercase mb-12 font-black">
            Still <br /> Lost?
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="h-20 px-16 bg-red text-linen rounded-full text-xl font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all">
              Talk to a human
            </button>
            <p className="text-left max-w-xs text-sm opacity-40 italic">
              We answer everything. From molecular chemistry to why the sky is blue. Usually within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL OATLY FOOTER REWARD */}
      <div className="py-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] font-black text-black/20">
          You actually read the whole FAQ page. We are impressed. Go reward yourself with a shake.
        </p>
      </div>
    </div>
  );
}