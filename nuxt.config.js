const colors = require("vuetify/es5/util/colors").default;

module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: "Nano Rental",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  serverMiddleware: [{ path: "/email/send", handler: "~/service/email" }],
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~plugins/datepicker", ssr: false }],
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/proxy",
      {
        pathRewrite: { "^/api": "" }
      }
    ]
  ],
  proxy: {
    "/api": "http://104.248.241.122:1337"
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      primary: "#e84c3d",
      accent: "#f0897f",
      secondary: "#fff",
      info: "#2196f3",
      warning: "#ff5252",
      error: "#ff5252",
      success: "#4caf50"
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
