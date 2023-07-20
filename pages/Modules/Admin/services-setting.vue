<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>SERVICE SETTING</h1>
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <!-- tab -->
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
                    aria-selected="true">
                    Service Registration
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false" >
                    Service Division
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                 <!-- service registration -->
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab">
                  <div class="content-subtab">
                  <form class="g-3 mt-3" method="post" @submit.prevent="onAddserviceregistration">
                    <div class="row">
                      <div class="col-md-4 mb-4">
                        <label for="" class="form-label">Service Code</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Service Code"
                          v-model="servicecode"
                        />
                      </div>
                      <div class="col-md-7 mb-4">
                        <label for="" class="form-label">Service Name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Service Name"
                          v-model="servicename"
                        />
                      </div>

                    </div>
                    <div class="row">
                      <div class="col-lg-7 col-sm-4 mb-4">
                        <label for="" class="form-label">Service Description</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter Service Description"
                          v-model="servicedescription"/>
                      </div>
                      <div class="col-lg-1 col-sm-2 mb-4">
                        <label class="form-label">Index</label>
                        <input type="text" class="form-control" placeholder="0" v-model="serviceindex" />
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
                    <div class="d-flex justify-content-center" id="hidebutton1" ref="hidebutton1">
                      <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="Id">
                      <i class="fa fa-save"></i> Save
                      </button>
                      <button type="submit" class="btn btn-warning btn-text" v-if="!Id">
                        <i class="fa fa-plus"></i> Add Parameter
                      </button>
                    </div>
                  </form>
                  <div class="table-title"><h3>List of Service</h3></div>
                  <table class="table table-striped data-table1 display nowrap" style="width: 100%">
                    <thead>
                      <tr>
                        <th style="width:3%">No</th>
                        <th>Service Code</th>
                        <th>Service Name</th>
                        <th>Service Description</th>
                        <th>Index</th>
                        <th>Status</th>
                        <th style="width:3%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(rg, index) in list" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{rg.service_code}}</td>
                        <td>{{rg.service_name}}</td>
                        <td>{{rg.service_description}}</td>
                        <td>{{rg.service_order}}</td>
                        <td>
                        <p v-if="rg.status == 0" style="color:red">Disabled</p>
                        <p v-if="rg.status == 1">Enabled</p>
                      </td>
                        <td>
                          <a class="edit" @click="editreg(rg)"><i class="fa fa-edit" v-if="SidebarAccess==1"></i></a>
                       </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
                <!-- service division -->
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab">
                <div class="content-subtab border-top-left">
                <form class="g-3 mt-3" method="post" @submit.prevent="onAddservicedivision">
                  <div class="row">
                    <div class="col-md-5 mb-4">
                      <label for="" class="form-label">Service Name</label>
                      <select
                        v-model="dserviceName"
                        class="form-select"
                        aria-label="Default select example"
                      >
                      <option value="">Please Select</option>
                        <option
                          v-for="srvc in servicelist"
                          v-bind:key="srvc.id"
                          v-bind:value="srvc.id"
                        >
                          {{ srvc.service_name }}
                        </option>
                      </select>
                    </div>
                    <div class="col-md-1 mb-4">
                <a  @click="reload"  class="edit btn-primary" title="reload"><i class="fa fa-exchange"></i></a>
              </div>
                    <div class="col-lg-6 col-sm-3 mb-4">
                      <label for="" class="form-label">Hospital</label>
                      <select
                        v-model="dhospitalName"
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
                          {{ hst.hospital_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <label for="" class="form-label">Branch</label>
                      <select
                        v-model="dbranceName"
                        class="form-select"
                        aria-label="Default select example"
                      >
                      <option value="">Please Select</option>
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
                      <input
                        type="text"
                        class="form-control"
                        placeholder="0"
                        v-model="dservicedindex"
                      />
                    </div>
                    <div class="col-sm-3 mb-4">
                        <label for="" class="form-label">Status</label>
                        <select class="form-select" v-model="dstatus">
                          <option value="1">Enable</option>
                          <option value="0">Disable</option>
                        </select>
                      </div>
                  </div>
                  <!-- close-row -->
                    <p v-if="errors.length">
                    <ul><li style="color:red"  v-for='err in errors' :key='err'> {{ err }}</li></ul>
                    </p>
                  <div class="d-flex justify-content-center" id="hidebutton" ref="hidebutton">
                    <button type="submit" class="btn btn-warning btn-text ml-auto" v-if="dId">
                    <i class="fa fa-save"></i> Save
                    </button>
                    <button type="submit" class="btn btn-warning btn-text" v-if="!dId">
                      <i class="fa fa-plus"></i> Add Parameter
                    </button>
                  </div>
                </form>
                <div class="table-title"><h3>List of Service</h3></div>
                <table class="table table-striped data-table display nowrap" style="width: 100%">
                  <thead>
                    <tr>
                      <th style="width:3%">No</th>
                      <th>Hospital</th>
                      <th>Branch</th>
                      <th>Service Name</th>
                      <th>Index</th>
                      <th >Status</th>
                      <th style="width:5%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(srvcdvsv, index) in dlist" :key="index">
                      <td>{{index+1}}</td>
                      <td>{{ srvcdvsv.hospitals.hospital_name }}</td>
                      <td>{{ srvcdvsv.branchs.hospital_branch_name }}</td>
                      <td>{{ srvcdvsv.services.service_name }}</td>
                      <td>{{ srvcdvsv.division_order }}</td>
                      <td>
                        <p v-if="srvcdvsv.status == 0" style="color:red">Disabled</p>
                        <p v-if="srvcdvsv.status == 1">Enabled</p>
                      </td>
                      <td>
                        <a class="edit" @click="editdivison(srvcdvsv)" v-if="SidebarAccess==1"
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
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
import Servicedivision from "../../../components/Admin/servicedivision.vue";
import Serviceregistration from "../../../components/Admin/serviceregistration.vue";

export default {
  components: {
    CommonSidebar,
    CommonHeader,
    Servicedivision,
    Serviceregistration,
  },
  name: "services-setting",
  setup() {},
  data() {
    return {
      status: 1,
      dstatus: 1,
      servicecode: "",
      servicename: "",
      servicedescription: "",
      serviceindex: 0,
      list: [],
      errors: [],
      userdetails: null,
      Id: 0,

      dserviceName: "",
      dhospitalName: "",
      dbranceName: "",
      dservicedindex: 0,
      servicelist: [],
      hospitallist: [],
      branchlist: [],
      dlist: [],
      dId: 0,
      SidebarAccess:null,
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
      .get(`${this.$axios.defaults.baseURL}` + "service/list", { headers })
      .then((resp) => {
        this.list = resp.data.list;
        $(document).ready(function () {
          $(".data-table1").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
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

    const axios1 = require("axios").default;
    axios1
      .get(`${this.$axios.defaults.baseURL}` + "service/division-list", {
        headers,
      })
      .then((resp) => {
        this.dlist = resp.data.list;
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
         console.log('this.$refs.hidebutton1',this.$refs.hidebutton);
          this.$refs.hidebutton.classList.add("hide");
          this.$refs.hidebutton1.classList.add("hide");
    }
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetActiveList();
    this.GethospitalList();
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("service/list", { headers });
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    async reload(){

      this.GetActiveList();
    },
    async onAddserviceregistration() {
      this.errors = [];
      try {
        if (!this.servicecode) {
          this.errors.push("Service Code is required.");
        }
        if (!this.servicename) {
          this.errors.push("Service Name is required.");
        }
        if (!this.servicedescription) {
          this.errors.push("Service Description is required.");
        }
        if (this.serviceindex <= 0) {
          this.errors.push("Index is required.");
        } if(this.servicecode && this.servicename && this.servicedescription && this.serviceindex) {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          if (this.Id <= 0) {
            const response = await this.$axios.post(
              "service/register",
              {
                added_by: this.userdetails.user.id,
                service_code: this.servicecode,
                service_name: this.servicename,
                service_description: this.servicedescription,
                service_order: this.serviceindex,
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
          } else {
            const response = await this.$axios.post(
              "service/update",
              {
                added_by: this.userdetails.user.id,
                service_id: this.Id,
                service_code: this.servicecode,
                service_name: this.servicename,
                service_description: this.servicedescription,
                service_order: this.serviceindex,
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
    async editreg(data) {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "service/getServiceListById",
        {
          id: data.id,
        },
        { headers }
      );
      if (response.data.code == 200) {
        this.servicecode = response.data.list[0].service_code;
        this.servicename = response.data.list[0].service_name;
        this.servicedescription = response.data.list[0].service_description;
        this.serviceindex = response.data.list[0].service_order;
        this.Id = data.id;
        this.status = response.data.list[0].status;
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
      this.servicecode = "";
      this.servicename = "";
      this.servicedescription = "";
      this.serviceindex = 0;
      this.errors = [];
      this.GetList();
      this.Id = 0;
      this.status='';
    },

    async GetDivisionList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("service/division-list", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.dlist = response.data.list;
      } else {
        this.dlist = [];
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
    async GetActiveList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("service/activeList", {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.servicelist = response.data.list;
      } else {
        this.servicelist = [];
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
    async editdivison(data) {
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
        this.dserviceName = response.data.list[0].service_id;
        this.dhospitalName = response.data.list[0].hospital_id;
        this.dbranceName = response.data.list[0].branch_id;
        this.dservicedindex = response.data.list[0].division_order;
        this.dstatus = response.data.list[0].status;
        this.dId = data.id;
        console.log(response.data.list[0]);
        const response1 = await this.$axios.post(
          "hospital/get-branch-by-hospital-code",
          {
            hospital_code: response.data.list[0].hospital_id.toString(),
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

    async onAddservicedivision() {
      this.errors = [];
      try {
        if (!this.dserviceName) {
          this.errors.push("Service Name is required.");
        }
        if (!this.dhospitalName) {
          this.errors.push("Hospital Name is required.");
        }
        if (!this.dbranceName) {
          this.errors.push("Branch Description is required.");
        }
        if (this.dservicedindex <= 0) {
          this.errors.push("Index is required.");
        }
        if (
          this.dserviceName &&
          this.dhospitalName &&
          this.dbranceName &&
          this.dservicedindex
        ) {
            const headers = {
              Authorization: "Bearer " + this.userdetails.access_token,
              Accept: "application/json",
              "Content-Type": "application/json",
            };
            if (this.dId <= 0) {
              const response = await this.$axios.post(
                "service/insertOrupdate-division",
                {
                  added_by: this.userdetails.user.id,
                  service_id: this.dserviceName,
                  hospital_id: this.dhospitalName,
                  branch_id: this.dbranceName,
                  division_order: this.dservicedindex,
                  status: this.status
                },
                { headers }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                this.$swal.fire(
                  'Successfully Insert',
                )
                this.resetdividionmodel();
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
                "service/update-division",
                {
                  added_by: this.userdetails.user.id,
                  division_id: this.dId,
                  service_id: this.dserviceName,
                  hospital_id: this.dhospitalName,
                  branch_id: this.dbranceName,
                  division_order: this.dservicedindex,
                  status:this.dstatus
                },
                { headers }
              );
              if (response.data.code == 200 || response.data.code == "200") {
                this.$swal.fire(
                  'Successfully Update',
                )
                this.resetdividionmodel();
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
    async resetdividionmodel() {
      this.dserviceName = "";
      this.dhospitalName = "";
      this.dbranceName = "";
      this.dservicedindex = 0;
      this.errors = [];
      this.GetDivisionList();
      this.dId = 0;
    },
  },
};
</script>
<style scoped>
.hide{
  display: none !important;
}
</style>
