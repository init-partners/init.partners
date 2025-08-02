import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero-desktop': ['180px', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'hero-tablet': ['120px', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'hero-mobile': ['48px', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'display': ['72px', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-sm': ['48px', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
      },
      colors: {
        accent: '#000000',
        neutral: {
          50: '#ffffff',
          100: '#f4f4f5',
          200: '#e4e4e7',
          800: '#27272a',
          900: '#000000',
        },
      },
      spacing: {
        '100': '100px',
        '200': '200px',
      },
      screens: {
        'mobile': '390px',
        'tablet': '810px',
        'desktop': '1440px',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'slideUp': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config