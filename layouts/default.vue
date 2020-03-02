<template>
  <v-app>
    <v-content class="background">
      <Drawer />
      <v-container class="pa-0" fluid>
        <nuxt />
      </v-container>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Drawer from '~/components/layouts/drawer'
import Footer from '~/components/layouts/footer'

export default {
  components: {
    Drawer,
    Footer
  }
}
</script>
