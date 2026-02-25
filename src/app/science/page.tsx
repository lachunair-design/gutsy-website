'use client';

import { useState, useEffect, useRef } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { Microscope, Zap, Activity, Info, Beaker, ShieldCheck, Thermometer } from 'lucide-react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const facts = [
  { num: "01", id: "formula", title: "Your old protein powder wasn't the problem. Its formula was.", content: "Most people who switched to GUTSY tell us the same thing: they thought bloating was just what protein powders do. Some lived with it for years. Some tried switching brands. Some gave up entirely and started eating sad, protein-free salads. What they didn't know is that the bloating isn't a side effect of protein. It's a side effect of large, intact protein molecules landing in your gut before your digestive system is ready for them." },
  { num: "02", id: "hydrolysis", title: "What 'hydrolyzed' means. (It's simpler than it sounds.)", content: "Think of a protein molecule like a very long necklace of beads. Standard protein gives your gut the whole necklace and says 'good luck.' Hydrolyzed protein gives your gut a handful of short chains, already broken apart. Your digestive system barely has to work. It's basically getting a cheat code.", hasVisual: "hydrolysis" },
  { num: "03", id: "complete-protein", title: "Two plants. One complete protein. 23g per scoop.", content: "Here's a myth worth killing: plant protein is 'incomplete.' Pea protein is low in methionine. Rice protein is low in lysine. Put them together and they cover every essential amino acid your body needs, achieving a PDCAAS score near 1—the same range as whey. Yes, really." },
  { num: "04", id: "ingredients", title: "7 ingredients. Not 17. Not 27. Seven.", content: "Turn over most tubs and start counting: Xanthan gum, guar gum, carrageenan, maltodextrin. The list is long because it's fixing problems created by cheap raw materials. GUTSY contains only what's necessary: Protein, Coconut Milk, Cacao/Vanilla, Maca/Reishi, Monk Fruit, Actazin®, and Himalayan Salt. That's it." },
  { num: "05", id: "kiwifruit-science", title: "The kiwifruit ingredient doing more work than you'd expect.", content: "Every serving contains 600mg of Actazin®, a standardized green kiwifruit powder. It's the clinically proven amount required to support bowel regularity. It swells to three times its volume in the colon, adding bulk and making things easier to pass. Gentle. Not laxative." },
  { num: "06", id: "absorption", title: "The kiwifruit also helps you actually absorb the protein.", content: "Green kiwifruit contains actinidin, a proteolytic enzyme that actively breaks down dietary proteins. So while the protein arrives partially pre-digested, the actinidin continues the job in your stomach. Faster amino acid availability means faster recovery.", hasVisual: "synergy" },
  { num: "07", id: "sugar", title: "No added sugar. What you're actually tasting.", content: "Sweetness comes from monk fruit extract—a zero-sugar, zero-glycemic fruit used for a thousand years. Total sugars are well under 1g per serving, naturally occurring from coconut milk. No stevia aftertaste, no sucralose, no chemical notes." },
  { num: "08", id: "heavy-metals", title: "We tested for heavy metals. Here are the actual numbers.", content: "Most brands hope you won't ask. We publish. Our results sit roughly 100x below EU limits for lead and 15x below for cadmium. If you put this in your body daily, you deserve to see the COA.", hasTable: "metals" },
  { num: "09", id: "testing", title: "Every batch is tested before it ships. No exceptions.", content: "Our facility is GMP-certified—pharmaceutical quality framework. We test for Salmonella, Listeria, E. coli, and verify nutritional composition against the label. The reports exist. If you want to see them, email us. We like the nerdy ones." },
  { num: "10", id: "failure", title: "8 months. 47 formulas. One product.", content: "GUTSY was built because the founder couldn't find a powder that didn't make her feel wrecked. We adjusted hydrolysis methods and botanical ratios until beta testers started using the words 'super light' without being prompted. This is built on 47 failures and one stubborn question." },
  { num: "11", id: "macros", title: "133 to 137 calories. Where they go.", content: "No empty calories, no filler carbs. 23g of protein for 133-137 kcal is a ratio that usually makes people do a double-take.", hasTable: "macros" },
  { num: "12", id: "vegan", title: "100% vegan. And everything that actually means.", content: "No whey hiding in a 'blend.' No casein in the flavoring. Removing dairy removes a common trigger for digestive discomfort, even for those who aren't strictly lactose intolerant. The same logic applies to soy. Not in GUTSY. Not ever." },
  { num: "13", id: "glycaemic", title: "The glycaemic load is low.", content: "With under 1g of sugar and fiber from Actazin®, there is no spike and no crash. Just protein doing what protein is supposed to do without the fog of a sugar-laden formula." },
  { num: "14", id: "additives", title: "No additives. Why that's harder than it sounds.", content: "GUTSY has no emulsifiers or thickeners. We skipped them because a better raw ingredient creates fewer problems to fix. Pre-digested protein is naturally more soluble; it didn't need to be rescued by xanthan gum." },
  { num: "15", id: "lifestyle", title: "It's not just a shake.", content: "Beyond 300ml of water, GUTSY works in oats, pancakes, and smoothies. Vanilla Calm holds up in warm lattes without going 'gluey' because of the absence of gums. It's designed so you can go about your life without waiting for your gut to catch up." },
  { num: "16", id: "planet", title: "Plant protein has a lower climate footprint.", content: "Peas and rice require significantly less land and water than animal sources. Peas are nitrogen-fixing—they replenish soil. While we haven't commissioned a specific LCA yet, the category-wide data is clear. When we have our own numbers, we'll publish them. Because that's what you do when you're serious." }
];

