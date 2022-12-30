<template>
  <div class="row">
    <div class="card mb-4">
      <div class="card-body">
        <div class="content-subtab">
          <form
            class="g-3 mt-3"
            method="post"
            @submit.prevent="onAddetpregistration"
          >
            <div class="row">
              <div class="col-md-6 mb-4">
                <label for="" class="form-label">ETP Code</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter ETP Code"
                  v-model="etpcode"
                />
              </div>

              <div class="col-md-6 mb-4">
                <label for="" class="form-label">ETP Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter ETP Name"
                  v-model="etpname"
                />
              </div>

            </div>
            <div class="row">
              <div class="col-lg-6 col-sm-4 mb-4">
                <label for="" class="form-label">ETP Description</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter ETP Description"
                  v-model="etpdescription"
                />
              </div>
              <div class="col-lg-1 col-sm-2 mb-4">
                <label class="form-label">Index</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="0"
                  v-model="index"
                />
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
<ul>
        <li style="color:red"  v-for='err in errors'
    :key='err' >
          {{ err }}
        </li>
      </ul>
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
            <h3>List of ETP</h3>
          </div>
          <table class="table table-striped data-table display nowrap" style="width: 100%">
            <thead>
              <tr>
                <th style="width:3%">No</th>
                <th>ETP Code</th>
                <th>ETP Name</th>
                <th>ETP Description</th>
                <th>Index</th>
                <th>Status</th>
                <th style="width:3%">Action</th>
              </tr>
            </thead>
            <tbody>
               <tr v-for="(etp, index) in list" :key="index">
             <td>{{index+1}}</td>
                <td>{{ etp.etp_code }}</td>
                <td>{{ etp.etp_name }}</td>
                <td>{{ etp.etp_description }}</td>
                <td>{{ etp.etp_order }}</td>
                <td>
                        <p v-if="etp.status == 0" style="color:red">Disabled</p>
                        <p v-if="etp.status == 1">Enabled</p>
                      </td>
                <td>
                  <a class="edit" @click="editreg(etp)" v-if="SidebarAccess==1"
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
  name: "etpregistration",
  data() {
    return {
      Id: 0,
      etpcode: "",
      etpname: "",
      etpdescription: "",
      index: 0,
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
          "etp/list",
        { headers }
      )

      .then((resp) => {
        this.list = resp.data.list;
        //$(document).ready(function () {
        //  $(".data-table").DataTable({
        //    searching: false,
        //    bLengthChange: false,
        //    bInfo: false,
        //    // autoWidth: false,
        //    // responsive: true,
        //    scrollX: true,
        //    language: {
        //      paginate: {
        //        next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
        //        previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
        //      },
        //    },
        //  });
        //   $('button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
        //    $($.fn.dataTable.tables(true))
        //      .DataTable()
        //      .columns.adjust()
        //      .responsive.recalc();
        //  });
        //});
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
         console.log('this.$refs.hidebutton1',this.$refs.hidebutton);
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
      const response = await this.$axios.get("etp/list", {
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
        "etp/" + data.id + "/editEtpType",
        { headers }
      );
      if (response.data.code == 200) {
        this.etpcode = response.data.list[0].etp_code;
        this.etpname = response.data.list[0].etp_name;
        this.etpdescription = response.data.list[0].etp_description;
        this.index = response.data.list[0].etp_order;
        this.status = response.data.list[0].status;
        this.Id = data.id;
      } else {
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                });
      }
    },

    async onAddetpregistration() {
      this.errors = [];
      try {
        if (!this.etpcode) {
          this.errors.push("ETP Code is required.");
        }
        if (!this.etpname) {
          this.errors.push("ETP Name is required.");
        }
        if (!this.etpdescription) {
          this.errors.push("ETP Description is required.");
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
              "etp/register",
              {
                added_by: this.userdetails.user.id,
                etp_code: this.etpcode,
                etp_name: this.etpname,
                etp_description: this.etpdescription,
                etp_order: this.index,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire(
                  'Successfully Insert',
                )
              this.resetmodel();
              this.$router.push("/Modules/Admin/etp-setting");
            } else {
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                })
            }
          } else {
            const response = await this.$axios.post(
              "etp/update",
              {
                added_by: this.userdetails.user.id,
                etp_id: this.Id,
                etp_code: this.etpcode,
                etp_name: this.etpname,
                etp_description: this.etpdescription,
                etp_order: this.index,
                status: this.status,
              },
              { headers }
            );
            if (response.data.code == 200 || response.data.code == "200") {
              this.$swal.fire(
                  'Successfully Update',
                )
              this.resetmodel();
              this.$router.push("/Modules/Admin/etp-setting");
            } else {
              this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + JSON.stringify(response.data.message),
                  footer: ''
                })
            }
          }
        }
      } catch (e) {
        this.resetmodel();
        this.$swal.fire({
            icon: 'error',
            title: 'Oops... Something Went Wrong!',
            text: 'the error is: ' + e,
        })
      }
    },
    async resetmodel() {
      this.etpcode = "";
      this.etpname = "";
      this.etpdescription = "";
      this.index = 0;
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
