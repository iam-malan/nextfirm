import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
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
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
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
  			},
        gold: {
          '50': '#FBF5B7',
          '100': '#F6E79F',
          '200': '#F1D987',
          '300': '#EBCA6F',
          '400': '#E6BC57',
          '500': '#BF953F',
          '600': '#AA771C',
          '700': '#8C5E0E',
          '800': '#6F4700',
          '900': '#523600'
        }
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      boxShadow: {
        'gold-soft': '0 4px 6px -1px rgba(191, 149, 63, 0.1), 0 2px 4px -1px rgba(191, 149, 63, 0.06)',
        'gold-medium': '0 10px 15px -3px rgba(191, 149, 63, 0.2), 0 4px 6px -2px rgba(191, 149, 63, 0.1)',
      },
      transitionProperty: {
        'colors-all': 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
