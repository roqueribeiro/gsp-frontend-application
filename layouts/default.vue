<template>
  <v-app dark>
    <v-content>
      <Drawer />
      <v-container>
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
