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
            nav: {
              a: {
                color: theme('colors.gray.400'),
              }
            },
            h1: {
              color: theme('colors.gray.700'),
            },
            a: {
              color: "#b794f4",
              'text-decoration': "none",
              '&:hover': {
                color: "#000000",
              }
            },
          },
        },
      }),
    },
  },
  variants: {},
  important: "html",
  plugins: [
    require('@tailwindcss/typography'),
  ]
}