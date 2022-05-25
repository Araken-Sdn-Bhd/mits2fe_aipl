<template>
  <div id="layoutSidenav">
    <Adminsidebar />
    <div id="layoutSidenav_content">
      <AdminHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Mentari Staff</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table">
                <div class="row mt-2 mb-3">
                  <div class="col-sm-3">
                    <select
                      v-model="Id"
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
                  </div>

                  <div class="col-sm-4">
                    <div class="input-group">
                      <span class="input-group-text bg-transparent br-0"
                        ><i class="far fa-search"></i
                      ></span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search"
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
                    <th>Staff Name</th>
                    <th>Designation</th>
                    <th>Branch</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="staff in list" :key="staff.id">
                    <td>{{ staff.id }}</td>
                    <td>{{ staff.name }}</td>
                    <td>{{ staff.designation_name }}</td>
                    <td>{{ staff.hospital_branch_name }}</td>
                    <td>
                      <a @click="view(staff)" class="view"
                        ><i class="far fa-eye"></i
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
import Adminsidebar from "../../../components/Admin/Adminsidebar.vue";
import AdminHeader from "../../../components/Admin/Admin_ToHeader.vue";
export default {
  components: { Adminsidebar, AdminHeader },
  name: "occasion-of-service",
  setup() {},
  data() {
    return {
      Id: 0,
      name: "",
      userdetails: null,
      list: [],
      branchlist: [],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetBranchList();
    this.GetList();
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
        { branch_id: this.Id, name: this.name },
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
        path: "/Modules/Admin/occasion-of-service-staff-info",
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
  },
};
</script>