module.exports = {
  methods: {
    /**
     * Translate the given key.
     */
    __(key, replace) {
      let translation = Nova.config('translations')[key]
        ? Nova.config('translations')[key]
        : key

      _.forEach(replace, (value, key) => {
        translation = translation.replace(':' + key, value)
      })

      return translation
    },
  },
}
