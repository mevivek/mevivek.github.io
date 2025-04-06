/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6', // Blue
          dark: '#60A5FA',
        },
        secondary: {
          light: '#6366F1', // Indigo
          dark: '#818CF8',
        },
        background: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },
        surface: {
          light: '#F3F4F6',
          dark: '#374151',
        },
        text: {
          light: '#1F2937',
          dark: '#F9FAFB',
        },
        yellow: {
          400: '#FFD369',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 