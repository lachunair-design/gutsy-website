'use client';

import { useState } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { ChevronRight, FlaskConical, Beaker, ShieldCheck } from 'lucide-react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const facts = [
  { 
    num: "01", 
    title: "Your old protein powder wasn't the problem. Its formula was.", 
    content: "Most people who switched to GUTSY tell us the same thing: they thought bloating was just what protein powders do. Some lived with it for years. Some tried switching brands. Some gave up entirely and started eating sad, protein-free salads. What they didn't know is that the bloating isn't a side effect of protein. It's a side effect of large, intact protein molecules landing in your gut before your digestive system is ready for them." 
  },
  { 
    num: "02", 
    title: "What 'hydrolyzed' means. (It's simpler than it sounds.)", 
    content: "Think of a protein molecule like a very long necklace of beads. Standard protein gives your gut the whole necklace and says 'good luck.' Hydrolyzed protein gives your gut a handful of short chains, already broken apart. Your digestive system barely has to work. It's basically getting a cheat code." 
  },
  { 
    num: "03", 
    title: "Two plants. One complete protein. 23g per scoop.", 
    content: "Here's a myth worth killing: plant protein is 'incomplete.' Pea protein is low in methionine. Rice protein is low in lysine. Put them together and they cover every essential amino acid your body needs, achieving a PDCAAS score near 1—the same range as whey. Yes, really." 
  },
  { 
    num: "04", 
    title: "7 ingredients. Not 17. Not 27. Seven.", 
    content: "Turn over most tubs and start counting: Xanthan gum, guar gum, carrageenan, maltodextrin. The list is long because it's fixing problems created by cheap raw materials. GUTSY contains only what's necessary: Protein, Coconut Milk, Cacao/Vanilla, Maca/Reishi, Monk Fruit, Actazin®, and Himalayan Salt. That's it." 
  },
  { 
    num: "05", 
    title: "The kiwifruit ingredient doing more work than you'd expect.", 
    content: "Every serving contains 600mg of Actazin®, a standardized green kiwifruit powder. It's the clinically proven amount required to support bowel regularity. It swells to three times its volume in the colon, adding bulk and making things easier to pass. Gentle. Not laxative." 
  },
  { 
    num: "06", 
    title: "The kiwifruit also helps you actually absorb the protein.", 
    content: "Green kiwifruit contains actinidin, a proteolytic enzyme that actively breaks down dietary proteins. So while the protein arrives partially pre-digested, the actinidin continues the job in your stomach. Faster amino acid availability means faster recovery." 
  },
  { 
    num: "07", 
    title: "No added sugar. What you're actually tasting.", 
    content: "Sweetness comes from monk fruit extract—a zero-sugar, zero-glycemic fruit used for a thousand years. Total sugars are well under 1g per serving, naturally occurring from coconut milk. No stevia aftertaste, no sucralose, no chemical notes." 
  },
  { 
    num: "08", 
    title: "We tested for heavy metals. Here are the actual numbers.", 
    content: "Most brands hope you won't ask. We publish. Our results sit roughly 100x below EU limits for lead and 15x below for cadmium. If you put this in your body daily, you deserve to see the COA.",
    hasTable: "metals"
  },
  { 
    num: "09", 
    title: "Every batch is tested before it ships. No exceptions.", 
    content: "Our facility is GMP-certified—pharmaceutical quality framework. We test for Salmonella, Listeria, E. coli, and verify nutritional composition against the label. The reports exist. If you want to see them, email us. We like the nerdy ones." 
  },
  { 
    num: "10", 
    title: "8 months. 47 formulas. One product.", 
    content: "GUTSY was built because the founder couldn't find a powder that didn't make her feel wrecked. We adjusted hydrolysis methods and botanical ratios until beta testers started using the words 'super light' without being prompted. This is built on 47 failures and one stubborn question." 
  },
  { 
    num: "11", 
    title: "133 to 137 calories. Where they go.", 
    content: "No empty calories, no filler carbs. 23g of protein for 133-137 kcal is a ratio that usually makes people do a double-take.",
    hasTable: "macros"
  },
  { 
    num: "12", 
    title: "100% vegan. And everything that actually means.", 
    content: "No whey hiding in a 'blend.' No casein in the flavoring. Removing dairy removes a common trigger for digestive discomfort, even for those who aren't strictly lactose intolerant. The same logic applies to soy. Not in GUTSY. Not ever." 
  },
  { 
    num: "13", 
    title: "The glycaemic load is low.", 
    content: "With under 1g of sugar and fiber from Actazin®, there is no spike and no crash. Just protein doing what protein is supposed to do without the fog of a sugar-laden formula." 
  },
  { 
    num: "14", 
    title: "No additives. Why that's harder than it sounds.", 
    content: "GUTSY has no emulsifiers or thickeners. We skipped them because a better raw ingredient creates fewer problems to fix. Pre-digested protein is naturally more soluble; it didn't need to be rescued by xanthan gum." 
  },
  { 
    num: "15", 
    title: "It's not just a shake.", 
    content: "Beyond 300ml of water, GUTSY works in oats, pancakes, and smoothies. Vanilla Calm holds up in warm lattes without going 'gluey' because of the absence of gums. It's designed so you can go about your life without waiting for your gut to catch up." 
  },
  { 
    num: "16", 
    title: "Plant protein has a lower climate footprint.", 
    content: "Peas and rice require significantly less land and water than animal sources. Peas are nitrogen-fixing—they replenish soil. While we haven't commissioned a specific LCA yet, the category-wide data is clear. When we have our own numbers, we'll publish them. Because that's what you do when you're serious." 
  }
];

