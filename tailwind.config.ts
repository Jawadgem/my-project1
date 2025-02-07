import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	screens: {
  		sm: '480px',
  		md: '768px',
  		lg: '976px',
  		xl: '1440px'
  	},
  	extend: {
  		colors: {
  			secondaryGolden: '#AF872F',
  			primaryBrown: '#BC9A6C',
  			secondaryGray: '#EDEAE3',
  			primaryYellow: '#FF9F0D',
  			secondaryGreen: '#999966',
  			stateInfo: '#2F80ED',
  			stateSuccess: '#27AE60',
  			stateWarning: '#E2B93B',
  			stateError: '#EB5757',
  			black1: '#1E1E1E',
  			black2: '#1D1D1D',
  			black3: '#282828',
  			myWhite: '#FFFFFF',
  			gray1: '#333333',
  			gray2: '#4F4F4F',
  			gray3: '#828282',
  			gray4: '#BDBDBD',
  			gray5: '#E0E0E0',
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
		  fontFamily: {
			greatVibes: ['Great Vibes', 'cursive'],
			helvitica: ['Helvetica', 'Arial', 'sans-serif'], 
			Ag: ['AGText', 'sans-serif'], 
			miniverRegular: ['Miniver', 'cursive'], 
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
