<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Admin Users</h1>
           
          </div>

          <div class="card mb-4 reslt">
            <div class="card-body">
              <div class="search-table">
                <div class="row mb-3 mt-2">
                  <div class="col-sm-4">
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
              <table class="table table-striped data-table" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Role</th>
                    <th>Staff Name</th>
                    <th>Designation</th>
                    <th>Branch</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(staff,index) in list" :key="index">
                    <td>{{ index+1}}</td>
                    <td>{{ staff.role_name }}</td>
                    <td>{{ staff.name }}</td>
                    <td>{{ staff.designation_name }}</td>
                    <td>{{ staff.hospital_branch_name }}</td>
                    <td>
                      <a @click="view(staff)" class="view"
                        ><i class="fa fa-eye"></i
                      ></a>
                    </td>
                  </tr>
                </tbody>
              </table>
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
  name: "admin-management",
 
  data() {
    return {
      Id: 0,
      name: "",
      userdetails: null,
      list: [],
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
          "staff-management/getStaffAdmin",
        { branch_id: this.Id, name: this.name },
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            autoWidth: false,
            responsive: true,
            language: {
              paginate: {
                next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
                previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
              },
            },
          });
        });
      })
      .catch((err) => {
        console.error(err);
      });
      
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));

    this.GetBranchList();
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/getStaffManagementListOrById",
        { name: this.name },
        {
          headers,
        }
      );
      console.log("my body", this.name, this.Id);
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
      this.Id = event.target.value;
      this.GetList();
    },
    async onnamechange(event) {
      this.name = event.target.value;
      this.GetList();
    },
    async GetBranchList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.get("hospital/branch-list", {
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
      // Reload the page to refresh the data
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
