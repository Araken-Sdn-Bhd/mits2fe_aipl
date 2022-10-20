<template>
  <div>
    <div id="layoutSidenav">
      <CommonSidebar />
      <div id="layoutSidenav_content">
        <CommonHeader />
        <main>
          <Loader v-show="loader" />
          <div class="container-fluid px-4">
            <div class="page-title">
              <h1>Activities Report</h1>
            </div>

            <div class="card mb-4">
              <div class="card-header icon-title">
                <a href="#"><i class="fad fa-file-chart-line"></i></a>
                <h4>Volunteer, Outreach And Networking (VON)</h4>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Period Of Services:</label>
                        <input
                          type="date"
                          class="form-control"
                          v-model="fromDate"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">To:</label>
                        <input
                          type="date"
                          class="form-control"
                          v-model="toDate"
                        />
                      </div>
                    </div>
                  </div>
                  <!-- row -->
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Event/program:</label>
                        <input
                          type="text"
                          class="form-control"
                          name=""
                          placeholder="Enter Event/ Program"
                          v-model="event"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Type Of Collaborator: </label>

                        <select
                          class="form-select select-others"
                          aria-label=""
                          v-model="toc"
                        >
                          <option value="">Please Select</option>
                          <option value="individual">Individual</option>
                          <option value="group">Group</option>
                          <option value="organization">Organization</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Location:</label>
                        <select
                          class="form-select select-others"
                          v-model="location"
                        >
                          <option value="">Please Select</option>
                          <option value="All">All</option>
                          <option value="None">None</option>
                          <option value="mentari">Mentari</option>
                          <option value="Others">Others</option>
                        </select>
                      </div>

                      <div class="mb-3 mentari selected-box hide">
                        <label class="form-label">Mentari Center:</label>
                        <select
                          class="form-select select-others"
                          v-model="location_value"
                        >
                          <option value="">Please Select</option>
                          <option
                            v-for="brn in BranchList"
                            v-bind:key="brn.hospital_branch_name"
                            v-bind:value="brn.hospital_branch_name"
                          >
                            {{ brn.hospital_branch_name }}
                          </option>
                        </select>
                      </div>

                      <div class="mb-3 Others selected-box hide">
                        <label class="form-label">Others:</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Please Specify"
                          name=""
                          v-model="others"
                        />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Area Of Involvement: </label>
                        <select class="form-select" v-model="aoi">
                          <option value="">Please Select</option>
                          <option
                            v-for="area in areaslist"
                            v-bind:key="area.id"
                            v-bind:value="area.id"
                          >
                            {{ area.name }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Screening Done:</label>
                        <select class="form-select" v-model="screening">
                          <option value="">Please Select</option>
                          <option value="1">Yes</option>
                          <option value="0">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="d-flex">
                    <div class="ml-auto" :class="SidebarAccess!=1?'hide1':''">
                      <a @click="Ongeneratepdf" class="btn btn-danger btn-text"
                        ><i class="far fa-file-pdf"></i> Generate PDF</a
                      >
                      <a
                        @click="Ongenerateexel"
                        class="btn btn-success btn-text"
                        ><i class="far fa-file-excel"></i> Generate Excel</a
                      >
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div id="result" class="hide" ref="result" style="background: #fff">
      <div>Total Days: {{ Total_Days }}</div>
      <div>Total Patient: {{ Total_Patient }}</div>

      <table class="total-patient-table">
        <thead>
          <tr>
            <th class="thhead">VOLUNTEER</th>
            <th class="thhead">OUTREACH</th>
            <th class="thhead">NETWORKING</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ Volunteer }}</td>
            <td>{{ Outreach }}</td>
            <td>{{ Networking }}</td>
          </tr>
        </tbody>
      </table>
      <table class="table main-data-table" id="datatable">
        <thead>
          <tr>
            <th class="thhead">No</th>
            <th class="thhead">NAME/EVENT/PROGRAM</th>
            <th class="thhead">Type Of Collaborator</th>
            <th class="thhead">Area Of Involvement</th>
            <th class="thhead">COST</th>
            <th class="thhead">LOCATION</th>
            <th class="thhead">MENTARI CENTRE</th>
            <th class="thhead">OTHERS</th>
            <th class="thhead">SCREENING DONE</th>
            <th class="thhead">NO OF PARTICIPANTS</th>
            <th class="thhead">CONTACT NO</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rp, index) in list" :key="index">
            <td class="tdrow">{{ index + 1 }}</td>
            <td class="tdrow">{{ rp.Name }}</td>
            <td class="tdrow">{{ rp.Type_of_Collaboration }}</td>
            <td class="tdrow">{{ rp.Type_of_Involvement }}</td>
            <td class="tdrow">{{ rp.Cost }}</td>
            <td class="tdrow">{{ rp.Location }}</td>
            <td class="tdrow">{{ rp.Mentari }}</td>
            <td class="tdrow">{{ rp.Others }}</td>
            <td class="tdrow">{{ rp.Screening_Done }}</td>
            <td class="tdrow">{{ rp.No_of_Participants }}</td>
            <td class="tdrow">{{ rp.Contact_Number }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import CommonHeader from '../../../components/CommonHeader.vue';
import CommonSidebar from '../../../components/CommonSidebar.vue';
export default {
  components: { CommonSidebar, CommonHeader },

  name: "activities-report-VON",
  data() {
    return {
      userdetails: null,
      error: null,
      loader: false,
      list: [],
      errorList: [],
      BranchList: [],
      areaslist: [],
      fromDate: "",
      toDate: "",
      toc: 0,
      aoi: 0,
      screening: "2",
      event: "no-event",
      location: "",
      location_value: "",
      others: "",
      Volunteer: 0,
      Outreach: 0,
      Networking: 0,
      Total_Days: 0,
      Total_Patient: 0,
      SidebarAccess:null,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetList();
  },
  methods: {
    async GetList() {
      try {
        this.loader = true;
        const headers = {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response2 = await this.$axios.get("areas-of-involvement/list", {
          headers,
        });
        this.areaslist = response2.data.list;
        const response3 = await this.$axios.get("hospital/branch-list", {
          headers,
        });
        if (response3.data.code == 200 || response3.data.code == "200") {
          this.BranchList = response3.data.list;
        } else {
          this.BranchList = [];
        }

        this.loader = false;
      } catch (e) {
        console.log("my error", e);
      }
    },
    async Ongeneratepdf() {
      try {
        this.errorList = [];
        this.error = null;
        if (!this.fromDate) {
          this.errorList.push("From date is Required!");
        }
        if (!this.toDate) {
          this.errorList.push("To date is Required!");
        }
        if (this.fromDate && this.toDate) {
          if (!this.location_value) {
            this.location_value = this.others;
          }
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "report/activity/von",
            {
              fromDate: this.fromDate,
              toDate: this.toDate,
              toc: this.toc,
              aoi: this.aoi,
              screening: this.screening,
              event: this.event,
              location: this.location,
              location_value: this.location_value,
              report_type: "pdf",
            },
            { headers }
          );
          console.log("my report", response.data);
          if (response.data.code == 200) {
            this.list = response.data.result;
            console.log("my report", response.data);
            if (this.list.length > 0) {
              this.Total_Days = response.data.Total_Days;
              this.Total_Patient = response.data.Total_Patient;
              this.Volunteer = response.data.toiArr.VOLUNTEER;
              this.Outreach = response.data.toiArr.OUTREACH;
              this.Networking = response.data.toiArr.NETWORKING;
              setTimeout(() => {
                this.$refs.result.classList.remove("hide");
                var pdf = new jsPDF("p", "pt", "a4");
                pdf.addHTML($("#result")[0], function () {
                  pdf.save("Report.pdf");
                });
              }, 100);
              setTimeout(() => {
                this.$refs.result.classList.add("hide");
              }, 100);
            } else {
              this.error = "No Record Found";
            }
          } else {
            this.error = "No Record Found";
          }
        }
      } catch (e) {}
    },
    async Ongenerateexel() {
      this.errorList = [];
      this.error = null;
      if (!this.fromDate) {
        this.errorList.push("From date is Required!");
      }
      if (!this.toDate) {
        this.errorList.push("To date is Required!");
      }
      if (this.fromDate && this.toDate) {
        try {
          const headers = {
            Authorization: "Bearer " + this.userdetails.access_token,
            Accept: "application/json",
            "Content-Type": "application/json",
          };
          const response = await this.$axios.post(
            "report/activity/von",
            {
              fromDate: this.fromDate,
              toDate: this.toDate,
              toc: this.toc,
              aoi: this.aoi,
              screening: this.screening,
              event: this.event,
              location: this.location,
              location_value: this.location_value,
              report_type: "excel",
            },
            { headers }
          );
          console.log("my report", response.data);
          if (response.data.code == 200) {
            if (response.data.filepath) {
              window.open(response.data.filepath, "_blank");
            } else {
              this.error = "No Record Found";
            }
          }
        } catch (e) {}
      }
    },
  },
};
</script>
<style scoped>
.total-patient-table {
  width: 50%;

  margin-bottom: 10px;
}
.total-patient-table td[data-v-1b54f771] {
  border: 1px solid #000;
  padding: 0px 20px;
  font-size: 13px;
  font-weight: 600;
}

.patient-inner-table {
  width: 100%;
}
.td-table {
  padding: 0px !important;
}
.patient-inner-table th {
  background: #bbf2eb;
  border-left: 1px solid #000;
  padding: 4px 10px;
  width: 50%;
  text-align: center;
}
.patient-inner-table th:last-child {
  border-right: 0;
}
.patient-inner-table td {
  text-align: center;
  border-bottom: 0px !important;
  border-left: 0px !important;
}
.patient-inner-table td:last-child {
  border-right: 0;
}
div#result {
  padding: 15px;
}
.hide1 {
  background: #fff;
  display: none;
}
</style>