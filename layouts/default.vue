<template>
  <v-app>
    <v-content class="background">
      <Drawer />
      <nuxt />
    </v-content>
    <Footer />
    <BottomNavigation />
  </v-app>
</template>

<script>
import Drawer from '~/components/layouts/drawer'
import Footer from '~/components/layouts/footer'
import BottomNavigation from '~/components/layouts/bottomNavigation'

export default {
  components: {
    Drawer,
    Footer,
    BottomNavigation
  },
  watch: {
    $route() {
      this.$bus.$emit('SHOW_BOTTOM_NAVIGATION', false)
    }
  }
}
</script>
