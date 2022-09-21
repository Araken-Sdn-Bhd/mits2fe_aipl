<template>
  <div class="bg-login login-bg">
     <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
        <CommonHeader />
    <main>
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
        <button class="btn login-btn" @click="OnSubmit">Change Password</button>
      </div>
    </div>
     <div
      class="modal fade"
      id="password-change"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-sm password-change">
        <div class="modal-content">
          <div class="modal-body">
            
            <p>Successful Changed</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn-ok" data-bs-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>
    </main>
     </div>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../components/CommonHeader.vue";
import CommonSidebar from "../../components/CommonSidebar.vue";
import Error from "~/components/Error";
import Loader from "../../components/loader.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  name: "change-password",
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
      loader: false,
      userid: "",
      password: "",
      Cnfpassword: "",
      emailerror: null,
      validate: false,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    console.log('my userdeatila',this.userdetails);
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
          const response = await this.$axios.post("reset/changePassword", {
            userid: this.userdetails.user.id,
            password: this.password,
          });
          if (response.data.code == 200 || response.data.code == '200') {
            // this.$router.push("/");
            this.loader = false;
            // this.resetmodel();
            // this.$nextTick(() => {
            //   $("#password-change").modal("show");
            // });
          localStorage.removeItem('userdetails');
          this.$router.push("/staff-login");
          } else {
           this.loader = false;
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        console.log("api not working", e);
        this.loader = false;
      }
    },
     resetmodel() {
      this.password = "";
      this.Cnfpassword = "";
    },
  },
};
</script>
