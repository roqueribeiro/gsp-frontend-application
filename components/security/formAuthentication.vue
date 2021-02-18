<template>
  <ValidationObserver
    ref="observer"
    v-slot="{ invalid }"
    tag="form"
    @submit.prevent="signInWithEmailAndPassword()"
  >
    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('security.authorization.username')"
      rules="required|email|min:8"
    >
      <v-text-field
        v-model="email"
        :error-messages="errors"
        :label="$t('security.authorization.username')"
        prepend-inner-icon="mdi-account"
        outlined
        rounded
        clearable
      />
    </ValidationProvider>
    <ValidationProvider
      v-slot="{ errors }"
      :name="$t('security.authorization.password')"
      rules="required|min:6"
    >
      <v-text-field
        v-model="password"
        :error-messages="errors"
        :append-icon="hidePassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="hidePassword ? 'text' : 'password'"
        :label="$t('security.authorization.password')"
        prepend-inner-icon="mdi-lock"
        outlined
        rounded
        @click:append="hidePassword = !hidePassword"
      />
    </ValidationProvider>
    <v-btn
      color="primary"
      block
      depressed
      rounded
      large
      :disabled="invalid"
      @click="signInWithEmailAndPassword()"
      >{{ $t('security.authorization.submit') }}</v-btn
    >
    <v-btn
      class="mt-5"
      depressed
      rounded
      block
      text
      large
      @click="signInWithGoogle()"
    >
      <v-img
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        max-width="18"
        max-height="22"
        class="mr-5"
      ></v-img>
      {{ $t('security.authorization.google') }}
    </v-btn>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'FormAuthentication',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    value: '',
    hidePassword: false,
    email: '',
    password: '',
  }),
  methods: {
    async signInWithEmailAndPassword() {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return false
      }
      this.$emit('showLoading', true)
      await this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push({ path: this.localePath('/adverts') })
        })
        .catch((e) => {
          this.email = ''
          this.password = ''
          this.$emit('errorMessage', e)
        })
        .finally(() => {
          this.$emit('showLoading', false)
        })
    },
    async signInWithGoogle() {
      const provider = new this.$fire.auth.GoogleAuthProvider()
      this.$emit('showLoading', true)
      await this.$fire.auth
        .signInWithPopup(provider)
        .then(() => {
          this.$router.push({ path: this.localePath('/adverts') })
        })
        .catch((e) => {
          this.$emit('errorMessage', e)
        })
        .finally(() => {
          this.$emit('showLoading', false)
        })
    },
  },
}
</script>
