export default {
  mode: 'spa',
  head: {
    script: [
      { src: '/js/jquery.min.js' }
    ],
  },
  css: [
    { src: '~/assets/css/main.scss', lang: 'scss' },
    { src: '~/assets/css/fontawesome/css/all.min.css', lang: 'css' },
  ],
  plugins: [{ src: "~plugins/vue-tables-2.js", ssr: false }],
  build: {
      vendor: ["vue-tables-2"]
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/apollo',
    '@nuxtjs/proxy',
    '@nuxtjs/toast',
    ['nuxt-vuex-localstorage', {
      localStorage: ['user']}]
  ],
  proxy: {
    '/graphql': {
      target: 'https://api.qetela.tk',
      pathRewrite: {
        '^/graphql' : '/graphql'
        }
      }
  },
  axios: {
    // proxyHeaders: false
  },

  apollo: {
    tokenName: 'apollo-token', // optional, default: apollo-token
    tokenExpires: 7, // optional, default: 7 (days)
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    authenticationType: 'Bearer', // optional, default: 'Bearer'
    // optional
    errorHandler (error) {
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    },
    // required
    clientConfigs: {
      default: {
        // required
        httpEndpoint: 'http://localhost:3000/graphql',
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
        httpLinkOptions: {
          credentials: 'same-origin'
        },
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        wsEndpoint: null,//'ws://127.0.0.1:8000/graphql', // optional
        // LocalStorage token
        tokenName: 'qetela-token', // optional
        // Enable Automatic Query persisting with Apollo Engine
        persisting: false, // Optional
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        websocketsOnly: false // Optional
      },
      test: {
        httpEndpoint: 'http://localhost:3000/graphql',
        wsEndpoint: null,//'ws://127.0.0.1:8000/graphql',
        tokenName: 'apollo-token'
      },
      // alternative: user path to config which returns exact same config options
      test2: '~/plugins/my-alternative-apollo-config.js'
    }
  },
  router: {
    middleware: ['auth']
  },
  toast: {
    position: 'top-right',
    duration: 3000
}
}
