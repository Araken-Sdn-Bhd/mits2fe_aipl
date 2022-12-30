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
          type="password"
          v-model="password"
        />
      </div>
      <div class="mb-1">
        <label for="inputEmail">New Password</label>
        <input
          class="form-control"
          id="inputEmail"
          type="password"
          v-model="Cnfpassword"
        />
      </div>
      <Error :message="emailerror" v-if="emailerror" />
      <Error :message="minPwdError" v-if="minPwdError" />
      <Error :message="maxPwdError" v-if="maxPwdError" />
      <Error :message="letterCaseError" v-if="letterCaseError" />
      <Error :message="alphaNumericError" v-if="alphaNumericError" />
      <Error :message="specialCharError" v-if="specialCharError" />
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
      minPwd: false,
      minPwdLength: "",
      maxPwd: false,
      maxPwdLength: "",
      letterCase: false,
      alphaNumeric: "",
      specialChar: "",
      settinglist: [],
      emailerror: null,
      minPwdError: null,
      maxPwdError: null,
      letterCaseError: null,
      alphaNumericError: null,
      specialCharError: null,
      validate: false,
    };
  },
  beforeMount() {
    let urlParams = new URLSearchParams(window.location.search);
    this.userid = urlParams.get("uky");
    this.PasswordCharacteristic();
  },
  methods: {
      async PasswordCharacteristic(){
      const headers = {
        Authorization: "Bearer " + this.userid,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
          "system-settings/get-setting/" + "password-characteristic" , { headers }
        );

        if (response.data.code == 200) {

         if (response.data.setting[0].variable_name == "minimum-password-length" && response.data.setting[0].status == 1){
            this.minPwd= true;
            this.minPwdLength= response.data.setting[0].variable_value;
         }

         if (response.data.setting[1].variable_name == "maximum-password-length" && response.data.setting[1].status == 1){
            this.maxPwd= true;
            this.maxPwdLength= response.data.setting[1].variable_value;
         }

         if (response.data.setting[2].variable_name == "include-uppercase-and-lowercase-letters" && response.data.setting[2].status == 1){
            this.letterCase= true;
         }

         if (response.data.setting[3].variable_name == "include-alphanumeric" && response.data.setting[3].status == 1){
            this.alphaNumeric= true;
         }

         if (response.data.setting[4].variable_name == "include-special-characters" && response.data.setting[4].status == 1){
            this.specialChar= true;
         }

       } else {
         this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
       }

    },

    async OnSubmit() {
      this.emailerror = null;
      this.validate = true;

      try {
        if (!this.password) {
          this.emailerror = "Password is Required!";
        }
        if (this.password != this.Cnfpassword) {
          this.emailerror = "Entered Password doesn't match";
          this.validate = false;
        }

        this.minPwdError = null;
        this.maxPwdError = null;
        this.letterCaseError = null;
        this.alphaNumericError = null;
        this.specialCharError = null;
        this.checkPasswords();

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
            this.loader = false;
            this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
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

    checkPasswords(){
      if(this.minPwd)
      {
        if(this.password.length<this.minPwdLength){
        this.minPwdError = "Password must contain at least " + this.minPwdLength + " character(s).";
        this.validate = false;
        }
      }

      if(this.maxPwd)
      {
        if(this.password.length>this.maxPwdLength){
        this.minPwdError = "Password must not exceed " + this.maxPwdLength + " character(s).";
        this.validate = false;
        }
      }

      if(this.letterCase)
      {
        if(!(this.password.match(new RegExp("[a-z]")) && this.password.match(new RegExp("[A-Z]")))){
            this.letterCaseError = "Password must contain both uppercase and lowercase letters";
            this.validate = false;
        }
      }

      if(this.alphaNumeric)
      {
        if(!(this.password.match(new RegExp("[0-9]")) && this.password.match(new RegExp("[a-zA-Z]")))){
            this.alphaNumericError = "Password must contain alphanumeric characters";
            this.validate = false;
        }
      }

      if(this.specialChar)
      {
        if(!this.password.match(new RegExp("[#?!@$%^&*-]"))){
            this.specialCharError = "Password must contain special characters, e.g., [#?!@$%^&*-]";
            this.validate = false;
        }
      }
    },

  },
};
</script>
