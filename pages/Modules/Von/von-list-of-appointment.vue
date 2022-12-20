<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Appointment</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-3">
                <div class="row">
                  <div class="col-sm-4 mb-2">
                    <input
                      type="date"
                      class="form-control"
                      v-model="date"
                      @change="OnSearch"
                    />
                  </div>

                  <div class="col-sm-4 mb-2">
                    <select
                      class="form-select"
                      @change="OnSearch"
                      v-model="service"
                    >
                      <option value="">Select Service</option>
                      <option value="Consultation/Counselling">
                        Consultation/Counselling
                      </option>
                      <option value="Work-based Rehabilitation">
                        Work-based Rehabilitation
                      </option>
                      <option value="Awareness or Psychoeducation">
                        Awareness or Psychoeducation
                      </option>
                      <option value="Recreational Theraphy">
                        Recreational Theraphy
                      </option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div class="col-sm-4 ml-auto mb-2">
                    <input
                      type="text"
                      class="form-control"
                      v-model="name"
                      @keyup="OnSearch"
                      placeholder="Search By Name"
                    />
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <table
                class="table table-striped data-table font-13"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th></th>
                    <th>No</th>
                    <th>Name</th>
                    <th>Appointment Date</th>
                    <th>Appo. Time</th>
                    <th>Assigned Doctor</th>
                    <th>Areas Of Involvement</th>
                    <th>Services</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(app, index) in list" :key="index">
                    <td>
                      <input
                        type="checkbox"
                        name=""
                        v-on:click="Checkuser(app.id, $event)"
                      />
                    </td>
                    <td>{{ index + 1 }}</td>
                    <td>{{ app.name }}</td>
                    <td>{{ app.app_date }}</td>
                    <td>{{ app.app_time }}</td>
                    <td>{{ app.dr_name }}</td>
                    <td>{{ app.aoi }}</td>
                    <td>{{ app.service }}</td>
                    <td class="td"  :class="SidebarAccess!=1?'hide1':''">
                      <a
                        style="cursor: pointer"
                        @click="Onedit(app)"
                        class="edit"
                      >
                        <i class="fa fa-edit"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="d-flex">
                <div class="ml-auto"  :class="SidebarAccess!=1?'hide1':''">
                  <a
                    v-on:click="OnApproverejectRequest(2)"
                    class="btn btn-danger btn-text"
                    ><i class="fad fa-vote-nay"></i> Reject</a
                  >
                  <a
                    v-on:click="OnApproverejectRequest(1)"
                    class="btn btn-warning btn-green btn-text"
                    ><i class="fad fa-check"></i> Approve</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <von-footer></von-footer>
    </div>
  </div>
</template>
<script>
import VonFooter from "../../../components/Von/VonFooter.vue";
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { VonFooter, CommonHeader, CommonSidebar },
  name: "von-list-of-appointment",
  data() {
    return {
      userdetails: null,
      errors: [],
      loader: false,
      list: [],
      servicelist: [],
      selected: [],
      service: "",
      name: "",
      date: "",
      SidebarAccess:null,

    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetServicelist();
    this.GetList();
  },
  methods: {
    GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .post(
          `${this.$axios.defaults.baseURL}` + "von-appointment/list",
          {
            name: "",
            date: "",
            service: "",
            email:this.userdetails.user.email,branch_id:this.userdetails.branch.branch_id
          },
          { headers }
        )
        .then((resp) => {
          this.list = resp.data.list;
        })
        .catch ((err) => {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + err,
                  footer: ''
                });

          console.error(err);
        });
    },
    Onedit(data) {
      this.$router.push({
        path: "/modules/Von/book-appointment",
        query: { id: data.id },
      });
    },
    OnView(data) {
      if (data.app_type == "Individual") {
        this.$router.push({
          path: "/modules/Von/view-individual",
          query: { id: data.id },
        });
      } else if (data.app_type == "Group") {
         this.$router.push({
          path: "/modules/Von/view-group",
          query: { id: data.id },
        });
      } else {
         this.$router.push({
          path: "/modules/Von/view-organization",
          query: { id: data.id },
        });
      }
    },
    async GetServicelist() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response1 = await this.$axios.get("service/list", { headers });
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.servicelist = response1.data.list;
      } else {
        this.servicelist = [];
      }
    },
    async OnSearch() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .post(
          `${this.$axios.defaults.baseURL}` + "von-appointment/list",
          {
            name: this.name,
          date: this.date,
          service: this.service,
          email:this.userdetails.user.email,
          branch_id:this.userdetails.branch.branch_id
          },
          { headers }
        )
        .then((resp) => {
          this.list = resp.data.list;
        })
        .catch ((err) => {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + err,
                  footer: ''
                });

          console.error(err);
        });

    },
    Checkuser(value, event) {
      if (event.target.checked) {
        this.selected.push(value);
      } else {
        if (this.selected.indexOf(value) != -1)
          this.selected.splice(this.selected.indexOf(value), 1);
      }
    },
    async OnApproverejectRequest(status) {
      try {
        this.loader = true;
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        this.selected.forEach((value, index) => {
          const axios = require("axios").default;
          axios
            .post(
              `${this.$axios.defaults.baseURL}` + "von-appointment/set-status",
              { id: value, status: status.toString() },
              { headers }
            )

            .then((resp) => {
              console.log("reuslt", resp);
            });
        });
        this.loader = false;
        this.GetList();
          this.$swal.fire('Successfully Update', '', 'success');
      } catch (e) {
        this.loader = false;this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },
  },
};
</script>

<style scoped>
.hide1 {
  display: none;
}
</style>
