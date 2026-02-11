/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d2d2d',
          light: '#3d3d3d',
          dark: '#1d1d1d',
        },
        secondary: {
          DEFAULT: '#ff00bf',
          light: '#ff33cc',
          dark: '#cc0099',
        },
        accent: {
          DEFAULT: '#ff00bf',
          purple: '#ea00d9',
          green: '#06c167',
        }
      },
    },
  },
  plugins: [],
}
