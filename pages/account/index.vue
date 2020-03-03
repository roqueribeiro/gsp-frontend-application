<template>
  <v-container class="pa-0" fluid>
    <v-row no-gutters>
      <v-col cols="12" sm="12" md="12">
        <v-img
          src="https://images.unsplash.com/photo-1583131455109-4a479eaea701?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          lazy-src="https://images.unsplash.com/photo-1583131455109-4a479eaea701?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          aspect-ratio="1"
          class="grey lighten-2"
          max-width="100%"
          max-height="250"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-card class="mx-auto profile-card mb-8" width="1200">
        <v-row no-gutters justify="center">
          <v-col class="text-center mb-5" cols="12" sm="12">
            <v-avatar
              class="elevation-10 profile-photo mb-5"
              color="grey"
              size="160"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              ></v-img>
            </v-avatar>
            <h1 class="display-1 text-center font-weight-light">
              Michael Smith
            </h1>
            <small class="text-center caption">
              Encanador, Serviços Gerais
            </small>
            <v-rating
              v-model="rating"
              color="orange"
              readonly
              class="mb-5"
            ></v-rating>
          </v-col>
          <v-col class="text-center" lg="2">
            <h1
              class="headline text-center font-weight-light primary--text"
              color="primary"
            >
              232
            </h1>
            <small class="text-center caption">
              Seguidores
            </small>
          </v-col>
          <v-col class="text-center" lg="2">
            <h1 class="headline text-center font-weight-light primary--text">
              18
            </h1>
            <small class="text-center caption">
              Serviços Realizados
            </small>
          </v-col>
        </v-row>
        <v-divider class="mt-5"></v-divider>
        <v-row no-gutters>
          <v-col cols="12" sm="6" md="8">
            <v-card class="pt-2 pl-10 pr-10 pb-10 elevation-0">
              <v-card-title class="headline">Dados Pessoais</v-card-title>
              <v-card-subtitle>
                Verifique se seus dados estão corretos e atualizados.
              </v-card-subtitle>
              <ValidationObserver ref="observer" tag="form">
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Nome Completo"
                  rules="required|max:10"
                >
                  <v-text-field
                    :counter="100"
                    :error-messages="errors"
                    label="Nome Completo"
                    filled
                    required
                  ></v-text-field>
                </ValidationProvider>
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  max-width="290"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      :value="computedDateFormattedMomentjs"
                      clearable
                      label="Data de Nascimento"
                      readonly
                      filled
                      prepend-inner-icon="mdi-calendar"
                      v-on="on"
                      @click:clear="date = null"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @change="menu1 = false"
                  ></v-date-picker>
                </v-menu>
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
                    prepend-inner-icon="mdi-map-marker"
                    required
                  ></v-text-field>
                </ValidationProvider>
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
                    required
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Estado"
                  rules="required"
                >
                  <v-select
                    :error-messages="errors"
                    label="Estado"
                    filled
                    data-vv-name="select"
                    required
                  ></v-select>
                </ValidationProvider>
                <v-btn
                  depressed
                  rounded
                  block
                  large
                  color="primary"
                  class="mr-4"
                  disabled
                >
                  submit
                </v-btn>
              </ValidationObserver>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="4">
            <v-card class="pt-2 pl-10 pr-10 pb-10 elevation-0">
              <v-card-title class="headline">Alterar Senha</v-card-title>
              <v-card-subtitle>
                Use sempre uma senha segura.
              </v-card-subtitle>
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
                  <v-text-field
                    :error-messages="errors"
                    :append-icon="hidePassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="hidePassword ? 'text' : 'password'"
                    label="Nova Senha"
                    filled
                    @click:append="hidePassword = !hidePassword"
                  />
                </ValidationProvider>
                <ValidationProvider
                  v-slot="{ errors }"
                  name="Repetir Nova Senha"
                  rules="required|max:10"
                >
                  <v-text-field
                    :error-messages="errors"
                    :append-icon="hidePassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="hidePassword ? 'text' : 'password'"
                    label="Repetir Nova Senha"
                    filled
                    @click:append="hidePassword = !hidePassword"
                  />
                </ValidationProvider>
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
              </ValidationObserver>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'Profile',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    rating: 4.5,
    date: new Date().toISOString().substr(0, 10),
    menu1: false,
    hidePassword: false
  }),
  head() {
    return {
      title: 'Profile Details',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    }
  }
}
</script>

<style scoped>
.profile-card {
  margin-top: -50px;
}

.profile-photo {
  margin-top: -205px;
}
</style>
