<template>
  <ValidationObserver ref="observer" tag="form">
    <v-row no-gutters>
      <v-col cols="12" md="12">
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
      </v-col>
      <v-col cols="12" md="12">
        <ValidationProvider
          v-slot="{ errors }"
          name="Nova Senha"
          rules="required|max:10"
        >
          <v-text-field
            :error-messages="errors"
            label="Nova Senha"
            filled
            dense
          />
        </ValidationProvider>
      </v-col>
      <v-col cols="12" md="12">
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
      </v-col>
      <v-btn
        depressed
        rounded
        block
        large
        color="primary"
        class="mr-4"
        disabled
      >
        Confirmar
      </v-btn>
    </v-row>
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
