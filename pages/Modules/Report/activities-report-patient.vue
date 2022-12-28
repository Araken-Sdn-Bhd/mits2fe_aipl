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
                      <label class="form-label">Period Of Services<small style="color:red">*</small> :</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="fromDate"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="mb-3">
                      <label class="form-label">To<small style="color:red">*</small> :</label>
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
                      <select class="form-select" v-model="appointment_type" @change="getServiceByBranchTeamId()">
                        <option value="">Please Select</option>
                        <option
                          v-for="serv in servicelist"
                          v-if="serv.service_name != 'Rehabilitation'"
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
                          {{ cat.section_value }}
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
                          {{ vst.section_value }}
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
                        {{ catcode.icd_code }} {{catcode.icd_name}}
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
                        <option value="1">Attended</option>
                        <option value="0">No Show</option>
                        <!-- <option value="0">Processing</option>
                        <option value="1">Ready</option>            !!Need to confirm back with Client!!
                        <option value="2">No Show</option>
                        <option value="3">Completed</option> -->
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
                <div class="btn-width d-flex">
                  <div v-if="this.appointment_type" class="ml-auto"  :class="SidebarAccess!=1?'hide':''">
                    <a @click="Ongeneratepdf" class="btn btn-danger btn-text"
                      ><i class="fa fa-file-pdf"></i> Generate PDF</a>

                      <downloadexcel
                        v-if="this.appointment_type == 1"
                       class="btn btn-success btn-text"
                       :header="header"
                       :before-generate = "startDownload"
                       :before-finish   = "finishDownload"
                       :json_data="ReportList"
                       :fetch = "Ongenerateexel"
                       :fields ="json_fields"
                       :excelname="excelname"
                       :sheetname="sheetname"
                        worksheet="CONSULTATION_CLINIC_REPORT"
                       :name=excelname
                      >
                      <i class="fa fa-file-excel"></i> Generate Excel
                      </downloadexcel>

                      <downloadexcel
                       v-if="this.appointment_type == 3"
                       class="btn btn-success btn-text"
                       :header="header"
                       :before-generate = "startDownload"
                       :before-finish   = "finishDownload"
                       :json_data="ReportList"
                       :fetch = "Ongenerateexel"
                       :fields ="json_fieldsSE"
                       :excelname="excelname"
                       :sheetname="sheetname"
                        worksheet="SE_REPORT"
                       :name=excelname
                      >
                      <i class="fa fa-file-excel"></i> Generate Excel
                      </downloadexcel>

                      <downloadexcel
                       v-if="this.appointment_type == 4"
                       class="btn btn-success btn-text"
                       :header="header"
                       :before-generate = "startDownload"
                       :before-finish   = "finishDownload"
                       :json_data="ReportList"
                       :fetch = "Ongenerateexel"
                       :fields ="json_fieldsETP"
                       :excelname="excelname"
                       :sheetname="sheetname"
                        worksheet="ETP_REPORT"
                       :name=excelname
                      ><i class="fa fa-file-excel"></i> Generate Excel
                      </downloadexcel>

                      <downloadexcel
                       v-if="this.appointment_type == 5"
                       class="btn btn-success btn-text"
                       :header="header"
                       :before-generate = "startDownload"
                       :before-finish   = "finishDownload"
                       :json_data="ReportList"
                       :fetch = "Ongenerateexel"
                       :fields ="json_fieldsJC"
                       :excelname="excelname"
                       :sheetname="sheetname"
                        worksheet="JOB_CLUB_REPORT"
                       :name=excelname
                      ><i class="fa fa-file-excel"></i> Generate Excel
                      </downloadexcel>

                      <downloadexcel
                       v-if="this.appointment_type == 6"
                       class="btn btn-success btn-text"
                       :header="header"
                       :before-generate = "startDownload"
                       :before-finish   = "finishDownload"
                       :json_data="ReportList"
                       :fetch = "Ongenerateexel"
                       :fields ="json_fieldsCPS"
                       :excelname="excelname"
                       :sheetname="sheetname"
                        worksheet="CPS_REPORT"
                       :name=excelname
                      >
                      <i class="fa fa-file-excel"></i> Generate Excel
                      </downloadexcel>

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
                v-if="this.appointment_type == 1"
              >
                <h3>REPORT OF CONSULTATION CLINIC</h3><br>
                <div><b>Total Days:</b>  {{ Total_DaysPDF }}</div>
                <div><b>Total Patients:</b>  {{ Total_PatientsPDF }}</div>

                <table class="table main-data-tabl" id="datatable">
                   <thead>
                    <tr>
                       <th class="thhead">ATTEND</th>
                        <th class="thhead">NO SHOW</th>
                        </tr>
                            </thead>
                  <tbody>
                    <tr>
                      <td class="tdrow">{{Attend}}</td>
                      <td class="tdrow">{{No_Show}}</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table main-data-tabl" id="datatable">
                  <thead>
                    <tr>
                      <th class="thhead">No</th>
                           <th class="thhead">NAME</th>
                      <th class="thhead">APPOINTMENT TYPE</th>
                      <th class="thhead">TYPE OF VISIT</th>
                      <th class="thhead">TYPE OF REFERRAL</th>
                      <th class="thhead">IC NO</th>
                      <th class="thhead">GENDER</th>
                      <th class="thhead">AGE</th>
                      <th class="thhead">DIAGNOSIS</th>
                      <th class="thhead">MEDICATIONS</th>
                      <th class="thhead">APPOINTMENT NO</th>
                      <th class="thhead">PROCEDURE</th>
                      <th class="thhead">NEXT VISIT</th>
                      <th class="thhead">TIME REGISTERED</th>
                      <th class="thhead">TIME SEEN</th>
                      <th class="thhead">ATTENDANCE STATUS</th>
                      <th class="thhead">ATTENDING DOCTOR/ STAFF</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rp, index) in list" :key="index">
                      <td class="tdrow">{{ index + 1 }}</td>
                      <td class="tdrow">{{ rp.Name }}</td>
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
     <div
                id="result"
                class="hide"
                ref="result"
                style="background: #fff"
                v-if="this.appointment_type == 3"
              >
                <h3>REPORT OF SUPPORTED EMPLOYMENT</h3><br>
                <div><b>Total Days:</b>  {{ Total_DaysPDF }}</div>
                <div><b>Total Patient:</b>  {{ Total_PatientsPDF }}</div>

                <table class="table main-data-tabl" id="datatable">
                   <thead>
                    <tr>
                       <th class="thhead">ATTEND</th>
                        <th class="thhead">NO SHOW</th>
                        </tr>
                            </thead>
                  <tbody>
                    <tr>
                      <td class="tdrow">{{Attend}}</td>
                      <td class="tdrow">{{No_Show}}</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table main-data-tabl" id="datatable">
                  <thead>
                    <tr>
                      <th class="thhead">No</th>
                      <th class="thhead">NAME</th>
                      <th class="thhead">APPOINTMENT TYPE</th>
                      <th class="thhead">TYPE OF VISIT</th>
                      <th class="thhead">TYPE OF REFERRAL</th>
                      <th class="thhead">IC NO</th>
                      <th class="thhead">GENDER</th>
                      <th class="thhead">AGE</th>
                      <th class="thhead">DIAGNOSIS</th>
                      <th class="thhead">MEDICATIONS</th>
                      <th class="thhead">APPOINTMENT NO</th>
                      <th class="thhead">NO. OF JOB SEARCH</th>
                      <th class="thhead">NO. OF JOB VISIT</th>
                      <th class="thhead">EMPLOYMENT STATUS</th>
                      <th class="thhead">EMPLOYER</th>
                      <th class="thhead">DATE OF EMPLOYMENT</th>
                      <th class="thhead">EMPLOYER CONTACT</th>
                      <th class="thhead">ATTENDANCE STATUS</th>
                      <th class="thhead">ATTENDING DOCTOR/STAFF</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rp, index) in list" :key="index">
                      <td class="tdrow">{{ index + 1 }}</td>
                      <td class="tdrow">{{ rp.Name }}</td>
                      <td class="tdrow">{{ rp.APPOINTMENT_TYPE }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Visit }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Refferal }}</td>
                      <td class="tdrow">{{ rp.IC_NO }}</td>
                      <td class="tdrow">{{ rp.GENDER }}</td>
                      <td class="tdrow">{{ rp.AGE }}</td>
                      <td class="tdrow">{{ rp.DIAGNOSIS }}</td>
                      <td class="tdrow">{{ rp.MEDICATIONS }}</td>
                      <td class="tdrow">{{ rp.app_no_se }}</td>
                      <td class="tdrow">{{ rp.no_job_search }}</td>
                      <td class="tdrow">{{ rp.no_job_visit }}</td>
                      <td class="tdrow">{{ rp.EMPSTATUS }}</td>
                      <td class="tdrow">{{ rp.EMPLOYER }}</td>
                      <td class="tdrow">{{ rp.JOBSTARTDATE }}</td>
                      <td class="tdrow">{{ rp.ADDRESS }}</td>
                      <td class="tdrow">{{ rp.Attendance_status }}</td>
                      <td class="tdrow">{{ rp.Attending_staff }}</td>
                    </tr>
                  </tbody>
                </table>
     </div>
     <div
                id="result"
                class="hide"
                ref="result"
                style="background: #fff"
                v-if="this.appointment_type == 4"
              >
                <h3>REPORT OF ETP</h3><br>
                <div><b>Total Days:</b>  {{ Total_DaysPDF }}</div>
                <div><b>Total Patient:</b>  {{ Total_PatientsPDF }}</div>

                <table class="table main-data-tabl" id="datatable">
                   <thead>
                    <tr>
                       <th class="thhead">ATTEND</th>
                        <th class="thhead">NO SHOW</th>
                        </tr>
                            </thead>
                  <tbody>
                    <tr>
                      <td class="tdrow">{{Attend}}</td>
                      <td class="tdrow">{{No_Show}}</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table main-data-tabl" id="datatable">
                  <thead>
                    <tr>
                      <th class="thhead">No</th>
                      <th class="thhead">NAME</th>
                      <th class="thhead">APPOINTMENT TYPE</th>
                      <th class="thhead">TYPE OF VISIT</th>
                      <th class="thhead">TYPE OF REFERRAL</th>
                      <th class="thhead">IC NO</th>
                      <th class="thhead">GENDER</th>
                      <th class="thhead">AGE</th>
                      <th class="thhead">DIAGNOSIS</th>
                      <th class="thhead">MEDICATIONS</th>
                      <th class="thhead">APPOINTMENT NO</th>
                      <th class="thhead">WORK READINESS</th>
                      <th class="thhead">NEXT VISIT</th>
                      <th class="thhead">ATTENDANCE STATUS</th>
                      <th class="thhead">ATTENDING DOCTOR/ STAFF</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rp, index) in list" :key="index">
                      <td class="tdrow">{{ index + 1 }}</td>
                      <td class="tdrow">{{ rp.Name }}</td>
                      <td class="tdrow">{{ rp.APPOINTMENT_TYPE }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Visit }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Refferal }}</td>
                      <td class="tdrow">{{ rp.IC_NO }}</td>
                      <td class="tdrow">{{ rp.GENDER }}</td>
                      <td class="tdrow">{{ rp.AGE }}</td>
                      <td class="tdrow">{{ rp.DIAGNOSIS }}</td>
                      <td class="tdrow">{{ rp.MEDICATIONS }}</td>
                      <td class="tdrow">{{ rp.app_no_etp }}</td>
                      <td class="tdrow">{{ rp.WORKREADY }}</td>
                      <td class="tdrow">{{ rp.Next_visit }}</td>
                      <td class="tdrow">{{ rp.Attendance_status }}</td>
                      <td class="tdrow">{{ rp.Attending_staff }}</td>
                    </tr>
                  </tbody>
                </table>
     </div>
     <div
                id="result"
                class="hide"
                ref="result"
                style="background: #fff"
                v-if="this.appointment_type == 5"
              >
                <h3>REPORT OF JOB CLUB</h3><br>
                <div><b>Total Days:</b>  {{ Total_DaysPDF }}</div>
                <div><b>Total Patient:</b>  {{ Total_PatientsPDF }}</div>

                <table class="table main-data-tabl" id="datatable">
                   <thead>
                    <tr>
                       <th class="thhead">ATTEND</th>
                        <th class="thhead">NO SHOW</th>
                        </tr>
                            </thead>
                  <tbody>
                    <tr>
                      <td class="tdrow">{{Attend}}</td>
                      <td class="tdrow">{{No_Show}}</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table main-data-tabl" id="datatable">
                  <thead>
                    <tr>
                      <th class="thhead">No</th>
                      <th class="thhead">NAME</th>
                      <th class="thhead">APPOINTMENT TYPE</th>
                      <th class="thhead">TYPE OF VISIT</th>
                      <th class="thhead">TYPE OF REFERRAL</th>
                      <th class="thhead">IC NO</th>
                      <th class="thhead">GENDER</th>
                      <th class="thhead">AGE</th>
                      <th class="thhead">DIAGNOSIS</th>
                      <th class="thhead">MEDICATIONS</th>
                      <th class="thhead">APPOINTMENT NO</th>
                      <th class="thhead">WORK READINESS</th>
                      <th class="thhead">NEXT VISIT</th>
                      <th class="thhead">ATTENDANCE STATUS</th>
                      <th class="thhead">ATTENDING DOCTOR/ STAFF</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rp, index) in list" :key="index">
                      <td class="tdrow">{{ index + 1 }}</td>
                      <td class="tdrow">{{ rp.Name }}</td>
                      <td class="tdrow">{{ rp.APPOINTMENT_TYPE }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Visit }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Refferal }}</td>
                      <td class="tdrow">{{ rp.IC_NO }}</td>
                      <td class="tdrow">{{ rp.GENDER }}</td>
                      <td class="tdrow">{{ rp.AGE }}</td>
                      <td class="tdrow">{{ rp.DIAGNOSIS }}</td>
                      <td class="tdrow">{{ rp.MEDICATIONS }}</td>
                      <td class="tdrow">{{ rp.app_no_jc }}</td>
                      <td class="tdrow">{{ rp.WORKREADY }}</td>
                      <td class="tdrow">{{ rp.Next_visit }}</td>
                      <td class="tdrow">{{ rp.Attendance_status }}</td>
                      <td class="tdrow">{{ rp.Attending_staff }}</td>
                    </tr>
                  </tbody>
                </table>
     </div>
     <div
                id="result"
                class="hide"
                ref="result"
                style="background: #fff"
                v-if="this.appointment_type == 6"
              >
                <h3>REPORT OF CPS</h3><br>
                <div><b>Total Days:</b>  {{ Total_DaysPDF }}</div>
                <div><b>Total Patient:</b>  {{ Total_PatientsPDF }}</div>

                <table class="table main-data-tabl" id="datatable">
                   <thead>
                    <tr>
                       <th class="thhead">ATTEND</th>
                        <th class="thhead">NO SHOW</th>
                        </tr>
                            </thead>
                  <tbody>
                    <tr>
                      <td class="tdrow">{{Attend}}</td>
                      <td class="tdrow">{{No_Show}}</td>
                    </tr>
                  </tbody>
                </table>
                <table class="table main-data-tabl" id="datatable">
                  <thead>
                    <tr>
                      <th class="thhead">No</th>
                      <th class="thhead">NAME</th>
                      <th class="thhead">APPOINTMENT TYPE</th>
                      <th class="thhead">TYPE OF VISIT</th>
                      <th class="thhead">TYPE OF REFERRAL</th>
                      <th class="thhead">IC NO</th>
                      <th class="thhead">GENDER</th>
                      <th class="thhead">AGE</th>
                      <th class="thhead">DIAGNOSIS</th>
                      <th class="thhead">MEDICATIONS</th>
                      <th class="thhead">APPOINTMENT NO</th>
                      <th class="thhead">CURRENT INTERVENTION</th>
                      <th class="thhead">NEXT VISIT</th>
                      <th class="thhead">ATTENDANCE STATUS</th>
                      <th class="thhead">ATTENDING DOCTOR/ STAFF</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rp, index) in list" :key="index">
                      <td class="tdrow">{{ index + 1 }}</td>
                      <td class="tdrow">{{ rp.Name }}</td>
                      <td class="tdrow">{{ rp.APPOINTMENT_TYPE }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Visit }}</td>
                      <td class="tdrow">{{ rp.TYPE_OF_Refferal }}</td>
                      <td class="tdrow">{{ rp.IC_NO }}</td>
                      <td class="tdrow">{{ rp.GENDER }}</td>
                      <td class="tdrow">{{ rp.AGE }}</td>
                      <td class="tdrow">{{ rp.DIAGNOSIS }}</td>
                      <td class="tdrow">{{ rp.MEDICATIONS }}</td>
                      <td class="tdrow">{{ rp.app_no_cps }}</td>
                      <td class="tdrow">{{ rp.CURRENTINTERV}}</td>
                      <td class="tdrow">{{ rp.Next_visit }}</td>
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
import Vue from "vue";
import downloadexcel from "vue-json-excel";
import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);
export default {
  components: { CommonSidebar, CommonHeader },

  name: "App",
  components: {
    downloadexcel,
  },
  name: "sharp",
  data() {
    return {

      json_fields: {
        "NO":'No',
        "NAME" : 'Name',
        "APPOINTMENT_TYPE" :"APPOINTMENT_TYPE",
        "TYPE OF VISIT": "TYPE_OF_Visit",
        "TYPE OF REFERRAL" :"TYPE_OF_Refferal",
        "IC NO": "IC_NO",
        "GENDER": "GENDER",
        "AGE": "AGE",
        "DIAGNOSIS" : "DIAGNOSIS",
        "MEDICATIONS" : "MEDICATIONS",
        "APPOINTMENT NO" :"app_no",
        "PROCEDURE":"Procedure",
        "NEXT VISIT":"Next_visit",
        "TIME REGISTERED" :"time_registered",
        "TIME SEEN":"time_seen",
        "ATTENDANCE STATUS":"Attendance_status",
        "ATTENDING DOCTOR/STAFF":"Attending_staff",
      },
      json_fieldsSE: {
        "NO":'No',
        "NAME" : 'Name',
        "APPOINTMENT_TYPE" :"APPOINTMENT_TYPE",
        "TYPE OF VISIT": "TYPE_OF_Visit",
        "TYPE OF REFERRAL" :"TYPE_OF_Refferal",
        "IC NO": "IC_NO",
        "GENDER": "GENDER",
        "AGE": "AGE",
        "DIAGNOSIS" : "DIAGNOSIS",
        "MEDICATIONS" : "MEDICATIONS",
        "APPOINTMENT NO" :"app_no_se",
        "NO. OF JOB SEARCH":"no_job_search",
        "NO. OF JOB VISIT":"no_job_visit",
        "EMPLOYMENT STATUS" :"EMPSTATUS",
        "EMPLOYER":"EMPLOYER",
        "DATE OF EMPLOYMENT":"JOBSTARTDATE",
        "EMPLOYER CONTACT":"ADDRESS",
        "ATTENDANCE STATUS":"Attendance_status",
        "ATTENDING DOCTOR/STAFF":"Attending_staff",
      },
      json_fieldsETP: {
        "NO":'No',
        "NAME" : 'Name',
        "APPOINTMENT_TYPE" :"APPOINTMENT_TYPE",
        "TYPE OF VISIT": "TYPE_OF_Visit",
        "TYPE OF REFERRAL" :"TYPE_OF_Refferal",
        "IC NO": "IC_NO",
        "GENDER": "GENDER",
        "AGE": "AGE",
        "DIAGNOSIS" : "DIAGNOSIS",
        "MEDICATIONS" : "MEDICATIONS",
        "APPOINTMENT NO" :"app_no_etp",
        "WORK READINESS" :"WORKREADY",
        "NEXT VISIT":"Next_visit",
        "ATTENDANCE STATUS":"Attendance_status",
        "ATTENDING DOCTOR/STAFF":"Attending_staff",
      },
      json_fieldsJC: {
        "NO":'No',
        "NAME" : 'Name',
        "APPOINTMENT_TYPE" :"APPOINTMENT_TYPE",
        "TYPE OF VISIT": "TYPE_OF_Visit",
        "TYPE OF REFERRAL" :"TYPE_OF_Refferal",
        "IC NO": "IC_NO",
        "GENDER": "GENDER",
        "AGE": "AGE",
        "DIAGNOSIS" : "DIAGNOSIS",
        "MEDICATIONS" : "MEDICATIONS",
        "APPOINTMENT NO" :"app_no_jc",
        "WORK READINESS" :"WORKREADY",
        "NEXT VISIT":"Next_visit",
        "ATTENDANCE STATUS":"Attendance_status",
        "ATTENDING DOCTOR/STAFF":"Attending_staff",
      },
      json_fieldsCPS: {
        "NO":'No',
        "NAME" : 'Name',
        "APPOINTMENT_TYPE" :"APPOINTMENT_TYPE",
        "TYPE OF VISIT": "TYPE_OF_Visit",
        "CURRENT INTERVENTION" :"CURRENTINTERV",
        "IC NO": "IC_NO",
        "GENDER": "GENDER",
        "AGE": "AGE",
        "DIAGNOSIS" : "DIAGNOSIS",
        "MEDICATIONS" : "MEDICATIONS",
        "APPOINTMENT NO" :"app_no_cps",
        "CONTACT NO" :"CONTACT",
        "NEXT VISIT":"Next_visit",
        "ATTENDANCE STATUS":"Attendance_status",
        "ATTENDING DOCTOR/STAFF":"Attending_staff",
      },
      excelname: "",
      sheetname: "PATIENT ACTIVITY",
      header:"",

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
      Total_DaysPDF: 0,
      Total_PatientsPDF: 0,
      Attend: 0,
      No_Show: 0,
      filepath:'',
      SidebarAccess:null,
      ReportList:[],
      No:0,


    };
  },
  beforeMount() {
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.SidebarAccess = JSON.parse(localStorage.getItem("SidebarAccess"));
    this.GetList();
    if(this.userdetails){
      this.id=this.userdetails.user.id; //faiz&amir
      this.email=this.userdetails.user.email;//faiz&amir
    }
  },
  methods: {
    async getServiceByBranchTeamId(){
      const headers = {
          Authorization: "Bearer " + this.token,
          Accept: "application/json",
          "Content-Type": "application/json",
        };
      const response17 = await this.$axios.get(
          "hospital/getServiceByBranchTeamId",
          {headers, params: {email: this.email, appointment_type: this.appointment_type} }
        );
        if (response17.data.code == 200 || response17.data.code == "200") {
          this.cmanagerlist = response17.data.list;
        } else {
          this.cmanagerlist = [];
        }
    },
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
          "general-setting/list?section=" + "patient-category",
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
          "general-setting/list?section=" +"type-of-visit",
          { headers }
        );

        if (response14.data.code == 200 || response14.data.code == "200") {
          this.visitlist = response14.data.list;
        } else {
          this.visitlist = [];
        }
        const response15 = await this.$axios.get("service/servicelist",
        {headers, params: {email: this.email} });
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
        this.loader=true;
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
            email: this.userdetails.user.email,
            branch_id: this.userdetails.branch.branch_id,
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
            this.Total_DaysPDF = response.data.Total_DaysPDF;
            this.Total_PatientsPDF = response.data.Total_PatientsPDF;
            this.Attend = response.data.Attend;
            this.No_Show = response.data.No_Show;
            setTimeout(() => {
              this.$refs.result.classList.remove("hide");
              var pdf = new jsPDF("l", "pt", "a4");
              pdf.internal.scaleFactor =2;
              var options = {pagesplit: true};

              pdf.addHTML($("#result")[0],options, function () {
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
        this.loader=false;
      }
      } catch (e) {
        console.log("my error", e);
      }
    },
    startDownload(){
        this.errorList = [];
        this.error = null;
        if (!this.fromDate) {
          this.errorList.push("From date is Required!");
        }
        if (!this.toDate) {
          this.errorList.push("To date is Required!");
        }
        if (this.fromDate && this.toDate) {
          this.loader=true;
        }
    },
    finishDownload(){
      if (this.fromDate && this.toDate) {
        this.loader=false;
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
              email: this.userdetails.user.email,
              branch_id: this.userdetails.branch.branch_id,
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
          )

          console.log("my report", response.data);
          if (response.data.code == 200) {
            if (response.data) {

              this.ReportList = response.data.result;
              this.excelname = response.data.filename;
              this.header = response.data.header;
              return response.data.result;

            } else {
              this.error = "No Record Found";
            }
          }
        } catch (e) {
        this.loader = false;
        this.$swal.fire({
                  icon: 'error',
                  title: 'Oops... Something Went Wrong!',
                  text: 'the error is: ' + e,
                  footer: ''
                });
      }
      }
    },
  },
};
</script>
<style scoped>
.tdrow {
  padding: 5px 5px;
  border: 1px solid #000;
  font-size: 10.0px;
  font-weight: 600;
  }
