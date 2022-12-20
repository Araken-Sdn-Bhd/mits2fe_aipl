<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <Loader v-show="loader"/>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of User Matrix</h1>
            <!-- <a href="demographic.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mb-3">
                <div class="row mt-3">
                  <div class="col-sm-3">
                    <select
                      v-model="HospitalId"
                      class="form-select"
                      aria-label="Default select example"
                      @change="onHospitalCodechange($event)"
                    >
                      <option value="0">Select Hospital</option>
                      <option
                        v-for="hst in hospitallist"
                        v-bind:key="hst.id"
                        v-bind:value="hst.id"
                      >
                        {{ hst.hospital_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-3">
                    <select
                      v-model="BranchId"
                      class="form-select"
                      aria-label="Default select example"
                      @change="onchangebranch($event)"
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
                  </div>

                  <div class="col-sm-3">
                    <select
                      v-model="teamId"
                      class="form-select"
                      aria-label="Default select example"
                      @change="OnSearch()"
                    >
                      <option value="0">Select Team</option>
                      <option
                        v-for="team in teamlist"
                        v-bind:key="team.id"
                        v-bind:value="team.id"
                      >
                        {{ team.team_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-3">
                    <div class="input-group">
                      <span class="input-group-text bg-transparent br-0"
                        ><i class="fa fa-search"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
                        v-model="search"
                        @keyup="OnSearch"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <table class="table table-striped data-table" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(roles, index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ roles.name }}</td>
                    <td>{{ roles.team_name }}</td>
                    <td>{{ roles.status }}</td>
                    <td>
                      <a class="edit" @click="Onview(roles)"><i class="fa fa-eye"></i></a>
                    </td>
                  </tr>
                </tbody>
              </table>
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
  name: "list-of-user-matrix",
  data() {
    return {
      loader:false,
      userdetails: null,
      list: [],
      alllist: [],
      hospitallist: [],
      branchlist: [],
      teamlist: [],
      HospitalId: 0,
      BranchId: 0,
      teamId: 0,
      search: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GethospitalList();
    this.GetList();
  },
  methods: {
    GetList() {
      this.loader=true;
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios1 = require("axios").default;
      axios1
        .get(
          `${this.$axios.defaults.baseURL}` + "screen-module/getUserMatrixList",
          { headers }
        )
        .then((resp) => {
          this.list = resp.data.list;
          this.alllist = resp.data.list;
          console.log("my list", resp.data);
          this.loader=false;
          $(document).ready(function () {
            $(".data-table").DataTable({
              searching: false,
              bLengthChange: false,
              bInfo: false,
              autoWidth: false,
              responsive: true,
              scrollX: true,
              language: {
                paginate: {
                  next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                  previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
                },
              },
            });
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
          this.loader=false;
        });
    },
    async GethospitalList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.hospitallist = response.data.list;
      } else {
        this.hospitallist = [];
      }
    },
    async onHospitalCodechange(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "hospital/get-branch-by-hospital-code",
        {
          hospital_code: event.target.value,
        },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.branchlist = response.data.branches;
      } else {
        this.branchlist = [];
      }
      this.OnSearch();
    },
    async onchangebranch(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "screen-module/getTeamListByHospitalIdAndBranchId",
        {
          hospital_id: this.HospitalId,
          branch_id: event.target.value,
        },
        { headers }
      );
      if (response.data.code == 200 || response.data.code == "200") {
        this.teamlist = response.data.list;
      } else {
        this.teamlist = [];
      }
      this.OnSearch();
    },
    OnSearch() {
      if (this.HospitalId && !this.BranchId && !this.teamId && !this.search) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.hospital_id
              .toString()
              .toLowerCase()
              .indexOf(this.HospitalId.toString().toLowerCase()) > -1
          );
        });
      } else if (
        this.HospitalId &&
        this.BranchId &&
        !this.teamId &&
        !this.search
      ) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.hospital_id
              .toString()
              .toLowerCase()
              .indexOf(this.HospitalId.toString().toLowerCase()) > -1 &&
            notChunk.branch_id
              .toString()
              .toLowerCase()
              .indexOf(this.BranchId.toString().toLowerCase()) > -1
          );
        });
      } else if (
        this.HospitalId &&
        this.BranchId &&
        this.teamId &&
        !this.search
      ) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.hospital_id
              .toString()
              .toLowerCase()
              .indexOf(this.HospitalId.toString().toLowerCase()) > -1 &&
            notChunk.branch_id
              .toString()
              .toLowerCase()
              .indexOf(this.BranchId.toString().toLowerCase()) > -1 &&
            notChunk.team_id
              .toString()
              .toLowerCase()
              .indexOf(this.teamId.toString().toLowerCase()) > -1
          );
        });
      } else if (
        this.HospitalId &&
        this.BranchId &&
        this.teamId &&
        this.search
      ) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.hospital_id
              .toString()
              .toLowerCase()
              .indexOf(this.HospitalId.toString().toLowerCase()) > -1 &&
            notChunk.branch_id
              .toString()
              .toLowerCase()
              .indexOf(this.BranchId.toString().toLowerCase()) > -1 &&
            notChunk.team_id
              .toString()
              .toLowerCase()
              .indexOf(this.teamId.toString().toLowerCase()) > -1 &&
            notChunk.name.toLowerCase().indexOf(this.search.toLowerCase()) >
              -1 ||
            notChunk.team_name
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1
          );
        });
      }
      else if (
        !this.HospitalId &&
        !this.BranchId &&
        !this.teamId &&
        this.search
      ) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.name.toLowerCase().indexOf(this.search.toLowerCase()) >
              -1 ||
            notChunk.team_name
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1
          );
        });
      }
    },
    Onview(data) {

      this.$router.push({
        path: "/modules/Admin/list-of-user-matrix-view",
       query: { id: data.team_id,usersid:data.id },
      });
    },
  },
};
</script>
