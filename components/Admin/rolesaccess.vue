<template>
  <div class="card mb-4">
    <div class="card-body">
      <form method="post" @submit.prevent="onAddroles">
          <div class="filter-form">
            <div class="row mt-4">
              <div class="col-sm-6 mb-3">
                <label class="form-label">Roles</label>
                <select
                  v-model="roleId"
                  class="form-select"
                  aria-label="Default select example"
                  @change="onchangeRole($event)">
                  <option value="0">Please Select</option>
                  <option
                    v-for="hst in roleList"
                    v-bind:key="hst.id"
                    v-bind:value="hst.id"
                  >
                    {{ hst.role_name }}
                  </option>
                </select>
              </div>

            </div>
            <div class="row mt-3">
              <div class="col-sm-6 mb-3">
                <label class="form-label">Module Name</label>
                <select
                  v-model="ModuleId"
                  class="form-select"
                  aria-label="Default select example"
                  @change="onchangescreen($event)"
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

            </div>
            
          </div>

          <table v-if="screenlist.length > 0" class="table table-striped data-table font-13" style="width: 100%">
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
        
          <p v-if="errors.length">
                <ul><li style="color:red"  v-for='err in errors' :key='err' >{{ err }}</li></ul>
            </p>
          <br>
        <br>
            <div class="d-flex">
             <button class="next-1 btn btn-primary btn-text ml-auto"><i class="fa fa-save"></i>Save</button>
            </div>
      </form>
    </div>
    <div class="card-body">
      <div class="table-title">
         <h3>List of Access Page</h3>
         <div class="input-group">
        <span class="input-group-text"><i class="fa fa-search"></i></span>
        <input type="text" class="form-control" placeholder="Search" v-model="search" @keyup="OnSearch" />
      </div>
      </div>
                  <table class="table table-striped data-table1" style="width: 100%">
                        <thead>
                          <tr>
                            <th style="width:5%">No</th>
                            <th>Module</th>
                            <th>Screen Name</th>
                            <th>Screen Route</th>
                            <th>Description</th>
                            <th style="width:5%">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(s,index) in roleListbyId" :key="index">
                            <td>{{ index+1 }}</td>
                            <td>{{ s.module_name }}</td>
                            <td>{{ s.screen_name }}</td>
                            <td>{{ s.screen_route }}</td>
                            <td>{{ s.screen_description }}</td>
                        <td>
                          <a class="action-icon icon-danger" @click="delRecord(s)"><i class="fa fa-trash-alt"></i></a>
                        </td>
                      </tr>
                    </tbody>
                  </table>

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
      submoduleId: '',
      roleId:0,
      screenIds: "",
      screendetail: null,
      modulelist: [],
      roleList: [],
      roleListbyId: [],
      screenlist: [],
      selected: [],
      SidebarAccess:null,
      search: "",
      alllist:[],
    };
  },
  mounted(){

  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetModuleList();
    this.GetRoleList();
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
    async onchangescreen(event) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "screen-module/getScreenByModuleId",
        {
          module_id: this.ModuleId,
        },
        { headers }
      );
      console.log("my screen list", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        //alert(JSON.stringify(response.data.list));
        this.screenlist = response.data.list;
      } else {
        this.screenlist = [];
      }
    },
    async onchangeRole(event) {
      
      const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const response = await this.$axios.post(
        "default-role-access/listbyId",
        {
          role_id: this.roleId,
        },
        { headers }
    ); 
    console.log("my screen list", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
      
        this.roleListbyId = response.data.list;
        this.alllist = response.data.list;
      } else {
        this.roleListbyId = [];
        this.alllist=[];
      }

    },
    async GetRoleList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("roles/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.roleList = response.data.list;
      } else {
        this.roleList = [];
      }
    },
    async onAddroles() {
      if (confirm("Are you sure you want to save this selection ? ")) {
      this.errors = [];
      try {
        if (this.ModuleId <= 0) {
          this.errors.push("Module is required.");
        }
        
        if (
          this.ModuleId 
        ) {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.selected.length > 0) {
            this.selected.forEach((value,index) => {
              if (!this.screenIds) {
                this.screenIds = value;
              } else {
                this.screenIds = this.screenIds + "," + value;
              }
            });
          }
          const response = await this.$axios.post(
            "default-role-access/add",
            {
              module_id: this.ModuleId,
              screen_ids: this.screenIds.toString(),
              roles_id: this.roleId,
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
    }
    },
    async ResetModel() {
      this.ModuleId = 0;
      this.selected = [];
      this.screenIds = "";
      this.screenlist = [];
    },
    async delRecord(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "roles/role-byId",
        {
          id: data.id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.rolename = response.data.list[0].role_name;
        this.rolestatus = response.data.list[0].status;
        this.Id = data.id;
      } else {
        window.alert("Something went wrong");
      }
    },
    OnSearch() {
      if (this.search) {
        this.roleListbyId = this.alllist.filter((notChunk) => {
          return (
            notChunk.module_name
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.screen_name
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else {
        this.roleListbyId  = this.alllist;
      }
    },
  },
};
</script>
