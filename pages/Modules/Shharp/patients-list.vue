<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Patients</h1>
            <a href="/app/modules/Shharp/demographic" class="add-btn"
              ><i class="fal fa-plus"></i
            ></a>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-2">
                <div class="row">
                  <div class="col-sm-3 mb-2 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-search"></i>
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
              <div style="overflow-x:auto;">
                <table
                class="table table-striped data-table font-13 display nowrap"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>NRIC/Passport</th>
                    <th>Mentari</th>
                    <th>Date Harm</th>
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
                    <td>{{ patint.hospital_branch_name }}</td>
                    <td v-if="patint.harm_date !='-'">{{ getFormattedDate(patint.harm_date) }}</td>
                    <td v-if="patint.harm_date =='-'">-</td>
                    <td v-if="patint.booking_date !='-'">{{ getFormattedDate(patint.booking_date) }}</td>
                    <td v-if="patint.booking_date =='-'">-</td>
                    <td>{{ patint.status }}</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <p
                v-show="!list.length"
                style="
                  padding: 0px;
                  margin: 10px;
                  color: red;
                  display: flex;
                  justify-content: center;
                ">
                No Record Found
              </p>
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
import moment from 'moment';
export default {
  components: { CommonSidebar, CommonHeader },
  data() {
    return {
      userdetails: null,
      loader: true,
      list: [],
      branchlist: [],
      servicelist: [],
      userId: 0,
      token: "",
      keyword: "",
      search: "",
      search2: "",
      fromDate: "",
      toDate: "",
      branch_id: 0,
      assistancelist: [],
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  mounted() {
    if(localStorage.getItem("keyword")!=''){
      this.search2=localStorage.getItem("keyword");
      this.search=this.search2;
      this.OnSearch();
    }
    },
  methods: {
    getFormattedDate(date) {
            return moment(date).format("DD-MM-YYYY")
        },

    oneditPatient(Id) {
      this.$router.push({
        path: "/modules/Shharp/patient-summary",
        query: { id: Id },
      });
    },
    async getData() {
      this.loader = true;
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
      // alert(JSON.stringify(resp.data.list));
        this.list = resp.data.list;

        console.log("list", this.list);
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
        this.loader = false;
      })
      .catch ((err) => {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + err,
                  footer: ''
                });

        this.loader = false;
        console.error(err);
      });

    },
    async OnSearch() {
      localStorage.removeItem('keyword');
      this.list = [];
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
      if (this.toDate == "dd-mm-yyyy" && this.fromDate == "dd-mm-yyyy" && this.keyword == "no-keyword"){
        this.getData();
      } else {
        this.loader = true;
      const response = await this.$axios
        .post(
          "shharp-patient-list/list",
          {
            keyword: this.keyword,
            fromDate: this.fromDate,
            toDate: this.toDate,
            added_by: this.userdetails.added_by,
          },
          { headers }
        )

      .then((resp) => {
        this.list = resp.data.list;
        console.log("list", this.list);

        this.loader = false;
      });
      }
    },
  },
};
</script>
