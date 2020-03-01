<template>
  <!-- <ValidationProvider v-slot="{ errors }" rules="required|alpha">
    <input v-model="value" type="text" />
    <span>{{ errors[0] }}</span>
  </ValidationProvider> -->
  <ValidationObserver
    ref="observer"
    v-slot="{ invalid }"
    tag="form"
    @submit.prevent="signInWithEmailAndPassword()"
  >
    <ValidationProvider
      v-slot="{ errors }"
      name="Email"
      rules="required|email|min:8"
    >
      <v-text-field
        v-model="email"
        :error-messages="errors"
        :label="$t('security.authorization.username')"
        name="login"
        prepend-inner-icon="mdi-account"
        outlined
        rounded
        clearable
      />
    </ValidationProvider>
    <ValidationProvider
      v-slot="{ errors }"
      name="Password"
      rules="required|min:6"
    >
      <v-text-field
        v-model="password"
        :error-messages="errors"
        :append-icon="hidePassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="hidePassword ? 'text' : 'password'"
        :label="$t('security.authorization.password')"
        name="password"
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
  </ValidationObserver>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'FormAuthentication',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    value: '',
    hidePassword: false,
    email: '',
    password: ''
  }),
  methods: {
    async signInWithEmailAndPassword() {
      const isValid = await this.$refs.observer.validate()
      if (!isValid) {
        return false
      }
      this.$emit('showLoading', true)
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        )
      } catch (e) {
        this.$emit('errorMessage', e)
      } finally {
        this.$emit('showLoading', false)
        this.email = ''
        this.password = ''
      }
    }
  }
}
</script>
