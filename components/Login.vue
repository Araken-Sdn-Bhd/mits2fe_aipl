<template>
  <div class="bg-login">
    <div class="login-box">
      <img src="~/assets/images/mentari.png" />
      <div class="text">
        <h3>Welcome Back!</h3>
        <p>Please Log in to your account.</p>
      </div>
      <Error :message="error" v-if="error" />
      <form method="post" @submit.prevent="login">
        <div class="form-floating mb-3">
          <input
            class="form-control"
            id="inputEmail"
            type="email"
            v-model="email"
            placeholder="name@example.com"
            required
          />
          <label for="inputEmail">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            class="form-control"
            id="inputPassword"
            type="password"
            placeholder="Password"
            v-model="password"
            required
          />
          <label for="inputPassword">Password</label>
        </div>
        <div class="form-check mb-3 d-flex align-items-center">
          <div class="">
            <input
              class="form-check-input"
              id="inputRememberPassword"
              type="checkbox"
              value=""
            />
            <label class="form-check-label" for="inputRememberPassword"
              >Remember Password</label
            >
          </div>
          <a class="small ml-auto forgot-password" href="password.html"
            >Forgot Password?</a
          >
        </div>
        <div class="d-flex align-items-center mt-5 mb-4">
          <button class="btn login-btn" type="submit">Login</button>
          <a class="btn login-btn-border" href="register.html"
            >Create account</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Error from "~/components/Error";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: [],
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post("auth/login", {
          email: this.email,
          password: this.password,
        });
        this.error = response.data.message.email;
      } catch (e) {
        this.error = e; 
      }
    },
  },
};
</script>
