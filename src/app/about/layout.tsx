import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story | GUTSY — How We Made Protein That Feels Light',
  description: 'Born in a kitchen in Dubai. GUTSY was created because every protein powder caused bloating. We fixed it with enzymatic pre-digestion.',
  openGraph: {
    title: 'Our Story | GUTSY',
    description: 'Born in a kitchen in Dubai. We fixed protein with enzymatic pre-digestion.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
