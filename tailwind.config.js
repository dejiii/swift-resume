/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.3rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        c1: '#EDEEF1',
        c2: '#A1A2A6',
        c3: '#100EB0',
        c4: '#B5B0D3',
        c5: '#6E6F73',
        c6: '#1B1D2D',
        c7: '#4F4DBB',
        // c1: '#EEA088',
        // c2: '#F9F6ED',
        // c3: '#F9E490',
        // c4: '#2A29E8',
        // c5: '#95D6EB',
        // c6: '#140A44',
      },
    },
  },
  plugins: [],
};
