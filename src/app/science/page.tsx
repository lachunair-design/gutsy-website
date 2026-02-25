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
    id: "problem",
    title: "Your old protein powder wasn't the problem. Its formula was.", 
    content: "Most people who switched to GUTSY tell us the same thing: they thought bloating was just what protein powders do. Some lived with it for years. Some tried switching brands. Some gave up entirely and started eating sad, protein-free salads. What they didn't know is that the bloating isn't a side effect of protein. It's a side effect of large, intact protein molecules landing in your gut before your digestive system is ready for them. Standard pea and rice protein is sold in whole form. Your gut has to break those long molecular chains down from scratch, which takes time, effort, and a lot of fermentation. Fermentation produces gas. Gas produces bloating. The protein itself is fine. The format it comes in is the problem. We changed the format." 
  },
  { 
    num: "02", 
    id: "hydrolyzed",
    title: "What \"hydrolyzed\" means. (It's simpler than it sounds.)", 
    content: "Think of a protein molecule like a very long necklace of beads. Standard protein gives your gut the whole necklace and says \"good luck.\" Hydrolyzed protein gives your gut a handful of short chains, already broken apart. Your digestive system barely has to work. It's basically getting a cheat code. That's what enzymatic hydrolysis does. Our pea and rice protein is pre-treated with enzymes before it ever enters your body, cutting those long chains into shorter peptides. The result: faster absorption, less fermentation in the gut, less gas, and less of that heavy, uncomfortable feeling people usually associate with protein supplements. The protein we use achieves a solubility improvement of over 60% compared to standard rice protein. That's not a rounding error. It means it mixes better, absorbs faster, and puts significantly less work on your digestive system. Beta testers described GUTSY as \"super light\" without us prompting them. That wasn't a coincidence.",
    hasVisual: "hydrolysis"
  },
  { 
    num: "03", 
    id: "complete",
    title: "Two plants. One complete protein. 23g per scoop.", 
    content: "Here's a myth worth killing: plant protein is \"incomplete.\" Technically true for individual sources in isolation. Pea protein is low in methionine. Rice protein is low in lysine. Put them together and they cover every essential amino acid your body needs, which is why the combination achieves a PDCAAS score near 1. PDCAAS is the benchmark the nutrition world uses to measure protein quality, and near 1 puts you in the same range as whey. Yes, really. Our independent lab tested the full amino acid composition of both SKUs. Glutamic acid, leucine, arginine, aspartic acid, isoleucine, valine, lysine, threonine. All present. All confirmed. You're not missing anything. 23g of complete, hydrolyzed plant protein per scoop. That's what's in your shaker." 
  },
  { 
    num: "04", 
    id: "ingredients",
    title: "7 ingredients. Not 17. Not 27. Seven.", 
    content: "Turn over most protein powder tubs and start counting. Xanthan gum. Guar gum. Sunflower lecithin. Carrageenan. Maltodextrin. Acesulfame potassium. \"Natural flavors\" (which legally means dozens of undisclosed compounds that nobody asked for). The list is long, and most of it is there to fix problems created by cheap raw materials. No gums. No binders. No fillers. Nothing that isn't doing a specific, defensible job. The reason most brands add gums is texture. Gums make thin protein drinks feel thick and creamy. They also ferment in your gut and contribute to the exact discomfort you bought the protein powder to avoid in the first place. We skipped them. The texture is lighter, yes. Your gut will have opinions about this, and they will be good ones." 
  },
  { 
    num: "05", 
    id: "actazin",
    title: "The kiwifruit ingredient doing more work than you'd expect.", 
    content: "Every serving of GUTSY contains 600mg of Actazin®, a standardized green kiwifruit powder made in New Zealand by Anagenix. That specific dose isn't arbitrary. It's the clinically proven amount required to support bowel regularity, backed by a notified Food Standards Australia New Zealand (FSANZ) health claim. So when we say it works, we mean an independent regulatory body has reviewed the evidence and agreed. Clinical studies on Actazin® show it increases stool frequency and improves stool consistency. The kiwifruit fiber has unique water-retention properties: it can swell to more than three times its original volume in the colon, adding bulk to stool and making it easier to pass. Gentle. Not laxative. There is a meaningful difference and your body will know which one it got. Bloating and abdominal discomfort often arise from excess fermentation in the intestines, particularly from high protein intake. Actazin®'s slow-fermentation dietary fiber reduces that fermentation. Less fermentation. Less gas. Less of that \"why did I even bother\" feeling after a shake." 
  },
  { 
    num: "06", 
    id: "absorption",
    title: "The kiwifruit also helps you actually absorb the protein.", 
    content: "Yes, the kiwifruit ingredient is doing two jobs. Nobody in the supplement industry talks about this, which is their loss. Green kiwifruit contains a unique enzyme called actinidin. Actinidin is proteolytic, meaning it actively breaks down dietary proteins. Actazin® conserves this enzyme during processing. So the 600mg in every GUTSY scoop isn't just working on bowel regularity. It's also helping break down the protein you just consumed. Think of it as a two-lane system. The hydrolyzed protein arrives partially pre-digested. The actinidin from Actazin® continues breaking it down further in your stomach. The result is faster amino acid availability: the building blocks your body uses for muscle repair and recovery reach your bloodstream sooner. We didn't engineer this synergy from scratch. We found it in the Actazin® science during our 8 months of formulation testing and made sure to keep the dose high enough to actually matter. The clinically effective dose is 600mg. We use 600mg. Not 599mg.",
    hasVisual: "synergy"
  },
  { 
    num: "07", 
    id: "sugar",
    title: "No added sugar. What you're actually tasting.", 
    content: "\"No added sugar\" is on the front of every GUTSY pack. Here's what that means precisely: we didn't add cane sugar, coconut sugar, agave, honey, or any other sugar-derived ingredient. The sweetness comes from monk fruit extract, a whole food extract with zero sugar content and zero glycemic impact, derived from a fruit that's been used in traditional Chinese medicine for over a thousand years. It predates the protein supplement industry by quite a lot. Independent sugar analysis from our third-party lab confirmed total sugars well under 1g per serving for both SKUs. The small amounts present are naturally occurring from the coconut milk powder. There's nothing sneaking in. No artificial sweeteners either. No stevia aftertaste, no sucralose, no acesulfame potassium. Monk fruit does the job cleanly and doesn't leave a weird chemical note at the back of your throat." 
  },
  { 
    num: "08", 
    id: "metals",
    title: "We tested for heavy metals. Here are the actual numbers.", 
    content: "Third-party heavy metals testing isn't standard practice across this industry. A lot of brands are hoping you won't ask. We do it on every batch through an ISO 17025-accredited laboratory, and then we publish the results, because if you're putting something in your body every day, you should be able to see exactly what's in it. For context: EU maximum permitted levels for lead in food supplements are 3 mg/kg. Our results sit roughly 100x below that limit. Cadmium limits are 1 mg/kg, and our results are about 15x below that. Arsenic and mercury are similarly well within safe thresholds. Most brands don't share these numbers. We think that's a problem. So here are ours.",
    hasTable: "metals"
  },
  { 
    num: "09", 
    id: "batch",
    title: "Every batch is tested before it ships. No exceptions.", 
    content: "Our manufacturing facility is GMP-certified, which stands for Good Manufacturing Practice. It's the same quality framework used in pharmaceutical production, not the supplement industry's self-reported version of \"we think it's probably fine.\" It means documented processes, traceable ingredients, controlled environments, and third-party verified audits. On top of that, every batch of GUTSY is independently tested by an accredited laboratory before it ships. That testing covers: Microbial safety: Salmonella, not detected. Listeria, not detected. E. coli, not detected. Coliforms, below detectable limits. Moulds and yeasts, below detectable limits. Nutritional composition: protein content, carbohydrates, fat, dietary fiber, salt. All verified against what's actually printed on the label. Heavy metals: full panel, as above. The test reports exist. We have them. If you want to see them, email us. We genuinely like the people who ask." 
  },
  { 
    num: "10", 
    id: "founder",
    title: "8 months. 47 formulas. One product.", 
    content: "GUTSY was built by a founder who couldn't find a protein powder that didn't make her feel awful. Not mildly-uncomfortable awful. Bloated, heavy, digestively-wrecked awful. She tried switching brands, formats, and protein sources. Same result every time. She assumed everyone felt this way. Then she found out they did, and that most people had quietly accepted it as the price of protein. She spent 8 months testing 47 different formulations, adjusting protein sources, hydrolysis methods, botanical extracts, sweetener ratios, and fiber sources, before landing on two products that made it through. The only filter that mattered: does it feel light? Not \"do you feel okay after.\" Light. When beta testers started independently using the words \"super light\" without being asked and without being prompted, that was the answer. This is a product built on 47 failures and one stubborn question." 
  },
  { 
    num: "11", 
    id: "calories",
    title: "133 to 137 calories. Here's where every one of them goes.", 
    content: "A single scoop of Vanilla Calm delivers 133 kcal. Cacao Boost delivers 137 kcal. The fat comes from the coconut milk powder: medium-chain fatty acids, naturally occurring, not added in to pad the label. The carbohydrates come primarily from the coconut milk powder and botanical extracts, with fiber from Actazin®. There are no empty calories, no filler carbs, no hidden sugars, nothing in the formula that isn't earning its place. 23g of protein for 133 to 137 calories. Most people, when they see that ratio, do a small double-take.",
    hasTable: "macros"
  },
  { 
    num: "12", 
    id: "vegan",
    title: "100% vegan. And everything that actually means.", 
    content: "GUTSY is completely free from dairy, lactose, gluten, and soy. Every single ingredient, from the protein base to the sweetener to the botanical extracts, is plant-derived. There is no whey hiding inside a vague \"protein blend.\" No casein in the flavoring. No lactose tucked into the fillers. We've seen that trick before. This matters beyond dietary preference. Dairy-based proteins are among the most common triggers for digestive discomfort in protein supplements, and not only for people who identify as lactose intolerant. A significant portion of adults have some degree of lactose sensitivity and never connect it to the powder they're using every day. Removing dairy from the formula removes one more variable working against you. The same logic applies to soy. Common allergen. Known gut irritant for a meaningful segment of the population. Not in GUTSY. Not ever." 
  },
  { 
    num: "13", 
    id: "glycaemic",
    title: "The glycaemic load is low. Here's what that actually means for you.", 
    content: "Blood sugar response to food and drink is a normal part of human physiology. It only becomes something to actively manage if you have diabetes, but understanding it is useful for anyone who's noticed they feel sharper or foggier on different days and can't quite figure out why. GUTSY has very little going on in the sugar department. Total sugars per serving come in well under 1g for both SKUs, confirmed by independent lab analysis. The sweetness comes entirely from monk fruit extract, which has zero glycaemic impact. The carbohydrates present are primarily from coconut milk powder and botanical extracts, not from any starchy filler added to bulk up the formula and make the macros look more impressive than they are. A typical protein shake from a standard brand contains anywhere from 5g to 15g of added sugars per serving. GUTSY comes in at under 1g of total sugars and 5.7g to 6.1g of total carbohydrates per scoop. The fiber from Actazin® slows digestion further, which moderates any glucose response on top of that. No spike. No crash. Just protein doing what protein is supposed to do." 
  },
  { 
    num: "14", 
    id: "additives",
    title: "No additives. Here's why that's harder than it sounds.", 
    content: "Most protein powders contain emulsifiers, stabilisers, thickeners, anti-caking agents, and pH regulators. These exist to solve problems: gritty texture, poor mixability, short shelf life, chalky aftertaste. The additives themselves aren't always dangerous, but they are a signal. A long additives list means the product needed rescuing. GUTSY has none of them. No xanthan gum, no guar gum, no carrageenan, no sunflower lecithin, no maltodextrin, no acesulfame potassium, no dipotassium phosphate, no silicon dioxide. The reason we can skip all of that is the same reason we chose enzymatically hydrolyzed protein in the first place: a better raw ingredient creates fewer downstream problems to fix. Pre-digested protein is naturally more soluble. Monk fruit is a clean sweetener that needs no masking agent. Actazin® is a fiber that works with digestion rather than quietly fermenting against it. The product we built didn't need to be rescued by additives. That was the whole point of 8 months and 47 formulas." 
  },
  { 
    num: "15", 
    id: "usage",
    title: "It's not just a shake. Here's what people are actually doing with it.", 
    content: "The most obvious use is the one on the pack: one scoop, 300ml of water or your preferred non-dairy milk, shake well. Cold or over ice is best. How much liquid you use changes the experience: less and it gets thicker and more intense, more and it gets lighter and more refreshing. Neither is wrong. Experiment until it's yours. GUTSY works as well in food as it does in drinks. People have used it in overnight oats, protein pancakes, smoothies, and stirred into thick coconut yogurt. Vanilla Calm works particularly well in anything warm: oat porridge, chia pudding, blended lattes. The vanilla flavor holds up and the absence of gums means it doesn't go gluey when heated, which is a problem you've probably run into before with other powders and definitely didn't deserve. Cacao Boost behaves more like cocoa powder in food applications: protein brownies, chocolate bliss balls, blended banana shakes. One serving per day is the recommendation. Between meals or after a workout both work. The \"light\" experience people describe isn't just about the powder itself. It's about not feeling weighed down for the next two hours, which means you can train, eat, work, and go about your actual life without waiting for your gut to catch up." 
  },
  { 
    num: "16", 
    id: "planet",
    title: "Plant protein has a lower climate footprint than animal protein. By quite a lot.", 
    content: "Producing protein from plants requires significantly less land and water, and generates substantially fewer greenhouse gas emissions than producing the same amount of protein from animals. This has been replicated across dozens of independent life cycle assessment studies and isn't particularly controversial in environmental science anymore, even if the supplement industry hasn't entirely caught on. Pea and rice protein, the sources in GUTSY, sit at the lower end of the environmental impact scale even within plant proteins. Peas are nitrogen-fixing crops, meaning they naturally replenish soil rather than deplete it. Rice protein is a by-product of rice milling, meaning it makes use of material that would otherwise go to waste. We haven't commissioned an independent LCA on our specific formulation and supply chain yet, so we're not going to invent a percentage and put it in bold. What we can say: the ingredients are plant-derived, the protein comes from an existing food production process, and choosing plant protein over whey or casein consistently shows lower environmental impact as a category. When we have our own numbers, we'll publish them here with the methodology. Because that's what you do when you're serious about it. You made it to the end. You now know more about what's in your protein powder than most people ever bother to find out. If you have questions this page didn't answer, email us. We like the nerdy ones best." 
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
      <div className="lg:hidden sticky top-[80px] z-[80] bg-[#f3eee4]/95 backdrop-blur-xl border-b border-black/5 py-3 shadow-sm">
        <div ref={scrollContainerRef} className="flex gap-3 px-6 overflow-x-auto no-scrollbar scroll-smooth">
          {facts.map((f) => (
            <button 
              key={`nav-${f.id}`} 
              id={`nav-${f.id}`} 
              onClick={() => scrollTo(f.id)} 
              className={cn(
                "whitespace-nowrap px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border shrink-0", 
                activeSection === f.id ? "bg-[#f20028] text-white border-[#f20028]" : "bg-white/50 text-black/40 border-black/5"
              )}
            >
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
              Actual <br className="md:hidden" /> Chemistry.
            </h1>
            <p className={cn("text-2xl md:text-5xl text-[#ffb300] lowercase italic opacity-90 leading-tight", runWild.className)}>
              16 facts about gutsy—minus the wellness theatre.
            </p>
          </div>
        </div>
        <Microscope className="absolute bottom-0 right-0 p-12 opacity-10 hidden md:block animate-pulse w-96 h-96 text-[#ffb300] stroke-[0.5]" />
      </section>

      {/* INTRO */}
      <section className="py-12 md:py-20 border-b border-black/5 relative z-10">
        <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row gap-12 items-center">
          <p className="text-xl md:text-2xl leading-relaxed text-black/80 italic max-w-3xl">
            Everything on this page is backed by third-party lab testing, supplier clinical data, and ingredient science, all referenced below. We wrote it so you don&apos;t have to wade through a 60-page COA to find out what&apos;s actually in your scoop. <span className="text-[#f20028]">You&apos;re welcome.</span>
          </p>
          <Zap className="hidden md:block text-[#f20028] w-20 h-20 animate-bounce" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-12 md:py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-8 flex flex-col lg:flex-row gap-20">
          
          {/* DESKTOP TOC - STICKY BAR */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-40 h-fit border-l border-black/5 pl-6">
              <p className={cn("text-[10px] uppercase tracking-widest text-black/40 mb-6", utoBold.className)}>The Evidence</p>
              <div className="space-y-4">
                {facts.map((f) => (
                  <button key={f.id} onClick={() => scrollTo(f.id)} className={cn("block text-left text-xs uppercase tracking-wider transition-all hover:text-[#f20028]", activeSection === f.id ? "text-[#f20028] font-bold translate-x-2" : "text-black/40")}>
                    {f.num}. {f.id.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* FACTS LIST */}
          <div className="flex-1 space-y-24 md:space-y-40">
            {facts.map((fact) => (
              <div key={fact.num} id={fact.id} className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:gap-8 items-start group scroll-mt-48">
                <div className="flex items-center gap-4 lg:col-span-1">
                  <span className={cn("text-4xl md:text-6xl text-[#f20028] transition-opacity", utoBlack.className, activeSection === fact.id ? "opacity-100" : "opacity-10")}>
                    {fact.num}
                  </span>
                  <div className="h-px flex-1 bg-black/5 lg:hidden" />
                </div>
                
                <div className="lg:col-span-9 max-w-2xl">
                  <h2 className={cn("text-2xl md:text-5xl mb-6 leading-tight", utoBold.className)}>{fact.title}</h2>
                  <div className="text-lg md:text-xl text-black/70 leading-relaxed space-y-6">
                    {fact.content.split('\n\n').map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  
                  {fact.hasVisual && (
                    <div className="my-8 aspect-square md:aspect-video flex items-center justify-center border border-dashed border-black/10 rounded-[32px] text-[10px] uppercase tracking-[0.2em] text-black/30 bg-white/20 backdrop-blur-sm italic">
                      [Visual: {fact.hasVisual === 'hydrolysis' ? 'Molecule Breakdown' : 'Enzyme Synergy'}]
                    </div>
                  )}

                  {fact.hasTable === 'metals' && (
                    <div className="mt-8 bg-white rounded-[32px] p-8 shadow-sm border border-black/5 relative overflow-hidden group/table">
                      <div className="flex items-center justify-between mb-8">
                        <p className={cn("text-xs uppercase tracking-widest", utoBold.className)}>Laboratory Batch Analysis</p>
                        <ShieldCheck className="w-5 h-5 text-[#f20028]" />
                      </div>
                      <div className="space-y-6">
                        {[
                          { m: "Lead (Pb)", c: "0.020", v: "0.028", l: "100x below EU limit" },
                          { m: "Cadmium (Cd)", c: "0.068", v: "0.064", l: "15x below EU limit" }
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
                      <div className="bg-black text-[#f3eee4] rounded-2xl p-6 border border-white/5"><p className="opacity-50 text-[10px] uppercase mb-1">Protein</p><p className="text-3xl md:text-4xl">23g</p></div>
                      <div className="bg-black text-[#f3eee4] rounded-2xl p-6 border border-white/5"><p className="opacity-50 text-[10px] uppercase mb-1">Sugars</p><p className="text-3xl md:text-4xl">&lt;1g</p></div>
                      <div className="bg-black text-[#f3eee4] rounded-2xl p-6 border border-white/5"><p className="opacity-50 text-[10px] uppercase mb-1">Vanilla</p><p className="text-3xl md:text-4xl text-[#ffb300]">133 <span className="text-xs">kcal</span></p></div>
                      <div className="bg-black text-[#f3eee4] rounded-2xl p-6 border border-white/5"><p className="opacity-50 text-[10px] uppercase mb-1">Cacao</p><p className="text-3xl md:text-4xl text-[#ffb300]">137 <span className="text-xs">kcal</span></p></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOAT SCALE QUIZ */}
      <section className="py-20 bg-white relative z-10 border-y border-black/5">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <Thermometer className="w-10 h-10 mx-auto mb-6 text-[#f20028]" />
          <h2 className={cn("text-4xl md:text-6xl mb-4 tracking-tighter", utoBlack.className)}>The Bloat Scale</h2>
          <p className="text-lg text-black/60 mb-12">Be honest. How do you feel 20 minutes after your current shake?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { s: 1, l: "Fine", d: "No issues, just protein." },
              { s: 2, l: "The Brick", d: "A heavy, sitting-in-the-stomach feeling." },
              { s: 3, l: "The Balloon", d: "Visible bloating and audible regret." }
            ].map((q) => (
              <button key={q.s} onClick={() => setQuizScore(q.s)} className={cn("p-8 border rounded-[32px] transition-all text-left flex items-center justify-between group", quizScore === q.s ? "bg-black text-white border-black scale-[0.98]" : "bg-[#f3eee4]/30 border-black/5 hover:border-black/20")}>
                <div>
                  <span className={cn("text-2xl block mb-2", utoBold.className)}>{q.l}</span>
                  <p className="opacity-60 text-xs">{q.d}</p>
                </div>
                <ChevronRight className={cn("w-5 h-5 transition-transform", quizScore === q.s ? "rotate-90" : "opacity-20")} />
              </button>
            ))}
          </div>

          {quizScore && (
            <div className="mt-8 p-10 bg-[#f20028] text-white rounded-[40px] text-left animate-in slide-in-from-bottom-4 duration-500">
              <p className={cn("text-2xl md:text-3xl mb-4", utoBold.className)}>
                {quizScore === 1 ? "You're a lucky one. (Or you're already drinking GUTSY)." : "This is why we hydrolyzed the formula."}
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                Most proteins are giant molecules your gut has to wrestle with. We enzymatically pre-digest ours into tiny peptides so your stomach doesn&apos;t have to do the heavy lifting.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FUN FACTS CAROUSEL */}
      <section className="py-24 bg-[#ffb300] text-black relative z-10">
        <div className="mx-auto max-w-7xl px-8">
            <h2 className={cn("text-4xl md:text-7xl mb-16 tracking-tighter", utoBlack.className)}>The Science <span className={cn("text-2xl md:text-4xl text-black/60 block", runWild.className)}>(but make it fashion)</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { t: "Borrowing from Babies", s: "Hydrolyzed protein was actually developed for premature infants with sensitive tummies. We just stole the science for your post-workout. You're welcome." },
                  { t: "Smart Guts", s: "Your gut has about 500 million neurons. That’s more than your spinal cord. It’s basically a second brain that’s much pickier about what it drinks." },
                  { t: "Acid Trip", s: "Your stomach produces 2 liters of hydrochloric acid every day just to digest food. Gutsy is designed to stay on its good side." },
                  { t: "The Rotten Egg Theory", s: "When protein ferments undigested in your colon, it produces hydrogen sulfide. That's the stuff that smells like a dumpster fire. Let's not do that." }
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
      <section className="py-20 bg-black text-white/30 relative z-10">
        <div className="mx-auto max-w-7xl px-8">
            <div className="flex items-center gap-3 mb-12 text-[#ffb300]">
              <Beaker className="w-5 h-5" />
              <p className="text-xs uppercase tracking-[0.4em]">Scientific Verification Panel</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-20">
                {[
                  "Actazin® clinical data: Anagenix Limited, actazin.com",
                  "Protein quality and hydrolysis data: ZymeBase Inc., zymebase.com",
                  "Third-party laboratory testing: J.S. Hamilton Baltic SIA, Dec 2025",
                  "EU heavy metals limits: Commission Regulation (EC) No 629/2008",
                  "PDCAAS reference: FAO/WHO Expert Consultation, 1991",
                  "FSANZ Actazin® health claim notification"
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-4 py-4 border-t border-white/10">
                    <ShieldCheck className="w-4 h-4 text-[#ffb300] shrink-0" />
                    <span className="text-[10px] uppercase tracking-widest leading-relaxed">{s}</span>
                  </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
