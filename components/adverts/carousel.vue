<template>
  <v-carousel
    cycle
    width="100%"
    height="350"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(item, i) in banners" :key="i" :src="item.src">
      <v-sheet height="100%" color="transparent" tile>
        <v-row class="fill-height" align="center" justify="center">
          <div
            class="display-2 font-weight-thin carousel-title primary--text text--darken-2"
          >
            {{ item.title }}
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: 'Carousel',
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style scoped>
.carousel-title {
  width: 100%;
  text-align: center;
  padding: 20px 0;
  background-color: white;
}
</style>
