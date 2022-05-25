<template>
  <div class="bg-login bg-login-2">
    <div class="row login-box">
      <img src="~/assets/images/mentari.png" />
      <h4>Employer Login</h4>
      <Loader v-if="loader" />
      <form method="post" @submit.prevent="login">
        <div class="mb-3">
          <label for="inputEmail">User ID</label>
          <input
            class="form-control"
            id="inputEmail"
            type="text"
            v-model="email"
          />
        </div>
        <Error :message="emailerror" v-if="emailerror" />
        <div class="mb-3 password">
          <label for="inputPassword">Password</label>
          <a class="small ml-auto forgot-password" href="#">Forgot Password?</a>
          <input
            class="form-control"
            id="inputPassword"
            type="password"
            v-model="password"
          />
        </div>
        <Error :message="passerror" v-if="passerror" />
        <div class="form-check d-flex align-items-center">
          <div class="">
            <input
              class="form-check-input"
              id="inputRememberPassword"
              type="checkbox"
              value=""
            />
            <label class="form-check-label" for="inputRememberPassword"
              >Remember Me</label
            >
          </div>
        </div>
        <div class="d-flex align-items-center">
          <input type="submit" class="btn login-btn" value="Login" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Error from "~/components/Error";
export default {
  name: "employer-login",
  head: {
    script: [
      {
        src: "/js/bootstrap.bundle.min.js",
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
      email: "",
      password: "",
      emailerror: null,
      passerror: null,
      userdetail: null,
      loader: false,
    };
  },
  methods: {
    async login() {
      this.emailerror = null;
      this.passerror = null;
      try {
        if (!this.email) {
          this.emailerror = "Email is Required!";
        }
        if (!this.password) {
          this.passerror = "Password is Required!";
        }
        if (this.email && this.password) {
          this.loader = true;
          const response = await this.$axios.post("auth/login", {
            email: this.email,
            password: this.password,
          });
          this.userdetail = response.data;
          if (this.userdetail.code == 200) {
            localStorage.setItem(
              "userdetails",
              JSON.stringify(this.userdetail)
            );
            localStorage.setItem("nav", "tab2");
            this.$router.push("/Modules/Von/von-management");
            setTimeout(() => {
              window.location.reload();
            }, 100);
          } else {
            this.loader = false;
            this.emailerror = this.userdetail.message.email[0];
            this.passerror = this.userdetail.message.password[0];
          }
        }
      } catch (e) {
        this.loader = false;
        this.emailerror = "Email and Password does not match"; //$user.message.email; //e.response.data.message;
      }
      console.log("my data", this.userdetail);
    },
  },
};
</script>