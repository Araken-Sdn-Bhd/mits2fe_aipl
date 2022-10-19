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
             <option value="0">Please Select</option>
            <option
            v-for="hst in hospitallist"
                  v-bind:key="hst.id"
                  v-bind:value="{id: hst.id, text: hst.hospital_code} "
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
             <option value="0">Please Select</option>
            <option
              v-for="bnch in branchlist"
              v-bind:key="bnch.id"
              v-bind:value="{id: bnch.id, text: bnch.hospital_branch_name}"
            >
              {{bnch.hospital_branch_name}}
            </option>
          </select>
        </div>
      </div>
      <!-- close-row -->

      <div class="row mb-4">
        <div class="col-md-9">
          <label for="" class="form-label">Team</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Team."
            v-model="team"
          />
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
      <div class="d-flex justify-content-center" >
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="Id">
        <i class="far fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!Id">
          <i class="far fa-plus"></i> Add Parameter
        </button>
      </div>
      <!-- close-row -->
    </form>
    <div class="table-title">
      <h3>List of Team</h3>
    </div>
    <table class="table table-striped data-table2 font-13" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Hospital Code</th>
          <th>Branch Name</th>
          <th>Team Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tem, index) in taemlist" :key="index">
          <td>{{index+1}}</td>
          <td>{{tem.hospital_code}}</td>
          <td>{{tem.hospital_branch_name}}</td>
          <td>{{tem.team_name}}</td>

           <td>
            <a class="edit" @click="editteam(tem)"
              ><i class="far fa-edit"></i
            ></a>
            <a @click="deleteteam(tem)" class="action-icon icon-danger"
              ><i class="far fa-trash-alt"></i
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
      hospitallist: [],
      branchlist: [],
      taemlist: [],
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
          "hospital/branch-team-list",
        { headers }
      )
      .then((resp) => {
        this.taemlist = resp.data.list;
        $(document).ready(function () {
          $(".data-table2").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            autoWidth: false,
            responsive: true,
            language: {
              paginate: {
                next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
              },
            },
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GethospitalList();
  },
  methods: {
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
          hospital_code:
            event.target.options[event.target.options.selectedIndex].text,
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
              "hospital/add-branch-team",
              {
                added_by: this.userdetails.user.id,
                hospital_id: this.hospital_code.id,
                hospital_code: this.hospital_code.text,
                hospital_branch_name: this.branceName.text,
                hospital_branch_id: this.branceName.id,
                team_name: this.team,
                status: 1,
              },
              { headers }
            );
            console.log("my response", response.data);
            if (response.data.code == 200 || response.data.code == "200") {
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.ResetModel();
              this.GetTeamList();
            } else {
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          } else {
            const response = await this.$axios.post(
              "hospital/updateHospitalBranchTeam",
              {
                id: this.Id,
                added_by: this.userdetails.user.id,
                hospital_id: this.hospital_code.id,
                hospital_code: this.hospital_code.text,
                hospital_branch_name: this.branceName.text,
                hospital_branch_id: this.branceName.id,
                team_name: this.team,
                status: 1,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$nextTick(() => {
                $("#updatepopup").modal("show");
              });
              this.ResetModel();
              this.GetTeamList();
            } else {
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          }
        }
      } catch (e) {
        console.log("my error", e);
        // this.$nextTick(() => {
        //   $("#errorpopup").modal("show");
        // });
      }
    },
    async ResetModel() {
      this.hospital_code = "";
      this.branceName = "";
      this.team = "";
      this.Id=0;
    },
    async GetTeamList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branch-team-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.taemlist = response.data.list;
      } else {
        this.taemlist = [];
      }
    },
    async editteam(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get(
        "hospital/get_team_by_id/" + data.id,
        {
          headers,
        }
      );
      if (response.data.code == 200) {
        this.hospital_code = {
          id: response.data.list.hospital_id,
          text: response.data.list.hospital_code,
        };

        this.branceName =  {
          id: response.data.list.hospital_branch_id,
          text: response.data.list.hospital_branch_name
        };
       
           
        this.team = response.data.list.team_name;
        this.Id = data.id;
        const response1 = await this.$axios.post(
          "hospital/get-branch-by-hospital-code",
          {
            hospital_code: response.data.list.hospital_id.toString(),
          },
          { headers }
        );
        console.log("my response", response1.data);
        if (response1.data.code == 200 || response1.data.code == "200") {
          this.branchlist = response1.data.branches;
        } else {
          this.branchlist = [];
        }
      } else {
        window.alert("Something went wrong");
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
          "hospital/removeBranchTeam",
          { added_by: this.userdetails.user.id, id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$nextTick(() => {
            $("#deletepopup").modal("show");
          });
          this.GetTeamList();
        } else {
          this.$nextTick(() => {
            $("#errorpopup").modal("show");
          });
        }
      } catch (e) {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
  },
};
</script>