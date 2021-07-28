module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto']
      },
      typography: (theme) => ({
        DEFAULT: {
          fontFamily: `${theme('fontFamily.sans')}`,
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.gray.700'),
            },
            a: {
              color: "#b794f4",
            },
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}