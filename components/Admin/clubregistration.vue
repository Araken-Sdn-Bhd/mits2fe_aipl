<template>
  <div class="row">
    <div class="card mb-4">
      <div class="card-body">
        <div class="content-subtab">
          <form class="g-3 mt-3" method="post" @submit.prevent="onAddclubRegistration">
            <div class="row">
              <div class="col-md-6 mb-4">
                <label for="" class="form-label">Club Code</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Club Code"
                  v-model="club_code"
                />
              </div>

              <div class="col-md-6 mb-4">
                <label for="" class="form-label">Club Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Club Name"
                  v-model="club_name"
                />
              </div>

            </div>
            <div class="row">

              <div class="col-lg-6 col-sm-4 mb-4">
                <label for="" class="form-label">Club Description</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Club Description"
                  v-model="club_description"
                />
              </div>
              <div class="col-lg-1 col-sm-2 mb-4">
                <label class="form-label">Index</label>
                <input type="text" class="form-control" placeholder="0" v-model="club_order"/>
              </div>
              <div class="col-sm-3 mb-4">
                        <label for="" class="form-label">Status</label>
                        <select class="form-select" v-model="status">
                          <option value="1">Enable</option>
                          <option value="0">Disable</option>
                        </select>
                      </div>

            </div>
            <!-- close-row -->
        <p v-if="errors.length">
        <ul><li style="color:red"  v-for='err in errors' :key='err'>{{ err }}</li></ul>
        </p>
      <div class="d-flex justify-content-center" id="hidebutton" ref="hidebutton">
        <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="Id">
        <i class="fa fa-save"></i> Save
        </button>
         <button type="submit" class="btn btn-warning btn-text" v-if="!Id">
          <i class="fa fa-plus"></i> Add Parameter
        </button>
      </div>
          </form>
          <div class="table-title">
            <h3>List of Club</h3>
          </div>
          <table class="table table-striped data-table display nowrap" style="width: 100%">
            <thead>
              <tr>
                <th style="width:3%">No</th>
                <th>Club Code</th>
                <th>Club Name</th>
                <th>Club Description</th>
                <th>Index</th>
                <th>Status</th>
                <th style="width:3%">Action</th>
              </tr>
            </thead>
            <tbody>
            <tr v-for="(etp, index) in list" :key="index">
                <td>{{index+1}}</td>
                <td>{{ etp.club_code }}</td>
                <td>{{ etp.club_name }}</td>
                <td>{{ etp.club_description }}</td>
                <td>{{ etp.club_order }}</td>
                <td>
                        <p v-if="etp.status == 0" style="color:red">Disabled</p>
                        <p v-if="etp.status == 1">Enabled</p>
                      </td>
                <td>
                  <a  v-if="SidebarAccess==1" class="edit" @click="editreg(etp)"
                    ><i class="fa fa-edit"></i
                  ></a>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "clubregistration",
  data() {
    return {
      Id: 0,
      club_code: "",
      club_name: "",
      club_description: "",
      club_order: 0,
      list: [],
      errors: [],
      userdetails: null,
      SidebarAccess:null,
      status: 1,
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
          "club/list",
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        $(document).ready(function () {
          $(".data-table").DataTable({
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
      if(this.SidebarAccess!=1){
         console.log('this.$refs.hidebutton',this.$refs.hidebutton1);
          this.$refs.hidebutton.classList.add("hide");

    }
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("club/list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    async editreg(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "club/" + data.id + "/getClubListByID",
        { id: data.id },
        { headers }
      );
      if (response.data.code == 200) {
        this.club_code = response.data.list[0].club_code;
        this.club_name = response.data.list[0].club_name;
        this.club_description = response.data.list[0].club_description;
        this.club_order = response.data.list[0].club_order;
        this.Id = data.id;
        this.status = response.data.list[0].status;
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
      }
    },

    async onAddclubRegistration() {
      this.errors = [];
      try {
        if (!this.club_code) {
          this.errors.push("Club Code is required.");
        }
        if (!this.club_name) {
          this.errors.push("Club Name is required.");
        }
        if (!this.club_description) {
          this.errors.push("Club Description is required.");
        }
        if (this.club_order <= 0) {
          this.errors.push("Index is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "club/register",
              {
                added_by: this.userdetails.user.id,
                club_code: this.club_code,
                club_name: this.club_name,
                club_description: this.club_description,
                club_order: this.club_order,

              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire(
                  'Successfully Insert',
                )
              this.resetmodel();
            } else {
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })

            }
          } else {
            const response = await this.$axios.post(
              "club/update",
              {
                added_by: this.userdetails.user.id,
                club_id:this.Id,
                club_code: this.club_code,
                club_name: this.club_name,
                club_description: this.club_description,
                club_order:this.club_order,
                status: this.status,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire(
                  'Successfully Update',
                )
              this.resetmodel();
            } else {
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
            }

          }
        }
      } catch (e) {
        this.errors.push = e;
      }
    },
    async resetmodel() {
      this.club_code = "";
      this.club_name = "";
      this.club_description = "";
      this.club_order = 0;
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
