<template>
    <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
          <div class="container-fluid px-4">
            <div class="page-title">
              <h1>SERVICES SETTING</h1>
            </div>
            <div class="card mb-4">
              <div class="card-body">
                <div class="row">
    <div class="card mb-4">
      <div class="card-body">
        <div class="content-subtab border-top-left">
          <form class="g-3 mt-3" method="post" @submit.prevent="onAddservicedivision">
                  <div class="row">
                    <div class="col-md-6 mb-4">
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
                    
                      <th>Service Name</th>
                      <th>Index</th>
                      <th >Status</th>
                      <th style="width:5%">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(srvcdvsv, index) in dlist" :key="index">
                      <td>{{index+1}}</td>
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
          <p
                v-show="!dlist.length" style=" padding: 0px;
                margin: 10px;
                color: red;
                display: flex;
                justify-content: center;">
                No Record Found
              </p>
              <br>
              <br>
              <div class="d-flex">
                <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <i class="fa fa-step-backward"/> &nbsp; Back
                </button>
                    
                </div>
        </div>
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
  import CommonHeader from '../../../components/CommonHeader.vue';
  import CommonSidebar from '../../../components/CommonSidebar.vue';
  
  export default {
    components: {
      CommonHeader,
      CommonSidebar,
    },
    name: "services-division-admin",
    setup() {},

    data() {
    return {
      dserviceName: "",
      dhospitalName: "",
      dbranceName: "",
      dservicedindex: 0,
      servicelist: [],
      hospitallist: [],
      branchlist: [],
      dlist: [],
      dId: 0,
      errors: [],
      dstatus: 1,
    };
  },
  mounted() {
    this.GetDivisionList();
  
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetActiveList();
    
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async GetDivisionList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post("service/division-list-branch",{branch_id: this.userdetails.branch.branch_id}, {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.dlist = response.data.list;
      } else {
        this.dlist = [];
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
        this.dservicedindex = response.data.list[0].division_order;
        this.dstatus = response.data.list[0].status;
        this.dId = data.id;
        console.log(response.data.list[0]);
      
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
      
        if (this.dservicedindex <= 0) {
          this.errors.push("Index is required.");
        }
        if (
          this.dserviceName &&
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
                  hospital_id: this.userdetails.branch.hospital_id,
                branch_id: this.userdetails.branch.branch_id,
                  division_order: this.dservicedindex,
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
                  hospital_id: this.userdetails.branch.hospital_id,
                branch_id: this.userdetails.branch.branch_id,
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
      this.dservicedindex = 0;
      this.errors = [];
      this.GetDivisionList();
      this.dId = 0;
    },
  },
  };
  </script>