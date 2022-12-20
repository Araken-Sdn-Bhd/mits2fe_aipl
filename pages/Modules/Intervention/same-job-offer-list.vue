<template>
  <div id="layoutSidenav">
    <CommonSidebar  />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Same Job Offer List</h1>
            <!-- <a href="create-new-job.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <table
                class="table table-striped data-table font-13"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th>Position</th>
                    <th>Job Location</th>
                    <th>Employment Duration</th>
                    <th>Average Salary</th>
                    <th>Work Schedule</th>
                    <th>Transport</th>
                    <th>Accommodation</th>
                    <th>Work Requirement</th>
                    <th>Mentari</th>
                    <th>Status</th>
                    <th>Posted Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(job, index) in list" :key="index">
                    <td>{{ job.position_offered }}</td>
                    <td>{{ job.position_location_1 }}</td>
                    <td>{{ job.duration_of_employment }}</td>
                    <td>{{ job.salary_offered }}</td>
                    <td>{{ job.work_schedule }}</td>
                    <td>
                      <p v-if="job.is_transport">Yes</p>
                      <p v-if="!job.is_transport">No</p>
                    </td>
                    <td>
                      <p v-if="job.is_accommodation">Yes</p>
                      <p v-if="!job.is_accommodation">No</p>
                    </td>
                    <td> {{GetWorkRequiremnet(job.work_requirement)}}</td>
                    <td>{{ job.hospital_branch_name }}</td>
                    <td>
                      <p v-if="job.status == 1">Pending</p>
                      <p v-if="job.status == 0">Rejected</p>
                      <p v-if="job.status == 2">Approved</p>
                    </td>
                    <td>{{ job.posted_at }}</td>
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
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },
  name: "job-offer",

  data() {
    return {
      userdetails: null,
      list: [],
      title: "",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.title = urlParams.get("title");
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
        `${this.$axios.defaults.baseURL}` + "intervention-job/getListByTitle",
        { added_by: this.userdetails.user.id, title: this.title },
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
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
      .catch ((err) => {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + err,
                  footer: ''
                });

        console.error(err);
      });
  },
  methods: {
    GetWorkRequiremnet(data) {
      var requirement = "";
      var jdata = JSON.parse(data);
      jdata.forEach((ele) => {
        if (ele["WorkRequirement"]["Labour (Heavy Lifting)"] == true) {
          requirement = "Labour (Heavy Lifting)";
        }
        if (ele["WorkRequirement"]["Good Focus/Concentration"] == true) {
          if (requirement) {
            requirement = requirement + "," + "Good Focus/Concentration";
          } else {
            requirement = "Good Focus/Concentration";
          }
        }
        if (ele["WorkRequirement"]["Communication Skills"] == true) {
          if (requirement) {
            requirement = requirement + "," + "Communication Skills";
          } else {
            requirement = "Communication Skills";
          }
        }
        if (ele["WorkRequirement"]["Reading"] == true) {
          if (requirement) {
            requirement = requirement + "," + "Reading";
          } else {
            requirement = "Reading";
          }
        }
        if (ele["WorkRequirement"]["Calculation"] == true) {
          if (requirement) {
            requirement = requirement + "," + "Calculation";
          } else {
            requirement = "Calculation";
          }
        }
        if (ele["WorkRequirement"]["Other"]) {
          if (requirement) {
            requirement = requirement + "," + "Other";
          } else {
            requirement = "Other";
          }
        }
      });
      return requirement;
    },
  },
};
</script>
