<template>
  <div id="layoutSidenav">
    <InterventionHeader />
    <div id="layoutSidenav_content">
      <InterventionSidebar />
      <main>
        <Loader v-if="loader" />
        <div class="container-fluid px-4">
          <div class="page-title">
            <h1>Company Job Approval Request</h1>
            <!-- <a href="create-new-job.html"><i class="fal fa-plus"></i> Add</a> -->
          </div>

          <div class="card mb-4">
            <div class="card-body">
              <div class="search-table mt-3">
                <div class="row align-items-center">
                  <div class="col-sm-5">
                    <h5>Company: {{ companyName }}</h5>
                  </div>

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

              <table
                class="table table-striped data-table font-13"
                style="width: 100%"
              >
                <thead>
                  <tr>
                    <th></th>
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
                    <td>
                      <input
                        type="checkbox"
                        name=""
                        v-on:click="Checkcompany(job.id, $event)"
                      />
                    </td>
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
                    <td>{{ GetWorkRequiremnet(job.work_requirement) }}</td>
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

              <div class="d-flex">
                <div class="ml-auto">
                  <a
                    style="cursor: pointer"
                    v-on:click="OnApproverejectRequest(0)"
                    class="btn btn-danger btn-text"
                    ><i class="fad fa-vote-nay"></i> Reject</a
                  >
                  <a
                    style="cursor: pointer"
                    v-on:click="OnApproverejectRequest(2)"
                    class="btn btn-warning btn-green btn-text"
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
      selected: [],
      companyId: 0,
      search: "",
      companyName: "",
      loader: false,
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
      .post(
        `${this.$axios.defaults.baseURL}` +
          "intervention-job/getCompanyJobApprovalList",
        {
          added_by: this.userdetails.user.id,
          company_id: this.companyId,
        },
        { headers }
      )
      .then((resp) => {
        this.list = resp.data.list;
        this.alllist = resp.data.list;
        this.companyName = resp.data.companyname.company_name;
        console.log('list',this.list);
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
            this.GetList();
        });
        
        this.loader = false;
        this.$nextTick(() => {
          $("#updatepopup").modal("show");
        });
      } catch (e) {
        this.loader = false;
        this.$nextTick(() => {
          $("#errorpopup").modal("show");
        });
      }
    },
    GetList() {
      const headers = {
        Authorization: "Bearer " + this.userdetails.access_token,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const axios = require("axios").default;
      axios
        .post(
          `${this.$axios.defaults.baseURL}` +
            "intervention-job/getCompanyJobApprovalList",
          {
            added_by: this.userdetails.user.id,
            company_id: this.companyId,
          },
          { headers }
        )
        .then((resp) => {
          console.log('my list call',resp.data.list);
          this.list = resp.data.list;
          this.alllist = resp.data.list;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>