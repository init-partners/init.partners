import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-inter)',
  				'sans-serif'
  			],
  			mono: [
  				'var(--font-jetbrains)',
  				'monospace'
  			]
  		},
  		fontSize: {
  			'hero-desktop': [
  				'180px',
  				{
  					lineHeight: '0.9',
  					letterSpacing: '-0.04em'
  				}
  			],
  			'hero-tablet': [
  				'120px',
  				{
  					lineHeight: '0.9',
  					letterSpacing: '-0.04em'
  				}
  			],
  			'hero-mobile': [
  				'48px',
  				{
  					lineHeight: '0.9',
  					letterSpacing: '-0.04em'
  				}
  			],
  			display: [
  				'72px',
  				{
  					lineHeight: '0.9',
  					letterSpacing: '-0.02em'
  				}
  			],
  			'display-sm': [
  				'48px',
  				{
  					lineHeight: '0.9',
  					letterSpacing: '-0.02em'
  				}
  			]
  		},
  		colors: {
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			neutral: {
  				'50': '#ffffff',
  				'100': '#f4f4f5',
  				'200': '#e4e4e7',
  				'800': '#27272a',
  				'900': '#000000'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		spacing: {
  			'100': '100px',
  			'200': '200px'
  		},
  		screens: {
  			mobile: '390px',
  			tablet: '810px',
  			desktop: '1440px'
  		},
  		animation: {
  			marquee: 'marquee 25s linear infinite',
  			fadeInUp: 'fadeInUp 0.6s ease-out',
  			slideUp: 'slideUp 0.8s ease-out'
  		},
  		keyframes: {
  			marquee: {
  				'0%': {
  					transform: 'translateX(100%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			fadeInUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(30px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			slideUp: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(60px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
