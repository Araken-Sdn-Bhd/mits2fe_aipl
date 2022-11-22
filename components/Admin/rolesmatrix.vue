<template>
  <div class="card mb-4">
    <div class="card-header bg-transparent">
      <h4>Screen Access</h4>
    </div>
    <div class="card-body">
      <ul class="sub-tab">
        <li class="active">
          <a>Setting 1: Access Screen</a>
        </li>
      </ul>
      <form method="post" @submit.prevent="onAddroles">
        <div class="content-subtab">
          <div class="filter-form">
            <div class="row mt-3">
              <div class="col-sm-6 mb-3">
                <label class="form-label">Module Name</label>
                <select
                  v-model="ModuleId"
                  class="form-select"
                  aria-label="Default select example"
                  @change="onsubmodelbind($event)"
                >
                  <option value="0">Please Select</option>
                  <option
                    v-for="mod in modulelist"
                    v-bind:key="mod.id"
                    v-bind:value="mod.id"
                  >
                    {{ mod.module_name }}
                  </option>
                </select>
              </div>

              <div class="col-sm-6 mb-3" v-show="IsSubmodule">
                <label class="form-label">Sub Module Name</label>
                <select
                  v-model="SubmoduleId"
                  class="form-select"
                  aria-label="Default select example"
                  @change="onchangescreen($event)"
                >
                  <option value="0">Please Select</option>
                  <option
                    v-for="submod in submodulelist"
                    v-bind:key="submod.id"
                    v-bind:value="submod.id"
                  >
                    {{ submod.sub_module_name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <table
            v-if="screenlist.length > 0"
            class="table table-striped data-table font-13"
            style="width: 100%"
          >
            <thead>
              <tr>
                <th>No</th>
                <th>Module</th>
                <th>Sub Module</th>
                <th>Screen Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(scrn,index) in screenlist" :key="index">
                <td>{{ index+1 }}</td>
                <td>{{ scrn.module_name }}</td>
                <td>{{ scrn.sub_module_name }}</td>
                <td>{{ scrn.screen_name }}</td>
                <td>{{ scrn.screen_description }}</td>
                <td>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-on:click="checkscreen(scrn.screen_id, $event)"
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div class="form-bottom">
            <div class="row mt-4">
              <div class="col-sm-6 mb-3">
                <label class="form-label">Hospital Name</label>
                <select
                  v-model="HospitalId"
                  class="form-select"
                  aria-label="Default select example"
                  @change="onHospitalCodechange($event)"
                >
                  <option value="0">Please Select</option>
                  <option
                    v-for="hst in hospitallist"
                    v-bind:key="hst.id"
                    v-bind:value="hst.id"
                  >
                    {{ hst.hospital_name }}
                  </option>
                </select>
              </div>

              <div class="col-sm-6 mb-3">
                <label class="form-label">Branch Name</label>
                <select
                  v-model="BranchId"
                  class="form-select"
                  aria-label="Default select example"
                  @change="onchangebranch($event)"
                >
                  <option value="0">Please Select</option>
                  <option
                    v-for="brnch in branchlist"
                    v-bind:key="brnch.id"
                    v-bind:value="brnch.id"
                  >
                    {{ brnch.hospital_branch_name }}
                  </option>
                </select>
              </div>
            </div>
            <!-- close-row -->

            <div class="row">
              <div class="col-sm-6 mb-3">
                <label class="form-label">Team</label>
                <select
                  v-model="teamId"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="0">Please Select</option>
                  <option
                    v-for="team in teamlist"
                    v-bind:key="team.id"
                    v-bind:value="team.id"
                  >
                    {{ team.team_name }}
                  </option>
                </select>
              </div>

              <div class="col-sm-6 mb-3">
                <label class="form-label">Staff Name</label>
                <select
                  v-model="staffId"
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="0">Please Select</option>
                  <option
                    v-for="stf in stafflist"
                    v-bind:key="stf.users_id"
                    v-bind:value="{id:stf.users_id,txt:stf.role}"
                  >
                    {{ stf.name }}
                  </option>
                </select>
              </div>
            </div>
            <!-- close-row -->
<p v-if="errors.length">
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
        </p>
            <button class="btn btn-success" :class="SidebarAccess!=1?'hide':''">
              Submit <i class="fal fa-arrow-from-left"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
  data() {
    return {
      errors: [],
      ModuleId: 0,
      SubmoduleId: 0,
      HospitalId: 0,
      BranchId: 0,
      teamId: 0,
      staffId: 0,
      screenIds: "",
      screendetail: null,
      submodulelist: [],
      modulelist: [],
      branchlist: [],
      hospitallist: [],
      screenlist: [],
      stafflist: [],
      teamlist: [],
      selected: [],
      IsSubmodule: true,
      SidebarAccess:null,
    };
  },
  mounted(){

  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetModuleList();
    this.GethospitalList();
  },
  methods: {
    async checkscreen(value, event) {
      if (event.target.checked) {
        this.selected.push(value);
      } else {
        if (this.selected.indexOf(value) != -1)
          this.selected.splice(this.selected.indexOf(value), 1);
      }
    },
    async GetModuleList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("screen-module/list", { headers });
      if (response.data.code == 200 || response.data.code == "200") {
        this.modulelist = response.data.list;
      } else {
        this.modulelist = [];
      }
    },
    async onsubmodelbind(event) {
      this.IsSubmodule = true;
      this.selected = [];
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "screen-module/sub-module-list-by-module-id",
        { module_id: event.target.value },
        { headers }
      );
      console.log("my submod list", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.submodulelist = response.data.list;
      } else {
        this.IsSubmodule = false;
        this.submodulelist = [];
      }
    },
    async onchangescreen(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "screen-module/getScreenPageListByModuleIdAndSubModuleId",
        {
          module_id: this.ModuleId,
          sub_module_id: event.target.value,
        },
        { headers }
      );
      console.log("my screen list", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.screenlist = response.data.list;
      } else {
        this.screenlist = [];
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
       const response1 = await this.$axios.post(
        "staff-management/getUserlist", //getStaffManagementListOrById
        { branch_id: event.target.value, name: "" },
        {
          headers,
        }
      );
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.stafflist = response1.data.list;
      } else {
        this.stafflist = [];
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

    async onAddroles() {
      this.errors = [];
      try {
        if (this.ModuleId <= 0) {
          this.errors.push("Module Name  is required.");
        }
        // if (this.SubmoduleId <= 0) {
        //   this.errors.push("Sub Module Name  is required.");
        // }
        if (this.HospitalId <= 0) {
          this.errors.push("Hospital Name  is required.");
        }
        // if (this.BranchId <= 0) {
        //   this.errors.push("Branch Name  is required.");
        // }
        // if (this.teamId <= 0) {
        //   this.errors.push("Team  is required.");
        // }
        if (this.staffId <= 0) {
          this.errors.push("Staff Name  is required.");
        }
        // if (this.selected.length <= 0) {
        //   this.errors.push("Select atleast one screen.");
        // }
        if (
          this.ModuleId &&
          this.HospitalId &&
          // this.BranchId &&
          // this.teamId &&
          this.staffId
        ) {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.selected.length > 0) {
            this.selected.forEach((value, index) => {
              if (!this.screenIds) {
                this.screenIds = value;
              } else {
                this.screenIds = this.screenIds + "," + value;
              }
            });
          }
          const response = await this.$axios.post(
            "screen-module/assign-screen",
            {
              module_id: this.ModuleId,
              screen_ids: this.screenIds.toString(),
              sub_module_id: this.SubmoduleId,
              added_by: this.userdetails.user.id,
              hospital_id: this.HospitalId,
              branch_id: this.BranchId,
              team_id: this.teamId,
              staff_id: this.staffId.id,
              // type: this.staffId.txt,
            },
            { headers }
          );
          console.log("my response", response.data);
          if (response.data.code == 200 || response.data.code == "200") {
            this.$nextTick(() => {
              $("#insertpopup").modal("show");
            });
            this.ResetModel();
          } else {
            this.$nextTick(() => {
              $("#errorpopup").modal("show");
            });
          }
        }
      } catch (e) {
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    async ResetModel() {
      this.ModuleId = 0;
      this.SubmoduleId = 0;
      this.HospitalId = 0;
      this.BranchId = 0;
      this.teamId = 0;
      this.staffId = 0;
      this.selected = [];
      this.screenIds = "";
      this.screenlist = [];
    },
  },
};
</script>
