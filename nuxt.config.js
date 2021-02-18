import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - MySolver',
    title: 'MySolver',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/bus', '~/plugins/socket', '~/plugins/vee-validate'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAZvXf-AAiNpfs9frl-fRiWjhkytizPURE',
          authDomain: 'gsp-frontend-application.firebaseapp.com',
          databaseURL: 'https://gsp-frontend-application.firebaseio.com',
          projectId: 'gsp-frontend-application',
          storageBucket: 'gsp-frontend-application.appspot.com',
          messagingSenderId: '191300628714',
          appId: '1:191300628714:web:1314c7ab0e6e4855da6793',
          measurementId: 'G-7RSW8KX0VS'
        },
        services: {
          auth: {
            initialize: {
              // onAuthStateChangedMutation: 'SET_AUTH_USER',
              onAuthStateChangedAction: 'handleSuccessfulAuthentication',
              ssr: {
                serverLogin: {
                  sessionLifetime: 0,
                  loginDelay: 50
                }
              }
            }
          },
          firestore: true,
          functions: true,
          storage: true,
          realtimeDb: true,
          messaging: true,
          performance: true,
          analytics: true,
          remoteConfig: true
        }
      }
    ],
    [
      'nuxt-i18n',
      {
        seo: true,
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true
        },
        defaultLocale: 'pt-BR',
        locales: [
          {
            code: 'en-US',
            iso: 'en-US',
            name: 'English (US)',
            file: 'en-US.js'
          },
          {
            code: 'es-ES',
            iso: 'es-ES',
            name: 'Español (ES)',
            file: 'es-ES.js'
          },
          {
            code: 'pt-BR',
            iso: 'pt-BR',
            name: 'Português (BR)',
            file: 'pt-BR.js'
          }
        ],
        vuex: {
          moduleName: 'i18n',
          syncLocale: true,
          syncMessages: true,
          syncRouteParams: true
        },
        lazy: true,
        langDir: 'locales/'
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-br',
      name: 'MySolver',
      short_name: 'MySolver',
      description: 'description',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/adverts',
      theme_color: colors.blue.darken2,
      background_color: colors.grey.lighten3
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  router: {
    middleware: 'authenticated'
  },

  loading: {
    color: 'white',
    height: '3px',
    continuous: true
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        options: {
          customProperties: true
        },
        light: {
          background: colors.grey.lighten3
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
    extend(config, ctx) { }
  }
}
