<template>
  <div class="card mb-4">
    <div class="card-header bg-transparent">
      <h4>Idle Session Timeout</h4>
    </div>
    <Loader v-if="loader" />
    <div class="card-body">
      <div class="tab-box">
        <form method="post" @submit.prevent="insertidlesession">
          <div class="mb-3">
            <label class="form-label">Duration (minutes)</label>
            <input
              type="number"
              class="form-control"
              placeholder="e.g 3"
              v-model="duration"
            />
          </div>
          <Error :message="error" v-if="error" />
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
  name: "Idletimeoutsession",
  data() {
    return {
      loader: false,
      duration: 0,
      error: null,
      userdetails: null,
    };
  },
  mounted() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  methods: {
    async insertidlesession() {
      this.error = null;
      this.loader = true;
      try {
        if (!this.duration) {
          this.loader = false;
          this.error = "Duration is Required!";
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "system-settings/insertOrupdate",
            {
              section: "idle-session-timeout",
              variable_name: "duration",
              variable_value: this.duration,
              status: "1",
            },
            { headers }
          );
          if (response.data.code == 200 || response.data.code == "200") {
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
            this.loader = false;
          } else {
            this.error = response.data.message.status[0];
            this.loader = false;
          }
        }
      } catch (e) {
        //this.error=fff
      }
    },
  },
};
</script>