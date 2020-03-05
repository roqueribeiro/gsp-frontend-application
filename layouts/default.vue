<template>
  <v-app>
    <v-content class="background">
      <Drawer />
      <nuxt />
    </v-content>
    <Footer />
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
