export default (ctx) => {
  const defaultLocale = ctx.app.i18n.defaultLocale
  const currentLocale = ctx.app.i18n.locale
  const localePath = currentLocale !== defaultLocale ? `/${currentLocale}` : ''

  if (ctx.store.getters.isLoggedIn) {
    if (ctx.route.name.includes('security-authorization')) {
      ctx.redirect(`${localePath}/adverts`)
    }
  } else if (!ctx.store.getters.isLoggedIn) {
    if (!ctx.route.name.includes('security-authorization')) {
      ctx.redirect(`${localePath}/security/authorization`)
    }
  }
}
