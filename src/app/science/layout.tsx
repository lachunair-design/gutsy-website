import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Science | GUTSY — No Wellness Theater',
  description: '16 facts about GUTSY nutrition, hydrolyzed protein, and the New Zealand kiwifruit science that actually fixes your gut.',
  openGraph: {
    title: 'The Science | GUTSY',
    description: 'Third-party tested, enzymatically pre-digested, and 100% transparent. Read the data behind the protein.',
  },
};

export default function ScienceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
