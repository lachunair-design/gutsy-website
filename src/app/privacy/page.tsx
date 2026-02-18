import localFont from 'next/font/local';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

const utoBlack = localFont({ src: '../../../public/fonts/Uto Black.otf' });
const utoBold = localFont({ src: '../../../public/fonts/Uto Bold.otf' });
const utoMedium = localFont({ src: '../../../public/fonts/Uto Medium.otf' });
const runWild = localFont({ src: '../../../public/fonts/RunWild.ttf' });

export const metadata: Metadata = {
  title: 'Privacy Policy | GUTSY',
  description: 'GUTSY privacy policy. How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className={cn("bg-[#f3eee4] min-h-screen text-black selection:bg-[#ffb300]/30", utoMedium.className)}>
      <section className="bg-black text-[#f3eee4] pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h1 className={cn("text-5xl md:text-8xl leading-[0.85] tracking-tighter mb-4", utoBlack.className)}>
            Privacy Policy
          </h1>
          <p className={cn("text-2xl md:text-3xl text-[#ffb300] lowercase italic", runWild.className)}>
            your data, your rights
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-8 space-y-8">
          <p className="text-sm text-black/40 uppercase tracking-wider">Last updated: January 2025</p>

          {[
            { title: 'Information We Collect', content: 'We collect information you provide directly, such as your name, email address, shipping address, and payment information when you make a purchase or sign up for our newsletter. We also collect certain information automatically, including your IP address, browser type, and browsing behavior on our site.' },
            { title: 'How We Use Your Information', content: 'We use your information to process orders, send order confirmations and shipping updates, respond to your questions and requests, send marketing communications (with your consent), and improve our website and products.' },
            { title: 'Sharing Your Information', content: 'We share your information with service providers who assist us in operating our business, including Shopify (our e-commerce platform), payment processors, and shipping carriers. We do not sell your personal information to third parties.' },
            { title: 'Email Communications', content: 'If you subscribe to our newsletter or make a purchase, we may send you marketing emails. You can unsubscribe at any time by clicking the unsubscribe link in any email or by contacting us directly.' },
            { title: 'Cookies', content: 'We use cookies and similar technologies to improve your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.' },
            { title: 'Data Security', content: 'We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.' },
            { title: 'Your Rights', content: 'You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications at any time. To exercise these rights, please contact us at hello@eatgutsy.com.' },
            { title: 'Contact Us', content: 'If you have any questions about this Privacy Policy, please contact us at hello@eatgutsy.com or through our contact page.' },
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
