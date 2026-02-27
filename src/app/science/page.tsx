'use client';

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { 
  Microscope, 
  Zap, 
  Beaker, 
  ShieldCheck, 
  Thermometer, 
  ChevronRight,
  Wind,
  Check
} from 'lucide-react';
import { ParticleField } from '@/components/effects/particle-field';
import { KiwiIllustration } from '@/components/illustrations/kiwi-illustration';
import { MoleculeIllustration } from '@/components/illustrations/molecule-illustration';

const facts = [
  { 
    num: "01", 
    id: "format",
    title: "Your old protein powder wasn't the problem. Its format was.", 
    content: "Most people who switch to GUTSY tell us the same thing. They thought bloating was just what protein powders do. Some lived with it for years. Some gave up entirely. What they didn't know is that bloating isn't a side effect of protein. It is a side effect of large, intact protein molecules landing in your gut before your digestive system is ready. Standard pea and rice protein is sold in whole form. Your gut has to break those long molecular chains down from scratch. That takes time, effort, and a lot of fermentation. Fermentation produces gas. Gas produces bloating. The protein itself is fine. The format it comes in is the problem. We changed the format." 
  },
  { 
    num: "02", 
    id: "hydrolyzed",
    title: "What \"hydrolyzed\" means. It is simpler than it sounds.", 
    content: "Think of a protein molecule like a long necklace of beads. Standard protein gives your gut the whole necklace and says good luck. Hydrolyzed protein gives your gut a handful of short chains already broken apart. Your digestive system barely has to work. It is basically a cheat code. That is what enzymatic hydrolysis does. Our pea and rice protein is pre-treated with enzymes before it ever enters your body. This cuts those long chains into shorter peptides. The result is faster absorption and less fermentation. It means less of that heavy, uncomfortable feeling people usually associate with protein. Our protein achieves a solubility improvement of over 60 percent. That is not a rounding error. It means it mixes better and puts significantly less work on your gut.",
    hasVisual: "hydrolysis"
  },
  { 
    num: "03", 
    id: "complete",
    title: "Two plants. One complete protein. 23g per scoop.", 
    content: "Here is a myth worth killing. Plant protein is incomplete. This is technically true for sources in isolation. Pea protein is low in methionine. Rice protein is low in lysine. Put them together and they cover every essential amino acid your body needs. This combination achieves a PDCAAS score near 1. That is the benchmark the nutrition world uses to measure protein quality. Near 1 puts you in the same range as whey. Yes, really. Independent labs tested the full amino acid composition of both our flavors. Glutamic acid, leucine, arginine, aspartic acid, isoleucine, valine, lysine, threonine. All present. All confirmed. You are not missing anything. 23g of complete, hydrolyzed plant protein per scoop. That is what is in your shaker." 
  },
  { 
    num: "04", 
    id: "ingredients",
    title: "7 ingredients. Not 17. Not 27. Seven.", 
    content: "Turn over most protein powder tubs and start counting. Xanthan gum. Guar gum. Sunflower lecithin. Carrageenan. Maltodextrin. Acesulfame potassium. Natural flavors which usually means dozens of undisclosed compounds. The list is long and most of it is there to fix problems created by cheap raw materials. No gums. No binders. No fillers. Nothing that isn't doing a specific job. The reason most brands add gums is texture. Gums make thin protein drinks feel thick and creamy. They also ferment in your gut and contribute to the exact discomfort you bought the protein to avoid. We skipped them. Your gut will have opinions about this and they will be good ones." 
  },
  { 
    num: "05", 
    id: "actazin",
    title: "The kiwifruit ingredient doing more work than you expect.", 
    content: "Every serving of GUTSY contains 600mg of Actazin. This is a standardized green kiwifruit powder made in New Zealand. That specific dose isn't arbitrary. It is the clinically proven amount required to support bowel regularity. This is backed by a notified FSANZ health claim. When we say it works we mean a regulatory body has reviewed the evidence and agreed. Clinical studies on Actazin show it increases stool frequency and improves stool consistency. The kiwifruit fiber has unique water-retention properties. It can swell to more than three times its original volume in the colon. This adds bulk and makes things easier. Gentle. Not laxative. Bloating and abdominal discomfort often arise from excess fermentation in the intestines. Actazin fiber reduces that fermentation. Less fermentation means less gas and less of that why did I even bother feeling after a shake.",
    hasVisual: "synergy"
  },
  { 
    num: "06", 
    id: "absorption",
    title: "The kiwifruit also helps you actually absorb the protein.", 
    content: "Green kiwifruit contains a unique enzyme called actinidin. Actinidin is proteolytic. That means it actively breaks down dietary proteins. Actazin conserves this enzyme during processing. So the 600mg in every GUTSY scoop isn't just working on bowel regularity. It is also helping break down the protein you just consumed. Think of it as a two-lane system. The hydrolyzed protein arrives partially pre-broken down. The actinidin from Actazin continues breaking it down further in your stomach. The result is faster amino acid availability. The building blocks your body uses for muscle repair reach your bloodstream sooner. We didn't engineer this synergy from scratch. We found it in the Actazin science during our 8 months of formulation testing and made sure to keep the dose high enough to actually matter. The clinically effective dose is 600mg. We use 600mg. Not 599mg." 
  },
  { 
    num: "07", 
    id: "sugar",
    title: "No added sugar. What you are actually tasting.", 
    content: "No added sugar is on the front of every GUTSY pack. Here is what that means precisely. We didn't add cane sugar, coconut sugar, agave, honey, or any other sugar-derived ingredient. The sweetness comes from monk fruit extract. It is a whole food extract with zero sugar content and zero glycemic impact. It is derived from a fruit that has been used in traditional Chinese medicine for over a thousand years. Independent sugar analysis confirmed total sugars well under 1g per serving for both SKUs. The small amounts present are naturally occurring from the coconut milk powder. There is nothing sneaking in. No artificial sweeteners either. No stevia aftertaste, no sucralose, no acesulfame potassium. Monk fruit does the job cleanly." 
  },
  { 
    num: "08", 
    id: "metals",
    title: "We tested for heavy metals. Here are the actual numbers.", 
    content: "Third-party heavy metals testing isn't standard practice across this industry. A lot of brands are hoping you won't ask. We do it on every batch through an ISO 17025-accredited laboratory. We then publish the results because if you are putting something in your body every day you should be able to see exactly what is in it. For context, EU maximum permitted levels for lead in food supplements are 3 mg/kg. Our results sit roughly 100x below that limit. Cadmium limits are 1 mg/kg and our results are about 15x below that. Arsenic and mercury are similarly well within safe thresholds. Most brands don't share these numbers. We think that is a problem. So here are ours.",
    hasTable: "metals"
  },
  { 
    num: "09", 
    id: "batch",
    title: "Every batch is tested before it ships. No exceptions.", 
    content: "Our manufacturing facility is GMP-certified. This stands for Good Manufacturing Practice. It is the same quality framework used in pharmaceutical production. It means documented processes, traceable ingredients, and controlled environments. On top of that, every batch of GUTSY is independently tested by an accredited laboratory before it ships. That testing covers microbial safety. Salmonella, not detected. Listeria, not detected. E. coli, not detected. Moulds and yeasts, below detectable limits. We also verify nutritional composition against the label. The test reports exist. We have them. If you want to see them email us. We genuinely like the people who ask." 
  },
  { 
    num: "10", 
    id: "failures",
    title: "8 months. 47 formulas. One product.", 
    content: "GUTSY was built by someone who couldn't find a protein powder that didn't make them feel awful. Not mildly-uncomfortable awful. Bloated, heavy, digestively-wrecked awful. We assumed everyone felt this way. Then we found out they did and that most people had quietly accepted it as the price of protein. We spent 8 months testing 47 different formulations. We adjusted protein sources, hydrolysis methods, botanical extracts, and fiber sources. We landed on two products that made it through the only filter that mattered: does it feel light? When beta testers started independently using the words super light without being prompted that was the answer. This is a product built on 47 failures and one stubborn question." 
  },
  { 
    num: "11", 
    id: "ratio",
    title: "133 to 137 calories. Here is where every one of them goes.", 
    content: "A single scoop of Vanilla Calm delivers 133 kcal. Cacao Boost delivers 137 kcal. The fat comes from the coconut milk powder. These are medium-chain fatty acids that occur naturally. The carbohydrates come from the coconut milk powder and botanical extracts. There are no empty calories, no filler carbs, and no hidden sugars. There is nothing in the formula that isn't earning its place. 23g of protein for 133 to 137 calories. Most people do a small double-take when they see that ratio.",
    hasTable: "macros"
  },
  { 
    num: "12", 
    id: "dairy",
    title: "100% vegan. And everything that actually means.", 
    content: "GUTSY is completely free from dairy, lactose, gluten, and soy. Every single ingredient is plant-derived. There is no whey hiding inside a vague protein blend. No casein in the flavoring. No lactose tucked into the fillers. We have seen that trick before. This matters beyond dietary preference. Dairy-based proteins are among the most common triggers for digestive discomfort. A significant portion of adults have some degree of lactose sensitivity and never connect it to the powder they use every day. Removing dairy removes one more variable working against you. The same logic applies to soy. Common allergen. Known gut irritant. Not in GUTSY. Not ever." 
  },
  { 
    num: "13", 
    id: "blood-sugar",
    title: "The glycaemic load is low. Here is what that means.", 
    content: "GUTSY has very little going on in the sugar department. Total sugars per serving come in well under 1g for both SKUs. This is confirmed by independent lab analysis. The sweetness comes entirely from monk fruit extract which has zero glycaemic impact. The carbohydrates present are primarily from coconut milk powder and botanical extracts. They are not from any starchy filler added to bulk up the formula. A typical protein shake from a standard brand contains anywhere from 5g to 15g of added sugars. GUTSY comes in at under 1g of total sugars. The fiber from Actazin slows digestion further. No spike. No crash. Just protein doing what it is supposed to do." 
  },
  { 
    num: "14", 
    id: "gums",
    title: "No additives. Here is why that is harder than it sounds.", 
    content: "Most protein powders contain emulsifiers, stabilisers, thickeners, and anti-caking agents. These exist to solve problems like gritty texture or chalky aftertaste. The additives themselves aren't always dangerous but they are a signal. A long additives list means the product needed rescuing. GUTSY has none of them. No xanthan gum, no guar gum, no carrageenan, no sunflower lecithin. The reason we can skip all of that is the same reason we chose hydrolyzed protein. A better raw ingredient creates fewer downstream problems to fix. Pre-broken down protein is naturally more soluble. Monk fruit is a clean sweetener. Actazin is a fiber that works with digestion rather than against it. The product we built didn't need to be rescued." 
  },
  { 
    num: "15", 
    id: "usage",
    title: "It is not just a shake. Here is what people are doing with it.", 
    content: "The most obvious use is one scoop with 300ml of water or non-dairy milk. Shake well. Cold or over ice is best. Less liquid makes it thicker and more intense. More liquid makes it lighter and more refreshing. GUTSY works as well in food as it does in drinks. People use it in overnight oats, protein pancakes, and stirred into thick coconut yogurt. Vanilla Calm works particularly well in anything warm like oat porridge or lattes. Cacao Boost behaves more like cocoa powder in protein brownies or blended banana shakes. One serving per day is the recommendation. The light experience people describe means you can train and work without waiting for your gut to catch up." 
  },
  { 
    num: "16", 
    id: "planet",
    title: "Plant protein has a lower climate footprint. By quite a lot.", 
    content: "Producing protein from plants requires significantly less land and water. It generates substantially fewer greenhouse gas emissions than producing the same amount of protein from animals. This isn't particularly controversial in environmental science anymore. Pea and rice protein are at the lower end of the impact scale even within plant proteins. Peas are nitrogen-fixing crops. They naturally replenish soil rather than deplete it. Rice protein is a by-product of rice milling. This means it makes use of material that would otherwise go to waste. You made it to the end. You now know more about what is in your protein powder than most people ever bother to find out. If you have questions this page didn't answer email us. We like the nerdy ones best." 
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
      const pos = el.getBoundingClientRect().top - document.body.getBoundingClientRect().top - 120;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-linen min-h-screen text-black selection:bg-red/10 overflow-x-hidden relative font-uto">
      
      {/* SCROLL PROGRESS PILLAR */}
      <div className="fixed left-0 top-0 bottom-0 w-1 z-[90] bg-black/5">
        <div className="bg-red transition-all duration-150 ease-out w-full" style={{ height: `${scrollProgress}%` }} />
      </div>

      {/* HERO SECTION */}
      <section className="bg-black text-linen pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <ParticleField count={30} />
        <div className="mx-auto max-w-7xl px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-[140px] leading-[0.85] tracking-tighter mb-6 font-black uppercase">
              Actual <br className="md:hidden" /> Chemistry.
            </h1>
            <p className="text-2xl md:text-5xl text-yellow lowercase italic opacity-90 leading-tight font-runwild">
              16 facts about GUTSY. minus the wellness theatre.
            </p>
          </div>
        </div>
        <Microscope className="absolute bottom-0 right-0 p-12 opacity-10 hidden md:block w-96 h-96 text-yellow stroke-[0.5]" />
      </section>

      {/* TABLE OF CONTENTS / NAV */}
      <div className="sticky top-[80px] z-[80] bg-linen/95 backdrop-blur-xl border-b border-black/5 py-4">
        <div ref={scrollContainerRef} className="flex gap-4 px-8 overflow-x-auto no-scrollbar scroll-smooth mx-auto max-w-7xl">
          {facts.map((f) => (
            <button 
              key={`nav-${f.id}`} 
              id={`nav-${f.id}`} 
              onClick={() => scrollTo(f.id)} 
              className={cn(
                "whitespace-nowrap px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border shrink-0", 
                activeSection === f.id ? "bg-red text-linen border-red" : "bg-white/50 text-black/40 border-black/5"
              )}
            >
              {f.num}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT LIST */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="space-y-32 md:space-y-48">
            {facts.map((fact) => (
              <div key={fact.num} id={fact.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start group">
                {/* Index Column */}
                <div className="lg:col-span-2">
                  <span className={cn(
                    "text-6xl md:text-8xl font-black transition-opacity duration-500",
                    activeSection === fact.id ? "text-red opacity-100" : "text-black/5 opacity-50"
                  )}>
                    {fact.num}
                  </span>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-10 max-w-3xl space-y-8 relative">
                  <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                    {fact.title}
                  </h2>
                  <div className="text-xl md:text-2xl text-black/70 leading-relaxed font-medium">
                    {fact.content}
                  </div>

                  {/* Supplemental Visuals */}
                  {fact.hasVisual === 'hydrolysis' && (
                    <div className="p-12 bg-white rounded-[40px] border border-black/5 flex flex-col items-center justify-center text-center space-y-6">
                      <Beaker className="w-16 h-16 text-red opacity-20" />
                      <MoleculeIllustration variant="broken" className="w-32 h-12" />
                      <p className="text-xs uppercase tracking-[0.2em] font-black text-black/30">Molecular Breakdown Diagram</p>
                    </div>
                  )}

                  {fact.hasTable === 'metals' && (
                    <div className="bg-white rounded-[40px] p-10 border border-black/5 shadow-sm">
                      <p className="text-xs uppercase font-black tracking-widest text-black/40 mb-8">Heavy Metal batch analysis (mg/kg)</p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                          <p className="text-[10px] font-black uppercase mb-1">Lead (Pb)</p>
                          <p className="text-3xl font-black">0.02</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase mb-1">Cadmium</p>
                          <p className="text-3xl font-black">0.06</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase mb-1">Arsenic</p>
                          <p className="text-3xl font-black">0.04</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase mb-1">Mercury</p>
                          <p className="text-3xl font-black">&lt;0.01</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {fact.hasTable === 'macros' && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black text-linen p-8 rounded-3xl">
                        <p className="text-[10px] uppercase font-black text-yellow mb-2">Protein</p>
                        <p className="text-4xl font-black">23g</p>
                      </div>
                      <div className="bg-black text-linen p-8 rounded-3xl">
                        <p className="text-[10px] uppercase font-black text-yellow mb-2">Total Sugars</p>
                        <p className="text-4xl font-black">&lt;1g</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOAT QUIZ SECTION */}
      <section className="py-24 bg-white border-y border-black/5">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <Thermometer className="w-12 h-12 mx-auto mb-8 text-red" />
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">The Bloat Scale</h2>
          <p className="text-xl text-black/60 mb-16 italic font-medium">Be honest. How do you feel 20 minutes after your current shake?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { s: 1, l: "Fine", d: "No issues. Just protein." },
              { s: 2, l: "The Brick", d: "A heavy. Sitting-in-the-stomach feeling." },
              { s: 3, l: "The Balloon", d: "Visible bloating and audible regret." }
            ].map((q) => (
              <button 
                key={q.s} 
                onClick={() => setQuizScore(q.s)} 
                className={cn(
                  "p-10 border rounded-[40px] transition-all text-left flex flex-col justify-between group h-64", 
                  quizScore === q.s ? "bg-black text-white border-black scale-[0.98]" : "bg-linen border-black/5 hover:border-black/20"
                )}
              >
                <div className="flex justify-between items-start">
                  <span className="text-3xl font-black uppercase leading-none">{q.l}</span>
                  <ChevronRight className={cn("w-6 h-6 transition-transform", quizScore === q.s ? "rotate-90 text-red" : "opacity-20")} />
                </div>
                <p className="font-bold opacity-60 leading-snug">{q.d}</p>
              </button>
            ))}
          </div>

          {quizScore && (
            <div className="mt-12 p-12 bg-red text-linen rounded-[50px] text-left animate-in slide-in-from-bottom-6 duration-700">
              <p className="text-3xl md:text-4xl mb-4 font-black uppercase leading-tight">
                {quizScore === 1 ? "Lucky you. Or you are already drinking GUTSY." : "This is why we pre-break our formula."}
              </p>
              <p className="text-xl opacity-90 leading-relaxed font-bold">
                Standard proteins are giant molecules your gut has to wrestle with. We pre-break down ours into tiny peptides so your stomach does not have to do the heavy lifting. It is not magic. It is just biology.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER REWARD */}
      <div className="py-20 text-center bg-black">
        <p className="text-[10px] uppercase tracking-[0.5em] font-black text-white/20 px-8">
          You read 16 facts about protein chemistry. That is impressive. Reward yourself with a shake.
        </p>
        <div className="mt-4 text-xs text-white/40 px-8 max-w-xl mx-auto">
          <p>
            This page is here to explain how GUTSY is built, not to replace a doctor. If you have a medical condition (especially IBS or anything gut‑related), talk to someone who knows your history before making big changes.
          </p>
        </div>
      </div>
    </div>
  );
}