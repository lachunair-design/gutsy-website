'use client';

import { useState, useEffect, useRef } from 'react';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import { 
  Microscope, 
  Zap, 
  Activity, 
  Info, 
  Beaker, 
  ShieldCheck, 
  Thermometer, 
  ChevronRight 
} from 'lucide-react';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const facts = [
  { 
    num: "01", 
    id: "formula",
    title: "Your old protein powder wasn't the problem. Its formula was.", 
    content: "Most people who switched to GUTSY tell us the same thing: they thought bloating was just what protein powders do. Some lived with it for years. Some tried switching brands. Some gave up entirely and started eating sad, protein-free salads. What they didn't know is that the bloating isn't a side effect of protein. It's a side effect of large, intact protein molecules landing in your gut before your digestive system is ready for them." 
  },
  { 
    num: "02", 
    id: "hydrolysis",
    title: "What 'hydrolyzed' means. (It's simpler than it sounds.)", 
    content: "Think of a protein molecule like a very long necklace of beads. Standard protein gives your gut the whole necklace and says 'good luck.' Hydrolyzed protein gives your gut a handful of short chains, already broken apart. Your digestive system barely has to work. It's basically getting a cheat code.",
    hasVisual: "hydrolysis"
  },
  { 
    num: "03", 
    id: "complete-protein",
    title: "Two plants. One complete protein. 23g per scoop.", 
    content: "Here's a myth worth killing: plant protein is 'incomplete.' Technically true for individual sources in isolation. Pea protein is low in methionine. Rice protein is low in lysine. Put them together and they cover every essential amino acid your body needs, which is why the combination achieves a PDCAAS score near 1. PDCAAS is the benchmark the nutrition world uses to measure protein quality, and near 1 puts you in the same range as whey. Yes, really." 
  },
  { 
    num: "04", 
    id: "ingredients",
    title: "7 ingredients. Not 17. Not 27. Seven.", 
    content: "Turn over most protein powder tubs and start counting. Xanthan gum. Guar gum. Sunflower lecithin. Carrageenan. Maltodextrin. Acesulfame potassium. The list is long, and most of it is there to fix problems created by cheap raw materials. No gums. No binders. No fillers. Nothing that isn't doing a specific, defensible job." 
  },
  { 
    num: "05", 
    id: "kiwifruit-science",
    title: "The kiwifruit ingredient doing more work than you'd expect.", 
    content: "Every serving of GUTSY contains 600mg of Actazin®, a standardized green kiwifruit powder made in New Zealand. Clinical studies on Actazin® show it increases stool frequency and improves stool consistency. The kiwifruit fiber can swell to more than three times its original volume in the colon, adding bulk to stool and making it easier to pass. Gentle. Not laxative." 
  },
  { 
    num: "06", 
    id: "absorption",
    title: "The kiwifruit also helps you actually absorb the protein.", 
    content: "Green kiwifruit contains a unique enzyme called actinidin. Actinidin is proteolytic, meaning it actively breaks down dietary proteins. So the 600mg in every GUTSY scoop isn't just working on bowel regularity. It's also helping break down the protein you just consumed.",
    hasVisual: "synergy"
  },
  { 
    num: "07", 
    id: "sugar",
    title: "No added sugar. What you're actually tasting.", 
    content: "Sweetness comes from monk fruit extract—a whole food extract with zero sugar content and zero glycemic impact. Total sugars are well under 1g per serving, naturally occurring from the coconut milk powder. No stevia aftertaste, no sucralose, no chemical notes." 
  },
  { 
    num: "08", 
    id: "heavy-metals",
    title: "We tested for heavy metals. Here are the actual numbers.", 
    content: "Third-party heavy metals testing isn't standard practice. We do it on every batch through an ISO 17025-accredited laboratory. EU maximum permitted levels for lead in food supplements are 3 mg/kg. Our results sit roughly 100x below that limit.",
    hasTable: "metals"
  },
  { 
    num: "09", 
    id: "testing",
    title: "Every batch is tested before it ships. No exceptions.", 
    content: "Our manufacturing facility is GMP-certified. Testing covers microbial safety (Salmonella, Listeria, E. coli), nutritional composition (verified against the label), and full heavy metal panels. If you want to see the reports, email us. We genuinely like the people who ask." 
  },
  { 
    num: "10", 
    id: "failure",
    title: "8 months. 47 formulas. One product.", 
    content: "GUTSY was built by a founder who spent 8 months testing 47 different formulations, adjusting protein sources, hydrolysis methods, and sweetener ratios. The only filter that mattered: does it feel light? This is a product built on 47 failures and one stubborn question." 
  },
  { 
    num: "11", 
    id: "macros",
    title: "133 to 137 calories. Where they go.", 
    content: "Vanilla Calm delivers 133 kcal. Cacao Boost delivers 137 kcal. The fat comes from coconut milk powder: medium-chain fatty acids, naturally occurring. There are no empty calories or hidden sugars in the formula.",
    hasTable: "macros"
  },
  { 
    num: "12", 
    id: "vegan",
    title: "100% vegan. And everything that actually means.", 
    content: "GUTSY is free from dairy, lactose, gluten, and soy. Every single ingredient is plant-derived. Removing dairy removes one more variable working against your gut, even if you aren't strictly lactose intolerant." 
  },
  { 
    num: "13", 
    id: "glycaemic",
    title: "The glycaemic load is low.", 
    content: "Under 1g of sugar per serving, confirmed by independent lab analysis. The sweetness comes from monk fruit, which has zero glycaemic impact. No spike. No crash. Just protein doing what protein is supposed to do." 
  },
  { 
    num: "14", 
    id: "additives",
    title: "No additives. Why that's harder than it sounds.", 
    content: "Most protein powders contain emulsifiers and thickeners to fix gritty texture. GUTSY has none. No xanthan gum, no guar gum, no carrageenan. The reason we can skip them is better raw ingredients: pre-digested protein is naturally more soluble." 
  },
  { 
    num: "15", 
    id: "lifestyle",
    title: "It's not just a shake.", 
    content: "Beyond the shaker, GUTSY works in overnight oats, pancakes, and smoothies. Vanilla Calm holds up in warm lattes without going gluey. The 'light' experience means you can work and train without waiting for your gut to catch up." 
  },
  { 
    num: "16", 
    id: "planet",
    title: "Plant protein has a lower climate footprint.", 
    content: "Producing protein from plants requires significantly less land and water. Peas are nitrogen-fixing crops that naturally replenish soil. Choosing plant protein over whey consistently shows lower environmental impact as a category." 
  }
];

