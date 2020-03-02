const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - MySolver',
    title: 'MySolver',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'white',
    height: '3px',
    continuous: true
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vee-validate'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
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
              onSuccessAction: 'handleSuccessfulAuthentication',
              ssr: true
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
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  pwa: {
    manifest: {
      name: 'MySolver',
      shortName: 'MySolver',
      display: 'standalone',
      orientation: 'portrait',
      backgroundColor: colors.grey.lighten3,
      description: 'description'
    }
  }
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
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
          background: colors.grey.darken4
        }
      }
    }
  },
  router: {
    middleware: 'authenticated'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
