<template>
  <div id="layoutSidenav">
    <InterventionHeader />
    <div id="layoutSidenav_content">
      <InterventionSidebar />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Job Offer</h1>
            <a href="/Modules/Intervention/create-new-job" class="add-btn"
              ><i class="fal fa-plus"></i
            ></a>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-3">
                <div class="row">
                  <div class="col-sm-5 ml-auto mb-2">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search Position"
                      v-model="search"
                      @keyup="OnSearch"
                    />
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
                    <th>Position</th>
                    <th>Job Posted</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(job, index) in list" :key="index">
                    <td>#{{ index+1 }}</td>
                    <td>{{ job.position_offered }}</td>
                    <td>{{ job.job_posted }}</td>
                    <td>
                      <a
                        style="cursor: pointer"
                        @click="OnviewClick(job.position_offered)"
                        class="view"
                        ><i class="far fa-eye"></i
                      ></a>
                      <a
                        style="cursor: pointer"
                        @click="OneditClick(job.id)"
                        class="add"
                        ><i class="far fa-plus"></i
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
      search: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  mounted() {
    console.log(`${this.$axios.defaults.baseURL}`);
    const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .post(
        `${this.$axios.defaults.baseURL}` + "intervention-job/list",
        { added_by: this.userdetails.user.id },
        { headers }
      )
      .then((resp) => {
        this.list = resp.data;
        this.alllist = resp.data;
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
    OneditClick(id) {
      this.$router.push({
        path: "/Modules/Intervention/update-new-job",
        query: { id: id },
      });
    },
    OnviewClick(title) {
      this.$router.push({
        path: "/Modules/Intervention/same-job-offer-list",
        query: { title: title },
      });
    },
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
  },
};
</script>