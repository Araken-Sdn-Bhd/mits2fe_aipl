<template>
  <div class="card mb-4">
    <div class="card-header bg-transparent">
      <h4>Default Password</h4>
    </div>
    <Loader v-if="loader" />
    <div class="card-body">
      <div class="tab-box">
        <form class="mt-2 mb-2" method="post" @submit.prevent="insertdefault()">
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
            <input
              type="text"
              class="form-control width-small"
              v-model="passwordvalue"
            />
          </div>

          <div class="d-flex align-items-center flex-box">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Maximums1"
              v-model="systemganrate"
              @click="OnChangesystemganrate($event)"
            />
            <label class="form-check-label" for="Maximums1">
              System Generate
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
  name: "defaultpassword",
  data() {
    return {
      loader: false,
      userdetails: null,
      passwordvalue: "",
      systemganrate: false,
      defaultpass: false,
    };
  },
  mounted() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  methods: {
    async insertdefault() {
      this.loader = true;
      var variablename = "";
      var status = "";
      if (!this.passwordvalue) {
        variablename = 0;
        status = 0;
      } else {
        variablename = this.passwordvalue;
        status = 1;
      }
      if (!this.systemganrate) {
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
      }
    },
    OnChangedefault(event) {
      if (event.target.Checked) {
        this.defaultpass = true;
        this.systemganrate = false;
      } else {
        this.defaultpass = false;
        this.systemganrate = false;
      }
    },
    OnChangesystemganrate(event) {
      if (event.target.Checked) {
        this.defaultpass = false;
        this.systemganrate = true;
      } else {
        this.defaultpass = false;
        this.systemganrate = false;
      }
    },
  },
};
</script>