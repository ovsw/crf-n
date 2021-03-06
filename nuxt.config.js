const pkg = require('./package')
const webpack = require('webpack')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Lobster+Two:400,400i,700,700i|Montserrat:400,500,700'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    //{ src: '~/assets/scss/bulma.scss', lang: 'scss' },
    //{ src: '~/assets/scss/main.scss', lang: 'scss' },
    { src: '~/static/css/main.css', lang: 'css' },
    { src: 'jquery.mmenu/dist/jquery.mmenu.css', lang: 'css' },
    {
      src: 'jquery.mmenu/dist/addons/searchfield/jquery.mmenu.searchfield.css',
      lang: 'css'
    },
    // {
    //   src:
    //     'jquery.mmenu/dist/extensions/fullscreen/jquery.mmenu.fullscreen.css',
    //   lang: 'css'
    // },
    // {
    //   src:
    //     'jquery.mmenu/dist/extensions/positioning/jquery.mmenu.positioning.css',
    //   lang: 'css'
    // },
    // {
    //   src:
    //     'jquery.mmenu/dist/extensions/borderstyle/jquery.mmenu.borderstyle.css',
    //   lang: 'css'
    // },
    {
      src: 'jquery.mmenu/dist/addons/navbars/jquery.mmenu.navbars.css',
      lang: 'css'
    }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/components',
    '~plugins/helper.js',
    { src: '~/plugins/mmenu.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules 
  */
  modules: [
    ['nuxt-sass-resources-loader', ['assets/scss/_settings.scss']],
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    //'@nuxtjs/bulma',
    [
      'storyblok-nuxt',
      { accessToken: 'WVKQLnzZNEUrYHNMzLrfJAtt', cacheProvider: 'memory' }
    ]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  router: {
    middleware: 'cacheversion'
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
        // ...etc.
      })
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
