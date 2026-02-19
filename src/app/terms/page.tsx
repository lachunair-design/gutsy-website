import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

export const metadata: Metadata = {
  title: 'Terms of Service | GUTSY',
  description: 'GUTSY terms of service for using our website and purchasing our products.',
};

export default function TermsPage() {
  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#ffb300]/30", utoMedium.className)}>
      <section className="bg-black text-[#f3eee4] pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h1 className={cn("text-5xl md:text-8xl leading-[0.85] tracking-tighter mb-4", utoBlack.className)}>
            Terms of Service
          </h1>
          <p className={cn("text-2xl md:text-3xl text-[#ffb300] lowercase italic", runWild.className)}>
            the fine print
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8 space-y-8">
          <p className="text-sm text-black/40 uppercase tracking-wider">Last updated: January 2025</p>

          {[
            { title: 'Agreement to Terms', content: 'By accessing and using the GUTSY website (eatgutsy.com), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.' },
            { title: 'Products and Pricing', content: 'All prices are listed in AED (UAE Dirhams) unless otherwise noted. We reserve the right to modify prices at any time. Prices do not include shipping costs, which will be calculated at checkout.' },
            { title: 'Orders and Payment', content: 'When you place an order, you are making an offer to purchase. We reserve the right to accept or decline your order. Payment is processed securely through our payment provider at the time of checkout.' },
            { title: 'Shipping', content: 'We ship within the UAE. Delivery times are estimates and may vary. Free shipping is available on orders over 150 AED. See our Shipping Policy for full details.' },
            { title: 'Returns and Refunds', content: 'Due to the nature of our products (food and supplements), we can only accept returns of unopened, sealed products within 30 days of delivery. Please contact us at hello@eatgutsy.com to initiate a return.' },
            { title: 'Subscriptions', content: 'Subscribe & Save orders are processed and shipped monthly. You can cancel, pause, or modify your subscription at any time before your next billing date. Subscription prices include a 10% discount off the regular price.' },
            { title: 'Intellectual Property', content: 'All content on this website, including text, images, logos, and graphics, is the property of GUTSY Wellness Co LLC FZ and is protected by copyright and trademark laws.' },
            { title: 'Limitation of Liability', content: 'GUTSY products are dietary supplements and are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a healthcare professional before starting any new supplement regimen.' },
            { title: 'Contact', content: 'For questions about these Terms of Service, contact us at hello@eatgutsy.com.' },
          ].map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className={cn("text-2xl md:text-3xl tracking-tight", utoBold.className)}>{section.title}</h2>
              <p className="text-base md:text-lg text-black/70 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
