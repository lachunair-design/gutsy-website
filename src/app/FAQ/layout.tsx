import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | GUTSY — Shipping, Ingredients, How It Works',
  description: 'Answers to common questions about GUTSY protein powder. Shipping in UAE, ingredients, how to use it, vegan info, and return policy.',
  openGraph: {
    title: 'FAQs | GUTSY',
    description: 'Everything you need to know about GUTSY protein — ingredients, shipping, returns, and more.',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
