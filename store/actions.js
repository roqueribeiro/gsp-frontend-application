import middlewareAuthenticated from '~/middleware/authenticated'

export default {
  async nuxtServerInit({ commit }, ctx) {
    const ssrVerifiedAuthUser = ctx.res.verifiedFireAuthUser
    const ssrVerifiedAuthUserClaims = ctx.res.verifiedFireAuthUserClaims
    if (ssrVerifiedAuthUser && ssrVerifiedAuthUserClaims) {
      await commit('SET_AUTH_USER', {
        authUser: ssrVerifiedAuthUser,
        claims: ssrVerifiedAuthUserClaims,
      })
    }
    await middlewareAuthenticated(ctx)
  },
  handleSuccessfulAuthentication({ commit }, { authUser }) {
    if (process.browser && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-auth-sw.js', { scope: '/' })
    }
    commit('SET_AUTH_USER', { authUser })
  },
  async logoutUser({ commit }) {
    await this.$fire.auth.signOut().then(function () {
      commit('RESET_STORE')
    })
  },
}
