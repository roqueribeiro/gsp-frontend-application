<template>
  <v-row class="mosaic pt-5">
    <v-col
      v-for="(item, i) in categories"
      :key="i"
      class="mosaic-item"
      cols="12"
      sm="1"
      md="2"
      @click="categorySelector(i)"
    >
      <v-row justify-center align-center>
        <v-col class="text-center" cols="12" sm="12">
          <v-icon x-large class="ma-5">{{ item.icon }}</v-icon>
        </v-col>
        <v-col cols="12" sm="12">
          <p class="text-center body-2 font-regular">
            {{ item.title }}
          </p>
        </v-col>
      </v-row>
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
<style scoped>
.mosaic > .mosaic-item {
  background-color: white;
  box-shadow: inset 0px 0px 0px 5px #eeeeee;
  cursor: pointer;
}
.mosaic > .mosaic-item:hover {
  color: #1976d2;
  background-color: #f5f5f5;
}
</style>
