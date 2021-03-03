// const baseURL = 'https://api.unii.co.th'
const baseURL =
  process.env.NODE_ENV === 'develop'
    ? 'https://api.unii.co.th'
    : 'http://127.0.0.1:5000'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  mode: 'universal',
  head: {
    title: 'uniionline',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
      },
    ],
    script: [
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js',
      },
      {
        src:
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: 'plugins/owl.js', ssr: false },
    { src: 'plugins/map.js', ssr: false },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://medium.com/@wearethreebears/globally-accessible-css-and-scss-sass-in-your-nuxt-component-files-7c1c012d31bd
    '@nuxtjs/style-resources',
    '@nuxt/http',
    '@nuxt/content',
  ],
  styleResources: {
    scss: ['~/assets/scss/main.scss'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL,
    // proxy: true,
  },

  proxy: {
    '/api': {
      target: baseURL,
      pathRewrite: {
        '^/api': '/',
      },
    },
  },
  env: {
    NODE_ENV: process.env.NODE_ENV,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
