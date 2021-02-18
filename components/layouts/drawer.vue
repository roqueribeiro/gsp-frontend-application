<template>
  <v-container v-if="navigation" class="ma-0 pa-0" fluid>
    <v-navigation-drawer
      v-model="drawer"
      dark
      temporary
      fixed
      src="/menu-bg.jpg"
      app
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img
              src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
              aspect-ratio="1"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Marcus Smith</v-list-item-title>
            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="localePath(item.to)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item router exact @click="logout">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              Desconectar
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark fixed app color="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mt-1 ml-n3 mr-4 hidden-sm-and-down">
        <v-img
          src="/logo/name-transparent-white.png"
          max-width="112"
          max-height="40"
          class="ma-0 pa-0"
        ></v-img>
      </v-toolbar-title>
      <v-toolbar-title class="ml-0 mr-0 d-sm-flex d-md-none">
        <v-img
          src="/logo/logo-transparent-white.png"
          max-width="36"
          max-height="36"
          class="ma-0 pa-0"
        ></v-img>
      </v-toolbar-title>
      <v-container fluid>
        <v-row no-gutters justify="end">
          <v-col sm="12" md="10" lg="6" xl="2">
            <SearchField />
          </v-col>
        </v-row>
      </v-container>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-badge color="pink" content="3" overlap>
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer v-model="rightDrawer" right fixed temporary>
      <v-list shaped>
        <v-list-item
          v-for="(item, i) in notifications"
          :key="i"
          :to="item.to"
          three-line
          @click="notificationClick(1)"
        >
          <v-list-item-avatar>
            <v-icon :color="item.type">{{ item.icon }}</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ item.description }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import SearchField from '~/components/adverts/autocomplete.vue'

export default {
  components: {
    SearchField
  },
  data: () => ({
    drawer: false,
    items: [
      {
        icon: 'mdi-chart-bubble',
        title: 'Meu Perfil',
        to: '/account/1'
      },
      {
        icon: 'mdi-apps',
        title: 'Encontrar Serviços',
        to: '/adverts'
      }
    ],
    notifications: [
      {
        icon: 'mdi-check-circle',
        type: 'success',
        title: 'Notificação de Exemplo',
        description: 'Texto descritivo da notificação'
      },
      {
        icon: 'mdi-check-circle',
        type: 'success',
        title: 'Notificação de Exemplo',
        description: 'Texto descritivo da notificação'
      },
      {
        icon: 'mdi-alert-circle',
        type: 'warning',
        title: 'Notificação de Exemplo',
        description: 'Texto descritivo da notificação'
      }
    ],
    rightDrawer: false,
    title: 'MySolver'
  }),
  computed: {
    ...mapState({
      authUser: (state) => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    }),
    navigation: (ctx) => {
      const routeName = ctx.$route.name
      const isLoggedIn = ctx.$store.getters.isLoggedIn
      if (!routeName) return false
      return !routeName.includes('security-authorization') && isLoggedIn && true
    }
  },
  methods: {
    ...mapActions({
      logoutUser: 'logoutUser'
    }),
    notificationClick(e) {},
    async logout() {
      await this.logoutUser().then(() => {
        this.$router.push({ path: this.localePath('/security/authorization') })
        this.drawer = false
      })
    }
  }
}
</script>
