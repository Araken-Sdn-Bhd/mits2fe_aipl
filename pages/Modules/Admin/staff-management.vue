<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Mentari Staff</h1>
            <div class="btn-group-a">
              <a href="/app/modules/Admin/new-staff" class="add-btn"><em class="fa fa-plus"></em></a>
            </div>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table">
                <div class="row mt-2">
                  <div class="col-lg-4 col-sm-6 mb-3">
                    <select
                      v-if="dataReady"
                      disabled
                      v-model="branchId"
                      class="form-select"
                      aria-label="Default select example"
                      @change="onbranchchange($event)"
                    >
                      <option value="0">Select Branch</option>
                      <option
                        v-for="brnch in branchlist"
                        v-bind:key="brnch.id"
                        v-bind:value="brnch.id"
                      >
                        {{ brnch.hospital_branch_name }}
                      </option>
                    </select>
                    <select
                      v-if="dataReady2"
                      v-model="branchId"
                      class="form-select"
                      aria-label="Default select example"
                      @change="onbranchchange($event)"
                    >
                      <option value="0">All Branch</option>
                      <option
                        v-for="brnch in branchlist"
                        v-bind:key="brnch.id"
                        v-bind:value="brnch.id"
                      >
                        {{ brnch.hospital_branch_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-lg-4 col-sm-6 mb-3">
                    <div class="input-group">
                      <span class="input-group-text bg-transparent br-0"
                        ><i class="fa fa-search"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Staff Name"
                        @keyup="onnamechange"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <div style="overflow-x:auto;">
                <table class="table table-striped data-table display nowrap" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Staff Name</th>
                    <th>Role</th>
                    <th>Designation</th>
                    <th>Branch</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th style="width:8%">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(staff,index) in list" :key="index">
                    <td>{{ index+1}}</td>
                    <td>{{ staff.name }}</td>
                    <td>{{staff.role_name}}</td>
                    <td>{{ staff.designation_name }}</td>
                    <td>{{ staff.hospital_branch_name }}</td>
                    <td>{{staff.service_name}}</td>
                    <td><a v-if="staff.status == '1'">Active</a><a v-else-if="staff.status == '0'">Inactive</a></td>
                    <td>
                      <a @click="view(staff)" class="view" title="view staff profile"><em class="fa fa-eye"></em></a>
                      <a class="view" @click="Onview(staff)" title="view user matrix"><em class="fa fa-bars"></em></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>

              <div class="card mb-4 reslt" style="display: none">
            <div class="card-body">
              <div class="search-table">
                <div class="row mt-2">
                  <div class="col-lg-4 col-sm-6 mb-3">
                    <select
                      v-if="dataReady"
                      disabled
                      v-model="branchId"
                      class="form-select"
                      aria-label="Default select example"
                      @change="onbranchchange($event)"
                    >
                      <option value="0">Select Branch</option>
                      <option
                        v-for="brnch in branchlist"
                        v-bind:key="brnch.id"
                        v-bind:value="brnch.id"
                      >
                        {{ brnch.hospital_branch_name }}
                      </option>
                    </select>
                    <select
                      v-if="dataReady2"
                      v-model="branchId"
                      class="form-select"
                      aria-label="Default select example"
                      @change="onbranchchange($event)"
                    >
                      <option value="0">All Branch</option>
                      <option
                        v-for="brnch in branchlist"
                        v-bind:key="brnch.id"
                        v-bind:value="brnch.id"
                      >
                        {{ brnch.hospital_branch_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-lg-4 col-sm-6 mb-3">
                    <div class="input-group">
                      <span class="input-group-text bg-transparent br-0"
                        ><i class="fa fa-search"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Staff Name"
                        @keyup="onnamechange"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <div style="overflow-x:auto;">
                <table class="table table-striped data-table display nowrap" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Staff Name</th>
                    <th>Role</th>
                    <th>Designation</th>
                    <th>Branch</th>
                    <th>Team</th>
                    <th>Status</th>
                    <th style="width:8%">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(staff,index) in list" :key="index">
                    <td>{{ index+1}}</td>
                    <td>{{ staff.name }}</td>
                    <td>{{staff.role_name}}</td>
                    <td>{{ staff.designation_name }}</td>
                    <td>{{ staff.hospital_branch_name }}</td>
                    <td>{{staff.service_name}}</td>
                    <td><a v-if="staff.status == '1'">Active</a><a v-else-if="staff.status == '0'">Inactive</a></td>
                    <td>
                      <a @click="view(staff)" class="view" title="view staff profile"><em class="fa fa-eye"></em></a>
                      <a class="view" @click="Onview(staff)" title="view user matrix"><em class="fa fa-bars"></em></a>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div>

              <!-- <div class="d-flex mt-3 btn-width">
                <div class="ml-auto" id="hidebutton" ref="hidebutton">
                  <button
                    type="button"
                    class="btn btn-warning btn-text btn-green"
                    @click="downloadform">
                    <i class="fa fa-download"></i> User Id Request Form
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="OnPrint"
                  >
                    <i class="fa fa-print"></i> Print List
                  </button>
                </div>
              </div> -->
            </div>
          </div>

              <div class="d-flex mt-3 btn-width">
                <div class="ml-auto" id="hidebutton" ref="hidebutton">
                  <button
                    type="button"
                    class="btn btn-warning btn-text btn-green"
                    @click="downloadform">
                    <i class="fa fa-download"></i> User Id Request Form
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="OnPrint"
                  >
                    <i class="fa fa-print"></i> Print List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid px-4 results hide" ref="result" id="result">
          <div class="page-title">
            <h1>USER ID REQUEST FORM</h1>
          </div>
          <div class="card mb-4">
            <div class="card-body" style="padding: 25px">
              <div class="row align-items-center form-header-box">
                <div class="col-sm-2">
                  <img src="~/assets/images/1.png" />
                </div>
                <div class="col-sm-8">
                  <h1>MINISTRY OF HEALTH <br />MENTARI IT SYSTEM (MITS2)</h1>
                </div>
                <div class="col-sm-2">
                  <img src="~/assets/images/2.png" />
                </div>
              </div>

              <h5 class="h5-title">USER ID REQUEST FORM</h5>

              <form class="mt-3">
                <div class="form-group-box">
                  <h4 class="form-sub-title">A. USER INFORMATION</h4>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >NAME</label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >NRIC NO
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >DESIGNATION
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >CONTACT NO.
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >EMAIL ADDRESS
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >MENTARI LOCATION
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                </div>
                <div class="form-group-box">
                  <h4 class="form-sub-title">B. HEAD OF DEPARTMENT</h4>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >NAME</label
                    >
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >DESIGNATION/STAMP
                    </label>
                    <div class="col-sm-8">
                      <textarea class="form-control form-textarea"></textarea>
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >DATE
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                </div>
                <div class="form-group-box">
                  <h4 class="form-sub-title">C. USER ACKNOWLEDGEMENT</h4>
                  <p>
                    I HEREBY UNDERSTAND AND AGREE TO THE TERM SET FORTH IN
                    MENTARI IT SYSTEM (MITS2) GUIDELINE AND I SHALL NOT SHARE MY
                    USER ID. IF I WERE FOUND TO MISUSE THE USER ID, DISCIPLINARY
                    ACTION SHALL BE TAKEN ON ME.
                  </p>
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >NAME:
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >DESIGNATION/STAMP
                    </label>
                    <div class="col-sm-8">
                      <textarea class="form-control form-textarea"></textarea>
                    </div>
                  </div>
                  <!-- row -->
                  <div class="form-group row">
                    <label for="staticEmail" class="col-sm-4 col-form-label"
                      >DATE
                    </label>
                    <div class="col-sm-8">
                      <input type="text" class="form-control" />
                    </div>
                  </div>
                  <!-- row -->
                </div>
              </form>
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
  components: { CommonSidebar, CommonHeader },
  name: "staff-management",
  setup() {},
  head: {
    script: [

      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js",
        async: true,
        crossorigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      Id: 0,
      name: "",
      userdetails: null,
      list: [],
      branchlist: [],
      SidebarAccess:null,
      dataReady: false,
      dataReady2: false,
      branchId:0,
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
      .post(
        `${this.$axios.defaults.baseURL}` +
          "staff-management/getStaffManagementListOrById",
        { branch_id: this.userdetails.branch.branch_id, name: this.userdetails.branch.branch_name },
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        $(document).ready(function () {
          // $(".data-table").DataTable({
          //   searching: false,
          //   bLengthChange: false,
          //   bInfo: false,
          //   // autoWidth: false,
          //   // responsive: true,
          //   scrollX: true,
          //   language: {
          //     paginate: {
          //       next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
          //       previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
          //     },
          //   },
          // });
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
    }


  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));

    this.GetBranchList();
    this.getRole();
  },
  methods: {
    async getRole() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/getRoleCode",
        { email: this.userdetails.user.email },
        {
          headers,
        }
      );
      this.branchId=this.userdetails.branch.branch_id;
            if (response.data.list.code =="superadmin"){
              this.dataReady2= true;
              this.dataReady= false;
            }else{
              this.dataReady= true;
              this.dataReady2= false;
            }

    },
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/getStaffManagementListOrById",
        { branch_id: this.branchId, name: this.userdetails.branch.branch_name },
        {
          headers,
        }
      );
      console.log("my body", this.userdetails.branch.branch_name, this.userdetails.branch.branch_id);
      console.log("my resp", response.data);
      if (response.data.code == 200 || response.data.code == "200") {
        this.list = response.data.list;
      } else {
        this.list = [];
      }
    },
    async view(data) {
      this.$router.push({
        path: "/modules/Admin/staff-view",
        query: { id: data.id },
      });
    },
    async onbranchchange(event) {
      this.userdetails.branch.branch_id = event.target.value;
      this.GetList();
    },
    async onnamechange(event) {

      this.userdetails.branch.branch_name = event.target.value;
      this.GetList();
    },
    async GetBranchList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branch-list",
      {
        headers,
      });
      if (response.data.code == 200 || response.data.code == "200") {
        this.branchlist = response.data.list;
      } else {
        this.branchlist = [];
      }
    },
    OnPrint() {
      var newstr = document.getElementsByClassName("reslt")[0].innerHTML;
      document.body.innerHTML = newstr;
      window.print();
      window.location.reload();
    },
    downloadform() {
      setTimeout(() => {
        this.$refs.result.classList.remove("hide");
        var pdf = new jsPDF("p", "pt", "a4");
        pdf.addHTML($("#result")[0], function () {
          pdf.save("userid-request-form.pdf");
        });
      }, 100);
      setTimeout(() => {
        this.$refs.result.classList.add("hide");
      }, 100);
    },
    Onview(data) {

      this.$router.push({
        path: "/modules/Admin/list-of-user-matrix-view",
      query: {id: data.service_name, usersid:data.users_id },
      });
      },
    },
};
</script>
<style scoped>
h4.form-sub-title {
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 600;
  color: #000;
}

.form-group-box {
  margin-bottom: 40px;
}
.form-group-box .form-group {
  margin-bottom: 0px;
}
.form-group-box .form-control {
  border-radius: 0px;
  border-color: #000;
  margin-bottom: -1px;
}
.form-group-box .form-textarea {
  resize: none;
  min-height: 110px;
}

.form-group-box p {
  text-transform: none;
  font-size: 13px;
  font-weight: 500;
  margin: 20px 0;
}
.form-header-box {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}
.form-header-box h1 {
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.form-header-box img {
  width: 100%;
}
.h5-title {
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  margin: 20px 0 40px;
  letter-spacing: 1px;
}
.hide {
  display: none !important;
}
</style>
