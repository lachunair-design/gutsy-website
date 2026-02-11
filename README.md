# Gutsy - Premium Protein E-Commerce

A modern, headless e-commerce website for Gutsy protein supplements built with Next.js and Shopify.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **E-commerce**: Shopify Storefront API (Headless)
- **Deployment**: Vercel (recommended)

## Features

- Clean, minimal design
- Fully responsive
- Shopify integration for products and cart
- Server-side rendering for SEO
- Fast page loads with Next.js optimization

## Pages

- **Home** - Hero section, featured products, and CTA
- **Products** - Product grid with all items
- **Product Detail** - Individual product pages
- **About** - Company story and values
- **Contact** - Contact form and FAQ

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Shopify store with Storefront API access

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/gutsy.git
   cd gutsy
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
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── products/          # Products listing and detail pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── cart/              # Cart components
│   ├── layout/            # Header, Footer
│   ├── product/           # Product components
│   └── ui/                # UI primitives
└── lib/                   # Utilities and integrations
    ├── shopify/           # Shopify API integration
    └── utils.ts           # Helper functions
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

The project can be deployed to any platform that supports Next.js, including:
- Netlify
- AWS Amplify
- Railway
- Self-hosted

## Customization

### Colors

Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  gutsy: {
    black: '#0a0a0a',
    accent: '#10b981', // Change accent color
    // ...
  }
}
```

### Fonts

The project uses Inter by default. Change fonts in `src/app/layout.tsx`.

## License

MIT
