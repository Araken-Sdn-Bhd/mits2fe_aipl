<template>
  <div class="content-subtab border-top-left">
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddsubModule">
      <div class="row mb-4 align-items-center">
        <div class="col-md-4">
          <label for="" class="form-label">Module</label>
          <select
            v-model="ModuleId"
            class="form-select"
            aria-label="Default select example"
          >
         <option value="0">Please Select</option>
            <option
              v-for="md in modulelist"
              v-bind:key="md.id"
              v-bind:value="md.id"
            >
              {{ md.module_name }}
            </option>
          </select>
        </div>

        <div class="col-md-3">
          <label for="" class="form-label">Sub Module Code</label>
          <input type="text" class="form-control" placeholder="Enter Code" v-model="subcode" />
        </div>

        <div class="col-md-4">
          <label for="" class="form-label">Sub Module Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Sub Module Name" v-model="subname"
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
    </form>

    

    <div class="table-title">
      <h3>List of Modules</h3>
    </div>
    <table class="table table-striped data-table font-13" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Module</th>
          <th>Sub Module Code</th>
          <th>Sub Module Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
           <tr v-for="(smod, index) in list" :key="index">
         <td>{{index+1}}</td>
          <td>{{smod.module_code}}</td>
         <td>{{smod.sub_module_code}}</td>
         <td>{{smod.sub_module_name}}</td>
          <td>
            <a class="edit" @click="editsubmodule(smod)"
              ><i class="far fa-edit"></i
            ></a>
            <a @click="deletesubmodule(smod)" class="action-icon icon-danger"
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
  name: "Module2",
  setup() {},
  data() {
    return {
      Id: 0,
      ModuleId: 0,
      subcode: "",
      subname: "",
      errors: [],
      userdetails: null,
      modulelist: [],
      list: [],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetModuleList();
    this.GetList();
  },
  methods: {
    async onAddsubModule() {
      this.errors = [];
      try {
        if (this.ModuleId <= 0) {
          this.errors.push("Module is required.");
        }
        if (!this.subcode) {
          this.errors.push("Sub Module Code is required.");
        }
        if (!this.subname) {
          this.errors.push("Sub Module Name is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "screen-module/add-sub-module",
              {
                module_id: this.ModuleId,
                added_by: this.userdetails.user.id,
                sub_module_name: this.subname,
                sub_module_code: this.subcode,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.resetmodel();
            } else {
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          } else {
            const response = await this.$axios.post(
              "screen-module/updateSubModule",
              {
                id :  this.Id,
                module_id: this.ModuleId,
                added_by: this.userdetails.user.id,
                sub_module_name: this.subname,
                sub_module_code: this.subcode,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$nextTick(() => {
                $("#updatepopup").modal("show");
              });
              this.resetmodel();
            } else {
              this.$nextTick(() => {
                $("#errorpopup").modal("show");
              });
            }
          }
        }
      } catch (e) {
        this.errors.push = e;
      }
    },
    async resetmodel() {
      this.subcode = "";
      this.subname = "";
      this.ModuleId = 0;
      this.Id = 0;
      this.errors = [];
      this.GetList();
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
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("screen-module/sub-module-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    async editsubmodule(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "screen-module/sub-module-list-by-sub-module-id",
        { sub_module_id: data.id },
        {
          headers,
        }
      );
      console.log('my response',response.data.list[0].sub_module_name);
      if (response.data.code == 200) {
        this.subname = response.data.list[0].sub_module_name;
        this.ModuleId = response.data.list[0].module_id;
        this.subcode = response.data.list[0].sub_module_code;
        this.Id = data.id;
      } else {
        window.alert("Something went wrong");
      }
    },
    async deletesubmodule(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "screen-module/removeSubModule",
          { added_by: this.userdetails.user.id, sub_module_id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$nextTick(() => {
            $("#deletepopup").modal("show");
          });
          this.GetList();
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