import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    // Ensuring all files in app (including science/ and carousels) are scanned
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette - The GUTSY Core
        linen: '#F3EEE4',
        black: '#000000',
        red: '#F20028',
        yellow: '#FFB300',
        
        // Secondary Palette - Brand Accents
        scarlett: '#560033',
        orange: '#FF5200',
        lilac: '#890EFF',
        pink: '#FF7CFF',
        green: '#00B453',
        blue: '#004EFF',

        // UI Utility Grays
        gutsy: {
          gray: {
            50: '#F9FAF9',
            100: '#F1F1F1',
            400: '#999999',
            900: '#1A1A1A',
          },
        },
      },
      fontFamily: {
        // Mapping your local fonts to CSS variables defined in layout.tsx
        uto: ['var(--font-uto)', 'system-ui', 'sans-serif'],
        crunold: ['var(--font-crunold)', 'serif'],
        runwild: ['var(--font-runwild)', 'cursive'],
      },
      lineHeight: {
        // Specifically for the 1.1x leading required for Uto Var headlines
        'brand-tight': '1.1',
      },
      // Transition and animation utilities for a "premium" feel
      transitionTimingFunction: {
        'brand-out': 'cubic-bezier(0.33, 1, 0.68, 1)', // Smooth deceleration
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};

export default config;