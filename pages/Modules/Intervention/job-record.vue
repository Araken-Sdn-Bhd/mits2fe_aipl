<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Job Record</h1>

          </div>
          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-2">
                <div class="row align-items-center">
                  <div class="col-sm-5 mb-2 search-box">
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                        <i class="fa fa-search"></i>
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
              <table class="table table-striped data-table font-13 display nowrap" style="width: 100%">
                <thead>
                  <tr>
                    <th></th>
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
                    <!--<td style="width:5%">#{{ index + 1 }}</td>-->
                    <td><input type="checkbox" name="" v-on:click="Checkcompany(job.jobofferId, $event)"/></td>
                    <td>{{ job.position }}</td>
                    <td>{{ job.location_address_1 }} {{ job.location_address_2 }} {{ job.location_address_3 }}</td>
                    <td>{{ job.duration_of_employment }}</td>
                    <td>RM {{ job.salary_offered }}</td>
                    <td>{{ job.work_schedule }}</td>
                    <td>{{ job.company_name }}</td>
                    <td>{{ job.contact_name }}</td>
                    <td>{{ job.contact_number }}</td>
                    <td>
                      <span v-if="job.job_availability == 0" >Yes</span>
                      <span v-if="job.job_availability == 1" style="color:red">No</span>
                    </td>
                    <td>
                      <a style="cursor:pointer;" @click="OneditClick(job.jobofferId)" class="view"><i class="fa fa-eye"></i></a>
                    
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
                    v-on:click="OnApproverejectRequest(1)" v-if="SidebarAccess==1"
                    class="btn btn-danger btn-fill btn-md"
                    ><i class="fad fa-vote-nay"></i> Not Available</a
                  >
                  <a
                    style="cursor: pointer"
                    v-on:click="OnApproverejectRequest(0)" v-if="SidebarAccess==1"
                    class="btn btn-warning btn-green btn-fill btn-md">
                    <i class="fad fa-check"></i> Available</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <intervention-footer></intervention-footer>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "job-offer",

  data() {
    return {
      userdetails: null,
      list: [],
      alllist: [],
      selected: [],
      companyId: 0,
      search: "",
      SidebarAccess:null,

    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));

  },
  mounted() {
    this.getList();

  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    async getList(){
      const headers = {
      Authorization: "Bearer " + this.userdetails.access_token,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const axios = require("axios").default;
    axios
      .post(
        `${this.$axios.defaults.baseURL}`+"employer-job/job-list",
        {email:this.userdetails.user.email,branch_id:this.userdetails.branch.branch_id },
        { headers }
      )
      .then((resp) => {
        this.list = resp.data;
        this.alllist = resp.data;
      //  $(document).ready(function () {
      //    $(".data-table").DataTable({
      //      searching: false,
      //      bLengthChange: false,
      //      bInfo: false,
      //      // autoWidth: false,
      //      // responsive: true,
      //      scrollX: true,
      //      language: {
      //        paginate: {
      //          next: '<i class="fad fa-arrow-to-right"></i>', // or '→'
      //          previous: '<i class="fad fa-arrow-to-left"></i>', // or '←'
      //        },
      //      },
      //    });
      //  });
      //
    }
      )
      .catch((err) => {
        console.error(err);
      });
   
    },
    OnSearch() {
      if (this.search) {
        this.list = this.alllist.filter((notChunk) => {
          return (
            notChunk.position
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1 || notChunk.company_name
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) > -1
          );
        });
      } else {
        this.list = this.alllist;
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
    async OnApproverejectRequest(status) {

      if (confirm("Are you sure you want to perform this action")) {
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
                "employer-job/setAvailable",
              {  id: value, status: status.toString() },
              { headers }
            )

            .then((resp) => {
              console.log("reuslt", resp);
            });

            this.getList();


        });

        this.loader = false;
        this.$swal.fire(
                  'Successfully Update',
                )
      } catch (e) {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + this.error,
                  footer: ''
                })
      }
    }

    },
    OneditClick(id) {
      this.$router.push({
        path: "/modules/Intervention/view-job-details",
        query: { id: id },
      });
    },
  },
};
</script>
