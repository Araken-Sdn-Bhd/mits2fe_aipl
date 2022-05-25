<template>
  <div id="layoutSidenav">
    <InterventionHeader />
    <div id="layoutSidenav_content">
      <InterventionSidebar />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Job Record</h1>
            <!-- <a href="create-new-job.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>
          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-2">
                <div class="row align-items-center">
                  <div class="col-sm-5 mb-2 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="far fa-search"></i>
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Search Position" @keyup="OnSearch" v-model="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <table
                class="table table-striped data-table font-13"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Position</th>
                    <th>Job Location</th>
                    <th>Employment Duration</th>
                    <th>Average Salary</th>
                    <th>Work Schedule</th>
                    <th>Company Name</th>
                    <th>Contact Person</th>
                    <th>Contact No.</th>
                    <th>Job Availability</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(job, index) in list" :key="index">
                    <td>#{{ index+1 }}</td>
                    <td>{{ job.position_offered }}</td>
                    <td>{{ job.position_location_1 }}</td>
                    <td>{{ job.duration_of_employment }}</td>
                    <td>{{ job.salary_offered }}</td>
                    <td>{{ job.work_schedule }}</td>
                    <td>{{ job.company_name }}</td>
                    <td>{{ job.contact_name }}</td>
                    <td>{{ job.contact_number }}</td>
                    <td>{{job.job_availability}}</td>
                    <td>
                      <a style="cursor:pointer;" @click="OneditClick(job.id)" class="view"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a style="cursor:pointer;" @click="OneditClick(job.id)" class="edit"
                        ><i class="far fa-edit"></i
                      ></a>
                    </td>
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
  name: "job-offer",

  data() {
    return {
      userdetails: null,
      list: [],
      alllist: [],
      companyId: 0,
      search: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.companyId = urlParams.get("id");
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
        `${this.$axios.defaults.baseURL}` + "intervention/job-record",

        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        this.alllist = resp.data.list;
        console.log("my lst", resp.data);
        $(document).ready(function () {
          $(".data-table").DataTable({
            searching: false,
            bLengthChange: false,
            bInfo: false,
            autoWidth: false,
            responsive: true,
            scrollX: true,
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
    OnSearch() {
      if (this.search) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.position_offered
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else {
        this.list = this.alllist;
      }
    },
    OneditClick(id) {
      this.$router.push({
        path: "/Modules/Intervention/update-new-job",
        query: { id: id },
      });
    },
  },
};
</script>