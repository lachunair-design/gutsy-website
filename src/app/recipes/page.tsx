import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

const RECIPES = [
  {
    name: 'GUTSY Overnight Oats',
    desc: 'Vanilla Calm, oats, and nut butter for mornings where your gut wants something predictable.',
    ingredients: [
      '1 scoop Vanilla Calm',
      '1/2 cup rolled oats',
      '1 cup oat or almond milk',
      '1 tbsp nut butter',
      '1/2 banana, sliced',
      'Pinch of cinnamon',
    ],
    steps: [
      'Stir everything except the banana together in a jar.',
      'Leave in the fridge overnight.',
      'Top with sliced banana in the morning and eat cold.',
    ],
  },
  {
    name: 'Cacao Power Smoothie',
    desc: 'Cacao Boost, frozen banana, and almond milk for a not-quite-dessert shake that still feels light.',
    ingredients: [
      '1 scoop Cacao Boost',
      '1 frozen banana',
      '1 cup almond milk',
      'A handful of ice',
      'Optional: 1 tbsp peanut butter',
    ],
    steps: [
      'Add all ingredients to a blender.',
      'Blend on high until completely smooth.',
      'Pour into a cold glass and drink immediately.',
    ],
  },
  {
    name: 'GUTSY Iced Coffee',
    desc: 'Vanilla Calm plus cold brew for people who like caffeine but not chaos.',
    ingredients: [
      '1 scoop Vanilla Calm',
      '150ml strong cold brew coffee',
      '150ml oat milk',
      'Ice cubes',
    ],
    steps: [
      'Shake Vanilla Calm with cold brew and oat milk until smooth.',
      'Pour over ice in a tall glass.',
      'Sip slowly. Try not to answer all your emails at once.',
    ],
  },
  {
    name: 'Protein Yogurt Bowl',
    desc: 'A thick, spoonable bowl that does not feel like a brick afterwards.',
    ingredients: [
      '1 scoop Vanilla Calm',
      '3/4 cup thick coconut or plant-based yogurt',
      'A handful of granola',
      'Fresh berries',
      'Drizzle of nut butter',
    ],
    steps: [
      'Stir Vanilla Calm into the yogurt until completely smooth.',
      'Top with granola, berries, and a drizzle of nut butter.',
      'Eat with a spoon and pretend it is dessert.',
    ],
  },
  {
    name: 'Cacao Energy Bites',
    desc: 'Cacao Boost, dates, and oats for something you can eat between calls.',
    ingredients: [
      '1 scoop Cacao Boost',
      '1 cup rolled oats',
      '8–10 soft dates, pitted',
      '2 tbsp coconut oil',
      'Pinch of salt',
    ],
    steps: [
      'Pulse everything in a food processor until it sticks together.',
      'Roll into small balls and chill for 30 minutes.',
      'Store in the fridge and grab when you need a steady lift.',
    ],
  },
  {
    name: 'Post-Workout Shake',
    desc: 'Cacao Boost, banana, and peanut butter for the “I actually trained today” days.',
    ingredients: [
      '1 scoop Cacao Boost',
      '1 banana',
      '1.5 cups almond milk',
      '1 tbsp peanut butter',
      'Ice cubes',
    ],
    steps: [
      'Blend all ingredients until smooth.',
      'Adjust liquid if you prefer it thicker or thinner.',
      'Drink within an hour of training and let your gut relax.',
    ],
  },
];

export default function RecipesPage() {
  return (
    <div className="bg-linen min-h-screen pt-32 pb-24">
      <section className="max-w-5xl mx-auto px-6 mb-12">
        <p className={cn("text-[10px] uppercase tracking-[0.4em] text-black/40 font-black mb-3", utoMedium.className)}>
          Ways to use it
        </p>
        <h1 className={cn("text-4xl md:text-6xl leading-tight mb-3", utoBlack.className)}>
          Ways to Use GUTSY
        </h1>
        <p className={cn("text-lg md:text-xl text-black/75 leading-relaxed max-w-2xl", utoMedium.className)}>
          Not just a shaker‑bottle thing. These recipes keep the same light, gut‑friendly logic and
          give you more ways to actually finish the bag.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {RECIPES.map((recipe) => (
          <article key={recipe.name} className="bg-white rounded-[32px] p-6 md:p-8 border border-black/5 shadow-sm flex flex-col">
            <h2 className={cn("text-2xl md:text-3xl mb-2", utoBlack.className)}>{recipe.name}</h2>
            <p className={cn("text-sm md:text-base text-black/70 mb-4", utoMedium.className)}>
              {recipe.desc}
            </p>
            <div className="grid grid-cols-1 gap-4 text-sm md:text-base text-black/80 flex-1">
              <div>
                <h3 className={cn("text-xs uppercase tracking-[0.25em] text-black/40 mb-2 font-black", utoMedium.className)}>
                  Ingredients
                </h3>
                <ul className="list-disc pl-4 space-y-1">
                  {recipe.ingredients.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className={cn("text-xs uppercase tracking-[0.25em] text-black/40 mb-2 font-black", utoMedium.className)}>
                  Instructions
                </h3>
                <ol className="list-decimal pl-4 space-y-1">
                  {recipe.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

