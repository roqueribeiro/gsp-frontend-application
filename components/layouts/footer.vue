<template>
  <v-layout>
    <v-footer fixed app>
      <span class="text--secondary font-weight-regular caption">
        &copy; 2019 - {{ new Date().getFullYear() }} MySolver.com.br
      </span>
    </v-footer>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  }
}
</script>
