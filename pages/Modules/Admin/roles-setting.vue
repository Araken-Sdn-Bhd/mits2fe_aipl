<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>ROLE SETTING</h1>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    User Roles
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Screen Access
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab">
                  <div class="content-subtab">
                  <form class="g-3 mt-3" method="post" @submit.prevent="onAddparameter()">
                    <div class="row">
                      <div class="col-sm-9 mb-4">
                        <label for="" class="form-label">Role Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Service Code"
                          v-model="rolename"/>
                      </div>

                      <div class="col-sm-3 mb-4">
                        <label for="" class="form-label">Status</label>
                        <select class="form-select" v-model="rolestatus">
                                <option value="0">Enable</option>
                                <option value="1">Disable</option>
                        </select>
                      </div>

                    </div>
                    <!-- close-row -->
                    <p v-if="errors.length">
                    <ul><li style="color:red"  v-for='err in errors' :key='err'>{{ err }}</li></ul>
                    </p>

                    <div class="d-flex justify-content-center" id="hidebutton1" ref="hidebutton1">
                      <button type="submit" class="btn btn-warning btn-text" v-if="Id"><i class="fa fa-save"></i>Save Parameter</button>
                      <button type="submit" class="btn btn-warning btn-text" v-if="!Id"><i class="fa fa-plus"></i> Add Parameter</button>
                    </div>
                  </form>
                  <div class="table-title">
                    <h3>List of Roles</h3>
                  </div>
                  <table class="table table-striped data-table1 display nowrap" style="width: 100%">
                    <thead>
                      <tr>
                        <th style="width:3%">No</th>
                        <th>Role Name</th>
                        <th>Status</th>
                        <th style="width:5%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(rg, index) in list" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{rg.role_name}}</td>
                        <td>
                          <p v-if="rg.status == 0">Enable</p>
                          <p v-if="rg.status == 1">Disable</p>
                        </td>
                        <td>
                          <a class="edit" @click="editreg(rg)"><i class="fa fa-edit"></i></a>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                <div class="content-subtab border-top-left">
                  <Rolesmatrix />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
import Rolesmatrix from "../../../components/Admin/rolesaccess.vue";

export default {
  components: {
    CommonSidebar,
    CommonHeader,
    Rolesmatrix,
  },
  name: "roles-setting",
  data() {
    return {
      rolename: "",
      rolestatus: 0,
      list: [],
      errors: [],
      userdetails: null,
      Id: 0,
    };
  },
  mounted() {
    this.GetList();
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));

  },
  methods: {
    async GetList() {
      const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios .get(`${this.$axios.defaults.baseURL}` + "roles/list", { headers })
      .then((resp) => {
        this.list = resp.data.list;
        $(document).ready(function () {
          $(".data-table1").DataTable({
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
           $('button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
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
    async onAddparameter() {
      if (confirm("Are you sure you want to save this entry")) {
      this.errors = [];
      try {
        if (!this.rolename) {
          this.errors.push("Role Name is required.");
        }
        if(this.rolename)
        {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "roles/add",
              {
                requested_by: this.userdetails.user.id,
                role_name: this.rolename,
                status: this.rolestatus,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire('Successfully Update', '', 'success');
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
              "roles/update",
              {
                requested_by: this.userdetails.user.id,
                role_id: this.Id,
                role_name: this.rolename,
                status: this.rolestatus,
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
    }
    },

    async editreg(data) {
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
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                });
      }
    },

    async resetmodel() {
      this.rolename = "";
      this.rolestatus = "";
      this.errors = [];
      this.GetList();
      this.Id = 0;
    },



  },
};
</script>
<style scoped>
.hide{
  display: none !important;
}
</style>
