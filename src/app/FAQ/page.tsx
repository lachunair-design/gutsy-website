'use client';

import { useState } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

// Initialize the custom fonts with relative paths for Vercel stability
const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const faqs = [
  {
    question: 'How to use GUTSY?',
    answer: 'Mix one scoop with 250-300ml of water, milk, or whatever you like. Shake it up. Drink it. That\'s it. Some people use it post-workout, some use it as breakfast, some just drink it when they need protein. There\'s no magic timing.',
  },
  {
    question: 'What\'s in GUTSY?',
    answer: 'Five ingredients: enzymatically pre-digested pea and rice protein, Actazin kiwifruit extract, either reishi mushroom (Vanilla Calm) or maca root (Cacao Boost), stevia, and natural flavors. No gums, no fillers, no stuff you need a PhD to understand. Everything\'s there for a reason and we\'ll tell you what that reason is.',
  },
  {
    question: 'Why does it feel lighter than other proteins?',
    answer: 'Because the protein is enzymatically pre-digested before it gets to you. Basically we break down the protein molecules so your stomach doesn\'t have to work as hard. That\'s why you skip the bloat and the brick feeling. It\'s not marketing speak, it\'s actual chemistry doing the work upfront.',
  },
  {
    question: 'GUTSY\'s Packaging',
    answer: 'Comes in a pouch because it works and it\'s better for the planet than a giant plastic tub. We\'re working on making it even better. If you\'ve got opinions about packaging, we want to hear them.',
  },
  {
    question: 'Buying GUTSY',
    answer: 'Right now we ship within the UAE. More locations coming soon. Subscribe and save 10%, or buy one-off. Free shipping over 150 AED. If you want to cancel your subscription, you can do it yourself in your account. No calling customer service and begging.',
  },
  {
    question: 'Shipping & Returns',
    answer: 'Ships within 2-3 business days in the UAE. If something arrives damaged or wrong, email us and we\'ll sort it. If you tried it and hate it, email us within 30 days and we\'ll figure it out. We\'re not going to make you jump through hoops.',
  },
  {
    question: 'Is GUTSY vegan?',
    answer: 'Yes. Pea and rice protein, kiwifruit extract, mushroom or maca, stevia, natural flavors. Nothing from animals.',
  },
  {
    question: 'Will this work for me?',
    answer: 'If regular protein powder makes you bloated, there\'s a good chance GUTSY will feel different. If you have serious digestive issues, talk to your doctor first. We\'re not doctors, we just made protein that doesn\'t make you feel terrible.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-[#000000] selection:bg-[#ffb300]", utoMedium.className)}>
      
      {/* Hero Section - Connected to Header spacing */}
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

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "border-b-4 border-black transition-all duration-300",
                      openIndex === index ? "bg-white p-8 -mx-4 rounded-[2rem] shadow-[8px_8px_0px_0px_#000000]" : "bg-transparent pb-6"
                    )}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
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
                    
                    {/* ACCORDION CONTENT */}
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

            {/* SIDEBAR - Connected to Contact link intent */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                <div className="bg-[#f20028] p-10 rounded-[2rem] border-4 border-black shadow-[10px_10px_0px_0px_#000000] text-[#f3eee4]">
                  <h2 className={cn("text-3xl uppercase mb-6 leading-none", utoBlack.className)}>
                    Contacting GUTSY
                  </h2>
                  <p className={cn("text-3xl lowercase leading-tight mb-8 text-black", runWild.className)}>
                    We&apos;re a small team so we&apos;ll get back to you within 24-48 hours. Include your order number if it&apos;s relevant.
                  </p>
                  <a 
                    href="mailto:hello@eatgutsy.com"
                    className={cn("inline-block w-full py-4 bg-white text-black border-2 border-black text-center text-xl uppercase rounded-full shadow-[4px_4px_0px_0px_#000000] hover:bg-[#ffb300] transition-all", utoBold.className)}
                  >
                    Email Us
                  </a>
                  <p className="mt-4 text-center text-sm uppercase font-bold tracking-widest">
                    hello@eatgutsy.com
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
