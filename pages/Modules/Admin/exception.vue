<template>
  <div id="layoutSidenav">
    <Adminsidebar />
    <div id="layoutSidenav_content">
      <AdminHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Exception</h1>
            <!-- <a href="#"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <form class="mt-3" method="post" @submit.prevent="onexception">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Date</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="startdate"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">End Date</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="enddate"
                      />
                    </div>
                  </div>
                   </div>
 <div class="row">
    <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="name"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">State</label>
                      <select
                        v-model="stateId"
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option
                          v-for="state in StateList"
                          v-bind:key="state.id"
                          v-bind:value="state.id"
                        >
                          {{ state.state_name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="mb-3">
                      <label class="form-label">Description</label>
                      <textarea
                        class="form-control textarea"
                        v-model="description"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <!-- row -->
 <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                <div class="d-flex">
                  <div class="ml-auto">
                    <a class="btn btn-danger btn-text"
                      ><i class="fad fa-times"></i> Cancel</a
                    >
                    <button type="submit" class="btn btn-success btn-text">
                      <i class="fad fa-paper-plane"></i> Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import Adminsidebar from "../../../components/Admin/Adminsidebar.vue";
import AdminHeader from "../../../components/Admin/Admin_ToHeader.vue";
export default {
  components: { Adminsidebar, AdminHeader },
  name: "new-staff",
  data() {
    return {
      userdetails: null,
      errorList: [],
      StateList: [],
      startdate: "",
      enddate: "",
      stateId: 0,
      description: "",
      name: "",
      Id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetStateList();
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
  },
  methods: {
    async GetStateList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("address/list", { headers });
      if (response.data.code == 200 || response.data.code == "200") {
        this.StateList = response.data.list;
      } else {
        this.StateList = [];
      }
    },
    async onexception() {
      this.errorList = [];
      try {
        if (!this.startdate) {
          this.errorList.push("Date is required");
        }
        if (!this.enddate) {
          this.errorList.push("End Date is required");
        }
        if (!this.stateId) {
          this.errorList.push("State is required");
        }
        if (!this.name) {
          this.errorList.push("Name is required");
        }
        if (!this.description) {
          this.errorList.push("Description is required");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id) {
            const response = await this.$axios.post(
              "calendar-management/add",
              {
                added_by: this.userdetails.user.id,
                name: this.name,
                start_date: this.startdate,
                end_date: this.enddate,
                description: this.description,
                state: this.stateId.toString(),
                type: "update",
                id: this.Id,
              },
              { headers }
            );
            if (response.data.code == 200) {
              this.$nextTick(() => {
                $("#updatepopup").modal("show");
              });
            } else {
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          } else {
            const response = await this.$axios.post(
              "calendar-management/add",
              {
                added_by: this.userdetails.user.id,
                name: this.name,
                start_date: this.startdate,
                end_date: this.enddate,
                description: this.description,
                state: this.stateId.toString(),
                type: "add",
              },
              { headers }
            );
            if (response.data.code == 200) {
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.startdate = "";
              this.enddate = "";
              this.description = "";
              this.name = "";
              this.stateId = 0;
              this.Id = 0;
            } else {
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          }
        }
      } catch (e) {}
    },
  },
};
</script>