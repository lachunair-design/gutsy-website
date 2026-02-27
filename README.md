# GUTSY — Gut-Friendly Protein

A premium e-commerce website for GUTSY protein supplements, built with Next.js 14 and Shopify Headless.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **E-commerce**: Shopify Storefront API (2024-01)
- **Animations**: GSAP (ScrollTrigger, Observer) + Framer Motion
- **Smooth Scroll**: Lenis
- **Lottie**: @lottiefiles/dotlottie-react
- **Text Splitting**: SplitType
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Features

- Premium lifestyle aesthetic with scroll-driven storytelling
- GSAP-powered horizontal scrollytelling with Lottie animations and SplitType text reveals
- The Logic carousel with rotating gut-science facts and auto-advance timer
- Brand-copy-aligned homepage sections (How it works, Problem / solution, Who it’s for)
- Welcome popup with email capture and 10% discount code flow
- Marquee rail with scroll-velocity-reactive speed (GSAP Observer)
- Proof slider testimonial carousel with IntersectionObserver
- Shopify headless cart with drawer UI and focus trapping
- Page transition overlays with context-driven curtain animations
- Canvas particle field effect (global fixed overlay)
- First-visit words loader entry animation
- Gut quiz flow to match visitors with Vanilla Calm, Cacao Boost, or both
- Lenis smooth scroll integrated with GSAP ScrollTrigger
- Fully responsive across all breakpoints
- WCAG AA accessibility (skip-to-content, ARIA labels, focus rings, reduced motion support)
- SEO-optimized metadata with Open Graph and Twitter cards
- Static generation with ISR for product pages

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, quick benefits, marquee rail, how it works, product lineup, comparison table, who it’s for, proof slider, logic carousel, refund guarantee, quiz teaser |
| `/science` | The Logic — 16 science facts with sticky nav, scroll progress, and bloat scale |
| `/about` | The Accidental Backstory — brand story with parallax hero and founder cards |
| `/contact` | Human Support — contact form, WhatsApp, Instagram, email cards |
| `/FAQ` | Boring Answers — accordion FAQ with category sidebar and deep-linking |
| `/products` | The Goods — product detail, amazing vs less amazing, no-list, science section |
| `/products/[handle]` | Dynamic product detail (SSG with revalidation) |
| `/quiz` | Quiz — “Find your gut-friendly shake” 6-question flow with email capture and flavor match |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/shipping` | Shipping Policy |
| Custom 404 | Illustrated lost-gut-character page |

## Brand Identity

### Primary Palette
| Token | Hex | Usage |
|---|---|---|
| **Linen** | `#F3EEE4` | Page backgrounds, secondary text |
| **Black** | `#000000` | Primary headlines, body text |
| **Red** | `#F20028` | Primary CTAs, urgent accents |
| **Yellow** | `#FFB300` | Highlights, secondary CTAs |

### Secondary Palette
| Token | Hex | RGB |
|---|---|---|
| **Scarlett** | `#560033` | 86/0/51 |
| **Orange** | `#FF5200` | 255/82/0 |
| **Lilac** | `#890EFF` | 137/14/255 |
| **Pink** | `#FF7CFF` | 255/124/255 |
| **Green** | `#00B453` | 0/180/83 |
| **Blue** | `#004EFF` | 0/78/255 |

### Typography

- **Primary: Uto** (Black, Bold, Medium, Var Regular). Headlines follow 1.1x leading.
- **Secondary: Crunold**. High-contrast typeface for brand emphasis.
- **Tertiary: RunWild**. Handwritten accents for human-touch subheadings.

