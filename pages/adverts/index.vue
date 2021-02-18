<template>
  <v-container class="ma-0 pa-0" fluid>
    <avertCarousel :banners="banners" />
    <v-card
      color="transparent"
      elevation="0"
      class="mx-auto my-5 px-5"
      tile
      max-width="1200"
    >
      <h1 class="display-1 font-weight-light text--primary">
        Destaques
      </h1>
      <small class="text--secondary">
        Anúncios Patrocinados
      </small>
      <avertCards :adverts="advertsPaid" />
    </v-card>
    <v-divider></v-divider>
    <v-card
      color="transparent"
      elevation="0"
      class="mx-auto my-5 px-5"
      tile
      max-width="1200"
    >
      <h1 class="display-1 font-weight-light text--primary">
        Mais Acessados
      </h1>
      <small class="text--secondary">
        Anúncios com mais acessos nesta semana
      </small>
      <avertCards :adverts="advertsMostViewed" />
    </v-card>
    <v-divider></v-divider>
    <v-card
      color="transparent"
      elevation="0"
      class="mx-auto my-5 px-5"
      tile
      max-width="1200"
    >
      <h1 class="display-1 font-weight-light text--primary">
        Principais Categorias
      </h1>
      <avertMosaic :categories="categories" />
    </v-card>
  </v-container>
</template>
<script>
import avertCarousel from '~/components/adverts/carousel.vue'
import avertCards from '~/components/adverts/cards.vue'
import avertMosaic from '~/components/adverts/mosaic.vue'

