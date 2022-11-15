<template>
  <div class="bg-login login-bg">
    <div class="row login-box">
      <img src="~/assets/images/mentari.png" />
      <div class="text mb-0">
        <h4>Password Reset</h4>
        <p>
          Enter your email address and we will send you a link to reset your
          password.
        </p>
      </div>

      <div class="mb-1">
        <label for="inputEmail">Email address</label>
        <input
          class="form-control"
          id="inputEmail"
          type="text"
          v-model="email"
        />
      </div>
      <Error :message="emailerror" v-if="emailerror" />
      <div class="d-flex align-items-center mt-3 mb-2">
        <button class="btn login-btn" @click="SendEmail">Reset Password</button>
      </div>
    </div>
  </div>
</template>
<script>
import Error from "~/components/Error";
import Loader from "../components/loader.vue";
export default {
  components: { Loader },
  name: "forget-password",
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
      email: "",
      emailerror: null,
    };
  },
  methods: {
    async SendEmail() {
      this.emailerror = null;
      try {
        if (!this.email) {
          this.emailerror = "Email is Required!";
        }
        if (this.email) {
          this.loader = true;
          const response = await this.$axios.post("mails/forgot-password", {
            emailaddress: this.email,
          });
          if (response.data.code == 200) {
            window.alert(response.data.message);
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
