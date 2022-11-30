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
                        placeholder="Search Staff Name or Role"
                        v-model="search" @keyup="OnSearch"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <table class="table table-striped data-table" style="width: 100%">
                <thead>
                  <tr>
                    <th></th>
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
                    <td>
                      <input
                        type="checkbox"
                        name=""
                        v-on:click="Checkcompany(list.id, $event)"
                      />
                    </td>
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
              <br>
              <br>
              <div class="d-flex">
                <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <i class="fa fa-step-backward"/> &nbsp; Back
                </button>
                <div class="ml-auto">
                  <a
                    style="cursor: pointer"
                    v-on:click="setSystemAdmin(0)"
                    class="btn btn-danger btn-fill btn-md"
                    ><i class="fad fa-vote-nay"></i>Remove Access</a
                  >
                  <a
                    style="cursor: pointer"
                    v-on:click="setSystemAdmin(2)"
                    class="btn btn-warning btn-green btn-fill btn-md"
                    ><i class="fad fa-check"></i> Assign as System Admin</a
                  >
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
  components: { CommonSidebar, CommonHeader },
  name: "admin-management",
 
  data() {
    return {
      Id: 0,
      name: "",
      userdetails: null,
      list: [],
      selected: [],
      search:"",
    };
  },
  mounted() {
  this.GetList();
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));

  },
  methods: {
    back() {
      this.$router.go(-1);
    },

    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await this.$axios.post(
        "staff-management/getAdminList",
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
  
    OnSearch() {
      if (this.search) {
        this.list = this.list.filter((notChunk) => {
          return (
            notChunk.name
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 ||
            notChunk.role_name
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else {
        this.GetList();
      }
    },
    
    Checkcompany(value, event) {
      if (event.target.checked) {
        this.selected.push(value);
      } else {
        if (this.selected.indexOf(value) != -1)
          this.selected.splice(this.selected.indexOf(value), 1);
      }
      console.log('my id',value);
    },

    async setSystemAdmin(status) {
    
    if (confirm("Are you sure you want to set this user as System Admin")) {
    
    try {
      this.loader = true;
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      this.selected.forEach((value, index) => {
        const axios = require("axios").default;
        axios
          .post(
            `${this.$axios.defaults.baseURL}` +
              "staff-management/setSystemAdmin",
            { added_by: this.userdetails.user.id, id: value, status: status.toString() },
            { headers }
          )
          
          .then((resp) => {
            console.log("reuslt", resp);
          });
         
          this.getList();
         
      });
      
      this.loader = false;
      this.$nextTick(() => {
        $("#updatepopup").modal("show");
      });
    } catch (e) {
      this.loader = false;
      this.$nextTick(() => {
        $("#errorpopup").modal("show");
      });
    }
  }
  
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
