<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Screening Patient</h1>
            <!-- <a href="demographic.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table">
                <div class="row">
                  <div class="col-sm-4 mt-2 mb-3">
                    <!-- <input type="text" class="form-control" placeholder="Search By Name/NRIC/Passport/MRN"> -->
                    <select
                      v-model="branch"
                      class="form-select"
                      aria-label="Default select example" @change="OnSearch"
                    >
                      <option v-bind:value="0">Select Branch</option>
                      <option
                        v-for="hst in branchlist"
                        v-bind:key="hst.id"
                        v-bind:value="hst.id"
                      >
                        {{ hst.hospital_branch_name }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <table class="table table-striped data-table" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>MRN</th>
                    <th>SALUTATION</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>NRIC/Passport</th>
                    <th>Assigned Doctor</th>
                    <th>Services</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(patint, index) in list" :key="index">
                    <td>{{ index+1 }}</td>
                    <td>{{ patint.patient_mrn }}</td>
                    <td>{{ patint.salutation }}</td>
                    <td>
                      <a
                        style="color: #18846f; cursor: pointer"
                        @click="oneditPatient(patint.id)"
                        >{{ patint.name_asin_nric }}</a
                      >
                    </td>
                    <td>{{ patint.age }}</td>
                    <td>{{ patint.nric_no }}</td>
                    <td>{{ patint.team_name }}</td>
                    <td>{{ patint.service }}</td>
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
  name: "book-appointment",
  data() {
    return {
      userdetails: null,
      list: [],
      branchlist: [],
      branch: 0,
      // SidebarAccess = 1,
    };
  },
  beforeMount() {
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetBranchList();
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
        `${this.$axios.defaults.baseURL}`+"patient-registration/getPatientRegistrationListByScreening",
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
  methods: {
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
    oneditPatient(Id) {
      if(this.SidebarAccess==1){
        this.$router.push({
        path: "/Modules/Intervention/patient-summary",
        query: { id: Id },
      });
      }else{
      }
    },
     async OnSearch() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      if (!this.keyword) {
        this.keyword = "no-keyword";
      }
      const response = await this.$axios.post(
        "/patient/search",
        {
          keyword: "no-keyword",
          branch_id: this.branch,
          service_id: 0,
        },
        { headers }
      );
      console.log("my list", response.data);
      if (response.data.code == 200) {
        this.list = response.data.list;
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>
