<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <p>{{ $t('welcome') }}</p>
        <p>{{ isLoggedIn }}</p>
        <p>{{ authUser }}</p>
      </div>
      <v-btn color="primary" @click="createUserWithEmail()">CreateUser</v-btn>
      <v-btn color="primary" @click="signInWithEmail()">SignIn</v-btn>
      <v-btn color="primary" @click="getAuthenticatedUser()">getUser</v-btn>
      <v-btn color="primary" @click="logout()">logout</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
// hidden-lg-and-up hidden-sm-and-down

import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  head() {
    return {
      title: 'Firebase',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
  computed: {
    ...mapState({
      authUser: (state) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },
  methods: {
    ...mapActions({
      logoutUser: 'logoutUser',
    }),
    getAuthenticatedUser() {
      // eslint-disable-next-line no-console
      console.log(this.authUser)
    },
    createUserWithEmail() {
      this.$fire.auth.createUserWithEmailAndPassword('foo@foo.foo', '123456')
    },
    async signInWithEmail() {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(
          'foo@foo.foo',
          '123456'
        )
      } catch (e) {
        alert(e)
      }
    },
    async logout() {
      try {
        await this.logoutUser()
      } catch (e) {
        alert(e)
      }
    },
  },
}
</script>
