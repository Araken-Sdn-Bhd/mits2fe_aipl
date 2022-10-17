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
            <h1>Workload Report</h1>
          </div>

          <div class="card mb-4">
            <div class="card-header icon-title">
              <a href="#"><i class="fad fa-file-chart-line"></i></a>
              <h4>Total Patient & Type of Referral</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Period Of Services:</label>
                    <input
                      type="date"
                      v-model="fromDate"
                      class="form-control"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">To:</label>
                    <input type="date" v-model="toDate" class="form-control" />
                  </div>
                </div>
              </div>
              <!-- row -->
              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Categories Of Patient:</label>
                    <select class="form-select" v-model="patient_category">
                      <option value="0">Please Select</option>
                      <option
                        v-for="cat in patientcategorylist"
                        v-bind:key="cat.id"
                        v-bind:value="cat.id"
                      >
                        {{ cat.appointment_category_name }}
                      </option>
                    </select>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Type of Referral:</label>
                    <select class="form-select" v-model="referral_type">
                      <option value="0">Please Select</option>
                      <option
                        v-for="rfl in referallist"
                        v-bind:key="rfl.id"
                        v-bind:value="rfl.id"
                      >
                        {{ rfl.section_value }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- row -->

              <div class="row">
                <div class="col-sm-6">
                  <div class="mb-3">
                    <label class="form-label">Type Of Visit:</label>
                    <select class="form-select" v-model="type_visit">
                      <option value="0">Please Select</option>
                      <option
                        v-for="vst in visitlist"
                        v-bind:key="vst.id"
                        v-bind:value="vst.id"
                      >
                        {{ vst.appointment_visit_name }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- row -->
              </div>
<Error :message="error" v-if="error" />
               <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
              <div class="d-flex" v-if="SidebarAccess==1">
                <div class="ml-auto">
                  <a @click="Ongeneratepdf" class="btn btn-danger btn-text"
                    ><i class="far fa-file-pdf"></i> Generate PDF</a
                  >
                  <a @click="Ongenerateexel" class="btn btn-success btn-text"
                    ><i class="far fa-file-excel"></i> Generate Excel</a
                  >
                </div>
              </div>
           
             
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
   <div
                id="result"
                class="hide"
                ref="result"
                style="background: #fff"
              >
                <div>Total Days:{{ Total_Days }}</div>
                <div>Total Patient:{{ Total_Patient }}</div>

                <table class="total-patient-table">
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>CATEGORY OF PATIENTS</td>
                      <td  class="td-table">
                        <table class="patient-inner-table">
                            <thead>
                              <tr>
                                <th>OUTPATIENT</th>
                                <th>DAYCARE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-if="Category_Patient">
                                <td class="bottom-border-0">  {{ Category_Patient.Outpatient }}</td>
                                <td class="bottom-border-0">{{ Category_Patient.Daycare }}</td>
                              </tr>
                            </tbody>
                          </table>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Type of Visit</td>
                      <td  class="td-table">
                        <table class="patient-inner-table">
                            <thead>
                              <tr>
                                <th>NEW</th>
                                <th>FOLLOWUP</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-if="Visit_Type">
                                <td class="bottom-border-0">{{ Visit_Type.New }}</td>
                                <td class="bottom-border-0">0</td>
                              </tr>
                            </tbody>
                          </table>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Type of Referral</td>
                      <td class="td-table">
                        <table class="patient-inner-table">
                            <thead>
                              <tr>
                                <th>WALK-IN</th>
                                <th>REFERRAL</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-if="Referal_walk">
                                <td >0</td>
                                <td>{{ Referal_walk.Refferal }}</td>
                              </tr>
                            </tbody>
                          </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table main-data-table" id="datatable">
                  <thead>
                    <tr>
                      <th class="thhead">No</th>
                      <th class="thhead">Date</th>
                      <th class="thhead">Time</th>
                      <th class="thhead">NRIC/Passport</th>
                      <th class="thhead">Name</th>
                      <th class="thhead">Address</th>
                      <th class="thhead">City</th>
                      <th class="thhead">State</th>
                      <th class="thhead">PostCode</th>
                      <th class="thhead">Phone Number</th>
                      <th class="thhead">Date of Birth</th>
                      <th class="thhead">Categories of Patient</th>
                      <th class="thhead">Type of Referral</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rp, index) in list" :key="index">
                      <td class="tdrow">{{ index + 1 }}</td>
                      <td class="tdrow">{{ rp.DATE }}</td>
                      <td class="tdrow">{{ rp.TIME }}</td>
                      <td class="tdrow">{{ rp.NRIC_NO_PASSPORT_NO }}</td>
                      <td class="tdrow">{{ rp.Name }}</td>
                      <td class="tdrow">{{ rp.ADDRESS }}</td>
                      <td class="tdrow">{{ rp.CITY }}</td>
                      <td class="tdrow">{{ rp.STATE }}</td>
                      <td class="tdrow">{{ rp.POSTCODE }}</td>
                      <td class="tdrow">{{ rp.PHONE_NUMBER }}</td>
                      <td class="tdrow">{{ rp.DATE_OF_BIRTH }}</td>
                      <td class="tdrow">{{ rp.CATEGORY_OF_PATIENTS }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Refferal }}</td>
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

  name: "sharp",
  data() {
    return {
      userdetails: null,
      loader: false,
      error: null,
      Referal_walk: null,
      Visit_Type: null,
      Category_Patient: null,
      errorList: [],
      list: [],
      patientcategorylist: [],
      referallist: [],
      visitlist: [],
      fromDate: "",
      toDate: "",
      patient_category: 0,
      type_visit: 0,
      referral_type: 0,
      Total_Patient: 0,
      Total_Days: 0,
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
        const response12 = await this.$axios.get(
          "patient-appointment-category/list",
          { headers }
        );
        if (response12.data.code == 200 || response12.data.code == "200") {
          this.patientcategorylist = response12.data.list;
          console.log("my patientcategorylist", this.patientcategorylist);
        } else {
          this.patientcategorylist = [];
        }

        const response13 = await this.$axios.get(
          "general-setting/list?section=" + "type-of-referral",
          {
            headers,
          }
        );
        if (response13.data.code == 200 || response13.data.code == "200") {
          this.referallist = response13.data.list;
          console.log("my referallist", this.referallist);
        } else {
          this.referallist = [];
        }

        const response14 = await this.$axios.get(
          "patient-appointment-visit/list",
          { headers }
        );

        if (response14.data.code == 200 || response14.data.code == "200") {
          this.visitlist = response14.data.list;
          console.log("my visitlist", this.visitlist);
        } else {
          this.visitlist = [];
        }
        this.loader = false;
      } catch (e) {
        console.log("my error", e);
      }
    },
    async Ongeneratepdf() {
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
            "report/total-patient-type-refferal",
            {
              fromDate: this.fromDate,
              toDate: this.toDate,
              patient_category: this.patient_category,
              type_visit: this.type_visit,
              referral_type: this.referral_type,
               report_type: "pdf",
            },
            { headers }
          );
          console.log("my report", response.data);
          if (response.data.code == 200) {
            this.list = response.data.result;
            if (this.list.length > 0) {
              this.Referal_walk = response.data.Referal_walk;
              this.Visit_Type = response.data.Visit_Type;
              this.Category_Patient = response.data.Category_Patient;
              this.Total_Days = response.data.Total_Days;
              this.Total_Patient = response.data.Total_Patient;
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
        } catch (e) {}
      }
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
            "report/total-patient-type-refferal",
            {
              fromDate: this.fromDate,
              toDate: this.toDate,
              patient_category: this.patient_category,
              type_visit: this.type_visit,
              referral_type: this.referral_type,
               report_type: "excel",
            },
            { headers }
          );
          console.log("my report", response.data);
          if (response.data.code == 200) {
            if (response.data.filepath) {
              //  let route = this.$router.resolve({ path: response.data.filepath });
              window.open(response.data.filepath, "_blank");
            } else {
              this.error = "No Record Found";
            }
          } else {
            this.error = "No Record Found";
          }
        } catch (e) {}
      }
    },

    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      return date;
    },
  },
};
</script>
<style scoped>
.hide {
  background: #fff;
  display: none;
}

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
  padding: 35px;
}
</style>