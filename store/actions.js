export default {
  async nuxtServerInit({ commit }, ctx) {
    const ssrVerifiedAuthUser = ctx.res.verifiedFireAuthUser
    const ssrVerifiedAuthUserClaims = ctx.res.verifiedFireAuthUserClaims
    if (ssrVerifiedAuthUser && ssrVerifiedAuthUserClaims) {
      await commit('SET_AUTH_USER', {
        authUser: ssrVerifiedAuthUser,
        claims: ssrVerifiedAuthUserClaims
      })
    }
  },
  handleSuccessfulAuthentication({ commit }, { authUser }) {
    if (process.browser && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-auth-sw.js', { scope: '/' })
    }
    commit('SET_AUTH_USER', { authUser })
  },
  async logoutUser({ commit, dispatch }) {
    try {
      await this.$fireAuth.signOut()
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    } finally {
      commit('RESET_STORE')
    }
  }
}
