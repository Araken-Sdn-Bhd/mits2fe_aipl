<template>
  <div class="card mb-4">
    <div class="card-header bg-transparent">
      <h4>Login Attempt</h4>
    </div>
    <Loader v-if="loader" />
    <div class="card-body">
      <div class="tab-box">
        <form method="post" @submit.prevent="insertLoginAttempt">
          <div class="mb-3">
            <label class="form-label">Number Of Invalid Sign-On Allowed</label>
            <input
              type="number"
              class="form-control"
              v-model="sign"
              placeholder="10"
            />
          </div>
          <Error :message="error" v-if="error" />
          <div class="d-flex">
            <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="SidebarAccess==1">
              <i class="fa fa-save"></i> Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Error from "~/components/Error";

export default {
  name: "loginattempt",
  data() {
    return {
      loader: false,
      sign: null,
      error: null,
      userdetails: null,
      SidebarAccess:null
    };
  },
  mounted() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));

    this.getDefault();
  },
  methods: {
    async insertLoginAttempt() {
      this.loader = true;
      this.error = null;
      try {
        if (!this.sign) {
          this.loader = false;
          this.error = "Number Of Invalid Sign-On Allowed is Required!";
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "system-settings/insertOrupdate",
            {
              section: "login-attempt",
              variable_name: "number_of_invalid_sign_on_allowed",
              variable_value: this.sign,
              status: "1",
            },
            { headers }
          );
          if (response.data.code == 200 || response.data.code == "200") {
            this.loader = false;
            this.$swal.fire('created successfully', '', 'success');
          } else {
            this.error = response.data.message.status[0];
            this.loader = false;
          }
        }
      } catch (e) {
        this.loader = false;
        this.error = e.error;
      }
    },

    async getDefault() {
      this.errors = [];
      try {

        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };

        const response = await this.$axios.get(
          "system-settings/get-setting/" + "login-attempt" , { headers }
        );

        if (response.data.code == 200) {

        if (response.data.setting[0].variable_name == "number_of_invalid_sign_on_allowed" && response.data.setting[0].status == 1){
          this.sign= response.data.setting[0].variable_value;
        }

      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }

      } catch (e) {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
    },
  },
};
</script>
