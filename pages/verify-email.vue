<template>
  <div class="message-bg">
    <div class="message-box">
      <p>Your account has been verified successfully.</p>
      <div class="d-flex justify-content-center">
          <a href="/" class="btn btn-success next-btn">Next
              <i class="fad fa-arrow-to-right"></i>
          </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.message-bg {
    background: #F7F6F1 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
.message-box {
    background: #E2DECC;
    border: 0px;
    border-radius: 15px;
    padding: 50px 15px;
    box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 7%);
    width: 500px;
    text-align: center;
    margin: auto;
}
</style>
<script>
import Error from "~/components/Error";
import Loader from "../components/loader.vue";
export default {
  components: { Loader },
  name: "reset-password",
  head: {
    script: [
      {
        src: "/app/js/bootstrap.bundle.min.js",
        body: true,
        crossorigin: "anonymous",
      },
      {
        src: "/app/js/scripts.js",
        body: true,
        crossorigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      loader: false,
      userid: "",
      password: "",
      Cnfpassword: "",
      emailerror: null,
      validate: false,
    };
  },
  beforeMount() {
    let urlParams = new URLSearchParams(window.location.search);
    this.userid = urlParams.get("uky");
    this.OnSubmit();
  },
  methods: {
    async OnSubmit() {

      this.emailerror = null;
      this.validate = true;
      try {
        if (this.userid && this.validate) {
          this.loader = true;
          const response = await this.$axios.post("reset/verifyAccount", {
            userid: this.userid,
          });
          if (response.data.code == 200) {

            this.loader = false;
          } else {
            window.alert(response.data.message);
            this.loader = false;
          }
        }
      } catch (e) {
        console.log("api not working", e);
        this.loader = false;
      }
    },
  },
};
</script>