export default function SciencePage() {
  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#f20028]/10", utoMedium.className)}>
      
      {/* HERO SECTION */}
      <section className="bg-black text-[#f3eee4] pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className={cn("text-6xl md:text-[140px] leading-[0.8] tracking-tighter mb-6", utoBlack.className)}>
              Actual <br /> Chemistry.
            </h1>
            <p className={cn("text-3xl md:text-5xl text-[#ffb300] lowercase italic opacity-90", runWild.className)}>
              16 facts about gutsy and nutrition—minus the wellness theater.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none border-[0.5px] border-[#f3eee4]/20 grid grid-cols-6 lg:grid-cols-12" />
      </section>

      {/* INTRO */}
      <section className="py-20 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl leading-relaxed text-black/80 italic">
              Everything on this page is backed by third-party lab testing, supplier clinical data, and ingredient science. We wrote it so you don&apos;t have to wade through a 60-page COA. <span className="text-[#f20028]">You&apos;re welcome.</span>
            </p>
          </div>
        </div>
      </section>

      {/* DYNAMIC LIST OF 16 FACTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="space-y-40">
            {facts.map((fact) => (
              <div key={fact.num} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <span className={cn("lg:col-span-2 text-6xl md:text-8xl text-[#f20028] opacity-20", utoBlack.className)}>{fact.num}</span>
                <div className="lg:col-span-10">
                  <div className="max-w-3xl">
                    <h2 className={cn("text-3xl md:text-5xl mb-8 leading-tight", utoBold.className)}>
                      {fact.title}
                    </h2>
                    <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-12">
                      {fact.content}
                    </p>
                  </div>

                  {/* Fact 08: Metals Table */}
                  {fact.hasTable === "metals" && (
                    <div className="mt-8 bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-black/5">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b-2 border-black uppercase text-xs tracking-widest">
                            <th className="py-4">Metal</th>
                            <th className="py-4">Cacao Boost</th>
                            <th className="py-4">Vanilla Calm</th>
                          </tr>
                        </thead>
                        <tbody className={cn("text-lg md:text-xl", utoMedium.className)}>
                          <tr className="border-b border-black/5"><td className="py-4">Lead (Pb)</td><td className="py-4">0.020 mg/kg</td><td className="py-4 text-[#f20028]">0.028 mg/kg</td></tr>
                          <tr className="border-b border-black/5"><td className="py-4">Arsenic (As)</td><td className="py-4">0.029 mg/kg</td><td className="py-4">0.035 mg/kg</td></tr>
                          <tr className="border-b border-black/5"><td className="py-4">Cadmium (Cd)</td><td className="py-4">0.068 mg/kg</td><td className="py-4">0.064 mg/kg</td></tr>
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Fact 11: Macros Table */}
                  {fact.hasTable === "macros" && (
                    <div className="mt-8 bg-black text-[#f3eee4] rounded-[40px] p-8 md:p-12 shadow-xl">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div><p className="opacity-50 text-xs uppercase mb-2">Protein</p><p className="text-4xl">23g</p></div>
                        <div><p className="opacity-50 text-xs uppercase mb-2">Sugars</p><p className="text-4xl">&lt;1g</p></div>
                        <div><p className="opacity-50 text-xs uppercase mb-2">Vanilla</p><p className="text-4xl">133kcal</p></div>
                        <div><p className="opacity-50 text-xs uppercase mb-2">Cacao</p><p className="text-4xl">137kcal</p></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUN FACTS SECTION (Keep Fashionable) */}
      <section className="py-24 bg-[#ffb300] text-black">
        <div className="mx-auto max-w-7xl px-8">
            <h2 className={cn("text-5xl md:text-7xl mb-16 tracking-tighter", utoBlack.className)}>The Science <span className={cn("text-3xl md:text-4xl text-black/60 block", runWild.className)}>(but make it fashion)</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Sample items from your Fun Facts carousel */}
                <div className="bg-white/40 p-6 rounded-2xl border border-black/5">
                    <p className={cn("text-xl mb-2", utoBold.className)}>Smart Guts</p>
                    <p className="text-sm">Your gut has 500 million neurons. It&apos;s a second brain that&apos;s much pickier about what it drinks.</p>
                </div>
                <div className="bg-white/40 p-6 rounded-2xl border border-black/5">
                    <p className={cn("text-xl mb-2", utoBold.className)}>Acid Trip</p>
                    <p className="text-sm">Your stomach produces 2L of hydrochloric acid daily. Gutsy is designed to stay on its good side.</p>
                </div>
                <div className="bg-white/40 p-6 rounded-2xl border border-black/5">
                    <p className={cn("text-xl mb-2", utoBold.className)}>The Red Factory</p>
                    <p className="text-sm">Your body builds 2 million red blood cells every second. Every one of them is made of protein.</p>
                </div>
                <div className="bg-white/40 p-6 rounded-2xl border border-black/5">
                    <p className={cn("text-xl mb-2", utoBold.className)}>Pea-nomenal</p>
                    <p className="text-sm">Peas are technically legumes, not vegetables. This is useless info that will now live in your head forever.</p>
                </div>
            </div>
        </div>
      </section>

      {/* SOURCES */}
      <section className="py-20 bg-black text-white/40">
        <div className="mx-auto max-w-7xl px-8 text-[10px] md:text-xs uppercase tracking-[0.2em]">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li>Actazin® clinical data: Anagenix Limited</li>
                <li>ZymeBase Inc.: Protein hydrolysis data</li>
                <li>J.S. Hamilton Baltic SIA: Test Reports Dec 2025</li>
                <li>FAO/WHO Protein Quality Evaluation 1991</li>
            </ul>
        </div>
      </section>
    </div>
  );
}
