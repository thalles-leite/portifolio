/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    darkMode: 'class', // Ativar o dark mode através de uma classe no body
    theme: {
      extend: {
        // ...suas extensões de tema existentes...
      },
    },
    variants: {
      extend: {
        // ...suas variantes existentes...
      },
    },
  },
  plugins: [],
};
