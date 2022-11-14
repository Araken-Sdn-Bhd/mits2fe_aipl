<template>
  <div class="bg-login login-bg">
    <div class="row login-box">
      <img src="~/assets/images/mentari.png" />
      <div class="text mb-0">
        <h4>Password Reset</h4>
        <!-- <p>
          Enter your email address and we will send you a link to reset your
          password.
        </p> -->
      </div>

      <div class="mb-1">
        <label for="inputEmail">Password</label>
        <input
          class="form-control"
          id="inputEmail"
          type="text"
          v-model="password"
        />
      </div>
      <div class="mb-1">
        <label for="inputEmail">New Password</label>
        <input
          class="form-control"
          id="inputEmail"
          type="text"
          v-model="Cnfpassword"
        />
      </div>
      <Error :message="emailerror" v-if="emailerror" />
      <div class="d-flex align-items-center mt-3 mb-2">
        <button class="btn login-btn" @click="OnSubmit">Reset Password</button>
      </div>
    </div>
  </div>
</template>
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
        src: "/js/scripts.js",
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
  },
  methods: {
    async OnSubmit() {
      this.emailerror = null;
      this.validate = true;
      try {
        if (!this.password) {
          this.emailerror = "Password is Required!";
        }
        if (this.password != this.Cnfpassword) {
          this.emailerror = "Password and confirm password does't match";
          this.validate = false;
        }
        if (this.password && this.validate) {
          this.loader = true;
          const response = await this.$axios.post("reset/password", {
            userid: this.userid,
            password: this.password,
          });
          if (response.data.code == 200) {
            this.$router.push("/");
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
