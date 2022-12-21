<template>
  <div class="content-subtab border-top-left">
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddTeam">
      <div class="row mb-4 align-items-center">
        <div class="col-md-3">
          <label for="" class="form-label">Hospital Code</label>
          <select
            v-model="hospital_code"
            class="form-select"
            aria-label="Default select example"
            @change="onHospitalCodechange($event)"
          >
             <option value="">Please Select</option>
            <option
            v-for="hst in hospitallist"
                  v-bind:key="hst.id"
                  v-bind:value="hst.id"
            >
              {{ hst.hospital_code }}
            </option>
          </select>
        </div>

        <div class="col-md-6">
          <label class="form-label">Branch Name</label>
          <select
            v-model="branceName"
            class="form-select"
            aria-label="Default select example"
          >
             <option value="">Please Select</option>
            <option
              v-for="bnch in branchlist"
              v-bind:key="bnch.id"
              v-bind:value="bnch.id"
            >
              {{bnch.hospital_branch_name}}
            </option>
          </select>
        </div>
      </div>
      <!-- close-row -->

      <div class="row mb-4">
        <div class="col-md-3">
          <label for="" class="form-label">Team</label>
          <select
                v-model="team"
                class="form-select"
                aria-label="Default select example"
              >
              <option value="0">Please Select</option>
                <option
                  v-for="team in teams"
                  v-bind:key="team.id"
                  v-bind:value="team.id"
                >
                  {{ team.service_name }}
                </option>
              </select>
        </div>
        <div class="col-md-6">
              <label for="" class="form-label">Status</label>
                        <select class="form-select" v-model="teamstatus">
                                <option value="1">Enable</option>
                                <option value="0">Disable</option>
                        </select>
          </div>
      </div>
      <p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
      <div class="d-flex justify-content-center" :class="SidebarAccess!=1?'hide':''">
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="Id">
        <i class="fa fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!Id">
          <i class="fa fa-plus"></i> Add Parameter
        </button>
      </div>
      <!-- close-row -->
    </form>
    <div class="table-title">
      <h3>List of Team</h3>
    </div>
    <table class="table table-striped data-table2 font-13 display nowrap" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Hospital Code</th>
          <th>Branch Name</th>
          <th>Team Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tem, index) in taemlist" :key="index">
          <td>{{index+1}}</td>
          <td>{{tem.branchs.hospital_code}}</td>
          <td>{{tem.branchs.hospital_branch_name}}</td>
          <td>{{tem.services.service_name}}</td>
          <td v-if="tem.status == 1">Enabled</td>
          <td v-if="tem.status == 0" style="color:red">Disabled</td>

           <td class="td"  :class="SidebarAccess!=1?'hide':''">
            <a class="edit" @click="editteam(tem)"
              ><i class="fa fa-edit"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "team",
  setup() {},
  data() {
    return {
      Id: 0,
      hospital_code: 0,
      branceName: 0,
      team: "",
      teamstatus:"",
      hospitallist: [],
      branchlist: [],
      taemlist: [],
      teams: [],
      errors: [],
      SidebarAccess:null
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
      .get(
        `${this.$axios.defaults.baseURL}` +
          "service/division-list",
        { headers }
      )
      .then((resp) => {
        this.taemlist = resp.data.list;
        $(document).ready(function () {
          $(".data-table2").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            // autoWidth: false,
            // responsive: true,
            scrollX: true,
            language: {
              paginate: {
                next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
              },
            },
          });
          $('a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
            $($.fn.dataTable.tables(true))
              .DataTable()
              .columns.adjust()
              .responsive.recalc();
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
      });
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GethospitalList();
    this.GetTeamList();
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("service/division-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.taemlist = response.data.list;
      } else {
        this.taemlist = [];
      }
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
    },
    async onAddTeam() {
      this.errors = [];
      try {
        if (!this.hospital_code) {
          this.errors.push("Hospital Code is required.");
        }
        if (!this.branceName) {
          this.errors.push("Branch Name is required.");
        }
        if (!this.team) {
          this.errors.push("Team is required.");
        } if(this.hospital_code && this.branceName && this.team) {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "service/insertOrupdate-division",
              {
                added_by: this.userdetails.user.id,
                division_id: this.Id,
                service_id: this.team,
                hospital_id: this.hospital_code,
                branch_id: this.branceName,
                division_order: 0,
                status: this.teamstatus,
              },
              { headers }
            );
            console.log("my response", response.data);
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire('Successfully Update', '', 'success');
              this.ResetModel();
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
              "service/update-division",
              {
                added_by: this.userdetails.user.id,
                division_id: this.Id,
                service_id: this.team,
                hospital_id: this.hospital_code,
                branch_id: this.branceName,
                division_order: 0,
                status: this.teamstatus,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
this.$swal.fire(
                  'Successfully Update',
                );
              this.ResetModel();
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
        console.log("my error", e);
      }
    },
    async ResetModel() {
      this.hospital_code = "";
      this.branceName = "";
      this.team = "";
      this.GetList();
      this.Id=0;
    },
    async GetTeamList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("service/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.teams = response.data.list;
      } else {
        this.teams = [];
      }
    },
    async editteam(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "service/get-division",
        {
          division_id: data.id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.team = response.data.list[0].service_id;
        this.hospital_code = response.data.list[0].hospital_id;
        this.branceName = response.data.list[0].branch_id;
        this.servicedindex = response.data.list[0].division_order;
        this.Id = data.id;
        this.teamstatus = response.data.list[0].status;
        const response1 = await this.$axios.post(
          "hospital/get-branch-by-hospital-code",
          {
            hospital_code: response.data.list[0].hospital_code,
          },
          { headers }
        );
        if (response1.data.code == 200 || response1.data.code == "200") {
          this.branchlist = response1.data.branches;
        } else {
          this.branchlist = [];
        }
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
    async deleteteam(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "service/remove-division",
          { added_by: this.userdetails.user.id, division_id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$swal.fire('Deleted Successfully', '', 'success');
          this.GetList();
        } else {
          this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
        }
      } catch (e) {this.$swal.fire({
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
