<template>
  <div class="content-subtab">
    <form class="g-3 mt-3" method="post" @submit.prevent="onAddModule1">
      <div class="row mb-4 align-items-center">
        <div class="col-md-2">
          <label for="" class="form-label">Code</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Code"
            v-model="code"
          />
        </div>

        <div class="col-md-4">
          <label for="" class="form-label">Module Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Module Name"
            v-model="name"
          />
        </div>

        <div class="col-md-4">
          <label for="" class="form-label">Module Short Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Module Short Name"
            v-model="shortname"
          />
        </div>

        <div class="col-md-2">
          <label for="" class="form-label">Index</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Index"
            v-model="index"
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
      <div class="d-flex justify-content-center" :class="SidebarAccess!=1?'hide':''">
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="Id">
        <i class="fa fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!Id">
          <i class="fa fa-plus"></i> Add Parameter
        </button>
      </div>
    </form>



    <div class="table-title">
      <h3>List of Modules</h3>
    </div>
    <table class="table table-striped data-table4 font-13 display nowrap" style="width: 100%">
      <thead>
        <tr>
          <th>No</th>
          <th>Code</th>
          <th>Module Name</th>
          <th>Short Name</th>
          <th>Index</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
     <tr v-for="(mod,index) in modulelist" :key="index">
          <td>{{index+1}}</td>
           <td>{{mod.module_code}}</td>
           <td>{{mod.module_name}}</td>
          <td>{{mod.module_short_name}}</td>
         <td>{{mod.module_order}}</td>
            <td class="td"  :class="SidebarAccess!=1?'hide':''">
            <a class="edit" @click="editmodule(mod)"
              ><i class="fa fa-edit"></i
            ></a>
            <a @click="deletemodule(mod)" class="action-icon icon-danger"
              ><i class="fa fa-trash-alt"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Module1",
  setup() {},
  data() {
    return {
      Id: 0,
      code: "",
      name: "",
      shortname: "",
      index: 0,
      errors: [],
      userdetails: null,
      modulelist: [],
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
          "screen-module/list",
        { headers }
      )
      .then((resp) => {
        this.modulelist = resp.data.list;
        $(document).ready(function () {
          $(".data-table4").DataTable({
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
  },
  methods: {
    async onAddModule1() {
      this.errors = [];
      try {
        if (!this.code) {
          this.errors.push("Code is required.");
        }
        if (!this.name) {
          this.errors.push("Module Name is required.");
        }
        if (!this.shortname) {
          this.errors.push("Module Short Name is required.");
        }
        if (this.index <= 0) {
          this.errors.push("Index is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "screen-module/add",
              {
                added_by: this.userdetails.user.id,
                module_name: this.name,
                module_code: this.code,
                module_short_name: this.shortname,
                module_order: this.index,
                module_status: 1,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$nextTick(() => {
                $("#insertpopup").modal("show");
              });
              this.resetmodel();
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
              "screen-module/updateModule",
              {
                module_id: this.Id,
                added_by: this.userdetails.user.id,
                module_name: this.name,
                module_code: this.code,
                module_short_name: this.shortname,
                module_order: this.index,
                module_status: 1,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
this.$swal.fire(
                  'Successfully Update',
                );
              this.resetmodel();
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
        this.errors.push = e;
      }
    },
    async resetmodel() {
      this.code = "";
      this.name = "";
      this.shortname = "";
      this.index = 0;
      this.Id = 0;
      this.errors = [];
      this.GetModuleList();
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
    async editmodule(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "screen-module/module-list-by-module-id",
        { module_id: data.id },
        {
          headers,
        }
      );
      if (response.data.code == 200) {
        this.name = response.data.list[0].module_name;
        this.code = response.data.list[0].module_code;
        this.shortname = response.data.list[0].module_short_name;
        this.index = response.data.list[0].module_order;
        this.Id = data.id;
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },
    async deletemodule(data) {
      try {
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "screen-module/removeModule",
          { added_by: this.userdetails.user.id, module_id: data.id },
          { headers }
        );
        if (response.data.code == 200) {
          this.$nextTick(() => {
            $("#deletepopup").modal("show");
          });
          this.GetModuleList();
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
