/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'bg-[#74070E]', // Cherry Red
    'text-[#74070E]',
    'bg-[#FFEDA8]', // Butter Yellow
    'text-[#FFEDA8]',
    'bg-[#B0A6DE]', // Aura Indigo
    'text-[#B0A6DE]',
    'bg-[#4EB813]', // Dill Green
    'text-[#4EB813]',
    'bg-[#F0E7DA]', // Alpine Oat
    'text-[#F0E7DA]',
    'text-[#163B3B]', // Dark alt colour
    'text-[#569F6E]', // Default green (from Figma design)
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      green: {
        100: '#738989',
        200: '#456262',
        300: '#245050',
        400: '#163B3B',
        500: '#0F2828',
      },
      lime: {
        100: '#E0F7E8',
        200: '#A2E8B9',
        300: '#83E1A1',
        400: '#64D98A',
        500: '#569F6E',
      },
      gray: {
        100: '#FAFAFA',
        200: '#DDDDDD',
        300: '#9A9A9A',
        400: '#797979',
        500: '#232323',
      },
    },
  },
}
