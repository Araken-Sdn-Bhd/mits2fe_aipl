<template>
  <div class="card mb-4">
    <div class="card-header bg-transparent">
      <h4>Default Password</h4>
    </div>
    <Loader v-if="loader" />
    <div class="card-body">
      <div class="tab-box">
        <form class="mt-2 mb-1" method="post" @submit.prevent="insertdefault()">
          <div class="d-flex align-items-center flex-box">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefaults"
              v-model="defaultpass"
              @click="OnChangedefault($event)"
            />
            <label class="form-check-label" for="flexCheckDefaults">
              Set the default password value
            </label>
          </div>
          <div>
            <input
              type="text"
              class="form-control"
              v-model="passwordvalue"
            />
          </div>

          <div class="d-flex align-items-center flex-box">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Maximums1"
              v-model="systemgenerate"
              @click="OnChangesystemganrate($event)"
            />
            <label class="form-check-label" for="Maximums1">
              System Generate
            </label>
          </div>
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
export default {
  name: "defaultpassword",
  data() {
    return {
      loader: false,
      userdetails: null,
      passwordvalue: "",
      systemgenerate: false,
      defaultpass: false,
      SidebarAccess:null
    };
  },
  mounted() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.getDefault();
  },
  methods: {
    async insertdefault() {
      this.$swal.fire({
        title: 'Are you sure to save this?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, save it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }
      ).then(async (result) =>{
        if (result.isConfirmed){
      this.loader = true;
      var variablename = "";
      var status = "";
      if (!this.defaultpass) {
        variablename = 0;
        status = 0;
      } else {
        variablename = this.passwordvalue;
        status = 1;
      }
      if (!this.systemgenerate) {
        variablename = variablename + "," + false;
        status = status + "," + 0;
      } else {
        variablename = variablename + "," + true;
        status = status + "," + 1;
      }

      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "system-settings/insertOrupdate",
          {
            section: "default-password",
            variable_name: "set-the-default-password-value,system-generate",
            variable_value: variablename,
            status: status,
          },
          { headers }
        );
        console.log("my response", response.data);
        if (response.data.code == 200 || response.data.code == "200") {
          this.passwordvalue = "";
          this.errors = null;
          this.loader = false;
          await this.$swal.fire(
                                'Successfully Submitted.',
                                'Data is inserted.',
                                'success',
                              );
                              this.getDefault();
        } else {
          this.loader = false;
          this.$swal.fire({
                            icon: 'error',
                            title: 'Oops... Something Went Wrong!',
                            text: 'the error is: ' + JSON.stringify(response.data.message),
                          });
        }
      } catch (e) {
        this.loader = false;
      }
    } 
  })
  },
    OnChangedefault(event) {
      if (event.target.Checked) {
        this.defaultpass = true;
        this.systemgenerate = false;
      } else {
        this.defaultpass = false;
        this.systemgenerate = false;
      }
    },
    OnChangesystemganrate(event) {
      if (event.target.Checked) {
        this.defaultpass = false;
        this.systemgenerate = true;
      } else {
        this.defaultpass = false;
        this.systemgenerate = false;
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
          "system-settings/get-setting/" + "default-password" , { headers }
        );

        if (response.data.code == 200) {

        if (response.data.setting[0].variable_name == "set-the-default-password-value" && response.data.setting[0].status == 1){
          this.defaultpass= true;
          this.passwordvalue= response.data.setting[0].variable_value;
        }

        if (response.data.setting[1].variable_name == "system-generate" && response.data.setting[1].status == 1){
          this.systemgenerate= true;
        }

      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
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
