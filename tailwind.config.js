/**@type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#f87a2d',
        'primary-dark': '#f26c1d',
        'secondary': '#ebba33',
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        '.bg-header' : {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1444.705' height='638.221' viewBox='0 0 1444.705 638.221'%3E%3Cpath fill='%23f26c1d' d='M0 0h1366v638.221H0z'/%3E%3Cpath fill='%23f8772d' d='M0 0h824.214s116.794 164.731-42.745 225.121S472.5 169.855 477.73 282.618 365.455 412.412 305.961 403.225c-125.248-19.341-48.721 235-48.721 235H0z'/%3E%3Cpath fill='%23ba4b05' d='M165.214 31.233c260.979 39.475 263.352-44.957 448.77 0s180.3 126.134 180.3 126.134h-962.67s72.621-165.608 333.6-126.134z' transform='translate(650.41 480.854)'/%3E%3C/svg%3E%0A")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '780px',
        }
      }
      addUtilities(utilities);

      const utilitiesPlatform = {
        '.bg-platform' : {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1366' height='464.325' viewBox='0 0 1366 464.325'%3E%3Cpath fill='%23fef5f3' d='M0-72.265s224.587-92.885 507.078 13.447C616.4-17.668 630.427 5.52 914.132-31.9S1366-43.825 1366-43.825V343.8s-218.971-64.831-660.143-7.624S0 298.282 0 298.282z' transform='translate(0 109.834)'/%3E%3C/svg%3E%0A")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: '652px',
        }
      }
      addUtilities(utilitiesPlatform);
    })
  ],
}
