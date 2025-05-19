import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#D6336C',   
          DEFAULT: '#8A2BE2', 
          dark: '#0033A0',    
        },
        text: {
          light: '#f8fafc',
          dark: '#020617',
        },
        background: {
          dark: '#141414',
        },
      },
      boxShadow: {
        card: '0 10px 25px -5px rgba(0,0,0,0.7), 0 5px 10px -5px rgba(0,0,0,0.3)',
        'card-hover': '0 20px 50px -10px rgba(0,0,0,0.9)',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [
    typography,
    aspectRatio
  ],
  darkMode: 'class',
};

export default config;
