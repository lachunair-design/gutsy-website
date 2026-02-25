import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Random Answers | GUTSY — No Wellness Theater',
  description: 'Everything you need to know about GUTSY protein, health, and nutrition. Stark facts, zero fillers.',
  openGraph: {
    title: 'Random Answers | GUTSY',
    description: 'The editorial deep-dive into GUTSY ingredients and science.',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
