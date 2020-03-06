<template>
  <v-row no-gutters>
    <v-col cols="12" sm="12" md="12">
      <v-img
        src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        lazy-src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
      <v-row no-gutters justify="center" align="center">
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
            <v-badge color="primary" icon="mdi-star">
              Marcus Smith
            </v-badge>
          </h1>
          <v-rating
            v-model="rating"
            color="orange"
            background-color="orange"
            dense
            readonly
            class="mt-2 mb-2"
          ></v-rating>
          <v-chip small class="ma-1">Encanamento</v-chip>
          <v-chip small class="ma-1">Montador de Móveis</v-chip>
          <v-chip small class="ma-1">Eletrecista</v-chip>
          <v-chip small class="ma-1">Serviços Gerais</v-chip>
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
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'Profiles',
  components: {},
  data: () => ({
    rating: 4.5,
    date: new Date().toISOString().substr(0, 10),
    menu1: false,
    hidePassword: false
  })
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
