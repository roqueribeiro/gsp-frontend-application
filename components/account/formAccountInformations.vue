<template>
  <ValidationObserver ref="observer" tag="form">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <ValidationProvider
            v-slot="{ errors }"
            name="Nome Completo"
            rules="required|max:10"
          >
            <v-text-field
              :counter="100"
              :error-messages="errors"
              label="Nome Completo"
              dense
              filled
              required
            ></v-text-field>
          </ValidationProvider>
        </v-col>
        <v-col cols="12" md="12">
          <v-menu
            v-model="menu1"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on }">
              <ValidationProvider
                v-slot="{ errors }"
                name="Data de Nascimento"
                rules="required|max:10"
              >
                <v-text-field
                  :error-messages="errors"
                  clearable
                  label="Data de Nascimento"
                  readonly
                  filled
                  dense
                  prepend-inner-icon="mdi-calendar"
                  v-on="on"
                  @click:clear="date = null"
                ></v-text-field>
              </ValidationProvider>
            </template>
            <v-date-picker
              v-model="date"
              @change="menu1 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="10">
          <ValidationProvider
            v-slot="{ errors }"
            name="Endereço"
            rules="required|max:10"
          >
            <v-text-field
              :counter="200"
              :error-messages="errors"
              label="Endereço"
              filled
              dense
              prepend-inner-icon="mdi-map-marker"
              required
            ></v-text-field>
          </ValidationProvider>
        </v-col>
        <v-col cols="12" md="2">
          <ValidationProvider
            v-slot="{ errors }"
            name="Número"
            rules="required|max:10"
          >
            <v-text-field
              :error-messages="errors"
              label="Número"
              filled
              dense
              required
            ></v-text-field>
          </ValidationProvider>
        </v-col>
        <v-col cols="12" md="8">
          <ValidationProvider
            v-slot="{ errors }"
            name="Cidade"
            rules="required|max:10"
          >
            <v-text-field
              :counter="200"
              :error-messages="errors"
              label="Cidade"
              filled
              dense
              required
            ></v-text-field>
          </ValidationProvider>
        </v-col>
        <v-col cols="12" md="4">
          <ValidationProvider
            v-slot="{ errors }"
            name="Estado"
            rules="required"
          >
            <v-select
              v-model="fields.state"
              :items="states"
              :error-messages="errors"
              item-text="name"
              item-value="short_name"
              :hint="`${fields.state.name}, ${fields.state.short_name}`"
              label="Estado"
              filled
              dense
              data-vv-name="select"
              return-object
              required
            ></v-select>
          </ValidationProvider>
        </v-col>
        <v-col cols="12" md="6">
          <ValidationProvider
            v-slot="{ errors }"
            name="Celular"
            rules="required|max:10"
          >
            <v-text-field
              :error-messages="errors"
              label="Celular"
              prepend-inner-icon="mdi-cellphone-iphone"
              filled
              dense
              clearable
              required
            ></v-text-field>
          </ValidationProvider>
        </v-col>
        <v-col cols="12" md="6">
          <ValidationProvider
            v-slot="{ errors }"
            name="Telefone Comercial"
            rules="required|max:10"
          >
            <v-text-field
              :error-messages="errors"
              label="Telefone Comercial"
              prepend-inner-icon="mdi-phone-classic"
              filled
              dense
              clearable
              required
            ></v-text-field>
          </ValidationProvider>
        </v-col>
      </v-row>
    </v-container>
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
    ValidationProvider
  },
  data: () => ({
    hidePassword: false,
    states: StatesFromBrazil,
    fields: {
      name: '',
      state: {
        name: '',
        short_name: ''
      }
    }
  })
}
</script>
