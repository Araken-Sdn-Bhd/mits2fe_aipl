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
            <button type="submit" class="btn btn-warning btn-text ml-auto">
              <i class="far fa-save"></i> Save
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
      Includeuppercase: false,
      Includealphanumeric: false,
      Includespecial: false,
    };
  },
  mounted() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  methods: {
    async addcharectersticks() {
      this.loader = true;
      this.errors = [];
      var variablename = "";
      var status = "";
      if (!this.minlen) {
        variablename = 0;
        status = 0;
      } else {
        variablename = this.minlen;
        status = 1;
      }
      if (!this.maxlen) {
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
          this.$nextTick(() => {
            $("#insertpopup").modal("show");
          });
        } else {
          this.loader = false;
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
  },
};
</script>