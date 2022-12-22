<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Exception</h1>
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
                        aria-label="Default select example">
                         <option value="0">Please Select</option>
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
    <div class="col-sm-6">
                    <div class="mb-3">
  <label for="" class="form-label">Branch</label>
                <select
            v-model="branch_id"
            class="form-select"
            aria-label="Default select example"
          >
           <option value="0">Please Select</option>
            <option
              v-for="bnch in branchlist"
              v-bind:key="bnch.id"
              v-bind:value="bnch.id"
            >
              {{ bnch.hospital_branch_name }}
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
                    <a href="/app/modules/Admin/calendar-management" class="btn btn-danger btn-text"
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "new-staff",
  data() {
    return {
      userdetails: null,
      errorList: [],
      StateList: [],
      branchlist: [],
      startdate: "",
      enddate: "",
      stateId: 0,
      description: "",
      name: "",
      Id: 0,
      branch_id: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetStateList();
    let urlParams = new URLSearchParams(window.location.search);
    this.Id = urlParams.get("id");
    if (this.Id) {
      this.editexception();
    }
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
      const response1 = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.branchlist = response1.data.list;
      } else {
        this.branchlist = [];
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
        if (!this.branch_id) {
          this.errorList.push("Branch is required");
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
                branch_id: this.branch_id,
                type: "update",
                id: this.Id,
              },
              { headers }
            );
            if (response.data.code == 200) {
              this.$router.push("/modules/Admin/calendar-management");
            } else {
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
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
                branch_id: this.branch_id,
                type: "add",
              },
              { headers }
            );
            if (response.data.code == 200) {
              this.$router.push("/modules/Admin/calendar-management");
            } else {
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
            }
          }
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
    async editexception() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "calendar-management/getAnnouncementListById",
        {
          id: this.Id,
        },
        { headers }
      );
      console.log("response", response.data);
      if (response.data.code == 200) {
        this.startdate = response.data.list[0].start_date;
        this.enddate = response.data.list[0].end_date;
        this.stateId = response.data.list[0].state;
        this.description = response.data.list[0].description;
        this.name = response.data.list[0].name;
        this.branch_id = response.data.list[0].branch_id;
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
  },
};
</script>
