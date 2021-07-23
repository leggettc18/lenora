module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    options: {
      whitelist: [
        'img',
        'pre'
      ]
    }
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}
