<template>
  <div id="layoutSidenav">
    <InterventionHeader />
    <div id="layoutSidenav_content">
      <InterventionSidebar />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Patients</h1>
            <a href="/Modules/Intervention/patient-registration" class="add-btn"
              ><i class="fal fa-plus"></i
            ></a>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-2">
                <div class="row">
                  <div class="col-sm-3 mb-2">
                    <select
                      v-model="branch_id"
                      class="form-select"
                      aria-label="Default select example"
                      @change="OnSearch"
                    >
                      <option value="0">Select Branch</option>
                      <option
                        v-for="slt in branchlist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.hospital_branch_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-3 mb-2">
                    <select
                      v-model="service_id"
                      class="form-select"
                      aria-label="Default select example"
                      @change="OnSearch"
                    >
                      <option value="0">Select Service</option>
                      <option
                        v-for="slt in servicelist"
                        v-bind:key="slt.id"
                        v-bind:value="slt.id"
                      >
                        {{ slt.service_name }}
                      </option>
                    </select>
                  </div>

                  <div class="col-sm-5 ml-auto mb-2 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="far fa-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search By Name/NRIC/Passport/MRN"
                        v-model="search"
                        @keyup="OnSearch"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <table
                class="table table-striped data-table font-13"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>MRN</th>
                    <th>Salutation</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>NRIC/Passport</th>
                    <th>Next Visit</th>
                    <th>Assigned Doctor</th>
                    <th>Services</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(patint, index) in list" :key="index">
                    <td>#{{ index + 1 }}</td>
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
                    <td>{{ patint.appointments }}</td>
                    <td>{{ patint.team_name }}</td>
                    <td>{{ patint.service }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <intervention-footer></intervention-footer>
    </div>
  </div>
</template>
<script>
import InterventionHeader from "../../../components/Intervention/InterventionHeader.vue";
import InterventionSidebar from "../../../components/Intervention/InterventionSidebar.vue";
export default {
  components: { InterventionHeader, InterventionSidebar },
  name: "patient-list",

  data() {
    return {
      userdetails: null,
      list: [],
      branchlist: [],
      servicelist: [],
      keyword: "",
      search: "",
      branch_id: 0,
      service_id: 0,
      loader: true,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  mounted() {
    this.GetList();
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .get(
        `${this.$axios.defaults.baseURL}` +
          "patient-registration/getPatientRegistrationList",
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
        this.loader = false;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {
    async GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response1 = await this.$axios.get("service/list", { headers });
      if (response1.data.code == 200 || response1.data.code == "200") {
        this.servicelist = response1.data.list;
      } else {
        this.servicelist = [];
      }
      const response2 = await this.$axios.get("hospital/branch-list", {
        headers,
      });
      if (response2.data.code == 200 || response2.data.code == "200") {
        this.branchlist = response2.data.list;
      } else {
        this.branchlist = [];
      }
    },
    oneditPatient(Id) {
      this.$router.push({
        path: "/Modules/Intervention/patient-summary",
        query: { id: Id },
      });
    },
    async OnSearch() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      if (!this.search) {
        this.keyword = "no-keyword";
      } else {
        this.keyword = this.search;
      }
      const response = await this.$axios.post(
        "/patient/search",
        {
          keyword: this.keyword,
          branch_id: this.branch_id,
          service_id: this.service_id,
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