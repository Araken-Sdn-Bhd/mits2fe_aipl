<template>
  <loginHome />
</template>

<script>
import loginHome from './login-home.vue';
export default {
  head() {
      return {
        script: [
          {
            src:
              'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
          }
        ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
          }
        ]
      }
    },
  components: { loginHome },
  name: "IndexPage",
};
</script>
