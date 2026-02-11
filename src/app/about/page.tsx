import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About | Gutsy',
  description: 'Learn about Gutsy - our mission to provide premium protein supplements for athletes who push their limits.',
};

const values = [
  {
    title: 'Quality First',
    description:
      'We source only the highest quality ingredients and subject every batch to rigorous third-party testing.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
  },
  {
    title: 'Transparency',
    description:
      'Every ingredient is clearly listed. No proprietary blends, no hidden fillers. You know exactly what you are getting.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    title: 'Science-Backed',
    description:
      'Our formulas are based on peer-reviewed research. We only include ingredients proven to deliver results.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      </svg>
    ),
  },
  {
    title: 'Sustainability',
    description:
      'We are committed to reducing our environmental impact through sustainable sourcing and eco-friendly packaging.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
];

const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former professional athlete with a passion for clean nutrition.',
  },
  {
    name: 'Sarah Williams',
    role: 'Head of R&D',
    bio: 'PhD in Nutritional Science with 10+ years in supplement formulation.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Operations Director',
    bio: 'Supply chain expert ensuring quality from source to shelf.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gutsy-black text-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Built for Athletes,
              <br />
              By Athletes
            </h1>
            <p className="text-lg md:text-xl text-gutsy-gray-300">
              Gutsy was founded on a simple belief: athletes deserve supplements that
              match their dedication. No compromises, no shortcuts, just pure
              performance nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gutsy-black mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gutsy-gray-600">
                <p>
                  Gutsy started in 2020 when our founder, a former professional
                  athlete, grew frustrated with the supplement industry. Too many
                  products were filled with unnecessary additives, misleading labels,
                  and questionable ingredients.
                </p>
                <p>
                  We set out to create something different: supplements that are as
                  clean and straightforward as the athletes who use them. Every
                  product is formulated with purpose, tested for purity, and designed
                  to deliver real results.
                </p>
                <p>
                  Today, Gutsy serves thousands of athletes worldwide, from weekend
                  warriors to Olympic competitors. Our mission remains the same: to
                  fuel ambition with uncompromising quality.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gutsy-gray-100 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gutsy-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-24 h-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gutsy-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gutsy-black mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gutsy-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gutsy-black text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gutsy-black mb-2">
                  {value.title}
                </h3>
                <p className="text-gutsy-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gutsy-black mb-4">
              Meet the Team
            </h2>
            <p className="text-lg text-gutsy-gray-600 max-w-2xl mx-auto">
              The people behind Gutsy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 bg-gutsy-gray-200 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gutsy-black">
                  {member.name}
                </h3>
                <p className="text-sm text-gutsy-gray-500 mb-2">{member.role}</p>
                <p className="text-sm text-gutsy-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gutsy-black text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join the Movement?
          </h2>
          <p className="text-lg text-gutsy-gray-300 max-w-2xl mx-auto mb-8">
            Experience the difference of truly clean, effective supplements.
          </p>
          <Link href="/products">
            <Button
              size="lg"
              className="bg-white text-gutsy-black hover:bg-gutsy-gray-100"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