export default function SciencePage() {
  const [activeSection, setActiveSection] = useState("");
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setActiveSection(e.target.id);
          const navBtn = document.getElementById(`nav-${e.target.id}`);
          if (navBtn && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: navBtn.offsetLeft - 24, behavior: 'smooth' });
          }
        }
      }),
      { threshold: 0.3, rootMargin: "-10% 0px -70% 0px" }
    );
    facts.forEach((f) => {
      const el = document.getElementById(f.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const pos = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 140;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleQuiz = (val: number) => setQuizScore(val);

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#f20028]/10 overflow-x-hidden relative", utoMedium.className)}>
      
      {/* BG EFFECTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[5%] w-72 h-72 bg-[#ffb300]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-[#f20028]/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      {/* MOBILE NAV */}
      <div className="lg:hidden sticky top-[80px] z-[80] bg-[#f3eee4]/80 backdrop-blur-md border-b border-black/5 py-4 overflow-hidden">
        <div ref={scrollContainerRef} className="flex gap-4 px-6 overflow-x-auto no-scrollbar">
          {facts.map((f) => (
            <button key={`nav-${f.id}`} id={`nav-${f.id}`} onClick={() => scrollTo(f.id)} className={cn("whitespace-nowrap px-4 py-2 rounded-full text-[10px] uppercase tracking-widest transition-all border", activeSection === f.id ? "bg-black text-white border-black" : "bg-white/50 text-black/40 border-black/5")}>
              {f.num}. {f.id.replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="bg-black text-[#f3eee4] pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden z-10">
        <div className="mx-auto max-w-7xl px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#ffb300]" />
              <p className={cn("text-xs uppercase tracking-[0.3em] text-[#ffb300]", utoBold.className)}>Laboratory Grade / Human Spirit</p>
            </div>
            <h1 className={cn("text-6xl md:text-[140px] leading-[0.8] tracking-tighter mb-6", utoBlack.className)}>Actual <br /> Chemistry.</h1>
            <p className={cn("text-3xl md:text-5xl text-[#ffb300] lowercase italic opacity-90", runWild.className)}>16 facts about gutsy and nutrition—minus the wellness theater.</p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10 pointer-events-none border-[#f3eee4]/20 grid grid-cols-6 lg:grid-cols-12" />
        <Microscope className="absolute bottom-0 right-0 p-12 opacity-20 hidden md:block animate-pulse w-64 h-64 text-[#ffb300] stroke-[0.5]" />
      </section>

      {/* INTRO */}
      <section className="py-20 border-b border-black/5 relative z-10">
        <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row gap-12 items-center">
          <p className="text-xl md:text-2xl leading-relaxed text-black/80 italic max-w-3xl">
            Everything on this page is backed by third-party lab testing, supplier clinical data, and ingredient science. We wrote it so you don&apos;t have to wade through a 60-page COA. <span className="text-[#f20028]">You&apos;re welcome.</span>
          </p>
          <Zap className="hidden md:block text-[#f20028] w-20 h-20 animate-bounce" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-8 flex flex-col lg:flex-row gap-20">
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-32 h-fit space-y-4 border-l border-black/5 pl-6">
            <p className={cn("text-[10px] uppercase tracking-widest text-black/40 mb-6", utoBold.className)}>The Evidence</p>
            {facts.map((f) => (
              <button key={f.id} onClick={() => scrollTo(f.id)} className={cn("block text-left text-xs uppercase tracking-wider transition-all hover:text-[#f20028]", activeSection === f.id ? "text-[#f20028] font-bold translate-x-2" : "text-black/40")}>
                {f.num}. {f.id.replace('-', ' ')}
              </button>
            ))}
          </aside>

          <div className="flex-1 space-y-32 md:space-y-40">
            {facts.map((fact) => (
              <div key={fact.num} id={fact.id} className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start group scroll-mt-32">
                <span className={cn("lg:col-span-1 text-5xl md:text-6xl text-[#f20028] opacity-10 group-hover:opacity-100 transition-opacity", utoBlack.className)}>{fact.num}</span>
                <div className="lg:col-span-9 max-w-2xl">
                  <h2 className={cn("text-2xl md:text-5xl mb-6 leading-tight group-hover:translate-x-2 transition-transform", utoBold.className)}>{fact.title}</h2>
                  <p className="text-base md:text-xl text-black/70 leading-relaxed mb-8">{fact.content}</p>
                  
                  {fact.hasVisual && <div className="my-8 p-8 border border-dashed border-black/10 rounded-3xl text-center text-[10px] uppercase tracking-widest text-black/30 bg-white/30 backdrop-blur-sm">[Visual: {fact.hasVisual === 'hydrolysis' ? 'Enzymatic Hydrolysis' : 'Actinidin Synergy'}]</div>}
                  
                  {fact.hasTable === 'metals' && (
                    <div className="mt-8 bg-white rounded-[32px] p-6 shadow-sm border border-black/5 group/table overflow-hidden">
                      <Activity className="absolute -top-4 -right-4 w-24 h-24 opacity-5 group-hover/table:scale-110 transition-transform" />
                      <div className="overflow-x-auto"><table className="w-full text-left border-collapse min-w-[400px]">
                        <thead><tr className="border-b-2 border-black uppercase text-[10px] tracking-widest"><th className="py-4">Metal</th><th className="py-4">Cacao Boost</th><th className="py-4">Vanilla Calm</th></tr></thead>
                        <tbody className={cn("text-base md:text-xl", utoMedium.className)}>
                          <tr className="border-b border-black/5 hover:bg-zinc-50 transition-colors"><td className="py-4">Lead (Pb)</td><td className="py-4">0.020 mg/kg</td><td className="py-4 text-[#f20028] font-bold">0.028 mg/kg</td></tr>
                          <tr className="border-b border-black/5"><td className="py-4">Arsenic (As)</td><td className="py-4">0.029 mg/kg</td><td className="py-4">0.035 mg/kg</td></tr>
                          <tr className="border-b border-black/5"><td className="py-4">Cadmium (Cd)</td><td className="py-4">0.068 mg/kg</td><td className="py-4">0.064 mg/kg</td></tr>
                        </tbody>
                      </table></div>
                    </div>
                  )}
                  
                  {fact.hasTable === 'macros' && (
                    <div className="mt-8 bg-black text-[#f3eee4] rounded-[32px] p-6 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="border-l border-white/20 pl-4 transition-all hover:border-[#f20028]"><p className="opacity-50 text-[9px] uppercase mb-1">Protein</p><p className="text-2xl md:text-4xl">23g</p></div>
                      <div className="border-l border-white/20 pl-4 transition-all hover:border-[#f20028]"><p className="opacity-50 text-[9px] uppercase mb-1">Sugars</p><p className="text-2xl md:text-4xl">&lt;1g</p></div>
                      <div className="border-l border-white/20 pl-4 transition-all hover:border-[#f20028]"><p className="opacity-50 text-[9px] uppercase mb-1">Vanilla</p><p className="text-2xl md:text-4xl text-[#ffb300]">133</p></div>
                      <div className="border-l border-white/20 pl-4 transition-all hover:border-[#f20028]"><p className="opacity-50 text-[9px] uppercase mb-1">Cacao</p><p className="text-2xl md:text-4xl text-[#ffb300]">137</p></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOAT SCALE QUIZ */}
      <section className="py-24 bg-white border-y border-black/5 relative z-10">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <Thermometer className="w-12 h-12 mx-auto mb-6 text-[#f20028]" />
          <h2 className={cn("text-4xl md:text-6xl mb-4 tracking-tighter", utoBlack.className)}>The Bloat Scale</h2>
          <p className="text-lg text-black/60 mb-12">Be honest. How do you feel 20 minutes after your current shake?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { score: 1, label: "Fine", desc: "No issues, just protein.", color: "hover:bg-green-50" },
              { score: 2, label: "The Brick", desc: "A heavy, sitting-in-the-stomach feeling.", color: "hover:bg-yellow-50" },
              { score: 3, label: "The Balloon", desc: "Visible bloating and audible regret.", color: "hover:bg-red-50" }
            ].map((q) => (
              <button key={q.score} onClick={() => handleQuiz(q.score)} className={cn("p-8 border border-black/10 rounded-[32px] transition-all group text-left", q.color, quizScore === q.score && "bg-black text-white border-black")}>
                <span className={cn("text-3xl block mb-2", utoBold.className)}>{q.label}</span>
                <p className="opacity-60 text-sm">{q.desc}</p>
              </button>
            ))}
          </div>

          {quizScore && (
            <div className="mt-12 p-8 bg-[#f3eee4] rounded-[40px] animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className={cn("text-2xl mb-4", utoBold.className)}>
                {quizScore === 1 ? "You're a rare breed. (Or you're already drinking Gutsy)." : quizScore === 2 ? "That's the 'intact necklace' effect. Your gut is working overtime." : "That's excess fermentation. You're basically a science experiment."}
              </p>
              <p className="text-lg opacity-70">Hydrolyzed protein was designed precisely for this. We did the heavy lifting so your gut doesn&apos;t have to.</p>
            </div>
          )}
        </div>
      </section>

      {/* FUN FACTS */}
      <section className="py-20 md:py-24 bg-[#ffb300] text-black relative z-10">
        <div className="mx-auto max-w-7xl px-8">
            <h2 className={cn("text-4xl md:text-7xl mb-12 tracking-tighter", utoBlack.className)}>The Science <span className={cn("text-2xl md:text-4xl text-black/60 block", runWild.className)}>(but make it fashion)</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[{ t: "Smart Guts", s: "500M neurons in your gut. It's pickier than your actual brain." }, { t: "Acid Trip", s: "Stomach acid is serious. Gutsy stays on its good side." }, { t: "Red Factory", s: "2M red blood cells/sec. All protein-built." }, { t: "Pea-nomenal", s: "Legumes, not veg. Useless info for your head." }].map((item, i) => (
                  <div key={i} className="bg-white/40 p-6 rounded-2xl border border-black/5 hover:bg-white transition-all group">
                      <div className="mb-4 h-px w-8 bg-black transition-all group-hover:w-full" /><p className={cn("text-lg mb-2", utoBold.className)}>{item.t}</p><p className="text-sm opacity-80">{item.s}</p>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* FOOTER SOURCES */}
      <section className="py-16 bg-black text-white/40 relative z-10">
        <div className="mx-auto max-w-7xl px-8">
            <div className="flex items-center gap-2 mb-8 text-[#ffb300]"><Beaker className="w-4 h-4" /><p className="text-[10px] uppercase tracking-[0.3em]">Scientific Verification Panel</p></div>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-[8px] uppercase tracking-[0.2em]">
                {["Actazin® data", "Hydrolysis data", "Lab Reports 2025", "PDCAAS/FAO Ref"].map((s, i) => (
                  <li key={i} className="flex gap-2"><ShieldCheck className="w-3 h-3" /> {s}</li>
                ))}
            </ul>
        </div>
      </section>
    </div>
  );
}
