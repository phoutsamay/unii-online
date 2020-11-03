export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'uniionline',
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
        href: 'https://unpkg.com/bootstrap/dist/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css',
      },
    ],
    script: [
      {
        src: 'https://unpkg.com/vue@latest/dist/vue.min.js',
      },
      {
        src: 'https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js',
      },
      {
        src:
          'https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

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
  ],
  styleResources: {
    scss: ['~/assets/scss/main.scss'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
