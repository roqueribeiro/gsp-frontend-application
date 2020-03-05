<template>
  <v-footer color="gray lighten-1">
    <v-row justify="center">
      <v-btn
        v-for="link in links"
        :key="link"
        :to="link.to"
        nuxt
        text
        x-small
        rounded
        class="ma-2 hidden-sm-and-down"
      >
        {{ link.title }}
      </v-btn>
      <v-col
        class="gray lighten-2 text-center font-weight-regular caption"
        cols="12"
      >
        &copy; 2019 - {{ new Date().getFullYear() }} MySolver.com.br
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    links: [
      { title: 'Termos e Condições', to: '/' },
      { title: 'Políticas de Privacidade', to: '/' },
      { title: 'Contato', to: '/' }
    ]
  }),
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  }
}
</script>
