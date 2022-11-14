<template>
  <div id="layoutSidenav">
    <CommonSidebarEmployer  />
    <div id="layoutSidenav_content">
      <CommonHeaderEmployer />
      <main>
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Same Job Offer List</h1>
            <!--<a href="/app/modules/Employer/create-same-job" class=" add-btn" title="create same job offer"><i class="fal fa-plus"></i></a>-->
          </div>

          <div class="card mb-4 col-12">
            <div class="card-body">
              <table class="table table-striped">
            <tbody>
              <tr>
                <td style="width: 15%">Position Offered</td>
                <td style="width: 2%;">:</td>
                <td>{{ this.position }}</td>
              </tr>
              <tr>
                <td>Education Level</td>
                <td>:</td>
                <td>{{ this.education }}</td>
              </tr>
              <tr>
                <td>Work Requirement</td>
                <td>:</td>
                <td>{{GetWorkRequiremnet(this.requirement)}}</td>
              </tr>
              <tr>
                <td>Approval Status</td>
                <td>:</td>
                <td>
                  <span v-if="this.status == 1">Pending</span>
                  <span v-if="this.status == 0">Rejected</span>
                  <span v-if="this.status == 2">Approved</span>

                  </td>
              </tr>
              </tbody>
              </table>

            </div>
            <div class="card-body">
              <table class="table table-striped data-table font-13">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Posted Date</th>
                    <!--<th>Position</th>-->
                    <th>Job Location</th>
                    <th>Employment Duration</th>
                    <th>Average Salary</th>
                    <th>Work Schedule</th>
                    <!--<th>Education</th>-->
                    <th>Transport</th>
                    <th>Accommodation</th>
                    <!--<th>Work Requirement</th>-->
                    <th>Mentari</th>
                    <!--<th>Status</th>-->

                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(job, index) in list" :key="index">
                    <td style="width:5%">#{{ index + 1 }}</td>
                    <td style="width:10%">{{ job.created_at }}</td>
                    <!--<td>{{ job.position }}</td>-->
                    <td>{{ job.location_address_1 }} {{ job.location_address_2 }} {{ job.location_address_3 }}</td>
                    <td>{{ job.duration_of_employment }}</td>
                    <td>RM {{ job.salary_offered }}</td>
                    <td>{{ job.work_schedule }}</td>
                    <!--<td>{{ job.section_value }}</td>-->
                    <td>
                      <p v-if="job.is_transport">Yes</p>
                      <p v-if="!job.is_transport">No</p>
                    </td>
                    <td>
                      <p v-if="job.is_accommodation">Yes</p>
                      <p v-if="!job.is_accommodation">No</p>
                    </td>
                    <!--<td> {{GetWorkRequiremnet(job.work_requirement)}}</td>-->
                    <td>{{ job.hospital_branch_name }}</td>
                    <!--<td>
                      <p v-if="job.approval_status == 1">Pending</p>
                      <p v-if="job.approval_status == 0">Rejected</p>
                      <p v-if="job.approval_status == 2">Approved</p>
                    </td>-->

                  </tr>
                </tbody>
              </table>
              <br>
                <br>

                <div class="d-flex">
                  <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <i class="fa fa-step-backward"/> &nbsp; Back
                </button>

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
import CommonSidebarEmployer from '../../../components/CommonSidebarEmployer.vue';
import CommonHeaderEmployer from '../../../components/CommonHeaderEmployer.vue';
export default {
  components: {CommonSidebarEmployer, CommonHeaderEmployer },
  name: "job-offer",

  data() {
    return {
      userdetails: null,
      list: [],
      title: "",
      jobdetail:[],
      jobposition:"",
      workrequirement:"",
      education:"",
      result:[],
      position:"",
      job_id:"",
      education:"",
      requirement:"",
      status:"",
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    let urlParams = new URLSearchParams(window.location.search);
    this.job_id = urlParams.get("job_id");
    this.position = urlParams.get("position");
    this.education = urlParams.get("education");
    this.requirement = urlParams.get("requirement");
    this.status = urlParams.get("status");
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
    const response = await this.$axios.post(
            "employer-job/repeat-list",
            {
              user_id: this.userdetails.user.id,
              job_id: this.job_id
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
    GetWorkRequiremnet(data) {
      var requirement = "";
      var jdata = JSON.parse(data);
      jdata.forEach((ele) => {
        if (ele["Labour (Heavy Lifting)"] == true) {
          requirement = "Labour (Heavy Lifting)";
        }
        if (ele["Good Focus/Concentration"] == true) {
          if (requirement) {
            requirement = requirement + "," + "Good Focus/Concentration";
          } else {
            requirement = "Good Focus/Concentration";
          }
        }
        if (ele["Communication Skills"] == true) {
          if (requirement) {
            requirement = requirement + "," + "Communication Skills";
          } else {
            requirement = "Communication Skills";
          }
        }
        if (ele["Reading"] == true) {
          if (requirement) {
            requirement = requirement + "," + "Reading";
          } else {
            requirement = "Reading";
          }
        }
        if (ele["Calculation"] == true) {
          if (requirement) {
            requirement = requirement + "," + "Calculation";
          } else {
            requirement = "Calculation";
          }
        }
        if (ele["Other"]) {
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
