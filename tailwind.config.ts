import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
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
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		// Drive prose colours off the same CSS variables as the rest of the site so
  		// blog posts follow the light/dark theme without needing `dark:prose-invert`.
  		typography: {
  			DEFAULT: {
  				css: {
  					'--tw-prose-body': 'hsl(var(--foreground))',
  					'--tw-prose-headings': 'hsl(var(--foreground))',
  					'--tw-prose-lead': 'hsl(var(--muted-foreground))',
  					'--tw-prose-links': 'hsl(var(--primary))',
  					'--tw-prose-bold': 'hsl(var(--foreground))',
  					'--tw-prose-counters': 'hsl(var(--muted-foreground))',
  					'--tw-prose-bullets': 'hsl(var(--muted-foreground))',
  					'--tw-prose-hr': 'hsl(var(--border))',
  					'--tw-prose-quotes': 'hsl(var(--foreground))',
  					'--tw-prose-quote-borders': 'hsl(var(--border))',
  					'--tw-prose-captions': 'hsl(var(--muted-foreground))',
  					'--tw-prose-code': 'hsl(var(--foreground))',
  					'--tw-prose-pre-code': 'hsl(var(--foreground))',
  					'--tw-prose-pre-bg': 'hsl(var(--muted))',
  					'--tw-prose-th-borders': 'hsl(var(--border))',
  					'--tw-prose-td-borders': 'hsl(var(--border))',
  					maxWidth: 'none',
  				}
  			}
  		}
  	}
  },
  plugins: [tailwindcssAnimate, typography],
} satisfies Config;
