import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    colors: {
      main: '#337EA9',
      sub: '#E7F3F8',
      normal: '#787774',
      subnormal: '#F1F1EF',
      semiblack: '#37352F',
      grey: '#CCC',
      white: '#FFF',
      black: '#000',
    },

    listStyleType: {
      disc: 'disc',
      square: 'square',
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
