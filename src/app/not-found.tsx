import Link from 'next/link';
import localFont from 'next/font/local';
import { cn } from '@/lib/utils';

const utoBlack = localFont({ src: '../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../public/fonts/RunWild.ttf' });

export default function NotFound() {
  return (
    <div className={cn("bg-[#f3eee4] min-h-screen flex items-center justify-center selection:bg-[#ffb300]/30", utoMedium.className)}>
      <div className="text-center px-6 max-w-lg">
        {/* Lost gut character illustration */}
        <div className="flex justify-center mb-8">
          <svg viewBox="0 0 160 160" className="w-40 h-40" aria-hidden="true">
            <path d="M80 20c-24 0-44 16-48 38-2 14 2 28 10 38 6 8 6 20 2 30-3 8 0 18 8 22 6 4 14 4 20-2 8-8 20-12 28-8 12 6 24-4 24-18 0-10-4-18-6-26-4-14 0-30 8-40 6-8 10-20 6-32-4-14-20-24-38-24z"
              fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2"/>
            <circle cx="66" cy="68" r="3" fill="black"/>
            <circle cx="94" cy="68" r="3" fill="black"/>
            {/* Confused expression */}
            <path d="M72 90 Q80 85 88 90" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
            {/* Question mark */}
            <text x="115" y="45" className="text-[24px] fill-[#f20028] font-bold">?</text>
            {/* Sweat drops */}
            <circle cx="50" cy="50" r="3" fill="#ffb300" opacity="0.3"/>
            <circle cx="110" cy="55" r="2.5" fill="#ffb300" opacity="0.3"/>
          </svg>
        </div>

        <h1 className={cn("text-8xl md:text-[140px] text-black leading-none tracking-tighter mb-4", utoBlack.className)}>
          404
        </h1>
        <p className={cn("text-3xl md:text-4xl text-[#f20028] lowercase mb-6", runWild.className)}>
          this page got lost in the gut
        </p>
        <p className="text-lg text-black/60 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className={cn("inline-flex h-14 items-center px-10 rounded-full bg-black text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300", utoBold.className)}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
