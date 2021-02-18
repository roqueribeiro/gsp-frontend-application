<template>
  <v-row class="mt-5 mb-10" align="center" justify="center" no-gutters>
    <v-col
      v-for="(item, i) in categories"
      :key="i"
      cols="12"
      xs="12"
      sm="3"
      md="2"
      @click="categorySelector(i)"
    >
      <v-card nuxt :to="item.to" class="ma-2" hover outlined>
        <p class="text-center ma-10">
          <v-icon x-large>{{ item.icon }}</v-icon>
        </p>
        <p class="text-center body-2 font-regular">
          {{ item.title }}
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Mosaic',
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>
