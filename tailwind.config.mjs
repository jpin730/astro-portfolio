/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.4xl') },
        h2: { fontSize: theme('fontSize.2xl') },
        h3: { fontSize: theme('fontSize.xl') },
        h4: { fontSize: theme('fontSize.lg') },
        h5: { fontSize: theme('fontSize.base') },
        h6: { fontSize: theme('fontSize.sm') },
        p: { fontSize: theme('fontSize.base') },
      })
    },
  ],
}
