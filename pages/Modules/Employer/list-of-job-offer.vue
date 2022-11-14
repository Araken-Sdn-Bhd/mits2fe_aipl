<template>
  <div id="layoutSidenav">
    <CommonSidebarEmployer />
    <div id="layoutSidenav_content">
      <CommonHeaderEmployer />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>List of Job Offer</h1>
            <a href="/app/modules/Employer/create-new-job" class="  add-btn" title="create new job offer"><i class="fal fa-plus"></i></a>
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
                    <th style="width:5%">No</th>
                    <th style="width:15%" >Job Posted</th>
                    <th>Position</th>
                    <th style="width:10%">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(job, index) in list" :key="index">
                    <td>#{{ index + 1 }}</td>
                    <td>{{ job.created_at }}</td>
                    <td>{{ job.position }}</td>


                    <td>
                      <a
                        style="cursor: pointer"
                        @click="OnviewClick(job.id,job.position,job.section_value,job.work_requirement,job.approval_status)"
                        class="view" title="View all list">
                        <i class="far fa-eye"></i></a>
                      <a
                      v-if="job.approval_status == 2"
                        style="cursor: pointer"
                        title="create same job offer"
                        @click="OneditClick(job.id,job.position,job.section_value,job.work_requirement)"
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
        <Loader v-if="loader" />
      </main>
      <intervention-footer></intervention-footer>
    </div>
  </div>
</template>
<script>
import CommonSidebarEmployer from "../../../components/CommonSidebarEmployer.vue";
import CommonHeaderEmployer from "../../../components/CommonHeaderEmployer.vue";

export default {
  components: {CommonSidebarEmployer, CommonHeaderEmployer },
  name: "job-offer",

  data() {
    return {
      userdetails: null,
      list: [],
      alllist: [],
      search: "",
      loader: false,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  },
  mounted() {
    console.log(`${this.$axios.defaults.baseURL}`);
    this.getList();

  },


  methods: {
    async getList(){
      const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
    };
    const response = await this.$axios.post(
            "employer-job/list",
            {
              user_id: this.userdetails.user.id,
            },
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



    OneditClick(id,position,education,requirement) {
      this.loader = true;
      this.$router.push({
        path: "/app/modules/Employer/create-same-job",
        query: { id: id, position:position, education:education,requirement:requirement},
      });
    },
    OnviewClick(id,position,education,requirement,status) {
      this.loader = true;
      this.$router.push({
        path: "/app/modules/Employer/same-job-offer-list",
        query: { job_id: id,position:position, education:education,requirement:requirement,status:status},
      });
    },
    OnSearch() {
      if (this.search) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.position
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
