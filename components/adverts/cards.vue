<template>
  <v-row align="center" justify="center">
    <v-col
      v-for="(item, i) in adverts"
      :key="i"
      cols="12"
      xs="12"
      sm="6"
      md="3"
    >
      <v-lazy transition="fade-transition">
        <v-card>
          <v-list-item nuxt :to="item.to">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ item.author }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.category }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-carousel
            show-arrows-on-hover
            hide-delimiters
            progress
            height="150"
          >
            <v-carousel-item
              v-for="(image, j) in item.carousel"
              :key="j"
              :src="image.src"
            >
            </v-carousel-item>
          </v-carousel>
          <v-card-text>
            <div class="text-center">
              <v-rating
                :value="item.rating"
                color="orange"
                background-color="orange"
                readonly
                half-increments
                dense
              >
              </v-rating>
              <span class="grey--text text--lighten-2 caption">
                ({{ item.rating }})
              </span>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn disabled small text>
              <v-icon class="mr-2" color="primary">mdi-map-marker</v-icon>
              {{ item.distance }} Km
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn small icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn small icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
            <v-btn small icon @click="item.details = !item.details">
              <v-icon>
                {{ item.details ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
              </v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="item.details">
              <v-divider></v-divider>
              <v-card-text>
                {{ item.description }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-lazy>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'Cards',
  props: {
    adverts: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    categorySelector(e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
}
</script>
