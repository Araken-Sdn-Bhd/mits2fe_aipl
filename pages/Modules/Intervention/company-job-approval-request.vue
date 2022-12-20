<template>
  <div id="layoutSidenav">
    <CommonSidebar />
    <div id="layoutSidenav_content">
      <CommonHeader />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>{{ this.companyName }} : List of Pending Company Job Approval Request</h1>
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-3">
                <div class="row align-items-center">
                  <!--<div class="col-sm-5">
                    <h5>Company: {{ this.companyName }}</h5>
                  </div>-->

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

              <table class="table table-striped data-table font-13 display nowrap" style="width: 100%">
                <thead>
                  <tr>
                    <th></th>
                    <th>Posted Date</th>
                    <th>Position</th>
                    <th>Job Location</th>
                    <th>Employment Duration</th>
                    <th>Average Salary</th>
                    <th>Work Schedule</th>
                    <th>Education</th>
                    <th>Transport</th>
                    <th>Accommodation</th>
                    <th>Work Requirement</th>
                    <th>Mentari</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(job, index) in list" :key="index">
                    <td>
                      <input
                        type="checkbox"
                        name=""
                        v-on:click="Checkcompany(job.joboffersId, $event)"
                      />
                    </td>
                    <td style="width:10%">{{ job.created_at }}</td>
                    <td>{{ job.position }}</td>
                    <td>{{ job.location_address_1 }} {{ job.location_address_2 }} {{ job.location_address_3 }}</td>
                    <td>{{ job.duration_of_employment }}</td>
                    <td>{{ job.salary_offered }}</td>
                    <td>{{ job.work_schedule }}</td>
                    <td>{{ job.section_value }}</td>
                    <td>
                      <p v-if="job.is_transport">Yes</p>
                      <p v-if="!job.is_transport">No</p>
                    </td>
                    <td>
                      <p v-if="job.is_accommodation">Yes</p>
                      <p v-if="!job.is_accommodation">No</p>
                    </td>
                    <td>{{ GetWorkRequiremnet(job.work_requirement) }}</td>
                    <td>{{ job.hospital_branch_name }}</td>
                    <td>
                      <span v-if="job.approval_status == 1">Pending</span>
                      <span v-if="job.approval_status == 0">Rejected</span>
                      <span v-if="job.approval_status == 2">Approved</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br><br>
              <div class="d-flex">
                <button @click="back" type="button" class="btn btn-primary btn-fill btn-md">
                    <i class="fa fa-step-backward"/> &nbsp; Back
                </button>
                <div class="ml-auto">
                  <a
                    style="cursor: pointer"
                    v-on:click="OnApproverejectRequest(0)" v-if="SidebarAccess==1"
                    class="btn btn-danger btn-fill btn-md"
                    ><i class="fad fa-vote-nay"></i> Reject</a
                  >
                  <a
                    style="cursor: pointer"
                    v-on:click="OnApproverejectRequest(2)" v-if="SidebarAccess==1"
                    class="btn btn-warning btn-green btn-fill btn-md"
                    ><i class="fad fa-check"></i> Approve</a
                  >
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
      companyName: "",
      loader: false,
      SidebarAccess:null,


    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    let urlParams = new URLSearchParams(window.location.search);
    this.companyId = urlParams.get("id");
    this.companyName = urlParams.get("company");
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
            "employer-job/pending-approval",
            {
              company_id: this.companyId
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
            // autoWidth: false,
            // responsive: true,
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
                "intervention-job/setStatus",
              { added_by: this.userdetails.user.id, id: value, status: status.toString() },
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
                });
      }
    }

    },


  },
};
</script>
