import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'], // Specifica i file in cui cercare le classi
  theme: {
    extend: {
      colors: {
        body: '#ffc183',
        bodyLight: '#FFE5CA',
      },
      animation: {
        fadeInLeft: 'fade-left 1s backwards',
        fadeInBottom: 'fade-bottom 1s backwards',
      },
      keyframes: {
        'fade-left': {
          from: {
            transform: 'translateX(-100px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0px)',
            opacity: '1',
          },
        },
        'fade-bottom': {
          from: {
            transform: 'translateY(100px)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;