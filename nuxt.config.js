export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'C3C Software: Desenvolvimento de Softwares e Pessoas',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Desenvolvimento de Softwares e Pessoas. Utilizamos padrões de desenvolvimento para entregar soluções estáveis, escaláveis e de fácil manutenção.' },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: '~assets/img/logo-c3c.png'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: "~assets/img/logo-c3c.png"
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/axios', { baseURL: '/api/contact' }],
    'nuxt-seo'
  ],
  seo: {
    // Module options
    baseUrl: 'https://c3csoftware.com.br',
    name: 'C3C Software: Desenvolvimento de Softwares e Pessoas',
    title: 'C3C Software: Desenvolvimento de Softwares e Pessoas',
    description: 'Desenvolvimento de Softwares e Pessoas. Utilizamos padrões de desenvolvimento para entregar soluções estáveis, escaláveis e de fácil manutenção.',
    keywords: ['Consultoria', 'Capacitação', 'Desenvolvimento Salesforce']
  },

  serverMiddleware: [
    '~/api/contact'
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
