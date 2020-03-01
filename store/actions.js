/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-throw-literal */
export default {
  nuxtServerInit({ commit }, ctx) {
    if (this.$fireAuth === null) {
      throw 'nuxtServerInit Example not working - this.$fireAuth cannot be accessed.'
    }

    if (ctx.$fireAuth === null) {
      throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
    }

    if (ctx.app.$fireAuth === null) {
      throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
    }

    console.info(
      'Success. Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'
    )

    /** Get the VERIFIED authUser from the server */

    let ssrVerifiedAuthUser, ssrVerifiedAuthUserClaims
    // ctx.res does not exist in nuxt "generate mode"
    if (ctx.res) {
      ctx.res.verifiedFireAuthUser
      ctx.res.verifiedFireAuthUserClaims
    }

    if (ssrVerifiedAuthUserClaims) {
      console.info(
        'Auth User verified on server-side. User: ',
        ssrVerifiedAuthUser,
        'Claims:',
        ssrVerifiedAuthUserClaims
      )
      commit('SET_AUTH_USER', {
        authUser: ssrVerifiedAuthUser
      })
    }
  },

  handleSuccessfulAuthentication({ commit }, { authUser, claims }) {
    if (process.browser && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-auth-sw.js', { scope: '/' })
    }
    commit('SET_AUTH_USER', { authUser })
  },

  checkVuexStore(ctx) {
    if (this.$fireAuth === null) {
      throw 'Vuex Store example not working - this.$fireAuth cannot be accessed.'
    }

    alert(
      'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
    )
  },

  async logoutUser({ commit, dispatch }) {
    try {
      await this.$fireAuth.signOut()
    } catch (e) {
      console.error(e)
    } finally {
      commit('RESET_STORE')
    }
  }
}
