export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/global.css'
  ],
  theme: {
    extend: {
      colors: {
        'qwik': {
          'dark-blue': '#006ce9',
          'light-blue': '#18b6f6',
          'light-purple': '#ac7ff4',
          'dark-purple': '#713fc2',
          'dirty-black': '#1d2033',
          'dark-background': '#151934',
          'dark-text': '#ffffff',
        }
      }
    },
  },
  plugins: [],
} 