export default function SciencePage() {
  const [activeSection, setActiveSection] = useState("");
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

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
      { threshold: 0.2, rootMargin: "-20% 0px -60% 0px" }
    );

    facts.forEach((f) => {
      const el = document.getElementById(f.id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const pos = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 160;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#f20028]/10 overflow-x-hidden relative", utoMedium.className)}>
      
      {/* MOBILE PROGRESS PILLAR */}
      <div className="lg:hidden fixed left-0 top-0 bottom-0 w-1 z-[90] bg-black/5">
        <div className="bg-[#f20028] transition-all duration-150 ease-out w-full" style={{ height: `${scrollProgress}%` }} />
      </div>

      {/* MOBILE NAVIGATOR */}
      <div className="lg:hidden sticky top-[80px] z-[80] bg-[#f3eee4]/95 backdrop-blur-xl border-b border-black/5 py-3">
        <div ref={scrollContainerRef} className="flex gap-3 px-6 overflow-x-auto no-scrollbar scroll-smooth">
          {facts.map((f) => (
            <button key={`nav-${f.id}`} id={`nav-${f.id}`} onClick={() => scrollTo(f.id)} className={cn("whitespace-nowrap px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border shrink-0", activeSection === f.id ? "bg-[#f20028] text-white border-[#f20028]" : "bg-white/50 text-black/40 border-black/5")}>
              {f.num}
            </button>
          ))}
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-black text-[#f3eee4] pt-24 pb-16 md:pt-48 md:pb-32 relative overflow-hidden z-10">
        <div className="mx-auto max-w-7xl px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className={cn("text-6xl md:text-[140px] leading-[0.85] tracking-tighter mb-6", utoBlack.className)}>
              Actual <br /> Chemistry.
            </h1>
            <p className={cn("text-2xl md:text-5xl text-[#ffb300] lowercase italic opacity-90 leading-tight", runWild.className)}>
              16 facts about gutsy—minus the wellness theater.
            </p>
          </div>
        </div>
        <Microscope className="absolute bottom-0 right-0 p-12 opacity-10 hidden md:block animate-pulse w-96 h-96 text-[#ffb300] stroke-[0.5]" />
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 md:py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-8 flex flex-col lg:flex-row gap-20">
          
          {/* DESKTOP TOC */}
          <aside className="hidden lg:block w-64 sticky top-32 h-fit border-l border-black/5 pl-6">
            <p className={cn("text-[10px] uppercase tracking-widest text-black/40 mb-6", utoBold.className)}>The Evidence</p>
            {facts.map((f) => (
              <button key={f.id} onClick={() => scrollTo(f.id)} className={cn("block text-left text-xs uppercase tracking-wider mb-4 transition-all hover:text-[#f20028]", activeSection === f.id ? "text-[#f20028] font-bold translate-x-2" : "text-black/40")}>
                {f.num}. {f.id.replace('-', ' ')}
              </button>
            ))}
          </aside>

          {/* FACTS LIST */}
          <div className="flex-1 space-y-24 md:space-y-40">
            {facts.map((fact) => (
              <div key={fact.num} id={fact.id} className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:gap-8 items-start group scroll-mt-32">
                <div className="flex items-center gap-4 lg:col-span-1">
                  <span className={cn("text-4xl md:text-6xl text-[#f20028] transition-opacity", utoBlack.className, activeSection === fact.id ? "opacity-100" : "opacity-10")}>
                    {fact.num}
                  </span>
                  <div className="h-px flex-1 bg-black/5 lg:hidden" />
                </div>
                
                <div className="lg:col-span-9 max-w-2xl">
                  <h2 className={cn("text-2xl md:text-5xl mb-6 leading-tight", utoBold.className)}>{fact.title}</h2>
                  <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-8">{fact.content}</p>
                  
                  {fact.hasVisual && (
                    <div className="my-8 aspect-square md:aspect-video flex items-center justify-center border border-dashed border-black/10 rounded-[32px] text-[10px] uppercase tracking-[0.2em] text-black/30 bg-white/20 backdrop-blur-sm italic">
                      [Visual: {fact.hasVisual === 'hydrolysis' ? 'Molecule Breakdown' : 'Enzyme Synergy'}]
                    </div>
                  )}

                  {fact.hasTable === 'metals' && (
                    <div className="mt-8 bg-white rounded-[32px] p-8 shadow-sm border border-black/5 relative overflow-hidden group/table">
                      <div className="flex items-center justify-between mb-8">
                        <p className={cn("text-xs uppercase tracking-widest", utoBold.className)}>Batch Analysis 821317</p>
                        <ShieldCheck className="w-5 h-5 text-[#f20028]" />
                      </div>
                      <div className="space-y-6">
                        {[
                          { m: "Lead (Pb)", c: "0.020", v: "0.028", l: "100x below limit" },
                          { m: "Cadmium (Cd)", c: "0.068", v: "0.064", l: "15x below limit" }
                        ].map((row, i) => (
                          <div key={i} className="flex flex-col gap-2 border-b border-black/5 pb-6 last:border-0">
                            <p className="text-[10px] uppercase text-black/40 tracking-widest">{row.m}</p>
                            <div className="flex justify-between items-baseline">
                              <span className="text-3xl">{row.c} <span className="text-xs opacity-30">mg/kg</span></span>
                              <span className="text-[10px] font-black text-[#f20028] uppercase">{row.l}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {fact.hasTable === 'macros' && (
                    <div className="mt-8 grid grid-cols-2 gap-4 md:gap-8">
                      {[
                        { l: "Protein", v: "23g" },
                        { l: "Sugars", v: "<1g" },
                        { l: "Vanilla", v: "133", u: "kcal" },
                        { l: "Cacao", v: "137", u: "kcal" }
                      ].map((m, i) => (
                        <div key={i} className="bg-black text-[#f3eee4] rounded-2xl p-6 border border-white/5 transition-transform hover:scale-[1.02]">
                          <p className="opacity-50 text-[10px] uppercase mb-1">{m.l}</p>
                          <p className="text-3xl md:text-4xl">{m.v}{m.u && <span className="text-xs ml-1 opacity-50">{m.u}</span>}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE BLOAT SCALE QUIZ */}
      <section className="py-24 bg-white relative z-10 border-y border-black/5">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <Thermometer className="w-10 h-10 mx-auto mb-6 text-[#f20028]" />
          <h2 className={cn("text-4xl md:text-6xl mb-4 tracking-tighter", utoBlack.className)}>The Bloat Scale</h2>
          <p className="text-lg text-black/60 mb-12">How do you feel 20 minutes after your current shake?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { s: 1, l: "Fine", d: "No issues, just protein." },
              { s: 2, l: "The Brick", d: "A heavy, sitting-in-the-stomach feeling." },
              { s: 3, l: "The Balloon", d: "Visible bloating and audible regret." }
            ].map((q) => (
              <button key={q.s} onClick={() => setQuizScore(q.s)} className={cn("p-8 border rounded-[32px] transition-all text-left group", quizScore === q.s ? "bg-black text-white border-black" : "bg-[#f3eee4]/30 border-black/5 hover:border-black/20")}>
                <span className={cn("text-2xl block mb-2", utoBold.className)}>{q.l}</span>
                <p className="opacity-60 text-xs">{q.d}</p>
              </button>
            ))}
          </div>

          {quizScore && (
            <div className="mt-8 p-10 bg-[#f20028] text-white rounded-[40px] text-left animate-in slide-in-from-bottom-4">
              <p className={cn("text-2xl md:text-3xl mb-4", utoBold.className)}>
                {quizScore === 1 ? "You're a lucky one." : "This is precisely why GUTSY exists."}
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                Most proteins are giant molecules your gut has to wrestle with. We enzymatically pre-digest ours into tiny peptides so your stomach doesn&apos;t have to do the heavy lifting.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FUN FACTS */}
      <section className="py-24 bg-[#ffb300] text-black relative z-10">
        <div className="mx-auto max-w-7xl px-8">
            <h2 className={cn("text-4xl md:text-7xl mb-16 tracking-tighter", utoBlack.className)}>The Science <span className={cn("text-2xl md:text-4xl text-black/60 block", runWild.className)}>(but make it fashion)</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { t: "Smart Guts", s: "500M neurons in your gut. It's pickier than your actual brain." },
                  { t: "Acid Trip", s: "Stomach acid is serious. Gutsy stays on its good side." },
                  { t: "Red Factory", s: "2M red blood cells/sec. All protein-built." },
                  { t: "Pea-nomenal", s: "Legumes, not veg. Useless info for your head." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/40 p-8 rounded-3xl border border-black/5 hover:bg-white transition-all group">
                    <div className="mb-6 h-px w-8 bg-black transition-all group-hover:w-full" />
                    <p className={cn("text-xl mb-2", utoBold.className)}>{item.t}</p>
                    <p className="text-sm opacity-80">{item.s}</p>
                  </div>
                ))}
            </div>
        </div>
      </section>

      {/* FOOTER SOURCES */}
      <section className="py-16 bg-black text-white/30 relative z-10">
        <div className="mx-auto max-w-7xl px-8">
            <div className="flex items-center gap-3 mb-10 text-[#ffb300]">
              <Beaker className="w-5 h-5" />
              <p className="text-xs uppercase tracking-[0.4em]">Scientific Verification Panel</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {["Actazin® Data", "Hydrolysis Science", "Laboratory Reports 2025", "PDCAAS/FAO Ref"].map((s, i) => (
                  <div key={i} className="flex items-center gap-4 py-4 border-t border-white/10">
                    <ShieldCheck className="w-4 h-4 text-[#ffb300]" />
                    <span className="text-[10px] uppercase tracking-widest">{s}</span>
                  </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
