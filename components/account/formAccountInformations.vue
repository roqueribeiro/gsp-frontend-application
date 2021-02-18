<template>
  <ValidationObserver ref="observer" tag="form">
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <ValidationProvider
          v-slot="{ errors }"
          name="Nome Completo"
          rules="required|max:200"
        >
          <v-text-field
            v-model="fields.name"
            :counter="200"
            :error-messages="errors"
            label="Nome Completo"
            required
          ></v-text-field>
        </ValidationProvider>
      </v-col>
      <v-col cols="12" md="12">
        <v-menu
          v-model="calendar"
          :close-on-content-click="false"
          max-width="290"
        >
          <template #activator="{ on }">
            <ValidationProvider
              v-slot="{ errors }"
              name="Data de Nascimento"
              rules="required"
            >
              <v-text-field
                v-model="fields.birth"
                :error-messages="errors"
                clearable
                label="Data de Nascimento"
                readonly
                prepend-inner-icon="mdi-calendar"
                v-on="on"
                @click:clear="fields.birth = null"
              ></v-text-field>
            </ValidationProvider>
          </template>
          <v-date-picker v-model="fields.birth" locale="pt-br"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="12" md="8">
        <ValidationProvider
          v-slot="{ errors }"
          name="Endereço"
          rules="required|max:300"
        >
          <v-text-field
            v-model="fields.address"
            :counter="300"
            :error-messages="errors"
            label="Endereço"
            prepend-inner-icon="mdi-map-marker"
            required
          ></v-text-field>
        </ValidationProvider>
      </v-col>
      <v-col cols="12" md="4">
        <ValidationProvider
          v-slot="{ errors }"
          name="Número"
          rules="required|max:10"
        >
          <v-text-field
            v-model="fields.number"
            :error-messages="errors"
            label="Número"
            required
          ></v-text-field>
        </ValidationProvider>
      </v-col>
      <v-col cols="12" md="8">
        <ValidationProvider
          v-slot="{ errors }"
          name="Cidade"
          rules="required|max:200"
        >
          <v-text-field
            v-model="fields.city"
            :counter="200"
            :error-messages="errors"
            label="Cidade"
            required
          ></v-text-field>
        </ValidationProvider>
      </v-col>
      <v-col cols="12" md="4">
        <ValidationProvider v-slot="{ errors }" name="Estado" rules="required">
          <v-select
            v-model="fields.state"
            :items="states"
            :error-messages="errors"
            item-text="name"
            item-value="short_name"
            :hint="`${fields.state.name}, ${fields.state.short_name}`"
            label="Estado"
            data-vv-name="select"
            return-object
            required
          ></v-select>
        </ValidationProvider>
      </v-col>
      <v-col cols="12" md="6">
        <ValidationProvider v-slot="{ errors }" name="Celular" rules="required">
          <v-text-field
            v-model="fields.mobile"
            :error-messages="errors"
            label="Celular"
            prepend-inner-icon="mdi-cellphone-iphone"
            clearable
            required
          ></v-text-field>
        </ValidationProvider>
      </v-col>
      <v-col cols="12" md="6">
        <ValidationProvider
          v-slot="{ errors }"
          name="Telefone Comercial"
          rules="required"
        >
          <v-text-field
            v-model="fields.phone"
            :error-messages="errors"
            label="Telefone Comercial"
            prepend-inner-icon="mdi-phone-classic"
            clearable
            required
          ></v-text-field>
        </ValidationProvider>
      </v-col>
    </v-row>
    <v-btn depressed rounded block large color="primary" class="mr-4" disabled>
      submit
    </v-btn>
  </ValidationObserver>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import StatesFromBrazil from '~/assets/states-from-brasil.json'

export default {
  name: 'AccountInformations',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    calendar: false,
    hidePassword: false,
    states: StatesFromBrazil,
    fields: {
      name: '',
      birth: '',
      address: '',
      number: '',
      city: '',
      state: {
        name: '',
        short_name: '',
      },
      mobile: '',
      phone: '',
    },
  }),
}
</script>
