<template>
  <v-container class="py-10" fluid>
    <v-row>
      <v-col sm="12">
        <v-card class="mx-auto" color="transparent" flat max-width="400">
          <v-alert type="error" outlined>
            <span v-if="error.statusCode === 404">
              {{ pageNotFound }}
            </span>
            <span v-else>
              {{ otherError }}
            </span>
          </v-alert>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn nuxt :to="localePath('/adverts')" depressed color="primary">
              <v-icon left>mdi-arrow-left</v-icon> Voltar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
