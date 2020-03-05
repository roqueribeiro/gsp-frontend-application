<template>
  <ValidationObserver ref="observer" tag="form">
    <ValidationProvider
      v-slot="{ errors }"
      name="Senha Atual"
      rules="required|max:10"
    >
      <v-text-field
        :error-messages="errors"
        :append-icon="hidePassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="hidePassword ? 'text' : 'password'"
        label="Senha Atual"
        prepend-inner-icon="mdi-lock"
        outlined
        rounded
        @click:append="hidePassword = !hidePassword"
      />
    </ValidationProvider>
    <ValidationProvider
      v-slot="{ errors }"
      name="Nova Senha"
      rules="required|max:10"
    >
      <v-text-field :error-messages="errors" label="Nova Senha" filled dense />
    </ValidationProvider>
    <ValidationProvider
      v-slot="{ errors }"
      name="Repetir Nova Senha"
      rules="required|max:10"
    >
      <v-text-field
        :error-messages="errors"
        label="Repetir Nova Senha"
        filled
        dense
      />
    </ValidationProvider>
    <v-btn depressed rounded block large color="primary" class="mr-4" disabled>
      Confirmar
    </v-btn>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'ChangePassword',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    hidePassword: false
  })
}
</script>
