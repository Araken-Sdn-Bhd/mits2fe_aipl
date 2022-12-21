<template>
  <div class="row">
    <div class="card mb-4">
      <div class="card-body">
        <div class="content-subtab border-top-left">
          <form class="g-3 mt-3" method="post" @submit.prevent="onAddclubDivition">
            <div class="row">
              <div class="col-md-5 mb-4">
                <label for="" class="form-label">Club Name</label>
                 <select
            v-model="club_id"
            class="form-select"
            aria-label="Default select example"
          >
          <option value="0">Please Select</option>
            <option
              v-for="et in clublist"
              v-bind:key="et.id"
              v-bind:value="et.id"
            >
              {{ et.club_name }}
            </option>
          </select>
              </div>
              <div class="col-md-1 mb-4">
                <a  @click="reload"  class="edit btn-primary" title="reload"><i class="fa fa-exchange"></i></a>
              </div>

              <div class="col-lg-6 col-sm-3 mb-4">
                <label for="" class="form-label">Hospital</label>
                 <select
            v-model="hospital_id"
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

            </div>
            <div class="row">

              <div class="col-md-6 mb-4">
                <label for="" class="form-label">Branch</label>
                <select
            v-model="branch_id"
            class="form-select"
            aria-label="Default select example"
          >
           <option value="0">Please Select</option>
            <option
              v-for="bnch in branchlist"
              v-bind:key="bnch.id"
              v-bind:value="bnch.id"
            >
              {{ bnch.hospital_branch_name }}
            </option>
          </select>
              </div>

              <div class="col-lg-1 col-sm-2 mb-4">
                <label class="form-label">Index</label>
                <input type="text" class="form-control" placeholder="0" v-model="division_order" />
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
        <li style="color:red"  v-for='err in errors' :key='err' >{{ err }}</li>
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
          <table class="table table-striped data-table1 display nowrap" style="width: 100%">
            <thead>
              <tr>
                <th style="width:3%">No</th>
                <th>Hospital</th>
                <th>Branch</th>
                <th>Club Name</th>
                <th>Index</th>
                <th>Status</th>
                <th style="width:3%">Action</th>
              </tr>
            </thead>
            <tbody>
           <tr v-for="(etp, index) in list" :key="index">
              <td>{{index+1}}</td>
                <td>{{etp.hospitals.hospital_name}}</td>
                <td>{{etp.branchs.hospital_branch_name}}</td>
                <td>{{etp.club.club_name}}</td>
                <td>{{etp.division_order}}</td>
                <td>
                        <p v-if="etp.status == 0" style="color:red">Disabled</p>
                        <p v-if="etp.status == 1">Enabled</p>
                      </td>
                <td id="hidebutton" ref="hidebutton">
                  <a class="edit" @click="editdiv(etp)"
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
  name: "etpdivision",
  data() {
    return {
      Id: 0,
      club_id: 0,
      hospital_id: 0,
      branch_id: 0,
      division_order: 0,
      list: [],
      clublist: [],
      hospitallist: [],
      branchlist: [],
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
          "club/division-list",
        { headers }
      )
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
       if(this.SidebarAccess!=1){
         console.log('this.$refs.hidebutton',this.$refs.hidebutton);
          this.$refs.hidebutton.classList.add("hide");
    }
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetclubList();
    this.GethospitalList();
  },
  methods: {
    async GetclubList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("club/activelist", {
        headers,
      });
      console.log("ress", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.clublist = response.data.list;
      } else {
        this.clublist = [];
      }
    },
    async reload(){
      
      this.GetclubList();
    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("club/division-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
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
    async editdiv(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "club/get-division",
        { division_id: data.id },
        { headers }
      );
      if (response.data.code == 200) {
        this.club_id = response.data.list[0].club_id;
        this.hospital_id = response.data.list[0].hospital_id;
        this.branch_id = response.data.list[0].branch_id;
        this.division_order = response.data.list[0].division_order;
        this.status = response.data.list[0].status;
        this.Id = data.id;
        const response1 = await this.$axios.post(
          "hospital/get-branch-by-hospital-code",
          {
            hospital_code: response.data.list[0].hospital_id.toString(),
          },
          { headers }
        );
        console.log('my reseeee',response1.data);
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
                })
      }
    },

    async onAddclubDivition() {
      this.errors = [];
      try {
        if (this.club_id <= 0) {
          this.errors.push("Club Name is required.");
        }
        if (this.hospital_id <= 0) {
          this.errors.push("Hospital is required.");
        }
        if (this.branch_id <= 0) {
          this.errors.push("Branch is required.");
        }
        if (this.division_order <= 0) {
          this.errors.push("Index is required.");
        } else {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "club/insertOrupdate-division",
              {
                added_by: this.userdetails.user.id,
                club_id: this.club_id,
                hospital_id: this.hospital_id,
                branch_id: this.branch_id,
                division_order: this.division_order,
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
              "club/update-division",
              {
                added_by: this.userdetails.user.id,
                club_id: this.club_id,
                hospital_id: this.hospital_id,
                branch_id: this.branch_id,
                division_order: this.division_order,
                division_id: this.Id,
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
      this.Id = 0;
      this.club_id = 0;
      this.hospital_id = 0;
      this.branch_id = 0;
      this.division_order = 0;
      this.errors = [];
      this.GetList();
    },
  },
};
</script>
<style scoped>
.hide{
  display: none !important;
}
</style>
