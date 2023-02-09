<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Mentari Staff</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table">
                <div class="row mt-2">
                  <div class="col-lg-4 col-sm-6  mb-3">
                    <select
                      v-model="Id"
                      v-if="dataReady"
                      disabled
                      class="form-select"
                      aria-label="Default select example"
                      @change="onbranchchange($event)"
                    >
                      <option value="0">Select Branch</option>
                      <option
                        v-for="brnch in branchlist"
                        v-bind:key="brnch.id"
                        v-bind:value="brnch.id"
                      >
                        {{ brnch.hospital_branch_name }}
                      </option>
                    </select>
                    <select
                      v-model="Id"
                      v-if="dataReady2"
                      class="form-select"
                      aria-label="Default select example"
                      @change="onbranchchange($event)"
                    >
                      <option value="0">All Branch</option>
                      <option
                        v-for="brnch in branchlist"
                        v-bind:key="brnch.id"
                        v-bind:value="brnch.id"
                      >
                        {{ brnch.hospital_branch_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-lg-4 col-sm-6 mb-3">
                    <div class="input-group">
                      <span class="input-group-text bg-transparent br-0"
                        ><i class="fa fa-search"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                        @keyup="onnamechange"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <div style="overflow-x:auto;">
                <table class="table table-striped data-table display nowrap" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Staff Name</th>
                    <th>Designation</th>
                    <th>Branch</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(staff,index) in list" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ staff.name }}</td>
                    <td>{{ staff.designation_name }}</td>
                    <td>{{ staff.hospital_branch_name }}</td>
                    <td>
                      <a @click="view(staff)" class="view"
                        ><i class="fa fa-eye"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>
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
  name: "occasion-of-service",
  setup() {},
  data() {
    return {
      Id: 0,
      name: "",
      userdetails: null,
      list: [],
      branchlist: [],
      dataReady: false,
      dataReady2: false,
    };
  },
  mounted() {
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .post(
        `${this.$axios.defaults.baseURL}` +
          "staff-management/getStaffManagementListOrById",
        { branch_id: this.userdetails.branch.branch_id, name: this.name,email:this.userdetails.user.email },
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        $(document).ready(function () {
          // $(".data-table").DataTable({
          //   searching: false,
          //   bLengthChange: false,
          //   bInfo: false,
          //   // autoWidth: false,
          //   // responsive: true,
          //   scrollX: true,
          //   language: {
          //     paginate: {
          //       next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
          //       previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
          //     },
          //   },
          // });
        });
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
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetBranchList();
    this.getRole();
  },
  methods: {
    async getRole() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/getRoleCode",
        { email: this.userdetails.user.email },
        {
          headers,
        }
      );
      this.Id=this.userdetails.branch.branch_id;
            if (response.data.list.code =="superadmin"){
              this.dataReady2= true;
              this.dataReady= false;
            }else{
              this.dataReady= true;
              this.dataReady2= false;
            }

    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/getStaffManagementListOrById",
        { branch_id: this.Id, name: this.name },
        {
          headers,
        }
      );
      console.log("my body", this.name, this.Id);
      console.log("my resp", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    async view(data) {
      this.$router.push({
        path: "/modules/Admin/occasion-of-service-staff-info",
        query: { id: data.id,users_id: data.users_id }, //id
      });
    },
    async onbranchchange(event) {
      this.Id = event.target.value;
      this.GetList();
    },
    async onnamechange(event) {
      this.name = event.target.value;
      this.GetList();
    },
    async GetBranchList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.branchlist = response.data.list;
      } else {
        this.branchlist = [];
      }
    },
  },
};
</script>