.tdrow-num{
  padding: 5px 5px;
  border: 1px solid #000;
  font-size: 12.0px;
  font-weight: 600;
}
  .tdrow-limit {
  padding: 5px 5px;
  border: 1px solid #000;
  font-size: 12.0px;
  font-weight: 600;
  word-wrap:break-word;
  max-width:70px;

  }
  .tdrow-limit-diagnosis{
    padding: 5px 5px;
  border: 1px solid #000;
  font-size: 12.0px;
  font-weight: 600;
  word-wrap:break-word;
  max-width:80px;

  }
  .tdrow-occu-sector {
  padding: 5px 5px;
  border: 1px solid #000;
  font-size: 12.0px;
  font-weight: 600;
  word-wrap:break-word;
  max-width:80px;

  }
.thhead {
  background: #bbf2eb;
  padding: 5px 5px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 12.0px;
  line-height: normal;
}
.thhead-occu-sector{
  background: #bbf2eb;
  padding: 5px 5px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 12.0px;
  max-width:80px;
  line-height: normal;

}
.table {
  border: 1px solid rgb(0, 0, 0);
  width:fit-content;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;

}
.tabhead {
  background: #ddd;
  padding: 5px 5px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-size: 6.5px;
}
.tabtd {
  padding: 5px 5px;
  border: 1px solid #000;
  font-size: 12.0px;
  font-weight: 600;
}
.hide1 {
  background: #fff;
  display: none;
}
div#result {
  padding: 5px;

}
</style>