Font files live in `public/fonts/` and are loaded via `next/font/local`.

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Shopify store with Storefront API access

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd gutsy-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Shopify credentials to `.env.local`:
   ```
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-token
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Shopify Setup

### Creating a Storefront API Token

1. Go to your Shopify Admin
2. Navigate to Settings > Apps and sales channels
3. Click "Develop apps"
4. Create a new app
5. Configure Storefront API scopes:
   - `unauthenticated_read_product_listings`
   - `unauthenticated_read_product_inventory`
   - `unauthenticated_write_checkouts`
   - `unauthenticated_read_checkouts`
6. Install the app and copy the Storefront API access token

## Project Structure

```
src/
├── app/
│   ├── about/                 # The Accidental Backstory page
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── contact/               # Human Support page
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── FAQ/                   # Boring Answers page
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── privacy/               # Privacy Policy
│   │   └── page.tsx
│   ├── products/
│   │   ├── [handle]/          # Dynamic product detail (SSG)
│   │   │   └── page.tsx
│   │   └── page.tsx           # The Goods (product listing)
│   ├── quiz/                  # Gut quiz (find your match)
│   │   └── page.tsx
│   ├── science/               # The Logic (16 facts)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── shipping/              # Shipping Policy
│   │   └── page.tsx
│   ├── terms/                 # Terms of Service
│   │   └── page.tsx
│   ├── the-logic-carousel.tsx # Auto-advancing gut-science facts carousel
│   ├── scrollytelling.tsx     # GSAP horizontal scroll-pinned story (4 panels)
│   ├── globals.css            # Global styles, font faces, animations
│   ├── layout.tsx             # Root layout (header, footer, cart, particles, transitions)
│   ├── not-found.tsx          # Custom 404 (lost gut character)
│   ├── page.tsx               # Homepage
│   ├── robots.ts              # SEO robots config
│   └── sitemap.ts             # Sitemap generation
├── components/
│   ├── animations/
│   │   └── home-animations.tsx    # GSAP scroll animations for homepage sections
│   ├── cart/
│   │   └── cart-drawer.tsx        # Slide-out shopping bag with focus trap
│   ├── effects/
│   │   ├── particle-field.tsx     # Canvas particle effect (fixed global overlay)
│   │   └── radial-marquee.tsx     # Rotating circular marquee text
│   ├── layout/
│   │   ├── header.tsx             # Fixed nav with scroll state and mobile menu
│   │   └── footer.tsx             # 4-column footer with newsletter signup
│   ├── loaders/
│   │   └── words-loader.tsx       # Entry animation overlay (first visit only)
│   ├── product/
│   │   ├── product-card.tsx       # Product grid card
│   │   └── product-detail.tsx     # Full product page component
│   ├── quiz/
│   │   └── gut-quiz.tsx           # Stateful 6-question gut quiz with email gate
│   ├── providers/
│   │   └── smooth-scroll-provider.tsx  # Lenis smooth scroll + GSAP sync
│   ├── reviews/
│   │   └── proof-slider.tsx       # Testimonial carousel with IntersectionObserver
│   ├── transitions/
│   │   ├── transition-context.tsx     # Page transition context & hook
│   │   ├── page-transition-overlay.tsx # Transition curtain overlay
│   │   └── transition-link.tsx        # Drop-in Link replacement with transitions
│   ├── ui/
│   │   ├── button.tsx             # Base button (primary, secondary, outline, ghost)
│   │   └── tooltip.tsx            # Pure CSS tooltip
│   ├── email-capture.tsx          # Newsletter signup (compact & full variants)
│   ├── marquee-rail.tsx           # GSAP horizontal marquee with Observer (brand-copy aligned items)
│   ├── wave-divider.tsx           # RippedDivider SVG section divider
│   └── welcome-popup.tsx          # Session popup with email capture
└── lib/
    ├── shopify/
    │   ├── cart-context.tsx        # Cart state (React Context + localStorage)
    │   ├── index.ts               # Storefront API functions
    │   ├── queries.ts             # GraphQL fragments and queries
    │   └── types.ts               # Shopify type definitions
    └── utils.ts                   # cn(), formatPrice()
```

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js, including Netlify, AWS Amplify, Railway, or self-hosted.

## Remaining Visual / Structural Work

What’s still mainly visual/structural rather than copy: The optional sticky add-to-cart bar on PDP, kiwi/molecule illustration components, deeper section shape/gradient refresh, and a full spacing/overflow audit (Phase 4a, 5b–5e, 6a–6b) are not yet implemented; if you want, I can tackle those next, but from a copy + brand voice standpoint, the site is now consistent with the deck.

## License

MIT
