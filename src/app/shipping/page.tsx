import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { Metadata } from 'next';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

export const metadata: Metadata = {
  title: 'Shipping Policy | GUTSY',
  description: 'GUTSY shipping policy. Free shipping across UAE on orders over 150 AED.',
};

export default function ShippingPage() {
  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#ffb300]/30", utoMedium.className)}>
      <section className="bg-black text-[#f3eee4] pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h1 className={cn("text-5xl md:text-8xl leading-[0.85] tracking-tighter mb-4", utoBlack.className)}>
            Shipping Policy
          </h1>
          <p className={cn("text-2xl md:text-3xl text-[#ffb300] lowercase italic", runWild.className)}>
            getting gutsy to your door
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Free Shipping', detail: 'On orders over 150 AED', icon: '🚚' },
              { label: 'Delivery Time', detail: '2-5 business days within UAE', icon: '📦' },
              { label: 'Track Your Order', detail: 'Email updates at every step', icon: '📍' },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-3xl p-6 shadow-md text-center">
                <p className="text-3xl mb-3" aria-hidden="true">{item.icon}</p>
                <h3 className={cn("text-lg uppercase tracking-wide mb-1", utoBold.className)}>{item.label}</h3>
                <p className="text-sm text-black/60">{item.detail}</p>
              </div>
            ))}
          </div>

          {[
            { title: 'Shipping Rates', content: 'Orders over 150 AED qualify for free standard shipping within the UAE. For orders under 150 AED, a flat shipping fee of 20 AED applies. Rates are calculated at checkout.' },
            { title: 'Processing Time', content: 'Orders are typically processed within 1-2 business days. You will receive a confirmation email with tracking information once your order has shipped.' },
            { title: 'Delivery Areas', content: 'We currently ship to all Emirates within the UAE: Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.' },
            { title: 'International Shipping', content: 'We are currently focused on serving customers within the UAE. International shipping will be available soon. Sign up for our newsletter to be notified when we expand.' },
            { title: 'Subscription Deliveries', content: 'Subscribe & Save orders are shipped automatically on a monthly basis. You will receive a reminder email 3 days before each shipment, giving you time to modify or skip your delivery.' },
            { title: 'Issues With Your Order', content: 'If your order arrives damaged or incorrect, please contact us within 48 hours at hello@eatgutsy.com with photos of the issue. We will arrange a replacement or refund promptly.' },
          ].map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className={cn("text-2xl md:text-3xl tracking-tight", utoBold.className)}>{section.title}</h2>
              <p className="text-base md:text-lg text-black/70 leading-relaxed">{section.content}</p>
            </div>
          ))}

          <div className="bg-black rounded-3xl p-8 md:p-10 text-center">
            <h3 className={cn("text-3xl text-[#f3eee4] mb-3", utoBlack.className)}>Still have questions?</h3>
            <p className={cn("text-xl text-[#ffb300] lowercase mb-6", runWild.className)}>we&apos;re here to help</p>
            <Link
              href="/contact"
              className={cn("inline-flex h-14 items-center px-10 rounded-full bg-[#f20028] text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300", utoBold.className)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
