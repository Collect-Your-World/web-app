import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const baseConfig: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{ts,tsx}', // ensure Tailwind scans shared components // ensure Tailwind scans shared components
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Fractul', 'system-ui', 'sans-serif'],
        display: ['Bebas Neue', 'system-ui', 'sans-serif'],
        mono: ['BLMelodyMono', 'ui-monospace', 'monospace'],
      },
      fontWeight: {
        thin: '100',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        heavy: '900',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        'background-light': 'hsl(var(--background-light))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        'button-bg': 'hsl(var(--button-bg))',
        'button-bg-hover': 'hsl(var(--button-bg-hover))',
        'main-green': 'hsl(var(--main-green))',
        gold: 'hsl(var(--gold))',
        'gold-light': 'hsl(var(--gold-light))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(180deg, #E6C760 0%, #D3AF37 45%, #AB8F34 100%)',
        'gold-gradient-hover': 'linear-gradient(180deg, #F0D175 0%, #DDBF4A 45%, #B89A3F 100%)',
        'gold-gradient-horizontal': 'linear-gradient(90deg, #E6C760 0%, #D3AF37 45%, #AB8F34 100%)',
        'gold-gradient-horizontal-hover':
          'linear-gradient(90deg, #F0D175 0%, #DDBF4A 45%, #B89A3F 100%)',
        'gold-gradient-2': 'linear-gradient(180deg, #D3AF37 0%, #AB8F34 100%)',
        'gold-gradient-2-hover': 'linear-gradient(180deg, #DDBF4A 0%, #B89A3F 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default baseConfig;
