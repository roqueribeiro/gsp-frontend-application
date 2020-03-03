<template>
  <v-content class="ma-0 pa-0">
    <v-carousel
      cycle
      height="350"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in carousel"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-container class="pt-10">
      <h1 class="display-1 font-weight-light text--primary">Destaques</h1>
      <small class="text--secondary">Anúncios Patrocinados</small>
      <v-row align="center" justify="center" max-width="500">
        <v-col v-for="(item, i) in adverts" :key="i" cols="12" sm="3" md="3">
          <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
            <v-card outlined class="mx-auto">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{
                    item.title
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.author }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-carousel
                :show-arrows="false"
                hide-delimiter-background
                height="192"
              >
                <v-carousel-item
                  v-for="(image, j) in item.carousel"
                  :key="j"
                  :src="image.src"
                ></v-carousel-item>
              </v-carousel>
              <v-card-text>{{ item.description }}</v-card-text>
              <v-card-actions>
                <v-btn text color="primary">Saber mais</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container class="pt-10">
      <h1 class="display-1 font-weight-light text--primary">
        Mais Acessados
      </h1>
      <small class="text--secondary">
        Anúncios com mais acessos nesta semana
      </small>
      <v-row align="center" justify="center" max-width="500">
        <v-col v-for="(item, i) in adverts" :key="i" cols="12" sm="3" md="3">
          <v-lazy :options="{ threshold: 0.5 }" transition="fade-transition">
            <v-card outlined class="mx-auto">
              <v-list-item>
                <v-list-item-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/john.png"
                  ></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{
                    item.title
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.author }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-carousel
                :show-arrows="false"
                hide-delimiter-background
                height="192"
              >
                <v-carousel-item
                  v-for="(image, j) in item.carousel"
                  :key="j"
                  :src="image.src"
                ></v-carousel-item>
              </v-carousel>
              <v-card-text>{{ item.description }}</v-card-text>
              <v-card-actions>
                <v-btn text color="primary">Saber mais</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-lazy>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <v-container class="pt-10 pb-10">
      <h1 class="display-1 font-weight-light text--primary">
        Principais Categorias
      </h1>
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
    </v-container>
  </v-content>
</template>
<script>
export default {
  data: () => ({
    carousel: [
      { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }
    ],
    adverts: [
      {
        title: 'Encanador',
        author: 'Pedro dos Santos',
        carousel: [
          { src: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg' }
        ],
        description:
          'Profissional responsável por montar, ajustar, instalar e reparar encanamentos, tubulações e outros condutos.'
      },
      {
        title: 'Encanador',
        author: 'Pedro dos Santos',
        carousel: [
          { src: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg' }
        ],
        description:
          'Profissional responsável por montar, ajustar, instalar e reparar encanamentos, tubulações e outros condutos.'
      },
      {
        title: 'Encanador',
        author: 'Pedro dos Santos',
        carousel: [
          { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
          { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
          { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
          { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' }
        ],
        description:
          'Profissional responsável por montar, ajustar, instalar e reparar encanamentos, tubulações e outros condutos.'
      },
      {
        title: 'Encanador',
        author: 'Pedro dos Santos',
        carousel: [
          { src: 'https://cdn.vuetifyjs.com/images/cards/mountain.jpg' }
        ],
        description:
          'Profissional responsável por montar, ajustar, instalar e reparar encanamentos, tubulações e outros condutos.'
      }
    ],
    categories: [
      {
        icon: 'mdi-key-variant',
        title: 'Chaveiro'
      },
      {
        icon: 'mdi-flower',
        title: 'Jardineiro'
      },
      {
        icon: 'mdi-bus-stop',
        title: 'Fretados'
      },
      {
        icon: 'mdi-camera',
        title: 'Fotograf(a)'
      },
      {
        icon: 'mdi-car',
        title: 'Motorista'
      },
      {
        icon: 'mdi-dog-service',
        title: 'Adestrador'
      },
      {
        icon: 'mdi-flask-round-bottom-outline',
        title: 'Eletrecista'
      },
      {
        icon: 'mdi-foot-print',
        title: 'Podólog(a)'
      },
      {
        icon: 'mdi-oil-temperature',
        title: 'Mecânico'
      },
      {
        icon: 'mdi-pipe-wrench',
        title: 'Encanador'
      },
      {
        icon: 'mdi-propane-tank',
        title: 'Entregador de Gás'
      },
      {
        icon: 'mdi-truck-delivery',
        title: 'Serviços de Carreto'
      },
      {
        icon: 'mdi-video-vintage',
        title: 'Produtora'
      },
      {
        icon: 'mdi-wall',
        title: 'Pedreiro'
      },
      {
        icon: 'mdi-watch',
        title: 'Relojoeiro'
      },
      {
        icon: 'mdi-wardrobe-outline',
        title: 'Montador de Móveis'
      },
      {
        icon: 'mdi-weight-lifter',
        title: 'Personal'
      },
      {
        icon: 'mdi-wrench',
        title: 'Serviços Gerais'
      }
    ],
    methods: {
      categorySelector(e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
    },
    head() {
      return {
        title: 'Adverts',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: ''
          }
        ]
      }
    }
  })
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
