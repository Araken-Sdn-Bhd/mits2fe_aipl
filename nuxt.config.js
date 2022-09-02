
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MITS 2.0",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: 'stylesheet', href: 'https://pro.fontawesome.com/releases/v5.10.0/css/all.css' },
    { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/dataTables.bootstrap5.min.css",
    "~/assets/css/styles.css",
    "~/assets/css/style.css",
    "~/assets/css/richtext.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  //   plugins: [
  //     { src: '~/plugins/vue-html2pdf', mode: 'client' }
  // ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth",
    "vue-sweetalert2/nuxt",
  ],
  axios: {
    // baseURL: "http://122.176.47.222:85/mintari2/public/index.php/api/"
    //baseURL:"http://192.168.1.15:8080/api/"
    baseURL:"http://localhost:8000/api/"
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true,
    },
  },
};
