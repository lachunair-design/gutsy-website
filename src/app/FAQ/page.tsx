'use client';

import { useState, useEffect } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

// Initialize fonts with the 3-level path for capitalized folder structure
const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const faqs = [
  {
    id: 'use',
    question: 'How to use GUTSY?',
    answer: 'Mix one scoop with 250-300ml of water, milk, or whatever you like. Shake it up. Drink it. That&apos;s it. Some people use it post-workout, some use it as breakfast, some just drink it when they need protein. There&apos;s no magic timing.',
  },
  {
    id: 'ingredients',
    question: 'What&apos;s in GUTSY?',
    answer: 'Five ingredients: enzymatically pre-digested pea and rice protein, Actazin kiwifruit extract, either reishi mushroom (Vanilla Calm) or maca root (Cacao Boost), stevia, and natural flavors. No gums, no fillers, no stuff you need a PhD to understand.',
  },
  {
    id: 'science',
    question: 'Why does it feel lighter than other proteins?',
    answer: 'Because the protein is enzymatically pre-digested before it gets to you. Basically we break down the protein molecules so your stomach doesn&apos;t have to work as hard. That&apos;s why you skip the bloat and the brick feeling. It&apos;s not marketing speak, it&apos;s actual chemistry doing the work upfront.',
  },
  {
    id: 'shipping',
    question: 'Shipping & Delivery Info',
    answer: 'We currently ship within the UAE. Orders are processed within 1-2 business days. Shipping is FREE for orders over 150 AED. Expect your delivery within 2-3 business days in major cities like Dubai and Abu Dhabi.',
  },
  {
    id: 'returns',
    question: 'Returns & Refunds',
    answer: 'If you tried it and hate it, email us within 30 days. We want you to be happy, not bloated. If your package arrives damaged, take a photo and send it to hello@eatgutsy.com and we&apos;ll swap it out immediately.',
  },
  {
    id: 'legal',
    question: 'Privacy & Legal Info',
    answer: 'We value your privacy. We only use cookies to make your shopping experience better (like remembering your cart). We never sell your data. Your payment info is handled securely via our encrypted payment partners.',
  },
  {
    id: 'vegan',
    question: 'Is GUTSY vegan?',
    answer: 'Yes. 100% Plant-based. Pea and rice protein, kiwifruit extract, mushroom or maca, stevia, natural flavors. Nothing from animals.',
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Auto-open section if URL hash matches (e.g., /FAQ#shipping)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      const index = faqs.findIndex(f => f.id === hash);
      if (index !== -1) {
        setOpenIndex(index);
        // Optional: smooth scroll to the element
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-[#000000] selection:bg-[#ffb300]", utoMedium.className)}>
      
      {/* Hero Section */}
      <section className="bg-[#000000] text-[#f3eee4] pt-44 pb-20 border-b-[10px] border-[#f20028]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className={cn("text-6xl md:text-8xl uppercase leading-none tracking-tighter mb-4", utoBlack.className)}>
              Got <br /> Questions?
            </h1>
            <p className={cn("text-4xl lowercase leading-none text-[#ffb300]", runWild.className)}>
              Everything you need to know about the protein that actually feels light.
            </p>
          </div>
        </div>
      </section>

      {/* Main Accordion Content */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    id={faq.id}
                    className={cn(
                      "border-b-4 border-black transition-all duration-300 scroll-mt-40",
                      openIndex === index ? "bg-white p-8 -mx-4 rounded-[2rem] shadow-[8px_8px_0px_0px_#000000]" : "bg-transparent pb-6"
                    )}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="flex w-full items-center justify-between text-left group"
                    >
                      <span className={cn(
                        "text-2xl md:text-4xl uppercase leading-tight transition-colors group-hover:text-[#f20028]",
                        utoBlack.className,
                        openIndex === index ? "text-[#f20028]" : "text-black"
                      )}>
                        {faq.question}
                      </span>
                      <ChevronDown className={cn(
                        "w-8 h-8 transition-transform duration-300",
                        openIndex === index ? "rotate-180 text-[#f20028]" : "text-black"
                      )} />
                    </button>
                    
                    <div className={cn(
                      "grid transition-all duration-300 ease-in-out",
                      openIndex === index ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}>
                      <div className="overflow-hidden">
                        <div className={cn("text-3xl md:text-4xl leading-none lowercase text-black/80", runWild.className)}>
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar Contact Card */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[#f20028] p-10 rounded-[2rem] border-4 border-black shadow-[10px_10px_0px_0px_#000000] text-[#f3eee4]">
                  <h2 className={cn("text-3xl uppercase mb-6 leading-none", utoBlack.className)}>
                    Contacting GUTSY
                  </h2>
                  <p className={cn("text-3xl lowercase leading-tight mb-8 text-black", runWild.className)}>
                    We&apos;re a small team so we&apos;ll get back to you within 24-48 hours.
                  </p>
                  <a 
                    href="mailto:hello@eatgutsy.com"
                    className={cn("inline-block w-full py-4 bg-white text-black border-2 border-black text-center text-xl uppercase rounded-full shadow-[4px_4px_0px_0px_#000000] hover:bg-[#ffb300] transition-all", utoBold.className)}
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
