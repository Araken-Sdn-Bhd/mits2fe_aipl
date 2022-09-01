<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Patients</h1>
            <a href="/Modules/Shharp/demographic" class="add-btn"
              ><i class="far fa-plus"></i
            ></a>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table">
                <div class="row align-items-center">
                  <div class="col-sm-4 mb-3 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="far fa-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search by Name/NRIC"
                        v-model="search"
                        @keyup="OnSearch"
                      />
                    </div>
                  </div>

                  <div class="col-sm-4 mb-3">
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <label class="form-label">Start Date</label>
                      </div>
                      <div class="col-sm-8">
                        <input
                          type="date"
                          class="form-control"
                          v-model="fromDate"
                          @change="OnSearch"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-4 mb-3">
                    <div class="row align-items-center">
                      <div class="col-sm-4">
                        <label class="form-label">End Date</label>
                      </div>
                      <div class="col-sm-8">
                        <input
                          type="date"
                          class="form-control"
                          v-model="toDate"
                          @change="OnSearch"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- search-table -->
              <table class="table table-striped data-table" style="width: 100%">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>NRIC/Passport</th>
                    <th>Mentari</th>
                    <th>Last Seen</th>
                    <th>Shharp Form Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(patint, index) in list" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>
                      <a
                        style="color: #18846f; cursor: pointer"
                        @click="oneditPatient(patint.patient_id)"
                        >{{ patint.name_asin_nric }}</a
                      >
                    </td>
                    <td>{{ patint.age }}</td>

                    <td>{{ patint.nric_no }}</td>
                    <td>{{patint.hospital_branch_name}}</td>
                    <td>{{ patint.harm_date }}</td>
                    <td>{{ patint.status }}</td>
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
import CommonHeader from "../../../components/CommonHeader.vue";
import CommonSidebar from "../../../components/CommonSidebar.vue";
export default {
  components: { CommonSidebar, CommonHeader },
  data() {
    return {
      userdetails: null,
      list: [],
      branchlist: [],
      servicelist: [],
      userId: 0,
      token: "",
      keyword: "",
      search: "",
      fromDate: "",
      toDate: "",
      branch_id: 0,
      assistancelist: [],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    //   this.GetList();
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
        `${this.$axios.defaults.baseURL}` + "shharp-patient-list/list",
        {
          keyword: "no-keyword",
          fromDate: "dd-mm-yyyy",
          toDate: "dd-mm-yyyy",
        },
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        console.log('list',this.list);
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            autoWidth: false,
            responsive: true,
            // retrieve: true,
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
    oneditPatient(Id) {
      this.$router.push({
        path: "/Modules/Shharp/patient-summary",
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
      if (!this.fromDate) {
        this.fromDate = "dd-mm-yyyy";
      } else {
        this.fromDate = this.fromDate;
      }
      if (!this.toDate) {
        this.toDate = "dd-mm-yyyy";
      } else {
        this.toDate = this.toDate;
      }
      const response = await this.$axios.post(
        "shharp-patient-list/list",
        {
          keyword: this.keyword,
          fromDate: this.fromDate,
          toDate: this.toDate,
          added_by:this.userdetails.added_by,
        },
        { headers }
      );
      console.log("sharrp data", response.data);
      if (response.data.code == 200) {
        if (response.data.list.length > 0) {
          this.list.splice(0, this.list.length);
          this.list = response.data.list;
        } else {
          this.list.splice(0, this.list.length);
          if ($.fn.DataTable.isDataTable(".data-table")) {
            $(".data-table").DataTable().clear().destroy();
          }
        }
      } else {
        window.alert("Something went wrong");
      }
    },
  },
};
</script>