export default {
  components: {
    avertCarousel,
    avertCards,
    avertMosaic
  },
  data: () => ({
    banners: [
      {
        src: '/banners/adverts/top/adverts-banners-1.jpg',
        title: 'Mecânica'
      },
      {
        src: '/banners/adverts/top/adverts-banners-2.jpg',
        title: 'Encanamento'
      },
      {
        src: '/banners/adverts/top/adverts-banners-3.jpg',
        title: 'Jardinagem'
      },
      {
        src: '/banners/adverts/top/adverts-banners-4.jpg',
        title: 'Beleza e Estética'
      }
    ],
    advertsPaid: [
      {
        id: '1',
        author: 'Aline Souza',
        avatar: '/adverts/sample/cabeleireira/avatar.jpg',
        category: 'Beleza e Estética',
        distance: 9,
        rating: 4.5,
        carousel: [
          { src: '/adverts/sample/cabeleireira/1.jpg' },
          { src: '/adverts/sample/cabeleireira/2.jpg' },
          { src: '/adverts/sample/cabeleireira/3.jpg' },
          { src: '/adverts/sample/cabeleireira/4.jpg' }
        ],
        details: false,
        description:
          'Somos o único salão tradicional da região que além de oferecer serviços completos de corte de cabelo, manicure e pedicure, possuímos uma sala exclusiva para massagens com especialista com experiencia de 20 anos no setor.',
        to: '/account/1'
      },
      {
        id: '2',
        author: 'Pablo Silva',
        avatar: '/adverts/sample/mecanico/avatar.jpg',
        category: 'Mecânica',
        distance: 12,
        rating: 4,
        carousel: [
          { src: '/adverts/sample/mecanico/1.jpg' },
          { src: '/adverts/sample/mecanico/2.jpg' },
          { src: '/adverts/sample/mecanico/3.jpg' }
        ],
        details: false,
        description:
          'Trabalhamos com todas as marcas e tipos de veículos automotores.',
        to: '/account/2'
      },
      {
        id: '3',
        author: 'Alan Cardoso',
        avatar: '/adverts/sample/jardineiro/avatar.jpg',
        category: 'Jardinagem',
        distance: 8,
        rating: 3.8,
        carousel: [
          { src: '/adverts/sample/jardineiro/4.jpg' },
          { src: '/adverts/sample/jardineiro/1.jpg' },
          { src: '/adverts/sample/jardineiro/2.jpg' }
        ],
        details: false,
        description:
          'Tenho experiência com jardins empresariais e residenciais.',
        to: '/account/3'
      },
      {
        id: '4',
        author: 'Pedro dos Santos',
        avatar: '/adverts/sample/encanador/avatar.jpg',
        category: 'Encanamento',
        distance: 17,
        rating: 3.4,
        carousel: [
          { src: '/adverts/sample/encanador/1.jpg' },
          { src: '/adverts/sample/encanador/2.jpg' },
          { src: '/adverts/sample/encanador/3.jpg' },
          { src: '/adverts/sample/encanador/4.jpg' }
        ],
        details: false,
        description: 'Trabalho a mais de 20 anos com serviços hidráulicos.',
        to: '/account/4'
      }
    ],
    advertsMostViewed: [
      {
        id: '5',
        author: 'Marcos Silva',
        avatar: '/adverts/sample/fotografo/avatar.jpg',
        category: 'Fotografia',
        distance: 9,
        rating: 4.5,
        carousel: [
          { src: '/adverts/sample/fotografo/1.jpg' },
          { src: '/adverts/sample/fotografo/2.jpg' }
        ],
        details: false,
        description:
          'Fotografo de casamentos e eventos particulares ou empresariais.',
        to: '/account/5'
      },
      {
        id: '4',
        author: 'Pablo Silva',
        avatar: '/adverts/sample/musico/avatar.jpg',
        category: 'Música',
        distance: 12,
        rating: 4,
        carousel: [
          { src: '/adverts/sample/musico/1.jpg' },
          { src: '/adverts/sample/musico/2.jpg' },
          { src: '/adverts/sample/musico/3.jpg' }
        ],
        details: false,
        description:
          'Músicos formados para casamentos e eventos particulares ou empresariais.',
        to: '/account/6'
      },
      {
        id: '6',
        author: 'Fretados p/ São Paulo',
        avatar: '/adverts/sample/fretado/avatar.jpg',
        category: 'Fretamento',
        distance: 8,
        rating: 3.8,
        carousel: [
          { src: '/adverts/sample/fretado/1.jpg' },
          { src: '/adverts/sample/fretado/2.jpg' }
        ],
        details: false,
        description:
          'O ônibus fretado mensal para empresa preço Casa Verde é construído para comportar uma imensa quantidade de pessoas de modo adequado, para se tornar possível que elas possam percorrer as rodovias até chegarem nos locais que desejam conhecer de modo mais divertido e seguro. Com a utilização de bancos que podem ser ajustáveis para que os passageiros tenham mais conforto e que possam usar as tomadas que são instaladas na parede dos veículos para carregar o celular ou ainda utilizar o WI-FI para navegar na internet e se entreter.',
        to: '/account/7'
      },
      {
        id: '7',
        author: 'Pedro dos Santos',
        avatar: '/adverts/sample/encanador/avatar.jpg',
        category: 'Encanamento',
        distance: 17,
        rating: 3.4,
        carousel: [
          { src: '/adverts/sample/encanador/1.jpg' },
          { src: '/adverts/sample/encanador/2.jpg' },
          { src: '/adverts/sample/encanador/3.jpg' },
          { src: '/adverts/sample/encanador/4.jpg' }
        ],
        details: false,
        description: 'Trabalho a mais de 20 anos com serviços hidráulicos.',
        to: '/account/8'
      }
    ],
    categories: [
      {
        icon: 'mdi-key-variant',
        title: 'Chaveiro',
        to: 'adverts/1'
      },
      {
        icon: 'mdi-flower',
        title: 'Jardinagem',
        to: 'adverts/2'
      },
      {
        icon: 'mdi-bus-stop',
        title: 'Fretamento',
        to: 'adverts/3'
      },
      {
        icon: 'mdi-camera',
        title: 'Fotografia',
        to: 'adverts/4'
      },
      {
        icon: 'mdi-car',
        title: 'Motorista',
        to: 'adverts/5'
      },
      {
        icon: 'mdi-dog-service',
        title: 'Adestramento',
        to: 'adverts/6'
      },
      {
        icon: 'mdi-flask-round-bottom-outline',
        title: 'Eletrecista',
        to: 'adverts/7'
      },
      {
        icon: 'mdi-foot-print',
        title: 'Podologia',
        to: 'adverts/8'
      },
      {
        icon: 'mdi-oil-temperature',
        title: 'Mecânica',
        to: 'adverts/9'
      },
      {
        icon: 'mdi-pipe-wrench',
        title: 'Encanamento',
        to: 'adverts/10'
      },
      {
        icon: 'mdi-propane-tank',
        title: 'Entrega de Gás',
        to: 'adverts/11'
      },
      {
        icon: 'mdi-truck-delivery',
        title: 'Carreto',
        to: 'adverts/12'
      },
      {
        icon: 'mdi-video-vintage',
        title: 'Produtora',
        to: 'adverts/13'
      },
      {
        icon: 'mdi-wall',
        title: 'Pedreiro',
        to: 'adverts/14'
      },
      {
        icon: 'mdi-watch',
        title: 'Relojoaria',
        to: 'adverts/15'
      },
      {
        icon: 'mdi-wardrobe-outline',
        title: 'Montador de Móveis',
        to: 'adverts/16'
      },
      {
        icon: 'mdi-weight-lifter',
        title: 'Personal',
        to: 'adverts/17'
      },
      {
        icon: 'mdi-wrench',
        title: 'Serviços Gerais',
        to: 'adverts/18'
      }
    ]
  }),
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
}
</script>
