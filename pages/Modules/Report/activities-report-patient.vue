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
              <h1>Activities Report </h1>
            </div>

            <div class="card mb-4">
              <div class="card-header icon-title">
                <a><i class="fad fa-file-chart-line"></i></a>
                <h4>Patient Report</h4>
              </div>
              <div class="card-body">
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
                      <label class="form-label">Appointment Type: </label>
                      <select class="form-select" v-model="appointment_type">
                        <option value="">Please Select</option>
                        <option
                          v-for="serv in servicelist"
                          v-bind:key="serv.id"
                          v-bind:value="serv.id"
                        >
                          {{ serv.service_name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Categories Of Patient: </label>
                      <select class="form-select" v-model="patient_category">
                        <option value="">Please Select</option>
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
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Type Of Referral:</label>
                      <select class="form-select" v-model="referral_type">
                        <option value="">Please Select</option>
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
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Type Of Visit: </label>
                      <select class="form-select" v-model="type_visit">
                        <option value="">Please Select</option>
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
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Gender:</label>
                      <select class="form-select" v-model="gender">
                        <option value="">Please Select</option>
                        <option
                          v-for="rfl in genderlist"
                          v-bind:key="rfl.id"
                          v-bind:value="rfl.id"
                        >
                          {{ rfl.section_value }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Type Of Diagnosis:</label>
                      <select class="form-select" v-model="diagnosis_id">
                        <option value="">Please Select</option>
                        <option
                          v-for="catcode in diagonisislist"
                          v-bind:key="catcode.id"
                          v-bind:value="catcode.id"
                        >
                          {{ catcode.icd_category_code }} {{catcode.icd_category_name}}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- row -->

                <div class="row">
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">Attendance Status:</label>
                      <select class="form-select" v-model="appointment_status">
                        <option value="">Please Select</option>
                        <option value="0">Processing</option>
                        <option value="1">Ready</option>
                        <option value="2">No Show</option>
                        <option value="3">Completed</option>
                      </select>
                    </div>
                  </div>
                </div>
                <!-- row -->
               
                <div  v-if="this.appointment_type == 3" class="supported-employment selected-box ">
                  <div class="form-title">
                    <h4>Supported Employment Program</h4>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Employment Status:</label>
                        <select class="form-select"  v-model="employement_status"> 
                          <option value="">Please Select</option>
                          <option   
                          v-for="stat in employementstatlist"
                          v-bind:key="stat.id"
                          v-bind:value="stat.id"
                          >
                          {{ stat.section_value}}
                        </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Case Manager:</label>
                        <select class="form-select" v-model="case_manager">
                          <option value="">Please Select</option>
                          <option   
                          v-for="listemp in cmanagerlist"
                          v-bind:key="listemp.id"
                          v-bind:value="listemp.id"
                          >
                          {{ listemp.name }}
                        </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">List of Employer: </label>
                        <select class="form-select"  v-model="employer_list"> 
                          <option value="">Please Select</option>
                          <option   
                          v-for="employer in employerlist"
                          v-bind:key="employer.id"
                          v-bind:value="employer.id"
                          >
                          {{ employer.name_of_employer }}
                        </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->
                </div>
                <!-- Hide -->

                <div v-if="this.appointment_type == 4" class="etp selected-box">
                  <div class="form-title">
                    <h4>ETP</h4>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Case Manager:</label>
                        <select class="form-select" v-model="case_manager">
                          <option value="">Please Select</option>
                          <option   
                          v-for="listemp in cmanagerlist"
                          v-bind:key="listemp.id"
                          v-bind:value="listemp.id"
                          >
                          {{ listemp.name }}
                        </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Work Readiness:</label>
                        <select class="form-select" v-model="work_readiness">
                        <option value="">Please Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->
                </div>
                <!-- Hide -->

                <div v-if="this.appointment_type == 5" class="job-club selected-box">
                  <div class="form-title">
                    <h4>Job Club</h4>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Case Manager:</label>
                        <select class="form-select" v-model="case_manager">
                          <option value="">Please Select</option>
                          <option   
                          v-for="listemp in cmanagerlist"
                          v-bind:key="listemp.id"
                          v-bind:value="listemp.id"
                          >
                          {{ listemp.name }}
                        </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Work Readiness:</label>
                        <select class="form-select" v-model="work_readiness">
                        <option value="">Please Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->
                </div>
                <!-- Hide -->

                <div v-if="this.appointment_type == 6" class="cps selected-box">
                  <div class="form-title">
                    <h4>Community Psychiatric Services(CPS)</h4>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Current Intervention:</label>
                        <select class="form-select" v-model="current_intervention">
                          <option value="">Please Select</option>
                          <option   
                          v-for="cintervention in currentinterventionlist"
                          v-bind:key="cintervention.id"
                          v-bind:value="cintervention.id"
                          >
                          {{ cintervention.section_value }}
                        </option>
                        </select>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="mb-3">
                        <label class="form-label">Case Manager:</label>
                        <select class="form-select" v-model="case_manager">
                          <option value="">Please Select</option>
                          <option   
                          v-for="listemp in cmanagerlist"
                          v-bind:key="listemp.id"
                          v-bind:value="listemp.id"
                          >
                          {{ listemp.name }}
                        </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <!-- row -->
                </div>
                <!-- Hide -->

               <Error :message="error" v-if="error" />
               <p v-if="errorList.length">
                          <ul>
                           <li style="color:red"  v-for='err in errorList' :key='err' >
                           {{ err }}
                             </li>
                        </ul>
                       </p>
                <div class="d-flex">
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
                <div>Total Days:  {{ Total_Days }}</div>
                <div>Total Patient:  {{ Total_Patient }}</div>

                <table class="total-patient-table">
                   <thead>
                    <tr>   
                       <th class="thhead">ATTEND</th>
                        <th class="thhead">No SHOW</th> 
                        </tr>
                            </thead>
                  <tbody>
                    <tr>
                      <td>{{Attend}}</td>
                      <td>{{No_Show}}</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table main-data-table" id="datatable">
                  <thead>
                    <tr>
                      <th class="thhead">No</th>
                           <th class="thhead">NAME</th>
                      <th class="thhead">APPOINTMENT TYPE</th>
                      <th class="thhead">TYPE OF Visit</th>
                      <th class="thhead">TYPE OF Refferal</th>
                      <th class="thhead">IC NO</th>
                      <th class="thhead">GENDER</th>
                      <th class="thhead">AGE</th>
                      <th class="thhead">DIAGNOSIS</th>
                      <th class="thhead">MEDICATIONS</th>
                      <th class="thhead">APPOINTMENT NO</th>
                      <th class="thhead">PROCEDURE</th>
                      <th class="thhead">Next Visit</th>
                      <th class="thhead">TIME REGISTERED</th>
                      <th class="thhead">TIME SEEN</th>
                      <th class="thhead">Attendance Status</th>
                      <th class="thhead">Attending Staff</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rp, index) in list" :key="index">
                      <td class="tdrow">{{ index + 1 }}</td>
                      <td class="tdrow">{{ rp.NAME }}</td>
                      <td class="tdrow">{{ rp.APPOINTMENT_TYPE }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Visit }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Refferal }}</td>
                      <td class="tdrow">{{ rp.IC_NO }}</td>
                      <td class="tdrow">{{ rp.GENDER }}</td>
                      <td class="tdrow">{{ rp.AGE }}</td>
                      <td class="tdrow">{{ rp.DIAGNOSIS }}</td>
                      <td class="tdrow">{{ rp.MEDICATIONS }}</td>
                      <td class="tdrow">{{ rp.app_no }}</td>
                      <td class="tdrow">{{ rp.Procedure }}</td>
                      <td class="tdrow">{{ rp.Next_visit }}</td>
                      <td class="tdrow">{{ rp.time_registered }}</td>
                      <td class="tdrow">{{ rp.time_seen }}</td>
                      <td class="tdrow">{{ rp.Attendance_status }}</td>
                      <td class="tdrow">{{ rp.Attending_staff }}</td>    
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
      error: null,
      loader: false,
      list: [],
      errorList: [],
      genderlist: [],
      patientcategorylist: [],
      referallist: [],
      visitlist: [],
      servicelist: [],
      diagonisislist: [],
      employementstatlist: [],
      cmanagerlist: [],
      employerlist: [],
      currentinterventionlist: [],
      fromDate: "",
      toDate: "",
      patient_category: "",
      type_visit: "",
      referral_type: "",
      appointment_status: "",
      appointment_type: "",
      diagnosis_id: "",
      gender: "",
      employement_status: "",
      case_manager: "", //test
      employer_list: "",
      current_intervention: "",
      Total_Days: 0,
      Total_Patient: 0,
      Attend: 0,
      No_Show: 0,
    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.GetList();
    if(this.userdetails){
      this.id=this.userdetails.user.id; //faiz&amir
      this.email=this.userdetails.user.email;//faiz&amir
    }
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
        const response2 = await this.$axios.get(
          "general-setting/list?section=" + "gender",
          { headers }
        );
        if (response2.data.code == 200 || response2.data.code == "200") {
          this.genderlist = response2.data.list;
        }
        const response12 = await this.$axios.get(
          "patient-appointment-category/list",
          { headers }
        );
        if (response12.data.code == 200 || response12.data.code == "200") {
          this.patientcategorylist = response12.data.list;
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
        } else {
          this.referallist = [];
        }
        const response14 = await this.$axios.get(
          "patient-appointment-visit/list",
          { headers }
        );

        if (response14.data.code == 200 || response14.data.code == "200") {
          this.visitlist = response14.data.list;
        } else {
          this.visitlist = [];
        }
        const response15 = await this.$axios.get("service/list", { headers });
        if (response15.data.code == 200 || response15.data.code == "200") {
          this.servicelist = response15.data.list;
        } else {
          this.servicelist = [];
        }
        const response16 = await this.$axios.get("diagnosis/getIcd10codeList", {
          headers,
        });
        if (response16.data.code == 200 || response16.data.code == "200") {
          this.diagonisislist = response16.data.list;
        } else {
          this.diagonisislist = [];
        }
        const response17 = await this.$axios.get(
          "hospital/getServiceByBranchTeamId?email="+ this.email, 
          {headers }
        );
        if (response17.data.code == 200 || response17.data.code == "200") {
          this.cmanagerlist = response17.data.list;
        } else {
          this.cmanagerlist = [];
        }
        const response18 = await this.$axios.get(
          "general-setting/list?section=" + "employment-status",
          { headers }
        );
        if (response18.data.code == 200 || response18.data.code == "200") {
          this.employementstatlist = response18.data.list;
        } else {
          this.employementstatlist = [];
        }    
        const response19 = await this.$axios.get("intervention/job-start-form", {
          headers,
        });
        if (response19.data.code == 200 || response19.data.code == "200") {
          this.employerlist = response19.data.list;
        } else {
          this.employerlist = [];
        }
        const response20 = await this.$axios.get(
          "general-setting/list?section=" + "current-interventionl",
          { headers }
        );
        if (response20.data.code == 200 || response20.data.code == "200") {
          this.currentinterventionlist = response20.data.list;
        } else {
          this.currentinterventionlist = [];
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
        const headers = {
          Authorization: "Bearer " + this.userdetails.access_token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        const response = await this.$axios.post(
          "report/activity/patient",
          {
            fromDate: this.fromDate,
            toDate: this.toDate,
            patient_category: this.patient_category,
            type_visit: this.type_visit,
            referral_type: this.referral_type,
            appointment_status: this.appointment_status,
            appointment_type: this.appointment_type,
            diagnosis_id: this.diagnosis_id,
            gender: this.gender,
            employment_status: this.employement_status,
            case_manager: this.case_manager,
            employer_list: this.employer_list, //test
            current_intervention: this.current_intervention,
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
            this.Attend = response.data.Attend;
            this.No_Show = response.data.No_Show;
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
            "report/activity/patient",
            {
              fromDate: this.fromDate,
              toDate: this.toDate,
              patient_category: this.patient_category,
              type_visit: this.type_visit,
              referral_type: this.referral_type,
              appointment_status: this.appointment_status,
              appointment_type: this.appointment_type,
              diagnosis_id: this.diagnosis_id, 
              gender: this.gender,
              case_manager: this.case_manager,
              employment_status: this.employement_status,
              employer_list: this.employer_list,
              current_intervention: this.current_intervention,
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
.hide {
  background: #fff;
  display: none;
}
</style>