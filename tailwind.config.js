// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            // Styles for inline math (span.katex)
            '.katex': {
              fontSize: '1em',
              color: theme('colors.gray.800'),
            },
            // Styles for display math blocks (div.katex-display)
            '.katex-display': {
              display: 'block',
              margin: `${theme('spacing.4')} 0`, 
              textAlign: 'center',
              overflowX: 'auto',  // Handle wide equations
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}