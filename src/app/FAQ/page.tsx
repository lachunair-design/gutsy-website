'use client';

import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

// Initialize fonts with relative paths for build stability
const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const faqs = [
  {
    id: 'use',
    question: 'How to use GUTSY?',
    answer: 'Mix one scoop with 250-300ml of water, milk, or whatever you like. Shake it up. Drink it. That\'s it. Some people use it post-workout, some use it as breakfast, some just drink it when they need protein. There\'s no magic timing.',
  },
  {
    id: 'ingredients',
    question: 'What\'s in GUTSY?',
    answer: 'Five ingredients: enzymatically pre-digested pea and rice protein, Actazin kiwifruit extract, either reishi mushroom (Vanilla Calm) or maca root (Cacao Boost), stevia, and natural flavors. No gums, no fillers, no stuff you need a PhD to understand.',
  },
  {
    id: 'science',
    question: 'Why it feels lighter?',
    answer: 'Because the protein is enzymatically pre-digested before it gets to you. We break down the protein molecules so your stomach doesn\'t have to work as hard. That\'s why you skip the bloat and the brick feeling. It\'s actual chemistry doing the work upfront.',
  },
  {
    id: 'shipping',
    question: 'Shipping Info',
    answer: 'We currently ship within the UAE. Orders are processed within 1-2 business days. Shipping is FREE for orders over 150 AED. Expect delivery within 2-3 business days in major cities.',
  },
  {
    id: 'returns',
    question: 'Returns & Refunds',
    answer: 'If you tried it and hate it, email us within 30 days. We want you to be happy, not bloated. If your package arrives damaged, email hello@eatgutsy.com and we\'ll sort it.',
  },
  {
    id: 'legal',
    question: 'Privacy & Legal',
    answer: 'We value your privacy. We only use cookies to make your shopping experience better. We never sell your data. Your payment info is handled securely via encrypted partners.',
  },
  {
    id: 'vegan',
    question: 'Is GUTSY vegan?',
    answer: 'Yes. 100% Plant-based. Pea and rice protein, kiwifruit extract, mushroom or maca, stevia, natural flavors. Nothing from animals.',
  }
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
    <div className={cn("bg-[#f3eee4] min-h-screen text-[#000000] selection:bg-[#ffb300] overflow-x-hidden", utoMedium.className)}>
      
      {/* Hero Section - Optimized for Mobile Padding */}
      <section className="bg-[#000000] text-[#f3eee4] pt-32 md:pt-44 pb-16 md:pb-20 border-b-[6px] md:border-b-[10px] border-[#f20028]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className={cn("text-5xl md:text-8xl uppercase leading-none tracking-tighter mb-4", utoBlack.className)}>
              Got <br /> Questions?
            </h1>
            <p className={cn("text-3xl md:text-4xl lowercase leading-tight text-[#ffb300]", runWild.className)}>
              Everything you need to know about the protein that actually feels light.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            
            <div className="lg:col-span-8">
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    id={faq.id}
                    className={cn(
                      "border-b-4 border-black transition-all duration-300 scroll-mt-32",
                      openIndex === index ? "bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-[6px_6px_0px_0px_#000000] md:shadow-[10px_10px_0px_0px_#000000]" : "bg-transparent pb-6"
                    )}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="flex w-full items-center justify-between text-left group"
                    >
                      <span className={cn(
                        "text-xl md:text-3xl uppercase leading-tight transition-colors group-hover:text-[#f20028]",
                        utoBlack.className,
                        openIndex === index ? "text-[#f20028]" : "text-black"
                      )}>
                        {faq.question}
                      </span>
                      <ChevronDown className={cn(
                        "w-6 h-6 md:w-8 md:h-8 flex-shrink-0 transition-transform duration-300",
                        openIndex === index ? "rotate-180 text-[#f20028]" : "text-black"
                      )} />
                    </button>
                    
                    <div className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      openIndex === index ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}>
                      <div className="overflow-hidden">
                        {/* FIX: Switched to utoMedium for readability */}
                        <div className={cn("text-lg md:text-xl leading-relaxed text-black/90 pb-2", utoMedium.className)}>
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar - Mobile Stacked */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[#f20028] p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_#000000] text-[#f3eee4]">
                  <h2 className={cn("text-3xl uppercase mb-6 leading-none", utoBlack.className)}>
                    Contact Us
                  </h2>
                  <p className={cn("text-2xl md:text-3xl lowercase leading-tight mb-8 text-black", runWild.className)}>
                    real humans, real fast. we&apos;ll get back to you within 24 hours.
                  </p>
                  <a 
                    href="mailto:hello@eatgutsy.com"
                    className={cn("inline-block w-full py-4 bg-white text-black border-2 border-black text-center text-xl uppercase rounded-full shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all", utoBold.className)}
                  >
                    Email Us
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
