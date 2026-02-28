import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        linen: '#F3EEE4',
        // Added a "Soft" version of linen for the top of gradients
        'linen-light': '#F9F7F2', 
        black: '#000000',
        red: '#F20028',
        yellow: '#FFB300',
        
        // Secondary Palette
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
        uto: ['var(--font-uto)', 'system-ui', 'sans-serif'],
        crunold: ['var(--font-crunold)', 'serif'],
        runwild: ['var(--font-runwild)', 'cursive'],
      },
      lineHeight: {
        'brand-tight': '1.1',
        'brand-none': '0.85', // Matches the tight EDM headlines
      },
      backgroundImage: {
        // This creates the "Halo" glow effect seen in the screenshot
        'glow-gradient': 'radial-gradient(circle, rgba(255,179,0,0.4) 0%, rgba(243,238,228,0) 70%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)',
      },
      transitionTimingFunction: {
        'brand-out': 'cubic-bezier(0.33, 1, 0.68, 1)',
      },
      // Added for the rounded image aesthetics in the design
      borderRadius: {
        'brand-xl': '60px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};

export default config;