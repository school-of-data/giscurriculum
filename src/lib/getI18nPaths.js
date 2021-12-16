import i18nConfig from '../../next-i18next.config'

export const getI18nPaths = () => i18nConfig.i18n.locales.map((lng) => ({
  params: {
    locale: lng,
  },
}))




// export const getNestedI18nPaths = () => i18nConfig.i18n.locales.map((lng) => (
//   i18nConfig.i18n.countries.map((country) => ({
//     params: {
//       locale: lng,
//       country: 'bangladesh'
//     }
//   }))
// ))