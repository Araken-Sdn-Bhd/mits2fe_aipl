<template>
  <div class="card mb-4">
    <div class="card-header bg-transparent">
      <h4>Password Characteristic</h4>
    </div>
    <Loader v-if="loader" />
    <div class="card-body">
      <div class="tab-box">
        <form
          class="mt-2 mb-2"
          method="post"
          @submit.prevent="addcharectersticks"
        >
          <div class="d-flex align-items-center flex-box">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              v-model="chkMin"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Minimum Password Length
            </label>
            <input
              type="number"
              class="form-control width-small"
              v-model="minlen"
            />
          </div>

          <div class="d-flex align-items-center flex-box">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Maximum"
              v-model="chkMax"
            />
            <label class="form-check-label" for="Maximum">
              Maximum Password Length
            </label>
            <input
              type="number"
              class="form-control width-small"
              v-model="maxlen"
            />
          </div>

          <div class="d-flex align-items-center flex-box">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="iuall"
              v-model="Includeuppercase"
            />
            <label class="form-check-label" for="iuall">
              Include Uppercase and Lowercase Letters
            </label>
          </div>

          <div class="d-flex align-items-center flex-box">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="ia"
              v-model="Includealphanumeric"
            />
            <label class="form-check-label" for="ia">
              Include Alphanumeric
            </label>
          </div>

          <div class="d-flex align-items-center flex-box">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="isc"
              v-model="Includespecial"
            />
            <label class="form-check-label" for="isc">
              Include Special Characters , e.g., ! @ # ? ]
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
  name: "passwordcharectersticks",
  data() {
    return {
      loader: false,
      userdetails: null,
      errors: [],
      minlen: "",
      maxlen: "",
      chkMin:false,
      chkMax:false,
      Includeuppercase: false,
      Includealphanumeric: false,
      Includespecial: false,
      SidebarAccess: null,
    };
  },
  mounted() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.getCharacteristic();
  },
  methods: {
    async addcharectersticks() {
      this.loader = true;
      this.errors = [];
      var variablename = "";
      var status = "";
      if (!this.chkMin) {
        variablename = 0;
        status = 0;
      } else {
        variablename = this.minlen;
        status = 1;
      }
      if (!this.chkMax) {
        variablename = variablename + "," + 0;
        status = status + "," + 0;
      } else {
        variablename = variablename + "," + this.maxlen;
        status = status + "," + 1;
      }
      if (!this.Includeuppercase) {
        variablename = variablename + "," + false;
        status = status + "," + 0;
      } else {
        variablename = variablename + "," + true;
        status = status + "," + 1;
      }
      if (!this.Includealphanumeric) {
        variablename = variablename + "," + false;
        status = status + "," + 0;
      } else {
        variablename = variablename + "," + true;
        status = status + "," + 1;
      }
      if (!this.Includespecial) {
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
            section: "password-characteristic",
            variable_name:
              "minimum-password-length,maximum-password-length,include-uppercase-and-lowercase-letters,include-alphanumeric,include-special-characters",
            variable_value: variablename,
            status: status,
          },
          { headers }
        );
        if (response.data.code == 200 || response.data.code == "200") {
          this.maxlen = "";
          this.minlen = "";
          this.errors = [];
          this.loader = false;
          this.$swal.fire('created successfully', '', 'success');

          this.getCharacteristic();
        } else {
          this.loader = false;
          this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
        }
      } catch (e) {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
    },
    async getCharacteristic() {
      this.errors = [];
      try {

        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };

        const response = await this.$axios.get(
          "system-settings/get-setting/" + "password-characteristic" , { headers }
        );

        if (response.data.code == 200) {

        if (response.data.setting[0].variable_name == "minimum-password-length" && response.data.setting[0].status == 1){
          this.chkMin= true;
          this.minlen= response.data.setting[0].variable_value;
        }

        if (response.data.setting[1].variable_name == "maximum-password-length" && response.data.setting[1].status == 1){
          this.chkMax= true;
          this.maxlen= response.data.setting[1].variable_value;
        }
        if (response.data.setting[2].variable_name == "include-uppercase-and-lowercase-letters" && response.data.setting[2].status == 1){
          this.Includeuppercase= true;
        }
        if (response.data.setting[3].variable_name == "include-alphanumeric" && response.data.setting[3].status == 1){
          this.Includealphanumeric= true;
        }
        if (response.data.setting[4].variable_name == "include-special-characters" && response.data.setting[4].status == 1){
          this.Includespecial= true;
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
