<template>
  <v-content class="ma-0 pa-0">
    <avertCarousel :banners="banners" />
    <v-container class="pt-10 max-width">
      <h1 class="display-1 font-weight-light text--primary">
        Destaques
      </h1>
      <small class="text--secondary">
        Anúncios Patrocinados
      </small>
      <avertCards :adverts="advertsPaid" />
    </v-container>
    <v-divider></v-divider>
    <v-container class="pt-10 max-width">
      <h1 class="display-1 font-weight-light text--primary">
        Mais Acessados
      </h1>
      <small class="text--secondary">
        Anúncios com mais acessos nesta semana
      </small>
      <avertCards :adverts="advertsMostViewed" />
    </v-container>
    <v-divider></v-divider>
    <v-container class="pt-10 pb-10 max-width">
      <h1 class="display-1 font-weight-light text--primary">
        Principais Categorias
      </h1>
      <avertMosaic :categories="categories" />
    </v-container>
  </v-content>
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
        title: 'Mecânicos'
      },
      {
        src: '/banners/adverts/top/adverts-banners-2.jpg',
        title: 'Encanadores'
      },
      {
        src: '/banners/adverts/top/adverts-banners-3.jpg',
        title: 'Jardineiros'
      },
      {
        src: '/banners/adverts/top/adverts-banners-4.jpg',
        title: 'Cabeleireir(a)s'
      }
    ],
    advertsPaid: [
      {
        author: 'Aline Souza',
        avatar: '/adverts/sample/cabeleireira/avatar.jpg',
        category: 'Cabeleireira',
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
          'Somos o único salão tradicional da região que além de oferecer serviços completos de corte de cabelo, manicure e pedicure, possuímos uma sala exclusiva para massagens com especialista com experiencia de 20 anos no setor.'
      },
      {
        author: 'Pablo Silva',
        avatar: '/adverts/sample/mecanico/avatar.jpg',
        category: 'Mecanico',
        distance: 12,
        rating: 4,
        carousel: [
          { src: '/adverts/sample/mecanico/1.jpg' },
          { src: '/adverts/sample/mecanico/2.jpg' },
          { src: '/adverts/sample/mecanico/3.jpg' }
        ],
        details: false,
        description:
          'Trabalhamos com todas as marcas e tipos de veículos automotores.'
      },
      {
        author: 'Alan Cardoso',
        avatar: '/adverts/sample/jardineiro/avatar.jpg',
        category: 'Jardineiro',
        distance: 8,
        rating: 3.8,
        carousel: [
          { src: '/adverts/sample/jardineiro/4.jpg' },
          { src: '/adverts/sample/jardineiro/1.jpg' },
          { src: '/adverts/sample/jardineiro/2.jpg' }
        ],
        details: false,
        description:
          'Tenho experiência com jardins empresariais e residenciais.'
      },
      {
        author: 'Pedro dos Santos',
        avatar: '/adverts/sample/encanador/avatar.jpg',
        category: 'Encanador',
        distance: 17,
        rating: 3.4,
        carousel: [
          { src: '/adverts/sample/encanador/1.jpg' },
          { src: '/adverts/sample/encanador/2.jpg' },
          { src: '/adverts/sample/encanador/3.jpg' },
          { src: '/adverts/sample/encanador/4.jpg' }
        ],
        details: false,
        description: 'Trabalho a mais de 20 anos com serviços hidráulicos.'
      }
    ],
    advertsMostViewed: [
      {
        author: 'Marcos Silva',
        avatar: '/adverts/sample/fotografo/avatar.jpg',
        category: 'Fotografo',
        distance: 9,
        rating: 4.5,
        carousel: [
          { src: '/adverts/sample/fotografo/1.jpg' },
          { src: '/adverts/sample/fotografo/2.jpg' }
        ],
        details: false,
        description:
          'Fotografo de casamentos e eventos particulares ou empresariais.'
      },
      {
        author: 'Pablo Silva',
        avatar: '/adverts/sample/musico/avatar.jpg',
        category: 'Músicos',
        distance: 12,
        rating: 4,
        carousel: [
          { src: '/adverts/sample/musico/1.jpg' },
          { src: '/adverts/sample/musico/2.jpg' },
          { src: '/adverts/sample/musico/3.jpg' }
        ],
        details: false,
        description:
          'Músicos formados para casamentos e eventos particulares ou empresariais.'
      },
      {
        author: 'Fretados p/ São Paulo',
        avatar: '/adverts/sample/fretado/avatar.jpg',
        category: 'Fretados',
        distance: 8,
        rating: 3.8,
        carousel: [
          { src: '/adverts/sample/fretado/1.jpg' },
          { src: '/adverts/sample/fretado/2.jpg' }
        ],
        details: false,
        description:
          'O ônibus fretado mensal para empresa preço Casa Verde é construído para comportar uma imensa quantidade de pessoas de modo adequado, para se tornar possível que elas possam percorrer as rodovias até chegarem nos locais que desejam conhecer de modo mais divertido e seguro. Com a utilização de bancos que podem ser ajustáveis para que os passageiros tenham mais conforto e que possam usar as tomadas que são instaladas na parede dos veículos para carregar o celular ou ainda utilizar o WI-FI para navegar na internet e se entreter.'
      },
      {
        author: 'Pedro dos Santos',
        avatar: '/adverts/sample/encanador/avatar.jpg',
        category: 'Encanador',
        distance: 17,
        rating: 3.4,
        carousel: [
          { src: '/adverts/sample/encanador/1.jpg' },
          { src: '/adverts/sample/encanador/2.jpg' },
          { src: '/adverts/sample/encanador/3.jpg' },
          { src: '/adverts/sample/encanador/4.jpg' }
        ],
        details: false,
        description: 'Trabalho a mais de 20 anos com serviços hidráulicos.'
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
.max-width {
  max-width: 1200px;
}
</style>
