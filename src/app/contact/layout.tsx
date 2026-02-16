import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | GUTSY — Questions, Feedback & Partnerships',
  description: 'Get in touch with the GUTSY team. Questions about our protein? Want to stock us in your gym? We respond within 24-48 hours.',
  openGraph: {
    title: 'Contact Us | GUTSY',
    description: 'Get in touch with the GUTSY team. We respond within 24-48 hours.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
