import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });

export function WhoItsForSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className={cn("text-4xl md:text-6xl tracking-tighter leading-tight mb-10 text-center", utoBlack.className)}>
          Who it’s for
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className={cn("text-xs uppercase tracking-[0.3em] text-black/40 mb-4 font-black", utoMedium.className)}>
              For you if:
            </h3>
            <ul className="space-y-3 text-base md:text-lg text-black/80">
              <li>• You like hitting your protein goals but hate feeling like a parade float.</li>
              <li>• You have tried “clean” proteins that somehow still wrecked your digestion.</li>
              <li>• You read ingredient lists and want fewer, better ones.</li>
            </ul>
          </div>
          <div>
            <h3 className={cn("text-xs uppercase tracking-[0.3em] text-black/40 mb-4 font-black", utoMedium.className)}>
              Probably not for you if:
            </h3>
            <ul className="space-y-3 text-base md:text-lg text-black/80">
              <li>• You want the absolute cheapest protein per gram.</li>
              <li>• You are chasing instant miracles instead of consistent habits.</li>
              <li>• You love that thick, gluey, dessert‑shake texture that comes from multiple gums.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

