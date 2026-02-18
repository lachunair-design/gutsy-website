# GUTSY — Gut-Friendly Protein

A premium e-commerce website for GUTSY protein supplements, built with Next.js 14 and Shopify Headless.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **E-commerce**: Shopify Storefront API (2024-01)
- **Animations**: GSAP (ScrollTrigger, Observer) + Framer Motion
- **Deployment**: Vercel (recommended)

## Features

- Premium lifestyle aesthetic with scroll-driven storytelling
- GSAP-powered scrollytelling section with animated protein molecule breakdown
- Welcome popup with quiz flow and email capture
- Marquee rail with scroll-velocity-reactive speed
- Fun fact carousel with auto-advance timer
- Shopify headless cart with drawer UI and focus trapping
- Fully responsive across all breakpoints
- WCAG AA accessibility (skip-to-content, ARIA labels, focus rings, reduced motion support)
- SEO-optimized metadata with Open Graph and Twitter cards
- Static generation with ISR for product pages

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, scrollytelling, science, ingredients, product lineup, social proof, comparison |
| `/about` | Brand story with parallax hero and vertical marquee |
| `/contact` | Contact form, WhatsApp, and Instagram cards |
| `/FAQ` | Accordion FAQ with deep-linking via hash and sidebar contact card |
| `/products` | Product grid |
| `/products/[handle]` | Dynamic product detail (SSG with revalidation) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/shipping` | Shipping Policy |
| Custom 404 | Illustrated lost-gut-character page |

## Brand

### Colors

| Token | Hex | Usage |
|---|---|---|
| Black | `#000000` | Primary text, backgrounds |
| Red | `#f20028` | CTAs, accents, energy |
| Gold | `#ffb300` | Highlights, secondary CTAs |
| Cream | `#f3eee4` | Page backgrounds, light text |

### Fonts

| Font | Weights | Usage |
|---|---|---|
| **Uto** | Black, Bold, Medium, Regular | Headlines, UI, body |
| **RunWild** | Regular | Handwritten accents, subheadings |

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
│   ├── about/              # Brand story page
│   ├── contact/            # Contact form page
│   ├── FAQ/                # Accordion FAQ page
│   ├── privacy/            # Privacy Policy
│   ├── products/
│   │   └── [handle]/       # Dynamic product detail (SSG)
│   ├── shipping/           # Shipping Policy
│   ├── terms/              # Terms of Service
│   ├── fun-fact-carousel.tsx  # Auto-advancing fun facts
│   ├── scrollytelling.tsx     # GSAP scroll-pinned story
│   ├── globals.css         # Global styles and animations
│   ├── layout.tsx          # Root layout (header, footer, cart, skip-to-content)
│   ├── not-found.tsx       # Custom 404
│   └── page.tsx            # Homepage
├── components/
│   ├── cart/
│   │   └── cart-drawer.tsx    # Slide-out cart with focus trap
│   ├── layout/
│   │   ├── header.tsx         # Fixed header with scroll state
│   │   └── footer.tsx         # 4-column footer with newsletter
│   ├── product/
│   │   ├── product-card.tsx   # Product grid card
│   │   └── product-detail.tsx # Full product page component
│   ├── ui/
│   │   └── button.tsx         # Base button component
│   ├── email-capture.tsx      # Newsletter signup section
│   ├── marquee-rail.tsx       # GSAP horizontal marquee
│   ├── wave-divider.tsx       # SVG section divider
│   └── welcome-popup.tsx      # Quiz-style welcome modal
└── lib/
    ├── shopify/
    │   ├── cart-context.tsx    # Cart state (React Context + localStorage)
    │   ├── index.ts           # Storefront API queries
    │   └── types.ts           # Shopify type definitions
    └── utils.ts               # cn(), formatPrice()
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

## License

MIT
